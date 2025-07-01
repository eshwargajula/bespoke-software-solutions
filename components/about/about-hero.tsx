"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Rocket, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                <Users className="w-4 h-4 mr-2" />
                About Bespoke Software Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                <span className="text-gray-900 dark:text-white">We Build </span>
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Tomorrow's
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Healthcare & Startup Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Founded with a mission to revolutionize healthcare technology and accelerate startup growth, we combine
                deep industry expertise with cutting-edge development practices to deliver solutions that make a real
                difference.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Healthcare Projects</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <Rocket className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Startup Solutions</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white"
                >
                  Start a Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/team/alex-thompson.jpg"
              alt="Bespoke Software Solutions Team"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <Building2 className="w-8 h-8 text-blue-600" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            >
              <Rocket className="w-8 h-8 text-orange-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
