"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { link } from "fs"

export function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Nation Innovation",
      description:
        "All-in-one tech platform offering online courses, DIY kits, and ready-made projects to empower students and innovators.",
      image: "/images/projects/nationin.webp",
      technologies: ["Wix Studio", "Wix velo", "Wix CMS" ],
      category: "Web Application",
      link: "https://www.nationin.com",
      github: "#",
    },
    {
      id: 2,
      title: "Event Pro - Event Management System",
      description:
        "Smart event management platform that streamlines event creation, attendee tracking, and real-time coordination for organizers.",
      image: "/images/projects/eventpro.webp",
      technologies: ["Next.js", "PostgreSQL", "Redis", "Docker"],
      category: "Enterprise",
      link: "https://event-management-system-se9e.vercel.app",
      github: "https://github.com/eshwargajula31/event-management-system",
    },
    {
      id: 3,
      title: "Linear Regression-Based House Price Prediction",
      description:
        "Aims to predict house prices using a linear regression model. The application is built using Python for the backend and Flask for the web interface.",
      image: "/images/projects/house.webp",
      technologies: ["Python", "Flask", "Matplotlib", "Pandas", "Scikit-learn"],
      category: "AI/ML",
      link: "https://github.com/eshwargajula31/Linear-regression-Based-House-Price-Prediction",
      github: "https://github.com/eshwargajula31/Linear-regression-Based-House-Price-Prediction",
    },
    {
      id: 4,
      title: "Hand Written Digit Recognition using Tranfer Learning",
      description:
        "Finetuned LeNet-5 Architecture Model and it is optimized to work with greyscale images and can accurately identify single digits. The model is deployed using Flask Flamework, which allows for easy integration into web applications.",
      image: "/images/projects/HWDR.webp",
      technologies: ["python", "TensorFlow", "Flask", "MNIST Dataset"],
      category: "AI/ML",
      link: "https://github.com/White-OG/Hand-Written-Digit-Recognition-Using-Transfer-Learning",
      github: "https://github.com/White-OG/Hand-Written-Digit-Recognition-Using-Transfer-Learning",
    },
    {
      id: 5,
      title: "Regression Analysis for Car Price Prediction",
      description: "It is clearly a regression problem and predictions are carried out on dataset of car sales in the american car market.",
      image: "/images/projects/car.jpg",
      technologies: ["python", "Scikit-Learn", "Pandas", "ELK Stack"],
      category: "AI/ML",
      link: "https://github.com/White-OG/Car-Price-Prediction",
      github: "https://github.com/White-OG/Car-Price-Prediction",
    },
    {
      id: 6,
      title: "Learning Management System",
      description:
        "Comprehensive LMS with video streaming, interactive quizzes, and progress tracking for educational institutions.",
      image: "/images/projects/learn.webp",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "WebRTC"],
      category: "Education",
      link: "#",
      github: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative h-48 sm:h-56 lg:h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    priority={index < 3}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-900 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                            Live
                        </Button>
                      </Link>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white backdrop-blur-sm">
                          <Github className="w-4 h-4 mr-1" />
                            Code
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Want to see more of our work? Check out our complete portfolio.
          </p>
          <Link href="/portfolio">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
