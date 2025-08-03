export const projects_resume = [
  {
    title: "Controlador Xbee para drones",
    subtitle: "ESP32 + Control Autónomo",
    description:
      "Sistema de control remoto robusto para drones en ambientes sin Wi-Fi, con modos de vuelo automático y fail-safe integrado.",
    features: [
      "Comunicación LoRa de largo alcance",
      "Control autónomo con waypoints",
      "Sistema fail-safe redundante",
      "Telemetría en tiempo real",
    ],
    tech: ["ESP32", "LoRa", "C++", "FreeRTOS"],
    icon: "🚁",
    gradient: "from-cyan-500 to-blue-500",
    slug: "drone-xbee-controller",
  },
  {
    title: "Simulador 3D de brazo robótico",
    subtitle: "Intel RealSense + Control Adaptativo",
    description:
      "Brazo robótico con cámara Intel RealSense para simulación en tiempo real de entornos 3D y control adaptativo.",
    features: [
      "Intel RealSense integration",
      "Simulación 3D en tiempo real",
      "Control PID adaptativo",
      "Mapeo de entornos dinámicos",
    ],
    tech: ["Python", "OpenCV", "RealSense", "PyQt"],
    icon: "🦾",
    gradient: "from-purple-500 to-pink-500",
    slug: "robotic-arm-simulator",
  },
  {
    title: "ERP modular con Spring Boot",
    subtitle: "Backend + AWS Deployment",
    description:
      "Sistema ERP completo para manejo de inventario, compras y facturación con arquitectura modular y despliegue en AWS.",
    features: [
      "Arquitectura modular escalable",
      "APIs REST con Spring Boot",
      "Seguridad JWT integrada",
      "Despliegue automatizado en AWS",
    ],
    tech: ["Spring Boot", "Java", "PostgreSQL", "AWS"],
    icon: "💼",
    gradient: "from-blue-500 to-cyan-500",
    slug: "modular-erp-system",
  },
  {
    title: "Estación Terrena – Visualización de Telemetría",
    subtitle: "Streaming en Tiempo Real para Cohetes Experimentales",
    description:
      "Sistema web para graficar datos de vuelo de cohetes en tiempo real con backend FastAPI, frontend React y WebSockets.",
    features: [
      "Streaming de datos por WebSocket",
      "Dashboard responsive con gráficos en tiempo real",
      "Soporte para múltiples canales de sensores",
      "Análisis post-vuelo con visualización histórica",
    ],
    tech: ["React", "Python", "FastAPI", "WebSockets", "InfluxDB", "Grafana"],
    icon: "🚀",
    gradient: "from-indigo-500 to-purple-500",
    slug: "ground-station-telemetry",
  },

  {
    title: "Banco de Pruebas – Telemetría de Motor",
    subtitle: "Serialización en C++ + Análisis en Python",
    description:
      "Software para captura de datos de galga a través de lectura serial, serialización en C++, y análisis automático en Python usando Jupyter notebooks.",
    features: [
      "Lectura de galga vía UART",
      "Serialización eficiente en C++",
      "Análisis post‑prueba con Jupyter/Pandas",
      "Generación de métricas de motor automáticamente",
    ],
    tech: ["C++", "Serial Port", "Python", "Jupyter Notebook", "GNU/Linux"],
    icon: "🧪",
    gradient: "from-red-600 to-orange-500",
    slug: "banco-pruebas-telemetria",
  },

  {
    title: "Dotfiles para Hyprland",
    subtitle: "Personalización de Arch Linux",
    description: "Colección de archivos de configuración para optimizar y personalizar la experiencia en un sistema Arch Linux utilizando el compositor Hyprland.",
    features: [
      "Instalación automatizada con scripts",
      "Configuración de terminales y aplicaciones",
      "Personalización de entorno gráfico con Hyprland"
    ],
    tech: ["Bash", "Zsh", "Neovim", "Kitty", "Hyprland", "Waybar", "Fastfetch", "Rofi"],
    icon: "🎛️",
    gradient: "from-indigo-600 to-purple-800",
    slug: "hypr-dotfiles"
  },

  {
    title: "Lector Serial para Física",
    subtitle: "Serialización de datos en C puro",
    description:
      "Herramienta ligera para lectura y serialización de datos desde puerto serial, diseñada para experimentos de física y adquisición de datos en tiempo real.",
    features: [
      "Lectura eficiente desde puerto serial",
      "Serialización y deserialización de datos en C",
      "Manejo de buffers y control de flujo",
      "Código portable y sin dependencias externas",
    ],
    tech: ["C", "Serial Port", "Linux", "Buffer Management"],
    icon: "📟",
    gradient: "from-green-600 to-teal-500",
    slug: "lector-serial-fisica",
  },


  // === Legacy Projects ===
  {
    title: "ArckSpace (Legacy)",
    subtitle: "Landing page de exploración espacial",
    description:
      "Sitio promocional de una compañía ficticia de tecnología espacial, enfocado en la educación abierta.",
    features: [
      "Diseño responsivo",
      "Contenido educativo",
      "Despliegue en Netlify",
    ],
    tech: ["React", "CSS", "Netlify"],
    icon: "🛰️",
    gradient: "from-slate-500 to-gray-800",
    slug: "arckspace-landing",
  },
  {
    title: "Weather App (Legacy)",
    subtitle: "App del clima con API REST",
    description:
      "Aplicación simple para consultar el clima actual en múltiples países usando una API pública.",
    features: [
      "Integración con API de clima",
      "Interfaz responsiva",
      "Búsqueda por ciudad o país",
    ],
    tech: ["React", "API REST", "CSS"],
    icon: "🌤️",
    gradient: "from-sky-400 to-indigo-500",
    slug: "weather-app",
  },
  {
    title: "Dollment (Legacy)",
    subtitle: "Interfaz de banca digital",
    description:
      "Diseño de front-end para un banco digital con énfasis en rendimiento y navegación fluida.",
    features: [
      "Styled Components",
      "React Router",
      "Optimización de rendimiento",
    ],
    tech: ["React", "Styled Components", "React Router"],
    icon: "🏦",
    gradient: "from-rose-400 to-fuchsia-500",
    slug: "dollment-bank-ui",
  },
  {
    title: "Coffe Blog (Legacy)",
    subtitle: "Blog simple con HTML y CSS",
    description:
      "Blog estático desarrollado con fines didácticos, centrado en diseño responsive y estructura semántica.",
    features: [
      "Maquetación básica con HTML/CSS",
      "Enfoque en responsividad",
      "Ideal para principiantes",
    ],
    tech: ["HTML", "CSS"],
    icon: "☕",
    gradient: "from-amber-700 to-yellow-500",
    slug: "coffe-blog",
  },
  {
    title: "Cripto Cotizador (Legacy)",
    subtitle: "Consulta de criptomonedas en tiempo real",
    description:
      "App React para cotizar criptomonedas en múltiples monedas usando APIs externas.",
    features: [
      "Precios actualizados al instante",
      "Estilos modernos",
      "Interfaz ligera",
    ],
    tech: ["React", "Styled Components", "API REST"],
    icon: "💰",
    gradient: "from-yellow-500 to-emerald-600",
    slug: "cripto-cotizador",
  },
  {
    title: "Image Bank (Legacy)",
    subtitle: "Banco de imágenes con Pixabay",
    description:
      "Buscador de imágenes gratuito conectado a la API de Pixabay, con filtros por categorías.",
    features: [
      "Búsqueda por palabra clave",
      "Descarga de imágenes",
      "Diseño accesible",
    ],
    tech: ["React", "API REST", "CSS"],
    icon: "🖼️",
    gradient: "from-green-400 to-teal-500",
    slug: "image-bank",
  },
]
