const WHATSAPP_NUMBER = "525520810867";
const WHATSAPP_MESSAGE = "Hola, me interesa uno de sus productos. Podrian darme mas detalles y precios?";
const WHATSAPP_URL = "https://wa.me/525520810867?text=Hola%2C%20me%20interesa%20uno%20de%20sus%20productos.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles%20y%20precios%3F";
const HERO_ROTATION_MS = 5000;

const translations = {
  es: {
    navEnfoque: "Productos",
    navExplorador: "Soluciones",
    navProceso: "Ruta",
    navEducacion: "Educaci\u00f3n",
    navContacto: "Contacto",
    whatsapp: "WhatsApp",
    heroKicker: "",
    heroTitleLineOne: "Precisi\u00f3n que",
    heroTitleLineTwo: "transforma",
    heroTitleAccentOne: "movilidad en",
    heroTitleAccentTwo: "confianza.",
    heroEditorialPhrases: [
      {
        lines: [
          { text: "Precisi\u00f3n cl\u00ednica" },
          { text: "traducida en" },
          { text: "disponibilidad real.", accent: true },
        ],
      },
    ],
    heroSubtitle: "Pr\u00f3tesis internas y soluciones m\u00e9dicas dise\u00f1adas para responder con velocidad, confianza y exactitud.",
    heroProductsCta: "Conoce m\u00e1s",
    heroAdvisorCta: "Hablar con un asesor",
    heroStatOneValue: "+500",
    heroStatOneLabel: "procedimientos atendidos",
    heroStatTwoValue: "Materiales",
    heroStatTwoLabel: "certificados internacionalmente",
    heroStatThreeValue: "Atenci\u00f3n",
    heroStatThreeLabel: "especializada",
    heroMicrocopy: "Soluciones internas dise\u00f1adas para respaldar decisiones m\u00e9dicas cr\u00edticas.",
    heroPhrases: [
      {
        lines: ["HAY HISTORIAS QUE", "MERECEN SEGUIR"],
        highlight: "AVANZANDO",
      },
      {
        lines: ["NUEVAS", "POSIBILIDADES"],
        highlight: "COMIENZAN AQUÍ",
      },
    ],
    benefits: [
      "Prótesis de máxima calidad certificada",
      "Atención personalizada y seguimiento",
      "Tecnología de vanguardia en prótesis",
    ],
    contactTitle: "Conversemos sobre la solución adecuada para tu procedimiento.",
    contactTitleLineOne: "Conversemos sobre",
    contactTitleLineTwo: "la solución adecuada",
    contactTitleAccent: "para tu procedimiento.",
    contactCopy: "Comparte los datos del caso, área anatómica y tiempo estimado de intervención. BET puede coordinar información técnica, disponibilidad y seguimiento.",
    submitRequest: "Enviar solicitud",
    preparingRequest: "Preparando solicitud",
    contactWhatsapp: "Contactar por WhatsApp",
  },
  en: {
    navEnfoque: "Products",
    navExplorador: "Solutions",
    navProceso: "Route",
    navEducacion: "Education",
    navContacto: "Contact",
    whatsapp: "WhatsApp",
    heroKicker: "",
    heroTitleLineOne: "Precision that",
    heroTitleLineTwo: "turns",
    heroTitleAccentOne: "mobility into",
    heroTitleAccentTwo: "confidence.",
    heroEditorialPhrases: [
      {
        lines: [
          { text: "Clinical precision" },
          { text: "translated into" },
          { text: "real availability.", accent: true },
        ],
      },
    ],
    heroSubtitle: "Internal prosthetics and medical solutions designed to respond with speed, confidence and accuracy.",
    heroProductsCta: "Learn more",
    heroAdvisorCta: "Talk to an advisor",
    heroStatOneValue: "+500",
    heroStatOneLabel: "procedures supported",
    heroStatTwoValue: "Materials",
    heroStatTwoLabel: "internationally certified",
    heroStatThreeValue: "Care",
    heroStatThreeLabel: "specialized",
    heroMicrocopy: "Internal solutions designed to support critical medical decisions.",
    heroPhrases: [
      {
        lines: ["SOME STORIES DESERVE", "TO KEEP MOVING"],
        highlight: "FORWARD",
      },
      {
        lines: ["NEW", "POSSIBILITIES"],
        highlight: "BEGIN HERE",
      },
    ],
    benefits: [
      "Certified high-quality prosthetics",
      "Personalized care and follow-up",
      "Advanced technology in prosthetics",
    ],
    contactTitle: "Let's discuss the right solution for your procedure.",
    contactTitleLineOne: "Let's discuss",
    contactTitleLineTwo: "the right solution",
    contactTitleAccent: "for your procedure.",
    contactCopy: "Share the case details, anatomical area and estimated timing. BET can coordinate technical information, availability and follow-up.",
    submitRequest: "Send request",
    preparingRequest: "Preparing request",
    contactWhatsapp: "Contact via WhatsApp",
  },
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const normalizeText = (value = "") =>
  String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function getStoredLanguage() {
  try {
    return localStorage.getItem("bet-language");
  } catch {
    return null;
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem("bet-language", language);
  } catch {
    // Language still works for the current session if storage is unavailable.
  }
}

function createWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = WHATSAPP_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

let newsletterArticles = [];
const newsViewportQuery = window.matchMedia("(max-width: 768px)");
const storedLanguage = getStoredLanguage();
let currentLanguage = translations[storedLanguage] ? storedLanguage : "es";
let currentHeroPhraseIndex = 0;
let heroIntervalId;
let heroTransitionTimeout;

const heroTitle = document.querySelector(".hero-title");
const heroTitleLines = document.querySelector(".hero-title-lines");
const heroTitleHighlight = document.querySelector(".hero-title-highlight");
const languageSwitcher = document.querySelector("[data-language-switcher]");
const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");

function renderHeroPhrase(phrase, animate = true) {
  if (!heroTitle || !heroTitleLines || !heroTitleHighlight) return;
  window.clearTimeout(heroTransitionTimeout);

  const updateTitle = () => {
    heroTitleLines.replaceChildren(
      ...phrase.lines.map((line) => {
        const span = document.createElement("span");
        span.textContent = line;
        return span;
      })
    );
    heroTitleHighlight.textContent = phrase.highlight;
    heroTitle.setAttribute("aria-label", [...phrase.lines, phrase.highlight].join(" "));
    heroTitle.classList.remove("is-changing");
  };

  if (!animate) {
    updateTitle();
    return;
  }

  heroTitle.classList.add("is-changing");
  heroTransitionTimeout = window.setTimeout(updateTitle, 280);
}

function renderEditorialHeroPhrase(phrase, animate = true) {
  if (!heroTitle || !phrase?.lines || heroTitleLines || heroTitleHighlight) return;
  window.clearTimeout(heroTransitionTimeout);

  const updateTitle = () => {
    heroTitle.replaceChildren(
      ...phrase.lines.map((line) => {
        const span = document.createElement("span");
        span.className = `line${line.accent ? " hero-accent" : ""}`;
        span.textContent = line.text;
        return span;
      })
    );
    heroTitle.classList.toggle("is-alt", Boolean(phrase.isAlt));
    heroTitle.setAttribute("aria-label", phrase.lines.map((line) => line.text).join(" "));
    heroTitle.classList.remove("is-changing");
  };

  if (!animate) {
    updateTitle();
    return;
  }

  heroTitle.classList.add("is-changing");
  heroTransitionTimeout = window.setTimeout(updateTitle, 280);
}

function updateLanguageButtons(language) {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function closeLanguageMenu() {
  if (!languageMenu || !languageToggle) return;
  languageMenu.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations.es;
  currentLanguage = translations[language] ? language : "es";
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  dictionary.benefits.forEach((benefit, index) => {
    const key = ["benefitOne", "benefitTwo", "benefitThree"][index];
    const element = document.querySelector(`[data-i18n="${key}"]`);
    if (element) element.textContent = benefit;
  });

  currentHeroPhraseIndex = 0;
  if (dictionary.heroEditorialPhrases) {
    renderEditorialHeroPhrase(dictionary.heroEditorialPhrases[currentHeroPhraseIndex], false);
  } else {
    renderHeroPhrase(dictionary.heroPhrases[currentHeroPhraseIndex], false);
  }
  updateLanguageButtons(currentLanguage);
  storeLanguage(currentLanguage);
}

function startHeroRotation() {
  window.clearInterval(heroIntervalId);
  if (!heroTitle) return;

  const phrases = translations[currentLanguage].heroEditorialPhrases || translations[currentLanguage].heroPhrases;
  if (!phrases || phrases.length <= 1) return;
  if (!translations[currentLanguage].heroEditorialPhrases && (!heroTitleLines || !heroTitleHighlight)) return;

  heroIntervalId = window.setInterval(() => {
    currentHeroPhraseIndex = (currentHeroPhraseIndex + 1) % phrases.length;
    if (translations[currentLanguage].heroEditorialPhrases) {
      renderEditorialHeroPhrase(phrases[currentHeroPhraseIndex]);
    } else {
      renderHeroPhrase(phrases[currentHeroPhraseIndex]);
    }
  }, HERO_ROTATION_MS);
}

languageToggle?.addEventListener("click", () => {
  const isOpen = languageMenu && !languageMenu.hidden;
  if (!languageMenu) return;
  languageMenu.hidden = isOpen;
  languageToggle.setAttribute("aria-expanded", String(!isOpen));
});

languageMenu?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (!button) return;
  applyLanguage(button.dataset.lang);
  closeLanguageMenu();
});

