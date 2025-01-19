document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el desplazamiento suave
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Añadir evento de clic a los enlaces de navegación
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('href');
            smoothScroll(target, 1000);
        });
    });

    // Datos de los proyectos
    const projects = [
        {
            title: "Implementación de 3 dispositivos controller en una computadora",
            description: `Implemente mis habilidades de programación en Python, (dominando librerías como: Pandas, NumPy, matplotlib), para el procesamiento de datos, 
                          y uso del lenguaje C++ para programar dichos sensores, dominando en C++ la API de Leap Motion para desarrolladores. Realice actividades adicionales 
                          de documentación de mis procesos, reportes semanales e informes mensuales, trabajando en equipo a través de una comunicación efectiva en reuniones semanales 
                          y comunicación constante con los miembros del equipo. Al combinar tres sensores, el campo de visión se amplía en un 266% y la confianza de lectura se incrementa en un 12%.
                          La sección del preview pertenece a un video de propiedad intelectual de  CIDESI.`,
            image: "img/LMC-demostracion.gif",
            /*createdDate: "Oct-2023",*/
            updatedDate: "Ene-2024",
            icons: ["img/leap.png", "img/C++.jpg","img/numpy.png"]
        },
        {
            title: "Control alternativo de UR3e",
            description: `En este proyecto, se desarrolló un control alternativo para el Robot Colaborativo UR3e de Universal Robots en los laboratorios de LANITED,
                          dirigido por el Dr. Iván García y supervisado en pruebas in-situ por el Ing. Gabriel Salinas. LANITED, el Laboratorio Nacional de Tecnologías Digitales, fomenta 
                          la innovación en la industria 4.0. Este proyecto faborece en la manufactura avanzada, ya que integra 
                          el Internet de las Cosas (IoT), mejorando la eficiencia y flexibilidad en los procesos productivos. Promueve una colaboración efectiva entre humanos 
                          y máquinas, optimizando la producción y reduciendo costos. La sección del preview pertenece a un video de propiedad intelectual de CIDESI.`,
            image: "img/UR3e alternative-control.gif",
            /*createdDate: "Sep-2023",*/
            updatedDate: "Feb-2024",
            icons: ["img/C++.jpg", "img/leap.png", "img/universalrobots.png"] 
        },
        {
            title: "Identificación y Seguimiento de Gestos y Humanos",
            description:`Desarrollé habilidades de Backend como control de versiones, creación de mis propias API's y comprensión de API's de terceros, pensamiento analítico,
                         organización de proyectos, habilidades de identificación y resolución de problemas, capacidades de proyectos escalables. Hice uso de mi dominio en 
                         Python con las siguientes librerías: OpenCV, Numpy, Pandas,  Mediapipe, YOLO en sus versiones V3, V5, V11; también desarrollé habilidades en el uso 
                         de Tensorflow, Keras. El objetivo es desarrollar un algoritmo que permita la identificación y seguimiento de gestos y personas en real tiempo real
                         y luego llevarlo a la interpretación de LSM. El fragmento del video es propiedad del canal StatusSilver en Youtube`,         
            image: "img/Gesture.gif",
            createdDate: "Oct-2024",
            updatedDate: "Ene-2025",
            icons: ["img/Opencv.png", "img/yolo.png", "img/mediapipe.png"]
        }  
    ];
    
    const hiddenProjects = [
        {
            title: "IA, Asistente virtual basado en chat GPT para Dev's",
            description:`Este proyecto se centra en el desarrollo de un asistente virtual basado en Chat GPT, utilizando modelos de código abierto proporcionados por Ollama.
                         Implementé los lenguajes Pyhton, para la programación interna de la aplicación, javascript para la interfaz gráfica. Aprendí a usar Django y Flask 
                         para crear mis API's, NLTK y SpaCy para el procesamiento NLP y análisis de texto. Utilicé la documentación para desarrolladores de Ollama e implementé 
                         el modelo PythonCoder V2. En el camino mejoré mis habilidades de documentación de proyectos, desarrollé mis habilidades de prueba y validación y me adapté 
                         a nuevas herramientas.`,
            image: "img/IA chat.gif",
            createdDate: "Oct-2024",
            updatedDate: "Ene-2025",
            icons: ["img/Python.png", "img/llama.png", "img/js.png"] // Añade los iconos aquí
        },
        {
            title: "Reconocimiento Humano",
            description: `Mediante la implementación de la herramienta OpenCV y YOLO,  se desarrolló un algoritmo para identificar humanos mediante l procesamiento de imágenes 
                          con una IA pre-entrenada: YOLO V11. Mejore mis habilidades en el procesamiento y análisis de datos para capturar, procesar, analizar y mejorar los 
                          resultados de los algoritmos. Su aplicación se extiende ámbitos como la vigilancia de seguridad, la conducción autónoma y la interacción persona-ordenador.
                          interacción persona-ordenador. OpenCV, proporciona las funciones necesarias para el procesamiento de imágenes y la gestión de vídeo, complementando así las
                          capacidades de YOLO. Este proyecto busca no sólo mejorar la precisión de la detección, sino también optimizar el rendimiento en entornos dinámicos creando 
                          un proyecto escalable.`,
            image: "img/Firends.gif",
            createdDate: "Oct-2024",
            updatedDate: "Dic-2024",
            icons: ["img/Opencv.png", "img/yolo.png"]
        },
        {
            title: "IA, Simulación de peces Betta usando GAN´s",
            description:`La meta de esta IA es aprender el movimiento natural de los peces Betta, comenzando con la simulación de
                         trayectorias de 50 objetos para escalar el proyecto hacia peces Betta artificiales en un acuario. Adapte y mejore mis habilidades de Python en: 
                         Tensorflow, Pytorch y Scikit-learn, control de versiones de proyectos asi como uso de mis habilidades de documentación e investigación para resolver 
                         problemas y necesidades del proyecto. Las ventajas de las GAN incluyen la capacidad de generar datos realistas, enriqueciendo la experiencia visual 
                         y de interacción En entornos virtuales.`,
            image: "img/IA simulation.gif",
            /*createdDate: "Oct-2024",*/
            updatedDate: "Dic-2024",
            icons: ["img/Pytorch.png", "img/numpy.png", "img/tensorflow.png"] // Añade los iconos aquí
        },
        {
            title: "BoomberMan en Python",
            description: `Este proyecto consiste en la creación de un juego simple utilizando Pygame, donde el jugador 
                          controla un personaje que se mueve por la pantalla. El juego implementa animaciones para las 
                          acciones de movimiento y una animación estática que se activa al no presionar teclas. Las 
                          animaciones se gestionan a través de sprites, permitiendo una experiencia visual dinámica. 
                          El objetivo es proporcionar un entorno interactivo y entretenido para los jugadores.`,
            image: "img/boomberman.gif",
            createdDate: "Mar-2019",
            updatedDate: "Nov-2024",
            icons: ["img/pygame.png"]
        },
        {
            title: "Ping pong con Pygame",
            description: `Pygame es una biblioteca de Python que permite desarrollar videojuegos de manera sencilla,
                          proporcionando herramientas para manejar gráficos, sonido y eventos. Al utilizar Pygame, 
                          se pueden desarrollar habilidades en lógica de programación, diseño de interfaces gráficas 
                          y simulación de física de objetos. En este proyecto de videojuego estilo ping pong, muy al estilo de los 2000, 
                          implementé modularizaciones que separan la lógica del juego, la física de las colisiones y 
                          la interfaz gráfica, lo que facilita el mantenimiento y la expansión del código.`,
            image: "img/Pingpong.gif",
            createdDate: "Jun-2024",
            updatedDate: "Jul-2024",
            icons: ["img/pygame.png"]
        }
    ];


    // Datos de la trayectoria
    const trayectoria = [
        {
            title: "Carrera Técnica",
            description: `Carrera técnica en Sistemas Computacionales con especialidad en Informática, 
                          donde creé habilidades y conocimientos prácticos
                          para el mantenimiento de equipos computacionales, programación web, programación 
                          en lenguaje C, C++, Java, implementación práctica básica de SQL, 
                          implementación y manejo de paquetería Office (Word, Excel, PowerPoint, Access,
                          OneNote, Project, entre otros).`,
            image: "img/sep.png",
            date: "2015-2018"
        },
        {
            title: "Educación Autodidacta",
            description: `Estudio de manera independiente temas de interés personal como lo son: 
                          Realidad Aumentada, Realidad Virtual con Unity, modelado en Blender,
                          Visión Artificial, Procesamiento de datos, creación de skills en AWS,
                          Inteligencia Artificial en Machine Learning y Deep Learning, 
                          utilizando Python y C++. Además de estudiar inglés, italiano y francés para 
                          ampliar mis conocimientos prácticos y teóricos en fuentes académicas de dichos 
                          idiomas.`,
            image: "img/logo.png",
            date: "2018-2024"
        },
        {
            title: "Carrera Universitaria",
            description: `Licenciatura en Ingeniería Mecatrónica, con especialidad en
                          Manufactura Avanzada y Automatización de procesos.
                          Donde en la participación del coloquio de investigación científica y tecnológica
                          del 2019 se obtuvieron el 1er y 3er lugar del coloquio con los Proyectos:
                          Introducción a la Inteligencia Artificial con Redes Neuronales Artificiales (RNA)
                          y Desarrollo e implementación de sistemas de seguridad para casa habitación por medio de la
                          domótica.`,
            image: "img/Mecatronica.png",
            date: "2018-2024"
        }, 
        {
            title: "PUBLIGRAB",
            description: `Experiencia programando y utilizando lenguajes G y N para ejecutar
                          en CNC en corte láser tipo LINCOLN ELECTRIC,
                          CNC de 3 ejes tipo MAKITA, CNC corte plasma tipo 
                          Turbo Laser y CNC de impresión 3D tipo ANET, ENDER y FlashForge, así como 
                          el modelado de los objetos impresos en Blender, SolidWorks y CorelDRAW.`,
            image: "img/PUBLIGRAB.png",
            date: "2020-2024"
        },
        {
            title: "CFE",
            description: `Experiencia programando y desarrollando protocolos de seguridad, obteniendo capacitación como
                          brigadista anti-incendios y capacitación en el uso de macros en Excel. Durante mi estancia 
                          desarrollé protocolos de seguridad en caso de incendio para los edificios del Centro Nacional de
                          Capacitación Ixtapantongo CFE (CAOI).`,
            image: "img/cfe.png",
            date: "2020-2021"
        },  
        {
            title: "Programa Delfin",
            description: `Participación en el equipo VisionTeam 
                          para el desarrollo de skill en AWS para Alexa 
                          con fines de desarrollo e investigación.`,
            image: "img/Veranodelfin.jpeg",
            date: "2021",
        },
        {
            title: "LANITED, Contol alternativo de COBOTS",
            description: `Colaboración en proyectos de investigación en LANITED
                          para el desarrollo de control alternativo de cobots tipo UR3e, 
                          donde se usaron herramientas para el reconocimiento de manos 
                          y gestos.`,
            image: "img/LANITED.jpg",
            date: "2023-2024"
        },
        {
            title: "CIDESI y Vision Team",
            description: `Durante este periodo se desarrollo pruebas experimentales, en entornos controlados y 
                          no controlados para utilizar las maximas capacidades
                          de sensores estereoscopicos tipo Leap Motion Controller en sus versiones 
                          Controller 1 y Controller 2.`,
            image: "img/VisionTeam.png",
            date: "2023-2024"
        }
    ];

    // Datos de Sobre Mí
    const sobreMi = {
        name: "Jacob Tinoco",
        photo: "img/JT.jpeg",
        description: `Soy una persona muy responsable, autodidacta que sabe trabajar en equipo
                      con gran interés por cualquier tipo de conocimiento artístico, filosófico 
                      y científico.

                      Tengo un muro en Instagram donde posteo mis hobbies de fotografía; en ocasiones
                      hago divulgación científica compartiendo publicaciones en mis historias. Mira 
                      mi sección de historias de VT y de PUBLIGRAB para que veas algunas publicaciones.
                       Dejo el enlace en la siguiente sección.

                       Si te gusta la música, mi perfil de Spotify se encuentra abajo;
                       tengo playlists públicas de Rock, Jazz, R&B, hip hop y más.

                       ¡Saludos!`

    };

    function formatDateToMonthYear(dateString) {
        const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        const [month, year] = dateString.split('-');
        const monthIndex = months.indexOf(month);
        return `${months[monthIndex]} de ${year}`;
    }
    
