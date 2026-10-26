/* ======================================================
   CONFIGURACIÓN GENERAL
   ====================================================== */
const CONFIG = {
    homeImage: "assets/bvertical.jpg",
    levelsImage: "assets/down.png",
    inactivitySeconds: 30
};

/* ======================================================
   NIVELES (FOTOS 360 EQUIRRECTANGULARES Y 4 ÁREAS)
   ====================================================== */
const levels = [
    {
        id: 1,
        name: "RECEPCIÓN",
        panorama: "assets/N1 Cafeteria.jpg",
        areas: [
            {
                title: "LOBBY Y RECEPCIÓN",
                text: "Punto de bienvenida y control digital donde se tramita la “Llave del Saber” para acceder a los servicios de la biblioteca.",
                image: "N1/lobby.jpg"
            },
            {
                title: "AUDITORIO PRINCIPAL",
                text: "Espacio de vanguardia con capacidad para 350 personas, diseñado para conferencias, foros y expresiones escénicas.",
                image: "N1/audi1.jpg"
            },
            {
                title: "BIBLIOTECA CAFÉ",
                text: "Área de relajación, encuentro y co-working que combina el café salvadoreño con conectividad de alta velocidad.",
                image: "N1/cafe.jpg"
            },
            {
                title: "SALA DE EXPOSICIONES",
                text: "Galería de bienvenida para artistas nacionales y punto de orientación cultural de todo el complejo.",
                image: "N1/lobby.jpg"
            }
        ]
    },
    {
        id: 2,
        name: "PRIMERA INFANCIA",
        panorama: "N2/motriz.jpg",
        areas: [
            {
                title: "ZONA PSICOMOTRIZ",
                text: "Espacio acolchado y seguro diseñado para que la primera infancia desarrolle equilibrio y coordinación motriz.",
                image: "N2/motriz.jpg"
            },
            {
                title: "LECTURA TRILINGÜE",
                text: "Más de 6,000 libros infantiles adaptados en español, inglés y náhuatl para incentivar el amor temprano por las letras.",
                image: "N2/lectura.jpg"
            },
            {
                title: "ENFOQUE LÚDICO",
                text: "Juegos interactivos y dinámicas sensoriales para aprender compartiendo en familia.",
                image: "N2/ludico.jpg"
            },
            {
                title: "LACTANCIA Y ESTIMULACIÓN",
                text: "Cabinas de confort para madres y bebés con mobiliario ergonómico y tranquilidad.",
                image: "N2/motriz.jpg"
            }
        ]
    },
    {
        id: 3,
        name: "NIÑEZ Y ADOLESCENCIA",
        panorama: "N3/recepción.jpg",
        areas: [
            {
                title: "SALA INCLUSIVA Y BRAILLE",
                text: "Área adaptada con recursos táctiles, libros sonoros y material en sistema Braille para máxima accesibilidad.",
                image: "N3/braille.jpg"
            },
            {
                title: "ZONA GAMER Y APRENDIZAJE",
                text: "Combinación de tecnología recreativa y fomento a la lectura mediante videojuegos formativos.",
                image: "N3/zgamer.jpg"
            },
            {
                title: "COLECCIÓN DE LIBROS",
                text: "Aproximadamente 26,000 libros orientados al aprendizaje escolar y la narrativa de aventuras.",
                image: "N3/recepción.jpg"
            },
            {
                title: "TALLERES DE CREATIVIDAD",
                text: "Mesas de trabajo colaborativo para talleres de robótica junior, dibujo y divulgación científica.",
                image: "N3/zgamer.jpg"
            }
        ]
    },
    {
        id: 4,
        name: "JUVENTUD",
        panorama: "N4/N4 Zona Starwar.jpg",
        areas: [
            {
                title: "ZONAS TEMÁTICAS",
                text: "Ambiente visual inmersivo para los fanáticos de la ciencia ficción, sagas literarias y fantasía.",
                image: "N4/N4 Zona Starwar.jpg"
            },
            {
                title: "ZONA DE CÓMICS Y MANGA",
                text: "Estanterías dedicadas al arte secuencial con miles de tomos de animación y novelas gráficas.",
                image: "N4/comic.jpg"
            },
            {
                title: "CO-WORKING Y FONDO ANTIGUO",
                text: "Espacios de estudio grupal integrados con el resguardo documental y libros históricos.",
                image: "N4/colec.jpg"
            },
            {
                title: "CREATIVIDAD DIGITAL",
                text: "Módulos de creación audiovisual, edición y estaciones para proyectos juveniles.",
                image: "N4/comic.jpg"
            }
        ]
    },
    {
        id: 5,
        name: "COLECCIÓN GENERAL",
        panorama: "N5/N5 General.jpg",
        areas: [
            {
                title: "ZONAS DE ESTUDIO E INVESTIGACIÓN",
                text: "Mesas amplias y módulos individuales con iluminación focalizada para investigación profunda.",
                image: "N5/estudio.jpg"
            },
            {
                title: "SALA CLÁSICA Y MIRADOR",
                text: "Espacio con mobiliario clásico y ventanales con vista directa a la Plaza Gerardo Barrios.",
                image: "N5/N5 Sala Lectura VIP.jpg"
            },
            {
                title: "ARCHIVO GENERAL DE LA NACIÓN",
                text: "La exhibición de estantería abierta más grande de El Salvador con obras especializadas.",
                image: "N5/N5 General.jpg"
            },
            {
                title: "HEMEROTECA HISTÓRICA",
                text: "Hojas de prensa, diarios oficiales y memorias históricas del patrimonio salvadoreño.",
                image: "N5/estudio.jpg"
            }
        ]
    },
    {
        id: 6,
        name: "TECNOLOGÍA E INNOVACIÓN",
        panorama: "N6/virtual.jpg",
        areas: [
            {
                title: "LABORATORIO DE PROTOTIPADO",
                text: "Impresoras 3D, corte láser y prototipado digital para emprendedores e investigadores.",
                image: "N6/proto.jpg"
            },
            {
                title: "REALIDAD VIRTUAL Y SIMULADORES",
                text: "Visores inmersivos de última generación para explorar ciencia, anatomía y astronomía en 3D.",
                image: "N6/virtual.jpg"
            },
            {
                title: "LABORATORIO DE ROBÓTICA",
                text: "Espacio equipado para ensamblaje, placas electrónicas y programación aplicada.",
                image: "N6/robo.jpg"
            },
            {
                title: "SALA DE INNOVACIÓN DIGITAL",
                text: "Cabinas de experimentación con inteligencia artificial y desarrollo de software.",
                image: "N6/proto.jpg"
            }
        ]
    },
    {
        id: 7,
        name: "ARTE Y CULTURA",
        panorama: "N7/terraza.jpg",
        areas: [
            {
                title: "GALERÍA DE ARTE",
                text: "Exposiciones temporales de artistas visuales, escultura y expresiones contemporáneas.",
                image: "N7/arte.jpg"
            },
            {
                title: "AUDITORIO PANORÁMICO",
                text: "Capacidad para 150 personas con tecnología acústica ideal para música y teatro.",
                image: "N7/auditorio.jpg"
            },
            {
                title: "TERRAZAS Y VISTAS",
                text: "Mirador hacia el Centro Histórico que combina aire libre y descanso cultural.",
                image: "N7/terraza.jpg"
            },
            {
                title: "RESTAURANTE Y CAFÉ GOURMET",
                text: "Experiencia culinaria que resalta la gastronomía salvadoreña de alta calidad.",
                image: "N7/arte.jpg"
            }
        ]
    }
];

