# IncluRuta - Ruta de Aprendizaje y Diagnóstico Institucional sobre Inclusión

> **“La inclusión comienza cuando aprendemos a reconocer las barreras y a construir oportunidades para todas las personas.”**  
> *Una ruta para aprender, evaluar nuestras prácticas y avanzar hacia una educación superior más accesible e inclusiva.*

---

## 1. Identidad y Propósito del Proyecto

**IncluRuta** es una plataforma web profesional, moderna, empática y accesible diseñada específicamente para **instituciones de educación superior**. Su propósito principal es acompañar a las universidades en:

1. **Aprendizaje institucional pedagógico:** Fortalecer las capacidades de docentes, directivos, equipos de bienestar y personal administrativo en torno a la inclusión de personas con discapacidad visual, auditiva e intelectual.
2. **Diagnóstico institucional orientativo:** Ofrecer una autoevaluación reflexiva de 16 preguntas estructuradas en 8 áreas estratégicas para identificar barreras en entornos digitales, comunicativos, pedagógicos y físicos.
3. **Plan de Acción y Recomendaciones:** Traducir los hallazgos en acciones prioritarias con responsables sugeridos, plazos e indicadores de verificación, permitiendo su exportación e impresión formal.
4. **Biblioteca de Recursos:** Acceso inmediato a marcos normativos colombianos (Decreto 1421 de 2017, Ley 1618 de 2013, Guías MinEducación), estándares internacionales (WCAG 2.2 W3C) y herramientas de auditoría.

---

## 2. Estructura de Archivos del Proyecto

El proyecto está organizado en la carpeta `Documentos/IncluRuta` de la siguiente manera:

```
IncluRuta/
├── index.html                  # Estructura semántica HTML5 (accesible, ARIA, SPA por secciones)
├── css/
│   └── styles.css              # Sistema visual, variables CSS, WCAG AA, modo alto contraste, print CSS
├── js/
│   ├── app.js                  # Enrutamiento SPA accesible, accesibilidad, buscador de recursos y LocalStorage
│   ├── learning.js             # Contenido pedagógico de los 6 módulos, visor modal y checklists
│   └── diagnostic.js           # 16 preguntas, cálculo exacto de resultados y plan de acción interactivo
├── assets/
│   ├── logo-incluruta.png      # Logo oficial original sin deformaciones ni alteraciones
│   └── icons/                  # Iconos y recursos visuales
└── README.md                   # Documentación técnica, guía de VS Code y despliegue
```

---

## 3. Guía de Ejecución en Visual Studio Code (VS Code)

Para abrir y trabajar en este proyecto desde VS Code, sigue estos sencillos pasos:

### Paso 1: Abrir la carpeta en VS Code
1. Abre **Visual Studio Code**.
2. En la barra superior, haz clic en **Archivo (File) > Abrir carpeta... (Open Folder...)**.
3. Navega a tu carpeta `Documentos` y selecciona la carpeta **`IncluRuta`**.
4. Haz clic en **Seleccionar carpeta**.

### Paso 2: Ejecutar con la extensión Live Server (Recomendado)
1. En VS Code, ve a la pestaña de extensiones en la barra lateral izquierda (o presiona `Ctrl + Shift + X`).
2. Busca la extensión **Live Server** (creada por *Ritwick Dey*) e instálala si aún no la tienes.
3. Una vez instalada, haz clic derecho sobre el archivo `index.html` en el explorador de archivos de VS Code y selecciona:  
   👉 **"Open with Live Server"** (o haz clic en el botón **"Go Live"** en la barra de estado inferior derecha).
4. El navegador se abrirá automáticamente en la dirección:  
   `http://127.0.0.1:5500/index.html`

### Paso 3: Ejecución directa sin extensiones
Si no deseas instalar Live Server, puedes hacer doble clic directamente sobre el archivo `index.html` en el Explorador de Archivos de Windows; el sitio funcionará completamente en Google Chrome, Microsoft Edge, Mozilla Firefox o Safari.

---

## 4. Funcionalidades Destacadas

### A. Herramientas de Accesibilidad Digital (WCAG 2.2 Nivel AA)
- **Barra de accesibilidad superior:**
  - Control de tamaño de fuente: normal (100%), grande (115%) y extragrande (130%) sin alterar la diagramación.
  - Modo **Alto Contraste**: paleta negra/amarillo/cyan optimizada para personas con baja visión (contraste superior a 10:1).
  - Restablecimiento rápido de preferencias visuales.
- **Navegación completa por teclado:**
  - Enlace de salto rápido al contenido principal (`#main-content`) visible al presionar `Tab`.
  - Indicador de foco visual de 3px de alto contraste en todos los elementos interactivos.
  - Soporte de tecla `Escape` para cerrar ventanas modales y el menú móvil.
- **Anunciador dinámico para lectores de pantalla:** Región `aria-live="polite"` que verbaliza cambios de sección, selecciones y avisos.

