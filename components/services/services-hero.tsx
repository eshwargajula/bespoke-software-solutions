"use client"

import { motion } from "framer-motion"
import { Building2, Rocket, Shield, Zap } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Specialized Software Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Bespoke Solutions
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">for Healthcare & Startups</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            From HIPAA-compliant hospital management systems to scalable startup platforms, we deliver technology
            solutions that drive real business outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900 dark:text-white">Healthcare</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">HIPAA Compliant</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <Rocket className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900 dark:text-white">Startups</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">MVP to Scale</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900 dark:text-white">Security</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">SOC 2 Certified</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-900 dark:text-white">Performance</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Enterprise Grade</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
