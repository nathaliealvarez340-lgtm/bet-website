(() => {
  const WELCOME_DURATION = 4000;
  const EXIT_DURATION = 800;
  const welcomeScreen = document.querySelector("[data-welcome-screen]");
  const root = document.documentElement;
  let leaveTimer = 0;
  let cleanupTimer = 0;
  let cleaned = false;

  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    window.clearTimeout(leaveTimer);
    window.clearTimeout(cleanupTimer);
    window.removeEventListener("pagehide", handlePageHide);
    root.classList.remove("bet-welcome-active");
    welcomeScreen?.remove();
  };

  const handleTransitionEnd = (event) => {
    if (event.target !== welcomeScreen) return;
    if (event.propertyName !== "transform" && event.propertyName !== "opacity") return;
    cleanup();
  };

  const handlePageHide = () => {
    cleanup();
  };

  try {
    if (!welcomeScreen) {
      root.classList.remove("bet-welcome-active");
      return;
    }

    if (welcomeScreen.dataset.initialized === "true") {
      return;
    }

    welcomeScreen.dataset.initialized = "true";
    root.classList.add("bet-welcome-active");

    leaveTimer = window.setTimeout(() => {
      welcomeScreen.classList.add("is-leaving");
      welcomeScreen.setAttribute("aria-hidden", "true");
      welcomeScreen.addEventListener("transitionend", handleTransitionEnd);
      cleanupTimer = window.setTimeout(cleanup, EXIT_DURATION + 250);
    }, WELCOME_DURATION);

    window.addEventListener("pagehide", handlePageHide, { once: true });
  } catch (error) {
    console.error("[BET] No fue posible completar la pantalla de bienvenida.", error);
    cleanup();
  }
})();