/* ======================================================
   GESTIÓN DE VISTAS
   ====================================================== */
const views = {
    home: document.getElementById("homeView"),
    levels: document.getElementById("levelsView"),
    detail: document.getElementById("detailView")
};

const transitionLayer = document.getElementById("transitionLayer");
let inactivityTimer = null;
let currentView = "home";
let currentActiveLevel = null;
let currentAreaIndex = 0;

function transitionTo(callback) {
    transitionLayer.classList.remove("go");
    void transitionLayer.offsetWidth;
    transitionLayer.classList.add("go");
    setTimeout(() => { callback(); }, 360);
    setTimeout(() => { transitionLayer.classList.remove("go"); }, 760);
}

function showView(name) {
    Object.values(views).forEach(view => view.classList.remove("active"));
    views[name].classList.add("active");
    currentView = name;

    window.scrollTo({ top: 0, behavior: "instant" });

    if (name === "detail") {
        cardViewer.start();
    } else {
        cardViewer.stop();
        modalViewer.stop();
        closeOptionsModal();
    }

    resetInactivityTimer();
}

/* ======================================================
   TIMER DE INACTIVIDAD (30 SEGUNDOS)
   ====================================================== */
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        if (currentView !== "home") {
            transitionTo(() => { showView("home"); });
        }
    }, CONFIG.inactivitySeconds * 1000);
}

["touchstart", "touchmove", "pointerdown", "pointermove", "click", "wheel", "scroll", "keydown"].forEach(ev => {
    window.addEventListener(ev, resetInactivityTimer, { passive: true });
});

