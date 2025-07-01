"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Hospital, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    company: "Metropolitan Hospital",
    image: "/images/testimonials/sarah-johnson.webp",
    rating: 5,
    text: "CodeRise Digital transformed our patient management system. The new web application reduced our administrative time by 40% and improved patient satisfaction scores significantly. Their understanding of healthcare workflows is exceptional.",
    type: "Healthcare",
    icon: Hospital,
    project: "Hospital Management Web App",
  },
  {
    name: "Michael Chen",
    role: "CEO & Founder",
    company: "TechStart Solutions",
    image: "/images/testimonials/michael-chen.webp",
    rating: 5,
    text: "The machine learning model they built for customer churn prediction has been a game-changer. We reduced churn by 60% and the predictive accuracy is outstanding. Best investment we've made for our startup.",
    type: "Startup",
    icon: Rocket,
    project: "Customer Churn ML Model",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Hospital Administrator",
    company: "City General Hospital",
    image: "/images/testimonials/emily-rodriguez.webp",
    rating: 5,
    text: "Our new hospital website has increased online appointment bookings by 300%. The design is professional, HIPAA compliant, and patients love the user-friendly interface. Excellent work from the CodeRise team.",
    type: "Healthcare",
    icon: Hospital,
    project: "Hospital Website Design",
  },
  {
    name: "David Park",
    role: "CTO",
    company: "InnovateLab",
    image: "/images/testimonials/michael-chen.webp",
    rating: 5,
    text: "CodeRise built our entire SaaS platform from scratch. The web application handles thousands of users seamlessly, and their machine learning integration provides insights we never had before. Truly exceptional developers.",
    type: "Startup",
    icon: Rocket,
    project: "SaaS Platform & ML Integration",
  },
  {
    name: "Dr. Lisa Wang",
    role: "Medical Director",
    company: "Regional Medical Center",
    image: "/images/testimonials/sarah-johnson.webp",
    rating: 5,
    text: "The predictive analytics model for patient readmission has revolutionized our care approach. We can now identify high-risk patients early and provide preventive care. The 25% reduction in readmissions speaks for itself.",
    type: "Healthcare",
    icon: Hospital,
    project: "Predictive Healthcare ML Model",
  },
  {
    name: "Alex Thompson",
    role: "Founder",
    company: "GrowthMetrics",
    image: "/images/testimonials/emily-rodriguez.webp",
    rating: 5,
    text: "From website to web application to ML models - CodeRise handled our entire digital transformation. We secured Series A funding partly because of the impressive technology stack they built for us.",
    type: "Startup",
    icon: Rocket,
    project: "Complete Digital Solution",
  },
]

export function TestimonialsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="text-slate-900 dark:text-white">What Our </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Hear from healthcare leaders and startup founders who have transformed their organizations with our
            websites, web applications, and machine learning solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white dark:bg-slate-800 group hover:scale-105">
                <CardContent className="p-4 sm:p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-500">{testimonial.company}</p>
                      </div>
                    </div>
                    <div
                      className={`p-2 rounded-lg ${
                        testimonial.type === "Healthcare"
                          ? "bg-green-100 dark:bg-green-900/20"
                          : "bg-blue-100 dark:bg-blue-900/20"
                      }`}
                    >
                      <testimonial.icon
                        className={`w-4 h-4 ${testimonial.type === "Healthcare" ? "text-green-600" : "text-blue-600"}`}
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Project Type */}
                  <div className="mb-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        testimonial.type === "Healthcare"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                      }`}
                    >
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1 w-4 h-4 text-blue-600/20" />
                    <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed pl-4">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Hospitals Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Startups Launched</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Support Available</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your hospital or startup with custom digital solutions.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
