export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  overview: string;
  problem: string;
  goals: string[];
  designProcess: string;
  development: string;
  result: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "artisan-bakery",
    title: "Sitio Web de Panadería Artesanal",
    description: "Un sitio web de comercio electrónico moderno para una panadería local con pedidos en línea y páginas de productos personalizadas.",
    tags: ["WordPress", "WooCommerce", "Diseño UI"],
    image: "https://images.unsplash.com/photo-1710732652617-264d6f860546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG1lbnV8ZW58MXx8fHwxNzczMzkzODA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "Un sitio web completamente responsivo de WordPress para Panadería Artesanal, una panadería local que busca expandir su negocio en línea. El proyecto incluyó diseño UI personalizado, integración de WooCommerce y una experiencia de pedidos en línea sin problemas.",
    problem: "La panadería no tenía presencia en línea y estaba perdiendo clientes con competidores. Necesitaban un sitio web que mostrara sus productos de manera hermosa y permitiera a los clientes realizar pedidos en línea.",
    goals: [
      "Crear un sitio web visualmente atractivo que refleje la marca artesanal de la panadería",
      "Implementar un sistema de pedidos en línea fácil de usar",
      "Garantizar capacidad de respuesta móvil para clientes en movimiento",
      "Integrarse con sistemas de pago existentes"
    ],
    designProcess: "Comencé con investigación sobre sitios web de panaderies y tendencias modernas de comercio electrónico. Creé wireframes en Figma enfocándome en fotografía de productos y navegación fácil. La paleta de colores utiliza tonos cálidos e invitadores que complementan la fotografía de alimentos. Diseñé tarjetas de productos personalizadas con estados de cursor y funcionalidad de vista rápida.",
    development: "Construido en WordPress con tema personalizado. Integré WooCommerce para funcionalidad de comercio electrónico con plantillas de productos personalizadas. Añadí tipos de publicación personalizados para recetas y contenido del blog. Implementé diseño responsivo usando CSS Grid y Flexbox. Optimé imágenes para tiempos de carga rápidos.",
    result: "El sitio web se lanzó exitosamente con más de 200 productos. Los pedidos en línea aumentaron un 60% en el primer mes. El cliente reportó un mejor compromiso de clientes y retroalimentación positiva sobre la interfaz fácil de usar.",
    screenshots: [
      "https://images.unsplash.com/photo-1710732652617-264d6f860546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG1lbnV8ZW58MXx8fHwxNzczMzkzODA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzMzMzUzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: "fitlife-studio",
    title: "Plataforma FitLife Studio",
    description: "Un sitio web de membresía para un estudio de fitness con reserva de clases, perfiles de entrenadores y portal de miembros.",
    tags: ["WordPress", "Diseño UI", "Desarrollo Personalizado"],
    image: "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NzMzMTQ0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "Una plataforma digital completa para FitLife Studio, que permite a los miembros reservar clases, ver horarios de entrenadores y acceder a contenido de entrenamiento exclusivo. El proyecto combinó diseño personalizado con funcionalidad potente.",
    problem: "El estudio de fitness estaba gestionando reservas manualmente por teléfono y correo electrónico, lo que llevá a doble reservas y frustración del cliente. Necesitaban un sistema automatizado que los miembros pudieran usar 24/7.",
    goals: [
      "Crear un sistema intuitivo de reserva de clases",
      "Crear perfiles de miembros con historial personal de entrenamientos",
      "Diseñar páginas de perfil de entrenadores",
      "Implementar un área de contenido exclusivo para miembros"
    ],
    designProcess: "Realicé entrevistas con miembros del gimnasio para entender sus necesidades. Creé flujos de usuario para el proceso de reserva. Diseñé una interfaz limpia y energética con tipografía audaz e imágenes motivacionales. Usé un esquema de color vibrante que refleja la marca activa del estudio.",
    development: "Desarrollado usando WordPress con plugins personalizados para funcionalidad de reserva. Creé tipos de publicación personalizados para clases, entrenadores y miembros. Implementé autenticación de usuario y control de acceso basado en roles. Construyé un calendario de reserva personalizado usando JavaScript. Integré con procesamiento de pagos para suscripciones de membresía.",
    result: "La plataforma simplificó significativamente las operaciones, reduciendo el trabajo administrativo en un 70%. La satisfacción de los miembros aumentó con acceso 24/7 a reservas. El estudio reportó un aumento del 40% en la asistencia a clases debido a reservas más fáciles.",
    screenshots: [
      "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NzMzMTQ0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzMzMzAyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: "creative-collective",
    title: "Portafolio Colectivo Creativo",
    description: "Un sitio web de portafolio para una agencia creativa que muestra su trabajo de diseño y testimonios de clientes.",
    tags: ["Diseño UI", "JavaScript", "Diseño Responsivo"],
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzMzMzAyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "Un sitio web de portafolio visualmente impresionante para Colectivo Creativo, una agencia de diseño boutique. El sitio presenta escaparates de proyectos animados, perfiles de miembros del equipo y una sección de servicios interactiva.",
    problem: "El sitio web anterior de la agencia no mostraba efectivamente su trabajo creativo. Necesitaban un sitio moderno y orientado visualmente que impresionara a clientes potenciales y ganara nuevos negocios.",
    goals: [
      "Crear una primera impresión audaz y memorable",
      "Mostrar proyectos con animaciones atractivas",
      "Contar la historia y valores de la agencia",
      "Generar clientes potenciales de calidad a través de CTAs estratégicas"
    ],
    designProcess: "Exploré varias opciones de diseño enfocándose en jerarquía visual y narración de historias. Creé mockups de alta fidelidad en Figma con cuidadosa atención a sistemas de cuadrícula y tipografía. Diseñé animaciones personalizadas e interacciones microinteractivas para mejorar el compromiso del usuario. Usé una paleta de colores sofisticada con combinaciones de colores inesperadas.",
    development: "Construido con HTML5 semántico y técnicas CSS modernas incluyendo Grid y Propiedades Personalizadas. Implementé animaciones suaves de desplazamiento usando API de Intersection Observer. Creé una arquitectura JavaScript modular para componentes interactivos. Optimicé el rendimiento con carga perezosa para imágenes y videos.",
    result: "El sitio web ganó un premio de diseño local y generó una atención significativa de la industria. La agencia reportó un aumento de 3x en consultas de calidad. La tasa de rebote disminuyó un 45% con usuarios pasando un promedio de 4 minutos en el sitio.",
    screenshots: [
      "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzMzMzAyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc3MzMwOTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: "urban-threads",
    title: "Comercio Electrónico Urban Threads",
    description: "Una plataforma de comercio electrónico de moda con filtrado avanzado, funcionalidad de lista de deseos y guías de tallas.",
    tags: ["Comercio Electrónico", "WooCommerce", "Diseño UX"],
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzMzMzUzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "Un sitio web de comercio electrónico completo para Urban Threads, una marca de moda independiente. El proyecto se enfocó en crear una experiencia de compra excepcional con funciones de filtrado avanzado y personalización.",
    problem: "Urban Threads estaba vendiendo a través de mercados de terceros y perdiendo identidad de marca. Necesitaban su propia plataforma de comercio electrónico que proporcionara una experiencia de compra premium y mejores márgenes de ganancia.",
    goals: [
      "Construir una plataforma de comercio electrónico escalable",
      "Implementar filtrado de productos avanzado y búsqueda",
      "Crear un proceso de pago intuitivo",
      "Diseñar para comportamiento de compra móvil primero"
    ],
    designProcess: "Investiqué sitios de competidores y mejores prácticas actuales de comercio electrónico. Creé wireframes detallados para viajes de usuario clave incluyendo búsqueda, filtrado y pago. Diseñé una interfaz sofisticada con énfasis en fotografía de productos. Desarrollé un sistema de diseño completo para coherencia en todas las páginas.",
    development: "Construido en WooCommerce con extensas personalizaciones. Implementé filtrado potenciado por AJAX para navegación sin problemas. Creé plantillas de productos personalizadas con galerías de imágenes y guías de tallas. Integré con proveedores de envío y puertas de enlace de pago. Implementé características de lista de deseos y productos vistos recientemente. Optimicé el flujo de pago para reducir el abandono del carrito.",
    result: "La tienda se lanzó exitosamente con más de 500 productos. La tasa de conversión alcanzó 3.2%, por encima del promedio de la industria. Las ventas móviles representaron el 65% de los ingresos totales. Los comentarios de los clientes destacaron la navegación fácil y el proceso de pago.",
    screenshots: [
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NzMzMzUzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1710732652617-264d6f860546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG1lbnV8ZW58MXx8fHwxNzczMzkzODA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  },
  {
    id: "tech-startup-landing",
    title: "Página de Aterrizaje de Startup Tecnológica",
    description: "Una página de aterrizaje enfocada en conversión para una startup SaaS con demostraciones interactivas y tablas de precios.",
    tags: ["Diseño UI", "JavaScript", "Optimización de Conversión"],
    image: "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc3MzMwOTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    overview: "Una página de aterrizaje de alta conversión para una startup SaaS que lanza su herramienta de gestión de proyectos. La página incluye demostraciones interactivas de productos, prueba social y embudos de conversión optimizados.",
    problem: "La startup necesitaba validar su idea de producto y comenzar a construir una lista de correo electrónico para su lanzamiento beta. Necesitaban una página de aterrizaje que pudiera comunicar rápidamente el valor y convertir visitantes en registros.",
    goals: [
      "Lograr una tasa de conversión de registro de correo electrónico de 20%+",
      "Comunicar claramente la propuesta de valor del producto",
      "Construir confianza a través de prueba social y testimonios",
      "Crear una experiencia atractiva e interactiva"
    ],
    designProcess: "Estudié páginas de aterrizaje SaaS de alto rendimiento y principios de optimización de conversión. Creé múltiples variaciones de diseño para pruebas A/B. Me enfoqué en jerarquía clara y ubicación de copiar convincente. Diseñé elementos interactivos para demostrar características del producto. Usé una estética tecnológica moderna con tipografía audaz e diseños limpios.",
    development: "Construido con JavaScript vanilla para rendimiento óptimo. Implementé animaciones activadas por desplazamiento para compromiso. Creé una demostración interactiva del producto usando transformaciones CSS y JavaScript. Integré con API del proveedor de servicios de correo electrónico. Agregué seguimiento de análisis para optimización de conversión. Garanticé tiempos de carga rápidos con activos optimizados.",
    result: "La página de aterrizaje logró una tasa de conversión del 24%, superando objetivos. Recopiló más de 2,000 registros de correo electrónico en el primer mes. La demostración interactiva tuvo una tasa de compromiso del 78%. La página se convirtió en una plantilla para futuras campañas de marketing de la empresa.",
    screenshots: [
      "https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc3MzMwOTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NzMzMTQ0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  }
];
