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
            description: `En este proyecto, se desarrolló un algoritmo para el seguimiento de 13 gestos estáticos utilizando tres 
                          sensores LMC (Leap Motion Controller), que detectan gestos a través de señales de luz. El uso de múltiples 
                          sensores en una computadora está limitado por restricciones de conectividad USB. Cada sensor tiene un alcance
                          de 600 mm en el eje X, 600 mm en el eje Z y 800 mm en el eje Y. Al combinar tres sensores, se amplía el campo de
                          visión y la confianza de lectura, llegando aumentar hasta 266% el rango de visión y un aumentando el 12% en la confianza de lectura; 
                          mejorando la precisión y versatilidad del seguimiento de gestos.`,
            image: "img/LMC-demostracion.gif",
            createdDate: "Oct-2023",
            updatedDate: "Ene-2024"
        },
        {
            title: "Control alternativo de UR3e",
            description: `En este proyecto, se desarrolló en los laboratorios de LANITED un control alternativo para el cobot UR3e de Universal Robots, un robot 
                          colaborativo diseñado para trabajar junto con humanos. LANITED es el Laboratorio 
                          Nacional de Tecnologías Digitales que fomenta la innovación en la industria 4.0 con la creación de métodos 
                          alternativos para cobots como uno de sus múltiples proyectos. El proyecto es crucial en la manufactura 
                          avanzada, ya que permite integrar el Internet de las 
                          Cosas (IoT), mejorando la eficiencia y flexibilidad en los procesos productivos. Este enfoque promueve una 
                          colaboración más efectiva entre humanos y máquinas, optimizando la producción y reduciendo costos.`,
            image: "img/UR3e alternative-control.gif",
            createdDate: "Sep-2023",
            updatedDate: "Feb-2024"
        },
        {
            title: "IA, Simulación de peces Betta usando GAN´s",
            description:`La meta de esta IA es aprender el movimiento natural de los peces Betta, comenzando con la simulación de
                         trayectorias de 50 objetos para escalar el proyecto hacia peces Betta artificiales en un acuario. Las GAN
                          (Generative Adversarial Networks) son un tipo de red neuronal compuesta por dos modelos: un generador y 
                          un discriminador, que compiten entre sí para mejorar la calidad de las simulaciones. Las ventajas de las 
                          GAN incluyen la capacidad de generar datos realistas, enriqueciendo la experiencia visual y de interacción 
                          en entornos virtuales.`,
            image: "img/IA simulation.gif",
            createdDate: "Oct-2024",
            updatedDate: "Oct-2024"
        }

        
    ];
    const hiddenProjects = [
        {
            title: "IA, Asistente virtual basado en chat GPT para Dev's",
            description:`Este proyecto se centra en el desarrollo de un asistente virtual basado en Chat GPT, 
                         un modelo de lenguaje de inteligencia artificial diseñado por OpenAI. Chat GPT puede 
                         comprender y generar texto de manera coherente, ideal para interactuar con usuarios.
                          Al orientarlo hacia contextos específicos, como la programación, se puede entrenar 
                          para proporcionar respuestas precisas sobre lenguajes de programación, resolver 
                          errores de código y ofrecer ejemplos prácticos. Esto no solo mejora la eficiencia 
                          en la resolución de problemas, sino que también facilita el aprendizaje y la asistencia 
                          técnica en tiempo real para desarrolladores.`,
            image: "img/IA chat.gif",
            createdDate: "Oct-2024",
            updatedDate: "Oct-2024"
        },
        {
            title: "Reconocimiento Humano",
            description: `Implementando la herramienta OpenCV y YOLO, se busca desarrollar un algoritmo 
                          de detección humana que permita identificar y localizar personas en imágenes 
                          y videos. YOLO, que significa "You Only Look Once", es un modelo de detección 
                          de objetos que procesa imágenes, como frames de videos. Su aplicación se extiende 
                          a áreas como la vigilancia de seguridad, la conducción autónoma y la interacción 
                          humano-computadora. OpenCV, por su parte, proporciona las funciones necesarias 
                          para el procesamiento de imágenes y el manejo de video, complementando así 
                          las capacidades de YOLO. Este proyecto busca no solo mejorar la precisión en la detección,
                           sino también optimizar el rendimiento en entornos dinámicos.`,
            image: "img/Demwebperson.gif",
            createdDate: "Oct-2024",
            updatedDate: "Oct-2024"
        },
        {
            title: "BoomBerMan en Python",
            description: `Este proyecto consiste en la creación de un juego simple utilizando Pygame, donde el jugador 
                          controla un personaje que se mueve por la pantalla. El juego implementa animaciones para las 
                          acciones de movimiento y una animación estática que se activa al no presionar teclas. Las 
                          animaciones se gestionan a través de sprites, permitiendo una experiencia visual dinámica. 
                          El objetivo es proporcionar un entorno interactivo y entretenido para los jugadores.`,
            image: "img/boomberman.gif",
            createdDate: "Mar-2019",
            updatedDate: "Oct-2024"
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
            updatedDate: "Jul-2024"
        }
    ];


    // Datos de la trayectoria
    const trayectoria = [
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
        },
        {
            title: "PUBLIGRAB",
            description: `Experiencia programando y utilizando lenguajes G, N, para ejecutar
                          en CNC en corte laser tipo LINCOLN ELECTRIC,
                          CNC de 3 ejes tipo MAKITA, CNC corte plasma tipo 
                          Turbo Laser y CNC de impresión 3D tipo ANET, ENDER y FlashForge, asi como 
                          el modelado de los objetos impresos en Blender, SolidWorks y CoreDraw.`,
            image: "img/PUBLIGRAB.png",
            date: "2020-2024"
        },
        {
            title: "CFE",
            description: `Experiencia programando y desarrollando protocolos de seguirdad, obteniendo capacitación como
                          brigadista anti-incendios, y cpacitación en el uso de Macros en Excel. Durante mi estancia 
                          desarrolle protocolos de seguirdad en caso de incendio para los edificios del Centro Nacional de
                          Capacitación Ixtapantongo CFE (CAOI).`,
            image: "img/cfe.png",
            date: "2020-2024"
        },
        {
            title: "Educación Autodidacta",
            description: `Estudio de manera independiente temas de interes personal como lo son: 
                          Realidad Aumentada, Realidad Virtual con Unity con modelado en Blender,
                          Vision Artificial, Procesamiento de datos, creación de skills en AWS,
                          Inteligencia Artificial en Machine Learning y Deep Learning, 
                          utilizando Python y C++. Además de estudiar Ingles, Italiano y Frances para 
                          ampliar mis conocimientos practicos y teoricos en fuentes academicas de dichos 
                          idiomas.`,
            image: "img/logo.png",
            date: "2018-2024"
        },
        {
            title: "Carrera Universitaria",
            description: `Licenciatura en Ingeniería Mecatrónica, con especialidad en
                          Manufactura Avanzada y Autoamtización de procesos.
                          Donde en la aprticipacion del coloquio de investigacion cientifica y tecnologica
                          del 2019 se obtuvieron el 1er y 3er lugar del coloquio con los Poryectos:
                          Introcucccion a la Inteligencia Artificial con Redes Neuronales Artificales (RNA)
                          y Desarrollo e implementacion de sistemas de seguridad para casa habitacion por medio de la
                          domotica.`,
            image: "img/Mecatronica.png",
            date: "2018-2024"
        },
        {
            title: "Carrera Técnica",
            description: `Carrera técnica en Sistemas ComputacionalesEspecialidad en informática, 
                          donde cree habilidades y conocimientos practicos
                          para el manetenimiento de equipos computacioneles, programacion web, programacion 
                          en lenguaje C, C++, Java, implementacion practica basica de SQL, 
                          implementacion y manejo de paqueteria Office (Word, Excel, PowerPoint, Acces,
                          One Note, Project, entre otros).`,
            image: "img/sep.png",
            date: "2015-2018"
        }
    ];

    // Datos de Sobre Mí
    const sobreMi = {
        name: "Jacob Tinoco",
        photo: "img/JT.jpeg",
        description: `Soy una persona muy responsable, autodidacta que sabe trabajar en equipo
                      con gran interés por cualquier tipo de conocimiento artístico, filosófico 
                      y científico.
                      
                      Tengo un muro en Instagram donde posteo mis hobbies de fotografia, en ocaciones
                      hago divulgación cientifica compartiendo publicaciones en mis hitorias, mira 
                      mi seccion de historias de VT y de PUBLIGRAB para que veas algunas publicaciones 
                      y trabajos.
                      
                      Si te gusta la música los links y enlaces de mi perfil tienen Playlist en Spotify,
                      a fines a mis gustos musicales.
                      
                     ¡Saludos!`
    };

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

            projectCard.innerHTML = `
                ${mediaElement}
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-dates">
                        <span>Creado: ${formatDate(project.createdDate)}</span>
                        <span>Actualizado: ${formatDate(project.updatedDate)}</span>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }
// Función para cargar los proyectos ocultos
// Función para cargar los proyectos ocultos
function loadHiddenProjects() {
    const hiddenProjectsContainer = document.querySelector('.hidden-projects');

    // Verificar si ya se han cargado los proyectos
    if (hiddenProjectsContainer.children.length === 0) {
        hiddenProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-dates">
                        <span>Creado: ${formatDate(project.createdDate)}</span>
                        <span>Actualizado: ${formatDate(project.updatedDate)}</span>
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
                    <span class="trayectoria-date">${item.date}</span>
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
