"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting value in the digital landscape.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the leading digital agency that transforms ideas into powerful, scalable solutions, setting new standards for innovation and excellence in web development.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in transparency, quality, innovation, and building long-term partnerships with our clients. Every project is treated with dedication and attention to detail.",
  },
]

export function MissionVision() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
