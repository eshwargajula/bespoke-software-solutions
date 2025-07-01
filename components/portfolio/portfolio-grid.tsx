"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
    image: "/images/projects/ecommerce-platform.webp",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Application",
    featured: true,
  },
  {
    title: "Healthcare Mobile App",
    description:
      "Comprehensive healthcare management app for patients and doctors with appointment scheduling and telemedicine features.",
    image: "/images/projects/healthcare-app.webp",
    tags: ["React Native", "Firebase", "Healthcare", "Real-time"],
    category: "Mobile App",
    featured: true,
  },
  {
    title: "Financial Dashboard",
    description:
      "Real-time financial data visualization platform with interactive charts and portfolio management tools.",
    image: "/images/projects/financial-dashboard.webp",
    tags: ["Vue.js", "D3.js", "API", "Charts"],
    category: "Web Application",
    featured: false,
  },
  {
    title: "Restaurant Website",
    description:
      "Beautiful restaurant website with online ordering system, reservation management, and menu customization.",
    image: "/images/projects/restaurant-website.webp",
    tags: ["Next.js", "Tailwind", "Stripe", "CMS"],
    category: "Website",
    featured: false,
  },
  {
    title: "Fitness Tracking App",
    description:
      "Cross-platform fitness app with workout tracking, nutrition logging, and social features for motivation.",
    image: "/images/projects/fitness-app.webp",
    tags: ["Flutter", "Firebase", "Health", "Social"],
    category: "Mobile App",
    featured: false,
  },
  {
    title: "Corporate Website",
    description: "Professional corporate website with content management system, blog, and lead generation forms.",
    image: "/images/projects/corporate-website.webp",
    tags: ["WordPress", "PHP", "SEO", "CMS"],
    category: "Website",
    featured: false,
  },
  {
    title: "Learning Management System",
    description:
      "Comprehensive LMS platform with course creation, student progress tracking, and interactive assessments.",
    image: "/images/projects/learning-platform.webp",
    tags: ["React", "Express", "PostgreSQL", "Education"],
    category: "Web Application",
    featured: false,
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search, virtual tours, and agent management system.",
    image: "/images/projects/real-estate.webp",
    tags: ["Angular", "Node.js", "Maps API", "Real Estate"],
    category: "Web Application",
    featured: false,
  },
]

export function PortfolioGrid() {
  const featuredProjects = projects.filter((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <>
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-64 sm:h-72 lg:h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="object-cover object-center"
                      priority={index < 2}
                      quality={90}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 text-white">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={`/portfolio/${project.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "")}`}
                      >
                        <Button className="flex-1">
                          <Eye className="mr-2" size={16} />
                          View Details
                        </Button>
                      </Link>
                      <Button variant="outline">
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-48 sm:h-56 lg:h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                      quality={85}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Link
                      href={`/portfolio/${project.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}`}
                    >
                      <Button variant="outline" className="w-full bg-transparent">
                        <Eye className="mr-2" size={16} />
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  )
}
