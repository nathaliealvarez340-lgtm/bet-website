const WHATSAPP_NUMBER = "525520810867";
const WHATSAPP_MESSAGE = "Hola, me interesa uno de sus productos. ¿Podrían darme más detalles y precios?";
const WHATSAPP_URL = "https://wa.me/525520810867?text=Hola%2C%20me%20interesa%20uno%20de%20sus%20productos.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles%20y%20precios%3F";

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function createWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = WHATSAPP_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

let newsletterArticles = [];

document.querySelectorAll("[data-spline-scene]").forEach((scene) => {
  const viewer = scene.querySelector("spline-viewer");
  const markReady = () => scene.classList.add("is-ready");

  viewer?.addEventListener("load", markReady);
  setTimeout(() => {
    if (!scene.classList.contains("is-ready")) markReady();
  }, 6500);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.13 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const header = document.querySelector("[data-elevate]");
window.addEventListener("scroll", () => {
  header?.classList.toggle("is-elevated", window.scrollY > 20);
});

const fallbackProducts = [
  {
    id: "femur",
    label: "Fémur",
    nombre: "Fémur",
    categoria: "Miembro inferior",
    descripcion: "Hueso largo del muslo que cumple una función clave en movilidad, soporte de peso y estabilidad estructural.",
    productos: [
      {
        nombre: "Prótesis femoral",
        descripcion: "Solución diseñada para procedimientos de reconstrucción o reemplazo en la zona femoral.",
        uso: "Traumatología y ortopedia",
      },
    ],
    aplicaciones: ["Artroplastia", "Fijación interna", "Reconstrucción femoral"],
  },
];

const selectors = {
  category: document.querySelector("#bone-category"),
  name: document.querySelector("#bone-name"),
  description: document.querySelector("#bone-description"),
  products: document.querySelector("#bone-products"),
  applications: document.querySelector("#bone-applications"),
  targets: document.querySelectorAll(".bone-target"),
};

let anatomyProducts = fallbackProducts;

function renderNewsArticles(articles) {
  const carousel = document.querySelector("[data-news-carousel]");
  if (!carousel) return;
  const validArticles = articles.filter((article) => article.url && /^https?:\/\//.test(article.url));

  const cards = validArticles
    .map(
      (article) => `
        <article class="news-card glass">
          <img src="${escapeHtml(article.image || "assets/images/implant-system.svg")}" alt="${escapeHtml(article.imageAlt || article.title)}" loading="lazy">
          <div>
            <span>${escapeHtml(article.source)} · ${escapeHtml(article.date)}</span>
            <h3>${escapeHtml(article.title)}</h3>
            <p>${escapeHtml(article.description)}</p>
          </div>
          <a class="button glass-button" href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer">Ver más…</a>
        </article>
      `
    )
    .join("");

  if (!cards) {
    carousel.innerHTML = "";
    return;
  }

  carousel.innerHTML = `<div class="news-track">${cards}${cards}</div>`;
}

function renderBone(boneId) {
  const bone = anatomyProducts.find((item) => item.id === boneId) || anatomyProducts[0];
  if (!bone) return;

  selectors.targets.forEach((target) => {
    const isActive = target.dataset.bone === bone.id;
    target.classList.toggle("is-active", isActive);
    target.setAttribute("aria-pressed", String(isActive));
  });

  selectors.category.textContent = bone.categoria;
  selectors.name.textContent = bone.nombre;
  selectors.description.textContent = bone.descripcion;
  selectors.products.innerHTML = bone.productos
    .map(
      (product) => `
        <article class="product-mini">
          <strong>${escapeHtml(product.nombre)}</strong>
          <span>${escapeHtml(product.descripcion)}</span>
          <small>${escapeHtml(product.uso)}</small>
        </article>
      `
    )
    .join("");
  selectors.applications.innerHTML = bone.aplicaciones.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

fetch("data/anatomicalProducts.json")
  .then((response) => {
    if (!response.ok) throw new Error("No se pudo cargar anatomicalProducts.json");
    return response.json();
  })
  .then((data) => {
    anatomyProducts = data;
    renderBone("femur");
  })
  .catch(() => {
    renderBone("femur");
  });

// Future-ready: /api/news can refresh articles server-side with Vercel Cron every 5 days,
// extract Open Graph metadata such as og:image, and fall back to this local JSON.
fetch("/api/news")
  .then((response) => {
    if (!response.ok) throw new Error("Endpoint de noticias no disponible");
    return response.json();
  })
  .catch(() => fetch("data/newsletterArticles.json").then((response) => response.json()))
  .then((articles) => {
    newsletterArticles = Array.isArray(articles) ? articles : articles.items || [];
    renderNewsArticles(newsletterArticles);
  })
  .catch(() => {
    document.querySelector("[data-news-carousel]")?.replaceChildren();
  });

selectors.targets.forEach((target) => {
  target.addEventListener("click", () => renderBone(target.dataset.bone));
  target.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      renderBone(target.dataset.bone);
    }
  });
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector(".form-status");
  const submitButton = form.querySelector("button[type='submit']");
  const requiredFields = [...form.querySelectorAll("[required]")];
  const invalidFields = requiredFields.filter((field) => !field.value.trim());

  form.querySelectorAll(".is-invalid").forEach((field) => field.classList.remove("is-invalid"));

  if (invalidFields.length > 0) {
    invalidFields.forEach((field) => field.classList.add("is-invalid"));
    status.textContent = "Completa los campos requeridos para preparar la solicitud.";
    status.className = "form-status is-error";
    invalidFields[0].focus();
    return;
  }

  const formData = new FormData(form);
  const payload = {
    name: formData.get("name").trim(),
    area: formData.get("area").trim(),
    contact: formData.get("contact").trim(),
    message: formData.get("message").trim(),
  };
  const message = `Hola BET, soy ${payload.name}. Me interesa recibir información sobre ${payload.area}. Mi contacto es ${payload.contact}. ${payload.message}`;
  const whatsappLink = form.querySelector("[data-whatsapp-link]");
  whatsappLink.href = createWhatsAppUrl(message);

  submitButton.disabled = true;
  submitButton.textContent = "Preparando solicitud";
  status.textContent = "Intentando enviar la solicitud. Si el correo no está disponible, abriremos WhatsApp.";
  status.className = "form-status";

  fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "No se pudo enviar la solicitud.");
      status.textContent = "Solicitud enviada. El equipo de BET dará seguimiento con la información proporcionada.";
      status.className = "form-status is-success";
      form.reset();
    })
    .catch((error) => {
      status.textContent = `${error.message} Abrimos WhatsApp con el mensaje prellenado para que no pierdas la solicitud.`;
      status.className = "form-status is-error";
      window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar solicitud";
    });
});