document.addEventListener("click", (event) => {
  if (!languageSwitcher || languageSwitcher.contains(event.target)) return;
  closeLanguageMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLanguageMenu();
});

applyLanguage(currentLanguage);
startHeroRotation();

const fallbackImages = {
  CADERA: "assets/newsletter/fractura_cadera.webp",
  RODILLA: "assets/newsletter/nuevas_superficies.webp",
  TRAUMA: "assets/newsletter/placas.webp",
  INVESTIGACION: "assets/newsletter/impresion.webp",
  INVESTIGACIÓN: "assets/newsletter/impresion.webp",
  NOVEDADES: "assets/newsletter/actualizacion.webp",
  cadera: "assets/newsletter/fractura_cadera.webp",
  trauma: "assets/newsletter/placas.webp",
  implantes: "assets/newsletter/nuevas_superficies.webp",
  ortopedia: "assets/newsletter/nuevas_superficies.webp",
  innovacion: "assets/newsletter/impresion.webp",
  regulacion: "assets/newsletter/actualizacion.webp",
  default: "assets/newsletter/actualizacion.webp",
};

function getArticleImage(article) {
  return (
    article.image ||
    article.fallbackImage ||
    fallbackImages[article.category] ||
    fallbackImages.default
  );
}

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
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.13 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function initExperienceCounters() {
  const experienceSection = document.querySelector(".experience-section");
  const counters = experienceSection ? [...experienceSection.querySelectorAll(".count-up")] : [];
  if (!experienceSection || !counters.length) return;

  const formatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let hasAnimated = false;

  const setCounterValue = (counter, value) => {
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffix || "";
    counter.textContent = `${prefix}${formatter.format(Math.round(value))}${suffix}`;
  };

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.target || 0);
    const duration = 1400;
    const start = performance.now();
    counter.classList.add("is-counting");

    const tick = (time) => {
      const elapsed = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setCounterValue(counter, target * eased);

      if (elapsed < 1) {
        requestAnimationFrame(tick);
        return;
      }

      setCounterValue(counter, target);
      counter.classList.remove("is-counting");
    };

    requestAnimationFrame(tick);
  };

  const runCounters = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    counters.forEach((counter) => {
      if (prefersReducedMotion) {
        setCounterValue(counter, Number(counter.dataset.target || 0));
        return;
      }

      animateCounter(counter);
    });
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      runCounters();
      counterObserver.disconnect();
    },
    { threshold: 0.35 }
  );

  counterObserver.observe(experienceSection);
}

