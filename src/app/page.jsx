"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import {
  ChevronDown,
  Mail,
  Linkedin,
  Download,
  Code,
  Rocket,
  Cpu,
  Database,
  Cloud,
  Terminal,
  User,
  Briefcase,
  Phone,
  Menu,
  X,
  ExternalLink,
  Github
} from "lucide-react"

import { projects_resume } from "@/data/projects_resume";

export default function Home() {

  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />

        {/* Subtle scanlines effect */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 212, 255, 0.03) 2px,
                rgba(0, 212, 255, 0.03) 4px
              )`,
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron"
              whileHover={{ scale: 1.05 }}
            >
              FernuDev
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Inicio" },
                { id: "about", label: "Sobre mí" },
                { id: "experience", label: "Experiencia" },
                { id: "projects", label: "Proyectos" },
                { id: "skills", label: "Tecnologías" },
                { id: "contact", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-cyan-400 relative ${
                    activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                      layoutId="activeTab"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="outline"
              size="sm"
              className="md:hidden border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-cyan-500/20"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {[
                  { id: "home", label: "Inicio" },
                  { id: "about", label: "Sobre mí" },
                  { id: "experience", label: "Experiencia" },
                  { id: "projects", label: "Proyectos" },
                  { id: "skills", label: "Tecnologías" },
                  { id: "contact", label: "Contacto" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left transition-all duration-300 hover:text-cyan-400 ${
                      activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>


      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">Fernu</span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Dev
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-cyan-300 mb-4 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Sr Software Developer & Engineering Lead
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Especializado en arquitectura de software para sistemas complejos, desde control de drones hasta
              soluciones empresariales escalables
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex justify-center"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className=" flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-3 text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border-0"
              >
                Explora mi trabajo
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron">
              <User className="inline-block w-8 h-8 mr-3 text-cyan-400" />
              Sobre mí
            </h2>

            <div className="rounded-2xl border-2 bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300">
              <div className="p-8">
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Soy un desarrollador de software especializado en arquitectura de sistemas complejos, con experiencia
                  en visión computacional, automatización y desarrollo de soluciones escalables. Mi enfoque combina
                  conocimientos técnicos profundos con metodologías ágiles para crear software robusto y eficiente.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-4 font-orbitron">Formación Académica</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span className="text-gray-300">Física - UNAM (en curso)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                        <span className="text-gray-300">Ingeniería Aeronáutica - IPN (en curso)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-4 font-orbitron">Habilidades Clave</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "C",
                        "C++",
                        "Linux",
                        "Python",
                        "Django",
                        "Java",
                        "Spring Boot",
                        "REST APIs",
                        "AWS",
                        "CI/CD",
                        "Embedded Systems",
                        "Computer Vision",
                      ].map((skill, i) => (
                        <div
                          key={i}
                          className="text-sm font-bold border-cyan-500/50 border px-2 rounded-4xl text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron">
              <Briefcase className="inline-block w-8 h-8 mr-3 text-cyan-400" />
              Experiencia Profesional
            </h2>

            <div className="space-y-8">
              {[
                {
                  company: "Cardic Automotriz",
                  period: "Mar 2025 – Actualidad",
                  role: "Engineering Lead",
                  description: "Diseño y desarrollo de ERP completo para el sector automotriz",
                  achievements: [
                    "Desarrollo de ERP desde cero con Python y Spring Boot",
                    "Automatización de procesos de ventas y logística",
                    "Implementación de APIs REST escalables",
                    "Configuración de CI/CD y DevOps workflows",
                  ],
                  gradient: "from-cyan-500 to-blue-500",
                },
                {
                  company: "Antares Aerospace",
                  period: "Sept 2023 – Actualidad",
                  role: "Software Engineer",
                  description: "Sistemas de misión y telemetría en tiempo real",
                  achievements: [
                    "Desarrollo de sistemas de misión aeroespacial",
                    "Integración de telemetría en tiempo real",
                    "Visualización de datos de vuelo complejos",
                    "Arquitectura de software para sistemas críticos",
                  ],
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  company: "BEIFI (IPN)",
                  period: "2022 – 2023",
                  role: "Desarrollador de Robótica",
                  description: "Internado técnico en robótica UAV",
                  achievements: [
                    "Control autónomo de UAVs con ESP32",
                    "Algoritmos de navegación y control PID",
                    "Integración de sensores y actuadores",
                    "Desarrollo de sistemas embebidos",
                  ],
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  company: "Imagination Wizards",
                  period: "2021 – 2022",
                  role: "Unity Developer",
                  description: "Desarrollo de videojuegos en Unity/C#",
                  achievements: [
                    "Lógica de gameplay en Unity/C#",
                    "Sistemas de física y colisiones",
                    "Interfaces de usuario interactivas",
                    "Optimización de rendimiento",
                  ],
                  gradient: "from-indigo-500 to-purple-500",
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-xl p-8 border-2 bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 group">
                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                          <div className="text-xl text-white font-orbitron group-hover:text-cyan-300 transition-colors">
                            {exp.company}
                          </div>
                          <div
                            className={`text-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}
                          >
                            {exp.role}
                          </div>
                        </div>
                        <div className="text-sm font-bold px-2 border rounded-2xl border-purple-500/50 text-purple-400 w-fit">
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start text-sm text-gray-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron">
              <Rocket className="inline-block w-8 h-8 mr-3 text-cyan-400" />
              Proyectos Personales
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects_resume.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-8 border rounded-2xl bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 h-full group">
                    <div>
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{project.icon}</div>
                        <div className="flex-1">
                          <h1 className="text-lg text-white font-orbitron group-hover:text-cyan-300 transition-colors">
                            {project.title}
                          </h1>
                          <div
                            className={`text-sm bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-semibold`}
                          >
                            {project.subtitle}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mt-3">{project.description}</p>
                    </div>
                    <div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Características:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="text-xs text-gray-400 flex items-center">
                                <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-purple-400 mb-2">Tecnologías:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <div
                                key={i}
                                className="font-bold px-2 border rounded-2xl border-cyan-500/50 text-cyan-400 text-xs hover:bg-cyan-500/10 transition-colors"
                              >
                                {tech}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-cyan-500/20">
                        <div
                          onClick={() => (window.location.href = `/projects/${project.slug}`)}
                          variant="outline"
                          className="flex justify-center p-2 border rounded-md bg-cyan-500/10 w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:cursor-pointer"
                        >
                          Ver detalles técnicos
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron">
              <Cpu className="inline-block w-8 h-8 mr-3 text-cyan-400" />
              Tecnologías que manejo
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "Lenguajes",
                  icon: <Code className="w-6 h-6" />,
                  skills: ["Python", "Java", "C/C++", "C#", "JavaScript"],
                  gradient: "from-cyan-500 to-blue-500",
                },
                {
                  category: "Frameworks",
                  icon: <Database className="w-6 h-6" />,
                  skills: ["Spring Boot", "REST API", "Unity", "Tailwind CSS"],
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  category: "Herramientas",
                  icon: <Cloud className="w-6 h-6" />,
                  skills: ["AWS", "Docker", "Git", "CI/CD", "ANSYS", "Linux"],
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  category: "Metodologías",
                  icon: <Terminal className="w-6 h-6" />,
                  skills: ["Scrum/Agile", "Computer Vision", "Sistemas Embebidos", "Control PID"],
                  gradient: "from-indigo-500 to-purple-500",
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="px-4 py-5 border rounded-xl bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 h-full group">
                    <div className="text-center">
                      <div
                        className={`flex justify-center mb-3 bg-gradient-to-r ${category.gradient} p-3 rounded-lg w-fit mx-auto`}
                      >
                        <div className="text-white">{category.icon}</div>
                      </div>
                      <div className="text-lg text-white font-orbitron group-hover:text-cyan-300 transition-colors">
                        {category.category}
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2">
                        {category.skills.map((skill, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-orbitron">
              <Phone className="inline-block w-8 h-8 mr-3 text-cyan-400" />
              Contacto
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-md bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6 font-orbitron">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <a
                        href="mailto:luis.fernando@ciencias.unam.mx"
                        className="text-gray-300 hover:text-green-400 transition-colors group-hover:text-green-400"
                      >
                        luis.fernando@ciencias.unam.mx
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <Linkedin className="w-5 h-5 text-cyan-400" />
                      <a
                        href="https://www.linkedin.com/in/luis-fernando-núñez-rangel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 transition-colors group-hover:text-green-400"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <Github className="w-5 h-5 text-cyan-400" />
                      <a
                        href="https://github.com/FernuDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 transition-colors group-hover:text-green-400"
                      >
                        GitHub Profile
                      </a>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                        className="w-fit px-8 py-3 flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 hover:cursor-pointer text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border-0"
                        href="/Cv_Luis_Fernando.pdf"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar CV
                    </a>
                  </div>
                </div>
              </div>

              <div className="border rounded-md bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300">
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-purple-400 mb-6 font-orbitron">Envía un Mensaje</h3>
                  <form
                    action="https://formsubmit.co/luis.fernando@ciencias.unam.mx"
                    method="POST" 
                    className="space-y-4"
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="http://localhost:3000/gracias" />

                    <div>
                      <input
                        name="nombre"
                        type="text"
                        placeholder="Nombre"
                        required
                        className="w-full p-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full p-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <textarea
                        name="mensaje"
                        placeholder="Mensaje"
                        rows={4}
                        required
                        className="w-full p-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none backdrop-blur-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 hover:cursor-pointer text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border-0"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-500/20 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm font-mono">
            © 2025 FernuDev. Built with <span className="text-cyan-400">{"<code/>"}</span> and{" "}
            <span className="text-purple-400">{"passion"}</span>
          </p>
          <p className="text-xs text-gray-500 mt-2 font-mono opacity-60">
            {"> system.status:"} <span className="text-green-400 dark:text-green-500">online</span>
            {"| version: 2.0.1 | uptime: ∞"}
          </p>
        </div>
      </footer>
    </div>
  );
}
