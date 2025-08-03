import {
  Cpu,
  Database,
  Cloud,
  Zap,
  Settings,
  Monitor,
  Wifi,
  Camera,
  Shield,
  BarChart3,
  Globe,
  Search,
  Filter,
  Download
} from "lucide-react"

export const projectsData = {
  "drone-xbee-controller": {
    title: "Sistema Dron Anti incendios",
    subtitle: "Sistema de Control Autónomo con ESP32",
    description:
      "Sistema avanzado de control remoto para desplegador utilizando comunicación Xbee de largo alcance, diseñado para operar en entornos sin conectividad Wi-Fi con capacidades de despliegue seguro de bombas anti incendios y sistemas de seguridad redundantes.",
    image: "/pictures/incendio_forestal.png",
    tech: ["ESP32", "Xbee", "C++", "GPS", "IMU", "PID Control"],
    status: "Completado",
    year: "2024",
    category: "Sistemas Embebidos",
    gradient: "from-cyan-500 to-blue-500",
    icon: "🚁",
    overview:
      "Este proyecto surge de la necesidad de controlar drones en áreas remotas donde la conectividad Wi-Fi es limitada o inexistente. Utilizando tecnología LoRa, el sistema puede mantener comunicación estable hasta 10km en campo abierto.",
    features: [
      {
        title: "Comunicación LoRa de Largo Alcance",
        description: "Implementación de protocolo LoRa con alcance de hasta 10km en campo abierto",
        icon: <Wifi className="w-5 h-5" />,
      },
      {
        title: "Control Autónomo con Waypoints",
        description: "Sistema de navegación autónoma con planificación de rutas y waypoints GPS",
        icon: <Settings className="w-5 h-5" />,
      },
      {
        title: "Sistema Fail-Safe Redundante",
        description: "Múltiples niveles de seguridad incluyendo RTH automático y aterrizaje de emergencia",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        title: "Telemetría en Tiempo Real",
        description: "Monitoreo continuo de batería, GPS, sensores IMU y estado del sistema",
        icon: <Monitor className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: [
        "ESP32-WROOM-32 como controlador principal",
        "Módulo LoRa SX1276 para comunicación",
        "GPS NEO-8M para posicionamiento",
        "IMU MPU6050 para estabilización",
        "Controlador de vuelo personalizado",
      ],
      software: [
        "FreeRTOS para multitarea en tiempo real",
        "Protocolo de comunicación personalizado",
        "Algoritmos PID para control de vuelo",
        "Sistema de waypoints con A* pathfinding",
        "Interfaz de control ground station",
      ],
    },
    challenges: [
      {
        problem: "Latencia en comunicación LoRa",
        solution: "Implementación de buffer predictivo y compensación de delay",
      },
      {
        problem: "Consumo energético del ESP32",
        solution: "Optimización de código y uso de modos de bajo consumo",
      },
      {
        problem: "Interferencia electromagnética",
        solution: "Filtrado de señales y blindaje de componentes críticos",
      },
    ],
    results: [
      "Alcance de comunicación: 8.5km en pruebas reales",
      "Autonomía de vuelo: 25 minutos con batería 3S 2200mAh",
      "Precisión GPS: ±2 metros en condiciones normales",
      "Tiempo de respuesta: <200ms para comandos críticos",
    ],
    codeSnippets: [
      {
        title: "Configuración LoRa",
        language: "cpp",
        code: `// Configuración del módulo LoRa
void setupLoRa() {
  LoRa.setPins(SS, RST, DI0);
  if (!LoRa.begin(915E6)) {
    Serial.println("LoRa init failed!");
    return;
  }
  LoRa.setSpreadingFactor(12);
  LoRa.setSignalBandwidth(125E3);
  LoRa.setCodingRate4(8);
  LoRa.setTxPower(20);
}`,
      },
      {
        title: "Control PID",
        language: "cpp",
        code: `// Controlador PID para estabilización
float pidControl(float setpoint, float input, PIDParams* pid) {
  float error = setpoint - input;
  pid->integral += error * pid->dt;
  float derivative = (error - pid->lastError) / pid->dt;
  
  float output = pid->kp * error + 
                 pid->ki * pid->integral + 
                 pid->kd * derivative;
  
  pid->lastError = error;
  return constrain(output, -100, 100);
}`,
      },
    ],
  },
  "robotic-arm-simulator": {
    title: "Simulador 3D de Brazo Robótico",
    subtitle: "Intel RealSense + Control Adaptativo",
    description:
      "Sistema avanzado de simulación y control de brazo robótico con integración de cámara Intel RealSense para mapeo 3D en tiempo real y control adaptativo basado en visión computacional.",
    image: "/placeholder.svg?height=400&width=800&text=Robotic+Arm+Simulator",
    tech: ["Python", "OpenCV", "Intel RealSense", "PyQt5", "NumPy", "Open3D", "Robotics Toolbox"],
    status: "Completado",
    year: "2023",
    category: "Robótica & IA",
    gradient: "from-purple-500 to-pink-500",
    icon: "🦾",
    overview:
      "Desarrollo de un sistema completo de simulación y control para brazo robótico de 6 DOF, integrando visión computacional avanzada para detección de objetos y planificación de trayectorias en tiempo real.",
    features: [
      {
        title: "Integración Intel RealSense",
        description: "Captura y procesamiento de nubes de puntos 3D para mapeo del entorno",
        icon: <Camera className="w-5 h-5" />,
      },
      {
        title: "Simulación 3D en Tiempo Real",
        description: "Renderizado 3D interactivo con física realista y detección de colisiones",
        icon: <Cpu className="w-5 h-5" />,
      },
      {
        title: "Control PID Adaptativo",
        description: "Algoritmos de control que se adaptan a diferentes cargas y condiciones",
        icon: <Settings className="w-5 h-5" />,
      },
      {
        title: "Planificación de Trayectorias",
        description: "Algoritmos avanzados para planificación óptima de movimientos",
        icon: <BarChart3 className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: [
        "Intel RealSense D435i para captura 3D",
        "Brazo robótico de 6 DOF personalizado",
        "Servomotores de alta precisión",
        "Controladores de motor con feedback",
        "Sistema de procesamiento Intel NUC",
      ],
      software: [
        "OpenCV para procesamiento de imágenes",
        "Open3D para manipulación de nubes de puntos",
        "PyQt5 para interfaz de usuario",
        "Robotics Toolbox para cinemática",
        "NumPy/SciPy para cálculos matemáticos",
      ],
    },
    challenges: [
      {
        problem: "Calibración precisa de la cámara",
        solution: "Implementación de calibración automática con patrones de referencia",
      },
      {
        problem: "Procesamiento en tiempo real",
        solution: "Optimización de algoritmos y uso de threading para paralelización",
      },
      {
        problem: "Precisión en el control",
        solution: "Implementación de control adaptativo con compensación de errores",
      },
    ],
    results: [
      "Precisión de posicionamiento: ±0.5mm",
      "Tiempo de procesamiento: <50ms por frame",
      "Detección de objetos: 95% de precisión",
      "Planificación de trayectorias: <100ms para rutas complejas",
    ],
    codeSnippets: [
      {
        title: "Captura RealSense",
        language: "python",
        code: `import pyrealsense2 as rs
import numpy as np

def setup_realsense():
    pipeline = rs.pipeline()
    config = rs.config()
    
    config.enable_stream(rs.stream.depth, 640, 480, rs.format.z16, 30)
    config.enable_stream(rs.stream.color, 640, 480, rs.format.bgr8, 30)
    
    pipeline.start(config)
    return pipeline

def get_point_cloud(pipeline):
    frames = pipeline.wait_for_frames()
    depth_frame = frames.get_depth_frame()
    color_frame = frames.get_color_frame()
    
    pc = rs.pointcloud()
    points = pc.calculate(depth_frame)
    return points`,
      },
      {
        title: "Control Cinemático",
        language: "python",
        code: `def inverse_kinematics(target_pos, target_orient):
    """Cálculo de cinemática inversa para 6 DOF"""
    
    # Parámetros DH del brazo robótico
    dh_params = np.array([
        [0, 0, 0.1, 0],
        [0, np.pi/2, 0, 0],
        [0.3, 0, 0, 0],
        [0.25, 0, 0, np.pi/2],
        [0, np.pi/2, 0.1, 0],
        [0, 0, 0.05, 0]
    ])
    
    # Algoritmo iterativo de Newton-Raphson
    joint_angles = np.zeros(6)
    for i in range(100):  # máximo 100 iteraciones
        current_pose = forward_kinematics(joint_angles, dh_params)
        error = target_pos - current_pose[:3, 3]
        
        if np.linalg.norm(error) < 0.001:
            break
            
        jacobian = compute_jacobian(joint_angles, dh_params)
        delta_q = np.linalg.pinv(jacobian) @ error
        joint_angles += 0.1 * delta_q
    
    return joint_angles`,
      },
    ],
  },
  "modular-erp-system": {
    title: "ERP Modular con Spring Boot",
    subtitle: "Backend Escalable + AWS Deployment",
    description:
      "Sistema ERP empresarial completo con arquitectura de microservicios, desarrollado con Spring Boot y desplegado en AWS. Incluye módulos de inventario, facturación, CRM y análisis de datos.",
    image: "/placeholder.svg?height=400&width=800&text=Modular+ERP+System",
    tech: ["Spring Boot", "Java 17", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes", "JWT"],
    status: "En Producción",
    year: "2024",
    category: "Desarrollo Backend",
    gradient: "from-blue-500 to-cyan-500",
    icon: "💼",
    overview:
      "Desarrollo de un sistema ERP modular desde cero para Cardic Automotriz, diseñado para manejar operaciones complejas de inventario, ventas, facturación y análisis de datos con alta disponibilidad y escalabilidad.",
    features: [
      {
        title: "Arquitectura de Microservicios",
        description: "Sistema modular con servicios independientes para cada funcionalidad",
        icon: <Database className="w-5 h-5" />,
      },
      {
        title: "APIs REST Escalables",
        description: "APIs RESTful con documentación OpenAPI y versionado",
        icon: <Globe className="w-5 h-5" />,
      },
      {
        title: "Seguridad JWT Integrada",
        description: "Autenticación y autorización basada en tokens JWT",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        title: "Despliegue Automatizado",
        description: "CI/CD completo con Docker y Kubernetes en AWS",
        icon: <Cloud className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: [
        "AWS ECS para orquestación de contenedores",
        "RDS PostgreSQL para base de datos principal",
        "ElastiCache Redis para caché",
        "Application Load Balancer",
        "CloudWatch para monitoreo",
      ],
      software: [
        "Spring Boot 3.0 con Java 17",
        "Spring Security para autenticación",
        "Spring Data JPA para persistencia",
        "Docker para containerización",
        "Jenkins para CI/CD",
      ],
    },
    modules: [
      {
        name: "Gestión de Inventario",
        description: "Control completo de stock, movimientos y alertas automáticas",
        endpoints: ["/api/v1/inventory", "/api/v1/products", "/api/v1/stock"],
      },
      {
        name: "Sistema de Facturación",
        description: "Generación automática de facturas con integración SAT",
        endpoints: ["/api/v1/invoices", "/api/v1/billing", "/api/v1/payments"],
      },
      {
        name: "CRM y Ventas",
        description: "Gestión de clientes, cotizaciones y seguimiento de ventas",
        endpoints: ["/api/v1/customers", "/api/v1/sales", "/api/v1/quotes"],
      },
      {
        name: "Análisis y Reportes",
        description: "Dashboard con métricas en tiempo real y reportes personalizados",
        endpoints: ["/api/v1/analytics", "/api/v1/reports", "/api/v1/metrics"],
      },
    ],
    challenges: [
      {
        problem: "Escalabilidad horizontal",
        solution: "Implementación de microservicios con load balancing automático",
      },
      {
        problem: "Consistencia de datos",
        solution: "Patrón Saga para transacciones distribuidas",
      },
      {
        problem: "Monitoreo y observabilidad",
        solution: "Integración con CloudWatch y métricas personalizadas",
      },
    ],
    results: [
      "Tiempo de respuesta promedio: <200ms",
      "Disponibilidad: 99.9% uptime",
      "Capacidad: 10,000+ transacciones/hora",
      "Reducción de costos operativos: 40%",
    ],
    codeSnippets: [
      {
        title: "Configuración de Seguridad",
        language: "java",
        code: `@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/public/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/v1/products/**").hasRole("USER")
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));
        
        return http.build();
    }
}`,
      },
      {
        title: "Servicio de Inventario",
        language: "java",
        code: `@Service
@Transactional
public class InventoryService {
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private StockMovementRepository stockMovementRepository;
    
    @Cacheable(value = "products", key = "#productId")
    public ProductDto getProduct(Long productId) {
        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new ProductNotFoundException(productId));
        return ProductMapper.toDto(product);
    }
    
    @CacheEvict(value = "products", key = "#stockMovement.productId")
    public void updateStock(StockMovementDto stockMovement) {
        Product product = productRepository.findById(stockMovement.getProductId())
            .orElseThrow(() -> new ProductNotFoundException(stockMovement.getProductId()));
        
        // Validar stock disponible
        if (stockMovement.getType() == MovementType.OUT && 
            product.getCurrentStock() < stockMovement.getQuantity()) {
            throw new InsufficientStockException(product.getId());
        }
        
        // Actualizar stock
        int newStock = stockMovement.getType() == MovementType.IN 
            ? product.getCurrentStock() + stockMovement.getQuantity()
            : product.getCurrentStock() - stockMovement.getQuantity();
        
        product.setCurrentStock(newStock);
        productRepository.save(product);
        
        // Registrar movimiento
        StockMovement movement = StockMovementMapper.toEntity(stockMovement);
        stockMovementRepository.save(movement);
        
        // Verificar alertas de stock bajo
        checkLowStockAlert(product);
    }
}`,
      },
    ],
  },
  "ground-station-telemetry": {
    title: "Estación de Tierra – Visualización de Telemetría",
    subtitle: "Streaming en Tiempo Real para Cohetes Experimentales",
    description:
      "Plataforma completa desarrollada para la recepción, visualización y análisis en tiempo real de datos telemétricos provenientes de cohetes. Usa WebSockets para comunicación en vivo, FastAPI para el backend, y React para el frontend.",
    image: "/images/ground-station-telemetry.png", // Reemplázalo con una captura real
    tech: ["Python", "React", "FastAPI", "WebSockets", "D3.js", "InfluxDB", "Docker"],
    status: "Completado",
    year: "2024",
    category: "Visualización de Datos / Sistemas Espaciales",
    gradient: "from-indigo-500 to-purple-500",
    icon: "🚀",
    overview:
      "Este sistema fue desarrollado como parte de un entorno de pruebas para cohetes experimentales. Permite recibir datos en tiempo real desde una unidad transmisora LoRa, visualizarlos en gráficos dinámicos y almacenar series temporales para análisis posteriores.",
    features: [
      {
        title: "WebSocket Server Reactivo",
        description: "Transmisión en tiempo real de datos con baja latencia (<40ms) desde hardware LoRa vía serial.",
        icon: <Zap className="w-5 h-5" />,
      },
      {
        title: "Dashboard de Telemetría",
        description: "Interfaz gráfica que representa múltiples sensores con D3.js y React, actualizándose en vivo.",
        icon: <BarChart3 className="w-5 h-5" />,
      },
      {
        title: "Soporte Multi-sensor",
        description: "Procesamiento y separación de canales de sensores: IMU, GPS, presión, temperatura, eventos de vuelo.",
        icon: <Cpu className="w-5 h-5" />,
      },
      {
        title: "Integración con InfluxDB",
        description: "Almacenamiento de series temporales y consulta eficiente de datos post-vuelo.",
        icon: <Database className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: [
        "Módulo transmisor LoRa conectado a sensores",
        "Receptor LoRa vía UART",
        "Servidor local ejecutando backend de datos",
        "Cliente en navegador visualizando gráficos",
      ],
      software: [
        "Backend en FastAPI con WebSocket para transmisión en vivo",
        "React frontend con gráficos en tiempo real",
        "InfluxDB como base de datos temporal",
        "Docker para contenerización de backend y base de datos",
      ],
    },
    dataStreams: [
      {
        name: "Sensores de Vuelo",
        frequency: "50–100 Hz",
        parameters: ["Altura", "Velocidad", "Aceleración", "Actitud"],
        visualization: "Gráficos de línea y gauges en vivo",
      },
      {
        name: "Sistema de Propulsión",
        frequency: "20–50 Hz",
        parameters: ["Presión", "Temperatura", "Estado de válvulas"],
        visualization: "Alertas y medidores circulares",
      },
      {
        name: "Eventos de Recuperación",
        frequency: "1–10 Hz",
        parameters: ["Liberación de paracaídas", "Altura máxima", "Velocidad terminal"],
        visualization: "Log de eventos y mapas",
      },
    ],
    challenges: [
      {
        problem: "Desincronización de datos entre módulos",
        solution: "Buffer intermedio con timestamping y corrección de deriva temporal",
      },
      {
        problem: "Baja tasa de refresco en frontend",
        solution: "Uso de throttling y D3.js para actualizaciones por lote eficientes",
      },
      {
        problem: "Persistencia inconsistente",
        solution: "Integración con InfluxDB y backups automáticos para cada vuelo",
      },
    ],
    results: [
      "Latencia promedio: <40 ms",
      "Visualización en tiempo real con >95% estabilidad",
      "Historial de más de 20 vuelos almacenados exitosamente",
      "Plataforma escalable a sensores adicionales sin cambios estructurales",
    ],
    codeSnippets: [
      {
        title: "Servidor WebSocket en FastAPI",
        language: "python",
        code: `from fastapi import FastAPI, WebSocket
app = FastAPI()

clients = []

@app.websocket("/ws")
async def ws_endpoint(ws: WebSocket):
    await ws.accept()
    clients.append(ws)
    try:
        while True:
            data = await ws.receive_text()
            for c in clients:
                await c.send_text(data)
    except:
        clients.remove(ws)`,
      },
      {
        title: "Recepción Serial y Broadcast",
        language: "python",
        code: `import serial, asyncio
import websockets

async def serial_reader():
    ser = serial.Serial('/dev/ttyUSB0', 115200)
    async with websockets.connect("ws://localhost:8000/ws") as ws:
        while True:
            line = ser.readline().decode().strip()
            await ws.send(line)

asyncio.run(serial_reader())`,
      },
    ],
  },

  "banco-pruebas-telemetria": {
    title: "Banco de Pruebas – Telemetría de Motor",
    subtitle: "Serialización en C++ + Análisis en Python",
    description:
      "Software diseñado para capturar datos de galgas de fuerza en pruebas de motor utilizando lectura serial desde Hx711, serialización en C++ y análisis avanzado en Python mediante Jupyter notebooks.",
    image: "/images/banco-pruebas-telemetria.png", // puedes reemplazar con una captura real del dashboard o gráfico
    tech: ["C++", "Serial Port Programming", "Hx711 driver", "Python", "Jupyter Notebook", "Pandas", "NumPy"],
    status: "Completado",
    year: "2025",
    category: "Telemetría / Análisis de Datos",
    gradient: "from-red-600 to-orange-500",
    icon: "🧪",
    overview:
      "Sistema completo empleado por Antares Aerospace para la adquisición de datos de galgas en motores durante pruebas de propulsión. Extrae lecturas cada decisegundo desde un amplificador Hx711, las serializa en C++ y luego analiza empuje e impulso total automáticamente.",
    features: [
      {
        title: "Lectura Serial desde Hx711",
        description: "Captura de datos de galga de hasta 100 Hz vía puerto serial UART.",
        icon: <Monitor className="w-5 h-5" />,
      },
      {
        title: "Serialización en C++",
        description: "Estructuras de datos robustas empaquetadas con checksum para integridad.",
        icon: <Zap className="w-5 h-5" />,
      },
      {
        title: "Análisis Automático en Python",
        description: "Jupyter notebooks que calculan empuje máximo, impulso específico y visualizan curvas.",
        icon: <BarChart3 className="w-5 h-5" />,
      },
      {
        title: "Pipeline completo de pruebas",
        description: "Desde lectura hasta reporte final, sin intervención manual significativa.",
        icon: <Database className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: [
        "Galga de fuerza conectada a HX711",
        "Microcontrolador o PC con UART",
        "Puerto serial conectado a software C++",
        "Servidor local para procesamiento Python/post‑análisis",
      ],
      software: [
        "C++ para gestión de lectura y serialización",
        "Protocolos con checksum simples",
        "Python con Pandas/NumPy y Jupyter para análisis",
        "Bash scripts para automatización post‑prueba",
      ],
    },
    challenges: [
      {
        problem: "Ruido y fluctuaciones en datos",
        solution: "Promedio por decisegundo y validación con checksum",
      },
      {
        problem: "Serialización robusta sin librerías externas",
        solution: "Serialización manual en C++ con estructuras controladas",
      },
      {
        problem: "Automatización del análisis post‑prueba",
        solution: "Notebooks predefinidos y scripts integrados para reportes automáticos",
      },
    ],
    results: [
      "Lectura estable hasta 10 muestras por segundo",
      "Análisis automático en menos de 2 minutos",
      "Cálculo de métricas clave: empuje máximo, impulso específico",
      "Reutilizable para distintos bancos y configuraciones",
    ],
    codeSnippets: [
      {
        title: "Lectura Serial en C++",
        language: "cpp",
        code: `std::ifstream serial("/dev/ttyUSB0");
SensorData data;
while (std::getline(serial, line)) {
  // parse decimal datos y checksum
  // almacenar en estructura
}`,
      },
      {
        title: "Notebook de Análisis en Python",
        language: "python",
        code: `import pandas as pd

df = pd.read_csv("datos.csv")
df["emp_max"] = df["fuerza"].max()
df["impulso"] = df["fuerza"].sum() * dt
df.plot(x="tiempo", y="fuerza")`,
      },
    ],
  },

  "hypr-dotfiles": {
    title: "Dotfiles para Hyprland",
    subtitle: "Personalización de Arch Linux",
    description: "Este repositorio contiene una colección de archivos de configuración diseñados para personalizar y optimizar la experiencia en un sistema Arch Linux utilizando el compositor Hyprland. Incluye scripts de instalación, configuraciones para terminales, aplicaciones y el entorno gráfico.",
    image: "/pictures/hypr-dotfiles.png",
    video: "https://www.youtube.com/embed/uZOv_JpFI58",
    tech: ["Bash", "Zsh", "Neovim", "Kitty", "Hyprland", "Waybar", "Fastfetch", "Rofi"],
    status: "En desarrollo",
    year: "2024",
    category: "Configuración de Sistemas",
    gradient: "from-indigo-600 to-purple-800",
    icon: "🎛️",
    overview: "Este proyecto busca proporcionar una configuración optimizada y personalizada para usuarios de Arch Linux que deseen utilizar Hyprland como su compositor. A través de scripts automatizados, se facilita la instalación y configuración de diversas herramientas y aplicaciones esenciales.",
    features: [
      {
        title: "Instalación Automatizada",
        description: "Scripts que automatizan la instalación de dependencias y la configuración del sistema.",
        icon: "⚙️"
      },
      {
        title: "Configuración de Terminales",
        description: "Archivos de configuración para Neovim, Zsh y Kitty, adaptados a un flujo de trabajo eficiente.",
        icon: "💻"
      },
      {
        title: "Entorno Gráfico Personalizado",
        description: "Configuraciones para Hyprland, Waybar y Fastfetch, ofreciendo una experiencia visual atractiva y funcional.",
        icon: "🎨"
      }
    ],
    architecture: {
      hardware: [
        "Procesador compatible con Arch Linux",
        "Memoria RAM adecuada para multitarea",
        "Dispositivo de almacenamiento con suficiente espacio"
      ],
      software: [
        "Arch Linux como sistema operativo base",
        "Hyprland como compositor",
        "Kitty como emulador de terminal",
        "Neovim como editor de texto",
        "Zsh como shell",
        "Waybar como barra de estado",
        "Fastfetch para información del sistema",
        "Rofi como lanzador de aplicaciones"
      ]
    },
    challenges: [
      {
        problem: "Compatibilidad con diversas configuraciones de hardware",
        solution: "Pruebas exhaustivas y ajustes específicos en los scripts de instalación."
      },
      {
        problem: "Mantenimiento y actualización de configuraciones",
        solution: "Implementación de un sistema de versiones y documentación clara."
      }
    ],
    results: [
      "Instalación exitosa en múltiples entornos de prueba.",
      "Configuraciones adaptables a diferentes necesidades de usuario.",
      "Documentación detallada para facilitar la personalización."
    ],
    codeSnippets: [
      {
        title: "Script de Instalación para Arch Linux",
        language: "bash",
        code: "sudo pacman -Syu\nsudo pacman -S hyprland rofi waybar fastfetch kitty neovim zsh"
      },
      {
        title: "Configuración de Zsh",
        language: "zsh",
        code: "source $ZSH/oh-my-zsh.sh\nplugins=(git zsh-autosuggestions zsh-syntax-highlighting)\nZSH_THEME=\"agnoster\""
      }
    ]
  },

  // Formato completo
  "lector-serial-fisica": {
    title: "Lector Serial para Física",
    subtitle: "Serialización eficiente de datos en C puro",
    description:
      "Proyecto en C para lectura y serialización de datos a través de puerto serial, orientado a la adquisición y análisis de datos en experimentos físicos con microcontroladores y sensores.",
    image: "/images/lector-serial-fisica.png", // puedes usar captura propia
    tech: ["C", "Serial Port Programming", "Linux", "Buffer Management", "POSIX"],
    status: "Completado",
    year: "2024",
    category: "Sistemas Embebidos / Software de Bajo Nivel",
    gradient: "from-green-600 to-teal-500",
    icon: "📟",
    overview:
      "El proyecto implementa un lector serial que gestiona buffers de datos con serialización y deserialización de estructuras, optimizando la transferencia de datos en sistemas embebidos y experimentos físicos.",
    features: [
      {
        title: "Lectura Serial Estable",
        description: "Manejo robusto del puerto serial con configuraciones POSIX para control de velocidad y paridad",
        icon: <Monitor className='w-5 h-5' />,
      },
      {
        title: "Serialización y Deserialización",
        description: "Implementación manual de empaquetado y desempacado de datos en C para estructuras complejas",
        icon: <Zap className='w-5 h-5' />,
      },
      {
        title: "Gestión de Buffers",
        description: "Control eficiente de buffers circulares para evitar pérdidas y garantizar integridad",
        icon: <Settings className='w-5 h-5' />,
      },
      {
        title: "Portabilidad y Eficiencia",
        description: "Código limpio en C puro sin dependencias, compatible con sistemas Linux y embebidos",
        icon: <Cpu className='w-5 h-5' />,
      },
    ],
    architecture: {
      hardware: [
        "Microcontroladores con UART",
        "Sensores conectados por puerto serial",
        "PC o sistema Linux para lectura y análisis",
      ],
      software: [
        "Programación POSIX para manejo de puertos seriales",
        "Manejo manual de buffers circulares en C",
        "Serialización basada en memcpy y castings",
        "Scripts de prueba en bash y Python para verificación",
      ],
    },
    challenges: [
      {
        problem: "Ruido y pérdida de datos seriales",
        solution: "Implementación de buffers circulares y control de flujo para evitar pérdidas",
      },
      {
        problem: "Sincronización de paquetes",
        solution: "Protocolos simples con cabeceras y checksums para validar integridad",
      },
      {
        problem: "Compatibilidad entre plataformas",
        solution: "Uso exclusivo de librerías POSIX estándar y C puro para máxima portabilidad",
      },
    ],
    results: [
      "Lectura serial estable a 115200 baudios",
      "Serialización eficiente con <1% overhead",
      "Compatibilidad multiplataforma garantizada",
      "Código modular y reutilizable para futuros proyectos",
    ],
    codeSnippets: [
      {
        title: "Configuración y apertura del puerto serial",
        language: "c",
        code: `int setup_serial(const char* port) {
  int fd = open(port, O_RDWR | O_NOCTTY);
  if (fd < 0) return -1;

  struct termios tty;
  memset(&tty, 0, sizeof tty);
  if (tcgetattr(fd, &tty) != 0) return -1;

  cfsetospeed(&tty, B115200);
  cfsetispeed(&tty, B115200);

  tty.c_cflag |= (CLOCAL | CREAD);
  tty.c_cflag &= ~CSIZE;
  tty.c_cflag |= CS8;
  tty.c_cflag &= ~PARENB;
  tty.c_cflag &= ~CSTOPB;
  tty.c_cflag &= ~CRTSCTS;

  tcsetattr(fd, TCSANOW, &tty);
  return fd;
}`,
      },
      {
        title: "Serialización básica de datos",
        language: "c",
        code: `typedef struct {
  uint16_t id;
  float value;
} SensorData;

void serialize_sensor_data(const SensorData* data, uint8_t* buffer) {
  memcpy(buffer, &data->id, sizeof(data->id));
  memcpy(buffer + sizeof(data->id), &data->value, sizeof(data->value));
}

void deserialize_sensor_data(const uint8_t* buffer, SensorData* data) {
  memcpy(&data->id, buffer, sizeof(data->id));
  memcpy(&data->value, buffer + sizeof(data->id), sizeof(data->value));
}`,
      },
    ],
  },


  "arckspace-landing": {
    title: "ArckSpace (Legacy)",
    subtitle: "Landing page de exploración espacial",
    description:
      "Sitio promocional de una compañía ficticia de tecnología espacial, enfocado en la educación abierta y divulgación científica.",
    image: "/placeholder.svg?height=400&width=800&text=ArckSpace+Landing",
    tech: ["React", "CSS", "Netlify"],
    status: "Completado",
    year: "2020",
    category: "Landing Page",
    gradient: "from-slate-500 to-gray-800",
    icon: "🛰️",
    overview:
      "Landing page estática para promoción de proyectos de exploración espacial, con enfoque en diseño limpio y accesibilidad.",
    features: [
      {
        title: "Diseño Responsivo",
        description: "Adaptado para todos los dispositivos con diseño fluido.",
        icon: <Monitor className="w-5 h-5" />,
      },
      {
        title: "Contenido Educativo",
        description: "Secciones con información sobre ciencia y tecnología espacial.",
        icon: <Globe className="w-5 h-5" />,
      },
      {
        title: "Despliegue en Netlify",
        description: "Hosting rápido y gratuito con CI/CD automático.",
        icon: <Cloud className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: ["Servidor web estático en Netlify"],
      software: ["React para UI", "CSS para estilos responsivos"],
    },
    challenges: [
      {
        problem: "Optimización para carga rápida",
        solution: "Minificación y uso de imágenes SVG optimizadas.",
      },
      {
        problem: "Mantener accesibilidad",
        solution: "Pruebas y ajustes según estándares WCAG.",
      },
    ],
    results: [
      "Tiempo de carga <1 segundo",
      "Alta tasa de retención de usuarios",
      "Excelente feedback de accesibilidad",
    ],
    codeSnippets: [
      {
        title: "Estructura básica React",
        language: "jsx",
        code: `function LandingPage() {
  return (
    <main className="container mx-auto p-4">
      <header>
        <h1>Bienvenido a ArckSpace</h1>
        <p>Exploración y ciencia espacial para todos</p>
      </header>
      <section>
        <h2>Proyectos Destacados</h2>
        {/* Contenido */}
      </section>
    </main>
  );
}`,
      },
    ],
  },

  "weather-app": {
    title: "Weather App (Legacy)",
    subtitle: "App del clima con API REST",
    description:
      "Aplicación simple para consultar el clima actual en múltiples países usando una API pública con interfaz responsiva y limpia.",
    image: "/placeholder.svg?height=400&width=800&text=Weather+App",
    tech: ["React", "API REST", "CSS"],
    status: "Completado",
    year: "2021",
    category: "Aplicaciones Web",
    gradient: "from-sky-400 to-indigo-500",
    icon: "🌤️",
    overview:
      "App para usuarios que desean obtener información meteorológica rápida, con datos de temperatura, humedad, viento y pronósticos básicos.",
    features: [
      {
        title: "Integración con API de clima",
        description: "Consulta de datos en tiempo real mediante OpenWeatherMap.",
        icon: <Cloud className="w-5 h-5" />,
      },
      {
        title: "Interfaz Responsiva",
        description: "Adaptada a móviles y desktop con diseño simple y efectivo.",
        icon: <Monitor className="w-5 h-5" />,
      },
      {
        title: "Búsqueda por Ciudad o País",
        description: "Permite al usuario buscar clima en cualquier lugar soportado.",
        icon: <Search className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: ["Servidor estático para hosting"],
      software: ["React para frontend", "Axios para consultas API", "CSS para estilos"],
    },
    challenges: [
      {
        problem: "Manejo de errores en API",
        solution: "Implementación de mensajes y estados de error amigables.",
      },
      {
        problem: "Optimización para móviles",
        solution: "Uso de diseño responsive y carga eficiente de recursos.",
      },
    ],
    results: [
      "Más de 2,000 usuarios activos mensuales",
      "Tiempo promedio de respuesta <800ms",
      "Alta satisfacción de usuarios según feedback",
    ],
    codeSnippets: [
      {
        title: "Función para obtener clima",
        language: "js",
        code: `import axios from "axios";

export async function fetchWeather(city) {
  try {
    const response = await axios.get(
      \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=TU_API_KEY&units=metric\`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}`,
      },
      {
        title: "Componente de visualización",
        language: "jsx",
        code: `function WeatherDisplay({ city }) {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    fetchWeather(city).then(setWeather);
  }, [city]);

  if (!weather) return <p>Cargando clima...</p>;

  return (
    <div>
      <h3>Clima en {city}</h3>
      <p>Temperatura: {weather.main.temp} °C</p>
      <p>Humedad: {weather.main.humidity} %</p>
      <p>Viento: {weather.wind.speed} m/s</p>
    </div>
  );
}`,
      },
    ],
  },

  "dollment-bank-ui": {
    title: "Dollment (Legacy)",
    subtitle: "Interfaz de banca digital",
    description:
      "Diseño de front-end para un banco digital, enfocado en rendimiento, navegación fluida y experiencia de usuario intuitiva.",
    image: "/placeholder.svg?height=400&width=800&text=Dollment+Bank+UI",
    tech: ["React", "Styled Components", "React Router"],
    status: "Completado",
    year: "2021",
    category: "Aplicaciones Web",
    gradient: "from-rose-400 to-fuchsia-500",
    icon: "🏦",
    overview:
      "Interfaz web para banca digital con componentes reutilizables, navegación SPA y optimizaciones para cargas rápidas.",
    features: [
      {
        title: "Styled Components",
        description: "Estilización modular y dinámica para componentes.",
        icon: <Settings className="w-5 h-5" />,
      },
      {
        title: "React Router",
        description: "Navegación rápida entre secciones sin recarga completa.",
        icon: <Zap className="w-5 h-5" />,
      },
      {
        title: "Optimización de Rendimiento",
        description: "Carga de componentes bajo demanda y memoización.",
        icon: <Cpu className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: ["Servidor web estático"],
      software: [
        "React para UI",
        "Styled Components para estilos",
        "React Router para navegación SPA",
      ],
    },
    challenges: [
      {
        problem: "Mantener experiencia fluida con datos dinámicos",
        solution: "Uso eficiente de hooks y estados locales para evitar renders innecesarios.",
      },
      {
        problem: "Consistencia visual en temas",
        solution: "Implementación de temas con Styled Components y contextos.",
      },
    ],
    results: [
      "Carga inicial <1.5s",
      "Navegación sin retrasos perceptibles",
      "Componentes reutilizables en múltiples proyectos",
    ],
    codeSnippets: [
      {
        title: "Ejemplo Styled Component",
        language: "jsx",
        code: `import styled from "styled-components";

const Button = styled.button\`
  background-color: #f72585;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b5179e;
  }
\`;

export default Button;`,
      },
      {
        title: "Uso de React Router",
        language: "jsx",
        code: `import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;`,
      },
    ],
  },

  "coffe-blog": {
    title: "Coffe Blog (Legacy)",
    subtitle: "Blog simple con HTML y CSS",
    description:
      "Blog estático desarrollado con fines didácticos, centrado en diseño responsive y estructura semántica para contenido legible.",
    image: "/placeholder.svg?height=400&width=800&text=Coffe+Blog",
    tech: ["HTML", "CSS"],
    status: "Completado",
    year: "2019",
    category: "Sitios Estáticos",
    gradient: "from-amber-700 to-yellow-500",
    icon: "☕",
    overview:
      "Blog con estructura simple para aprender maquetación básica y principios de diseño web responsive.",
    features: [
      {
        title: "Maquetación básica con HTML/CSS",
        description: "Estructura semántica y uso de estilos CSS puros.",
        icon: <Cpu className="w-5 h-5" />,
      },
      {
        title: "Enfoque en Responsividad",
        description: "Diseño adaptable para pantallas móviles y desktop.",
        icon: <Monitor className="w-5 h-5" />,
      },
      {
        title: "Ideal para principiantes",
        description: "Proyecto didáctico para aprender fundamentos web.",
        icon: <Settings className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: ["Hosting estático en GitHub Pages"],
      software: ["HTML5", "CSS3", "Git para control de versiones"],
    },
    challenges: [
      {
        problem: "Compatibilidad con navegadores antiguos",
        solution: "Uso de reset CSS y pruebas cross-browser.",
      },
      {
        problem: "Mantener diseño simple y limpio",
        solution: "Evitar sobrecarga de estilos y scripts innecesarios.",
      },
    ],
    results: [
      "Aprendizaje efectivo de maquetación web",
      "Proyecto base para otros desarrollos",
      "Feedback positivo de estudiantes y compañeros",
    ],
    codeSnippets: [
      {
        title: "Estructura HTML básica",
        language: "html",
        code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Coffe Blog</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>Coffe Blog</h1>
    <nav>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#articulos">Artículos</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <h2>Primer post</h2>
      <p>Contenido del blog aquí...</p>
    </article>
  </main>
  <footer>
    <p>© 2019 Coffe Blog</p>
  </footer>
</body>
</html>`,
      },
      {
        title: "CSS básico para responsividad",
        language: "css",
        code: `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header, footer {
  background-color: #ffc107;
  padding: 1rem;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
  }
}`,
      },
    ],
  },

  "image-bank": {
    title: "Image Bank",
    subtitle: "Banco de imágenes con Pixabay",
    description:
      "Buscador de imágenes gratuito con integración a la API de Pixabay, permitiendo búsquedas por palabra clave y filtrado por categorías con interfaz accesible y responsive.",
    image: "/placeholder.svg?height=400&width=800&text=Image+Bank",
    tech: ["React", "API REST", "CSS", "Pixabay API"],
    status: "Completado",
    year: "2022",
    category: "Aplicaciones Web",
    gradient: "from-green-400 to-teal-500",
    icon: "🖼️",
    overview:
      "Aplicación web para la búsqueda y descarga de imágenes libres, enfocada en experiencia de usuario fluida y filtros avanzados para facilitar la selección.",
    features: [
      {
        title: "Búsqueda por Palabra Clave",
        description: "Permite buscar imágenes por términos específicos con resultados instantáneos.",
        icon: <Search className="w-5 h-5" />,
      },
      {
        title: "Filtros por Categoría",
        description: "Filtra imágenes por categorías populares para facilitar la navegación.",
        icon: <Filter className="w-5 h-5" />,
      },
      {
        title: "Descarga Directa",
        description: "Descarga imágenes en alta resolución con un clic desde la interfaz.",
        icon: <Download className="w-5 h-5" />,
      },
      {
        title: "Diseño Accesible y Responsive",
        description: "Adaptable a dispositivos móviles y accesible para todos los usuarios.",
        icon: <Monitor className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: [
        "Servidor web estático en Netlify",
        "API de terceros Pixabay para datos de imágenes",
      ],
      software: [
        "React para interfaz de usuario",
        "Axios para manejo de peticiones HTTP",
        "CSS modular para estilos responsivos",
        "Componentes accesibles según WCAG",
      ],
    },
    challenges: [
      {
        problem: "Limitaciones de la API pública",
        solution: "Implementación de cache local y paginación para optimizar consultas",
      },
      {
        problem: "Carga lenta en redes móviles",
        solution: "Optimización de imágenes y lazy loading en la interfaz",
      },
      {
        problem: "Accesibilidad limitada en componentes",
        solution: "Revisión y ajuste de componentes para cumplimiento WCAG 2.1",
      },
    ],
    results: [
      "Tiempo de carga promedio: <1.5s",
      "Tasa de rebote reducida en 30%",
      "Más de 5,000 imágenes consultadas en primer mes",
      "Feedback positivo sobre accesibilidad",
    ],
    codeSnippets: [
      {
        title: "Petición a la API de Pixabay",
        language: "js",
        code: `import axios from "axios";

const API_KEY = "tu_api_key";
const API_URL = "https://pixabay.com/api/";

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        page: page,
        per_page: 20,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}`,
      },
      {
        title: "Componente de Búsqueda",
        language: "jsx",
        code: `function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar imágenes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Buscar imágenes"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}`,
      },
    ],
  },

  "cripto-cotizador": {
    title: "Cripto Cotizador",
    subtitle: "Consulta de criptomonedas en tiempo real",
    description:
      "Aplicación React para consultar el valor de criptomonedas principales en diferentes monedas fiduciarias usando APIs públicas y mostrar datos actualizados al instante.",
    image: "/placeholder.svg?height=400&width=800&text=Cripto+Cotizador",
    tech: ["React", "Styled Components", "API REST", "CoinGecko API"],
    status: "Completado",
    year: "2021",
    category: "Aplicaciones Web",
    gradient: "from-yellow-500 to-emerald-600",
    icon: "💰",
    overview:
      "App ligera y rápida que permite a usuarios consultar precios y gráficos básicos de criptomonedas, ideal para principiantes y entusiastas.",
    features: [
      {
        title: "Precios Actualizados al Instante",
        description: "Consulta automática de valores de criptomonedas con actualización en tiempo real.",
        icon: <Zap className="w-5 h-5" />,
      },
      {
        title: "Interfaz Moderna y Ligera",
        description: "Diseño limpio con componentes estilizados para mejorar la experiencia de usuario.",
        icon: <Monitor className="w-5 h-5" />,
      },
      {
        title: "Búsqueda de Criptomonedas",
        description: "Filtro rápido para encontrar cualquier moneda soportada.",
        icon: <Search className="w-5 h-5" />,
      },
      {
        title: "Compatibilidad Multimoneda",
        description: "Visualización de precios en USD, EUR, MXN, entre otros.",
        icon: <Globe className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: [
        "Hosting estático en Netlify",
        "API CoinGecko para datos de criptomonedas",
      ],
      software: [
        "React con Styled Components",
        "Axios para llamadas API",
        "Context API para manejo de estado",
        "Hooks personalizados para lógica",
      ],
    },
    challenges: [
      {
        problem: "Limitaciones de la API gratuita",
        solution: "Implementación de cache y throttling para evitar bloqueos",
      },
      {
        problem: "Sincronización de datos en tiempo real",
        solution: "Uso de intervalos y hooks para actualización periódica",
      },
      {
        problem: "Diseño responsivo en móviles",
        solution: "Ajustes específicos en CSS y componentes adaptativos",
      },
    ],
    results: [
      "Tiempo de carga inicial: <1.2s",
      "Más de 1,000 usuarios activos en primer trimestre",
      "Feedback positivo sobre UX/UI",
      "Reducción de errores en 20% gracias a validaciones",
    ],
    codeSnippets: [
      {
        title: "Hook para obtener precio",
        language: "js",
        code: `import { useState, useEffect } from "react";
import axios from "axios";

export function useCryptoPrice(coinId) {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get(
          \`https://api.coingecko.com/api/v3/simple/price?ids=\${coinId}&vs_currencies=usd,eur,mxn\`
        );
        setPrice(res.data[coinId]);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // actualiza cada minuto
    return () => clearInterval(interval);
  }, [coinId]);

  return price;
}`,
      },
      {
        title: "Componente de Visualización",
        language: "jsx",
        code: `function PriceDisplay({ coinId }) {
  const price = useCryptoPrice(coinId);

  if (!price) return <p>Cargando...</p>;

  return (
    <div>
      <h3>Precio de {coinId}</h3>
      <p>USD: {price.usd}</p>
      <p>EUR: {price.eur}</p>
      <p>MXN: {price.mxn}</p>
    </div>
  );
}`,
      },
    ],
  },

  "weather-app": {
    title: "Weather App",
    subtitle: "App del clima con API REST",
    description:
      "Aplicación web que permite consultar el clima actual y pronóstico extendido en múltiples ciudades usando una API pública, con interfaz limpia y responsive.",
    image: "/placeholder.svg?height=400&width=800&text=Weather+App",
    tech: ["React", "API REST", "CSS", "OpenWeatherMap API"],
    status: "Completado",
    year: "2021",
    category: "Aplicaciones Web",
    gradient: "from-sky-400 to-indigo-500",
    icon: "🌤️",
    overview:
      "App para usuarios que desean información meteorológica rápida y confiable, mostrando temperatura, humedad, viento y pronóstico para 5 días.",
    features: [
      {
        title: "Consulta por Ciudad o País",
        description: "Búsqueda flexible para obtener datos meteorológicos actuales y futuros.",
        icon: <Search className="w-5 h-5" />,
      },
      {
        title: "Interfaz Responsive",
        description: "Diseño adaptable para dispositivos móviles y escritorio.",
        icon: <Monitor className="w-5 h-5" />,
      },
      {
        title: "Pronóstico Extendio",
        description: "Visualización de datos por hora y por días siguientes.",
        icon: <BarChart3 className="w-5 h-5" />,
      },
      {
        title: "Actualización Automática",
        description: "Datos meteorológicos actualizados cada 10 minutos.",
        icon: <Zap className="w-5 h-5" />,
      },
    ],
    architecture: {
      hardware: [
        "Servidor web estático",
        "API pública OpenWeatherMap",
      ],
      software: [
        "React para interfaz",
        "Axios para llamadas API",
        "CSS para estilos responsivos",
        "Hooks para manejo de estado",
      ],
    },
    challenges: [
      {
        problem: "Limitaciones de la API gratuita",
        solution: "Manejo de errores y fallback para consultas fallidas",
      },
      {
        problem: "Latencia en conexión móvil",
        solution: "Optimización de llamadas y cache local",
      },
      {
        problem: "Diseño adaptable a múltiples dispositivos",
        solution: "Pruebas y ajustes de CSS responsivo",
      },
    ],
    results: [
      "Más de 2,000 usuarios activos mensuales",
      "Tiempo promedio de respuesta: 800ms",
      "Alta satisfacción por usabilidad",
      "Reducción de errores en consultas: 15%",
    ],
    codeSnippets: [
      {
        title: "Fetch Clima Actual",
        language: "js",
        code: `import axios from "axios";

export async function fetchWeather(city) {
  try {
    const response = await axios.get(
      \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=TU_API_KEY&units=metric\`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}`,
      },
      {
        title: "Componente de Display",
        language: "jsx",
        code: `function WeatherDisplay({ city }) {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    fetchWeather(city).then(setWeather);
  }, [city]);

  if (!weather) return <p>Cargando clima...</p>;

  return (
    <div>
      <h3>Clima en {city}</h3>
      <p>Temperatura: {weather.main.temp} °C</p>
      <p>Humedad: {weather.main.humidity} %</p>
      <p>Viento: {weather.wind.speed} m/s</p>
    </div>
  );
}`,
      },
    ],
  },

}