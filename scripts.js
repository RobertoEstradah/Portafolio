document.addEventListener("DOMContentLoaded", () => {
  const saludarBtn = document.getElementById("saludarBtn");
  const mensajeSaludo = document.getElementById("mensajeSaludo");
  const header = document.querySelector("header");
  const nav = document.getElementById("main-nav");
  const toggleBtn = document.getElementById("menu-toggle");
  let isAnimating = false;

  // === FUNCIONES ===

  function mostrarSaludo() {
    if (isAnimating) return;
    isAnimating = true;
    mensajeSaludo.textContent = "¡Hola! Bienvenido a mi portafolio de Ciencia de Datos 🚀";
    mensajeSaludo.style.color = "#007acc";
    mensajeSaludo.style.fontWeight = "bold";
    mensajeSaludo.style.opacity = "1";

    mensajeSaludo.animate(
      [{ transform: "translateY(-10px)", opacity: 0 }, { transform: "translateY(0)", opacity: 1 }],
      { duration: 400, easing: "ease-out", fill: "forwards" }
    ).onfinish = () => {
      setTimeout(() => {
        mensajeSaludo.animate(
          [{ opacity: 1 }, { opacity: 0 }],
          { duration: 400, easing: "ease-in", fill: "forwards" }
        ).onfinish = () => {
          mensajeSaludo.textContent = "";
          isAnimating = false;
        };
      }, 5000);
    };
  }

  function ajustarHeaderScroll() {
    header.style.backgroundColor = window.scrollY > 30 ? "#005f99" : "#1f73c2";
  }

  function cerrarMenuMovil() {
    if (window.innerWidth <= 768 && nav.classList.contains("show")) {
      nav.classList.remove("show");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  }

  // === NUEVO: Toggle del menú móvil ===
  toggleBtn.addEventListener("click", () => {
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("show");
  });

  // === EVENTOS ===

  window.addEventListener("scroll", ajustarHeaderScroll);

  if (saludarBtn && mensajeSaludo) {
    saludarBtn.addEventListener("click", mostrarSaludo);
    saludarBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        mostrarSaludo();
      }
    });
  }

  document.querySelectorAll("#main-nav a").forEach(link => {
    link.addEventListener("click", cerrarMenuMovil);
  });
});
