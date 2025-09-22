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
            title: "Control alternativo de UR3e",
            description: `En este proyecto, se desarrolló un control alternativo para el Robot Colaborativo UR3e de Universal Robots en los laboratorios de LANITED,
                          liderado por el Dr. Iván García y supervisado en pruebas in-situ por el Ing. Gabriel Salinas. LANITED, el Laboratorio Nacional de Tecnologías Digitales, fomenta 
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
                         de Tensorflow, Keras. El objetivo es desarrollar un algoritmo que permita la identificación y seguimiento de gestos y personas en tiempo real
                         y luego llevarlo a la interpretación de LSM. El fragmento del video es propiedad del canal StatusSilver en Youtube`,         
            image: "img/Gesture.gif",
            createdDate: "Oct-2024",
            updatedDate: "Ene-2025",
            icons: ["img/Opencv.png", "img/yolo.png", "img/mediapipe.png"]
        },
        {
            title: "CNN, reconocimiento de ropa",
            description: `Mediante la implementación de la herramientas como Keras y Tensorflow,  se desarrolló un modelo de AI tipo CNN para el reconocimineto de ropa 
                          teniendo como entrada imagenes de 125x125 px, las clasifica y hace una predicción que determina el tipo de prenda que se reconocida por el modelo,
                          En la segunda semana de abril de 2025 se entrenaron 5 modelos, de los cuales 3 se entrenaron exitosamente, 2 fallaron por llegar a los limites de Hadware.
                          Mejore mis habilidades en el procesamiento y análisis de datos, generación y entrenamiento de modelos AI tipo RNN y CNN. 
                          Su aplicación se extiende ámbitos como la vigilancia y control de calidad, monitorización Streaming de lineas de producción.
                          Proyecto en proceso en mi trabajo dentro de Maxima Apparel`,
            image: "img/Cnn_recnocimiento_ropa.gif",
            createdDate: "Abr-2025",
            updatedDate: "Abr-2025",
            icons: ["img/Python.png", "img/tensorflow.png", "img/Keras.png"]
        },
    ];
    
    const hiddenProjects = [
        {
          title: "IA, Identificación de gestos e índice de confianza",
          description: `Este proyecto desarrolló un algoritmo de visión artificial para identificar y validar gestos
                        mediante el cálculo de índices de confianza. Se establecieron parámetros específicos: el pulgar
                        debía registrar entre 21% y 30%, mientras que los dedos índice a meñique requerían un 85%. El
                        gesto completo se validaba solo si alcanzaba al menos un 85% de confianza. El sistema se
                        programó en Python, tanto en el backend como en la interfaz gráfica, y utilizó librerías como
                        Mediapipe, Tensorflow y OpenCV. El objetivo fue ofrecer precisión y confiabilidad en la
                        interpretación de gestos humanos para aplicaciones de interacción hombre-máquina. Durante el
                        desarrollo se reforzaron competencias en validación de métricas, integración de librerías de visión
                        artificial y diseño de interfaces gráficas prácticas, logrando un sistema que combina exactitud,
                        escalabilidad y facilidad de integración en escenarios reales.`,
          image: "img/gestur_detect.gif",
          createdDate: "Ene-2024",
          updatedDate: "Mar-2025",
          icons: ["img/Opencv.png", "img/mediapipe.png", "img/tensorflow.png"]
        },
        {
          title: "IA, Asistente virtual con Chat GPT para Dev's",
          description: `Este asistente virtual fue diseñado para apoyar a desarrolladores utilizando modelos de
                        lenguaje abiertos de Ollama. El backend se implementó en Python y la interfaz en JavaScript,
                        empleando frameworks como Django y Flask para crear APIs. Se aplicaron técnicas de
                        procesamiento de lenguaje natural con NLTK y SpaCy, y se integró el modelo PythonCoder V2
                        para mejorar la interpretación de consultas técnicas. El proyecto fortaleció habilidades en
                        documentación, validación de pruebas y adaptación a nuevos entornos de NLP. También permitió
                        explorar la escalabilidad de asistentes inteligentes y su integración en entornos de desarrollo
                        colaborativo. El resultado fue un sistema capaz de responder preguntas técnicas, guiar flujos de
                        trabajo y demostrar cómo los modelos de lenguaje pueden aplicarse de manera efectiva en el
                        ámbito del desarrollo de software y automatización.`,
          image: "img/IA chat.gif",
          createdDate: "Oct-2024",
          updatedDate: "Ene-2025",
          icons: ["img/Python.png", "img/llama.png", "img/js.png"]
        },
        {
          title: "Implementación de 3 dispositivos controller",
          description: `El proyecto consistió en integrar tres Leap Motion Controllers en una misma computadora,
                        ampliando el campo de visión en un 266% y mejorando la precisión de lectura en un 12%. La
                        programación de los sensores se realizó en C++ mediante la API oficial de Leap Motion, mientras
                        que Python, con librerías como Pandas, NumPy y Matplotlib, se usó para analizar y procesar los
                        datos recopilados. Además, se documentaron procesos, se generaron reportes semanales e
                        informes mensuales, y se fortaleció la comunicación dentro del equipo. El trabajo unió la
                        programación de bajo nivel con el análisis avanzado de datos en un entorno experimental,
                        ofreciendo un sistema escalable para investigación y aplicaciones prácticas en control por gestos.
                        Este proyecto reforzó competencias en integración hardware-software, análisis de datos y
                        documentación técnica profesional.`,
          image: "img/LMC-demostracion.gif",
          updatedDate: "Ene-2024",
          icons: ["img/leap.png", "img/C++.jpg", "img/numpy.png"]
        },
        {
          title: "Reconocimiento Humano con YOLO",
          description: `Este sistema fue diseñado para la detección de personas en imágenes utilizando un modelo
                        pre-entrenado de YOLO V11 y la librería OpenCV. OpenCV se encargó del procesamiento y la
                        manipulación de video, mientras que YOLO ejecutó la detección en tiempo real. La solución se
                        planteó para escenarios como vigilancia de seguridad, conducción autónoma y sistemas de
                        interacción humano-computadora. Durante el desarrollo se fortalecieron habilidades en análisis
                        de resultados, métricas de validación y optimización de algoritmos en entornos dinámicos. El
                        proyecto demostró la importancia de integrar librerías robustas para crear soluciones escalables y
                        de alto rendimiento. Asimismo, permitió consolidar experiencia en diseño modular, asegurando
                        que el sistema pueda adaptarse fácilmente a nuevos casos de uso y expandirse hacia futuras
                        aplicaciones de visión artificial avanzada.`,
          image: "img/Firends.gif",
          createdDate: "Oct-2024",
          updatedDate: "Dic-2024",
          icons: ["img/Opencv.png", "img/yolo.png"]
        },
        {
          title: "IA, Simulación de peces Betta con GANs",
          description: `Este proyecto se enfocó en simular el movimiento natural de peces Betta mediante redes
                        generativas adversarias (GANs). La primera fase generó trayectorias de 50 objetos, sirviendo
                        como base para escalar a un acuario virtual de peces artificiales. Se usó Python junto con
                        Tensorflow, PyTorch y Scikit-learn, integrando control de versiones y documentación formal. El
                        objetivo principal fue lograr realismo en los movimientos para enriquecer experiencias de
                        simulación e interacción. Se desarrollaron habilidades en modelado de datos, validación de redes
                        neuronales y optimización de arquitecturas GAN. El proyecto reforzó competencias en investigación
                        aplicada y diseño de entornos interactivos visuales, destacando la importancia del realismo
                        computacional para el desarrollo de experiencias inmersivas en contextos de entretenimiento y
                        experimentación científica.`,
          image: "img/IA simulation.gif",
          updatedDate: "Dic-2024",
          icons: ["img/Pytorch.png", "img/numpy.png", "img/tensorflow.png"]
        },
        {
          title: "Manejo y uso de API's",
          description: `En estos proyectos se documentó y consolidó la cobertura de integraciones API durante los últimos seis
                        meses, incluyendo Amazon SP-API, DHL MyDHL y FedEx Webhooks. Se clasificaron los
                        endpoints en categorías como "siempre accesibles, vacíos y dependientes de datos futuros",
                        permitiendo estandarizar procesos y planear futuras expansiones. Además, se implementaron
                        prácticas documentales, monitoreo y clasificación de disponibilidad. Los proyectos en manejo de API's
                        frotalecieron habilidades en integración de servicios de logística, comercio electrónico y analítica,
                        contribuyendo a la construcción de una arquitectura de automatización más robusta y escalable.
                        También representó un ejercicio clave en la gestión de APIs diversas, garantizando un control
                        más claro del estado de cada integración y estableciendo las bases para el crecimiento futuro
                        del ecosistema de servicios empresariales.  Gif ilustrativo`,
          image: "img/GIF_APIS.gif",
          updatedDate: "Sep-2025",
          icons: ["img/logo_AMAZON.png", "img/logo_DHL.png", "img/logo_FEDEX.png", "img/logo_OLLAMA.png"]
        },
        {
          title: "Generador de SKUs en Illustrator",
          description: `El proyecto duirante su ultimo update, se desarrolló scripts de emergencia para garantizar la continuidad de procesos
                        gráficos en Illustrator en casos donde los archivos CSV no estuvieran disponibles. Se crearon
                        versiones mejoradas de scripts previos, creados tambie por su servidor en marzo de 2025 incorporando interfaces gráficas con Tkinter, detección
                        automática de equipos, generación de reportes TXT y registro detallado de logs. Estas mejoras
                        incrementaron la usabilidad y redujeron errores en la producción de materiales. Se reforzaron
                        competencias en Python avanzado, desarrollo de GUI, automatización en Illustrator y diseño de
                        flujos de respaldo. Además, se implementaron técnicas de validación en tiempo real y reportes
                        automáticos de nodos faltantes, lo que permitió una gestión más eficiente. Este proyecto fue
                        clave para fortalecer la resiliencia del área de diseño y asegurar entregas confiables en escenarios
                        críticos.`,
          image: "img/GIF_SKU.gif",
          updatedDate: "Sep-2025",
          icons: ["img/python (2).png", "img/logo_ai.png","img/logo_EXCEL.png"]
        },
        {
          title: "Generador de XLSX, basados en templates, diccionarios, data base",
          description: `La aplicación automatizó la generación de plantillas Liverpool a partir de datos PLM en
                        formatos CSV o Excel. El sistema validó tallas y colores con diccionarios predefinidos, generó
                        un archivo XLSX por categoría de prenda y presentó una vista previa en ASCII junto con logs
                        detallados para auditoría. La interfaz gráfica simplificó su uso para personal no técnico, mientras
                        que el empaquetado como aplicación de escritorio permitió su despliegue en múltiples equipos.
                        El proyecto reforzó habilidades en procesamiento de datos, validación automática, manejo de
                        excepciones y normalización de catálogos. También consolidó la experiencia en creación de
                        herramientas a medida para el área de producción, garantizando eficiencia, estandarización y
                        trazabilidad en la entrega de archivos a clientes. Gif ilustrativo`,
          image: "img/GIF_EXCELAUTO.gif",
          updatedDate: "Sep-2025",
          icons: ["img/python (2).png", "img/logo_EXCEL.png"]
        },
        {
          title: "Maxi – Chatbot de servicio al cliente",
          description: `Este flujo unificado en n8n fue diseñado para atender clientes en México y Estados Unidos.
                        Se conectó con Shopify, Zendesk y DHL para gestionar órdenes, tickets y rastreos, además de
                        ofrecer respuestas automáticas a FAQs. Incluyó la creación de tickets con validaciones estrictas
                        y el registro de todas las interacciones en Google Sheets para análisis y reportes semanales.
                        El sistema mejoró la gestión de credenciales, reforzó la seguridad y estandarizó procesos entre
                        regiones. Durante el desarrollo se fortalecieron competencias en diseño de workflows, NLP
                        aplicado y mejores prácticas de automatización. El resultado fue un sistema robusto y adaptable,
                        optimizado para escalar y responder de forma uniforme en dos mercados diferentes, integrando
                        múltiples servicios de soporte en una sola plataforma.`,
          image: "img/GIF_MAXI.gif",
          updatedDate: "Sep-2025",
          icons: ["img/logo_N8N.png", "img/logo_SHOPIFY.png", "img/logo_ZENDESK.png", "img/logo_DHL.png"]
        },
        {
          title: "Reportes automaticos",
          description: `Este proyecto implementó flujos en n8n para generar reportes semanales del chatbot,
                        consolidando métricas como número de FAQs respondidas, tickets creados, órdenes procesadas
                        y errores detectados. Los flujos integraron Google Sheets para obtener datos, nodos de
                        JavaScript para procesar la información y QuickChart para graficar los resultados. Se generaron
                        histogramas de chats y mensajes, además de gráficas de distribución de FAQs y errores. El
                        sistema enviaba los reportes por correo electrónico a los equipos internos, estandarizando la
                        comunicación y reduciendo el trabajo manual. El proyecto permitió desarrollar habilidades en
                        visualización de datos, automatización de reportes, integración de múltiples servicios y
                        comunicación efectiva con stakeholders, garantizando transparencia en el seguimiento del
                        rendimiento del chatbot.`,
          image: "img/GIF_REPORTS.gif",
          updatedDate: "Sep-2025",
          icons: ["img/logo_N8N.png", "img/logo_EXCEL.png", "img/logo_GMAIL.png"]
        },
        {
          title: "TechPack autogenerados en Illustrator",
          description: `El sistema automatizó la creación de TechPacks en Illustrator a partir de un CSV consolidado.
                        Fue capaz de duplicar artboards según líderes activos, reemplazar texto, aplicar colores RGB,
                        insertar imágenes y exportar archivos finales en formatos AI y PDF. El flujo de trabajo incluyó
                        validación de nodos, limpieza de elementos inactivos y selección dinámica de plantillas. El
                        proyecto se implementó en macOS con integración de JSX y AppleScript, optimizando la
                        producción de documentos gráficos. Se fortalecieron habilidades en integración de software,
                        diseño de flujos automatizados y generación de archivos de alta calidad para producción. Además,
                        el sistema permitió reducir errores manuales, acelerar la entrega de materiales y crear procesos
                        reproducibles para futuros proyectos de diseño industrial y gráfico.`,
          image: "img/GIF_TECHPACK.gif",
          updatedDate: "Sep-2025",
          icons: ["img/logo_ai.png", "img/python (2).png", "img/logo_JSX.png"]
        },
        {
          title: "BoomberMan en Python",
          description: `Este proyecto recreó un videojuego estilo clásico utilizando Pygame. El jugador controla un
                        personaje con animaciones dinámicas para movimiento y estados inactivos, gestionadas a través
                        de sprites. El desarrollo permitió reforzar habilidades en lógica de programación, diseño modular
                        y uso de motores de animación básicos. Se enfocó en ofrecer una experiencia interactiva sencilla
                        pero atractiva, aplicando conceptos de simulación de físicas y manejo de eventos. Además,
                        representó una práctica sólida en la separación de lógica, renderizado y control de entradas.
                        Este trabajo consolidó conocimientos en Python aplicado a entretenimiento digital y demostró
                        la capacidad de crear prototipos de juegos escalables que pueden evolucionar con más niveles,
                        funcionalidades y elementos gráficos.`,
          image: "img/boomberman.gif",
          createdDate: "Mar-2019",
          updatedDate: "Nov-2024",
          icons: ["img/pygame.png"]
        },
        {
          title: "Ping pong con Pygame",
          description: `El proyecto consistió en desarrollar un videojuego de ping pong en estilo retro utilizando
                        Pygame. Se implementó la simulación de colisiones, control de la física de la pelota y manejo
                        de puntuaciones en tiempo real. La lógica del juego, la interfaz gráfica y la física se organizaron
                        de manera modular, lo que facilitó el mantenimiento y la posibilidad de añadir nuevas funciones.
                        Se reforzaron habilidades en diseño de juegos 2D, animaciones simples y programación de
                        interfaces interactivas. Además, el proyecto destacó la importancia de separar responsabilidades
                        en el código, permitiendo escalar el juego hacia variantes más complejas. Fue un ejercicio
                        práctico de lógica, creatividad y programación, demostrando la capacidad de utilizar Python
                        para entretenimiento interactivo.`,
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
            description: `En PUBLIGRAB, aprendi a operar y programar máquinas CNC, que son esenciales en la 
                          manufactura moderna. Utilizó lenguajes G y N para ejecutar
                          en CNC en corte láser tipo LINCOLN ELECTRIC, CNC de 3 ejes tipo MAKITA, CNC corte plasma tipo 
                          Turbo Laser y CNC de impresión 3D tipo ANET, ENDER y FlashForge, así como 
                          el modelado de los objetos impresos en Blender, SolidWorks y CorelDRAW. Durante el taller, adquirirás habilidades para 
                          interpretar planos técnicos, programar y operar máquinas CNC, y realizar mecanizado de precisión.`,
            image: "img/PUBLIGRAB.png",
            date: "2020-2024"
        },
        {
            title: "CFE",
            description: `Experiencia programando y desarrollando protocolos de seguridad, obteniendo capacitación como
                          brigadista antincendios y capacitación en el uso de macros avanzados en Excel. Durante mi estancia 
                          desarrollé protocolos de seguridad en caso de incendio para los edificios del Centro Nacional de
                          Capacitación Ixtapantongo CFE (CAOI). El Centro Nacional de Capacitación Ixtapantongo (CENACI) de 
                          la Comisión Federal de Electricidad (CFE) en Valle de Bravo se dedica a ofrecer formación especializada 
                          en el campo de la generación eléctrica.`,
            image: "img/cfe.png",
            date: "2020-2021"
        },  
        {
            title: "Programa Delfin",
            description: `El Programa Delfín es una iniciativa que busca fomentar la colaboración y el desarrollo en áreas de 
                          tecnología e investigación. Durante mi participación en el programa, me integré al equipo VisionTeam, 
                          donde trabajé en el desarrollo de habilidades en AWS para Alexa.
                          Esta experiencia me permitió adquirir conocimientos en inteligencia artificial y tecnología de voz, 
                          aplicándolos en proyectos personales.`,
            image: "img/Veranodelfin.jpeg",
            date: "2021",
        },
        {
            title: "LANITED, Contol alternativo de COBOTS",
            description: `Colaboración en proyectos de investigación en LANITED para el desarrollo de control alternativo 
                          de cobots tipo UR3e, donde se usaron herramientas para el reconocimiento de manos. El Laboratorio 
                          Nacional de Investigación en Tecnologías Digitales (LANITED) se dedica a impulsar la transformación 
                          digital en México. Su misión es liderar en el desarrollo e implementación de tecnologías avanzadas 
                          de la cuarta revolución industrial para resolver problemas nacionales y beneficiar a la sociedad, 
                          pequeñas y medianas empresas (PyMEs) y la academia.
                          y gestos.`,
            image: "img/LANITED.jpg",
            date: "2023-2024"
        },
        {
            title: "CIDESI y Vision Team",
            description: `Durante este periodo se desarrollo pruebas experimentales, en entornos controlados y 
                          no controlados para utilizar las maximas capacidades
                          de sensores estereoscopicos tipo Leap Motion Controller en sus versiones 
                          Controller 1 y Controller 2. Vision Team esta conformado por profesionales en diversas areas
                          del conocimiento como: Sistemas computacionales, química, metalurgia, física aplicada, programación
                          especialista en manufactura, entre otras areas, desde estudiantes de licenciatura hasta estudiantes 
                          y graduados en doctorados.`,
            image: "img/VisionTeam.png",
            date: "2023-2024"
        }
    ];
    const hiddenTrayectoria = [
        {
            title: "Certificado de especialización: Google Professional Data Analytics",
            description: `En este programa de certificación, aprendí las habilidades más demandadas y obtuve formación en IA para el analísis de datos.
                          Realice actividades de importación, analisis exploratorio, identificación de puntos clave en data sets, preprocesamiento de datos
                          (limpieza, transformación de datos, formateo, uso de datasheets y data base, control de versiones), procesmaiento de datos (métodos de analisis por IA:
                          machine learning, deep learning, mineria de datos), visualización de datos por medio de python, R, Tableau; además de conocer y aplicar las mejores practicas
                          para compartir resultados, y culminé la certificación con un caso de estudio.`,
            image: "img/Data analytics.png",
            /*createdDate: "Oct-2023",*/
            updatedDate: "Feb-2025",
            icons: ["img/tableau_logo.png", "img/Google.png","img/r_logo.png"]
        },
        {
            title: "Curso: Python práctico para la codificación de IA 1",
            description: `En el curso, aprendí a configurar un entorno de codificación
                          robusto, manejar las sintaxis y funciones más utilizadas en la inteligencia artificial, y utilizar bibliotecas
                          como NumPy, Pandas y TensorFlow. También adquirí habilidades avanzadas en el procesamiento y análisis de datos,
                          además de aprender a modelar IA con Scikit-learn y Keras. Gracias a este curso, ahora puedo crear modelos de IA 
                          y realizar análisis de datos complejos, todo desde mi entorno de codificación personal, sin necesidad de 
                          utilizar servicios basados en la nube.`,
            image: "img/Curso_pyhton_ai.png",
            /*createdDate: "Oct-2023",*/
            updatedDate: "Ene-2025",
            icons: ["img/Python.png", "img/KAIST_logo.png","img/tensorflow.png"]
        },
        {
            title: "Curso: Análisis de datos con programación R",
            description: `En el curso Análisis de Datos con Programación R, aprendí a utilizar el lenguaje R para 
                          realizar análisis de datos. Desarrollé habilidades en la manipulación y visualización de datos. 
                          Aprendí a trabajar con conjuntos de datos y a utilizar bibliotecas como ggplot2, dplyr, 
                          comprendi las bases de Tidyverse. Tambien entendi las mejores practicas para la visualizción de 
                          los datos, y comprender los tipos de gráficos de acuerdo al tipo de analisis o en su defecto seleccionar 
                          el gráfico/diagrama según el mensaje que quiero comaprtir.`,
            image: "img/Curso_R.png",
            /*createdDate: "Oct-2023",*/
            updatedDate: "Feb-2025",
            icons: ["img/tableau_logo.png", "img/Google.png","img/r_logo.png"]
        },
        {
            title: "Insignia: Google Data Analytics Professional Certificate",
            description: `Sobre la insignia: Aquellos que obtienen el Certificado de Análisis de Datos de Google 
                          han completado ocho cursos, desarrollados por Google, que incluyen evaluaciones prácticas basadas en la 
                          práctica y están diseñados para prepararlos para roles de nivel introductorio en Análisis de Datos. 
                          Son competentes en herramientas y plataformas, incluidas hojas de cálculo, SQL, Tableau y R. Saben cómo 
                          preparar, procesar, analizar y compartir datos para una acción reflexiva.`,
            image: "img/insignia_google.png",
            /*createdDate: "Oct-2023",*/
            updatedDate: "Feb-2025",
            icons: ["img/Google.png"]
        },
        {
            title: "AI Developer",
            description: `Actualmente trabajo en Maxima Apparel, la cual es una empresa de producción y diseño de moda, tanto deportiva como causal, dentro 
                          de mis funciones principales es hacer procesos automatizados, desarrollos de modelos AI con Visión Artificial de tipo RNN, CNN, entre otros.
                          Durante el primer periodo de trabajo, logre reducir 7 horas de trabajo por semana al departamento de Finanzas y RH; entrene 3 modelos 
                          de AI-CNN para reconocimiento de ropa, empezando un modelo de reconocimiento para los productos de Maxima a largo plazo.`,
            image: "img/maxima_apparel.png",
            /*createdDate: "Oct-2023",*/
            updatedDate: "Abr-2025",
            icons: ["img/Pytorch.png","img/Python.png","img/Keras.png"]
        },
    ];


    // Datos de Sobre Mí
    const sobreMi = {
        name: "Jacob Tinoco",
        photo: "img/JT.jpeg",
        description: `Soy una persona muy responsable, autodidacta que sabe trabajar en equipo
                      con gran interés por cualquier tipo de conocimiento artístico, filosófico 
                      y científico.

                      Tengo un muro en Instagram donde posteo mis hobbies de fotografía; en ocasiones
                      hago divulgación científica participando en eventos de atronomia donde las personas pueden 
                      acercarse a telescopios para observar la Luna, las estrellas y eventos de interes. Mira 
                      mi sección de historias de VT y de PUBLIGRAB para que veas algunas publicaciones.
                      Dejo el enlace en la siguiente sección.
                      

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
// Función para cargar los proyectos ocultos
function loadHiddenTrayectoria() {
    const hiddenTrayectoriaContainer = document.querySelector('.hidden-trayectoria');

    if (hiddenTrayectoriaContainer.children.length === 0) {
        hiddenTrayectoria.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            const iconsHTML = project.icons ? project.icons.map(icon => `<img src="${icon}" alt="Icon" class="project-icon">`).join('') : '';

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-dates">
                        <span> ${formatDateToMonthYear(project.updatedDate)}</span>
                        <div class="project-icons">
                            ${iconsHTML}
                        </div>
                    </div>
                </div>
            `;
            hiddenTrayectoriaContainer.appendChild(projectCard);
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
// Evento para mostrar más Trayectoria 
document.getElementById('show-more-trayectoria').addEventListener('click', function() {
    const hiddenTrayectoriaContainer = document.querySelector('.hidden-trayectoria');
    hiddenTrayectoriaContainer.style.display = 'grid'; // Muestra Trayectoria oculta
    loadHiddenTrayectoria(); // Carga los trayectoria oculta
    this.style.display = 'none'; // Oculta el botón de mostrar
    document.getElementById('show-less-trayectoria').style.display = 'block'; // Muestra el botón de mostrar menos
});

// Evento para mostrar menos Trayectoria
document.getElementById('show-less-trayectoria').addEventListener('click', function() {
    const hiddenTrayectoriaContainer = document.querySelector('.hidden-projects');
    hiddenTrayectoriaContainer.style.display = 'none'; // Oculta la trayectoria oculta 
    document.getElementById('show-more-trayectoria').style.display = 'block'; // Muestra el botón de mostrar más
    this.style.display = 'none'; // Oculta el botón de mostrar menos
});


// Evento para mostrar menos Trayectoria
document.getElementById('show-less-trayectoria').addEventListener('click', function() {
    const hiddenTrayectoriaContainer = document.querySelector('.hidden-trayectoria');
    hiddenTrayectoriaContainer.style.display = 'none'; // Oculta la trayectoria oculta
    this.style.display = 'none'; // Oculta el botón de mostrar menos
    document.getElementById('show-more-trayectoria').style.display = 'block'; // Muestra el botón de mostrar más
});

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


