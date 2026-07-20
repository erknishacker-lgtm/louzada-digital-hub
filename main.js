(() => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobile = document.querySelector("[data-nav-mobile]");

  if (toggle && mobile) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      const label = toggle.querySelector(".sr-only");
      if (label) label.textContent = open ? "Fechar menu" : "Abrir menu";
      mobile.hidden = !open;
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    mobile.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Hero feature tabs
  const tabRoot = document.querySelector("[data-tabs]");
  const panelsRoot = document.querySelector("[data-tab-panels]");
  const progress = document.querySelector("[data-tab-progress]");

  if (tabRoot && panelsRoot) {
    const tabs = [...tabRoot.querySelectorAll("[data-tab]")];
    const panels = [...panelsRoot.querySelectorAll("[data-panel]")];
    let index = 0;
    let timer;

    const show = (i) => {
      index = i;
      tabs.forEach((tab, n) => {
        const on = n === i;
        tab.classList.toggle("is-active", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach((panel, n) => {
        const on = n === i;
        panel.hidden = !on;
        panel.classList.toggle("is-active", on);
      });
      if (progress) {
        const count = tabs.length || 1;
        progress.style.width = `${100 / count}%`;
        progress.style.transform = `translateX(${i * 100}%)`;
      }
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        show(Number(tab.dataset.tab) || 0);
        restartAuto();
      });
    });

    const restartAuto = () => {
      clearInterval(timer);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || tabs.length < 2) return;
      timer = setInterval(() => {
        show((index + 1) % tabs.length);
      }, 4500);
    };

    show(0);
    restartAuto();
  }

  // Pause marquee when reduced motion (CSS also handles)
  const marquee = document.querySelector("[data-marquee] .marquee-track");
  if (marquee && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    marquee.style.animation = "none";
  }
})();