const siteSections = [
  {
    title: "Soluciones médicas",
    description: "Prótesis internas, osteosíntesis, trauma y soporte hospitalario especializado.",
    target: "#soluciones",
    keywords: "prótesis protesis implantes osteosíntesis osteosintesis trauma placas tornillos clavos instrumental"
  },
  {
    title: "Explorador anatómico",
    description: "Consulta áreas anatómicas, productos relacionados y aplicaciones quirúrgicas.",
    target: "#explorador",
    keywords: "fémur femur cadera cráneo craneo clavícula clavicula húmero humero tibia pelvis columna anatomía anatomia"
  },
  {
    title: "Proceso de atención",
    description: "Análisis del caso, selección técnica, coordinación operativa y seguimiento.",
    target: "#proceso",
    keywords: "proceso análisis analisis selección seleccion coordinación coordinacion seguimiento atención atencion"
  },
  {
    title: "Valores BET",
    description: "Precisión clínica, confiabilidad, especialización, respaldo profesional y eficiencia operativa.",
    target: ".values-section",
    keywords: "valores precisión precision confiabilidad especialización especializacion respaldo eficiencia"
  },
  {
    title: "Contacto BET",
    description: "Formulario y WhatsApp para orientación comercial y disponibilidad.",
    target: "#contacto",
    keywords: "contacto whatsapp disponibilidad precios cotización cotizacion información informacion"
  }
];

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buildSearchIndex() {
  const anatomyItems = anatomyProducts.map((bone) => ({
    title: bone.nombre,
    description: `${bone.categoria}. ${bone.descripcion}`,
    target: "#explorador",
    keywords: `${bone.nombre} ${bone.categoria} ${bone.descripcion} ${bone.productos.map((item) => `${item.nombre} ${item.descripcion} ${item.uso}`).join(" ")} ${bone.aplicaciones.join(" ")}`
  }));

  const articleItems = newsletterArticles.map((article) => ({
    title: article.title,
    description: `${article.source}. ${article.description}`,
    target: article.url,
    external: true,
    keywords: `${article.title} ${article.description} ${article.source}`
  }));

  return [...siteSections, ...anatomyItems, ...articleItems];
}

