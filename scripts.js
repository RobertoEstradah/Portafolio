document.addEventListener("DOMContentLoaded", () => {
  const saludarBtn = document.getElementById("saludarBtn");
  const mensajeSaludo = document.getElementById("mensajeSaludo");
  const header = document.querySelector("header");
  const nav = document.getElementById("main-nav");
  const toggleBtn = document.getElementById("menu-toggle");
  let isAnimating = false;

  // === FUNCIONES ===

  function mostrarSaludo() {
    if (isAnimating || !mensajeSaludo) return; // Verificar si mensajeSaludo existe
    isAnimating = true;
    mensajeSaludo.textContent = "¡Hola! Bienvenido a mi portafolio de Ciencia de Datos";
    // Color definido en CSS o como variable si se quiere dinámico
    // mensajeSaludo.style.color = "#007acc"; // Se puede manejar con una clase CSS
    // mensajeSaludo.style.fontWeight = "bold"; // Se puede manejar con una clase CSS
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
          mensajeSaludo.textContent = ""; // Limpiar el texto
          mensajeSaludo.style.opacity = "0"; // Resetear opacidad para la próxima animación
          isAnimating = false;
        };
      }, 5000);
    };
  }

  function ajustarHeaderScroll() {
    if (header) { // Verificar si header existe
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }

  function cerrarMenuMovil() {
    // Se puede usar window.matchMedia("(max-width: 768px)").matches para mayor robustez
    if (window.innerWidth <= 768 && nav && nav.classList.contains("show") && toggleBtn) {
      nav.classList.remove("show");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  }

  // === Toggle del menú móvil ===
  if (toggleBtn && nav) { // Verificar si los elementos existen
    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true" || false;
      toggleBtn.setAttribute("aria- expanded", !expanded);
      nav.classList.toggle("show");
    });
  }

  // === EVENTOS ===

  window.addEventListener("scroll", ajustarHeaderScroll);

  if (saludarBtn && mensajeSaludo) { // Verificar si ambos elementos existen
    saludarBtn.addEventListener("click", mostrarSaludo);
    saludarBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        mostrarSaludo();
      }
    });
  }

  if (nav) { // Verificar si nav existe
    document.querySelectorAll("#main-nav a").forEach(link => {
      link.addEventListener("click", cerrarMenuMovil);
    });
  }
});