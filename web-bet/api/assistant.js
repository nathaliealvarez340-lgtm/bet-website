function normalizeText(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buildReply(message = "") {
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

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "M\u00e9todo no permitido." });
  }

  const message = String(request.body?.message || "").trim();
  if (!message) {
    return response.status(400).json({ error: "Escribe un mensaje para continuar." });
  }

  return response.status(200).json({ reply: buildReply(message) });
};
