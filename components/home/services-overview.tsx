"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hospital, Rocket, Shield, Zap, Users, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const healthcareServices = [
  {
    icon: Hospital,
    title: "Hospital Management Systems",
    description:
      "Complete operational solutions for healthcare facilities with patient management, scheduling, and billing integration.",
    features: ["Patient Records", "Appointment Scheduling", "Billing Integration", "Staff Management"],
    href: "/services/website-design-development",
  },
  {
    icon: Shield,
    title: "Electronic Health Records",
    description: "HIPAA-compliant EHR systems that streamline patient data management and improve care coordination.",
    features: ["HIPAA Compliance", "Data Security", "Interoperability", "Clinical Workflows"],
    href: "/services/web-applications",
  },
  {
    icon: Users,
    title: "Patient Care Platforms",
    description: "Mobile and web applications that enhance patient engagement and improve health outcomes.",
    features: ["Patient Portals", "Telemedicine", "Health Monitoring", "Care Coordination"],
    href: "/services/mobile-app-development",
  },
]

const startupServices = [
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Rapid prototyping and development to validate your startup idea and attract investors.",
    features: ["Rapid Prototyping", "Market Validation", "Investor-Ready", "Scalable Architecture"],
    href: "/services/mobile-app-development",
  },
  {
    icon: Zap,
    title: "Scalable Platforms",
    description: "Build robust, scalable solutions that grow with your business from startup to enterprise.",
    features: ["Cloud Architecture", "Auto-Scaling", "Performance Optimization", "Global Deployment"],
    href: "/services/web-applications",
  },
  {
    icon: TrendingUp,
    title: "Growth Acceleration",
    description: "Technology solutions that drive user acquisition, retention, and revenue growth.",
    features: ["Analytics Integration", "A/B Testing", "User Experience", "Conversion Optimization"],
    href: "/services/website-modernization",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Specialized Solutions for </span>
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're transforming healthcare or building the next big startup, we have the expertise to bring your
            vision to life.
          </p>
        </motion.div>

        {/* Healthcare Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              <Hospital className="w-4 h-4 mr-2" />
              Healthcare Solutions
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Transforming Patient Care</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              HIPAA-compliant solutions that improve patient outcomes and streamline healthcare operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Startup Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium mb-4">
              <Rocket className="w-4 h-4 mr-2" />
              Startup Solutions
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Accelerating Growth</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From MVP to scale, we build the technology foundation that powers your startup's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startupServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our bespoke software solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white"
              >
                Start a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