initExperienceCounters();

const header = document.querySelector("[data-elevate]");
window.addEventListener("scroll", () => {
  header?.classList.toggle("is-elevated", window.scrollY > 20);
});

const skeletonData = {
  front: {
    label: "Vista frontal",
    image: "assets/images/esqueleto-frontal.png",
    alt: "Esqueleto en vista frontal",
    initialZone: "femur",
    zones: [
      {
        id: "skull",
        label: "Cr\u00e1neo",
        nombre: "Cr\u00e1neo",
        categoria: "Cabeza y cuello",
        descripcion:
          "Estructura \u00f3sea que protege el enc\u00e9falo y sirve como base anat\u00f3mica para procedimientos especializados de reconstrucci\u00f3n y fijaci\u00f3n.",
        x: "50%",
        y: "11%",
        productos: [
          { nombre: "Placas craneales", descripcion: "Sistemas de soporte para reconstrucci\u00f3n craneal.", uso: "Reconstrucci\u00f3n y fijaci\u00f3n" },
          { nombre: "Sistemas de fijaci\u00f3n", descripcion: "Dispositivos internos para estabilizaci\u00f3n \u00f3sea.", uso: "Trauma especializado" },
        ],
        aplicaciones: ["Reconstrucci\u00f3n craneal", "Fijaci\u00f3n interna", "Trauma especializado"],
      },
      {
        id: "shoulder",
        label: "Hombro",
        nombre: "Hombro",
        categoria: "Miembro superior",
        descripcion:
          "Articulaci\u00f3n clave para movilidad superior, estabilidad y funci\u00f3n del brazo en procedimientos ortop\u00e9dicos especializados.",
        x: "42%",
        y: "25%",
        productos: [
          { nombre: "Pr\u00f3tesis de hombro", descripcion: "Soluciones internas para soporte y movilidad articular.", uso: "Artroplastia" },
          { nombre: "Sistemas de fijaci\u00f3n", descripcion: "Implantes para estabilidad en trauma ortop\u00e9dico.", uso: "Reconstrucci\u00f3n articular" },
        ],
        aplicaciones: ["Artroplastia", "Reconstrucci\u00f3n articular", "Trauma ortop\u00e9dico"],
      },
      {
        id: "spine",
        label: "Columna",
        nombre: "Columna",
        categoria: "Columna vertebral",
        descripcion: "Eje estructural del cuerpo humano, esencial para soporte, alineaci\u00f3n y protecci\u00f3n neurol\u00f3gica.",
        x: "50%",
        y: "36%",
        productos: [
          { nombre: "Sistemas de estabilizaci\u00f3n", descripcion: "Implantes para soporte y alineaci\u00f3n vertebral.", uso: "Cirug\u00eda de columna" },
          { nombre: "Implantes para columna", descripcion: "Soluciones internas para fijaci\u00f3n de alta precisi\u00f3n.", uso: "Fijaci\u00f3n interna" },
        ],
        aplicaciones: ["Estabilizaci\u00f3n vertebral", "Correcci\u00f3n estructural", "Fijaci\u00f3n interna"],
      },
      {
        id: "hip",
        label: "Cadera",
        nombre: "Cadera",
        categoria: "Pelvis y cadera",
        descripcion: "Articulaci\u00f3n de carga fundamental para movilidad, equilibrio y soporte corporal.",
        x: "50%",
        y: "54%",
        productos: [
          { nombre: "Pr\u00f3tesis de cadera", descripcion: "Implantes internos para restaurar movilidad y funci\u00f3n.", uso: "Reemplazo articular" },
          { nombre: "Componentes acetabulares", descripcion: "Sistemas para soporte y reconstrucci\u00f3n de cadera.", uso: "Artroplastia" },
        ],
        aplicaciones: ["Artroplastia", "Reemplazo articular", "Reconstrucci\u00f3n de cadera"],
      },
      {
        id: "femur",
        label: "F\u00e9mur",
        nombre: "F\u00e9mur",
        categoria: "Miembro inferior",
        descripcion: "Hueso largo del muslo que cumple una funci\u00f3n clave en movilidad, soporte de peso y estabilidad estructural.",
        x: "46%",
        y: "69%",
        productos: [
          { nombre: "Pr\u00f3tesis femoral", descripcion: "Soluci\u00f3n dise\u00f1ada para reconstrucci\u00f3n o reemplazo en la zona femoral.", uso: "Traumatolog\u00eda y ortopedia" },
          { nombre: "Clavo intramedular femoral", descripcion: "Sistema para estabilizaci\u00f3n interna en fracturas de f\u00e9mur.", uso: "Trauma ortop\u00e9dico" },
        ],
        aplicaciones: ["Artroplastia", "Fijaci\u00f3n interna", "Reconstrucci\u00f3n femoral"],
      },
      {
        id: "knee",
        label: "Rodilla",
        nombre: "Rodilla",
        categoria: "Miembro inferior",
        descripcion: "Articulaci\u00f3n esencial para marcha, flexi\u00f3n, estabilidad y transferencia de carga.",
        x: "50%",
        y: "78%",
        productos: [
          { nombre: "Pr\u00f3tesis de rodilla", descripcion: "Soluciones para estabilidad, resistencia y recuperaci\u00f3n funcional.", uso: "Reemplazo articular" },
          { nombre: "Sistemas de reemplazo articular", descripcion: "Componentes internos para reconstrucci\u00f3n de rodilla.", uso: "Reconstrucci\u00f3n" },
        ],
        aplicaciones: ["Reemplazo articular", "Reconstrucci\u00f3n", "Trauma ortop\u00e9dico"],
      },
    ],
  },
  back: {
    label: "Vista posterior",
    image: "assets/images/esqueleto-reverso.png",
    alt: "Esqueleto en vista posterior",
    initialZone: "posterior-spine",
    zones: [
      {
        id: "posterior-spine",
        label: "Columna posterior",
        nombre: "Columna posterior",
        categoria: "Columna vertebral",
        descripcion: "Vista posterior de la estructura vertebral, clave para soporte, alineaci\u00f3n y estabilizaci\u00f3n quir\u00fargica.",
        x: "50%",
        y: "35%",
        productos: [
          { nombre: "Sistemas de estabilizaci\u00f3n vertebral", descripcion: "Implantes para soporte estructural posterior.", uso: "Fijaci\u00f3n posterior" },
          { nombre: "Implantes posteriores", descripcion: "Soluciones internas para alineaci\u00f3n y estabilizaci\u00f3n.", uso: "Correcci\u00f3n estructural" },
        ],
        aplicaciones: ["Fijaci\u00f3n posterior", "Estabilizaci\u00f3n", "Correcci\u00f3n estructural"],
      },
      {
        id: "scapula",
        label: "Esc\u00e1pula",
        nombre: "Esc\u00e1pula",
        categoria: "Miembro superior",
        descripcion: "Estructura posterior del hombro que participa en movilidad, soporte y estabilidad escapular.",
        x: "42%",
        y: "27%",
        productos: [
          { nombre: "Sistemas de fijaci\u00f3n", descripcion: "Dispositivos para soporte y estabilidad escapular.", uso: "Trauma" },
          { nombre: "Placas anat\u00f3micas", descripcion: "Implantes para reconstrucci\u00f3n y fijaci\u00f3n interna.", uso: "Reconstrucci\u00f3n" },
        ],
        aplicaciones: ["Trauma", "Reconstrucci\u00f3n", "Fijaci\u00f3n interna"],
      },
      {
        id: "posterior-pelvis",
        label: "Pelvis posterior",
        nombre: "Pelvis posterior",
        categoria: "Pelvis y cadera",
        descripcion: "Regi\u00f3n \u00f3sea fundamental para transmisi\u00f3n de carga, estabilidad p\u00e9lvica y soporte de extremidades inferiores.",
        x: "50%",
        y: "55%",
        productos: [
          { nombre: "Sistemas p\u00e9lvicos", descripcion: "Soluciones para soporte y reconstrucci\u00f3n p\u00e9lvica.", uso: "Estabilizaci\u00f3n p\u00e9lvica" },
          { nombre: "Implantes de fijaci\u00f3n", descripcion: "Dispositivos internos para trauma ortop\u00e9dico.", uso: "Trauma ortop\u00e9dico" },
        ],
        aplicaciones: ["Estabilizaci\u00f3n p\u00e9lvica", "Trauma ortop\u00e9dico", "Reconstrucci\u00f3n"],
      },
      {
        id: "posterior-femur",
        label: "F\u00e9mur posterior",
        nombre: "F\u00e9mur posterior",
        categoria: "Miembro inferior",
        descripcion: "Vista posterior del hueso femoral, relevante en procedimientos de fijaci\u00f3n, reemplazo y reconstrucci\u00f3n estructural.",
        x: "54%",
        y: "69%",
        productos: [
          { nombre: "Clavo intramedular femoral", descripcion: "Sistema para estabilizaci\u00f3n interna del f\u00e9mur.", uso: "Fijaci\u00f3n interna" },
          { nombre: "Pr\u00f3tesis femoral", descripcion: "Soluci\u00f3n para reemplazo o reconstrucci\u00f3n estructural.", uso: "Reconstrucci\u00f3n femoral" },
        ],
        aplicaciones: ["Fijaci\u00f3n interna", "Reconstrucci\u00f3n femoral", "Trauma ortop\u00e9dico"],
      },
      {
        id: "posterior-knee",
        label: "Rodilla posterior",
        nombre: "Rodilla posterior",
        categoria: "Miembro inferior",
        descripcion: "Regi\u00f3n posterior de la articulaci\u00f3n de rodilla, importante para estabilidad, movilidad y soporte funcional.",
        x: "50%",
        y: "78%",
        productos: [
          { nombre: "Sistemas de rodilla", descripcion: "Componentes internos orientados a estabilidad y funci\u00f3n.", uso: "Reemplazo articular" },
          { nombre: "Componentes articulares", descripcion: "Soluciones para recuperaci\u00f3n del movimiento.", uso: "Reconstrucci\u00f3n" },
        ],
        aplicaciones: ["Reemplazo articular", "Reconstrucci\u00f3n", "Estabilizaci\u00f3n"],
      },
    ],
  },
};

