"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Globe, Code, Smartphone, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const iconMap = {
  Globe,
  Code,
  Smartphone,
  RefreshCw,
}

interface ServiceDetailHeroProps {
  service: {
    iconName: string
    title: string
    subtitle: string
    description: string
    heroImage: string
    features: string[]
    technologies: string[]
  }
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Globe

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
              <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h1>

            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">{service.subtitle}</p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{service.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {service.features.slice(0, 6).map((feature) => (
                <div key={feature} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image src={service.heroImage || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
