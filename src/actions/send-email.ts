'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const contactFormSchema = z.object({
    name: z.string().trim().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
    email: z.string().trim().email({ message: 'Por favor, introduce un email válido' }),
    message: z.string().trim().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' }),
    // Validamos que el valor sea exactamente 'on'.
    // Si es null, undefined o cualquier otro valor, saltará este mensaje.
    privacyPolicy: z.literal('on', {
        message: 'Debes aceptar la política de privacidad para continuar.'
    }),
});

export type FormState = {
    success?: boolean;
    error?: string;
    fieldErrors?: {
        name?: string[];
        email?: string[];
        message?: string[];
        privacyPolicy?: string[];
    };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
    // Verificación de seguridad (CLOUDFARE TURNSTILE)
    const token = formData.get('cf-turnstile-response') as string;

    if (!token) {
        return { error: 'Falta la verificación de seguridad' };
    }

    try {
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY,
                response: token,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            return { error: 'Error de verificación de seguridad. ¿Eres un robot?' };
        }
    } catch (err) {
        console.error('Error verificando Turnstile:', err);
        return { error: 'Error al verificar la seguridad.' };
    }

    // Validación de datos (ZOD)
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        privacyPolicy: formData.get('privacy-policy'),
    });

    if (!validatedFields.success) {
        return {
            error: 'Datos inválidos. Revisa el formulario.',
            fieldErrors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, message } = validatedFields.data;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!toEmail) throw new Error("Configuración de correo faltante");

    // Plantilla HTML para el correo
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Nuevo contacto desde el Portafolio</h2>
        <p><strong>De:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
        <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="font-size: 12px; color: #888;">
          ✅ Consentimiento legal aceptado (IP verificado vía Turnstile).
        </p>
      </div>
    `;

    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: toEmail,
            subject: `Nuevo mensaje de ${name} desde el Portafolio`,
            replyTo: email,
            text: `CONSENTIMIENTO LEGAL ACEPTADO\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
            html: emailHtml,
        });

        return { success: true };
    } catch (error) {
        console.error('Error enviando email:', error);
        return { error: 'Error al enviar el mensaje. Inténtalo más tarde.' };
    }
}