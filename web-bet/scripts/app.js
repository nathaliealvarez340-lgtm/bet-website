const WHATSAPP_NUMBER = "525520810867";
const WHATSAPP_MESSAGE = "Hola, me interesa uno de sus productos. Podrian darme mas detalles y precios?";
const WHATSAPP_URL = "https://wa.me/525520810867?text=Hola%2C%20me%20interesa%20uno%20de%20sus%20productos.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles%20y%20precios%3F";
const HERO_ROTATION_MS = 5000;

const translations = {
  es: {
    navEnfoque: "\u00c1reas anat\u00f3micas",
    navExplorador: "Nosotros",
    navProceso: "Ruta",
    navEducacion: "Actualidad",
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
          { text: "Soluciones" },
          { text: "para" },
          { text: "ortopedia.", accent: true },
        ],
      },
    ],
    heroSubtitle: "Acercamos soluciones especializadas e informaci\u00f3n t\u00e9cnica a m\u00e9dicos e instituciones de salud para facilitar una evaluaci\u00f3n clara y responsable.",
    heroProductsCta: "Hablar con un asesor",
    focusTitle: 'Informaci\u00f3n <span class="title-accent">clara</span>.<br>Decisiones <span class="title-accent">responsables</span>.',
    criteriaTitleAria: "Criterios que importan en cada consulta profesional.",
    criteriaTitleHtml: '<span class="criteria-title-desktop-line" aria-hidden="true"><span class="criteria-accent">Criterios</span> que <span class="criteria-accent">importan</span></span><span class="criteria-title-desktop-line" aria-hidden="true">en cada consulta profesional.</span><span class="criteria-title-mobile-line" aria-hidden="true"><span class="criteria-accent">Criterios</span></span><span class="criteria-title-mobile-line" aria-hidden="true">que <span class="criteria-accent">importan</span></span><span class="criteria-title-mobile-line" aria-hidden="true">en cada</span><span class="criteria-title-mobile-line" aria-hidden="true">consulta</span><span class="criteria-title-mobile-line" aria-hidden="true">profesional</span>',
    criteriaWordOne: "Criterios",
    criteriaWordTwo: "importan",
    anatomyEyebrow: "\u00c1REAS ANAT\u00d3MICAS",
    anatomyTitle: "Explora las soluciones por regi\u00f3n anat\u00f3mica.",
    anatomyModelEyebrow: "MODELO INTERACTIVO",
    finalCtaTitle: '<span class="final-cta-title-part final-cta-title-conversemos">Conversemos</span> <span class="final-cta-title-part final-cta-title-sobre">sobre</span><br class="final-cta-title-mobile-break"> <span class="final-cta-title-part final-cta-title-la">la</span> <span class="final-cta-title-part final-cta-title-information">informaci\u00f3n</span><br class="final-cta-title-mobile-break"> <span class="final-cta-title-part final-cta-title-need">que necesitas.</span>',
    finalCtaSupport: "Solicita informaci\u00f3n sobre nuestras soluciones, categor\u00edas o documentos t\u00e9cnicos. El equipo de BET atender\u00e1 tu consulta y te orientar\u00e1 hacia la informaci\u00f3n disponible.",
    finalCtaButton: "Conversemos",
    contactName: "Nombre completo",
    contactEmail: "Correo profesional",
    contactRequest: "Mensaje",
    contactSend: "Enviar solicitud",
    contactSending: "Enviando...",
    contactSuccess: "Recibimos tu solicitud. Nuestro equipo se pondr\u00e1 en contacto contigo.",
    contactError: "No fue posible enviar la solicitud. Int\u00e9ntalo nuevamente o cont\u00e1ctanos por WhatsApp.",
    contactValidation: "Completa los campos requeridos antes de enviar la solicitud.",
    contactEmailValidation: "Ingresa un correo profesional v\u00e1lido.",
    heroAdvisorCta: "Hablar con un asesor",
    heroStatOneValue: "Consulta",
    heroStatOneLabel: "organizada por regi\u00f3n anat\u00f3mica",
    heroStatTwoValue: "Informaci\u00f3n",
    heroStatTwoLabel: "t\u00e9cnica disponible",
    heroStatThreeValue: "Atenci\u00f3n",
    heroStatThreeLabel: "profesional",
    heroMicrocopy: "Soluciones ortop\u00e9dicas e informaci\u00f3n t\u00e9cnica para consulta profesional.",
    heroPhrases: [
      {
        lines: ["SOLUCIONES ORTOP\u00c9DICAS", "E INFORMACI\u00d3N"],
        highlight: "T\u00c9CNICA",
      },
      {
        lines: ["CONSULTA POR", "REGI\u00d3N"],
        highlight: "ANAT\u00d3MICA",
      },
    ],
    benefits: [
      "Informaci\u00f3n t\u00e9cnica para consulta profesional",
      "Atenci\u00f3n orientada a cada solicitud",
      "Acceso organizado por regi\u00f3n anat\u00f3mica",
    ],
    contactTitle: "Conversemos sobre la informaci\u00f3n que necesitas.",
    contactTitleLineOne: "Conversemos sobre",
    contactTitleLineTwo: "la informaci\u00f3n",
    contactTitleAccent: "que necesitas.",
    contactCopy: "Comparte el \u00e1rea anat\u00f3mica y la informaci\u00f3n que necesitas. BET orientar\u00e1 tu consulta hacia las categor\u00edas y los documentos disponibles.",
    submitRequest: "Enviar solicitud",
    preparingRequest: "Preparando solicitud",
    contactWhatsapp: "Contactar por WhatsApp",
  },
  en: {
    navEnfoque: "Anatomical areas",
    navExplorador: "About BET",
    navProceso: "Process",
    navEducacion: "Insights",
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
          { text: "Orthopedic" },
          { text: "medical" },
          { text: "solutions.", accent: true },
        ],
      },
    ],
    heroSubtitle: "We connect physicians and healthcare institutions with specialized solutions and technical information for clear, responsible evaluation.",
    heroProductsCta: "Talk to an advisor",
    focusTitle: '<span class="title-accent">Clear</span> information.<br><span class="title-accent">Responsible</span> decisions.',
    criteriaTitleAria: "Criteria that matter in every professional review.",
    criteriaTitleHtml: '<span class="criteria-title-desktop-line" aria-hidden="true"><span class="criteria-accent">Criteria</span> that <span class="criteria-accent">matter</span></span><span class="criteria-title-desktop-line" aria-hidden="true">in every professional review.</span><span class="criteria-title-mobile-line" aria-hidden="true"><span class="criteria-accent">Criteria</span></span><span class="criteria-title-mobile-line" aria-hidden="true">that <span class="criteria-accent">matter</span></span><span class="criteria-title-mobile-line" aria-hidden="true">in every</span><span class="criteria-title-mobile-line" aria-hidden="true">professional</span><span class="criteria-title-mobile-line" aria-hidden="true">review</span>',
    criteriaWordOne: "Criteria",
    criteriaWordTwo: "matter",
    anatomyEyebrow: "ANATOMICAL AREAS",
    anatomyTitle: "Explore solutions by anatomical region.",
    anatomyModelEyebrow: "INTERACTIVE MODEL",
    finalCtaTitle: '<span class="final-cta-title-part final-cta-title-conversemos">Let\'s discuss</span><br class="final-cta-title-mobile-break"> <span class="final-cta-title-part final-cta-title-sobre">the</span> <span class="final-cta-title-part final-cta-title-information">information</span><br class="final-cta-title-mobile-break"> <span class="final-cta-title-part final-cta-title-need">you need.</span>',
    finalCtaSupport: "Request information about our solutions, categories, or technical documents. The BET team will review your inquiry and guide you to the available information.",
    finalCtaButton: "Let's talk",
    contactName: "Full name",
    contactEmail: "Professional email",
    contactRequest: "Message",
    contactSend: "Send request",
    contactSending: "Sending...",
    contactSuccess: "We received your request. Our team will contact you.",
    contactError: "We could not send your request. Please try again or contact us on WhatsApp.",
    contactValidation: "Complete the required fields before sending your request.",
    contactEmailValidation: "Enter a valid professional email address.",
    heroAdvisorCta: "Talk to an advisor",
    heroStatOneValue: "Browse",
    heroStatOneLabel: "by anatomical region",
    heroStatTwoValue: "Technical",
    heroStatTwoLabel: "information available",
    heroStatThreeValue: "Professional",
    heroStatThreeLabel: "assistance",
    heroMicrocopy: "Orthopedic solutions and technical information for professional review.",
    heroPhrases: [
      {
        lines: ["ORTHOPEDIC SOLUTIONS", "AND TECHNICAL"],
        highlight: "INFORMATION",
      },
      {
        lines: ["BROWSE BY", "ANATOMICAL"],
        highlight: "REGION",
      },
    ],
    benefits: [
      "Technical information for professional review",
      "Assistance focused on each request",
      "Access organized by anatomical region",
    ],
    contactTitle: "Let's discuss the information you need.",
    contactTitleLineOne: "Let's discuss",
    contactTitleLineTwo: "the information",
    contactTitleAccent: "you need.",
    contactCopy: "Share the anatomical area and the information you need. BET will guide your inquiry to the available categories and documents.",
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
const mobileViewportQuery = window.matchMedia("(max-width: 767px)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
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
const languageCurrent = document.querySelector("[data-language-current]");
const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavQuery = window.matchMedia("(max-width: 767px)");
const languageLabels = {
  es: "Espa\u00f1ol",
  en: "English",
};

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
    button.textContent = languageLabels[button.dataset.lang] || button.textContent;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  if (languageCurrent) languageCurrent.textContent = languageLabels[language] || languageLabels.es;
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

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) element.placeholder = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  const anatomyPanelEyebrow = document.querySelector("#bone-category");
  if (anatomyPanelEyebrow) anatomyPanelEyebrow.textContent = dictionary.anatomyModelEyebrow;

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

