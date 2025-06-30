"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Brain, Globe, Database } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "medflow-hospital-website",
    title: "MedFlow Hospital Website",
    category: "Healthcare Website",
    description:
      "Modern hospital website with patient portal, appointment booking, and comprehensive service information.",
    image: "/images/projects/hospital.webp",
    tags: ["React", "Next.js", "HIPAA", "Responsive"],
    icon: Globe,
    results: ["50% increase in online appointments", "HIPAA compliant design", "Mobile-first approach"],
    type: "Website",
    industry: "Healthcare",
  },
  {
    id: "startup-launch-website",
    title: "StartupLaunch Website",
    category: "Startup Website",
    description: "Professional startup website showcasing services, team, and investor information with modern design.",
    image: "/images/projects/startup.webp",
    tags: ["Next.js", "TypeScript", "SEO", "Fast Loading"],
    icon: Globe,
    results: ["$2M funding secured", "300% increase in leads", "Perfect SEO scores"],
    type: "Website",
    industry: "Startup",
  },
  {
    id: "healthconnect-website",
    title: "HealthConnect Clinic Website",
    category: "Healthcare Website",
    description: "Multi-location clinic website with online booking, doctor profiles, and patient resources.",
    image: "/images/projects/clinic.webp",
    tags: ["Vue.js", "Nuxt.js", "CMS", "Multi-location"],
    icon: Globe,
    results: ["40% more online bookings", "Unified brand presence", "Patient satisfaction up 35%"],
    type: "Website",
    industry: "Healthcare",
  },
  {
    id: "fintech-startup-website",
    title: "FinTech Startup Website",
    category: "Startup Website",
    description: "Sleek fintech startup website with product demos, security features, and investor relations.",
    image: "/images/projects/financial-dashboard.webp",
    tags: ["React", "Gatsby", "Security", "Performance"],
    icon: Globe,
    results: ["Series A funding raised", "50K+ signups", "Industry recognition"],
    type: "Website",
    industry: "Startup",
  },
  {
    id: "hospital-management-website",
    title: "Regional Hospital Website",
    category: "Healthcare Website",
    description: "Comprehensive hospital website with department pages, doctor directory, and emergency information.",
    image: "/images/projects/regional-hospital.webp",
    tags: ["WordPress", "Custom Theme", "Accessibility", "Multilingual"],
    icon: Globe,
    results: ["60% increase in web traffic", "WCAG 2.1 AA compliant", "Emergency info accessibility"],
    type: "Website",
    industry: "Healthcare",
  },
  {
    id: "saas-startup-website",
    title: "SaaS Platform Website",
    category: "Startup Website",
    description: "Modern SaaS website with product tours, pricing tiers, and customer success stories.",
    image: "/images/projects/saas.webp",
    tags: ["Next.js", "Tailwind", "Animation", "Conversion"],
    icon: Globe,
    results: ["200% conversion increase", "Premium tier adoption up", "Customer testimonials"],
    type: "Website",
    industry: "Startup",
  },
  {
    id: "healthconnect-ehr",
    title: "HealthConnect EHR System",
    category: "Healthcare Web App",
    description: "Cloud-based electronic health records system for multi-location clinics with real-time sync.",
    image: "/images/projects/ehr.webp",
    tags: ["Vue.js", "Python", "PostgreSQL", "Cloud"],
    icon: Database,
    results: ["30% reduction in admin time", "Real-time data sync", "Multi-clinic support"],
    type: "Web Application",
    industry: "Healthcare",
  },
  {
    id: "growthmetrics-dashboard",
    title: "GrowthMetrics Dashboard",
    category: "Startup Web App",
    description: "Advanced analytics web application for SaaS startups to track KPIs and growth metrics.",
    image: "/images/projects/growth.webp",
    tags: ["React", "D3.js", "Real-time", "Analytics"],
    icon: Database,
    results: ["40% increase in conversions", "Real-time insights", "Custom dashboards"],
    type: "Web Application",
    industry: "Startup",
  },
  {
    id: "patient-management-app",
    title: "Patient Management System",
    category: "Healthcare Web App",
    description: "Comprehensive patient management web application with scheduling, billing, and records.",
    image: "/images/projects/patient-management.webp",
    tags: ["React", "Node.js", "MongoDB", "HIPAA"],
    icon: Database,
    results: ["50% faster patient processing", "Integrated billing system", "HIPAA compliance"],
    type: "Web Application",
    industry: "Healthcare",
  },
  {
    id: "predictive-care-ai",
    title: "Predictive Care AI",
    category: "Healthcare ML Model",
    description: "Machine learning model for predicting patient readmission risk and optimizing care plans.",
    image: "/images/projects/predictive-ai.webp",
    tags: ["Python", "TensorFlow", "Healthcare Data", "Predictive"],
    icon: Brain,
    results: ["25% reduction in readmissions", "85% accuracy rate", "Early intervention alerts"],
    type: "ML Model",
    industry: "Healthcare",
  },
  {
    id: "customer-churn-predictor",
    title: "Customer Churn Predictor",
    category: "Startup ML Model",
    description: "Machine learning model to predict customer churn and recommend retention strategies.",
    image: "/images/projects/financial-dashboard.webp",
    tags: ["Python", "Scikit-learn", "Customer Data", "Prediction"],
    icon: Brain,
    results: ["60% churn reduction", "92% prediction accuracy", "Automated alerts"],
    type: "ML Model",
    industry: "Startup",
  },
  {
    id: "medical-diagnosis-ai",
    title: "Medical Diagnosis Assistant",
    category: "Healthcare ML Model",
    description: "AI model for assisting doctors with preliminary diagnosis based on symptoms and medical history.",
    image: "/images/projects/healthcare-app.webp",
    tags: ["Python", "Deep Learning", "Medical Data", "NLP"],
    icon: Brain,
    results: ["90% diagnostic accuracy", "30% faster diagnosis", "Doctor workflow integration"],
    type: "ML Model",
    industry: "Healthcare",
  },
]

const categories = [
  { name: "All", count: projects.length },
  { name: "Website", count: projects.filter((p) => p.type === "Website").length },
  { name: "Web Application", count: projects.filter((p) => p.type === "Web Application").length },
  { name: "ML Model", count: projects.filter((p) => p.type === "ML Model").length },
]

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter)

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
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
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
              variant={activeFilter === category.name ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.name)}
              className={`text-xs sm:text-sm px-3 sm:px-4 py-2 transition-all duration-300 ${
                activeFilter === category.name
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              }`}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
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
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 lg:left-4">
                    <Badge
                      variant={project.industry === "Healthcare" ? "default" : "secondary"}
                      className={
                        project.industry === "Healthcare"
                          ? "bg-green-600 text-white text-xs"
                          : "bg-blue-600 text-white text-xs"
                      }
                    >
                      <project.icon className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-1" />
                      {project.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2">{project.category}</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-1 sm:mb-2">
                      Key Results:
                    </h4>
                    <ul className="space-y-0.5 sm:space-y-1">
                      {project.results.slice(0, 2).map((result, idx) => (
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
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-blue-200 text-blue-600 px-1.5 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs border-blue-200 text-blue-600 px-1.5 py-0.5">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Link href={`/portfolio/${project.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 text-xs sm:text-sm bg-transparent"
                    >
                      <ExternalLink className="mr-1.5 sm:mr-2" size={14} />
                      Learn More
                    </Button>
                  </Link>
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
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with custom websites, web applications, or machine
            learning models.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
