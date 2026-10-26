/**
 * INCLURUTA - MÓDULO DE APRENDIZAJE PEDAGÓGICO (learning.js)
 * Contenidos completos, estructurados y accesibles para las instituciones de educación superior.
 */

const MODULES_DATA = [
  {
    id: 1,
    title: "Comprender la inclusión",
    tagline: "Responsabilidad institucional y enfoque de barreras",
    time: "10 min de lectura",
    objective: "Entender la inclusión como una responsabilidad compartida y reconocer que muchas barreras surgen de los entornos, los procedimientos y las formas de comunicación, y no de las personas.",
    summary: "Comprende la diferencia entre igualdad, equidad y accesibilidad, y cómo las barreras físicas, digitales y actitudinales limitan la vida universitaria.",
    contentHtml: `
      <div class="module-objective">
        <strong>Objetivo de aprendizaje:</strong>
        Entender la inclusión como una responsabilidad compartida de toda la comunidad universitaria y reconocer que las barreras se originan en el diseño de los entornos, normativas y metodologías, no en las características individuales de las personas.
      </div>

      <h3>1. ¿Qué significa inclusión en la educación superior?</h3>
      <p>La inclusión en la educación superior va más allá de permitir el ingreso a las aulas; implica garantizar condiciones reales para el acceso, la permanencia, el aprendizaje y la graduación exitosa de todas las personas en condiciones de dignidad y equidad.</p>
      <p>Históricamente, la discapacidad fue concebida bajo un modelo médico o de déficit, asumiendo que era la persona quien debía "rehabilitarse" o adaptarse. El <strong>modelo social de la discapacidad</strong> y el enfoque de derechos humanos transforman este paradigma: la discapacidad surge de la interacción entre las condiciones de una persona y las barreras que el entorno físico, digital, comunicativo y actitudinal le impone.</p>

      <h3>2. Igualdad, Equidad y Accesibilidad: distinciones esenciales</h3>
      <ul>
        <li><strong>Igualdad:</strong> Dar exactamente lo mismo a todas las personas. En un entorno con barreras, dar lo mismo perpetúa la exclusión.</li>
        <li><strong>Equidad:</strong> Ofrecer apoyos y recursos diferenciados según las necesidades específicas para nivelar el punto de partida.</li>
        <li><strong>Accesibilidad:</strong> Diseñar productos, servicios, entornos y procesos desde el origen para que puedan ser utilizados por la mayor diversidad posible de personas, sin necesidad de adaptaciones posteriores.</li>
      </ul>

      <h3>3. Tipología de barreras en la vida universitaria</h3>
      <ul>
        <li><strong>Barreras actitudinales:</strong> Prejuicios, bajas expectativas académicas, sobreprotección, paternalismo o indiferencia ante las solicitudes de apoyo.</li>
        <li><strong>Barreras comunicativas:</strong> Uso exclusivo de formatos orales sin apoyos visuales, o de textos complejos sin alternativas claras.</li>
        <li><strong>Barreras digitales:</strong> Plataformas de campus virtual incompatibles con lectores de pantalla, PDFs escaneados como imágenes sin capa de texto, videos sin subtítulos.</li>
        <li><strong>Barreras físicas y espaciales:</strong> Falta de señalización táctil o podotáctil, ascensores sin avisos auditivos, aulas sin espacios reservados para sillas de ruedas.</li>
        <li><strong>Barreras pedagógicas y evaluativas:</strong> Evaluaciones rígidas basadas exclusivamente en un único canal de respuesta o sin flexibilidad de tiempos.</li>
      </ul>

      <div class="case-study-box">
        <h4 class="case-study-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          Caso Práctico Universitario: El archivo escaneado inaccesible
        </h4>
        <p><strong>Situación:</strong> En una cátedra institucional, el docente comparte semanalmente lecturas obligatorias en archivos PDF que son fotografías escaneadas de fotocopias antiguas. Un estudiante con discapacidad visual que utiliza lector de pantalla (como NVDA o JAWS) no puede acceder a ninguna palabra, ya que para el software el archivo es solo una imagen opaca sin texto interpretable.</p>
        <p><strong>Impacto:</strong> El estudiante queda en desventaja académica inmediata y depende de que otra persona le lea el material, afectando su autonomía.</p>
        <p><strong>Alternativa institucional:</strong> El docente, con apoyo de la biblioteca universitaria, debe solicitar o generar versiones digitales accesibles procesadas con reconocimiento óptico de caracteres (OCR), o utilizar documentos en formato Word estructurados con títulos y encabezados semánticos.</p>
      </div>

      <div class="best-practices-box">
        <h4 class="best-practices-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Buenas prácticas institucionales inmediatas
        </h4>
        <ul>
          <li>Escuchar siempre en primer lugar la voz, experiencia y preferencias del estudiante.</li>
          <li>Revisar los materiales educativos antes de iniciar el semestre académico.</li>
          <li>Entender que eliminar barreras beneficia no solo a estudiantes con discapacidad, sino a toda la comunidad estudiantil.</li>
        </ul>
      </div>

      <div class="reflection-box">
        <h4 class="reflection-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z"/></svg>
          Pregunta de reflexión institucional
        </h4>
        <p>En tu área o facultad, ¿los procesos y reglamentos están concebidos pensando en que todos los estudiantes aprenden y participan de la misma manera, o existen canales formales para identificar y desmontar barreras?</p>
      </div>
    `
  },
  {
    id: 2,
    title: "Discapacidad visual",
    tagline: "Acceso a la información, tecnologías de asistencia y orientación",
    time: "12 min de lectura",
    objective: "Reconocer barreras y estrategias para favorecer el acceso a la información, la autonomía y la participación plena de personas con discapacidad visual en la educación superior.",
    summary: "Aprende sobre lectores de pantalla, navegación con teclado, contraste de color, textos alternativos y diseño de documentos digitales accesibles.",
    contentHtml: `
      <div class="module-objective">
        <strong>Objetivo de aprendizaje:</strong>
        Comprender la diversidad de experiencias de las personas con baja visión y ceguera, y aplicar pautas prácticas de diseño digital accesible, ergonomía visual y orientación espacial en el entorno universitario.
      </div>

      <h3>1. Diversidad en la discapacidad visual</h3>
      <p>La discapacidad visual abarca un espectro amplio. Incluye a personas con <strong>ceguera total</strong> (quienes perciben la información principalmente por vía auditiva o táctil/Braille) y personas con <strong>baja visión</strong> (quienes tienen remanente visual utilizable y se benefician de contrastes elevados, lupas, ampliación tipográfica e iluminación controlada).</p>

      <h3>2. Tecnologías de asistencia y navegación</h3>
      <p>Las personas con discapacidad visual utilizan habitualmente:</p>
      <ul>
        <li><strong>Lectores de pantalla:</strong> Programas (como NVDA, JAWS, VoiceOver o TalkBack) que verbalizan o traducen a línea Braille el contenido de la pantalla. Estos programas leen el código subyacente en orden secuencial.</li>
        <li><strong>Navegación exclusiva por teclado:</strong> Mediante teclas como <code>Tab</code>, <code>Shift + Tab</code>, flechas y <code>Enter</code>, sin utilizar el ratón o cursor visual.</li>
        <li><strong>Ampliadores y magnificadores de pantalla:</strong> Herramientas de zoom óptico digital e inversión de contraste cromático.</li>
      </ul>

      <h3>3. Pautas clave para documentos y plataformas accesibles</h3>
      <ul>
        <li><strong>Texto alternativo en imágenes:</strong> Toda imagen que transmita información académica o administrativa debe incluir una descripción clara (atributo <code>alt</code>). Si es meramente decorativa, debe marcarse como tal para no saturar al lector de pantalla.</li>
        <li><strong>Jerarquía de encabezados (H1, H2, H3):</strong> Los lectores de pantalla permiten navegar saltando entre títulos. No uses negritas visuales para simular encabezados; usa la estructura semántica correcta.</li>
        <li><strong>Enlaces con texto descriptivo:</strong> Evita enlaces titulados "haz clic aquí" o "más información". Utiliza textos con significado propio, como "Consultar calendario académico 2026".</li>
        <li><strong>Contraste cromático suficiente:</strong> Garantizar un contraste de al menos 4.5:1 entre el texto y el fondo para texto estándar (según WCAG AA).</li>
      </ul>

      <div class="case-study-box">
        <h4 class="case-study-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          Caso Práctico Universitario: Diapositiva con gráficos estadísticos
        </h4>
        <p><strong>Situación:</strong> En una clase de economía, el docente proyecta una diapositiva con un gráfico de barras comparativo y dice únicamente: <em>"Como pueden ver claramente aquí, la tendencia sube de forma notoria"</em>. Un estudiante ciego no puede ver el gráfico ni interpretar la frase verbal ambigua.</p>
        <p><strong>Solución pedagógica accesible:</strong> El docente describe verbalmente la conclusión del gráfico mientras enseña: <em>"El gráfico muestra las exportaciones entre 2020 y 2025, evidenciando un crecimiento sostenido del 15% anual"</em>. Además, en el material compartido en el aula virtual, adjunta una tabla de datos accesible con los valores exactos y una descripción textual sintética.</p>
      </div>

      <div class="best-practices-box">
        <h4 class="best-practices-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Buenas prácticas de trato y autonomía
        </h4>
        <ul>
          <li>Al interactuar, identifícate con tu nombre al iniciar la conversación: <em>"Hola Carlos, soy la profesora Andrea"</em>.</li>
          <li>Si vas a guiar a una persona con discapacidad visual, ofrece tu brazo u hombro en lugar de tomarla o empujarla.</li>
          <li>En los pasillos y aulas, mantén las puertas completamente abiertas o cerradas, nunca a medio abrir.</li>
          <li>Respeta siempre su autonomía y pregunta antes de asumir qué tipo de ayuda requiere.</li>
        </ul>
      </div>

      <div class="reflection-box">
        <h4 class="reflection-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z"/></svg>
          Pregunta de reflexión institucional
        </h4>
        <p>¿Las circulares institucionales y los exámenes de tu universidad pueden ser respondidos usando únicamente el teclado y un lector de pantalla?</p>
      </div>
    `
  },
  {
    id: 3,
    title: "Discapacidad auditiva",
    tagline: "Comunicación accesible, subtítulos y diversidad lingüística",
    time: "11 min de lectura",
    objective: "Reconocer las barreras de comunicación para personas sordas o con pérdida auditiva y proponer alternativas pedagógicas y administrativas respetuosas de su diversidad cultural y lingüística.",
    summary: "Conoce las diferencias entre personas sordas señantes y personas con hipoacusia, la importancia de subtítulos sincronizados, transcripciones y turnos de palabra.",
    contentHtml: `
      <div class="module-objective">
        <strong>Objetivo de aprendizaje:</strong>
        Comprender las particularidades lingüísticas y comunicativas de la comunidad sorda e hipoacúsica, implementando recursos audiovisuales accesibles y dinámicas de interacción equitativas en las aulas universitarias.
      </div>

      <h3>1. Diversidad en la experiencia auditiva</h3>
      <p>Es indispensable evitar generalizaciones: <strong>no todas las personas sordas tienen las mismas preferencias comunicativas</strong>:</p>
      <ul>
        <li><strong>Personas sordas señantes:</strong> Tienen como primera lengua la Lengua de Señas (en Colombia, la LSC - Lengua de Señas Colombiana), la cual es una lengua natural con gramática y estructura propia, independiente del español. Para muchas de ellas, el español escrito es una segunda lengua.</li>
        <li><strong>Personas sordas oralizadas / con hipoacusia:</strong> Pueden comunicarse verbalmente en español, apoyándose en la lectura labiofacial, prótesis auditivas o implantes cocleares. Su requerimiento principal suele ser un ambiente acústico adecuado, micrófonos y subtítulos textuales.</li>
      </ul>

      <h3>2. Elementos obligatorios para la accesibilidad audiovisual</h3>
      <ul>
        <li><strong>Subtítulos cerrados (Closed Captions):</strong> No solo transcriben las palabras habladas, sino que identifican a los interlocutores e indican ruidos de fondo relevantes (ej. <em>[aplausos]</em>, <em>[música suave]</em>).</li>
        <li><strong>Transcripciones textuales completas:</strong> Especialmente útiles para podcasts, audios explicativos o conferencias grabadas.</li>
        <li><strong>Servicio de interpretación en Lengua de Señas:</strong> Para estudiantes usuarios de LSC, el servicio de interpretación profesional calificado es un derecho fundamental que garantiza el acceso al conocimiento y la participación.</li>
      </ul>

      <div class="case-study-box">
        <h4 class="case-study-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          Caso Práctico Universitario: El video obligatorio sin subtítulos
        </h4>
        <p><strong>Situación:</strong> Una materia virtual sube un video explicativo de 40 minutos como requisito indispensable para realizar un cuestionario evaluativo. El video no tiene subtítulos ni transcripción, y los subtítulos automáticos de la plataforma están deshabilitados o son incoherentes.</p>
        <p><strong>Impacto:</strong> El estudiante con pérdida auditiva se ve forzado a solicitar favores a compañeros o pierde el puntaje de la actividad por una barrera tecnológica evitable.</p>
        <p><strong>Alternativa institucional:</strong> Asegurar que todo material audiovisual institucional cuente con subtitulado revisado antes de publicarse, o brindar una transcripción estructurada en texto editable de la intervención.</p>
      </div>

      <div class="best-practices-box">
        <h4 class="best-practices-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Estrategias de interacción en clase y reuniones
        </h4>
        <ul>
          <li><strong>Manejo estricto de turnos de palabra:</strong> Si varias personas hablan a la vez, se anula la lectura labiofacial y el intérprete no puede mediar la comunicación.</li>
          <li><strong>Ubicación visual:</strong> Quien hable debe tener su rostro bien iluminado, sin taparse la boca ni dar la espalda mientras escribe en el tablero.</li>
          <li><strong>Dirígete siempre al estudiante:</strong> Cuando haya un intérprete presente, mira y habla directamente a la persona sorda, no al intérprete (evita decir: <em>"dígale a él que..."</em>).</li>
        </ul>
      </div>

      <div class="reflection-box">
        <h4 class="reflection-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z"/></svg>
          Pregunta de reflexión institucional
        </h4>
        <p>¿Los eventos institucionales, ceremonias de grado y comunicaciones de rectoría disponen de manera regular de interpretación en lengua de señas y subtítulos en tiempo real?</p>
      </div>
    `
  },
  {
    id: 4,
    title: "Discapacidad intelectual y accesibilidad cognitiva",
    tagline: "Claridad, lenguaje accesible y respeto a la autonomía",
    time: "12 min de lectura",
    objective: "Comprender cómo optimizar la claridad en las instrucciones académicas y procedimientos administrativos, fomentando la accesibilidad cognitiva sin infantilizar ni subestimar a las personas.",
    summary: "Aprende pautas de lenguaje claro, organización paso a paso, apoyos visuales pertinentes, anticipación de actividades y validación respetuosa de la comprensión.",
    contentHtml: `
      <div class="module-objective">
        <strong>Objetivo de aprendizaje:</strong>
        Aprender a diseñar guías docentes, trámites administrativos y evaluaciones con accesibilidad cognitiva y lenguaje claro, promoviendo la autonomía adulta y el aprendizaje significativo de estudiantes con discapacidad intelectual.
      </div>

      <h3>1. Accesibilidad cognitiva: dignidad sin infantilización</h3>
      <p>La accesibilidad cognitiva beneficia a todas las personas y es esencial para quienes presentan discapacidad intelectual o dificultades en el procesamiento de la información. Un principio rector innegociable es el <strong>trato adulto y respetuoso</strong>: adaptar un texto o una instrucción no significa utilizar diminutivos, caricaturas o hablar como si se tratara de niños.</p>

      <h3>2. Principios de Lenguaje Claro en la Universidad</h3>
      <ul>
        <li><strong>Estructura lógica directa:</strong> Ordenar las frases con la estructura tradicional: Sujeto + Verbo + Predicado.</li>
        <li><strong>Una idea por frase:</strong> Evitar párrafos interminables con múltiples cláusulas subordinadas o paréntesis explicativos densos.</li>
        <li><strong>Explicación de tecnicismos:</strong> Cuando sea necesario utilizar conceptos técnicos o jurídicos, añadir una definición breve y contextualizada en el mismo documento.</li>
        <li><strong>Instrucciones secuenciales numeradas:</strong> Indicar paso 1, paso 2 y paso 3, especificando qué debe hacerse, dónde entregarlo y la fecha límite exacta.</li>
      </ul>

      <h3>3. Anticipación y tiempos de procesamiento</h3>
      <p>Los cambios imprevistos en calendarios, metodologías o asignación de salones pueden generar altos niveles de desorientación y ansiedad. Anticipar las actividades, publicar con suficiente antelación los cronogramas y otorgar tiempos de respuesta sin presiones son prácticas institucionales clave.</p>

      <div class="case-study-box">
        <h4 class="case-study-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          Caso Práctico Universitario: El instructivo de matrícula complejo
        </h4>
        <p><strong>Situación:</strong> Una circular administrativa de matrícula contiene 12 páginas redactadas con jerga jurídica y términos como <em>"prelación de prerrequisitos"</em>, sin un diagrama ni un resumen de fechas claras. Varios estudiantes no logran inscribir sus asignaturas a tiempo.</p>
        <p><strong>Rediseño institucional accesible:</strong> La secretaría académica publica una guía de 1 página con pasos numerados, íconos claros, una tabla de fechas en orden cronológico y un canal directo de WhatsApp institucional para resolver dudas en lenguaje sencillo.</p>
      </div>

      <div class="best-practices-box">
        <h4 class="best-practices-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Buenas prácticas para docentes y tutores
        </h4>
        <ul>
          <li>Dividir proyectos grandes o trabajos de investigación en entregas parciales con retroalimentación progresiva.</li>
          <li>Verificar la comprensión de forma respetuosa pidiendo al estudiante que explique con sus propias palabras qué se acordó realizar.</li>
          <li>Ofrecer apoyos visuales y esquemas conceptuales complementarios al texto escrito.</li>
          <li>Reconocer que el estudiante es el protagonista de su proyecto de vida y toma de decisiones.</li>
        </ul>
      </div>

      <div class="reflection-box">
        <h4 class="reflection-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z"/></svg>
          Pregunta de reflexión institucional
        </h4>
        <p>¿Los reglamentos disciplinarios y académicos de tu institución están disponibles en versiones de lectura clara o resumida?</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Ajustes razonables y accesibilidad general",
    tagline: "Diseño universal, personalización y marco normativo",
    time: "14 min de lectura",
    objective: "Comprender la articulación entre el Diseño Universal para el Aprendizaje (DUA) y la provisión de Ajustes Razonables individuales en la educación superior.",
    summary: "Diferencia entre medidas colectivas y apoyos individuales concertados, el rol del diálogo con el estudiante y los procedimientos institucionales colegiados.",
    contentHtml: `
      <div class="module-objective">
        <strong>Objetivo de aprendizaje:</strong>
        Distinguir con precisión técnica entre la accesibilidad universal y la concertación de ajustes razonables individuales, entendiendo el procedimiento ético e institucional para su formulación y seguimiento.
      </div>

      <h3>1. Diseño Universal vs. Ajustes Razonables</h3>
      <ul>
        <li><strong>Diseño Universal (DUA):</strong> Se planifica con anticipación para toda la comunidad académica. Ofrece múltiples formas de representación de la información, múltiples formas de acción y expresión, y múltiples formas de motivación. Minimiza la necesidad de adaptaciones individuales posteriores.</li>
        <li><strong>Ajustes Razonables:</strong> Son modificaciones y adaptaciones necesarias y adecuadas que se implementan cuando el diseño general no es suficiente para garantizar a una persona con discapacidad el goce o ejercicio de sus derechos en igualdad de condiciones (según la Convención de la ONU y normativas como la Ley 1618 y Decreto 1421 en Colombia).</li>
      </ul>

      <h3>2. Características de un Ajuste Razonable</h3>
      <p>Un ajuste debe cumplir tres criterios:</p>
      <ol>
        <li><strong>Razonabilidad:</strong> Que sea pertinente, eficaz para eliminar la barrera identificada y no imponga una carga desproporcionada o indebida a la institución.</li>
        <li><strong>Concertación:</strong> Debe definirse en diálogo directo con el estudiante; nunca debe imponerse de manera vertical ni asumirse de antemano.</li>
        <li><strong>Preservación del rigor académico:</strong> El ajuste razonable adapta la vía o formato de acceso o demostración del aprendizaje, sin eliminar los objetivos formativos esenciales de la carrera profesional.</li>
      </ol>

      <div class="case-study-box">
        <h4 class="case-study-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          Caso Práctico Universitario: La evaluación escrita contrarreloj
        </h4>
        <p><strong>Situación:</strong> Una estudiante con temblor esencial y fatiga muscular motora debe presentar un examen de cálculo de 20 preguntas en 60 minutos con lápiz y papel. La estudiante manifiesta que el tiempo es insuficiente para escribir las fórmulas a mano y experimenta dolor agudo.</p>
        <p><strong>Ruta de concertación:</strong></p>
        <ol>
          <li>El equipo de bienestar / permanencia coordina un diálogo con la estudiante y el docente titular.</li>
          <li>Se acuerdan ajustes pertinentes: 50% de tiempo adicional (90 minutos), posibilidad de responder en computador portátil usando un software editor de ecuaciones, y descansos de 5 minutos cada media hora.</li>
          <li>Se formaliza el acta de ajuste con el compromiso del docente de facilitar el archivo digital accesible.</li>
        </ol>
      </div>

      <div class="best-practices-box">
        <h4 class="best-practices-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Gobernanza institucional para los ajustes
        </h4>
        <ul>
          <li>Evitar que cada docente decida de forma aislada e improvisada sobre las solicitudes de ajuste.</li>
          <li>Contar con un comité o protocolo de inclusión institucional claro que brinde acompañamiento técnico al docente.</li>
          <li>Mantener la estricta confidencialidad de la historia de vida del estudiante, compartiendo solo los apoyos pedagógicos requeridos.</li>
        </ul>
      </div>

      <div class="reflection-box">
        <h4 class="reflection-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z"/></svg>
          Aviso sobre alcance formativo
        </h4>
        <p class="text-muted">Las pautas pedagógicas presentadas en este módulo constituyen orientaciones de buenas prácticas universitarias y no pretenden fungir como asesoría jurídica vinculante.</p>
      </div>
    `
  },
  {
    id: 6,
    title: "Implementar, hacer seguimiento y mejorar",
    tagline: "Gestión del cambio institucional y sostenibilidad",
    time: "11 min de lectura",
    objective: "Consolidar las capacidades institucionales para transformar los aprendizajes y diagnósticos en planes de acción sostenibles con responsables, plazos e indicadores de verificación.",
    summary: "Aprende a estructurar planes de mejora viables, coordinar áreas académicas y administrativas, y evaluar periódicamente el impacto real de las medidas inclusivas.",
    contentHtml: `
      <div class="module-objective">
        <strong>Objetivo de aprendizaje:</strong>
        Aprender a formular planes de mejoramiento institucional viables y participativos, articulando áreas académicas, tecnológicas, de bienestar y administrativas con seguimiento continuo.
      </div>

      <h3>1. De la buena intención a la política institucional</h3>
      <p>Uno de los mayores desafíos en las universidades es que las iniciativas de inclusión dependan exclusivamente de la voluntad de docentes aislados. Para que la inclusión sea sostenible, debe convertirse en una <strong>capacidad institucional instalada</strong>, respaldada por planes operativos, presupuestos y responsabilidades formalizadas.</p>

      <h3>2. Pasos para estructurar un Plan de Mejora Institucional</h3>
      <ol>
        <li><strong>Identificación precisa de la barrera:</strong> Describir el obstáculo concreto basándose en evidencias y en la voz directa de la comunidad universitaria.</li>
        <li><strong>Priorización estratégica:</strong> Clasificar las acciones según su viabilidad e impacto (acciones inmediatas de bajo costo vs. transformaciones de infraestructura de mediano plazo).</li>
        <li><strong>Asignación formal de responsables:</strong> Nombrar cargos o dependencias específicas (ej. Dirección de Tecnología, Decanaturas, Bienestar Universitario) y no "la institución" en general.</li>
        <li><strong>Cronograma y plazos orientativos:</strong> Establecer fechas límites realistas para cada fase de ejecución.</li>
        <li><strong>Medio de verificación:</strong> Definir el producto o evidencia verificable que demuestra la eliminación de la barrera (ej. acta de capacitación, reporte de accesibilidad web, catálogo de guías adaptadas).</li>
      </ol>

      <div class="case-study-box">
        <h4 class="case-study-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          Caso Práctico Universitario: El plan de adecuación de guías docentes
        </h4>
        <p><strong>Hallazgo:</strong> Una facultad descubre que el 80% de los sílabos y guías de cátedra son PDFs planos no accesibles para lectores de pantalla.</p>
        <p><strong>Estructura del Plan de Acción:</strong></p>
        <ul>
          <li><strong>Acción:</strong> Capacitar a docentes en creación de plantillas de Word y PDF accesibles y adecuar las 50 guías prioritarias de primer semestre.</li>
          <li><strong>Responsable:</strong> Centro de Innovación Pedagógica en conjunto con la Dirección de Programa.</li>
          <li><strong>Plazo:</strong> Intersemestre (6 semanas).</li>
          <li><strong>Verificación:</strong> Informe de validación técnica con la herramienta de accesibilidad de Microsoft Word y lectura de muestra con lector NVDA.</li>
        </ul>
      </div>

      <div class="best-practices-box">
        <h4 class="best-practices-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          Seguimiento y participación permanente
        </h4>
        <ul>
          <li>La evaluación más genuina de una medida inclusiva proviene de los propios estudiantes con discapacidad que la utilizan a diario.</li>
          <li>Crear mesas periódicas de escucha y retroalimentación para ajustar las acciones en marcha.</li>
          <li>Celebrar los avances institucionales e incentivar las buenas prácticas docentes en las evaluaciones institucionales.</li>
        </ul>
      </div>

      <div class="reflection-box">
        <h4 class="reflection-title">
          <svg aria-hidden="true" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z"/></svg>
          Pregunta de cierre
        </h4>
        <p>¿Tu institución cuenta con un cronograma anual para revisar la efectividad de sus apoyos y servicios de inclusión?</p>
      </div>
    `
  }
];

const LearningModule = {
  STORAGE_KEY: "incluruta_completed_modules",

  getCompletedModules() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Error reading completed modules from localStorage:", e);
      return [];
    }
  },

  isModuleCompleted(id) {
    const list = this.getCompletedModules();
    return list.includes(id);
  },

  toggleModuleCompletion(id) {
    let list = this.getCompletedModules();
    let isNowCompleted = false;
    if (list.includes(id)) {
      list = list.filter(mId => mId !== id);
      isNowCompleted = false;
    } else {
      list.push(id);
      isNowCompleted = true;
    }
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error("Error saving module completion to localStorage:", e);
    }
    this.renderModuleCards();
    if (window.App && typeof window.App.updateGlobalProgressSummary === "function") {
      window.App.updateGlobalProgressSummary();
    }
    return isNowCompleted;
  },

  init() {
    this.renderModuleCards();
    this.setupModalEventListeners();
  },

  renderModuleCards() {
    const container = document.getElementById("modules-grid-container");
    if (!container) return;

    const completedList = this.getCompletedModules();

    container.innerHTML = MODULES_DATA.map(mod => {
      const isCompleted = completedList.includes(mod.id);
      return `
        <article class="module-card ${isCompleted ? 'completed' : ''}" id="module-card-${mod.id}">
          <div class="module-header">
            <span class="module-number">Módulo 0${mod.id}</span>
            <span class="module-badge ${isCompleted ? 'badge-completed' : 'badge-pending'}" id="badge-mod-${mod.id}">
              ${isCompleted 
                ? '<svg aria-hidden="true" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Completado' 
                : 'Pendiente'}
            </span>
          </div>
          <h3 class="module-title">${mod.title}</h3>
          <p class="module-desc">${mod.summary}</p>
          <div class="module-footer">
            <span class="module-time">
              <svg aria-hidden="true" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
              ${mod.time}
            </span>
            <button type="button" class="btn btn-sm ${isCompleted ? 'btn-outline-subtle' : 'btn-primary'}" onclick="LearningModule.openModal(${mod.id})" aria-haspopup="dialog">
              ${isCompleted ? 'Revisar módulo' : 'Explorar módulo'}
            </button>
          </div>
        </article>
      `;
    }).join("");
  },

  openModal(id) {
    const mod = MODULES_DATA.find(m => m.id === id);
    if (!mod) return;

    const modalOverlay = document.getElementById("module-reader-modal");
    const modalTitle = document.getElementById("modal-module-title");
    const modalNumber = document.getElementById("modal-module-number");
    const modalBody = document.getElementById("modal-module-body");
    const modalToggleBtn = document.getElementById("modal-toggle-complete-btn");

    if (!modalOverlay || !modalTitle || !modalBody || !modalToggleBtn) return;

    const isCompleted = this.isModuleCompleted(id);

    modalNumber.textContent = `MÓDULO 0${mod.id}`;
    modalTitle.textContent = mod.title;
    modalBody.innerHTML = mod.contentHtml;

    this.updateModalButtonState(modalToggleBtn, isCompleted);

    modalToggleBtn.onclick = () => {
      const isNowDone = this.toggleModuleCompletion(id);
      this.updateModalButtonState(modalToggleBtn, isNowDone);
      if (window.App && typeof window.App.announceToScreenReader === "function") {
        window.App.announceToScreenReader(
          isNowDone ? `Módulo ${mod.id} marcado como completado` : `Módulo ${mod.id} marcado como pendiente`
        );
      }
    };

    modalOverlay.classList.add("open");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Focus en botón de cerrar accesible
    const closeBtn = document.getElementById("modal-close-button");
    if (closeBtn) closeBtn.focus();
  },

  updateModalButtonState(button, isCompleted) {
    if (isCompleted) {
      button.className = "btn btn-outline-subtle";
      button.innerHTML = `
        <svg aria-hidden="true" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        Desmarcar como completado
      `;
    } else {
      button.className = "btn btn-success";
      button.innerHTML = `
        <svg aria-hidden="true" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        Marcar módulo como completado
      `;
    }
  },

  closeModal() {
    const modalOverlay = document.getElementById("module-reader-modal");
    if (!modalOverlay) return;
    modalOverlay.classList.remove("open");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  },

  setupModalEventListeners() {
    const modalOverlay = document.getElementById("module-reader-modal");
    const closeBtn = document.getElementById("modal-close-button");
    const bottomCloseBtn = document.getElementById("modal-bottom-close-btn");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeModal());
    }
    if (bottomCloseBtn) {
      bottomCloseBtn.addEventListener("click", () => this.closeModal());
    }

    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
          this.closeModal();
        }
      });
    }

    // Cerrar con Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (modalOverlay && modalOverlay.classList.contains("open")) {
          this.closeModal();
        }
      }
    });
  }
};

window.LearningModule = LearningModule;
