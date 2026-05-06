function normalizeText(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buildReply(message = "") {
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

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Metodo no permitido." });
  }

  const message = String(request.body?.message || "").trim();
  if (!message) {
    return response.status(400).json({ error: "Escribe un mensaje para continuar." });
  }

  return response.status(200).json({ reply: buildReply(message) });
};