const selectors = {
  category: document.querySelector("#bone-category"),
  name: document.querySelector("#bone-name"),
  description: document.querySelector("#bone-description"),
  products: document.querySelector("#bone-products"),
  applications: document.querySelector("#bone-applications"),
  image: document.querySelector("#anatomy-skeleton-image"),
  hotspots: document.querySelector("[data-anatomy-hotspots]"),
  stage: document.querySelector("[data-skeleton-stage]"),
  viewButtons: document.querySelectorAll("[data-anatomy-view]"),
};

let activeAnatomyView = "front";
let activeBoneId = skeletonData.front.initialZone;
let anatomyProducts = Object.values(skeletonData).flatMap((view) => view.zones);

function renderNewsArticles(articles) {
  const carousel = document.querySelector("[data-news-carousel]");
  if (!carousel) return;

  const validArticles = articles.filter((article) => article.url && /^https?:\/\//.test(article.url));
  const cards = validArticles
    .map((article) => {
      const image = getArticleImage(article);
      const imageAlt = article.imageAlt || `Imagen medica relacionada con ${article.category || "BET"}`;
      const category = article.category || "BET";

      return `
        <article class="news-card">
          <img src="${escapeHtml(image)}" alt="${escapeHtml(imageAlt)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${escapeHtml(fallbackImages.default)}';">
          <div class="news-card-body">
            <span class="news-category">${escapeHtml(category)}</span>
            <h3>${escapeHtml(article.title)}</h3>
            <p>${escapeHtml(article.description)}</p>
            <a class="news-link" href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer"><span>Leer m&aacute;s</span><span aria-hidden="true">&rarr;</span></a>
          </div>
        </article>
      `;
    })
    .join("");

  const loopCards = newsViewportQuery.matches ? "" : cards;
  carousel.innerHTML = cards ? `<div class="news-track">${cards}${loopCards}</div>` : "";
}

function rerenderNewsForViewport() {
  if (!newsletterArticles.length) return;
  renderNewsArticles(newsletterArticles);
}

if (newsViewportQuery.addEventListener) {
  newsViewportQuery.addEventListener("change", rerenderNewsForViewport);
} else {
  newsViewportQuery.addListener(rerenderNewsForViewport);
}

function getActiveViewData() {
  return skeletonData[activeAnatomyView] || skeletonData.front;
}

function renderAnatomyHotspots() {
  if (!selectors.hotspots) return;
  const viewData = getActiveViewData();

  selectors.hotspots.innerHTML = viewData.zones
    .map(
      (zone) => `
        <button
          class="bone-target${zone.id === activeBoneId ? " is-active" : ""}"
          type="button"
          data-bone="${escapeHtml(zone.id)}"
          aria-label="${escapeHtml(zone.label)}"
          aria-pressed="${zone.id === activeBoneId}"
          style="--bone-x: ${escapeHtml(zone.x)}; --bone-y: ${escapeHtml(zone.y)};"
        >
          <span class="sr-only">${escapeHtml(zone.label)}</span>
        </button>
      `
    )
    .join("");
}

function setAnatomyView(viewKey) {
  if (!skeletonData[viewKey]) return;
  activeAnatomyView = viewKey;
  const viewData = getActiveViewData();
  activeBoneId = viewData.zones.some((zone) => zone.id === activeBoneId) ? activeBoneId : viewData.initialZone;

  selectors.viewButtons.forEach((button) => {
    const isActive = button.dataset.anatomyView === activeAnatomyView;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (selectors.image) {
    selectors.image.src = viewData.image;
    selectors.image.alt = viewData.alt;
  }

  if (selectors.stage) {
    selectors.stage.classList.remove("is-rotating");
    void selectors.stage.offsetWidth;
    selectors.stage.classList.add("is-rotating");
  }

  renderBone(activeBoneId);
}

function renderBone(boneId) {
  const viewData = getActiveViewData();
  const bone = viewData.zones.find((item) => item.id === boneId) || viewData.zones[0];
  if (!bone) return;
  activeBoneId = bone.id;

  renderAnatomyHotspots();

  selectors.category.textContent = bone.categoria;
  selectors.name.textContent = bone.nombre;
  selectors.description.textContent = bone.descripcion;
  selectors.products.innerHTML = bone.productos
    .map(
      (product) => `
        <article class="product-mini">
          <strong>${escapeHtml(product.nombre)}</strong>
          ${product.descripcion ? `<span>${escapeHtml(product.descripcion)}</span>` : ""}
          ${product.uso ? `<small>${escapeHtml(product.uso)}</small>` : ""}
        </article>
      `
    )
    .join("");
  selectors.applications.innerHTML = bone.aplicaciones.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

selectors.hotspots?.addEventListener("click", (event) => {
  const target = event.target.closest("[data-bone]");
  if (!target) return;
  renderBone(target.dataset.bone);
});

selectors.viewButtons.forEach((button) => {
  button.addEventListener("click", () => setAnatomyView(button.dataset.anatomyView));
});

renderBone(activeBoneId);

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

const valueAccordion = document.querySelector("[data-value-accordion]");

function setActiveValuePanel(panelId) {
  if (!valueAccordion) return;

  valueAccordion.querySelectorAll("[data-value-panel]").forEach((panel) => {
    const isActive = panel.dataset.valuePanel === panelId;
    panel.classList.toggle("is-active", isActive);
    panel.setAttribute("aria-expanded", String(isActive));
  });
}

valueAccordion?.addEventListener("click", (event) => {
  const panel = event.target.closest("[data-value-panel]");
  if (!panel) return;
  setActiveValuePanel(panel.dataset.valuePanel);
});

const focusSection = document.querySelector(".focus-section");
const focusVisual = document.querySelector("[data-focus-visual]");
const focusButtons = [...document.querySelectorAll("[data-focus-option]")];
const focusCardTitle = document.querySelector("[data-focus-card-title]");
const focusCardText = document.querySelector("[data-focus-card-text]");
const focusCardContent = document.querySelector(".focus-card-content");
let lastFocusScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

const focusStates = {
  mission: {
    title: "MISI\u00d3N",
    text: "Impulsar procedimientos quir\u00fargicos de alta precisi\u00f3n mediante soluciones m\u00e9dicas confiables, especializadas y cl\u00ednicamente respaldadas.",
  },
  vision: {
    title: "VISI\u00d3N",
    text: "Transformar la forma en que hospitales y especialistas acceden a soluciones quir\u00fargicas, elevando los est\u00e1ndares de precisi\u00f3n y confianza.",
  },
  bet: {
    title: "BET",
    text: "Proveemos soluciones precisas que respaldan decisiones quir\u00fargicas cr\u00edticas, con disponibilidad, calidad y acompa\u00f1amiento especializado.",
  },
};

function resetFocusSection() {
  if (!focusVisual) return;

  focusVisual.classList.remove("is-card");
  focusVisual.removeAttribute("data-active-focus");
  focusCardContent?.setAttribute("aria-hidden", "true");
  focusButtons.forEach((button) => button.setAttribute("aria-pressed", "false"));
}

function setFocusSectionState(stateId) {
  const state = focusStates[stateId];
  if (!state || !focusVisual || !focusCardTitle || !focusCardText) return;

  focusCardTitle.textContent = state.title;
  focusCardText.textContent = state.text;
  focusCardContent?.setAttribute("aria-hidden", "false");
  focusVisual.classList.add("is-card");
  focusVisual.dataset.activeFocus = stateId;
  lastFocusScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
  focusButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.focusOption === stateId));
  });
}

