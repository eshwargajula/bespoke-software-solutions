"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, TrendingUp, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface CaseStudyProps {
  title: string
  client: string
  industry: string
  duration: string
  teamSize: string
  heroImage: string
  challenge: string
  solution: string
  results: Array<{
    metric: string
    value: string
    description: string
  }>
  technologies: string[]
  features: string[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
}

export function CaseStudyTemplate({
  title,
  client,
  industry,
  duration,
  teamSize,
  heroImage,
  challenge,
  solution,
  results,
  technologies,
  features,
  testimonial,
}: CaseStudyProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Badge variant="secondary" className="mb-4">
                Case Study
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                {client} • {industry}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-500 mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Team Size</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{teamSize}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image src={heroImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{solution}</p>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Results That Matter</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here's how our solution transformed the client's business and delivered measurable impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-blue-600 mb-2">{result.value}</div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{result.metric}</div>
                    <p className="text-gray-600 dark:text-gray-300">{result.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <blockquote className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 italic mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
              <div className="text-gray-500 dark:text-gray-400">{testimonial.position}</div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  )
}
