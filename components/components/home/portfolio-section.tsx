"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Hospital, Rocket, Brain, TrendingUp, Activity } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "MedFlow Hospital System",
    category: "Healthcare Website",
    description: "Complete hospital management website with patient portal, appointment booking, and staff directory.",
    image: "/images/projects/healthcare-app.webp",
    tags: ["React", "Next.js", "HIPAA", "Responsive"],
    icon: Hospital,
    results: ["50% increase in online appointments", "HIPAA compliant", "Mobile-first design"],
    type: "Website",
  },
  {
    title: "HealthConnect EHR",
    category: "Healthcare Web App",
    description: "Cloud-based electronic health records system for multi-location clinics with real-time sync.",
    image: "/images/projects/healthcare-app.webp",
    tags: ["Vue.js", "Python", "PostgreSQL", "Cloud"],
    icon: Activity,
    results: ["30% reduction in admin time", "Real-time data sync", "Multi-clinic support"],
    type: "Web Application",
  },
  {
    title: "Predictive Care AI",
    category: "Healthcare ML Model",
    description: "Machine learning model for predicting patient readmission risk and optimizing care plans.",
    image: "/images/projects/healthcare-app.webp",
    tags: ["Python", "TensorFlow", "Healthcare Data", "Predictive"],
    icon: Brain,
    results: ["25% reduction in readmissions", "85% accuracy rate", "Early intervention alerts"],
    type: "ML Model",
  },
  {
    title: "StartupLaunch Platform",
    category: "Startup Website",
    description: "Professional website for startup showcasing services, team, and investor information.",
    image: "/images/projects/ecommerce-platform.webp",
    tags: ["Next.js", "TypeScript", "SEO", "Fast Loading"],
    icon: Rocket,
    results: ["$2M funding secured", "300% increase in leads", "Perfect SEO scores"],
    type: "Website",
  },
  {
    title: "GrowthMetrics Dashboard",
    category: "Startup Web App",
    description: "Advanced analytics web application for SaaS startups to track KPIs and growth metrics.",
    image: "/images/projects/financial-dashboard.webp",
    tags: ["React", "D3.js", "Real-time", "Analytics"],
    icon: TrendingUp,
    results: ["40% increase in conversions", "Real-time insights", "Custom dashboards"],
    type: "Web Application",
  },
  {
    title: "Customer Churn Predictor",
    category: "Startup ML Model",
    description: "Machine learning model to predict customer churn and recommend retention strategies.",
    image: "/images/projects/financial-dashboard.webp",
    tags: ["Python", "Scikit-learn", "Customer Data", "Prediction"],
    icon: Brain,
    results: ["60% churn reduction", "92% prediction accuracy", "Automated alerts"],
    type: "ML Model",
  },
]

const categories = [
  { name: "All", count: projects.length },
  { name: "Website", count: projects.filter((p) => p.type === "Website").length },
  { name: "Web Application", count: projects.filter((p) => p.type === "Web Application").length },
  { name: "ML Model", count: projects.filter((p) => p.type === "ML Model").length },
]

export function PortfolioSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="text-slate-900 dark:text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real projects, real results. See how we've helped hospitals improve patient care and startups accelerate
            growth through websites, web applications, and machine learning models.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden group hover:scale-105">
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <Badge
                      variant={project.category.includes("Healthcare") ? "default" : "secondary"}
                      className={
                        project.category.includes("Healthcare")
                          ? "bg-green-600 text-white text-xs"
                          : "bg-blue-600 text-white text-xs"
                      }
                    >
                      <project.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                      {project.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2">{project.category}</p>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                      Key Results:
                    </h4>
                    <ul className="space-y-0.5 sm:space-y-1">
                      {project.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mr-1.5 sm:mr-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-blue-200 text-blue-600 px-1.5 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-xs sm:text-sm"
                  >
                    <ExternalLink className="mr-1.5 sm:mr-2" size={14} />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with custom websites, web applications, or machine
            learning models.
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
