"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Calendar, Star, Rocket, Zap, Code, Coffee } from "lucide-react"

export default function SpaceProfile() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  const funFacts = [
    "I can solve a Rubik's cube in under 2 minutes! 🧩",
    "I've watched every Star Wars movie at least 5 times ⭐",
    "I code better with lo-fi music playing in the background 🎵",
    "I once debugged code for 6 hours straight and it was a missing semicolon 😅",
    "I collect vintage programming books from the 80s and 90s 📚",
    "I can type 85 WPM but still use two fingers sometimes 🤷‍♂️",
  ]

  const skills = ["Java", "JavaScript", "Visual Basic", "Python", "SQL", "Git", "MongoDB"]

  const education = [
    {
      Qualification: "Diploma in ICT in Aplication Development",
      institution: "Walter Sisulu University",
      year: "2022 - 2024",
      description: "Specialized in Software Development",
    },
    {
      Qualification: "Matric",
      institution: "Boipelo Secondary School",
      year: "2016 - 2020",
      description: "Mathematics and Physical Sciences",
    },
  ]

  const projects = [
    {
      title: "Cosmic Task Manager",
      description: "A space-themed productivity app with stellar animations",
      tech: ["React", "TypeScript", "Framer Motion"],
      status: "Live",
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for understanding AI architectures",
      tech: ["Python", "TensorFlow", "D3.js"],
      status: "In Progress",
    },
    {
      title: "Quantum Code Editor",
      description: "Next-gen code editor with AI-powered suggestions",
      tech: ["Electron", "Monaco", "OpenAI API"],
      status: "Planning",
    },
  ]

  // Generate random stars on mount
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  // Auto-advance fun facts slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [funFacts.length])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Star Field Background */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white twinkle-animation"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        {/* Shooting Stars */}
        <div className="shooting-star absolute w-1 h-1 bg-primary rounded-full" style={{ animationDelay: "2s" }} />
        <div className="shooting-star absolute w-1 h-1 bg-primary rounded-full" style={{ animationDelay: "8s" }} />
        <div className="shooting-star absolute w-1 h-1 bg-primary rounded-full" style={{ animationDelay: "15s" }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-primary float-animation" />
            <span className="text-2xl font-bold text-white">Buyiswa Zozi</span>
          </div>
          <div className="flex gap-4">
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/80 glow-effect">
              <a
                href="/Buyiswa_Asanda_Zozi_CV.pdf"
                download="Buyiswa_Asanda_Zozi_CV.pdf"
                className="flex items-center gap-2"
              >
                📄 Download CV
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <a
                href="https://www.linkedin.com/in/buyiswa-zozi-087980273/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <a
                href="https://github.com/boitumelo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-600 p-1 glow-effect">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <img src="/profile.jpeg" alt="Buyiswa Profile" className="w-44 h-44 rounded-full object-cover" />
              </div>
            </div>
            {/* Orbiting Elements */}
            <div className="absolute inset-0 orbit-animation">
              <Code className="w-6 h-6 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4 text-white">Buyiswa Asanda Zozi</h1>
          <p className="text-xl text-muted-foreground mb-6">Software Developer</p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Johannesburg, South Africa
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Available for new opportunities
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/30 text-white border-primary/50 hover:bg-primary/40"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation"
            style={{ animationDelay: "1s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">About Me</h3>
              </div>
              <p className="text-muted-foreground text-balance">
                Passionate developer who loves creating stellar user experiences. When I'm not coding, you'll find me
                stargazing or reading about the latest in tech exploration.
              </p>
            </CardContent>
          </Card>

          <Card
            className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation md:col-span-2 lg:col-span-1"
            style={{ animationDelay: "2s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-balance">Contact</h3>
                <Badge variant="outline" className="text-xs">
                  Get In Touch
                </Badge>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/80 glow-effect">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={edu.degree}
                className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-balance">{edu.degree}</h3>
                    <Badge variant="outline" className="text-xs">
                      {edu.year}
                    </Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-balance">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-effect border-primary/20 hover:glow-effect transition-all duration-300 float-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-balance">{project.title}</h3>
                    <Badge
                      variant={
                        project.status === "Live"
                          ? "default"
                          : project.status === "In Progress"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-balance">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Facts Slideshow */}
        <Card className="mb-12 glass-effect border-primary/20 hover:glow-effect transition-all duration-300">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary twinkle-animation" />
              <h3 className="text-lg font-semibold">Fun Fact #{currentFactIndex + 1}</h3>
              <Star className="w-5 h-5 text-primary twinkle-animation" />
            </div>
            <p className="text-lg text-balance">{funFacts[currentFactIndex]}</p>
            <div className="flex justify-center gap-2 mt-4">
              {funFacts.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentFactIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className="text-muted-foreground">Built with ❤️ and lots of ☕ • Powered by Code</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="glass-effect hover:glow-effect">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </footer>
      </main>
    </div>
  )
}
