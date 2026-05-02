const WHATSAPP_NUMBER = "5210000000000";
const WHATSAPP_MESSAGE = "Hola BET, me gustaría recibir información comercial sobre prótesis internas y soluciones quirúrgicas.";

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
  link.href = createWhatsAppUrl();
});

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
    institution: formData.get("institution").trim(),
    area: formData.get("area").trim(),
    contact: formData.get("contact").trim(),
    message: formData.get("message").trim(),
  };
  const message = `Hola BET, soy ${payload.name} de ${payload.institution}. Me interesa recibir información sobre ${payload.area}. Mi contacto es ${payload.contact}. ${payload.message}`;
  const whatsappLink = form.querySelector("[data-whatsapp-link]");
  whatsappLink.href = createWhatsAppUrl(message);

  submitButton.disabled = true;
  submitButton.textContent = "Enviando solicitud";
  status.textContent = "Enviando información al equipo de BET.";
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
      status.textContent = `${error.message} También puedes continuar por WhatsApp con el mensaje prellenado.`;
      status.className = "form-status is-error";
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar solicitud";
    });
});
