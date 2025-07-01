"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Code, Smartphone, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "We create stunning, responsive websites that not only look great but also perform exceptionally. Our websites are built with modern technologies like React, Next.js, and optimized for speed, SEO, and user experience. From simple landing pages to complex corporate websites, we deliver solutions that drive results.",
    features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern UI/UX"],
  },
  {
    icon: Code,
    title: "Web Applications",
    description:
      "Build powerful, scalable web applications that streamline your business processes. We develop custom web apps with advanced functionality, user authentication, real-time features, and seamless integrations. Our applications are built to handle growth and provide exceptional user experiences.",
    features: ["Custom Development", "Database Integration", "API Development", "Real-time Features"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Reach your customers on their mobile devices with native iOS and Android apps, or cross-platform solutions using React Native and Flutter. We create intuitive, feature-rich mobile applications that engage users and drive business growth.",
    features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign & Optimization",
    description:
      "Transform your outdated website into a modern, high-performing digital asset. We analyze your current site, identify improvement opportunities, and redesign it with better UI/UX, improved performance, and enhanced functionality to boost conversions and user engagement.",
    features: ["Performance Audit", "Modern Design", "Conversion Optimization", "Technical SEO"],
  },
]

export function ServicesList() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    >
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/services/${service.title
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "")}`}
                      >
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">Learn More</Button>
                      </Link>
                    </div>
                    <div
                      className={`bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-8 lg:p-12 flex items-center justify-center ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                    >
                      <div className="w-full max-w-md">
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4"></div>
                          <div className="h-4 bg-blue-200 dark:bg-blue-800 rounded mb-4 w-1/2"></div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-16 bg-gray-100 dark:bg-gray-800 rounded"></div>
                            <div className="h-16 bg-gray-100 dark:bg-gray-800 rounded"></div>
                            <div className="h-16 bg-gray-100 dark:bg-gray-800 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
