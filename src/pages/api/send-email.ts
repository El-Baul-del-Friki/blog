// src/pages/api/send-email.ts
export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const emailFrom = import.meta.env.EMAIL_FROM;
const emailTo = import.meta.env.EMAIL_TO;

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json();
		console.log(data);
		const { nombre, apellido, email, message, subject } = data; // Ajusta según los campos de tu form

		// Validación básica (puedes expandirla mucho más)
		if (!nombre || !apellido || !email || !message) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Faltan campos requeridos.",
				}),
				{ status: 400 }
			);
		}

		// Construye el contenido del correo
		// Puedes usar HTML para un formato más rico
		const emailHtmlContent = `
    <h1>Nuevo Contacto desde el Formulario de Contacto</h1>
    <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Asunto:</strong> ${subject}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>`;

		const { data: sendData, error: sendError } = await resend.emails.send({
			from: `Formulario Web <${emailFrom}>`, // Debe ser un correo de tu dominio verificado
			to: [emailTo],
			subject: subject || `Nuevo mensaje de ${nombre} ${apellido}`,
			html: emailHtmlContent,
			replyTo: email, // Para que puedas responder directamente al usuario
		});

		if (sendError) {
			console.error({ sendError });
			return new Response(
				JSON.stringify({
					success: false,
					error: "Error al enviar el correo.",
					details: sendError.message,
				}),
				{ status: 500 }
			);
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: "Correo enviado exitosamente!",
				data: sendData,
			}),
			{ status: 200 }
		);
	} catch (error: any) {
		console.error(error);
		return new Response(
			JSON.stringify({
				success: false,
				error: "Error en el servidor.",
				details: error.message,
			}),
			{ status: 500 }
		);
	}
};
