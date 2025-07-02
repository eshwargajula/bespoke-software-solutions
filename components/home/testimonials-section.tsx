"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Navin P",
      role: "Director, Manipal Hospitals",
      image: "/images/testimonials/sarah-johnson.webp",
      content:
        "Working with Bespoke Software Solutions was an absolute game-changer. They delivered a robust platform that exceeded our expectations and helped us scale rapidly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Veekshet B",
      role: "Founder & CEO, DynoArk ",
      image: "/images/testimonials/michael-chen.webp",
      content:
        "The team's expertise in enterprise solutions is unmatched. They modernized our legacy systems and improved our operational efficiency by 40%. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Subbu C",
      role: "Director, Loginsoft",
      image: "/images/testimonials/emily-rodriguez.webp",
      content:
        "From concept to deployment, the entire process was seamless. The attention to detail and commitment to quality is what sets them apart from other development teams.",
      rating: 5,
    },
    {
      id: 4,
      name: "Shanoli Ray",
      role: "Director, Prolearnz",
      image: "/images/testimonials/david-thompson.webp",
      content:
        "They built our Website with precision and delivered on time. The user experience is fantastic, and our customer engagement has increased significantly.",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-blue-100 dark:text-slate-700">
                  <Quote className="w-8 h-8" />
                </div>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">100+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">99%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
