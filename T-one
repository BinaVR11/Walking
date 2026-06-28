<!DOCTYPE html>
<html lang="es" class="h-full bg-slate-950 text-slate-100">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ImmerseVR Studio - Creador de Tours Virtuales 360</title>
  
  <!-- Tailwind CSS para el diseño responsivo del Dashboard -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- A-Frame para el motor VR de realidad virtual 360 compatible con Quest 3 -->
  <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
  
  <!-- Lucide Icons para una interfaz moderna -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    /* Transiciones fluidas */
    .fade-in {
      animation: fadeIn 0.4s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    /* Estilos personalizados para ocultar A-Frame cuando no esté activo */
    #vr-viewport-container {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 50;
    }
    #vr-viewport-container.active {
      display: block;
    }
    /* Animación de la burbuja guía de onboarding */
    .pulse-glow {
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
    }
  </style>
</head>
<body class="h-full flex flex-col font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">

  <!-- ================= HEADER / NAVEGACIÓN ================= -->
  <header class="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-40 px-4 lg:px-8 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-500/20">
        <i data-lucide="orbit" class="w-6 h-6 animate-spin-slow"></i>
      </div>
      <div>
        <h1 class="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ImmerseVR Studio</h1>
        <p class="text-xs text-slate-400">Creador de Tours Virtuales 360 & WebXR</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Meta Quest 3 Listo
      </span>
      <button onclick="toggleHelpModal()" class="p-2 rounded-lg border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
        <i data-lucide="help-circle" class="w-5 h-5"></i>
      </button>
    </div>
  </header>

  <!-- ================= CONTENIDO PRINCIPAL (DASHBOARD) ================= -->
  <main class="flex-1 flex flex-col lg:flex-row min-h-0 bg-slate-950" id="main-dashboard">
    
    <!-- PANEL DE CONTROL / EDICIÓN -->
    <section class="w-full lg:w-96 border-r border-slate-800 bg-slate-900/40 p-6 flex flex-col gap-6 overflow-y-auto">
      <div>
        <h2 class="text-lg font-bold text-white flex items-center gap-2">
          <i data-lucide="sliders" class="w-5 h-5 text-blue-500"></i>
          Gestión del Tour
        </h2>
        <p class="text-sm text-slate-400 mt-1">Configura las habitaciones y los portales de paso entre ellas.</p>
      </div>

      <!-- Añadir Nueva Escena -->
      <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-slate-200 flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4 text-emerald-500"></i>
          Añadir Nueva Escena 360
        </h3>
        
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-medium text-slate-400 mb-1">Nombre de la Escena</label>
            <input type="text" id="new-scene-name" placeholder="Ej: Terraza Exterior" class="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-lg text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500">
          </div>
          
          <div>
            <label class="block text-xs font-medium text-slate-400 mb-1">Imagen 360 (Equirectangular)</label>
            
            <!-- Selector de tipo de carga -->
            <div class="grid grid-cols-2 gap-2 mb-2">
              <button onclick="switchUploadType('template')" id="btn-upload-template" class="py-1.5 px-2 text-xs font-medium rounded-md bg-blue-600 text-white transition-all">Preestablecido</button>
              <button onclick="switchUploadType('file')" id="btn-upload-file" class="py-1.5 px-2 text-xs font-medium rounded-md bg-slate-800 text-slate-400 transition-all hover:text-white">Subir Imagen</button>
            </div>

            <!-- Opción: Selector de Generador Procedural -->
            <div id="container-upload-template" class="space-y-2">
              <select id="procedural-template-select" class="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500">
                <option value="space">Cielo Espacial Sci-Fi (Estrellas y Nebulosas)</option>
                <option value="sunset">Atardecer Degradado Suave</option>
                <option value="cyber">Malla Cyberpunk de Pruebas</option>
                <option value="matrix">Estudio Digital Matrix</option>
              </select>
              <p class="text-[10px] text-slate-500">Genera una textura inmersiva óptima 360° instantáneamente.</p>
            </div>

            <!-- Opción: Carga de Archivo local del usuario -->
            <div id="container-upload-file" class="hidden space-y-2">
              <label class="flex flex-col items-center justify-center border-2 border-dashed border-slate-800 hover:border-blue-500/50 bg-slate-950 rounded-lg cursor-pointer p-4 transition-all">
                <i data-lucide="upload-cloud" class="w-6 h-6 text-slate-500 mb-1"></i>
                <span class="text-xs font-medium text-slate-400" id="file-label-text">Seleccionar archivo 360</span>
                <span class="text-[9px] text-slate-600 mt-1">Formato JPG, PNG (Recomendado ratio 2:1)</span>
                <input type="file" id="local-image-file" accept="image/*" class="hidden" onchange="handleFileChange(event)">
              </label>
            </div>
          </div>

          <button onclick="addNewScene()" class="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm rounded-lg shadow-lg shadow-blue-500/10 transition-all flex items-center justify-center gap-1.5">
            <i data-lucide="plus" class="w-4 h-4"></i> Crear Escena
          </button>
        </div>
      </div>

      <!-- Creador de Hotspots (Portales de Navegación) -->
      <div class="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-slate-200 flex items-center gap-2">
          <i data-lucide="git-commit" class="w-4 h-4 text-indigo-400"></i>
          Conectar Escenas (Hotspot)
        </h3>
        
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-medium text-slate-400 mb-1">Desde Escena Origen</label>
            <select id="hotspot-source-select" class="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"></select>
          </div>
          <div>
            <label class="block text-xs font-medium text-slate-400 mb-1">Destino de la Burbuja</label>
            <select id="hotspot-target-select" class="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500"></select>
          </div>
          <div>
            <div class="flex justify-between text-xs font-medium text-slate-400 mb-1">
              <span>Orientación en el Espacio (Ángulo)</span>
              <span id="angle-display" class="text-blue-400">0°</span>
            </div>
            <input type="range" id="hotspot-angle" min="0" max="359" value="0" oninput="document.getElementById('angle-display').innerText = this.value + '°'" class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500">
            <div class="flex justify-between text-[10px] text-slate-600">
              <span>Frente (0°)</span>
              <span>Izquierda (90°)</span>
              <span>Atrás (180°)</span>
              <span>Derecha (270°)</span>
            </div>
          </div>
          <button onclick="addHotspot()" class="w-full py-2 bg-indigo-600/30 hover:bg-indigo-600/40 border border-indigo-500/30 text-indigo-300 font-medium text-sm rounded-lg transition-all flex items-center justify-center gap-1.5">
            <i data-lucide="link" class="w-4 h-4"></i> Enlazar con Burbuja
          </button>
        </div>
      </div>
    </section>

    <!-- AREA DE MAPA DE RED / VISTA GENERAL DEL TOUR -->
    <section class="flex-1 p-6 lg:p-8 flex flex-col gap-6 overflow-y-auto">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-extrabold text-white flex items-center gap-3">
            <i data-lucide="map" class="w-7 h-7 text-indigo-500"></i>
            Mapa Estructural del Tour
          </h2>
          <p class="text-slate-400 text-sm mt-1">Aquí se listan tus espacios inmersivos y los portales interactivos activos.</p>
        </div>
        
        <button onclick="startTour()" class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5">
          <i data-lucide="play" class="w-5 h-5 fill-current"></i>
          Iniciar Experiencia 360 / VR
        </button>
      </div>

      <!-- Tarjetas de Escenas creadas -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="scenes-grid-container">
        <!-- Render dinámico desde JS -->
      </div>
      
      <!-- Seccion Informativa para Meta Quest 3 -->
      <div class="mt-auto p-4 rounded-xl border border-slate-800 bg-slate-900/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div class="bg-blue-600/10 p-3 rounded-lg text-blue-400">
          <i data-lucide="vr" class="w-6 h-6"></i>
        </div>
        <div class="flex-1">
          <h4 class="text-sm font-semibold text-white">Instrucciones para Visualización en Meta Quest 3</h4>
          <p class="text-xs text-slate-400 mt-0.5">Abre esta web desde el navegador Meta Quest Browser. Al hacer clic en "Iniciar Experiencia", presiona el icono de las gafas en la esquina inferior derecha para ingresar al entorno inmersivo estéreo.</p>
        </div>
      </div>
    </section>
  </main>

  <!-- ================= CONTENEDOR DE LA ESCENA VR DE A-FRAME ================= -->
  <div id="vr-viewport-container">
    
    <!-- UI Superpuesta (Overlay) para el Tour Virtual 3D -->
    <div class="absolute top-0 left-0 w-full p-4 lg:p-6 flex items-start justify-between z-30 pointer-events-none">
      
      <!-- Título de Escena actual y estado -->
      <div class="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-2xl pointer-events-auto max-w-sm">
        <div class="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          Explorando en Vivo
        </div>
        <h3 id="vr-current-scene-title" class="text-lg font-bold text-white">Vestíbulo</h3>
        <p class="text-xs text-slate-400 mt-1">Mantén la mirada sobre las burbujas flotantes para viajar a otras áreas.</p>
      </div>

      <!-- Controles del Menú -->
      <div class="flex items-center gap-2 pointer-events-auto">
        <button onclick="showTourInstructions()" class="bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-2 text-sm font-medium transition-colors">
          <i data-lucide="info" class="w-4 h-4"></i> Guía Guiada
        </button>
        <button onclick="exitTour()" class="bg-rose-600 hover:bg-rose-500 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg shadow-rose-600/30 transition-all transform hover:scale-105">
          <i data-lucide="log-out" class="w-4 h-4"></i> Salir del Tour
        </button>
      </div>
    </div>

    <!-- Guía Informativa / Tutorial Guiado dentro del Tour -->
    <div id="tour-tutorial-bubble" class="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 max-w-full bg-slate-950/95 border border-slate-800 p-5 rounded-2xl shadow-2xl z-40 text-center pointer-events-auto fade-in">
      <div class="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto mb-3">
        <i data-lucide="navigation" class="w-6 h-6 animate-bounce"></i>
      </div>
      <h4 class="text-base font-bold text-white mb-2">¡Bienvenido al Tour Virtual!</h4>
      <p class="text-xs text-slate-300 mb-4 leading-relaxed">
        Arrastra la pantalla o gira tu cabeza con las gafas puestas para mirar a tu alrededor. Busca las <strong class="text-blue-400">burbujas azules flotantes</strong> y míralas fijamente o hazles clic para saltar entre las habitaciones del tour.
      </p>
      <button onclick="closeTutorialBubble()" class="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all">
        Entendido, ¡Comenzar!
      </button>
    </div>

    <!-- Escena A-Frame propiamente dicha -->
    <!-- Desactivamos la interfaz por defecto para controlarla con nuestro elegante overlay -->
    <a-scene embedded vr-mode-ui="enabled: true" renderer="antialias: true; colorManagement: true;">
      <a-assets id="vr-assets">
        <!-- Texturas de imágenes 360 se cargan dinámicamente aquí -->
      </a-assets>

      <!-- El domo 360 de visualización -->
      <a-sky id="vr-sky" radius="80" rotation="0 -90 0" material="shader: flat; npot: true"></a-sky>

      <!-- Contenedor dinámico para las burbujas/hotspots -->
      <a-entity id="vr-hotspots-container"></a-entity>

      <!-- Sistema de Cámara y Cursor (Interacción con Mirada - Gaze Trigger) -->
      <a-entity id="rig" position="0 0 0">
        <a-entity camera look-controls position="0 1.6 0">
          <a-cursor id="vr-cursor"
            animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 100; from: 0.1 0.1 0.1; to: 1 1 1"
            animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 1200; from: 1 1 1; to: 0.1 0.1 0.1"
            event-set__mouseenter="_event: mouseenter; color: #10B981"
            event-set__mouseleave="_event: mouseleave; color: #3B82F6"
            color="#3B82F6"
            material="shader: flat; depthTest: false"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03">
          </a-cursor>
        </a-entity>
      </a-entity>
    </a-scene>
  </div>

  <!-- ================= VENTANAS MODALES ================= -->
  
  <!-- Modal de Ayuda y Compatibilidad -->
  <div id="help-modal" class="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div class="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 flex flex-col gap-4 fade-in">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <h3 class="text-lg font-bold text-white flex items-center gap-2">
          <i data-lucide="info" class="text-blue-500 w-5 h-5"></i>
          Guía y Compatibilidad
        </h3>
        <button onclick="toggleHelpModal()" class="text-slate-400 hover:text-white transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="space-y-3 text-sm text-slate-300">
        <p>Esta plataforma permite crear recorridos 360 totalmente personalizados, interactivos y con compatibilidad para navegadores tradicionales y dispositivos de Realidad Virtual.</p>
        
        <div class="p-3 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
          <h4 class="font-bold text-xs text-white uppercase tracking-wider">¿Cómo funciona?</h4>
          <ul class="list-disc list-inside space-y-1 text-xs">
            <li><strong>Crear Escenas:</strong> Genera texturas inmersivas procedurales o sube tus propias fotos 360 tomadas con cámaras esféricas.</li>
            <li><strong>Conectar Habitaciones:</strong> Define un origen, un destino, el ángulo cardinal y genera un portal espacial interactivo.</li>
            <li><strong>Explorar VR:</strong> El cursor central de A-frame te permite interactuar en PC y Quest 3 usando la mirada (dejando fijo el punto por 1.2s) o haciendo clic.</li>
          </ul>
        </div>

        <div class="flex items-center gap-3 p-3 bg-blue-950/30 border border-blue-500/20 rounded-xl text-blue-300">
          <i data-lucide="smartphone" class="w-8 h-8 flex-shrink-0"></i>
          <p class="text-xs leading-relaxed"><strong>Soporte Giroscópico:</strong> En dispositivos móviles con Android o iOS, puedes mover tu celular para cambiar la perspectiva 360°.</p>
        </div>
      </div>
      <button onclick="toggleHelpModal()" class="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-colors">
        Cerrar
      </button>
    </div>
  </div>

  <!-- ================= JAVASCRIPT LOGIC ================= -->
  <script>
    // --- ESTADO GLOBAL DE LA APLICACIÓN ---
    let appState = {
      scenes: [],
      currentSceneId: null,
      uploadType: 'template', // 'template' | 'file'
      tempUploadedImageUrl: null
    };

    // --- ESCENAS INICIALES PREDETERMINADAS (SOPORTE PROCEDURAL DE ALTO NIVEL) ---
    // Generamos datos predeterminados para una inmersión inmediata
    window.addEventListener('DOMContentLoaded', () => {
      // Re-init lucide icons
      lucide.createIcons();
      
      // Creamos texturas de demostración iniciales con canvas
      const vestibularTexture = generateProceduralTexture('space', 'blue');
      const zenTexture = generateProceduralTexture('sunset', 'orange');
      const techTexture = generateProceduralTexture('cyber', 'purple');

      // Agregamos escenas por defecto
      appState.scenes = [
        {
          id: 'sc-vestibulo',
          name: 'Vestíbulo Espacial',
          imageUrl: vestibularTexture,
          isTemplate: true,
          templateType: 'space',
          hotspots: [
            { targetId: 'sc-jardin', angle: 45 },
            { targetId: 'sc-lab', angle: 315 }
          ]
        },
        {
          id: 'sc-jardin',
          name: 'Jardín Zen Atardecer',
          imageUrl: zenTexture,
          isTemplate: true,
          templateType: 'sunset',
          hotspots: [
            { targetId: 'sc-vestibulo', angle: 180 }
          ]
        },
        {
          id: 'sc-lab',
          name: 'Laboratorio de Pruebas',
          imageUrl: techTexture,
          isTemplate: true,
          templateType: 'cyber',
          hotspots: [
            { targetId: 'sc-vestibulo', angle: 180 }
          ]
        }
      ];

      renderDashboard();
      updateSelectDropdowns();
    });

    // --- GENERADOR DE TEXTURAS 360° PROCEDURALES (HTML5 CANVAS) ---
    // Resuelve fallos de carga remota y CORS, creando un cielo esférico hermoso al instante.
    function generateProceduralTexture(type, theme) {
      const canvas = document.createElement('canvas');
      // Dimensiones proporcionales 2:1 idóneas para proyección equirectangular
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');

      if (type === 'space') {
        // Cielo de espacio profundo con nebulosas y estrellas
        const grad = ctx.createRadialGradient(1024, 512, 10, 1024, 512, 1024);
        grad.addColorStop(0, '#1e1b4b');
        grad.addColorStop(0.5, '#0f172a');
        grad.addColorStop(1, '#020617');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Nubes de polvo cósmico (Nebulosas)
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const rad = 200 + Math.random() * 300;
          const nebGrad = ctx.createRadialGradient(x, y, 10, x, y, rad);
          const color = i % 2 === 0 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(99, 102, 241, 0.15)';
          nebGrad.addColorStop(0, color);
          nebGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = nebGrad;
          ctx.beginPath();
          ctx.arc(x, y, rad, 0, Math.PI * 2);
          ctx.fill();
        }

        // Estrellas
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 300; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 2 + 0.5;
          ctx.globalAlpha = Math.random();
          ctx.fillRect(x, y, size, size);
        }
        ctx.globalAlpha = 1.0;

        // Planeta decorativo
        const pX = 500, pY = 400, pR = 40;
        const pGrad = ctx.createRadialGradient(pX - 10, pY - 10, 5, pX, pY, pR);
        pGrad.addColorStop(0, '#93c5fd');
        pGrad.addColorStop(1, '#1e3a8a');
        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.arc(pX, pY, pR, 0, Math.PI * 2);
        ctx.fill();

      } else if (type === 'sunset') {
        // Atardecer degradado suave
        const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grad.addColorStop(0, '#0f172a');
        grad.addColorStop(0.3, '#311042');
        grad.addColorStop(0.6, '#881337');
        grad.addColorStop(0.8, '#f59e0b');
        grad.addColorStop(1, '#78350f');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Sol poniente
        const sX = 1024, sY = 800, sR = 120;
        const sGrad = ctx.createRadialGradient(sX, sY, 10, sX, sY, sR);
        sGrad.addColorStop(0, '#fffbeb');
        sGrad.addColorStop(0.4, '#fef08a');
        sGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = sGrad;
        ctx.beginPath();
        ctx.arc(sX, sY, sR, 0, Math.PI * 2);
        ctx.fill();

      } else if (type === 'cyber') {
        // Malla Cyberpunk futurista
        ctx.fillStyle = '#090514';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Líneas de cuadrícula/malla
        ctx.strokeStyle = '#3b0764';
        ctx.lineWidth = 2;
        const divisions = 24;
        for (let i = 0; i <= divisions; i++) {
          // Líneas verticales
          const x = (canvas.width / divisions) * i;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();

          // Líneas horizontales
          const y = (canvas.height / (divisions / 2)) * i;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

        // Línea de horizonte de neón brillante
        ctx.strokeStyle = '#d946ef';
        ctx.lineWidth = 8;
        ctx.shadowColor = '#d946ef';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();
        ctx.shadowBlur = 0; // reset

        // Ciudad cibernética en silueta
        ctx.fillStyle = '#02010a';
        for (let i = 0; i < 40; i++) {
          const w = 40 + Math.random() * 80;
          const h = 50 + Math.random() * 150;
          const x = (canvas.width / 40) * i;
          const y = (canvas.height / 2) - h;
          ctx.fillRect(x, y, w, h);
        }

      } else {
        // Tema Matrix: datos flotantes binarios
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#10b981';
        ctx.font = '16px monospace';
        for (let i = 0; i < 120; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const char = Math.random() > 0.5 ? '1' : '0';
          ctx.globalAlpha = Math.random() * 0.7 + 0.1;
          ctx.fillText(char, x, y);
        }
        ctx.globalAlpha = 1.0;
      }

      return canvas.toDataURL('image/jpeg');
    }

    // --- CONTROL DE UI: CAMBIO DE TIPO DE CARGA ---
    function switchUploadType(type) {
      appState.uploadType = type;
      const btnTemplate = document.getElementById('btn-upload-template');
      const btnFile = document.getElementById('btn-upload-file');
      const cTemplate = document.getElementById('container-upload-template');
      const cFile = document.getElementById('container-upload-file');

      if (type === 'template') {
        btnTemplate.className = 'py-1.5 px-2 text-xs font-medium rounded-md bg-blue-600 text-white transition-all';
        btnFile.className = 'py-1.5 px-2 text-xs font-medium rounded-md bg-slate-800 text-slate-400 transition-all hover:text-white';
        cTemplate.classList.remove('hidden');
        cFile.classList.add('hidden');
      } else {
        btnTemplate.className = 'py-1.5 px-2 text-xs font-medium rounded-md bg-slate-800 text-slate-400 transition-all hover:text-white';
        btnFile.className = 'py-1.5 px-2 text-xs font-medium rounded-md bg-blue-600 text-white transition-all';
        cTemplate.classList.add('hidden');
        cFile.classList.remove('hidden');
      }
    }

    // --- GESTIÓN DE CARGA DE ARCHIVO LOCAL ---
    function handleFileChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        appState.tempUploadedImageUrl = e.target.result;
        document.getElementById('file-label-text').innerText = file.name;
        document.getElementById('file-label-text').classList.add('text-emerald-400');
      };
      reader.readAsDataURL(file);
    }

    // --- AGREGAR NUEVA ESCENA ---
    function addNewScene() {
      const nameInput = document.getElementById('new-scene-name');
      const name = nameInput.value.trim();
      
      if (!name) {
        alertToast('Por favor, introduce un nombre para la escena.');
        return;
      }

      let imageUrl = '';
      let isTemplate = false;
      let templateType = '';

      if (appState.uploadType === 'template') {
        templateType = document.getElementById('procedural-template-select').value;
        imageUrl = generateProceduralTexture(templateType);
        isTemplate = true;
      } else {
        if (!appState.tempUploadedImageUrl) {
          alertToast('Por favor, selecciona una imagen 360 de tu disco.');
          return;
        }
        imageUrl = appState.tempUploadedImageUrl;
        isTemplate = false;
      }

      const newId = 'sc-' + Date.now();
      const newScene = {
        id: newId,
        name: name,
        imageUrl: imageUrl,
        isTemplate: isTemplate,
        templateType: templateType,
        hotspots: []
      };

      appState.scenes.push(newScene);

      // Limpiar Formulario
      nameInput.value = '';
      appState.tempUploadedImageUrl = null;
      document.getElementById('file-label-text').innerText = 'Seleccionar archivo 360';
      document.getElementById('file-label-text').classList.remove('text-emerald-400');
      document.getElementById('local-image-file').value = '';

      renderDashboard();
      updateSelectDropdowns();
      alertToast(`¡Escena "${name}" agregada con éxito!`);
    }

    // --- AGREGAR HOTSPOT (BURBUJA DE VÍNCULO) ---
    function addHotspot() {
      const sourceId = document.getElementById('hotspot-source-select').value;
      const targetId = document.getElementById('hotspot-target-select').value;
      const angle = parseInt(document.getElementById('hotspot-angle').value, 10);

      if (!sourceId || !targetId) {
        alertToast('Debes seleccionar escena origen y destino.');
        return;
      }

      if (sourceId === targetId) {
        alertToast('No puedes enlazar una escena consigo misma.');
        return;
      }

      const sourceScene = appState.scenes.find(s => s.id === sourceId);
      if (sourceScene) {
        // Verificar que no exista ya un enlace a ese destino desde esa escena
        const alreadyExists = sourceScene.hotspots.some(h => h.targetId === targetId);
        if (alreadyExists) {
          alertToast('Ya existe un portal hacia esa escena.');
          return;
        }

        sourceScene.hotspots.push({ targetId: targetId, angle: angle });
        renderDashboard();
        alertToast(`Conectado "${sourceScene.name}" con la escena de destino.`);
      }
    }

    // --- BORRAR ESCENA ---
    function deleteScene(sceneId) {
      // No permitir borrar si es la última escena
      if (appState.scenes.length <= 1) {
        alertToast('Debe haber al menos una escena en el tour.');
        return;
      }

      // Eliminar de la lista principal
      appState.scenes = appState.scenes.filter(s => s.id !== sceneId);

      // Limpiar hotspots que apunten a la escena borrada
      appState.scenes.forEach(s => {
        s.hotspots = s.hotspots.filter(h => h.targetId !== sceneId);
      });

      renderDashboard();
      updateSelectDropdowns();
    }

    // --- BORRAR UN HOTSPOT ESPECÍFICO ---
    function deleteHotspot(sourceId, targetId) {
      const scene = appState.scenes.find(s => s.id === sourceId);
      if (scene) {
        scene.hotspots = scene.hotspots.filter(h => h.targetId !== targetId);
        renderDashboard();
      }
    }

    // --- ACTUALIZAR DROPDOWNS SELECT DE LA UI ---
    function updateSelectDropdowns() {
      const sourceSelect = document.getElementById('hotspot-source-select');
      const targetSelect = document.getElementById('hotspot-target-select');

      sourceSelect.innerHTML = '';
      targetSelect.innerHTML = '';

      appState.scenes.forEach(scene => {
        const opt1 = document.createElement('option');
        opt1.value = scene.id;
        opt1.innerText = scene.name;
        sourceSelect.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = scene.id;
        opt2.innerText = scene.name;
        targetSelect.appendChild(opt2);
      });
    }

    // --- RENDERIZAR LA REJILLA DEL DASHBOARD ---
    function renderDashboard() {
      const grid = document.getElementById('scenes-grid-container');
      grid.innerHTML = '';

      appState.scenes.forEach(scene => {
        const card = document.createElement('div');
        card.className = 'bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col fade-in';

        // Determinar miniatura
        let badgeText = scene.isTemplate ? 'Procedural' : 'Personalizada';
        let badgeColor = scene.isTemplate ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20';

        card.innerHTML = `
          <!-- Cabecera de Miniatura -->
          <div class="relative h-36 bg-slate-950 overflow-hidden flex items-center justify-center">
            <img src="${scene.imageUrl}" class="w-full h-full object-cover opacity-60 filter blur-[1px]" alt="${scene.name}">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            
            <!-- Etiqueta superior -->
            <span class="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-semibold rounded ${badgeColor}">
              ${badgeText}
            </span>

            <!-- Título encima de la foto -->
            <div class="absolute bottom-3 left-3 right-3">
              <h3 class="text-base font-bold text-white truncate">${scene.name}</h3>
            </div>
          </div>

          <!-- Información y Conexiones -->
          <div class="p-4 flex-1 flex flex-col gap-3">
            <div>
              <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Conexiones Activas (${scene.hotspots.length})</h4>
              
              ${scene.hotspots.length === 0 
                ? `<p class="text-xs text-slate-500 italic">No tiene portales de salida. El usuario se quedará aquí estancado.</p>`
                : `<div class="flex flex-wrap gap-1.5">
                    ${scene.hotspots.map(h => {
                      const targetName = getSceneNameById(h.targetId);
                      return `
                        <span class="inline-flex items-center gap-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs pl-2.5 pr-1.5 py-1 rounded-full">
                          A: ${targetName} (${h.angle}°)
                          <button onclick="deleteHotspot('${scene.id}', '${h.targetId}')" class="text-slate-500 hover:text-rose-400 ml-1 transition-colors">
                            <i data-lucide="x-circle" class="w-3.5 h-3.5"></i>
                          </button>
                        </span>
                      `;
                    }).join('')}
                  </div>`
              }
            </div>

            <!-- Botones de Acción -->
            <div class="mt-auto pt-3 border-t border-slate-800/60 flex items-center justify-between">
              <button onclick="previewSingleScene('${scene.id}')" class="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> Vista Previa
              </button>
              
              <button onclick="deleteScene('${scene.id}')" class="text-xs text-rose-500 hover:text-rose-400 flex items-center gap-1 transition-colors">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Eliminar
              </button>
            </div>
          </div>
        `;

        grid.appendChild(card);
      });

      // Recargar iconos
      lucide.createIcons();
    }

    // --- METODOS DE APOYO DE BUSQUEDA ---
    function getSceneNameById(id) {
      const sc = appState.scenes.find(s => s.id === id);
      return sc ? sc.name : 'Desconocida';
    }

    // --- ALERTA EN MODAL TIPO TOAST ---
    function alertToast(msg) {
      // Implementamos una ventana modal auto-eliminable ligera y elegante
      const container = document.createElement('div');
      container.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 border border-slate-800 text-slate-100 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 max-w-sm fade-in';
      container.innerHTML = `
        <i data-lucide="bell" class="w-5 h-5 text-blue-400"></i>
        <span class="text-xs font-semibold">${msg}</span>
      `;
      document.body.appendChild(container);
      lucide.createIcons();
      setTimeout(() => {
        container.classList.add('opacity-0');
        setTimeout(() => container.remove(), 400);
      }, 3000);
    }

    // --- MODALES GENERALES DE AYUDA ---
    function toggleHelpModal() {
      const modal = document.getElementById('help-modal');
      modal.classList.toggle('hidden');
    }

    // --- ENGINE DEL TOUR INMERSIVO (A-FRAME) ---
    
    // Iniciar el tour completo con la primera escena
    function startTour() {
      if (appState.scenes.length === 0) {
        alertToast('Agrega al menos una escena antes de iniciar.');
        return;
      }
      // Selecciona por defecto la primera escena
      loadVRScene(appState.scenes[0].id);
      
      // Mostrar la UI inmersiva de A-Frame
      document.getElementById('vr-viewport-container').classList.add('active');
      document.getElementById('main-dashboard').classList.add('hidden');
      
      // Mostrar el diálogo interactivo de bienvenida guiado
      showTourInstructions();
    }

    // Cargar una escena específica en el domo A-Frame
    function loadVRScene(sceneId) {
      const sceneObj = appState.scenes.find(s => s.id === sceneId);
      if (!sceneObj) return;

      appState.currentSceneId = sceneId;

      // Actualizar el título de la UI
      document.getElementById('vr-current-scene-title').innerText = sceneObj.name;

      // Actualizar el cielo (a-sky)
      const skyEl = document.getElementById('vr-sky');
      skyEl.setAttribute('src', sceneObj.imageUrl);

      // Renderizar Burbujas de Hotspots en el motor 3D
      renderAFrameHotspots(sceneObj.hotspots);
    }

    // Renderizar de forma dinámica las burbujas flotantes en el espacio 3D de A-Frame
    function renderAFrameHotspots(hotspots) {
      const container = document.getElementById('vr-hotspots-container');
      
      // Vaciar hotspots anteriores
      container.innerHTML = '';

      hotspots.forEach(hotspot => {
        const targetScene = appState.scenes.find(s => s.id === hotspot.targetId);
        if (!targetScene) return;

        // Convertimos el ángulo cardinal a coordenadas esféricas 3D en A-Frame (radio constante)
        const radius = 8; // Distancia a la que flotará la burbuja del usuario (en metros)
        const angleRad = (hotspot.angle * Math.PI) / 180;
        
        // Coordenadas trigonométricas para distribuir circularmente alrededor de la cámara
        const x = radius * Math.sin(angleRad);
        const z = -radius * Math.cos(angleRad);
        const y = 0.5; // Flotando ligeramente por encima del nivel del suelo artificial (altura del visor)

        // Crear una entidad envolvente que se oriente siempre hacia la cámara
        const hotspotEntity = document.createElement('a-entity');
        hotspotEntity.setAttribute('position', `${x} ${y} ${z}`);
        hotspotEntity.setAttribute('look-at', '[camera]');

        // 1. Burbuja Principal Inmersiva (Esfera Interactiva de viaje dimensional)
        const coreSphere = document.createElement('a-sphere');
        coreSphere.setAttribute('radius', '0.45');
        // Color azul brillante con efectos de emisividad para Quest 3
        coreSphere.setAttribute('material', 'color: #3b82f6; emissive: #1d4ed8; emissiveIntensity: 0.8; metalness: 0.6; roughness: 0.1');
        coreSphere.setAttribute('class', 'clickable');
        
        // Animación de pulso continuo (Escalado orgánico)
        coreSphere.setAttribute('animation', 'property: scale; to: 1.15 1.15 1.15; dur: 1500; dir: alternate; loop: true; easing: easeInOutSine');

        // 2. Anillo exterior orbital de diseño elegante
        const outerRing = document.createElement('a-ring');
        outerRing.setAttribute('radius-inner', '0.52');
        outerRing.setAttribute('radius-outer', '0.58');
        outerRing.setAttribute('color', '#60a5fa');
        outerRing.setAttribute('material', 'shader: flat; side: double; opacity: 0.8');
        outerRing.setAttribute('animation', 'property: rotation; to: 0 0 360; dur: 8000; loop: true; easing: linear');

        // 3. Etiqueta de texto superior guiada en 3D
        const textLabel = document.createElement('a-text');
        textLabel.setAttribute('value', `Ir a ${targetScene.name}`);
        textLabel.setAttribute('align', 'center');
        textLabel.setAttribute('position', '0 0.8 0');
        textLabel.setAttribute('scale', '0.8 0.8 0.8');
        textLabel.setAttribute('color', '#ffffff');
        textLabel.setAttribute('font', 'dejavu');
        textLabel.setAttribute('width', '5');
        textLabel.setAttribute('bg-color', '#000000');

        // --- SISTEMA DE GESTION DE INTERACCIÓN ---
        // Se ejecuta por clic de mando o por "gaze cursor" manteniendo la mirada fija
        const triggerNavigation = () => {
          // Animación rápida de retroalimentación de viaje
          coreSphere.setAttribute('animation', 'property: scale; to: 2.5 2.5 2.5; dur: 300; easing: easeOutQuad');
          setTimeout(() => {
            loadVRScene(hotspot.targetId);
          }, 300);
        };

        coreSphere.addEventListener('click', triggerNavigation);
        
        // Añadir elementos a la entidad estructural
        hotspotEntity.appendChild(coreSphere);
        hotspotEntity.appendChild(outerRing);
        hotspotEntity.appendChild(textLabel);

        // Incorporar al canvas VR
        container.appendChild(hotspotEntity);
      });
    }

    // --- VISTA PREVIA DIRECTA DE UNA SOLA ESCENA ---
    function previewSingleScene(sceneId) {
      loadVRScene(sceneId);
      document.getElementById('vr-viewport-container').classList.add('active');
      document.getElementById('main-dashboard').classList.add('hidden');
    }

    // --- SALIDA Y CONTROL DE EXPERIENCIA ---
    function exitTour() {
      document.getElementById('vr-viewport-container').classList.remove('active');
      document.getElementById('main-dashboard').classList.remove('hidden');
    }

    function showTourInstructions() {
      document.getElementById('tour-tutorial-bubble').classList.remove('hidden');
    }

    function closeTutorialBubble() {
      document.getElementById('tour-tutorial-bubble').classList.add('hidden');
    }
  </script>
</body>
</html>
