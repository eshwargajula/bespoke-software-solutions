"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: "hello@coderisedigital.com",
    description: "Online support",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Tech Street, Digital City, DC 12345",
    description: "Come say hello",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday - Friday: 8am - 5pm",
    description: "Weekend support available",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's start a conversation</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>

        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white mb-8">
          <MessageCircle className="mr-2" size={20} />
          Schedule a Call
        </Button>
      </div>

      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                    <p className="text-gray-900 dark:text-white font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Card>
          <CardContent className="p-0">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 dark:text-gray-400">Interactive Map Coming Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