// Función para cargar los proyectos
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        let mediaElement;
        if (project.video) {
            mediaElement = `<video src="${project.video}" class="project-image" controls></video>`;
        } else {
            mediaElement = `<img src="${project.image}" alt="${project.title}" class="project-image">`;
        }

        const iconsHTML = project.icons ? project.icons.map(icon => `<img src="${icon}" alt="Icon" class="project-icon">`).join('') : '';

        projectCard.innerHTML = `
            ${mediaElement}
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-dates">
                    <span>Actualizado: ${formatDateToMonthYear(project.updatedDate)}</span>
                    <div class="project-icons">
                        ${iconsHTML}
                    </div>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}
// Función para cargar los proyectos ocultos
function loadHiddenProjects() {
    const hiddenProjectsContainer = document.querySelector('.hidden-projects');

    if (hiddenProjectsContainer.children.length === 0) {
        hiddenProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            const iconsHTML = project.icons ? project.icons.map(icon => `<img src="${icon}" alt="Icon" class="project-icon">`).join('') : '';

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-dates">
                        <span>Actualizado: ${formatDateToMonthYear(project.updatedDate)}</span>
                        <div class="project-icons">
                            ${iconsHTML}
                        </div>
                    </div>
                </div>
            `;
            hiddenProjectsContainer.appendChild(projectCard);
        });
    }
}

