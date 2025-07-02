"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  Heart,
  Building2,
  GraduationCap,
  ShoppingCart,
  Banknote,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const industries = [
  {
    icon: Rocket,
    title: "Startup Solutions",
    description: "Launch your startup with scalable, cost-effective solutions",
    features: ["MVP Development", "Scalable Architecture", "Rapid Prototyping", "Growth-Ready Infrastructure"],
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
  },
  {
    icon: Heart,
    title: "Healthcare Solutions",
    description: "HIPAA-compliant healthcare technology solutions",
    features: ["HIPAA Compliance", "Telemedicine Platforms", "Patient Management", "Medical Data Security"],
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Robust enterprise software for large organizations",
    features: ["Workflow Automation", "Digital Transformation", "Legacy System Integration", "Enterprise Security"],
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
  },
  {
    icon: GraduationCap,
    title: "Education Technology",
    description: "Modern learning platforms and educational tools",
    features: [
      "Learning Management Systems",
      "Online Course Platforms",
      "Student Analytics",
      "Interactive Learning Tools",
    ],
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store solutions with payment integration",
    features: ["Custom Online Stores", "Payment Gateway Integration", "Inventory Management", "Multi-platform Support"],
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
  },
  {
    icon: Banknote,
    title: "Financial Technology",
    description: "Secure fintech solutions and banking applications",
    features: ["Banking Solutions", "Cryptocurrency Platforms", "Payment Processing", "Financial Analytics"],
    gradient: "from-cyan-500 to-teal-600",
    bgGradient: "from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20",
  },
]

function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We specialize in delivering tailored software solutions across various industries, understanding the unique
            challenges and requirements of each sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card
                className={`h-full bg-gradient-to-br ${industry.bgGradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gradient-to-br dark:shadow-xl`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {industry.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-3xl p-12 shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't See Your Industry?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            We work with businesses across all sectors. Let's discuss how we can create a custom solution tailored to
            your specific industry needs.
          </p>
          <Link href="#contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Custom Solution
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export { IndustriesSection }
export default IndustriesSection
