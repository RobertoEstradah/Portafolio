document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  //  THEME TOGGLE (DARK / LIGHT)
  // ===========================
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);

  function toggleTheme() {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleTheme();
    });
  }

  // ===========================
  //  INTERNACIONALIZACIÓN (i18n)
  // ===========================
  const translations = {
    es: {
      "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.skills": "Skills",
      "nav.certs": "Certificaciones", "nav.projects": "Proyectos", "nav.contact": "Contacto",
      "hero.badge": "Disponible para proyectos", "hero.greeting": "Hola, soy",
      "hero.role": "Físico Computacional · Data Engineering & Cloud",
      "hero.cv": "Descargar CV", "hero.contact": "Contáctame", "hero.greet": "¡Salúdame!",
      "hero.saludo": "¡Hola! Bienvenido a mi portafolio de Ciencia de Datos 🚀",
      "about.label": "Conoce más", "about.title.pre": "Sobre", "about.title.em": "mí",
      "about.lead": "Físico computacional con experiencia demostrada en análisis de datos, machine learning e ingeniería de datos en entornos cloud (Azure y Google Cloud).",
      "about.body": "Especializado en transformar grandes volúmenes de datos en insights accionables utilizando Python, Spark y SQL, con el objetivo de optimizar procesos y fundamentar decisiones de negocio.",
      "about.card1.title": "Competencia en Datos", "about.card1.desc": "Análisis y modelado con enfoques cuantitativos y rigor científico.",
      "about.card2.title": "Metodología Científica", "about.card2.desc": "Formular hipótesis, experimentar con datos y validar resultados.",
      "about.card3.title": "Resultados Aplicables", "about.card3.desc": "Transformar modelos en herramientas de negocio concretas y desplegables.",
      "skills.label": "Habilidades obtenidas", "skills.title.pre": "Hard",
      "skills.soft.title": "Soft Skills",
      "skills.soft.s1": "Responsabilidad", "skills.soft.s2": "Pragmatismo",
      "skills.soft.s3": "Comunicación efectiva", "skills.soft.s4": "Trabajo en equipo",
      "skills.soft.s5": "Resolución de problemas", "skills.soft.s6": "Adaptabilidad",
      "skills.soft.s7": "Aprendizaje continuo", "skills.soft.s8": "Pensamiento crítico",
      "skills.soft.s9": "Pensamiento analítico",
      "certs.label": "En continuo progreso", "certs.title.pre": "Licencias y", "certs.title.em": "Certificaciones",
      "edu.master": "Maestría en Ciencias de la Computación",
      "edu.master.desc": "Especialización en computación avanzada y métodos computacionales.",
      "edu.bachelor": "Licenciatura en Física",
      "edu.bachelor.desc": "Formación rigurosa en ciencias teóricas y aplicadas, proveyendo una base robusta para la resolución de problemas cuantitativos complejos en el dominio tecnológico.",
      "projects.label": "Trabajo selecto", "projects.title.pre": "Proyectos", "projects.title.em": "destacados",
      "contact.label": "¿Hablamos?", "contact.title.pre": "Ponte en", "contact.title.em": "contacto",
      "contact.lead": "¿Tienes un proyecto de datos o quieres colaborar? Escríbeme, estaré encantado de responder.",
      "contact.form.name": "Nombre", "contact.form.namePh": "Tu nombre",
      "contact.form.email": "Email", "contact.form.emailPh": "tu@email.com",
      "contact.form.message": "Mensaje", "contact.form.messagePh": "Cuéntame sobre tu proyecto...",
      "contact.form.send": "Enviar mensaje", "contact.find": "Encuéntrame en",
      "contact.cvAsk": "¿Prefieres el CV directo?"
    },
    en: {
      "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills",
      "nav.certs": "Certifications", "nav.projects": "Projects", "nav.contact": "Contact",
      "hero.badge": "Available for projects", "hero.greeting": "Hi, I'm",
      "hero.role": "Computational Physicist · Data Engineering & Cloud",
      "hero.cv": "Download CV", "hero.contact": "Contact me", "hero.greet": "Say hello!",
      "hero.saludo": "Hello! Welcome to my Data Science portfolio 🚀",
      "about.label": "Get to know me", "about.title.pre": "About", "about.title.em": "me",
      "about.lead": "Computational physicist with proven experience in data analysis, machine learning, and data engineering in cloud environments (Azure and Google Cloud).",
      "about.body": "Specialized in transforming large volumes of data into actionable insights using Python, Spark, and SQL, with the goal of optimizing processes and supporting business decisions.",
      "about.card1.title": "Data Proficiency", "about.card1.desc": "Analysis and modeling with quantitative approaches and scientific rigor.",
      "about.card2.title": "Scientific Methodology", "about.card2.desc": "Formulate hypotheses, experiment with data and validate results.",
      "about.card3.title": "Actionable Results", "about.card3.desc": "Transform models into concrete, deployable business tools.",
      "skills.label": "Acquired skills", "skills.title.pre": "Hard",
      "skills.soft.title": "Soft Skills",
      "skills.soft.s1": "Responsibility", "skills.soft.s2": "Pragmatism",
      "skills.soft.s3": "Effective communication", "skills.soft.s4": "Teamwork",
      "skills.soft.s5": "Problem solving", "skills.soft.s6": "Adaptability",
      "skills.soft.s7": "Continuous learning", "skills.soft.s8": "Critical thinking",
      "skills.soft.s9": "Analytical thinking",
      "certs.label": "Continuous progress", "certs.title.pre": "Licenses &", "certs.title.em": "Certifications",
      "edu.master": "Master's in Computer Science",
      "edu.master.desc": "Specialization in advanced computing and computational methods.",
      "edu.bachelor": "Bachelor's in Physics",
      "edu.bachelor.desc": "Rigorous training in theoretical and applied sciences, providing a robust foundation for solving complex quantitative problems in the tech domain.",
      "projects.label": "Selected work", "projects.title.pre": "Featured", "projects.title.em": "projects",
      "contact.label": "Let's talk?", "contact.title.pre": "Get in", "contact.title.em": "touch",
      "contact.lead": "Do you have a data project or want to collaborate? Write to me, I'll be happy to respond.",
      "contact.form.name": "Name", "contact.form.namePh": "Your name",
      "contact.form.email": "Email", "contact.form.emailPh": "you@email.com",
      "contact.form.message": "Message", "contact.form.messagePh": "Tell me about your project...",
      "contact.form.send": "Send message", "contact.find": "Find me on",
      "contact.cvAsk": "Prefer the CV directly?"
    },
    de: {
      "nav.home": "Start", "nav.about": "Über mich", "nav.skills": "Skills",
      "nav.certs": "Zertifikate", "nav.projects": "Projekte", "nav.contact": "Kontakt",
      "hero.badge": "Verfügbar für Projekte", "hero.greeting": "Hallo, ich bin",
      "hero.role": "Computerphysiker · Data Engineering & Cloud",
      "hero.cv": "Lebenslauf herunterladen", "hero.contact": "Kontakt aufnehmen", "hero.greet": "Sag Hallo!",
      "hero.saludo": "Hallo! Willkommen in meinem Data-Science-Portfolio 🚀",
      "about.label": "Lerne mich kennen", "about.title.pre": "Über", "about.title.em": "mich",
      "about.lead": "Computerphysiker mit nachgewiesener Erfahrung in Datenanalyse, maschinellem Lernen und Datentechnik in Cloud-Umgebungen (Azure und Google Cloud).",
      "about.body": "Spezialisiert darauf, große Datenmengen mit Python, Spark und SQL in umsetzbare Erkenntnisse umzuwandeln, um Prozesse zu optimieren und Geschäftsentscheidungen zu fundieren.",
      "about.card1.title": "Datenkompetenz", "about.card1.desc": "Analyse und Modellierung mit quantitativen Ansätzen und wissenschaftlicher Strenge.",
      "about.card2.title": "Wissenschaftliche Methodik", "about.card2.desc": "Hypothesen aufstellen, mit Daten experimentieren und Ergebnisse validieren.",
      "about.card3.title": "Anwendbare Ergebnisse", "about.card3.desc": "Modelle in konkrete, einsetzbare Geschäftswerkzeuge umwandeln.",
      "skills.label": "Erworbene Fähigkeiten", "skills.title.pre": "Hard",
      "skills.soft.title": "Soft Skills",
      "skills.soft.s1": "Verantwortung", "skills.soft.s2": "Pragmatismus",
      "skills.soft.s3": "Effektive Kommunikation", "skills.soft.s4": "Teamarbeit",
      "skills.soft.s5": "Problemlösung", "skills.soft.s6": "Anpassungsfähigkeit",
      "skills.soft.s7": "Kontinuierliches Lernen", "skills.soft.s8": "Kritisches Denken",
      "skills.soft.s9": "Analytisches Denken",
      "certs.label": "Kontinuierlicher Fortschritt", "certs.title.pre": "Lizenzen &", "certs.title.em": "Zertifikate",
      "edu.master": "Master in Informatik",
      "edu.master.desc": "Spezialisierung auf fortgeschrittene Informatik und Rechenmethoden.",
      "edu.bachelor": "Bachelor in Physik",
      "edu.bachelor.desc": "Rigorose Ausbildung in theoretischen und angewandten Wissenschaften als robuste Grundlage für komplexe quantitative Problemlösungen.",
      "projects.label": "Ausgewählte Arbeit", "projects.title.pre": "Ausgewählte", "projects.title.em": "Projekte",
      "contact.label": "Reden wir?", "contact.title.pre": "Kontakt", "contact.title.em": "aufnehmen",
      "contact.lead": "Haben Sie ein Datenprojekt oder möchten Sie zusammenarbeiten? Schreiben Sie mir, ich antworte gerne.",
      "contact.form.name": "Name", "contact.form.namePh": "Ihr Name",
      "contact.form.email": "E-Mail", "contact.form.emailPh": "sie@email.de",
      "contact.form.message": "Nachricht", "contact.form.messagePh": "Erzählen Sie mir von Ihrem Projekt...",
      "contact.form.send": "Nachricht senden", "contact.find": "Finden Sie mich auf",
      "contact.cvAsk": "Bevorzugen Sie den Lebenslauf direkt?"
    },
    fr: {
      "nav.home": "Accueil", "nav.about": "À propos", "nav.skills": "Compétences",
      "nav.certs": "Certifications", "nav.projects": "Projets", "nav.contact": "Contact",
      "hero.badge": "Disponible pour des projets", "hero.greeting": "Bonjour, je suis",
      "hero.role": "Physicien Computationnel · Data Engineering & Cloud",
      "hero.cv": "Télécharger CV", "hero.contact": "Me contacter", "hero.greet": "Dites bonjour!",
      "hero.saludo": "Bonjour! Bienvenue dans mon portfolio de Data Science 🚀",
      "about.label": "Apprenez à me connaître", "about.title.pre": "À propos de", "about.title.em": "moi",
      "about.lead": "Physicien computationnel avec une expérience avérée en analyse de données, apprentissage automatique et ingénierie des données dans des environnements cloud (Azure et Google Cloud).",
      "about.body": "Spécialisé dans la transformation de grands volumes de données en insights exploitables avec Python, Spark et SQL, pour optimiser les processus et soutenir les décisions d'affaires.",
      "about.card1.title": "Maîtrise des Données", "about.card1.desc": "Analyse et modélisation avec des approches quantitatives et une rigueur scientifique.",
      "about.card2.title": "Méthodologie Scientifique", "about.card2.desc": "Formuler des hypothèses, expérimenter avec des données et valider les résultats.",
      "about.card3.title": "Résultats Concrets", "about.card3.desc": "Transformer les modèles en outils métier concrets et déployables.",
      "skills.label": "Compétences acquises", "skills.title.pre": "Hard",
      "skills.soft.title": "Compétences humaines",
      "skills.soft.s1": "Responsabilité", "skills.soft.s2": "Pragmatisme",
      "skills.soft.s3": "Communication efficace", "skills.soft.s4": "Travail en équipe",
      "skills.soft.s5": "Résolution de problèmes", "skills.soft.s6": "Adaptabilité",
      "skills.soft.s7": "Apprentissage continu", "skills.soft.s8": "Pensée critique",
      "skills.soft.s9": "Pensée analytique",
      "certs.label": "Progrès continu", "certs.title.pre": "Licences &", "certs.title.em": "Certifications",
      "edu.master": "Master en Informatique",
      "edu.master.desc": "Spécialisation en informatique avancée et méthodes computationnelles.",
      "edu.bachelor": "Licence en Physique",
      "edu.bachelor.desc": "Formation rigoureuse en sciences théoriques et appliquées, fournissant une base solide pour résoudre des problèmes quantitatifs complexes dans le domaine technologique.",
      "projects.label": "Travaux sélectionnés", "projects.title.pre": "Projets", "projects.title.em": "en vedette",
      "contact.label": "On discute?", "contact.title.pre": "Prendre", "contact.title.em": "contact",
      "contact.lead": "Vous avez un projet de données ou souhaitez collaborer? Écrivez-moi, je serai ravi de répondre.",
      "contact.form.name": "Nom", "contact.form.namePh": "Votre nom",
      "contact.form.email": "E-mail", "contact.form.emailPh": "vous@email.fr",
      "contact.form.message": "Message", "contact.form.messagePh": "Parlez-moi de votre projet...",
      "contact.form.send": "Envoyer le message", "contact.find": "Retrouvez-moi sur",
      "contact.cvAsk": "Préférez-vous le CV directement?"
    }
  };

  const langLabels = { es: "ES", en: "EN", de: "DE", fr: "FR" };

  function applyLang(lang) {
    const t = translations[lang] || translations.es;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
    });
    const langCurrent = document.getElementById("lang-current");
    if (langCurrent) langCurrent.textContent = langLabels[lang] || lang.toUpperCase();
    document.querySelectorAll("#lang-dropdown [data-lang]").forEach(li => {
      li.classList.toggle("active", li.getAttribute("data-lang") === lang);
    });
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }

  // Language dropdown toggle
  const langSelector = document.getElementById("lang-selector");
  const langBtn      = document.getElementById("lang-btn");
  const langDropdown = document.getElementById("lang-dropdown");

  if (langBtn && langDropdown && langSelector) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = langSelector.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", open);
    });
    langDropdown.querySelectorAll("[data-lang]").forEach(li => {
      li.addEventListener("click", (e) => {
        e.stopPropagation();
        applyLang(li.getAttribute("data-lang"));
        langSelector.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", (e) => {
      if (!langSelector.contains(e.target)) {
        langSelector.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Apply saved or default language
  const savedLang = localStorage.getItem("lang") || "es";
  applyLang(savedLang);


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

    // Close on click outside (exclude theme toggle)
    document.addEventListener("click", e => {
      if (
        !nav.contains(e.target) &&
        !toggleBtn.contains(e.target) &&
        !e.target.closest("#theme-toggle")
      ) {
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