/* IMAGEN DE INICIO */
function applyImage(id, src) {
    const el = document.getElementById(id);
    if (!el) return;
    el.src = src;
    el.onerror = () => { el.style.display = "none"; };
}
applyImage("homeImage", CONFIG.homeImage);

/* ======================================================
   SHADERS GLSL EQUIRRECTANGULARES (360° MATEMÁTICO REAL)
   ====================================================== */
const vsSource = `
  attribute vec2 a_pos;
  void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`;

const fsSource = `
  precision mediump float;
  uniform sampler2D u_image;
  uniform vec2 u_resolution;
  uniform float u_yaw;
  uniform float u_pitch;
  uniform float u_fov;

  #define PI 3.14159265358979323846

  void main() {
    vec2 p = (gl_FragCoord.xy - u_resolution * 0.5) / min(u_resolution.x, u_resolution.y);
    float focal = 1.0 / tan(u_fov * 0.5);
    vec3 ray = normalize(vec3(p.x, -p.y, focal));

    float cp = cos(u_pitch);
    float sp = sin(u_pitch);
    ray = vec3(ray.x, ray.y * cp - ray.z * sp, ray.y * sp + ray.z * cp);

    float cy = cos(u_yaw);
    float sy = sin(u_yaw);
    ray = vec3(ray.x * cy + ray.z * sy, ray.y, -ray.x * sy + ray.z * cy);

    float lon = atan(ray.x, -ray.z);
    float lat = asin(clamp(ray.y, -1.0, 1.0));

    vec2 panoUV = vec2(lon / (2.0 * PI) + 0.5, 0.5 - lat / PI);
    gl_FragColor = texture2D(u_image, panoUV);
  }
`;

/* ======================================================
   FABRICA DE VISORES 360° (CARD PRINCIPAL Y MODAL ÁREAS)
   ====================================================== */
function createEquirectangularViewer(canvas, container, options = {}) {
    const { autoRotate = false, autoSpeed = 0.002 } = options;
    let gl = null;
    let program = null;
    let texture = null;
    let textureLoaded = false;
    let animId = null;

    let yaw = 0.0;
    let pitch = 0.0;
    let isDragging = false;
    let dragStartX = 0, dragStartY = 0;
    let lastYaw = 0, lastPitch = 0;

    function initGL() {
        if (gl) return true;
        gl = canvas.getContext("webgl", { antialias: true, alpha: false });
        if (!gl) return false;

        function makeShader(type, src) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        }

        const vs = makeShader(gl.VERTEX_SHADER, vsSource);
        const fs = makeShader(gl.FRAGMENT_SHADER, fsSource);
        program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        const quadBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,  1, -1, -1,  1,
            -1,  1,  1, -1,  1,  1
        ]), gl.STATIC_DRAW);

        const aPos = gl.getAttribLocation(program, "a_pos");
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

        return true;
    }

    function resize() {
        if (!canvas || !container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        if (canvas.width !== w || canvas.height !== h) {
            canvas.width = w;
            canvas.height = h;
            if (gl) gl.viewport(0, 0, w, h);
        }
    }

    function loadTexture(src) {
        textureLoaded = false;
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            if (!initGL()) return;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            textureLoaded = true;
            resize();
            draw();
        };
        img.onerror = () => {
            textureLoaded = false;
        };
        img.src = src;
    }

    function draw() {
        if (!gl || !program || !textureLoaded) return;
        resize();
        gl.useProgram(program);
        gl.uniform2f(gl.getUniformLocation(program, "u_resolution"), canvas.width, canvas.height);
        gl.uniform1f(gl.getUniformLocation(program, "u_yaw"), yaw);
        gl.uniform1f(gl.getUniformLocation(program, "u_pitch"), pitch);
        gl.uniform1f(gl.getUniformLocation(program, "u_fov"), 1.35);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    function loop() {
        if (autoRotate && !isDragging) {
            yaw += autoSpeed;
        }
        draw();
        animId = requestAnimationFrame(loop);
    }

    function start() {
        initGL();
        resize();
        if (!animId) animId = requestAnimationFrame(loop);
    }

    function stop() {
        if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
        }
    }

    function resetOrientation() {
        yaw = 0.0;
        pitch = 0.0;
        draw();
    }

    // Eventos táctiles y de ratón (rotar al arrastrar con el dedo)
    function onStart(e) {
        if (e.target.closest("button")) return;
        isDragging = true;
        dragStartX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        dragStartY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
        lastYaw = yaw;
        lastPitch = pitch;
    }

    function onMove(e) {
        if (!isDragging) return;
        const curX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        const curY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
        const dx = curX - dragStartX;
        const dy = curY - dragStartY;

        yaw = lastYaw - (dx * 0.005);
        pitch = Math.max(-1.38, Math.min(1.38, lastPitch + (dy * 0.005)));
        draw();
    }

    function onEnd() {
        isDragging = false;
    }

    if (container) {
        container.addEventListener("mousedown", onStart);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onEnd);

        container.addEventListener("touchstart", onStart, { passive: true });
        window.addEventListener("touchmove", onMove, { passive: true });
        window.addEventListener("touchend", onEnd, { passive: true });
    }

    window.addEventListener("resize", resize);

    return {
        start,
        stop,
        loadTexture,
        resetOrientation,
        draw,
        resize
    };
}

