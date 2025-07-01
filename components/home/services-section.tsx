"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hospital, Rocket, Brain, Database, Globe } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Custom websites for hospitals and startups that drive engagement and conversions.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "HIPAA Compliant"],
    category: "Web Development",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Web Applications",
    description: "Scalable web applications for hospital management and startup operations.",
    features: ["Patient Management", "Real-time Data", "Cloud-Based", "API Integration"],
    category: "Web Development",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Brain,
    title: "Machine Learning Models",
    description: "AI-powered solutions for predictive healthcare analytics and startup insights.",
    features: ["Predictive Analytics", "Data Processing", "Custom Algorithms", "Model Training"],
    category: "AI/ML",
    color: "from-purple-500 to-purple-600",
  },
]

const industries = [
  {
    icon: Hospital,
    title: "Healthcare Solutions",
    description: "Specialized digital solutions for hospitals, clinics, and healthcare providers.",
    solutions: [
      "Electronic Health Records (EHR)",
      "Patient Management Systems",
      "Telemedicine Platforms",
      "Medical Billing Software",
      "Healthcare Analytics",
      "HIPAA Compliance Tools",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Rocket,
    title: "Startup Solutions",
    description: "Technology solutions to launch, scale, and grow your startup business.",
    solutions: [
      "MVP Development",
      "SaaS Platforms",
      "E-commerce Solutions",
      "Mobile Applications",
      "Analytics Dashboards",
      "Growth Tools",
    ],
    color: "from-orange-500 to-orange-600",
  },
]

export function ServicesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-slate-900 dark:text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We specialize in three core areas: website design & development, web applications, and machine learning
            models tailored for hospitals and startups.
          </p>
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white dark:bg-slate-800 group hover:scale-105">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Industries We Serve</h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Specialized solutions designed specifically for healthcare organizations and startup companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white dark:bg-slate-800">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900 dark:text-white">{industry.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industry.solutions.map((solution) => (
                        <div key={solution} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {solution}
                        </div>
                      ))}
                    </div>
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
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a hospital looking to improve patient care or a startup ready to scale, we have the
              expertise to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="secondary"
                className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                variant="outline"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
