"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Clock, Target, ArrowRight, CheckCircle, Lightbulb, Heart, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "200+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Award, value: "500+", label: "Projects Completed", color: "text-green-600" },
    { icon: Clock, value: "5+", label: "Years Experience", color: "text-purple-600" },
    { icon: Target, value: "99%", label: "Success Rate", color: "text-orange-600" },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Every line of code is crafted with precision and attention to detail.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "We deliver projects on time without compromising on quality.",
      color: "from-blue-500 to-purple-500",
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
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              We are a team of passionate developers, designers, and strategists dedicated to creating exceptional
              digital experiences. With years of experience in the industry, we've helped businesses of all sizes
              achieve their digital transformation goals.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Our approach combines technical expertise with creative thinking to deliver solutions that not only meet
              your requirements but exceed your expectations.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                "Expert team with 5+ years of experience",
                "Agile development methodology",
                "Transparent communication throughout the project",
                "24/7 support and maintenance",
                "Competitive pricing with no hidden costs",
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Stats and Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div key={stat.label} variants={itemVariants}>
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center`}
                      >
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h3>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <value.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{value.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
