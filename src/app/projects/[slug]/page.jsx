"use client"
import { motion } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  Github,
  Code,
  Cpu,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projectsData } from "@/data/projects"
// Datos detallados de los proyectos

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug
  const project = projectsData[slug]

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <Button onClick={() => router.push("/")} className="bg-gradient-to-r from-cyan-500 to-purple-600">
            Volver al inicio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
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
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="border-cyan-500/50 bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al portafolio
            </Button>

            <div className="flex items-center space-x-4">
              <Badge className={`bg-gradient-to-r ${project.gradient} text-white`}>{project.status}</Badge>
              <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                {project.year}
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-6">{project.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron">
              <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.title}
              </span>
            </h1>
            <p className="text-xl text-cyan-300 mb-6">{project.subtitle}</p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl overflow-hidden">
              {
                project.video ?
                  <iframe
                    src={project.video}
                    title="Hypr Dotfiles"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-[30rem]"
                  />

                  :
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-80 md:h-96 object-cover object-center"
                  />
              }
            </Card>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-purple-400 font-orbitron">
              Tecnologías Utilizadas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tech.map((tech, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-colors text-sm px-4 py-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="relative z-10 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-8 bg-slate-900/40 border border-cyan-500/20">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 cursor-pointer"
              >
                Resumen
              </TabsTrigger>

              <TabsTrigger
                value="features"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 cursor-pointer"
              >
                Características
              </TabsTrigger>

              <TabsTrigger
                value="architecture"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 cursor-pointer"
              >
                Arquitectura
              </TabsTrigger>

              <TabsTrigger
                value="challenges"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 cursor-pointer"
              >
                Desafíos
              </TabsTrigger>

              <TabsTrigger
                value="results"
                className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400 cursor-pointer"
              >
                Resultados
              </TabsTrigger>

            </TabsList>

            <TabsContent value="overview">
              <Card className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white font-orbitron">Resumen del Proyecto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.overview}</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{project.year}</div>
                      <div className="text-gray-400">Año de desarrollo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">{project.status}</div>
                      <div className="text-gray-400">Estado actual</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{project.category}</div>
                      <div className="text-gray-400">Categoría</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features">
              <div className="grid md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                            <div className="text-white">{feature.icon}</div>
                          </div>
                          <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="architecture">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-cyan-400 font-orbitron flex items-center">
                      <Cpu className="w-5 h-5 mr-2" />
                      Hardware
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.architecture.hardware.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400 font-orbitron flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      Software
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.architecture.software.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Módulos específicos para ERP */}
              {slug === "modular-erp-system" && "modules" in project && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-orbitron">Módulos del Sistema</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(project).modules.map((module, i) => (
                      <Card key={i} className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="text-lg text-white">{module.name}</CardTitle>
                          <CardDescription className="text-gray-300">{module.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-purple-400">Endpoints principales:</h4>
                            {module.endpoints.map((endpoint, j) => (
                              <code key={j} className="block text-xs text-cyan-400 bg-slate-950/50 p-2 rounded">
                                {endpoint}
                              </code>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Streams de datos para telemetría */}
              {slug === "telemetry-visualization" && "dataStreams" in project && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-orbitron">Streams de Datos</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(project).dataStreams.map((stream, i) => (
                      <Card key={i} className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl">
                        <CardHeader>
                          <CardTitle className="text-lg text-white">{stream.name}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm">
                            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                              {stream.frequency}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400 mb-2">Parámetros:</h4>
                              <div className="flex flex-wrap gap-2">
                                {stream.parameters.map((param, j) => (
                                  <Badge key={j} variant="outline" className="border-blue-500/50 text-blue-400 text-xs">
                                    {param}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-purple-400 mb-1">Visualización:</h4>
                              <p className="text-gray-300 text-sm">{stream.visualization}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="challenges">
              <div className="space-y-6">
                {project.challenges.map((challenge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Card className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
                              <div className="w-3 h-3 bg-red-400 rounded-full mr-2" />
                              Problema
                            </h3>
                            <p className="text-gray-300">{challenge.problem}</p>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
                              <div className="w-3 h-3 bg-green-400 rounded-full mr-2" />
                              Solución
                            </h3>
                            <p className="text-gray-300">{challenge.solution}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="results">
              <Card className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white font-orbitron">Resultados y Métricas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.results.map((result, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3 p-4 bg-slate-950/50 rounded-lg border border-cyan-500/20"
                      >
                        <div className={`p-2 rounded-full bg-gradient-to-r ${project.gradient}`}>
                          <BarChart3 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">{result}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-slate-900/40 border-cyan-500/20 backdrop-blur-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white font-orbitron">¿Interesado en este proyecto?</h3>
              <p className="text-gray-300 mb-6">
                Si tienes preguntas sobre la implementación técnica o quieres discutir proyectos similares, no dudes en
                contactarme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className=" cursor-pointer bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold">
                  <Github className="w-4 h-4 mr-2" />
                  Ver en GitHub
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                  onClick={() => router.push("/#contact")}
                >
                  Contactar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
