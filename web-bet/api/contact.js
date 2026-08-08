const requiredFields = ["name", "email", "request"];

function sanitize(value = "") {
  return String(value).trim().slice(0, 2000);
}

function buildEmailHtml(data) {
  return `
    <div style="font-family:Arial,sans-serif;color:#222;line-height:1.55">
      <h2 style="color:#1693a5;margin:0 0 16px">Nueva solicitud desde BET</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Correo profesional:</strong> ${data.email}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space:pre-line">${data.request}</p>
    </div>
  `;
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "M\u00e9todo no permitido." });
  }

  const data = Object.fromEntries(
    requiredFields.map((field) => [field, sanitize(request.body?.[field])])
  );
  const missing = requiredFields.filter((field) => !data[field]);

  if (missing.length > 0) {
    return response.status(400).json({ error: "Completa los campos requeridos antes de enviar la solicitud." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return response.status(400).json({ error: "Ingresa un correo profesional v\u00e1lido." });
  }

  const contactEmail = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || "nathaliealvarez340@gmail.com";
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL || "BET <noreply@bodyedge.mx>";

  if (!resendApiKey) {
    return response.status(503).json({
      error: "No fue posible enviar la solicitud. Int\u00e9ntalo nuevamente o cont\u00e1ctanos por WhatsApp.",
    });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [contactEmail],
      subject: `Solicitud BET: ${data.name}`,
      html: buildEmailHtml(data),
      reply_to: data.email,
    }),
  });

  if (!resendResponse.ok) {
    return response.status(502).json({ error: "No fue posible enviar la solicitud. Int\u00e9ntalo nuevamente o cont\u00e1ctanos por WhatsApp." });
  }

  return response.status(200).json({ ok: true });
};