/* ======================================================
   INSTANCIACIÓN DE AMBOS VISORES
   ====================================================== */

// 1. Visor del cuadro central principal (con giro suave)
const cardViewer = createEquirectangularViewer(
    document.getElementById("cardPanoCanvas"),
    document.getElementById("cardPanoContainer"),
    { autoRotate: true, autoSpeed: 0.002 }
);

// 2. Visor del modal de áreas (SIN GIRO AUTOMÁTICO: SOLO AL TOCAR)
const modalViewer = createEquirectangularViewer(
    document.getElementById("modalPanoCanvas"),
    document.getElementById("modalPanoContainer"),
    { autoRotate: false, autoSpeed: 0 } // No gira automático, solo con interacción
);

/* ======================================================
   APERTURA DE NIVEL
   ====================================================== */
function openLevel(id) {
    const level = levels.find(item => item.id === id);
    if (!level) return;

    currentActiveLevel = level;
    currentAreaIndex = 0;

    // Encabezados de la tarjeta
    document.getElementById("cardLevelEyebrow").textContent = `NIVEL ${level.id}`;
    document.getElementById("cardLevelTitle").textContent = level.name;
    document.getElementById("cardHeaderTag").textContent = `NIVEL ${level.id} · BINAES`;

    // Fondo estático difuminado
    const staticBg = document.getElementById("staticBg");
    if (staticBg) {
        staticBg.style.backgroundImage = `url("${level.panorama}")`;
    }

    // Cargar 360 del cuadro principal
    cardViewer.loadTexture(level.panorama);

    // Preparar el modal de áreas
    document.getElementById("modalLevelTag").textContent = `NIVEL ${level.id}`;
    document.getElementById("modalMainTitle").textContent = level.name;

    renderAreaStepperPills();
    updateActiveAreaDisplay();

    transitionTo(() => {
        showView("detail");
    });
}

/* ======================================================
   MODAL DE ÁREAS (INTERACCIÓN 360° MANUAL)
   ====================================================== */
const optionsModal = document.getElementById("optionsModal");
const pulsingHotspot = document.getElementById("pulsingHotspot");
const closeOptionsModalBtn = document.getElementById("closeOptionsModalBtn");
const closeToLevelsBtn = document.getElementById("closeToLevelsBtn");

const prevAreaBtn = document.getElementById("prevAreaBtn");
const nextAreaBtn = document.getElementById("nextAreaBtn");
const areaStepperPills = document.getElementById("areaStepperPills");
const stepDotsIndicator = document.getElementById("stepDotsIndicator");

function openOptionsModal() {
    if (!optionsModal) return;
    optionsModal.classList.add("active");
    optionsModal.setAttribute("aria-hidden", "false");

    // Pausar visor de fondo para optimizar recursos en pantalla táctil
    cardViewer.stop();

    // Iniciar visor 360 del modal
    modalViewer.start();
    setTimeout(() => {
        modalViewer.resize();
        modalViewer.draw();
    }, 100);
}

function closeOptionsModal() {
    if (!optionsModal) return;
    optionsModal.classList.remove("active");
    optionsModal.setAttribute("aria-hidden", "true");

    // Detener visor del modal y reactivar visor de la tarjeta principal
    modalViewer.stop();
    if (currentView === "detail") {
        cardViewer.start();
    }
}

function renderAreaStepperPills() {
    if (!currentActiveLevel || !areaStepperPills) return;

    areaStepperPills.innerHTML = currentActiveLevel.areas.map((area, idx) => `
        <button class="stepper-pill ${idx === currentAreaIndex ? 'active' : ''}" data-idx="${idx}">
            <span class="pill-number">${idx + 1}</span>
            <span class="pill-label">${area.title}</span>
        </button>
    `).join("");

    areaStepperPills.querySelectorAll(".stepper-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            currentAreaIndex = Number(pill.dataset.idx);
            updateActiveAreaDisplay();
        });
    });

    renderStepDots();
}