focusButtons.forEach((button) => {
  button.addEventListener("click", () => setFocusSectionState(button.dataset.focusOption));
});

if (focusSection && focusVisual) {
  let focusScrollFrame = 0;

  window.addEventListener("scroll", () => {
    if (!focusVisual.classList.contains("is-card")) return;
    cancelAnimationFrame(focusScrollFrame);

    focusScrollFrame = requestAnimationFrame(() => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const isScrollingDown = currentScrollY > lastFocusScrollY;
      const rect = focusSection.getBoundingClientRect();
      const hasAdvancedPastFocus = rect.top < -(rect.height * 0.6);
      const isLeavingFocusDown = isScrollingDown && rect.top < 0 && rect.bottom < window.innerHeight * 0.85;
      const isOutOfView = rect.bottom <= 0 || rect.top >= window.innerHeight;
      lastFocusScrollY = currentScrollY;

      if (hasAdvancedPastFocus || isLeavingFocusDown || isOutOfView) {
        resetFocusSection();
      }
    });
  }, { passive: true });
}

const criteriaItems = [
  {
    number: "01",
    title: "Precisi\u00f3n cl\u00ednica",
    description: "Cada soluci\u00f3n responde a requerimientos m\u00e9dicos espec\u00edficos, no a inventario gen\u00e9rico.",
  },
  {
    number: "02",
    title: "Confiabilidad",
    description: "Disponibilidad y calidad en momentos donde el margen de error no existe.",
  },
  {
    number: "03",
    title: "Especializaci\u00f3n",
    description: "Enfoque profundo en pr\u00f3tesis internas y soluciones quir\u00fargicas.",
  },
  {
    number: "04",
    title: "Respaldo profesional",
    description: "Acompa\u00f1amiento a m\u00e9dicos y hospitales en la toma de decisiones.",
  },
  {
    number: "05",
    title: "Eficiencia operativa",
    description: "Respuesta r\u00e1pida, procesos claros y entrega oportuna.",
  },
];

