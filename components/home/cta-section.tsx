"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Whether you're a hospital looking to improve patient care or a startup ready to scale, we're here to build
            the perfect solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                <MessageCircle className="mr-2" size={20} />
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Success Stories
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
