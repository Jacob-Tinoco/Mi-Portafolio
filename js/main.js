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
            description: `Para este proyecto se realizó un algoritmo de seguimiento de 13 Gestos estáticos.
                          Posteriormente, se buscó ampliar el campo de visión utilizando 3 sensores tipo LMC,
                          (no era usual poder usar más de 1 sensor en una misma computadora).`,
            image: "img/LMC-demostracion.gif",
            createdDate: "Oct-2023",
            updatedDate: "Ene-2024"
        },
        {
            title: "Control alternativo de UR3e",
            description: `Con un proyecto de desarrollo a cargo del Dr. Iván García y bajo la supervisión
                          del Ing. Gabriel Salinas en los laboratorios de LANITED, se creó un control alternativo
                          de cobot UR3e de Universal robots dentro de una celda de Manufactura Avanzada`,
            image: "img/UR3e alternative-control.gif",
            createdDate: "Sep-2023",
            updatedDate: "Feb-2024"
        },
        {
            title: "IA, Simulación de peces Betta",
            description:`La meta de esta IA es que aprenda el movimiento natural de peces Betta.
                         Como etapa inicial es la simulación de trayectoria de 50 objetos, escalando
                         el proyecto para simular peces Betta artificiales en un acuario`,
            image: "img/IA simulation.gif",
            createdDate: "Oct-2024",
            updatedDate: "Oct-2024"
        }
    ];

    // Datos de la trayectoria
    const trayectoria = [
        {
            title: "Programa Delfin",
            description: `Participación en el equipo VisionTeam 
                          para el desarrollo de skill en AWS para Alexa 
                          con fines de desarrollo e investigacion.`,
            image: "img/Veranodelfin.jpeg",
            date: "2021",
        },
        {
            title: "LANITED, Contol alternativo de COBOTS",
            description: `Colaboración en proyectos de investigación en LANITED.
                          para el desarrollo de control alternativo de Cobots tipo UR3e, 
                          donde se usaron herramientas para el reconocimiento de manos 
                          y gestos`,
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
                          el modelado de los objetos impresos en Blender y SolidWorks.`,
            image: "img/PUBLIGRAB.png",
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
            description: `Licenciatura en Mecatrónica, con especialidad en
                          Manufactura Avanzada y Autoamtización de procesos.
                          Donde en la aprticipacion del coloquio de investigacion cientifica y tecnologica
                          del 2019 se obtuvieron el 1er y 3er lugar del coloquio con los Poryectos:
                          Introcucccion a la Inteligencia Artificial con Redes Neuronales Artificales (RNA)
                          y Desarrollo e implementacion de sistemas de seguridad para casa habitacion por medio
                          domotica.`,
            image: "img/Mecatronica.png",
            date: "2018-2024"
        },
        {
            title: "Carrera Técnica",
            description: `Especialidad en informática, donde cree habilidades y conocimientos practicos
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
