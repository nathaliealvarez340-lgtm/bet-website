import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml; charset=utf-8",
};

function normalizeText(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buildAssistantReply(message = "") {
  const text = normalizeText(message);

  if (/(protesis|implante|implantes)/.test(text)) {
    return "BET presenta soluciones ortop\u00e9dicas e implantes internos organizados por regi\u00f3n anat\u00f3mica. Ind\u00edcame el \u00e1rea que deseas consultar para orientarte hacia la informaci\u00f3n disponible.";
  }
  if (/(femur|cadera)/.test(text)) {
    return "Para f\u00e9mur y cadera, puedes consultar sistemas de fijaci\u00f3n y sus documentos t\u00e9cnicos. La selecci\u00f3n corresponde al profesional de la salud.";
  }
  if (/(craneo|craneal|craneomaxilofacial)/.test(text)) {
    return "No encuentro una categor\u00eda craneal documentada en el explorador actual. Contacta a BET para confirmar si existe informaci\u00f3n relacionada con esa regi\u00f3n.";
  }
  if (/(contacto|whatsapp|telefono|correo)/.test(text)) {
    return "Puedes contactar a BET por WhatsApp o desde el formulario. Comparte el \u00e1rea de inter\u00e9s y la informaci\u00f3n que necesitas.";
  }
  if (/(precio|precios|cotizacion|costo|costos)/.test(text)) {
    return "Para solicitar informaci\u00f3n comercial, env\u00eda el nombre de la soluci\u00f3n o el \u00e1rea anat\u00f3mica mediante WhatsApp.";
  }
  if (/(disponibilidad|disponible|inventario|entrega)/.test(text)) {
    return "La disponibilidad debe confirmarse directamente con BET. Puedes indicar la soluci\u00f3n o el \u00e1rea anat\u00f3mica mediante WhatsApp.";
  }
  if (/(proceso|atencion|seleccion|seguimiento)/.test(text)) {
    return "La ruta de consulta organiza el \u00e1rea anat\u00f3mica, las alternativas y los documentos disponibles. La valoraci\u00f3n y selecci\u00f3n corresponden al profesional de la salud.";
  }

  return "Puedo ayudarte a localizar informaci\u00f3n general, \u00e1reas anat\u00f3micas y documentos. Para una solicitud espec\u00edfica, contacta directamente a BET por WhatsApp.";
}

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);

  if (pathname === "/api/news" && request.method === "GET") {
    const body = await readFile(join(root, "data", "newsletterArticles.json"), "utf8");
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    response.end(body);
    return;
  }

  if (pathname === "/api/assistant" && request.method === "POST") {
    let rawBody = "";
    request.on("data", (chunk) => {
      rawBody += chunk;
    });
    request.on("end", () => {
      const payload = rawBody ? JSON.parse(rawBody) : {};
      const message = String(payload.message || "").trim();
      response.writeHead(message ? 200 : 400, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({
        reply: message ? buildAssistantReply(message) : "Escribe un mensaje para continuar.",
      }));
    });
    return;
  }

  if (pathname === "/api/contact" && request.method === "POST") {
    let rawBody = "";
    request.on("data", (chunk) => {
      rawBody += chunk;
    });
    request.on("end", () => {
      const payload = rawBody ? JSON.parse(rawBody) : {};
      const name = String(payload.name || "").trim();
      const email = String(payload.email || "").trim();
      const requestText = String(payload.request || "").trim();
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !requestText) {
        response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ error: "Completa los campos requeridos antes de enviar la solicitud." }));
        return;
      }

      if (!isValidEmail) {
        response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ error: "Ingresa un correo profesional v\u00e1lido." }));
        return;
      }

      response.writeHead(503, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({
        error: "No fue posible enviar la solicitud. Int\u00e9ntalo nuevamente o cont\u00e1ctanos por WhatsApp.",
      }));
    });
    return;
  }

  const requested = pathname === "/" ? "/index.html" : pathname;
  const candidates = [
    normalize(join(root, requested)),
    normalize(join(root, `${requested}.html`)),
    normalize(join(root, "public", requested)),
  ];

  if (candidates.some((filePath) => !filePath.startsWith(root))) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  for (const filePath of candidates) {
    try {
      const body = await readFile(filePath);
      response.writeHead(200, { "Content-Type": types[extname(filePath)] || "application/octet-stream" });
      response.end(body);
      return;
    } catch {
      // Try the next static candidate.
    }
  }

  response.writeHead(404);
  response.end("Not found");
}).listen(port, "127.0.0.1");