const criteriaCard = document.querySelector(".criteria-card");
const criteriaNumber = document.querySelector(".criteria-number");
const criteriaTitle = document.querySelector(".criteria-content h3");
const criteriaDescription = document.querySelector(".criteria-content p");
const criteriaPrev = document.querySelector(".criteria-prev");
const criteriaNext = document.querySelector(".criteria-next");
let activeCriterionIndex = 0;

function formatCriteriaTitle(title) {
  const words = String(title).trim().split(/\s+/).filter(Boolean);
  if (words.length === 2) return `${escapeHtml(words[0])}<br>${escapeHtml(words[1])}`;
  return escapeHtml(title);
}

function renderCriterion(index, animate = true) {
  const item = criteriaItems[index];
  if (!item || !criteriaCard || !criteriaNumber || !criteriaTitle || !criteriaDescription) return;

  const updateCriterion = () => {
    criteriaNumber.textContent = item.number;
    criteriaTitle.innerHTML = formatCriteriaTitle(item.title);
    criteriaDescription.textContent = item.description;
    criteriaCard.setAttribute("aria-label", `${item.number}. ${item.title}. ${item.description}`);
    criteriaCard.classList.remove("is-changing");
  };

  if (!animate) {
    updateCriterion();
    return;
  }

  criteriaCard.classList.add("is-changing");
  window.setTimeout(updateCriterion, 180);
}

