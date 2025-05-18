import { Resend } from 'resend';
export { r as renderers } from '../../chunks/_@astro-renderers_Bh0dXl76.mjs';

const prerender = false;
const resend = new Resend("re_Em7tUhyD_8RjJ9xiuaitviuXwzaqvB6J8");
const emailFrom = "onboarding@resend.dev";
const emailTo = "richard@elbauldelfriki.com";
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    console.log(data);
    const { nombre, apellido, email, message, subject } = data;
    if (!nombre || !apellido || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Faltan campos requeridos."
        }),
        { status: 400 }
      );
    }
    const emailHtmlContent = `
    <h1>Nuevo Contacto desde el Formulario de Contacto</h1>
    <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Asunto:</strong> ${subject}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>`;
    const { data: sendData, error: sendError } = await resend.emails.send({
      from: `Formulario Web <${emailFrom}>`,
      // Debe ser un correo de tu dominio verificado
      to: [emailTo],
      subject: subject || `Nuevo mensaje de ${nombre} ${apellido}`,
      html: emailHtmlContent,
      replyTo: email
      // Para que puedas responder directamente al usuario
    });
    if (sendError) {
      console.error({ sendError });
      return new Response(
        JSON.stringify({
          success: false,
          error: "Error al enviar el correo.",
          details: sendError.message
        }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Correo enviado exitosamente!",
        data: sendData
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error en el servidor.",
        details: error.message
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