function setMobileMenuOpen(isOpen) {
  if (!mobileMenuToggle || !mobileNav) return;
  mobileMenuToggle.classList.toggle("is-open", isOpen);
  mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileNav.hidden = !isOpen;
  document.body.classList.toggle("is-mobile-menu-open", isOpen);
}

mobileMenuToggle?.addEventListener("click", () => {
  setMobileMenuOpen(Boolean(mobileNav?.hidden));
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMobileMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMobileMenuOpen(false);
});

const closeMobileMenuOnDesktop = (event) => {
  if (!event.matches) setMobileMenuOpen(false);
};

if (mobileNavQuery.addEventListener) {
  mobileNavQuery.addEventListener("change", closeMobileMenuOnDesktop);
} else if (mobileNavQuery.addListener) {
  mobileNavQuery.addListener(closeMobileMenuOnDesktop);
}

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

const anatomyZonesSource = Array.isArray(window.BET_ANATOMY_ZONES) && window.BET_ANATOMY_ZONES.length ? window.BET_ANATOMY_ZONES : [];

function buildSkeletonDataFromZones(zones) {
  const normalizeZone = (zone) => ({
    ...zone,
    label: zone.region || zone.title,
    nombre: zone.title,
    categoria: zone.category,
    descripcion: zone.description,
    productos: (zone.products || []).map((product) => ({
      nombre: product.name,
      descripcion: product.description,
      uso: product.type,
      medida: product.measure,
      material: product.material,
    })),
    etiquetas: zone.tags || [],
    materiales: zone.materials || [],
    caracteristicas: zone.features || [],
    aplicaciones: zone.applications || [],
  });

  return {
    front: {
      label: "Vista frontal",
      image: "/assets/images/bet/esqueleto-frontal.png",
      alt: "Vista frontal del modelo anat\u00f3mico",
      initialZone: "proximal-femur",
      zones: zones.filter((zone) => zone.view === "front").map(normalizeZone),
    },
    back: {
      label: "Vista posterior",
      image: "/assets/images/bet/esqueleto-reverso.png",
      alt: "Vista posterior del modelo anat\u00f3mico",
      initialZone: "posterior-spine",
      zones: zones.filter((zone) => zone.view === "back").map(normalizeZone),
    },
  };
}