criteriaPrev?.addEventListener("click", () => {
  activeCriterionIndex = (activeCriterionIndex - 1 + criteriaItems.length) % criteriaItems.length;
  renderCriterion(activeCriterionIndex);
});

criteriaNext?.addEventListener("click", () => {
  activeCriterionIndex = (activeCriterionIndex + 1) % criteriaItems.length;
  renderCriterion(activeCriterionIndex);
});

renderCriterion(activeCriterionIndex, false);

function initRouteSection() {
  const routeSection = document.querySelector(".route-section");
  const routeSteps = routeSection ? [...routeSection.querySelectorAll(".route-step")] : [];
  if (!routeSection || !routeSteps.length) return;

  let routeFrame = 0;

  function updateRouteSteps() {
    routeFrame = 0;
    const rect = routeSection.getBoundingClientRect();
    const totalScrollable = routeSection.offsetHeight - window.innerHeight;
    const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
    const progress = totalScrollable > 0 ? scrolled / totalScrollable : 0;
    const index = Math.min(routeSteps.length - 1, Math.floor(progress * routeSteps.length));

    routeSteps.forEach((step, i) => {
      step.classList.toggle("is-active", i === index);
      step.classList.toggle("is-past", i < index);
      step.classList.toggle("is-future", i > index);
      if (i === index) {
        step.setAttribute("aria-current", "step");
      } else {
        step.removeAttribute("aria-current");
      }
    });
  }

  function requestRouteUpdate() {
    if (routeFrame) return;
    routeFrame = window.requestAnimationFrame(updateRouteSteps);
  }

  window.addEventListener("scroll", requestRouteUpdate, { passive: true });
  window.addEventListener("resize", requestRouteUpdate);
  updateRouteSteps();
}

initRouteSection();

const siteSections = [
  {
    title: "Soluciones medicas",
    description: "Protesis internas, osteosintesis, trauma y soporte hospitalario especializado.",
    target: "#enfoque",
    keywords: "protesis implantes osteosintesis trauma placas tornillos clavos instrumental",
  },
  {
    title: "Explorador anatomico",
    description: "Consulta areas anatomicas, productos relacionados y aplicaciones quirurgicas.",
    target: "#explorador",
    keywords: "femur cadera craneo clavicula humero tibia pelvis columna anatomia",
  },
  {
    title: "Proceso de atencion",
    description: "Analisis del caso, seleccion tecnica, coordinacion operativa y seguimiento.",
    target: "#proceso",
    keywords: "proceso analisis seleccion coordinacion seguimiento atencion",
  },
  {
    title: "Valores BET",
    description: "Precision clinica, confiabilidad, especializacion, respaldo profesional y eficiencia operativa.",
    target: "#criterios",
    keywords: "valores precision confiabilidad especializacion respaldo eficiencia",
  },
  {
    title: "Contacto BET",
    description: "Formulario y WhatsApp para orientacion comercial y disponibilidad.",
    target: "#contacto",
    keywords: "contacto whatsapp disponibilidad precios cotizacion informacion",
  },
];

