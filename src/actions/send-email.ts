'use server';

import { Resend } from 'resend';
import { z } from 'zod';

// Esquema de validación con Zod
const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
    email: z.string().email({ message: 'Por favor, introduce un email válido' }),
    message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' }),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {

    // Verificación de seguridad (CLOUDFARE TURNSTILE)
    const token = formData.get('cf-turnstile-response') as string;

    if (!token) {
        return { error: 'Falta la verificación de seguridad' };
    }

    try {
        // Llamada a la API de Cloudflare para verificar que el token es real
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
    });

    // Si la validación falla, devolvemos los errores al frontend
    if (!validatedFields.success) {
        return {
            error: 'Datos inválidos. Revisa el formulario.',
            fieldErrors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, message } = validatedFields.data;

    // Envío del email (RESEND)
    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'agomezbarcia@gmail.com',
            subject: `Nuevo mensaje de ${name} desde el Portafolio`,
            replyTo: email,
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        });

        return { success: true };
    } catch (error) {
        console.error('Error enviando email:', error);
        return { error: 'Error al enviar el mensaje. Inténtalo más tarde.' };
    }
}