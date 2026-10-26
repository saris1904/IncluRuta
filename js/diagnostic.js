/**
 * INCLURUTA - DIAGNÓSTICO INSTITUCIONAL Y PLAN DE ACCIÓN (diagnostic.js)
 * 16 preguntas orientativas en 8 áreas clave de inclusión universitaria.
 * Cálculo cuantitativo transparente y generación de plan de mejora institucional.
 */

const DIAGNOSTIC_QUESTIONS = [
  // Área 1. Accesibilidad digital
  {
    id: 1,
    areaId: 1,
    areaName: "Accesibilidad digital",
    text: "¿Los contenidos académicos y administrativos digitales pueden consultarse con tecnologías de asistencia?",
    helpText: "Considera si los PDFs, presentaciones y documentos compartidos en el campus virtual pueden ser leídos por lectores de pantalla y magnificadores."
  },
  {
    id: 2,
    areaId: 1,
    areaName: "Accesibilidad digital",
    text: "¿Las páginas y plataformas institucionales permiten navegar mediante teclado y ofrecen una estructura comprensible?",
    helpText: "Evalúa si es posible recorrer los portales web, realizar trámites y acceder a calificaciones sin utilizar el mouse, respetando el orden lógico de foco."
  },

  // Área 2. Comunicación accesible
  {
    id: 3,
    areaId: 2,
    areaName: "Comunicación accesible",
    text: "¿Los videos y materiales audiovisuales cuentan con subtítulos o alternativas textuales cuando corresponde?",
    helpText: "Revisa si las clases grabadas, campañas institucionales y transmisiones oficiales disponen de subtítulos sincronizados o transcripciones escritas."
  },
  {
    id: 4,
    areaId: 2,
    areaName: "Comunicación accesible",
    text: "¿La institución dispone de alternativas para comunicar información importante en diferentes formatos accesibles?",
    helpText: "Verifica si los comunicados urgentes, reglamentos y circulares se publican en formatos variados (audio, texto editable, lengua de señas o lectura fácil)."
  },

  // Área 3. Comprensión y accesibilidad cognitiva
  {
    id: 5,
    areaId: 3,
    areaName: "Comprensión y accesibilidad cognitiva",
    text: "¿Los procedimientos y las instrucciones institucionales utilizan lenguaje claro y pasos comprensibles?",
    helpText: "Observa si los trámites de admisión, matrícula y solicitudes de bienestar evitan tecnicismos innecesarios y están explicados de forma secuencial."
  },
  {
    id: 6,
    areaId: 3,
    areaName: "Comprensión y accesibilidad cognitiva",
    text: "¿Se ofrecen apoyos que faciliten la comprensión de información académica y administrativa cuando son necesarios?",
    helpText: "Comprueba si existen tutorías guiadas, esquemas visuales, resúmenes o tiempos adicionales para asimilar instrucciones institucionales."
  },

  // Área 4. Formación del personal
  {
    id: 7,
    areaId: 4,
    areaName: "Formación del personal",
    text: "¿Docentes, directivos y personal administrativo reciben formación sobre inclusión y discapacidad?",
    helpText: "Indaga si la institución imparte talleres periódicos, cursos de inducción o diplomados en pedagogía inclusiva y diseño universal."
  },
  {
    id: 8,
    areaId: 4,
    areaName: "Formación del personal",
    text: "¿El personal conoce estrategias básicas para identificar barreras y actuar de forma respetuosa?",
    helpText: "Evalúa si docentes y funcionarios saben cómo dirigirse adecuadamente a personas con discapacidad sin actitudes paternalistas ni excluyentes."
  },

  // Área 5. Procedimientos y ajustes
  {
    id: 9,
    areaId: 5,
    areaName: "Procedimientos y ajustes",
    text: "¿Existe un procedimiento claro para solicitar, analizar y hacer seguimiento a los ajustes necesarios?",
    helpText: "Determina si el estudiante conoce la ruta formal para concertar apoyos razonables en sus asignaturas y evaluaciones."
  },
  {
    id: 10,
    areaId: 5,
    areaName: "Procedimientos y ajustes",
    text: "¿Se conocen las áreas o personas responsables de orientar estos procesos?",
    helpText: "Revisa si la comunidad universitaria identifica claramente qué oficina o dependencia (ej. Bienestar, Centro de Inclusión) coordina los ajustes."
  },

  // Área 6. Participación y escucha
  {
    id: 11,
    areaId: 6,
    areaName: "Participación y escucha",
    text: "¿Las personas con discapacidad participan en la identificación de barreras y en la propuesta de mejoras?",
    helpText: "Verifica si son consultadas de manera protagónica en comités curriculares, diseño de espacios o pruebas de sistemas digitales."
  },
  {
    id: 12,
    areaId: 6,
    areaName: "Participación y escucha",
    text: "¿La institución dispone de mecanismos accesibles para recibir observaciones y conocer experiencias?",
    helpText: "Comprueba si los buzones de quejas, encuestas de clima universitario o canales de atención cuentan con accesibilidad plena."
  },

  // Área 7. Espacios y entorno
  {
    id: 13,
    areaId: 7,
    areaName: "Espacios y entorno",
    text: "¿Se revisan las barreras físicas, de orientación y de circulación en los espacios institucionales?",
    helpText: "Considera rampas con pendientes adecuadas, señalética con contraste y Braille, baños adaptados, pasillos despejados e iluminación."
  },
  {
    id: 14,
    areaId: 7,
    areaName: "Espacios y entorno",
    text: "¿Se consideran las barreras del entorno y de los servicios utilizados por los estudiantes para participar en la vida universitaria?",
    helpText: "Evalúa bibliotecas, cafeterías, laboratorios, eventos culturales, auditorios y transporte o rutas de acceso al campus."
  },

  // Área 8. Seguimiento y mejora continua
  {
    id: 15,
    areaId: 8,
    areaName: "Seguimiento y mejora continua",
    text: "¿Las acciones de inclusión tienen responsables y plazos definidos?",
    helpText: "Revisa si las iniciativas quedan consignadas en planes de desarrollo institucional con asignación presupuestal y cronograma formal."
  },
  {
    id: 16,
    areaId: 8,
    areaName: "Seguimiento y mejora continua",
    text: "¿La institución revisa periódicamente si las medidas implementadas están funcionando?",
    helpText: "Determina si se evalúan anualmente los indicadores de permanencia, deserción y satisfacción académica de los estudiantes con discapacidad."
  }
];

