"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    company: "Metropolitan Hospital",
    image: "/images/testimonials/sarah-johnson.jpg",
    content:
      "Bespoke Software Solutions transformed our patient management system. The HIPAA-compliant platform they built has improved our efficiency by 40% and enhanced patient care significantly.",
    rating: 5,
    category: "Healthcare",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO & Founder",
    company: "HealthTech Startup",
    image: "/images/testimonials/michael-chen.jpg",
    content:
      "Their MVP development expertise helped us secure $2M in Series A funding. The scalable platform they built has been instrumental in our growth from 0 to 50,000 users.",
    rating: 5,
    category: "Startup",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Hospital Administrator",
    company: "City General Hospital",
    image: "/images/testimonials/emily-rodriguez.jpg",
    content:
      "The electronic health records system they developed has streamlined our operations and improved patient data security. Outstanding work and ongoing support.",
    rating: 5,
    category: "Healthcare",
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "MedTech Innovations",
    image: "/images/testimonials/david-park.jpg",
    content:
      "From concept to deployment, they delivered a world-class telemedicine platform. Their healthcare expertise and technical skills are unmatched.",
    rating: 5,
    category: "Startup",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

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
            <span className="text-gray-900 dark:text-white">What Our </span>
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by healthcare organizations and innovative startups worldwide
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-xl border-0">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          width={120}
                          height={120}
                          className="rounded-full object-cover"
                        />
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full p-2">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
                        {testimonials[currentIndex].category}
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center md:justify-start space-x-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial */}
                      <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Author */}
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</div>
                        <div className="text-blue-600 dark:text-blue-400 font-medium">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full bg-white dark:bg-gray-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-blue-600 to-orange-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full bg-white dark:bg-gray-800"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {isAutoPlaying ? "Pause" : "Play"} auto-rotation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
