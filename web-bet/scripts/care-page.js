(() => {
  const controller = new AbortController();
  const { signal } = controller;
  const whatsappUrl = "https://wa.me/525520810867?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20cuidados%20adecuados%20y%20productos%20BET.";
  const header = document.querySelector("[data-elevate]");
  const languageSwitcher = document.querySelector("[data-language-switcher]");
  const languageToggle = languageSwitcher?.querySelector(".language-toggle");
  const languageMenu = languageSwitcher?.querySelector(".language-menu");
  const languageCurrent = languageSwitcher?.querySelector("[data-language-current]");
  const mobileToggle = document.querySelector("[data-mobile-menu-toggle]");
  const mobileNav = document.querySelector(".mobile-nav");
  const navigationLabels = {
    es: {
      products: "Productos",
      solutions: "Soluciones",
      route: "Ruta",
      education: "Educaci\u00f3n",
      contact: "Contacto",
      current: "Espa\u00f1ol",
    },
    en: {
      products: "Products",
      solutions: "Solutions",
      route: "Journey",
      education: "Education",
      contact: "Contact",
      current: "English",
    },
  };

  const closeLanguageMenu = () => {
    if (!languageMenu || !languageToggle) return;
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
  };

  const closeMobileMenu = () => {
    if (!mobileNav || !mobileToggle) return;
    mobileNav.hidden = true;
    mobileToggle.setAttribute("aria-expanded", "false");
  };

  const applyNavigationLanguage = (language) => {
    const dictionary = navigationLabels[language] || navigationLabels.es;
    document.querySelectorAll("[data-care-nav]").forEach((link) => {
      link.textContent = dictionary[link.dataset.careNav];
    });
    if (languageCurrent) languageCurrent.textContent = dictionary.current;
    document.documentElement.lang = language;
  };

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappUrl;
  });

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-elevated", window.scrollY > 20);
  }, { passive: true, signal });

  languageToggle?.addEventListener("click", () => {
    const willOpen = languageMenu.hidden;
    languageMenu.hidden = !willOpen;
    languageToggle.setAttribute("aria-expanded", String(willOpen));
  }, { signal });

  languageMenu?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-lang]");
    if (!option) return;
    const language = navigationLabels[option.dataset.lang] ? option.dataset.lang : "es";
    try {
      window.localStorage.setItem("bet-language", language);
    } catch {
      // The selected language still applies for this page.
    }
    applyNavigationLanguage(language);
    closeLanguageMenu();
  }, { signal });

  mobileToggle?.addEventListener("click", () => {
    const willOpen = mobileNav.hidden;
    mobileNav.hidden = !willOpen;
    mobileToggle.setAttribute("aria-expanded", String(willOpen));
  }, { signal });

  mobileNav?.addEventListener("click", closeMobileMenu, { signal });

  document.addEventListener("click", (event) => {
    if (languageSwitcher && !languageSwitcher.contains(event.target)) closeLanguageMenu();
  }, { signal });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeLanguageMenu();
    closeMobileMenu();
  }, { signal });

  let storedLanguage = "es";
  try {
    storedLanguage = window.localStorage.getItem("bet-language") || "es";
  } catch {
    storedLanguage = "es";
  }
  applyNavigationLanguage(storedLanguage);

  window.addEventListener("pagehide", () => controller.abort(), { once: true });
})();
