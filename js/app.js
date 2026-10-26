/**
 * INCLURUTA - APLICACIÓN PRINCIPAL (app.js)
 * Enrutamiento accesible de SPA, panel de avance institucional,
 * preferencias de accesibilidad, biblioteca de recursos y gestión de datos locales.
 */

const App = {
  // Claves de LocalStorage
  STORAGE_KEYS: {
    FONT_SCALE: "incluruta_font_scale",
    HIGH_CONTRAST: "incluruta_high_contrast",
    MODULES: "incluruta_completed_modules",
    DIAGNOSTIC: "incluruta_diagnostic_answers",
    ACTION_PLAN: "incluruta_action_plan"
  },

  currentSectionId: "section-home",

  // Catálogo verificado de recursos institucionales
  RESOURCES_DATA: [
    {
      id: "res-1",
      name: "Lineamientos de Política de Educación Superior Inclusiva (MinEducación Colombia)",
      category: "Normativa y orientaciones en Colombia",
      description: "Marco orientador oficial del Ministerio de Educación Nacional de Colombia para la formulación, implementación y seguimiento de políticas de inclusión en universidades.",
      utility: "Indispensable para directivos y comités curriculares que formulan o actualizan el plan institucional de inclusión.",
      url: "https://www.mineducacion.gov.co/1759/w3-article-357277.html",
      verified: true
    },
    {
      id: "res-2",
      name: "Decreto 1421 de 2017: Reglamentación de la Educación Inclusiva",
      category: "Normativa y orientaciones en Colombia",
      description: "Decreto del Gobierno de Colombia que reglamenta el marco de la educación inclusiva y la atención educativa a la población con discapacidad.",
      utility: "Referente legal fundamental sobre la garantía del derecho a la educación sin discriminación y los deberes institucionales.",
      url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83023",
      verified: true
    },
    {
      id: "res-3",
      name: "Ley Estatutaria 1618 de 2013",
      category: "Normativa y orientaciones en Colombia",
      description: "Ley estatutaria que garantiza y asegura el ejercicio efectivo de los derechos de las personas con discapacidad en Colombia mediante medidas de inclusión y eliminación de barreras.",
      utility: "Marco jurídico de derechos humanos y accesibilidad universal de obligatorio cumplimiento para instituciones públicas y privadas.",
      url: "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52081",
      verified: true
    },
    {
      id: "res-4",
      name: "Pautas de Accesibilidad para el Contenido Web (WCAG 2.2 - W3C / WAI)",
      category: "Guías de accesibilidad digital",
      description: "Estándar internacional técnico que define los criterios de conformidad (Niveles A, AA y AAA) para que portales web, aulas virtuales y documentos sean accesibles.",
      utility: "Guía técnica para equipos de tecnología, diseñadores web y administradores de plataformas Moodle/Canvas.",
      url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
      verified: true
    },
    {
      id: "res-5",
      name: "Guía para la creación de documentos de texto accesibles (INCI)",
      category: "Recomendaciones para docentes",
      description: "Documento orientador del Instituto Nacional para Ciegos (INCI) para redactar y maquetar archivos Word y PDF con títulos semánticos, contraste adecuado y textos alternativos.",
      utility: "Herramienta práctica para docentes al preparar sílabos, guías de estudio, lecturas y exámenes.",
      url: "https://www.inci.gov.co/",
      verified: true
    },
    {
      id: "res-6",
      name: "Pautas de Comunicación y Lengua de Señas Colombiana (INSOR)",
      category: "Comunicación accesible",
      description: "Publicaciones y recursos pedagógicos del Instituto Nacional para Sordos (INSOR) sobre cultura sorda, Lengua de Señas Colombiana (LSC) y accesibilidad en medios audiovisuales.",
      utility: "Esencial para coordinadores de eventos institucionales, bienestar universitario y docentes con estudiantes sordos.",
      url: "https://www.insor.gov.co/",
      verified: true
    },
    {
      id: "res-7",
      name: "Pautas del Diseño Universal para el Aprendizaje (DUA - CAST)",
      category: "Ajustes razonables",
      description: "Marco pedagógico global desarrollado por CAST para optimizar la enseñanza y el aprendizaje ofreciendo múltiples formas de compromiso, representación y acción/expresión.",
      utility: "Guía metodológica para docentes que desean diseñar asignaturas flexibles que minimicen la necesidad de adaptaciones individuales.",
      url: "https://udlguidelines.cast.org/",
      verified: true
    },
    {
      id: "res-8",
      name: "Guía de Lenguaje Claro para el Sector Público y Educativo",
      category: "Lenguaje claro y accesibilidad cognitiva",
      description: "Orientaciones metodológicas para redactar trámites, solicitudes, resoluciones y reglamentos en un lenguaje directo, simple y comprensible para toda la ciudadanía.",
      utility: "Recomendado para secretarías académicas, admisiones y oficinas jurídicas que redactan circulares y convocatorias.",
      url: "https://www.dnp.gov.co/",
      verified: true
    },
    {
      id: "res-9",
      name: "WAVE Web Accessibility Evaluation Tool",
      category: "Herramientas para revisar documentos",
      description: "Conjunto de herramientas de evaluación gratuitas de WebAIM para verificar visualmente errores de contraste, estructura de encabezados y atributos alternativos en páginas web.",
      utility: "Permite a docentes y desarrolladores auditar de manera inmediata sus páginas de asignaturas o sitios institucionales.",
      url: "https://wave.webaim.org/",
      verified: true
    },
    {
      id: "res-10",
      name: "Color Contrast Analyzer (TPGi)",
      category: "Herramientas para revisar documentos",
      description: "Aplicación gratuita para comprobar que las combinaciones cromáticas de textos, diapositivas y botones cumplan con los umbrales de contraste WCAG AA (4.5:1).",
      utility: "Útil para diseñadores institucionales, docentes que preparan presentaciones y administradores del campus virtual.",
      url: "https://www.tpgi.com/color-contrast-checker/",
      verified: true
    }
  ],

  init() {
    this.applySavedAccessibility();
    this.setupAccessibilityControls();
    this.setupNavigation();
    this.setupMobileMenu();
    this.setupResources();
    this.setupResetModal();
    this.updateGlobalProgressSummary();

    // Inicializar módulos de aprendizaje y diagnóstico
    if (window.LearningModule && typeof window.LearningModule.init === "function") {
      window.LearningModule.init();
    }
    if (window.DiagnosticModule && typeof window.DiagnosticModule.init === "function") {
      window.DiagnosticModule.init();
    }
  },

  // =========================================================================
  // NAVEGACIÓN Y ENRUTAMIENTO SPA ACCESIBLE
  // =========================================================================
  setupNavigation() {
    const navLinks = document.querySelectorAll("[data-nav-target]");
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute("data-nav-target");
        this.navigateToSection(targetSection);

        // Si el menú móvil está abierto, cerrarlo
        this.closeMobileMenu();
      });
    });
  },

  navigateToSection(sectionId) {
    const targetEl = document.getElementById(sectionId);
    if (!targetEl) return;

    // Ocultar todas las secciones
    const allSections = document.querySelectorAll(".view-section");
    allSections.forEach(sec => {
      sec.classList.remove("active");
      sec.setAttribute("aria-hidden", "true");
    });

    // Mostrar sección solicitada
    targetEl.classList.add("active");
    targetEl.setAttribute("aria-hidden", "false");
    this.currentSectionId = sectionId;

    // Actualizar enlaces de navegación
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      const target = link.getAttribute("data-nav-target");
      if (target === sectionId) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });

    // Actualizar título del documento
    const titles = {
      "section-home": "Inicio | IncluRuta",
      "section-learning": "Ruta de Aprendizaje | IncluRuta",
      "section-diagnostic": "Diagnóstico Institucional | IncluRuta",
      "section-action-plan": "Plan de Acción y Recomendaciones | IncluRuta",
      "section-resources": "Biblioteca de Recursos | IncluRuta"
    };
    document.title = titles[sectionId] || "IncluRuta - Ruta de Aprendizaje Inclusiva";

    // Desplazamiento y foco al inicio de la sección
    window.scrollTo({ top: 0, behavior: "smooth" });

    const heading = targetEl.querySelector("h1, h2");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus();
    }

    this.announceToScreenReader(`Navegaste a la sección: ${titles[sectionId] || sectionId}`);
  },

  setupMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("main-nav-menu");

    if (menuBtn && navMenu) {
      menuBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.contains("open");
        if (isOpen) {
          this.closeMobileMenu();
        } else {
          navMenu.classList.add("open");
          menuBtn.setAttribute("aria-expanded", "true");
        }
      });

      // Cerrar al presionar Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navMenu.classList.contains("open")) {
          this.closeMobileMenu();
          menuBtn.focus();
        }
      });
    }
  },

  closeMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("main-nav-menu");
    if (navMenu && navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    }
  },

  // =========================================================================
  // PREFERENCIAS DE ACCESIBILIDAD DIGITAL
  // =========================================================================
  setupAccessibilityControls() {
    const fontDecreaseBtn = document.getElementById("btn-font-decrease");
    const fontNormalBtn = document.getElementById("btn-font-normal");
    const fontIncreaseBtn = document.getElementById("btn-font-increase");
    const contrastToggleBtn = document.getElementById("btn-high-contrast");
    const resetA11yBtn = document.getElementById("btn-reset-a11y");

    if (fontDecreaseBtn) {
      fontDecreaseBtn.addEventListener("click", () => {
        this.setFontScale("normal");
        this.announceToScreenReader("Tamaño de texto restablecido a normal");
      });
    }
    if (fontNormalBtn) {
      fontNormalBtn.addEventListener("click", () => {
        this.setFontScale("normal");
        this.announceToScreenReader("Tamaño de texto normal seleccionado");
      });
    }
    if (fontIncreaseBtn) {
      fontIncreaseBtn.addEventListener("click", () => {
        const current = localStorage.getItem(this.STORAGE_KEYS.FONT_SCALE);
        if (current === "large") {
          this.setFontScale("xlarge");
          this.announceToScreenReader("Tamaño de texto muy grande (130%) activado");
        } else {
          this.setFontScale("large");
          this.announceToScreenReader("Tamaño de texto grande (115%) activado");
        }
      });
    }
    if (contrastToggleBtn) {
      contrastToggleBtn.addEventListener("click", () => {
        const isCurrentlyHigh = document.body.classList.contains("high-contrast");
        this.setHighContrast(!isCurrentlyHigh);
        this.announceToScreenReader(
          !isCurrentlyHigh ? "Modo de alto contraste activado" : "Modo de contraste estándar activado"
        );
      });
    }
    if (resetA11yBtn) {
      resetA11yBtn.addEventListener("click", () => {
        this.setFontScale("normal");
        this.setHighContrast(false);
        this.announceToScreenReader("Preferencias visuales restablecidas a valores originales");
      });
    }
  },

  setFontScale(scale) {
    document.body.classList.remove("font-large", "font-xlarge");
    if (scale === "large") {
      document.body.classList.add("font-large");
    } else if (scale === "xlarge") {
      document.body.classList.add("font-xlarge");
    }
    try {
      localStorage.setItem(this.STORAGE_KEYS.FONT_SCALE, scale);
    } catch (e) {
      console.error(e);
    }
    this.updateA11yButtonStates();
  },

  setHighContrast(enable) {
    const contrastBtn = document.getElementById("btn-high-contrast");
    if (enable) {
      document.body.classList.add("high-contrast");
      if (contrastBtn) contrastBtn.setAttribute("aria-pressed", "true");
    } else {
      document.body.classList.remove("high-contrast");
      if (contrastBtn) contrastBtn.setAttribute("aria-pressed", "false");
    }
    try {
      localStorage.setItem(this.STORAGE_KEYS.HIGH_CONTRAST, enable ? "true" : "false");
    } catch (e) {
      console.error(e);
    }
  },

  applySavedAccessibility() {
    try {
      const savedScale = localStorage.getItem(this.STORAGE_KEYS.FONT_SCALE);
      if (savedScale) this.setFontScale(savedScale);

      const savedContrast = localStorage.getItem(this.STORAGE_KEYS.HIGH_CONTRAST);
      if (savedContrast === "true") this.setHighContrast(true);
    } catch (e) {
      console.error("Error al aplicar preferencias de accesibilidad:", e);
    }
  },

  updateA11yButtonStates() {
    const currentScale = localStorage.getItem(this.STORAGE_KEYS.FONT_SCALE) || "normal";
    const normalBtn = document.getElementById("btn-font-normal");
    const increaseBtn = document.getElementById("btn-font-increase");

    if (normalBtn) normalBtn.setAttribute("aria-pressed", currentScale === "normal" ? "true" : "false");
    if (increaseBtn) increaseBtn.setAttribute("aria-pressed", (currentScale === "large" || currentScale === "xlarge") ? "true" : "false");
  },

  // =========================================================================
  // ACTUALIZACIÓN DEL PANEL DE AVANCE EN TIEMPO REAL
  // =========================================================================
  updateGlobalProgressSummary() {
    // 1. Módulos completados
    let completedModules = [];
    try {
      const data = localStorage.getItem(this.STORAGE_KEYS.MODULES);
      if (data) completedModules = JSON.parse(data);
    } catch (e) {
      console.error(e);
    }
    const modulesCount = completedModules.length;
    const modulesPercent = Math.round((modulesCount / 6) * 100);

    const homeModCount = document.getElementById("home-modules-completed-count");
    const homeModBar = document.getElementById("home-modules-progress-fill");
    if (homeModCount) homeModCount.textContent = `${modulesCount} de 6`;
    if (homeModBar) {
      homeModBar.style.width = `${modulesPercent}%`;
      homeModBar.setAttribute("aria-valuenow", modulesPercent);
    }

    // 2. Diagnóstico realizado
    let answers = {};
    try {
      const dData = localStorage.getItem(this.STORAGE_KEYS.DIAGNOSTIC);
      if (dData) answers = JSON.parse(dData);
    } catch (e) {
      console.error(e);
    }
    const answeredCount = Object.keys(answers).length;
    const homeDiagStatus = document.getElementById("home-diagnostic-status");
    const homeDiagSub = document.getElementById("home-diagnostic-subtext");

    if (homeDiagStatus && homeDiagSub) {
      if (answeredCount === 16) {
        homeDiagStatus.textContent = "Completado";
        homeDiagStatus.style.color = "var(--color-success)";
        homeDiagSub.textContent = "16 de 16 preguntas respondidas";
      } else if (answeredCount > 0) {
        homeDiagStatus.textContent = "En curso";
        homeDiagStatus.style.color = "var(--color-warning)";
        homeDiagSub.textContent = `${answeredCount} de 16 preguntas respondidas`;
      } else {
        homeDiagStatus.textContent = "Pendiente";
        homeDiagStatus.style.color = "var(--color-text-primary)";
        homeDiagSub.textContent = "Sin iniciar (16 preguntas disponibles)";
      }
    }

    // 3. Acciones prioritarias
    let actionPlan = [];
    try {
      const pData = localStorage.getItem(this.STORAGE_KEYS.ACTION_PLAN);
      if (pData) actionPlan = JSON.parse(pData);
    } catch (e) {
      console.error(e);
    }

    const highPriorityCount = actionPlan.filter(a => a.priority === "Alta").length;
    const inProgressCount = actionPlan.filter(a => a.status === "En proceso").length;
    const doneCount = actionPlan.filter(a => a.status === "Completada").length;

    const homePriorityCount = document.getElementById("home-priority-actions-count");
    const homePrioritySub = document.getElementById("home-priority-actions-subtext");

    if (homePriorityCount && homePrioritySub) {
      if (actionPlan.length > 0) {
        homePriorityCount.textContent = `${highPriorityCount} prioritarias`;
        homePrioritySub.textContent = `${inProgressCount} en proceso · ${doneCount} completadas`;
      } else {
        homePriorityCount.textContent = "0 definidas";
        homePrioritySub.textContent = "Realiza el diagnóstico para generar acciones";
      }
    }
  },

  // =========================================================================
  // BIBLIOTECA DE RECURSOS (Búsqueda y Filtros)
  // =========================================================================
  setupResources() {
    this.renderResources("Todas", "");

    const searchInput = document.getElementById("resources-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        const activeChip = document.querySelector(".chip-btn.active");
        const category = activeChip ? activeChip.getAttribute("data-category") : "Todas";
        this.renderResources(category, query);
      });
    }

    const chips = document.querySelectorAll(".chip-btn");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const category = chip.getAttribute("data-category");
        const searchInput = document.getElementById("resources-search-input");
        const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
        this.renderResources(category, query);
      });
    });
  },

  renderResources(categoryFilter, searchQuery) {
    const container = document.getElementById("resources-cards-container");
    if (!container) return;

    let filtered = this.RESOURCES_DATA;

    if (categoryFilter && categoryFilter !== "Todas") {
      filtered = filtered.filter(res => res.category === categoryFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(res => 
        res.name.toLowerCase().includes(searchQuery) ||
        res.description.toLowerCase().includes(searchQuery) ||
        res.category.toLowerCase().includes(searchQuery)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; background: var(--color-bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--color-border);">
          <p style="font-size: 1.1rem; color: var(--color-text-muted); margin-bottom: 0.5rem;">No se encontraron recursos que coincidan con la búsqueda.</p>
          <p style="font-size: 0.9rem; color: var(--color-text-secondary);">Prueba con otros términos o selecciona la categoría "Todas".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <article class="resource-card" id="${item.id}">
        <div class="resource-card-top">
          <span class="resource-cat-tag">${item.category}</span>
          <h3 class="resource-name">${item.name}</h3>
          <p class="resource-desc">${item.description}</p>
          <div class="resource-utility">
            <strong>Utilidad práctica:</strong> ${item.utility}
          </div>
        </div>
        <div>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-subtle" style="width: 100%;">
            <span>Consultar recurso oficial</span>
            <svg aria-hidden="true" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            <span class="sr-only">(se abre en una ventana nueva)</span>
          </a>
        </div>
      </article>
    `).join("");
  },

  // =========================================================================
  // REINICIO DE DATOS LOCALES Y MODAL
  // =========================================================================
  setupResetModal() {
    const triggerBtn = document.getElementById("btn-open-reset-modal");
    const modal = document.getElementById("reset-data-modal");
    const cancelBtn = document.getElementById("reset-modal-cancel-btn");
    const confirmBtn = document.getElementById("reset-modal-confirm-btn");
    const closeBtn = document.getElementById("reset-modal-close-btn");

    if (triggerBtn && modal) {
      triggerBtn.addEventListener("click", () => {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        if (cancelBtn) cancelBtn.focus();
      });
    }

    const closeModal = () => {
      if (modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    };

    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (confirmBtn) {
      confirmBtn.addEventListener("click", () => {
        try {
          localStorage.removeItem(this.STORAGE_KEYS.MODULES);
          localStorage.removeItem(this.STORAGE_KEYS.DIAGNOSTIC);
          localStorage.removeItem(this.STORAGE_KEYS.ACTION_PLAN);
        } catch (e) {
          console.error(e);
        }

        closeModal();
        alert("Todos los datos locales de aprendizaje y diagnóstico han sido eliminados de este navegador.");
        location.reload();
      });
    }
  },

  // Anunciador accesible para lectores de pantalla
  announceToScreenReader(message) {
    const announcer = document.getElementById("sr-announcer");
    if (announcer) {
      announcer.textContent = "";
      setTimeout(() => {
        announcer.textContent = message;
      }, 50);
    }
  }
};

window.App = App;

// Inicialización automática cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
