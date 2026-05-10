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
    return "BET trabaja con protesis internas, implantes y soluciones quirurgicas para procedimientos ortopedicos y de trauma. Si compartes el area anatomica, puedo orientarte mejor.";
  }
  if (/(femur|cadera)/.test(text)) {
    return "Para femur y cadera, BET puede orientar sobre protesis femoral, clavos intramedulares, placas y soluciones de reconstruccion segun el requerimiento quirurgico.";
  }
  if (/(craneo|craneal|craneomaxilofacial)/.test(text)) {
    return "En craneo y region craneomaxilofacial, la orientacion suele enfocarse en placas, fijacion y reconstruccion. Para validar disponibilidad, conviene contactar directamente a BET.";
  }
  if (/(contacto|whatsapp|telefono|correo)/.test(text)) {
    return "Puedes contactar a BET por WhatsApp o desde el formulario de contacto. Comparte area de interes, datos de contacto y una breve descripcion del caso.";
  }
  if (/(precio|precios|cotizacion|costo|costos)/.test(text)) {
    return "Los precios dependen del producto, la zona anatomica, la disponibilidad y el requerimiento quirurgico. Para cotizacion, lo ideal es enviar los datos del caso por WhatsApp.";
  }
  if (/(disponibilidad|disponible|inventario|entrega)/.test(text)) {
    return "La disponibilidad se revisa por area anatomica, tipo de producto y tiempo de procedimiento. BET puede darte seguimiento directo por WhatsApp.";
  }
  if (/(proceso|atencion|seleccion|seguimiento)/.test(text)) {
    return "El proceso BET contempla analisis del caso, seleccion tecnica, coordinacion operativa y seguimiento posterior.";
  }

  return "Puedo ayudarte con informacion general sobre protesis internas, areas anatomicas, disponibilidad, proceso de atencion o contacto con BET.";
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
    response.writeHead(503, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({
      error: "El envio por correo aun no esta disponible en este entorno local. Abriremos WhatsApp como respaldo.",
    }));
    return;
  }

  const requested = pathname === "/" ? "/index.html" : pathname;
  const filePath = normalize(join(root, requested));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(filePath);
    response.writeHead(200, { "Content-Type": types[extname(filePath)] || "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`BET site on http://127.0.0.1:${port}`);
});
