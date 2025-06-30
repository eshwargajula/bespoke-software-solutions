"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ServiceDetailContentProps {
  service: {
    benefits: Array<{
      title: string
      description: string
    }>
  }
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose This Service?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the key benefits and advantages of working with our expert team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