function renderSearchResults(results, query) {
  const container = document.querySelector(".search-results");
  if (!container) return;

  if (!query.trim()) {
    container.innerHTML = "";
    return;
  }

  if (results.length === 0) {
    container.innerHTML = `<p class="empty-state">No encontramos coincidencias. Puedes contactar a BET para orientación personalizada.</p>`;
    return;
  }

  container.innerHTML = results
    .slice(0, 8)
    .map(
      (result) => `
        <article class="search-result">
          <div>
            <h3>${escapeHtml(result.title)}</h3>
            <p>${escapeHtml(result.description)}</p>
          </div>
          <button class="button glass-button" type="button" data-search-target="${escapeHtml(result.target)}" data-external="${result.external ? "true" : "false"}">Ver sección</button>
        </article>
      `
    )
    .join("");
}

function executeSearch(query) {
  const normalizedQuery = normalizeText(query);
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const results = buildSearchIndex().filter((item) => {
    const haystack = normalizeText(`${item.title} ${item.description} ${item.keywords}`);
    return terms.every((term) => haystack.includes(term));
  });

  renderSearchResults(results, query);
}

document.querySelector(".site-search")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  executeSearch(input.value);
});

document.querySelector(".search-results")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-search-target]");
  if (!button) return;

  const target = button.dataset.searchTarget;
  if (button.dataset.external === "true") {
    window.open(target, "_blank", "noopener,noreferrer");
    return;
  }

  document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

function handleAssistantMessage(message) {
  const text = normalizeText(message);

  if (/(protesis|implante|implantes)/.test(text)) {
    return "Claro. BET trabaja con prótesis internas, implantes y soluciones quirúrgicas para procedimientos ortopédicos y de trauma. Si me dices el área anatómica, puedo orientarte mejor.";
  }
  if (/(femur|cadera)/.test(text)) {
    return "Para fémur y cadera, BET puede orientar sobre prótesis femoral, clavos intramedulares, placas y soluciones de reconstrucción según el requerimiento quirúrgico.";
  }
  if (/(craneo|craneal|craneomaxilofacial)/.test(text)) {
    return "En cráneo y región craneomaxilofacial, la orientación suele enfocarse en placas, fijación y reconstrucción. Para validar disponibilidad, te recomiendo contactar directamente a BET.";
  }
  if (/(contacto|whatsapp|telefono|correo)/.test(text)) {
    return "Puedes contactar a BET por WhatsApp desde este chat o usar el formulario de contacto. Comparte área de interés, datos de contacto y mensaje para dar mejor seguimiento.";
  }
  if (/(precio|precios|cotizacion|costo|costos)/.test(text)) {
    return "Los precios dependen del producto, zona anatómica, disponibilidad y requerimiento quirúrgico. Para cotización, lo mejor es enviar los datos del caso por WhatsApp.";
  }
  if (/(disponibilidad|disponible|inventario|entrega)/.test(text)) {
    return "La disponibilidad se revisa por área anatómica, producto y tiempo de procedimiento. BET puede darte seguimiento directo por WhatsApp.";
  }
  if (/(proceso|atencion|seleccion|seguimiento)/.test(text)) {
    return "El proceso BET contempla análisis del caso, selección técnica, coordinación operativa y seguimiento para futuras decisiones clínicas.";
  }

  return "Puedo ayudarte a ubicar información general. Para una solicitud específica, te recomiendo contactar directamente a BET por WhatsApp.";
}

async function askAssistant(message) {
  try {
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) throw new Error("Sin endpoint activo");
    const data = await response.json();
    return data.reply || handleAssistantMessage(message);
  } catch {
    return handleAssistantMessage(message);
  }
}

function appendAssistantMessage(content, type = "bot") {
  const messages = document.querySelector(".assistant-messages");
  if (!messages) return;
  const bubble = document.createElement("p");
  bubble.className = `assistant-message ${type}`;
  bubble.textContent = content;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

const assistantToggle = document.querySelector(".assistant-toggle");
const assistantPanel = document.querySelector(".assistant-panel");

assistantToggle?.addEventListener("click", () => {
  const isOpen = !assistantPanel.hidden;
  assistantPanel.hidden = isOpen;
  assistantToggle.setAttribute("aria-expanded", String(!isOpen));
});

document.querySelector(".assistant-close")?.addEventListener("click", () => {
  assistantPanel.hidden = true;
  assistantToggle?.setAttribute("aria-expanded", "false");
});

document.querySelector(".assistant-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  const message = input.value.trim();
  if (!message) return;

  appendAssistantMessage(message, "user");
  input.value = "";
  const reply = await askAssistant(message);
  appendAssistantMessage(reply, "bot");
});