// Evento para mostrar más proyectos
document.getElementById('show-more-projects').addEventListener('click', function() {
    const hiddenProjectsContainer = document.querySelector('.hidden-projects');
    hiddenProjectsContainer.style.display = 'grid'; // Muestra los proyectos ocultos
    loadHiddenProjects(); // Carga los proyectos ocultos
    this.style.display = 'none'; // Oculta el botón de mostrar
    document.getElementById('show-less-projects').style.display = 'block'; // Muestra el botón de mostrar menos
});

// Evento para mostrar menos proyectos
document.getElementById('show-less-projects').addEventListener('click', function() {
    const hiddenProjectsContainer = document.querySelector('.hidden-projects');
    hiddenProjectsContainer.style.display = 'none'; // Oculta los proyectos ocultos
    document.getElementById('show-more-projects').style.display = 'block'; // Muestra el botón de mostrar más
    this.style.display = 'none'; // Oculta el botón de mostrar menos
});


// Evento para mostrar menos proyectos
document.getElementById('show-less-projects').addEventListener('click', function() {
    const hiddenProjectsContainer = document.querySelector('.hidden-projects');
    hiddenProjectsContainer.style.display = 'none'; // Oculta los proyectos ocultos
    this.style.display = 'none'; // Oculta el botón de mostrar menos
    document.getElementById('show-more-projects').style.display = 'block'; // Muestra el botón de mostrar más
});
    // Función para cargar la trayectoria
    function loadTrayectoria() {
        const trayectoriaGrid = document.querySelector('.trayectoria-grid');
        trayectoria.forEach(item => {
            const trayectoriaCard = document.createElement('div');
            trayectoriaCard.className = 'trayectoria-card';

            trayectoriaCard.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="trayectoria-image">
                <div class="trayectoria-info">
                    <h3 class="trayectoria-title">${item.title}</h3>
                    <p class="trayectoria-description">${item.description}</p>
                    <span class="trayectoria-dates">${item.date}</span>
                </div>
            `;
            trayectoriaGrid.appendChild(trayectoriaCard);
        });
    }

    // Función para cargar la sección Sobre Mí
    function loadSobreMi() {
        const sobreMiContainer = document.querySelector('.sobre-mi-container');
        const sobreMiContent = document.createElement('div');
        sobreMiContent.className = 'sobre-mi-content';

        sobreMiContent.innerHTML = `
            <img src="${sobreMi.photo}" alt="${sobreMi.name}" class="sobre-mi-foto">
            <div class="sobre-mi-info">
                <h3>${sobreMi.name}</h3>
                <p>${sobreMi.description}</p>
            </div>
        `;

        sobreMiContainer.appendChild(sobreMiContent);
    }

    // Función para formatear fechas
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long'};
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }

    // Cargar todas las secciones
    loadProjects();

    loadTrayectoria();
    loadSobreMi();
});