const skeletonData = anatomyZonesSource.length ? buildSkeletonDataFromZones(anatomyZonesSource) : {
  front: {
    label: "Vista frontal",
    image: "/assets/images/bet/esqueleto-frontal.png",
    alt: "Vista frontal del modelo anat\u00f3mico",
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
    image: "/assets/images/bet/esqueleto-reverso.png",
    alt: "Vista posterior del modelo anat\u00f3mico",
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
  workbench: document.querySelector(".anatomy-workbench"),
  category: document.querySelector("#bone-category"),
  categoryText: document.querySelector("#bone-category-text"),
  name: document.querySelector("#bone-name"),
  area: document.querySelector("#bone-area"),
  description: document.querySelector("#bone-description"),
  tags: document.querySelector("#bone-tags"),
  products: document.querySelector("#bone-products"),
  benefits: document.querySelector("#bone-benefits"),
  applications: document.querySelector("#bone-applications"),
  complementary: document.querySelector("#bone-complementary"),
  productImage: document.querySelector("#bone-product-image"),
  document: document.querySelector("#bone-document"),
  image: document.querySelector("#anatomy-skeleton-image"),
  imageFallback: document.querySelector("[data-skeleton-fallback]"),
  hotspots: document.querySelector("[data-anatomy-hotspots]"),
  stage: document.querySelector("[data-skeleton-stage]"),
  viewButtons: document.querySelectorAll("[data-anatomy-view]"),
  backButton: document.querySelector("[data-anatomy-back]"),
  pagesContainer: document.querySelector("[data-anatomy-pages]"),
  pages: document.querySelectorAll("[data-anatomy-page]"),
  previousPage: document.querySelector("[data-anatomy-page-previous]"),
  nextPage: document.querySelector("[data-anatomy-page-next]"),
  pageStatus: document.querySelector("[data-anatomy-page-status]"),
};

let activeAnatomyView = "front";
let activeBoneId = skeletonData.front.initialZone;
let anatomyProducts = Object.values(skeletonData).flatMap((view) => view.zones);
const availableProductImages = new Set([]);
const anatomyMobileQuery = window.matchMedia("(max-width: 767px)");
let mobileAnatomyPanel = "skeleton";
let activeAnatomyPage = 0;
let newsAutoFrame = 0;
let newsResumeTimeout = 0;
let newsAutoTrack = null;
let newsAutoObserver = null;
let newsAutoIsVisible = false;
let newsAutoPosition = 0;
let newsAutoViewportListeners = false;

function stopNewsletterAutoScroll() {
  if (newsAutoFrame) {
    window.clearInterval(newsAutoFrame);
    newsAutoFrame = 0;
  }
  newsAutoTrack?.classList.remove("is-auto-scrolling");
}

function canAutoScrollNewsletter() {
  return mobileViewportQuery.matches && !reducedMotionQuery.matches;
}

function runNewsletterAutoScroll() {
  if (!newsAutoTrack || !newsAutoIsVisible || !canAutoScrollNewsletter()) {
    stopNewsletterAutoScroll();
    return;
  }

  const maxScroll = newsAutoTrack.scrollWidth - newsAutoTrack.clientWidth;
  if (maxScroll > 1) {
    if (newsAutoTrack.scrollLeft >= maxScroll - 1) {
      newsAutoPosition = 0;
      newsAutoTrack.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      newsAutoPosition = Math.max(newsAutoPosition, newsAutoTrack.scrollLeft) + 0.55;
      newsAutoTrack.scrollLeft = newsAutoPosition;
    }
  }

}

function startNewsletterAutoScroll() {
  stopNewsletterAutoScroll();
  if (!newsAutoTrack || !newsAutoIsVisible || !canAutoScrollNewsletter()) return;
  newsAutoPosition = newsAutoTrack.scrollLeft;
  newsAutoTrack.classList.add("is-auto-scrolling");
  runNewsletterAutoScroll();
  newsAutoFrame = window.setInterval(runNewsletterAutoScroll, 50);
}

function pauseNewsletterAutoScroll() {
  stopNewsletterAutoScroll();
  window.clearTimeout(newsResumeTimeout);
  if (newsAutoTrack) newsAutoPosition = newsAutoTrack.scrollLeft;
  if (!canAutoScrollNewsletter()) return;
  newsResumeTimeout = window.setTimeout(startNewsletterAutoScroll, 3000);
}

function updateNewsletterAutoVisibility() {
  const section = document.querySelector(".news-section");
  if (!section || !newsAutoTrack || !canAutoScrollNewsletter()) {
    newsAutoIsVisible = false;
    stopNewsletterAutoScroll();
    return;
  }

  const rect = section.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
  newsAutoIsVisible = isVisible;

  if (isVisible) {
    startNewsletterAutoScroll();
  } else {
    stopNewsletterAutoScroll();
  }
}

function initNewsletterMobileAutoScroll() {
  stopNewsletterAutoScroll();
  window.clearTimeout(newsResumeTimeout);
  if (newsAutoObserver) {
    newsAutoObserver.disconnect();
    newsAutoObserver = null;
  }

  const section = document.querySelector(".news-section");
  const track = document.querySelector(".news-track");
  newsAutoTrack = track;
  newsAutoIsVisible = false;
  newsAutoPosition = 0;

  if (!section || !track || !canAutoScrollNewsletter()) return;

  if (!newsAutoViewportListeners) {
    window.addEventListener("scroll", updateNewsletterAutoVisibility, { passive: true });
    window.addEventListener("resize", updateNewsletterAutoVisibility);
    newsAutoViewportListeners = true;
  }

  if (!track.dataset.newsAutoListeners) {
    ["pointerdown", "touchstart", "wheel"].forEach((eventName) => {
      track.addEventListener(eventName, pauseNewsletterAutoScroll, { passive: true });
    });
    track.dataset.newsAutoListeners = "true";
  }

  newsAutoObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;
    newsAutoIsVisible = Boolean(entry?.isIntersecting);
    if (newsAutoIsVisible) {
      startNewsletterAutoScroll();
    } else {
      stopNewsletterAutoScroll();
    }
  }, { threshold: 0.35 });

  newsAutoObserver.observe(section);
  updateNewsletterAutoVisibility();
}

