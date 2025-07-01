"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hospital, Rocket, Brain, Shield, Users, Award, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { label: "Hospitals Served", value: "25+", icon: Hospital },
  { label: "Startups Launched", value: "50+", icon: Rocket },
  { label: "ML Models Built", value: "15+", icon: Brain },
  { label: "Years Experience", value: "7+", icon: Clock },
]

const values = [
  {
    icon: Shield,
    title: "Healthcare Compliance",
    description: "HIPAA compliance and healthcare security standards in every solution we build.",
  },
  {
    icon: Brain,
    title: "AI-Powered Innovation",
    description: "Cutting-edge machine learning and AI technologies for predictive insights.",
  },
  {
    icon: Users,
    title: "Industry Expertise",
    description: "Deep understanding of healthcare workflows and startup growth challenges.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful implementations and measurable business outcomes.",
  },
]

export function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="text-slate-900 dark:text-white">About </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              CodeRise Digital
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're a specialized team of developers, designers, and healthcare technology experts dedicated to creating
            digital solutions that transform hospitals and accelerate startup growth.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
              Bridging Healthcare & Technology
            </h3>
            <div className="space-y-3 sm:space-y-4 text-slate-600 dark:text-slate-300">
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Founded with a mission to revolutionize healthcare technology and startup innovation, CodeRise Digital
                has been at the forefront of digital transformation since 2017. We understand the unique challenges
                faced by hospitals and emerging businesses.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Our expertise spans three core areas: <strong>website design & development</strong> for professional
                online presence, <strong>web applications</strong> for operational efficiency, and{" "}
                <strong>machine learning models</strong> for predictive insights and automation.
              </p>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                From HIPAA-compliant hospital management systems to AI-powered startup analytics platforms, we build
                technology that drives real results and measurable impact.
              </p>
            </div>

            {/* Specializations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Hospital className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">Healthcare</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Rocket className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">Startups</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-900 dark:text-white">AI/ML</span>
              </div>
            </div>

            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              Work With Us
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <Image
                src="/images/website-development.webp"
                alt="Our team working on healthcare and startup solutions"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, (max-width: 1024px) 450px, 500px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg blur-xl"></div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-4 sm:p-6 border-0 shadow-md bg-blue-50 dark:bg-blue-900/20 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Our Core Values
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              The principles that guide our approach to healthcare technology and startup innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-4 sm:p-6 border-0 shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105">
                  <CardContent className="p-0 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                      {value.title}
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
