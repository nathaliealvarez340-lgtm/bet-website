const requiredFields = ["name", "area", "contact", "message"];

function sanitize(value = "") {
  return String(value).trim().slice(0, 2000);
}

function buildEmailHtml(data) {
  return `
    <div style="font-family:Arial,sans-serif;color:#222;line-height:1.55">
      <h2 style="color:#1693a5;margin:0 0 16px">Nueva solicitud desde BET</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Área de interés:</strong> ${data.area}</p>
      <p><strong>Correo o teléfono:</strong> ${data.contact}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space:pre-line">${data.message}</p>
    </div>
  `;
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Método no permitido." });
  }

  const data = Object.fromEntries(
    requiredFields.map((field) => [field, sanitize(request.body?.[field])])
  );
  const missing = requiredFields.filter((field) => !data[field]);

  if (missing.length > 0) {
    return response.status(400).json({ error: "Completa todos los campos requeridos." });
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL || "BET <noreply@bodyedge.mx>";

  if (!contactEmail || !resendApiKey) {
    return response.status(503).json({
      error: "El envío por correo aún no está configurado. Define CONTACT_EMAIL y RESEND_API_KEY en Vercel.",
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
      subject: `Solicitud BET: ${data.area}`,
      html: buildEmailHtml(data),
      reply_to: data.contact.includes("@") ? data.contact : undefined,
    }),
  });

  if (!resendResponse.ok) {
    return response.status(502).json({ error: "No se pudo enviar el correo. Inténtalo nuevamente." });
  }

  return response.status(200).json({ ok: true });
};
