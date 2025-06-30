"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Healthcare App",
    description: "Mobile app for healthcare management",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Firebase", "Healthcare"],
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial data visualization",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "D3.js", "API"],
  },
  {
    title: "Restaurant Website",
    description: "Beautiful restaurant website with online ordering",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Tailwind", "Stripe"],
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <ExternalLink className="mr-2" size={16} />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
