const { Resend } = require("resend");

const FIELD_LIMITS = {
  name: 120,
  email: 254,
  request: 5000,
  website: 200,
};

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const GENERIC_SEND_ERROR =
  "No fue posible enviar la solicitud. Int\u00e9ntalo nuevamente en unos minutos.";

function getHeader(request, name) {
  const value = request.headers?.[name] || request.headers?.[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : String(value || "");
}

function parseBody(body) {
  const parsed = typeof body === "string" ? JSON.parse(body || "{}") : body;
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new TypeError("Invalid request body");
  }
  return parsed;
}

function normalizeSingleLine(value) {
  return String(value).trim().replace(/\s+/g, " ");
}

function normalizeMessage(value) {
  return String(value)
    .replace(/\r\n?/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function buildEmailHtml(data, submittedAt) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeRequest = escapeHtml(data.request).replace(/\n/g, "<br>");
  const safeSubmittedAt = escapeHtml(submittedAt);

  return `<!doctype html>
<html lang="es">
  <body style="margin:0;padding:0;background:#f4f8fa;color:#17313a;font-family:Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f8fa;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #dceaf0;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;background:#0878c9;color:#ffffff;">
                <div style="font-size:13px;font-weight:700;letter-spacing:0;text-transform:uppercase;">BET</div>
                <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;">Nueva solicitud de contacto</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:0 0 8px;color:#5e747c;font-size:13px;font-weight:700;">Nombre</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 20px;font-size:16px;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 8px;color:#5e747c;font-size:13px;font-weight:700;">Correo</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 20px;font-size:16px;"><a href="mailto:${safeEmail}" style="color:#0878c9;">${safeEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 8px;color:#5e747c;font-size:13px;font-weight:700;">Mensaje</td>
                  </tr>
                  <tr>
                    <td style="padding:16px;background:#f4f8fa;border-left:4px solid #0878c9;border-radius:6px;font-size:16px;line-height:1.6;">${safeRequest}</td>
                  </tr>
                  <tr>
                    <td style="padding:22px 0 0;color:#5e747c;font-size:13px;">Fecha y hora: ${safeSubmittedAt}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildEmailText(data, submittedAt) {
  return [
    "BET - Nueva solicitud de contacto",
    "",
    `Nombre: ${data.name}`,
    `Correo: ${data.email}`,
    "Mensaje:",
    data.request,
    "",
    `Fecha y hora: ${submittedAt}`,
  ].join("\n");
}

function formatSubmittedAt(date) {
  return `${new Intl.DateTimeFormat("es-MX", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "America/Mexico_City",
  }).format(date)} (America/Mexico_City)`;
}

function logResendError(error) {
  console.error("[BET contact] Resend rejected the email request.", {
    name: error?.name || "UnknownError",
    statusCode: error?.statusCode || null,
  });
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "M\u00e9todo no permitido." });
  }

  const contentType = getHeader(request, "content-type").toLowerCase();
  if (!contentType.includes("application/json")) {
    return response.status(415).json({
      ok: false,
      error: "El formato de la solicitud no es compatible.",
    });
  }

  let body;
  try {
    body = parseBody(request.body);
  } catch {
    return response.status(400).json({ ok: false, error: "La solicitud no contiene datos v\u00e1lidos." });
  }

  const rawHoneypot = typeof body.website === "string" ? body.website : String(body.website || "");
  if (rawHoneypot.length > FIELD_LIMITS.website || normalizeSingleLine(rawHoneypot)) {
    return response.status(200).json({ ok: true });
  }

  const rawFields = {
    name: typeof body.name === "string" ? body.name : "",
    email: typeof body.email === "string" ? body.email : "",
    request: typeof body.request === "string" ? body.request : "",
  };

  const fieldsOverLimit = Object.entries(rawFields).some(
    ([field, value]) => value.length > FIELD_LIMITS[field]
  );
  if (fieldsOverLimit) {
    return response.status(400).json({
      ok: false,
      error: "Uno o m\u00e1s campos exceden la longitud permitida.",
    });
  }

  const data = {
    name: normalizeSingleLine(rawFields.name),
    email: normalizeSingleLine(rawFields.email).toLowerCase(),
    request: normalizeMessage(rawFields.request),
  };

  if (!data.name || !data.email || !data.request) {
    return response.status(400).json({
      ok: false,
      error: "Completa los campos requeridos antes de enviar la solicitud.",
    });
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    return response.status(400).json({ ok: false, error: "Ingresa un correo profesional v\u00e1lido." });
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const contactToEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const resendFromEmail = process.env.RESEND_FROM_EMAIL?.trim();

  if (!resendApiKey || !contactToEmail || !resendFromEmail) {
    console.error("[BET contact] Required Resend environment variables are not configured.");
    return response.status(503).json({ ok: false, error: GENERIC_SEND_ERROR });
  }

  const submittedAt = formatSubmittedAt(new Date());
  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: resendFromEmail,
      to: [contactToEmail],
      replyTo: data.email,
      subject: "Nueva solicitud de contacto \u2014 BET",
      html: buildEmailHtml(data, submittedAt),
      text: buildEmailText(data, submittedAt),
    });

    if (error) {
      logResendError(error);
      return response.status(502).json({ ok: false, error: GENERIC_SEND_ERROR });
    }
  } catch (error) {
    logResendError(error);
    return response.status(502).json({ ok: false, error: GENERIC_SEND_ERROR });
  }

  return response.status(200).json({ ok: true });
};