function buildSearchIndex() {
  const anatomyItems = anatomyProducts.map((bone) => ({
    title: bone.nombre,
    description: `${bone.categoria}. ${bone.descripcion}`,
    target: "#explorador",
    keywords: `${bone.nombre} ${bone.categoria} ${bone.descripcion} ${bone.productos.map((item) => `${item.nombre} ${item.descripcion} ${item.uso}`).join(" ")} ${bone.aplicaciones.join(" ")}`,
  }));

  const articleItems = newsletterArticles.map((article) => ({
    title: article.title,
    description: `${article.source}. ${article.description}`,
    target: article.url,
    external: true,
    keywords: `${article.title} ${article.description} ${article.source}`,
  }));

  return [...siteSections, ...anatomyItems, ...articleItems];
}

function renderSearchResults(results, query) {
  const container = document.querySelector(".search-results");
  if (!container) return;

  if (!query.trim()) {
    container.innerHTML = "";
    container.classList.add("is-hidden");
    return;
  }

  container.classList.remove("is-hidden");

  if (results.length === 0) {
    container.innerHTML = `<p class="empty-state">No encontramos coincidencias. Puedes contactar a BET para orientacion personalizada.</p>`;
    return;
  }

  container.innerHTML = results
    .slice(0, 8)
    .map(
      (result) => `
        <article class="search-result-item">
          <div>
            <h4>${escapeHtml(result.title)}</h4>
            <p>${escapeHtml(result.description)}</p>
          </div>
          <button class="button glass-button small-button result-action" type="button" data-search-target="${escapeHtml(result.target)}" data-external="${result.external ? "true" : "false"}"><span>Ver seccion</span></button>
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

const searchResults = document.querySelector(".search-results");
searchResults?.classList.add("is-hidden");

document.querySelector(".site-search")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  executeSearch(input.value);
});

searchResults?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-search-target]");
  if (!button) return;

  const target = button.dataset.searchTarget;
  searchResults.classList.add("is-hidden");

  if (button.dataset.external === "true") {
    window.open(target, "_blank", "noopener,noreferrer");
    return;
  }

  document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".search-wrapper")) return;
  searchResults?.classList.add("is-hidden");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") searchResults?.classList.add("is-hidden");
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector(".form-status");
  const submitButton = form.querySelector("button[type='submit']");
  const submitLabel = submitButton?.querySelector("span");
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
    name: String(formData.get("name")).trim(),
    area: String(formData.get("area")).trim(),
    contact: String(formData.get("contact")).trim(),
    message: String(formData.get("message")).trim(),
  };
  const message = `Hola BET, soy ${payload.name}. Me interesa recibir informacion sobre ${payload.area}. Mi contacto es ${payload.contact}. ${payload.message}`;
  const whatsappLink = form.querySelector("[data-whatsapp-link]");
  whatsappLink.href = createWhatsAppUrl(message);

  submitButton.disabled = true;
  if (submitLabel) submitLabel.textContent = translations[currentLanguage].preparingRequest;
  status.textContent = "Intentando enviar la solicitud. Si el correo no esta disponible, abriremos WhatsApp.";
  status.className = "form-status";

  fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "No se pudo enviar la solicitud.");
      status.textContent = "Solicitud enviada. El equipo de BET dara seguimiento con la informacion proporcionada.";
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
      if (submitLabel) submitLabel.textContent = translations[currentLanguage].submitRequest;
    });
});

function handleAssistantMessage(message) {
  const text = normalizeText(message);

  if (/(protesis|implante|implantes)/.test(text)) {
    return "Claro. BET trabaja con protesis internas, implantes y soluciones quirurgicas para procedimientos ortopedicos y de trauma. Si me dices el area anatomica, puedo orientarte mejor.";
  }
  if (/(femur|cadera)/.test(text)) {
    return "Para femur y cadera, BET puede orientar sobre protesis femoral, clavos intramedulares, placas y soluciones de reconstruccion segun el requerimiento quirurgico.";
  }
  if (/(craneo|craneal|craneomaxilofacial)/.test(text)) {
    return "En craneo y region craneomaxilofacial, la orientacion suele enfocarse en placas, fijacion y reconstruccion. Para validar disponibilidad, te recomiendo contactar directamente a BET.";
  }
  if (/(contacto|whatsapp|telefono|correo)/.test(text)) {
    return "Puedes contactar a BET por WhatsApp desde este chat o usar el formulario de contacto. Comparte area de interes, datos de contacto y mensaje para dar mejor seguimiento.";
  }
  if (/(precio|precios|cotizacion|costo|costos)/.test(text)) {
    return "Los precios dependen del producto, zona anatomica, disponibilidad y requerimiento quirurgico. Para cotizacion, lo mejor es enviar los datos del caso por WhatsApp.";
  }
  if (/(disponibilidad|disponible|inventario|entrega)/.test(text)) {
    return "La disponibilidad se revisa por area anatomica, producto y tiempo de procedimiento. BET puede darte seguimiento directo por WhatsApp.";
  }
  if (/(proceso|atencion|seleccion|seguimiento)/.test(text)) {
    return "El proceso BET contempla analisis del caso, seleccion tecnica, coordinacion operativa y seguimiento para futuras decisiones clinicas.";
  }

  return "Puedo ayudarte a ubicar informacion general. Para una solicitud especifica, te recomiendo contactar directamente a BET por WhatsApp.";
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