const DiagnosticModule = {
  ANSWERS_KEY: "incluruta_diagnostic_answers",
  ACTION_PLAN_KEY: "incluruta_action_plan",
  currentStepIndex: 0, // 0 a 15

  getStoredAnswers() {
    try {
      const data = localStorage.getItem(this.ANSWERS_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.error("Error al cargar respuestas del diagnóstico:", e);
      return {};
    }
  },

  saveAnswer(questionId, value) {
    const answers = this.getStoredAnswers();
    answers[questionId] = value;
    try {
      localStorage.setItem(this.ANSWERS_KEY, JSON.stringify(answers));
    } catch (e) {
      console.error("Error al guardar respuesta en localStorage:", e);
    }
    if (window.App && typeof window.App.updateGlobalProgressSummary === "function") {
      window.App.updateGlobalProgressSummary();
    }
  },

  init() {
    this.setupEventListeners();
    const answers = this.getStoredAnswers();
    const answeredCount = Object.keys(answers).length;

    if (answeredCount === 16) {
      // Si ya está completo, podemos mostrar los resultados o habilitar el visor
      this.renderResults();
    } else {
      this.currentStepIndex = answeredCount > 0 && answeredCount < 16 ? answeredCount : 0;
    }
    this.renderCurrentQuestion();
    this.renderActionPlan();
  },

  renderCurrentQuestion() {
    const q = DIAGNOSTIC_QUESTIONS[this.currentStepIndex];
    if (!q) return;

    const areaTag = document.getElementById("diag-area-tag");
    const stepCounter = document.getElementById("diag-step-counter");
    const progressBarFill = document.getElementById("diag-progress-bar-fill");
    const questionText = document.getElementById("diag-question-text");
    const questionHelp = document.getElementById("diag-question-help");
    const prevBtn = document.getElementById("diag-prev-btn");
    const nextBtn = document.getElementById("diag-next-btn");

    if (areaTag) areaTag.textContent = `Área ${q.areaId}: ${q.areaName}`;
    if (stepCounter) stepCounter.textContent = `Pregunta ${this.currentStepIndex + 1} de 16`;
    if (questionText) questionText.textContent = q.text;
    if (questionHelp) questionHelp.textContent = q.helpText;

    const progressPct = Math.round(((this.currentStepIndex + 1) / 16) * 100);
    if (progressBarFill) {
      progressBarFill.style.width = `${progressPct}%`;
      progressBarFill.setAttribute("aria-valuenow", progressPct);
    }

    // Estado del botón anterior
    if (prevBtn) {
      prevBtn.disabled = this.currentStepIndex === 0;
      prevBtn.style.visibility = this.currentStepIndex === 0 ? "hidden" : "visible";
    }

    // Texto del botón siguiente / finalizar
    if (nextBtn) {
      nextBtn.textContent = this.currentStepIndex === 15 ? "Finalizar y ver resultados" : "Siguiente pregunta";
    }

    // Marcar opción previamente seleccionada
    const answers = this.getStoredAnswers();
    const currentAnswer = answers[q.id];

    const radioOptions = document.querySelectorAll('input[name="diag-option"]');
    radioOptions.forEach(radio => {
      const parentCard = radio.closest(".option-card");
      if (radio.value === currentAnswer) {
        radio.checked = true;
        if (parentCard) parentCard.classList.add("selected");
      } else {
        radio.checked = false;
        if (parentCard) parentCard.classList.remove("selected");
      }
    });

    // Foco accesible al cambiar de pregunta
    if (questionText) {
      questionText.setAttribute("tabindex", "-1");
      questionText.focus();
    }
  },

  selectOption(value) {
    const q = DIAGNOSTIC_QUESTIONS[this.currentStepIndex];
    if (!q) return;

    this.saveAnswer(q.id, value);

    const radioOptions = document.querySelectorAll('input[name="diag-option"]');
    radioOptions.forEach(radio => {
      const parentCard = radio.closest(".option-card");
      if (radio.value === value) {
        radio.checked = true;
        if (parentCard) parentCard.classList.add("selected");
      } else {
        radio.checked = false;
        if (parentCard) parentCard.classList.remove("selected");
      }
    });

    if (window.App && typeof window.App.announceToScreenReader === "function") {
      const labelMap = {
        consistent: "Sí, de manera consistente",
        partial: "Parcialmente",
        pending: "No por ahora",
        unknown: "No lo sé"
      };
      window.App.announceToScreenReader(`Opción seleccionada: ${labelMap[value] || value}`);
    }
  },

  nextQuestion() {
    const q = DIAGNOSTIC_QUESTIONS[this.currentStepIndex];
    const answers = this.getStoredAnswers();

    if (!answers[q.id]) {
      alert("Por favor, selecciona una de las 4 opciones antes de continuar. Puedes elegir 'No lo sé' si no dispones de la información.");
      return;
    }

    if (this.currentStepIndex < 15) {
      this.currentStepIndex++;
      this.renderCurrentQuestion();
    } else {
      this.finishDiagnostic();
    }
  },

  prevQuestion() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.renderCurrentQuestion();
    }
  },

  finishDiagnostic() {
    const introCard = document.getElementById("diagnostic-intro-card");
    const stepWrapper = document.getElementById("diagnostic-step-wrapper");
    const resultsWrapper = document.getElementById("diagnostic-results-wrapper");

    if (introCard) introCard.style.display = "none";
    if (stepWrapper) stepWrapper.classList.remove("active");
    if (resultsWrapper) resultsWrapper.classList.add("active");

    this.renderResults();
    this.generateActionPlanFromAnswers();

    // Desplazar suavemente a los resultados
    resultsWrapper.scrollIntoView({ behavior: "smooth" });

    if (window.App && typeof window.App.announceToScreenReader === "function") {
      window.App.announceToScreenReader("Diagnóstico completado con éxito. Se muestran los resultados institucionales y el plan de acción.");
    }
  },

  restartDiagnostic() {
    if (confirm("¿Deseas reiniciar las respuestas del diagnóstico institucional? Las respuestas registradas se restablecerán.")) {
      try {
        localStorage.removeItem(this.ANSWERS_KEY);
      } catch (e) {
        console.error("Error al reiniciar respuestas:", e);
      }
      this.currentStepIndex = 0;
      const introCard = document.getElementById("diagnostic-intro-card");
      const stepWrapper = document.getElementById("diagnostic-step-wrapper");
      const resultsWrapper = document.getElementById("diagnostic-results-wrapper");

      if (introCard) introCard.style.display = "block";
      if (stepWrapper) stepWrapper.classList.add("active");
      if (resultsWrapper) resultsWrapper.classList.remove("active");

      this.renderCurrentQuestion();
      if (window.App && typeof window.App.updateGlobalProgressSummary === "function") {
        window.App.updateGlobalProgressSummary();
      }
    }
  },

  renderResults() {
    const answers = this.getStoredAnswers();
    const totalAnswered = Object.keys(answers).length;

    let consistentCount = 0;
    let partialCount = 0;
    let pendingCount = 0;
    let unknownCount = 0;

    DIAGNOSTIC_QUESTIONS.forEach(q => {
      const ans = answers[q.id];
      if (ans === "consistent") consistentCount++;
      else if (ans === "partial") partialCount++;
      else if (ans === "pending") pendingCount++;
      else if (ans === "unknown") unknownCount++;
    });

    const metricConsistent = document.getElementById("metric-consistent-val");
    const metricPartial = document.getElementById("metric-partial-val");
    const metricPending = document.getElementById("metric-pending-val");
    const metricUnknown = document.getElementById("metric-unknown-val");

    if (metricConsistent) metricConsistent.textContent = consistentCount;
    if (metricPartial) metricPartial.textContent = partialCount;
    if (metricPending) metricPending.textContent = pendingCount;
    if (metricUnknown) metricUnknown.textContent = unknownCount;

    // Resumen cualitativo de áreas
    const tableBody = document.getElementById("areas-breakdown-body");
    if (tableBody) {
      // Agrupar por las 8 áreas
      const areaMap = {};
      DIAGNOSTIC_QUESTIONS.forEach(q => {
        if (!areaMap[q.areaId]) {
          areaMap[q.areaId] = {
            id: q.areaId,
            name: q.areaName,
            questions: []
          };
        }
        areaMap[q.areaId].questions.push({
          id: q.id,
          text: q.text,
          answer: answers[q.id] || "unanswered"
        });
      });

      tableBody.innerHTML = Object.values(areaMap).map(area => {
        const ans1 = area.questions[0].answer;
        const ans2 = area.questions[1].answer;

        let statusText = "";
        let badgeClass = "";

        if (ans1 === "consistent" && ans2 === "consistent") {
          statusText = "Prácticas consistentes";
          badgeClass = "tag-priority-verificar"; // verde suave / consistente
        } else if (ans1 === "pending" || ans2 === "pending") {
          statusText = "Requiere desarrollo prioritario";
          badgeClass = "tag-priority-alta";
        } else if (ans1 === "partial" || ans2 === "partial") {
          statusText = "Implementación parcial";
          badgeClass = "tag-priority-media";
        } else if (ans1 === "unknown" || ans2 === "unknown") {
          statusText = "Oportunidad de indagación y verificación";
          badgeClass = "tag-priority-verificar";
        } else {
          statusText = "Sin responder";
          badgeClass = "tag-badge";
        }

        return `
          <tr>
            <td>
              <strong>Área ${area.id}: ${area.name}</strong>
              <div style="font-size: 0.85rem; color: var(--color-text-secondary); margin-top: 0.2rem;">
                ${area.questions.map(q => `<span style="display:block;">• ${q.text.substring(0, 75)}... [${this.formatAnswerLabel(q.answer)}]</span>`).join("")}
              </div>
            </td>
            <td>
              <span class="tag-badge ${badgeClass}">${statusText}</span>
            </td>
          </tr>
        `;
      }).join("");
    }
  },

  formatAnswerLabel(val) {
    switch (val) {
      case "consistent": return "Consistente";
      case "partial": return "Parcial";
      case "pending": return "No por ahora";
      case "unknown": return "No lo sé";
      default: return "Sin respuesta";
    }
  },

  // Generación dinámica del plan de acción a partir de respuestas
  generateActionPlanFromAnswers() {
    const answers = this.getStoredAnswers();
    let existingPlan = [];
    try {
      const saved = localStorage.getItem(this.ACTION_PLAN_KEY);
      if (saved) existingPlan = JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }

    const defaultRecommendations = [
      {
        id: "rec-1",
        area: "Accesibilidad digital",
        triggerAreaId: 1,
        finding: "Verificación del acceso a contenidos y plataformas con tecnologías de asistencia.",
        action: "Auditar una muestra representativa de aulas virtuales y documentos institucionales con lectores de pantalla y navegación por teclado.",
        priority: "Alta",
        responsible: "Dirección de Tecnologías de la Información con apoyo de Bienestar Universitario y estudiantes con discapacidad",
        deadline: "Primer mes de ejecución",
        verification: "Informe de diagnóstico de accesibilidad web y catálogo de guías de corrección aprobadas",
        status: "Pendiente",
        notes: ""
      },
      {
        id: "rec-2",
        area: "Comunicación accesible",
        triggerAreaId: 2,
        finding: "Garantizar alternativas textuales y subtitulado en material audiovisual institucional.",
        action: "Establecer una directriz institucional que exija subtítulos cerrados en todo video académico y transcripciones en audios y podcasts.",
        priority: "Media",
        responsible: "Dirección de Comunicaciones Institucionales y Centros de Producción de Medios",
        deadline: "Dentro de los próximos dos meses",
        verification: "Verificación de subtitulado en el repositorio central de videos institucionales",
        status: "Pendiente",
        notes: ""
      },
      {
        id: "rec-3",
        area: "Comprensión y accesibilidad cognitiva",
        triggerAreaId: 3,
        finding: "Simplificación de instructivos y trámites institucionales con lenguaje claro.",
        action: "Rediseñar los 5 instructivos de mayor concurrencia estudiantil (matrícula, solicitudes de apoyo, reglamento) utilizando pautas de lenguaje claro e infografías secuenciales.",
        priority: "Alta",
        responsible: "Secretaría General, Registro Académico y Comité Pedagógico",
        deadline: "Antes del inicio del siguiente ciclo académico",
        verification: "Instructivos en lenguaje claro publicados en el portal y validados con estudiantes",
        status: "Pendiente",
        notes: ""
      },
      {
        id: "rec-4",
        area: "Formación del personal",
        triggerAreaId: 4,
        finding: "Fortalecimiento de competencias docentes y administrativas en inclusión y discapacidad.",
        action: "Implementar un taller modular permanente sobre Diseño Universal para el Aprendizaje (DUA) y trato inclusivo para docentes de planta y cátedra.",
        priority: "Alta",
        responsible: "Vicerrectoría Académica y Desarrollo Docente",
        deadline: "Período intersemestral",
        verification: "Listado de docentes certificados y evidencias de adaptación de programas de asignatura",
        status: "Pendiente",
        notes: ""
      },
      {
        id: "rec-5",
        area: "Procedimientos y ajustes",
        triggerAreaId: 5,
        finding: "Formalización de la ruta institucional de solicitud y seguimiento a ajustes razonables.",
        action: "Publicar un protocolo accesible que defina cómo, ante quién y en qué plazos un estudiante solicita un ajuste razonable concertado.",
        priority: "Alta",
        responsible: "Consejo Académico y Bienestar Universitario",
        deadline: "Próximas 4 semanas",
        verification: "Acta de aprobación del protocolo y publicación oficial en el sitio web",
        status: "Pendiente",
        notes: ""
      },
      {
        id: "rec-6",
        area: "Participación y escucha",
        triggerAreaId: 6,
        finding: "Involucramiento activo de personas con discapacidad en la toma de decisiones.",
        action: "Crear una Mesa Consultiva de Inclusión y Diversidad Estudiantil que sesione periódicamente con directivos universitarios.",
        priority: "Media",
        responsible: "Rectoría y Representación Estudiantil",
        deadline: "Durante el trimestre actual",
        verification: "Actas de sesión y matriz de propuestas estudiantiles priorizadas",
        status: "Pendiente",
        notes: ""
      },
      {
        id: "rec-7",
        area: "Espacios y entorno",
        triggerAreaId: 7,
        finding: "Eliminación progresiva de barreras físicas, espaciales y de señalética en el campus.",
        action: "Realizar un recorrido técnico de accesibilidad arquitectónica para levantar un inventario de rampas, baños adaptados y señalización podotáctil.",
        priority: "Media",
        responsible: "Dirección de Infraestructura y Planta Física",
        deadline: "Semestre en curso",
        verification: "Plan de obras menores y cronograma de adecuaciones físicas",
        status: "Pendiente",
        notes: ""
      },
      {
        id: "rec-8",
        area: "Seguimiento y mejora continua",
        triggerAreaId: 8,
        finding: "Medición periódica del impacto de las políticas y acciones de permanencia inclusiva.",
        action: "Integrar indicadores de permanencia y graduación de estudiantes con discapacidad en el tablero de control de calidad institucional.",
        priority: "Media",
        responsible: "Oficina de Planeación y Aseguramiento de la Calidad",
        deadline: "Cierre del año académico",
        verification: "Reporte anual de permanencia estudiantil inclusiva",
        status: "Pendiente",
        notes: ""
      }
    ];

    // Ajustar prioridades según respuestas
    const finalPlan = defaultRecommendations.map(rec => {
      // Buscar si el usuario ya tenía notas o estados guardados
      const prev = existingPlan.find(p => p.id === rec.id);
      if (prev) {
        rec.status = prev.status;
        rec.notes = prev.notes;
      }

      // Si el área tiene "pending" ("No por ahora"), elevar a prioridad Alta
      const qInArea = DIAGNOSTIC_QUESTIONS.filter(q => q.areaId === rec.triggerAreaId);
      const hasPending = qInArea.some(q => answers[q.id] === "pending");
      const hasUnknown = qInArea.some(q => answers[q.id] === "unknown");

      if (hasPending) {
        rec.priority = "Alta";
      } else if (hasUnknown) {
        rec.priority = "Verificar";
      }

      return rec;
    });

    try {
      localStorage.setItem(this.ACTION_PLAN_KEY, JSON.stringify(finalPlan));
    } catch (e) {
      console.error("Error al guardar plan de acción:", e);
    }

    this.renderActionPlan();
  },

  renderActionPlan() {
    const container = document.getElementById("action-cards-container");
    if (!container) return;

    let plan = [];
    try {
      const data = localStorage.getItem(this.ACTION_PLAN_KEY);
      if (data) plan = JSON.parse(data);
    } catch (e) {
      console.error(e);
    }

    if (!plan || plan.length === 0) {
      // Generar el plan base
      this.generateActionPlanFromAnswers();
      return;
    }

    container.innerHTML = plan.map((item, index) => {
      let priorityClass = "priority-media";
      let tagPriorityClass = "tag-priority-media";
      if (item.priority === "Alta") {
        priorityClass = "priority-alta";
        tagPriorityClass = "tag-priority-alta";
      } else if (item.priority === "Verificar") {
        priorityClass = "priority-verificar";
        tagPriorityClass = "tag-priority-verificar";
      }

      return `
        <article class="action-card ${priorityClass}" id="action-item-${item.id}">
          <div class="action-card-top">
            <div class="action-meta-tags">
              <span class="tag-badge tag-area">Área: ${item.area}</span>
              <span class="tag-badge ${tagPriorityClass}">Prioridad: ${item.priority}</span>
              <span class="tag-badge" style="background: var(--color-bg-subtle); color: var(--color-text-secondary); border: 1px solid var(--color-border);">
                Estado: <strong>${item.status}</strong>
              </span>
            </div>
          </div>

          <div class="action-finding">
            <strong>Hallazgo identificado:</strong> ${item.finding}
          </div>

          <div class="action-suggested">
            <strong>Acción institucional recomendada:</strong> ${item.action}
          </div>

          <div class="action-details-grid">
            <div class="action-detail-item">
              <strong>Responsable institucional sugerido</strong>
              <span>${item.responsible}</span>
            </div>
            <div class="action-detail-item">
              <strong>Plazo orientativo</strong>
              <span>${item.deadline}</span>
            </div>
            <div class="action-detail-item">
              <strong>Forma de verificar avance</strong>
              <span>${item.verification}</span>
            </div>
          </div>

          <div class="action-interactive-controls">
            <div class="action-status-select-wrap">
              <label for="status-select-${item.id}">Actualizar estado:</label>
              <select id="status-select-${item.id}" class="action-status-select" onchange="DiagnosticModule.updateActionStatus('${item.id}', this.value)">
                <option value="Pendiente" ${item.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                <option value="En proceso" ${item.status === 'En proceso' ? 'selected' : ''}>En proceso</option>
                <option value="Completada" ${item.status === 'Completada' ? 'selected' : ''}>Completada</option>
              </select>
            </div>

            <div style="flex-grow: 1; min-width: 280px;">
              <label for="notes-input-${item.id}" class="sr-only">Notas y compromisos para esta acción</label>
              <textarea 
                id="notes-input-${item.id}" 
                class="action-notes-input" 
                placeholder="Añadir notas internas, acuerdos institucionales o fecha de seguimiento..."
                onchange="DiagnosticModule.updateActionNotes('${item.id}', this.value)"
              >${item.notes || ''}</textarea>
            </div>
          </div>
        </article>
      `;
    }).join("");
  },

  updateActionStatus(actionId, newStatus) {
    let plan = [];
    try {
      const data = localStorage.getItem(this.ACTION_PLAN_KEY);
      if (data) plan = JSON.parse(data);
    } catch (e) {
      console.error(e);
    }

    const item = plan.find(p => p.id === actionId);
    if (item) {
      item.status = newStatus;
      try {
        localStorage.setItem(this.ACTION_PLAN_KEY, JSON.stringify(plan));
      } catch (e) {
        console.error(e);
      }
      this.renderActionPlan();
      if (window.App && typeof window.App.updateGlobalProgressSummary === "function") {
        window.App.updateGlobalProgressSummary();
      }
      if (window.App && typeof window.App.announceToScreenReader === "function") {
        window.App.announceToScreenReader(`Estado de la acción actualizado a ${newStatus}`);
      }
    }
  },

  updateActionNotes(actionId, notesText) {
    let plan = [];
    try {
      const data = localStorage.getItem(this.ACTION_PLAN_KEY);
      if (data) plan = JSON.parse(data);
    } catch (e) {
      console.error(e);
    }

    const item = plan.find(p => p.id === actionId);
    if (item) {
      item.notes = notesText;
      try {
        localStorage.setItem(this.ACTION_PLAN_KEY, JSON.stringify(plan));
      } catch (e) {
        console.error(e);
      }
    }
  },

  printActionPlan() {
    window.print();
  },

  setupEventListeners() {
    const prevBtn = document.getElementById("diag-prev-btn");
    const nextBtn = document.getElementById("diag-next-btn");
    const restartBtn = document.getElementById("diag-restart-btn");
    const printBtn = document.getElementById("action-plan-print-btn");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => this.prevQuestion());
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.nextQuestion());
    }
    if (restartBtn) {
      restartBtn.addEventListener("click", () => this.restartDiagnostic());
    }
    if (printBtn) {
      printBtn.addEventListener("click", () => this.printActionPlan());
    }

    // Configurar cards de opciones
    const optionCards = document.querySelectorAll(".option-card");
    optionCards.forEach(card => {
      card.addEventListener("click", () => {
        const radio = card.querySelector('input[name="diag-option"]');
        if (radio) {
          this.selectOption(radio.value);
        }
      });
      // Accesibilidad con teclado
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const radio = card.querySelector('input[name="diag-option"]');
          if (radio) {
            this.selectOption(radio.value);
          }
        }
      });
    });
  }
};

window.DiagnosticModule = DiagnosticModule;