function renderStepDots() {
    if (!currentActiveLevel || !stepDotsIndicator) return;
    stepDotsIndicator.innerHTML = currentActiveLevel.areas.map((_, idx) => `
        <span class="step-dot ${idx === currentAreaIndex ? 'active' : ''}"></span>
    `).join("");
}

function updateActiveAreaDisplay() {
    if (!currentActiveLevel) return;
    const area = currentActiveLevel.areas[currentAreaIndex];
    if (!area) return;

    // Cargar la imagen 360 correspondiente a esta área específica
    modalViewer.loadTexture(area.image);
    modalViewer.resetOrientation();

    document.getElementById("activeAreaCounter").textContent = `Área ${currentAreaIndex + 1} de ${currentActiveLevel.areas.length}`;
    document.getElementById("activeAreaTitle").textContent = area.title;
    document.getElementById("activeAreaDesc").textContent = area.text;

    if (areaStepperPills) {
        areaStepperPills.querySelectorAll(".stepper-pill").forEach((pill, idx) => {
            pill.classList.toggle("active", idx === currentAreaIndex);
        });
    }
    renderStepDots();

    if (nextAreaBtn) {
        nextAreaBtn.textContent = (currentAreaIndex === currentActiveLevel.areas.length - 1)
            ? "Volver al inicio ↺"
            : "Siguiente área →";
    }
}

// Botones Siguiente y Anterior
if (nextAreaBtn) {
    nextAreaBtn.addEventListener("click", () => {
        if (!currentActiveLevel) return;
        currentAreaIndex = (currentAreaIndex + 1) % currentActiveLevel.areas.length;
        updateActiveAreaDisplay();
    });
}

if (prevAreaBtn) {
    prevAreaBtn.addEventListener("click", () => {
        if (!currentActiveLevel) return;
        currentAreaIndex = (currentAreaIndex - 1 + currentActiveLevel.areas.length) % currentActiveLevel.areas.length;
        updateActiveAreaDisplay();
    });
}

// Al tocar el punto palpitante se abre el modal
if (pulsingHotspot) pulsingHotspot.addEventListener("click", openOptionsModal);
if (closeOptionsModalBtn) closeOptionsModalBtn.addEventListener("click", closeOptionsModal);

// Botón X de la tarjeta: regresa a la vista de selección interactiva (SVG)
if (closeToLevelsBtn) {
    closeToLevelsBtn.addEventListener("click", () => {
        transitionTo(() => { showView("levels"); });
    });
}

if (optionsModal) {
    optionsModal.addEventListener("click", (e) => {
        if (e.target === optionsModal) closeOptionsModal();
    });
}

/* ======================================================
   ENLACE CON SVG INTERACTIVO (INTACTO)
   ====================================================== */
const building = document.getElementById("building");

function selectSvgLevel(id) {
    const levelId = Number(id);
    if (!Number.isInteger(levelId) || levelId < 1 || levelId > 7) return;
    openLevel(levelId);
}

function attachSvgInteractions() {
    if (!building) return;
    const doc = building.contentDocument;
    if (!doc || doc.__protoLumaInteractionsAttached) return;
    doc.__protoLumaInteractionsAttached = true;

    doc.querySelectorAll(".zona-nivel[id^='nivel-']").forEach(zona => {
        const match = zona.id.match(/^nivel-([1-7])$/);
        if (!match) return;
        const id = Number(match[1]);
        zona.style.pointerEvents = "all";
        zona.style.cursor = "pointer";
        zona.setAttribute("tabindex", "0");
        zona.setAttribute("role", "button");
        zona.setAttribute("aria-label", `Seleccionar nivel ${id}`);

        zona.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            selectSvgLevel(id);
        });
        zona.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                selectSvgLevel(id);
            }
        });
    });
}

if (building) {
    building.addEventListener("load", attachSvgInteractions);
    if (building.contentDocument && building.contentDocument.documentElement) {
        attachSvgInteractions();
    }
}

window.addEventListener("message", e => {
    const data = e.data;
    if (!data || data.tipo !== "proto-luma-nivel") return;
    const id = Number(data.nivel);
    if (data.accion === "seleccionar" && Number.isInteger(id)) {
        selectSvgLevel(id);
    }
});

/* ======================================================
   BOTONES DE NAVEGACIÓN
   ====================================================== */
document.getElementById("startBtn").addEventListener("click", () => {
    transitionTo(() => { showView("levels"); });
});

document.getElementById("backBtn").addEventListener("click", () => {
    transitionTo(() => { showView("levels"); });
});

/* INICIAR EN PANTALLA PRINCIPAL */
showView("home");