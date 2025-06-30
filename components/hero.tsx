"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Hospital, Rocket, Brain, Code, Database } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%232563eb' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center"
        >
          <Hospital className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
        </motion.div>

        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-20 sm:h-20 bg-blue-200 dark:bg-blue-800/30 rounded-full flex items-center justify-center"
        >
          <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700" />
        </motion.div>

        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-40 left-4 sm:left-20 w-10 h-10 sm:w-12 sm:h-12 bg-blue-300 dark:bg-blue-700/30 rounded-full flex items-center justify-center"
        >
          <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-blue-800" />
        </motion.div>

        <motion.div
          animate={{ y: [25, -25, 25], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-14 sm:h-14 bg-blue-400 dark:bg-blue-600/30 rounded-full flex items-center justify-center"
        >
          <Code className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs sm:text-sm font-medium"
            >
              <Hospital className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Hospitals & Startups Specialists
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-slate-900 dark:text-white">Digital Solutions for</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  Hospitals
                </span>
                <span className="text-slate-900 dark:text-white"> & </span>
                <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Startups
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                We design & develop custom websites, web applications, and machine learning models that transform
                healthcare operations and accelerate startup growth.
              </motion.p>
            </div>

            {/* Services Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <div className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800">
                <Code className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Websites</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800">
                <Database className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Web Apps</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-blue-100 dark:border-blue-800">
                <Brain className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm text-slate-700 dark:text-slate-300">ML Models</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8 max-w-sm sm:max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">25+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Hospitals Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700">50+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800">15+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">ML Models</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Rocket className="mr-2" size={18} />
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                <span>AI/ML Powered</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <Image
                src="/images/hero-bg.webp"
                alt="Healthcare and Startup Digital Solutions"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-2xl sm:blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
