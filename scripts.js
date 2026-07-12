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
      "nav.home": "Inicio", "nav.about": "Sobre mí", "nav.experience": "Experiencia",
      "nav.skills": "Skills", "nav.certs": "Certificaciones", "nav.projects": "Proyectos", "nav.contact": "Contacto",
      "hero.badge": "Disponible para proyectos", "hero.greeting": "Hola, soy",
      "hero.role": "Físico Computacional · Data Engineering & Cloud",
      "hero.cv": "Descargar CV", "hero.contact": "Contáctame", "hero.projects": "Ver proyectos",
      "about.label": "Conoce más", "about.title.pre": "Sobre", "about.title.em": "mí",
      "about.lead": "Físico computacional y Data Engineer con experiencia en análisis de datos, machine learning e ingeniería de datos en cloud (Azure, GCP). Actualmente cursando Maestría en Ciencias Computacionales e investigando PINNs para simulaciones ópticas.",
      "about.body": "Especializado en transformar datos en insights accionables con Python, PyTorch, Spark y SQL. Combino rigor científico con experiencia práctica en cloud, ETL y enseñanza técnica de programación.",
      "about.card1.title": "Competencia en Datos", "about.card1.desc": "Análisis y modelado con enfoques cuantitativos y rigor científico.",
      "about.card2.title": "Metodología Científica", "about.card2.desc": "Formular hipótesis, experimentar con datos y validar resultados.",
      "about.card3.title": "Resultados Aplicables", "about.card3.desc": "Transformar modelos en herramientas de negocio concretas y desplegables.",
      "skills.label": "Habilidades obtenidas", "skills.title.pre": "Hard",
      "skills.cat.languages": "Lenguajes de Programación",
      "skills.cat.ml": "Machine Learning & IA",
      "skills.cat.data": "Análisis de Datos",
      "skills.cat.cloud": "Cloud & Big Data",
      "skills.cat.tools": "Herramientas & Dev",
      "skills.soft.title": "Soft Skills",
      "skills.soft.s1": "Responsabilidad", "skills.soft.s2": "Pragmatismo",
      "skills.soft.s3": "Comunicación efectiva", "skills.soft.s4": "Trabajo en equipo",
      "skills.soft.s5": "Resolución de problemas", "skills.soft.s6": "Adaptabilidad",
      "skills.soft.s7": "Aprendizaje continuo", "skills.soft.s8": "Pensamiento crítico",
      "skills.soft.s9": "Pensamiento analítico",
      "exp.label": "Trayectoria profesional", "exp.title.pre": "Experiencia", "exp.title.em": "Profesional",
      "certs.label": "En continuo progreso", "certs.title.pre": "Licencias y", "certs.title.em": "Certificaciones",
      "edu.master": "Maestría en Ciencias Computacionales",
      "edu.master.desc": "Especialización en aprendizaje profundo (Deep Learning), visión artificial y minería de datos de alto rendimiento.",
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
      "nav.home": "Home", "nav.about": "About", "nav.experience": "Experience",
      "nav.skills": "Skills", "nav.certs": "Certifications", "nav.projects": "Projects", "nav.contact": "Contact",
      "hero.badge": "Available for projects", "hero.greeting": "Hi, I'm",
      "hero.role": "Computational Physicist · Data Engineering & Cloud",
      "hero.cv": "Download CV", "hero.contact": "Contact me", "hero.projects": "View projects",
      "about.label": "Get to know me", "about.title.pre": "About", "about.title.em": "me",
      "about.lead": "Computational physicist and Data Engineer with experience in data analysis, machine learning and data engineering in cloud (Azure, GCP). Currently pursuing a Master's in Computational Science and researching PINNs for optical simulations.",
      "about.body": "Specialized in transforming data into actionable insights using Python, PyTorch, Spark and SQL, combining scientific rigor with practical cloud, ETL and technical teaching experience.",
      "about.card1.title": "Data Proficiency", "about.card1.desc": "Analysis and modeling with quantitative approaches and scientific rigor.",
      "about.card2.title": "Scientific Methodology", "about.card2.desc": "Formulate hypotheses, experiment with data and validate results.",
      "about.card3.title": "Actionable Results", "about.card3.desc": "Transform models into concrete, deployable business tools.",
      "skills.label": "Acquired skills", "skills.title.pre": "Hard",
      "skills.cat.languages": "Programming Languages",
      "skills.cat.ml": "Machine Learning & AI",
      "skills.cat.data": "Data Analysis",
      "skills.cat.cloud": "Cloud & Big Data",
      "skills.cat.tools": "Tools & Dev",
      "skills.soft.title": "Soft Skills",
      "skills.soft.s1": "Responsibility", "skills.soft.s2": "Pragmatism",
      "skills.soft.s3": "Effective communication", "skills.soft.s4": "Teamwork",
      "skills.soft.s5": "Problem solving", "skills.soft.s6": "Adaptability",
      "skills.soft.s7": "Continuous learning", "skills.soft.s8": "Critical thinking",
      "skills.soft.s9": "Analytical thinking",
      "exp.label": "Professional journey", "exp.title.pre": "Professional", "exp.title.em": "Experience",
      "certs.label": "Continuous progress", "certs.title.pre": "Licenses &", "certs.title.em": "Certifications",
      "edu.master": "Master's in Computational Science",
      "edu.master.desc": "Specialization in deep learning, computer vision and high-performance data mining.",
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
      "nav.home": "Start", "nav.about": "Über mich", "nav.experience": "Erfahrung",
      "nav.skills": "Skills", "nav.certs": "Zertifikate", "nav.projects": "Projekte", "nav.contact": "Kontakt",
      "hero.badge": "Verfügbar für Projekte", "hero.greeting": "Hallo, ich bin",
      "hero.role": "Computerphysiker · Data Engineering & Cloud",
      "hero.cv": "Lebenslauf herunterladen", "hero.contact": "Kontakt aufnehmen", "hero.projects": "Projekte ansehen",
      "about.label": "Lerne mich kennen", "about.title.pre": "Über", "about.title.em": "mich",
      "about.lead": "Computerphysiker und Data Engineer mit Erfahrung in Datenanalyse, maschinellem Lernen und Datentechnik in der Cloud (Azure, GCP). Aktuell im Master Computerwissenschaften und Forschung zu PINNs für optische Simulationen.",
      "about.body": "Spezialisiert auf die Umwandlung von Daten in verwertbare Erkenntnisse mit Python, PyTorch, Spark und SQL, kombiniert wissenschaftliche Strenge mit Cloud-, ETL- und Lehrpraxis.",
      "about.card1.title": "Datenkompetenz", "about.card1.desc": "Analyse und Modellierung mit quantitativen Ansätzen und wissenschaftlicher Strenge.",
      "about.card2.title": "Wissenschaftliche Methodik", "about.card2.desc": "Hypothesen aufstellen, mit Daten experimentieren und Ergebnisse validieren.",
      "about.card3.title": "Anwendbare Ergebnisse", "about.card3.desc": "Modelle in konkrete, einsetzbare Geschäftswerkzeuge umwandeln.",
      "skills.label": "Erworbene Fähigkeiten", "skills.title.pre": "Hard",
      "skills.cat.languages": "Programmiersprachen",
      "skills.cat.ml": "Maschinelles Lernen & KI",
      "skills.cat.data": "Datenanalyse",
      "skills.cat.cloud": "Cloud & Big Data",
      "skills.cat.tools": "Werkzeuge & Dev",
      "skills.soft.title": "Soft Skills",
      "skills.soft.s1": "Verantwortung", "skills.soft.s2": "Pragmatismus",
      "skills.soft.s3": "Effektive Kommunikation", "skills.soft.s4": "Teamarbeit",
      "skills.soft.s5": "Problemlösung", "skills.soft.s6": "Anpassungsfähigkeit",
      "skills.soft.s7": "Kontinuierliches Lernen", "skills.soft.s8": "Kritisches Denken",
      "skills.soft.s9": "Analytisches Denken",
      "exp.label": "Beruflicher Werdegang", "exp.title.pre": "Berufliche", "exp.title.em": "Erfahrung",
      "certs.label": "Kontinuierlicher Fortschritt", "certs.title.pre": "Lizenzen &", "certs.title.em": "Zertifikate",
      "edu.master": "Master in Computerwissenschaften",
      "edu.master.desc": "Spezialisierung auf Deep Learning, Computer Vision und Hochleistungs-Data-Mining.",
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
      "nav.home": "Accueil", "nav.about": "À propos", "nav.experience": "Expérience",
      "nav.skills": "Compétences", "nav.certs": "Certifications", "nav.projects": "Projets", "nav.contact": "Contact",
      "hero.badge": "Disponible pour des projets", "hero.greeting": "Bonjour, je suis",
      "hero.role": "Physicien Computationnel · Data Engineering & Cloud",
      "hero.cv": "Télécharger CV", "hero.contact": "Me contacter", "hero.projects": "Voir les projets",
      "about.label": "Apprenez à me connaître", "about.title.pre": "À propos de", "about.title.em": "moi",
      "about.lead": "Physicien computationnel et Data Engineer avec expérience en analyse de données, apprentissage automatique et ingénierie des données dans le cloud (Azure, GCP). En Master de Sciences Computationnelles, recherche sur les PINNs pour simulations optiques.",
      "about.body": "Spécialisé dans la transformation des données en insights exploitables avec Python, PyTorch, Spark et SQL, alliant rigueur scientifique, expérience cloud, ETL et enseignement technique.",
      "about.card1.title": "Maîtrise des Données", "about.card1.desc": "Analyse et modélisation avec des approches quantitatives et une rigueur scientifique.",
      "about.card2.title": "Méthodologie Scientifique", "about.card2.desc": "Formuler des hypothèses, expérimenter avec des données et valider les résultats.",
      "about.card3.title": "Résultats Concrets", "about.card3.desc": "Transformer les modèles en outils métier concrets et déployables.",
      "skills.label": "Compétences acquises", "skills.title.pre": "Hard",
      "skills.cat.languages": "Langages de Programmation",
      "skills.cat.ml": "Apprentissage Automatique & IA",
      "skills.cat.data": "Analyse de Données",
      "skills.cat.cloud": "Cloud & Big Data",
      "skills.cat.tools": "Outils & Dev",
      "skills.soft.title": "Compétences humaines",
      "skills.soft.s1": "Responsabilité", "skills.soft.s2": "Pragmatisme",
      "skills.soft.s3": "Communication efficace", "skills.soft.s4": "Travail en équipe",
      "skills.soft.s5": "Résolution de problèmes", "skills.soft.s6": "Adaptabilité",
      "skills.soft.s7": "Apprentissage continu", "skills.soft.s8": "Pensée critique",
      "skills.soft.s9": "Pensée analytique",
      "exp.label": "Parcours professionnel", "exp.title.pre": "Expérience", "exp.title.em": "Professionnelle",
      "certs.label": "Progrès continu", "certs.title.pre": "Licences &", "certs.title.em": "Certifications",
      "edu.master": "Master en Sciences Computationnelles",
      "edu.master.desc": "Spécialisation en apprentissage profond, vision artificielle et exploration de données haute performance.",
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
    // Actualiza aria-label del botón de idioma para lectores de pantalla
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
      langBtn.setAttribute("aria-label", `Idioma: ${langLabels[lang] || lang.toUpperCase()}. Cambiar idioma`);
    }
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
  //  HEADER SCROLL
  // ===========================
  const header   = document.getElementById("site-header");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);

    // Active nav link
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
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
  //  FADE-UP ANIMATIONS
  // ===========================
  const fadeEls = document.querySelectorAll(
    ".project-card, .cert-group, .about-card, .skill-pill, .skill-category, .edu-card, .section-title, .section-label, .about-lead, .about-body"
  );

  fadeEls.forEach(el => el.classList.add("fade-up"));

  // Assign stagger delay per project card based on its row in the grid
  const projectsGrid = document.querySelector(".projects-grid");
  if (projectsGrid) {
    const cols = getComputedStyle(projectsGrid)
      .gridTemplateColumns.split(" ")
      .filter(Boolean).length || 1;

    document.querySelectorAll(".project-card").forEach((card, i) => {
      const row = Math.floor(i / cols);
      card.style.setProperty("--card-delay", `${Math.min(row * 70, 210)}ms`);
    });
  }

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

  fadeEls.forEach(el => fadeObserver.observe(el));

});
