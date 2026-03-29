document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  //  CURSOR PERSONALIZADO
  // ===========================
  const dot  = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  if (dot && ring && window.matchMedia("(pointer: fine)").matches) {
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform  = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });

    (function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(animateRing);
    })();

    document.querySelectorAll("a, button, .project-card, .about-card, .cert-group, .skill-item").forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  // ===========================
  //  HEADER SCROLL
  // ===========================
  const header = document.getElementById("site-header");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);

    // Active nav link
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    document.querySelectorAll(".nav-link").forEach(a => {
      const href = a.getAttribute("href")?.replace("#", "");
      a.classList.toggle("active", href === current);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ===========================
  //  MOBILE NAV TOGGLE
  // ===========================
  const toggleBtn = document.getElementById("menu-toggle");
  const nav       = document.getElementById("main-nav");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", !expanded);
      nav.classList.toggle("show");
    });

    document.querySelectorAll("#main-nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
        toggleBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close on click outside
    document.addEventListener("click", e => {
      if (!nav.contains(e.target) && !toggleBtn.contains(e.target)) {
        nav.classList.remove("show");
        toggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ===========================
  //  SALUDO ANIMADO
  // ===========================
  const saludarBtn     = document.getElementById("saludarBtn");
  const mensajeSaludo  = document.getElementById("mensajeSaludo");
  let isAnimating = false;

  function mostrarSaludo() {
    if (isAnimating || !mensajeSaludo) return;
    isAnimating = true;
    mensajeSaludo.textContent = "¡Hola! Bienvenido a mi portafolio de Ciencia de Datos 🚀";
    mensajeSaludo.animate(
      [{ opacity: 0, transform: "translateY(-8px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 350, easing: "ease-out", fill: "forwards" }
    ).onfinish = () => {
      setTimeout(() => {
        mensajeSaludo.animate(
          [{ opacity: 1 }, { opacity: 0 }],
          { duration: 350, easing: "ease-in", fill: "forwards" }
        ).onfinish = () => {
          mensajeSaludo.textContent = "";
          isAnimating = false;
        };
      }, 4000);
    };
  }

  if (saludarBtn && mensajeSaludo) {
    saludarBtn.addEventListener("click", mostrarSaludo);
    saludarBtn.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); mostrarSaludo(); }
    });
  }

  // ===========================
  //  SKILL BARS ON SCROLL
  // ===========================
  const skillFills = document.querySelectorAll(".skill-fill");

  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(el => skillObserver.observe(el));

  // ===========================
  //  FADE-UP ANIMATIONS
  // ===========================
  const fadeEls = document.querySelectorAll(
    ".project-card, .cert-group, .about-card, .skill-item, .edu-card, .section-title, .section-label, .about-lead, .about-body"
  );

  fadeEls.forEach(el => el.classList.add("fade-up"));

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, (i % 6) * 80); // stagger per batch
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  fadeEls.forEach(el => fadeObserver.observe(el));

});
