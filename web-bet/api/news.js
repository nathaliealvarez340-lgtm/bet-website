const { readFile } = require("node:fs/promises");
const { join } = require("node:path");

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Metodo no permitido." });
  }

  try {
    const filePath = join(process.cwd(), "data", "newsletterArticles.json");
    const raw = await readFile(filePath, "utf8");
    const items = JSON.parse(raw);
    return response.status(200).json(items);
  } catch {
    return response.status(500).json({ error: "No se pudieron cargar las noticias." });
  }
};
