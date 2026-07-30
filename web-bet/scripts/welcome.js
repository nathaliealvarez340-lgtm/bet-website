(() => {
  const overlay = document.querySelector("[data-welcome-overlay]");
  const body = document.body;
  let exitTimer = 0;
  let cleanupTimer = 0;
  let hasFinished = false;

  const finishWelcome = () => {
    if (hasFinished) return;
    hasFinished = true;
    window.clearTimeout(exitTimer);
    window.clearTimeout(cleanupTimer);
    body.classList.remove("welcome-active");
    overlay?.remove();
  };

  const dismissWelcome = () => {
    if (!overlay || hasFinished) {
      finishWelcome();
      return;
    }

    overlay.classList.add("is-leaving");
    overlay.setAttribute("aria-hidden", "true");
    overlay.addEventListener("transitionend", finishWelcome, { once: true });
    cleanupTimer = window.setTimeout(finishWelcome, 1100);
  };

  try {
    if (!overlay) {
      finishWelcome();
      return;
    }

    exitTimer = window.setTimeout(dismissWelcome, 4000);
    window.addEventListener("pagehide", finishWelcome, { once: true });
  } catch (error) {
    console.error("[BET] No fue posible completar la pantalla de bienvenida.", error);
    finishWelcome();
  }
})();