function renderNewsArticles(articles) {
  const carousel = document.querySelector("[data-news-carousel]");
  if (!carousel) return;

  const validArticles = articles.filter((article) => article.url && /^https?:\/\//.test(article.url));
  const cards = validArticles
    .map((article) => {
      const image = getArticleImage(article);
      const imageAlt = article.imageAlt || `Imagen m\u00e9dica relacionada con ${article.category || "BET"}`;
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
  initNewsletterMobileAutoScroll();
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

function handleNewsletterAutoQueryChange() {
  initNewsletterMobileAutoScroll();
}

if (mobileViewportQuery.addEventListener) {
  mobileViewportQuery.addEventListener("change", handleNewsletterAutoQueryChange);
} else {
  mobileViewportQuery.addListener(handleNewsletterAutoQueryChange);
}

if (reducedMotionQuery.addEventListener) {
  reducedMotionQuery.addEventListener("change", handleNewsletterAutoQueryChange);
} else {
  reducedMotionQuery.addListener(handleNewsletterAutoQueryChange);
}

function getActiveViewData() {
  return skeletonData[activeAnatomyView] || skeletonData.front;
}

function setMobileAnatomyPanel(panel) {
  mobileAnatomyPanel = panel === "details" ? "details" : "skeleton";
  if (selectors.workbench) selectors.workbench.dataset.mobilePanel = mobileAnatomyPanel;
  selectors.backButton?.toggleAttribute("hidden", mobileAnatomyPanel !== "details");
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

function updateSkeletonImage(viewData) {
  if (!selectors.image) return;

  const expectedPath = viewData.image;
  selectors.image.hidden = false;
  selectors.image.alt = viewData.alt;
  if (selectors.imageFallback) selectors.imageFallback.hidden = true;

  selectors.image.onload = () => {
    selectors.image.hidden = false;
    if (selectors.imageFallback) selectors.imageFallback.hidden = true;
  };

  selectors.image.onerror = () => {
    selectors.image.hidden = true;
    if (selectors.imageFallback) selectors.imageFallback.hidden = false;
    console.error(`[BET] No se pudo cargar la imagen anat\u00f3mica. Ruta esperada: ${expectedPath}`);
  };

  if (selectors.image.getAttribute("src") !== expectedPath) {
    selectors.image.src = expectedPath;
  } else if (selectors.image.complete && !selectors.image.naturalWidth) {
    selectors.image.onerror();
  }
}

function setAnatomyPage(pageIndex, shouldAnimate = true) {
  const lastPageIndex = Math.max(selectors.pages.length - 1, 0);
  activeAnatomyPage = Math.min(Math.max(pageIndex, 0), lastPageIndex);
  const previousHeight = selectors.pagesContainer?.getBoundingClientRect().height || 0;

  selectors.pages.forEach((page, index) => {
    const isActive = index === activeAnatomyPage;
    page.hidden = !isActive;
    page.classList.toggle("is-active", isActive);
    if (isActive) {
      page.setAttribute("aria-current", "page");
    } else {
      page.removeAttribute("aria-current");
    }
  });

  selectors.previousPage?.toggleAttribute("disabled", activeAnatomyPage === 0);
  selectors.nextPage?.toggleAttribute("disabled", activeAnatomyPage === lastPageIndex);
  if (selectors.pageStatus) selectors.pageStatus.textContent = `${activeAnatomyPage + 1} de ${lastPageIndex + 1}`;

  if (shouldAnimate && selectors.pagesContainer && !reducedMotionQuery.matches) {
    const nextHeight = selectors.pagesContainer.getBoundingClientRect().height;
    selectors.pagesContainer.animate(
      [
        { height: `${previousHeight}px`, opacity: 0.72, transform: "translateY(4px)" },
        { height: `${nextHeight}px`, opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 220,
        easing: "cubic-bezier(0.23, 1, 0.32, 1)",
      }
    );
  }
}

function setAnatomyView(viewKey) {
  if (!skeletonData[viewKey]) return;
  activeAnatomyView = viewKey;
  const viewData = getActiveViewData();
  activeBoneId = viewData.initialZone;

  selectors.viewButtons.forEach((button) => {
    const isActive = button.dataset.anatomyView === activeAnatomyView;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateSkeletonImage(viewData);

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
  setAnatomyPage(0, false);

  selectors.category.textContent = translations[currentLanguage].anatomyModelEyebrow;
  selectors.name.textContent = bone.nombre;
  if (selectors.area) selectors.area.textContent = bone.region || bone.anatomicalArea || "";
  if (selectors.categoryText) selectors.categoryText.textContent = bone.categoria || "";
  selectors.description.textContent = bone.descripcion;
  if (selectors.tags) {
    selectors.tags.innerHTML = (bone.etiquetas || [])
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");
    selectors.tags.hidden = !bone.etiquetas?.length;
  }
  if (selectors.productImage) {
    if (bone.image && availableProductImages.has(bone.image)) {
      selectors.productImage.hidden = false;
      selectors.productImage.src = bone.image;
      selectors.productImage.alt = `Soluci\u00f3n relacionada con ${bone.nombre}`;
      selectors.productImage.onerror = () => {
        selectors.productImage.hidden = true;
        selectors.productImage.removeAttribute("src");
      };
    } else {
      selectors.productImage.hidden = true;
      selectors.productImage.removeAttribute("src");
    }
  }
  selectors.products.innerHTML = bone.productos
    .map(
      (product) => `
        <article class="product-mini">
          <strong>${escapeHtml(product.nombre)}</strong>
          ${product.descripcion ? `<span>${escapeHtml(product.descripcion)}</span>` : ""}
          ${product.uso ? `<small>${escapeHtml(product.uso)}</small>` : ""}
          ${product.medida ? `<span class="product-mini-spec"><b>Especificaci\u00f3n:</b> ${escapeHtml(product.medida)}</span>` : ""}
          ${product.material ? `<span class="product-mini-spec"><b>Material:</b> ${escapeHtml(product.material)}</span>` : ""}
        </article>
      `
    )
    .join("");
  if (selectors.benefits) {
    selectors.benefits.innerHTML = (bone.benefits || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }
  selectors.applications.innerHTML = bone.aplicaciones.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  if (selectors.complementary) {
    const materials = (bone.materiales || []).length
      ? `<div><strong>Materiales</strong><ul>${bone.materiales.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`
      : "";
    const features = (bone.caracteristicas || []).length
      ? `<div><strong>Caracter\u00edsticas</strong><ul>${bone.caracteristicas.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`
      : "";
    selectors.complementary.innerHTML = materials || features
      ? `${materials}${features}`
      : '<p class="anatomy-complementary-note">Consulta el documento de referencia para revisar la informaci\u00f3n t\u00e9cnica disponible.</p>';
  }
  if (selectors.document) {
    if (bone.document?.href) {
      selectors.document.hidden = false;
      selectors.document.href = bone.document.href;
      selectors.document.textContent = bone.document.label || "Ver ficha t\u00e9cnica";
    } else {
      selectors.document.hidden = true;
      selectors.document.href = "#";
    }
  }
}

selectors.hotspots?.addEventListener("click", (event) => {
  const target = event.target.closest("[data-bone]");
  if (!target) return;
  renderBone(target.dataset.bone);
  if (anatomyMobileQuery.matches) setMobileAnatomyPanel("details");
});

selectors.viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const stageTop = selectors.stage?.getBoundingClientRect().top;

    const restoreStagePosition = () => {
      if (!selectors.stage || !Number.isFinite(stageTop)) return;
      const offset = selectors.stage.getBoundingClientRect().top - stageTop;
      if (Math.abs(offset) > 0.5) {
        window.scrollBy({ top: offset, behavior: "instant" });
      }
    };

    setAnatomyView(button.dataset.anatomyView);
    void selectors.workbench?.offsetHeight;
    restoreStagePosition();

    window.requestAnimationFrame(() => {
      restoreStagePosition();
      window.requestAnimationFrame(() => {
        restoreStagePosition();
      });
    });
  });
});

selectors.backButton?.addEventListener("click", () => {
  setMobileAnatomyPanel("skeleton");
});

selectors.previousPage?.addEventListener("click", () => {
  setAnatomyPage(activeAnatomyPage - 1);
});

selectors.nextPage?.addEventListener("click", () => {
  setAnatomyPage(activeAnatomyPage + 1);
});

if (anatomyMobileQuery.addEventListener) {
  anatomyMobileQuery.addEventListener("change", () => setMobileAnatomyPanel("skeleton"));
} else {
  anatomyMobileQuery.addListener(() => setMobileAnatomyPanel("skeleton"));
}

setMobileAnatomyPanel("skeleton");
updateSkeletonImage(getActiveViewData());
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
    text: "Facilitar el acceso a soluciones ortop\u00e9dicas e informaci\u00f3n t\u00e9cnica para m\u00e9dicos e instituciones de salud, mediante una atenci\u00f3n clara y responsable.",
  },
  vision: {
    title: "VISI\u00d3N",
    text: "Consolidar una experiencia de consulta ordenada que acerque informaci\u00f3n relevante a los profesionales del entorno ortop\u00e9dico.",
  },
  bet: {
    title: "BET",
    text: "Organizamos soluciones, categor\u00edas y documentaci\u00f3n para orientar cada solicitud sin sustituir el criterio del profesional de la salud.",
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
    title: "Claridad",
    description: "Informaci\u00f3n directa y comprensible para facilitar la consulta del especialista.",
  },
  {
    number: "02",
    title: "Precisi\u00f3n",
    description: "Datos organizados para identificar correctamente las caracter\u00edsticas de cada soluci\u00f3n.",
  },
  {
    number: "03",
    title: "Responsabilidad",
    description: "Comunicaci\u00f3n cuidadosa, sin sustituir la valoraci\u00f3n ni el criterio del profesional de la salud.",
  },
  {
    number: "04",
    title: "Cercan\u00eda",
    description: "Atenci\u00f3n profesional para responder preguntas y orientar la b\u00fasqueda de informaci\u00f3n.",
  },
  {
    number: "05",
    title: "Orden",
    description: "Acceso estructurado a categor\u00edas, documentos y recursos relevantes.",
  },
];

const criteriaCard = document.querySelector(".criteria-card");
const criteriaNumber = document.querySelector(".criteria-number");
const criteriaTitle = document.querySelector(".criteria-content h3");
const criteriaDescription = document.querySelector(".criteria-content p");
const criteriaPrev = document.querySelector(".criteria-prev");
const criteriaNext = document.querySelector(".criteria-next");
let activeCriterionIndex = 0;
let criteriaAutoTimer = 0;

function shouldAutoRotateCriteria() {
  return mobileViewportQuery.matches && !reducedMotionQuery.matches && criteriaItems.length > 1;
}

function stopCriteriaAutoRotate() {
  if (criteriaAutoTimer) {
    window.clearInterval(criteriaAutoTimer);
    criteriaAutoTimer = 0;
  }
}

function startCriteriaAutoRotate() {
  stopCriteriaAutoRotate();
  if (!shouldAutoRotateCriteria()) return;
  criteriaAutoTimer = window.setInterval(() => {
    activeCriterionIndex = (activeCriterionIndex + 1) % criteriaItems.length;
    renderCriterion(activeCriterionIndex);
  }, 3000);
}

function resetCriteriaAutoRotate() {
  stopCriteriaAutoRotate();
  startCriteriaAutoRotate();
}

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
  resetCriteriaAutoRotate();
});

criteriaNext?.addEventListener("click", () => {
  activeCriterionIndex = (activeCriterionIndex + 1) % criteriaItems.length;
  renderCriterion(activeCriterionIndex);
  resetCriteriaAutoRotate();
});

renderCriterion(activeCriterionIndex, false);

function handleCriteriaAutoQueryChange() {
  startCriteriaAutoRotate();
}

if (mobileViewportQuery.addEventListener) {
  mobileViewportQuery.addEventListener("change", handleCriteriaAutoQueryChange);
} else {
  mobileViewportQuery.addListener(handleCriteriaAutoQueryChange);
}

if (reducedMotionQuery.addEventListener) {
  reducedMotionQuery.addEventListener("change", handleCriteriaAutoQueryChange);
} else {
  reducedMotionQuery.addListener(handleCriteriaAutoQueryChange);
}

startCriteriaAutoRotate();

function initRouteSection() {
  const routeSection = document.querySelector(".route-section");
  const routeSteps = routeSection ? [...routeSection.querySelectorAll(".route-step")] : [];
  const routeLayout = routeSection?.querySelector(".route-layout");
  if (!routeSection || !routeSteps.length) return;

  let routeFrame = 0;

  function updateRouteSteps() {
    routeFrame = 0;
    const totalScrollable = routeSection.offsetHeight - window.innerHeight;
    const sectionTop = routeSection.offsetTop;
    const scrolled = Math.min(Math.max(window.scrollY - sectionTop, 0), totalScrollable);
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

    if (routeLayout) {
      if (mobileViewportQuery.matches && index === routeSteps.length - 1) {
        const currentTransform = new DOMMatrixReadOnly(window.getComputedStyle(routeLayout).transform);
        const finalCardBottom = routeSteps.at(-1).getBoundingClientRect().bottom - currentTransform.m42;
        const releaseThreshold = window.innerHeight - 32;
        const internalOffset = Math.max(0, finalCardBottom - releaseThreshold);
        routeLayout.style.transform = `translateY(-${internalOffset}px)`;
      } else {
        routeLayout.style.transform = "";
      }
    }
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
    title: "Enfoque BET",
    description: "Conoce c\u00f3mo BET organiza soluciones e informaci\u00f3n t\u00e9cnica para m\u00e9dicos e instituciones.",
    target: "#enfoque",
    keywords: "BET enfoque soluciones informaci\u00f3n t\u00e9cnica m\u00e9dicos instituciones",
  },
  {
    title: "\u00c1reas anat\u00f3micas",
    description: "Explora categor\u00edas y documentos disponibles por regi\u00f3n anat\u00f3mica.",
    target: "#explorador",
    keywords: "f\u00e9mur cadera h\u00famero tibia columna anatom\u00eda soluciones documentos",
  },
  {
    title: "Ruta de consulta",
    description: "Encuentra informaci\u00f3n t\u00e9cnica y orientaci\u00f3n para cada solicitud.",
    target: "#proceso",
    keywords: "ruta consulta informaci\u00f3n orientaci\u00f3n solicitud",
  },
  {
    title: "Criterios BET",
    description: "Claridad, precisi\u00f3n, responsabilidad, cercan\u00eda y orden en cada consulta.",
    target: "#criterios",
    keywords: "criterios claridad precisi\u00f3n responsabilidad cercan\u00eda orden",
  },
  {
    title: "Contacto BET",
    description: "Formulario y WhatsApp para solicitar informaci\u00f3n sobre soluciones y documentos.",
    target: "#contacto",
    keywords: "contacto whatsapp solicitud informaci\u00f3n soluciones documentos",
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
    container.innerHTML = `<p class="empty-state">No encontramos coincidencias. Puedes contactar a BET para recibir orientaci\u00f3n sobre la informaci\u00f3n disponible.</p>`;
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
          <button class="button glass-button small-button result-action" type="button" data-search-target="${escapeHtml(result.target)}" data-external="${result.external ? "true" : "false"}"><span>Ver secci\u00f3n</span></button>
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
  const dictionary = translations[currentLanguage] || translations.es;
  const status = form.querySelector(".form-status");
  const submitButton = form.querySelector("button[type='submit']");
  const submitLabel = submitButton?.querySelector("span");
  const requiredFields = [...form.querySelectorAll("[required]")];
  const invalidFields = requiredFields.filter((field) => !field.value.trim());

  form.querySelectorAll(".is-invalid").forEach((field) => field.classList.remove("is-invalid"));

  if (invalidFields.length > 0) {
    invalidFields.forEach((field) => field.classList.add("is-invalid"));
    status.textContent = dictionary.contactValidation;
    status.className = "form-status is-error";
    invalidFields[0].focus();
    return;
  }

  const formData = new FormData(form);
  const payload = {
    name: String(formData.get("name")).trim(),
    email: String(formData.get("email")).trim(),
    request: String(formData.get("request")).trim(),
  };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    const emailField = form.querySelector('[name="email"]');
    emailField?.classList.add("is-invalid");
    status.textContent = dictionary.contactEmailValidation;
    status.className = "form-status is-error";
    emailField?.focus();
    return;
  }

  const message = `Hola BET, soy ${payload.name}. Mi correo es ${payload.email}. Solicitud: ${payload.request}`;
  const whatsappLink = form.querySelector("[data-whatsapp-link]");
  if (whatsappLink) whatsappLink.href = createWhatsAppUrl(message);

  submitButton.disabled = true;
  if (submitLabel) submitLabel.textContent = dictionary.contactSending;
  status.textContent = dictionary.contactSending;
  status.className = "form-status";

  fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || dictionary.contactError);
      status.textContent = dictionary.contactSuccess;
      status.className = "form-status is-success";
      form.reset();
    })
    .catch((error) => {
      status.textContent = error.message || dictionary.contactError;
      status.className = "form-status is-error";
      window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    })
    .finally(() => {
      submitButton.disabled = false;
      if (submitLabel) submitLabel.textContent = translations[currentLanguage].contactSend;
    });
});

function handleAssistantMessage(message) {
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
    return "Puedes contactar a BET por WhatsApp desde este chat o usar el formulario. Comparte el \u00e1rea de inter\u00e9s y la informaci\u00f3n que necesitas.";
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
