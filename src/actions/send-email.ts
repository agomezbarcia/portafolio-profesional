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
    // Validación de los datos que llegan del formulario
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

    try {
        // Enviamos el email usando Resend
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'agomezbarcia@gmail.com',
            subject: `Nuevo mensaje de ${name} desde el Portafolio`,
            replyTo: email,
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        });

        return { success: true };
    } catch (error) {
        return { error: 'Error al enviar el mensaje. Inténtalo más tarde.' };
    }
}