### B. Los 6 Módulos de Aprendizaje Pedagógico
1. **Módulo 1: Comprender la inclusión:** Responsabilidad compartida, igualdad vs. equidad vs. accesibilidad, barreras actitudinales, físicas y digitales. Caso de PDF escaneado inaccesible.
2. **Módulo 2: Discapacidad visual:** Lectores de pantalla (NVDA, JAWS), contraste, texto alternativo descriptivo, caso de gráficos en diapositivas y pautas de trato respetuoso.
3. **Módulo 3: Discapacidad auditiva:** Diferencias entre lengua de señas y español signado, subtítulos cerrados, apoyos visuales y caso de videos sin subtítulos.
4. **Módulo 4: Discapacidad intelectual y accesibilidad cognitiva:** Lenguaje claro sin infantilizar, diseño secuencial, anticipación de cambios y simplificación de trámites complejos.
5. **Módulo 5: Ajustes razonables y accesibilidad general:** Diseño Universal para el Aprendizaje (DUA) vs. adaptaciones individuales concertadas y procedimiento ético universitario.
6. **Módulo 6: Implementar, hacer seguimiento y mejorar:** Gestión del cambio, asignación de responsables, plazos, diálogo continuo e indicadores de permanencia.

*Cada módulo permite marcar su estado como completado, sincronizando el progreso general en tiempo real.*

### C. Diagnóstico Institucional (16 Preguntas, 8 Áreas)
- Áreas evaluadas: *Accesibilidad digital, Comunicación accesible, Comprensión cognitiva, Formación docente, Procedimientos y ajustes, Participación y escucha, Espacios y entorno, Seguimiento y mejora continua*.
- 4 opciones claras: *Consistente*, *Parcialmente*, *No por ahora*, *No lo sé*.
- Resultados cuantitativos reales (sin porcentajes inventados), desglose por áreas y generación automática del Plan de Acción.

### D. Plan de Acción y Exportación
- Recomendaciones orientativas estructuradas: hallazgo, acción, prioridad, responsable sugerido, plazo y verificación.
- Modificación interactiva del estado (*Pendiente*, *En proceso*, *Completada*) y campo de notas internas.
- **Función de impresión:** Estilos `@media print` optimizados para imprimir o guardar como PDF formal con membrete.

### E. Biblioteca de Recursos y Búsqueda
- Buscador interactivo por palabra clave y botones de filtro por categoría.
- Enlaces oficiales verificados a normativas colombianas (MinEducación, INSOR, INCI, Función Pública) y estándares globales (W3C/WAI, CAST DUA).

---

## 5. Instrucciones para Publicar en Internet y Compartir

Para compartir la plataforma con directivos, docentes o evaluadores mediante un enlace público y gratuito, puedes usar cualquiera de estas tres alternativas:

### Opción A: Despliegue en GitHub Pages (Gratis y Permanente)
1. Crea un repositorio en tu cuenta de GitHub (ej. `incluruta`).
2. Sube los archivos de la carpeta `Documentos/IncluRuta` al repositorio:
   ```bash
   git init
   git add .
   git commit -m "Lanzamiento oficial de IncluRuta"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/incluruta.git
   git push -u origin main
   ```
3. En GitHub, entra a **Settings > Pages**.
4. En **Branch**, selecciona `main` y la carpeta `/ (root)`. Haz clic en **Save**.
5. En unos minutos, obtendrás tu enlace público: `https://TU_USUARIO.github.io/incluruta/`.

### Opción B: Despliegue en Netlify Drop (En 30 segundos sin comandos)
1. Ingresa a [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra la carpeta `IncluRuta` directamente al área de carga del navegador.
3. Netlify generará al instante una URL pública compartible (ej. `https://incluruta-universidad.netlify.app`).

### Opción C: Despliegue en Vercel
1. Ingresa a [https://vercel.com](https://vercel.com).
2. Conecta tu repositorio de GitHub o utiliza la herramienta Vercel CLI (`npx vercel`) dentro de la carpeta.
3. Se generará un enlace seguro con HTTPS en segundos.

---

## 6. Privacidad y Almacenamiento Local

- **100% en el navegador:** IncluRuta no utiliza bases de datos remotas, servidores externos, cookies invasivas ni servicios de analítica de terceros.
- Todas las preferencias visuales, el progreso de los módulos y las respuestas del cuestionario se guardan exclusivamente en el `LocalStorage` del navegador del usuario.
- En el pie de página se incluye el botón **"Borrar datos locales de sesión"**, que permite restablecer el estado original en cualquier momento.

---

## 7. Registro de Pruebas Realizadas

- **Prueba 1 (Inicio):** Carga correcta del logo oficial en cabecera, hero (240px) y pie de página; navegación funcional mediante botones primarios.
- **Prueba 2 (Aprendizaje):** Apertura de los 6 módulos en el lector modal accesible, marcado/desmarcado de completado, cálculo de progreso y persistencia tras recargar.
- **Prueba 3 (Diagnóstico):** Recorrido paso a paso de las 16 preguntas, retroceso, selección de las 4 opciones, cálculo estricto de resultados y presentación de métricas reales.
- **Prueba 4 (Plan de Acción):** Generación de recomendaciones, cambio interactivo de estado de acciones, guardado de notas y visualización limpia en diálogo de impresión (`Ctrl + P`).
- **Prueba 5 (Accesibilidad):** Navegación fluida por teclado (`Tab`, `Shift + Tab`, `Enter`, `Espacio`, `Escape`), estados de foco visibles de 3px, modo alto contraste funcional y escalado tipográfico a 115% y 130%.
- **Prueba 6 (Responsive):** Diseño adaptable verificado en anchos de escritorio (1200px), tablet (768px) y móvil (375px) con menú hamburguesa accesible.
- **Prueba 7 (Consola):** Cero errores de JavaScript en consola y validación completa de enlaces internos y externos.
