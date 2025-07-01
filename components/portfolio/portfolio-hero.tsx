"use client"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { Footer } from "@/components/footer"

export function PortfolioHero() {
  return (
    <>
      <Navigation />
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Explore our collection of successful projects and see how we've helped businesses transform their digital
            presence.
          </p>
        </motion.div>
      </div>
    </section>
    
    </>
  )
}
