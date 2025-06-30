"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projectData: Record<string, any> = {
  "medflow-hospital-website": {
    title: "MedFlow Hospital Website",
    category: "Healthcare Website",
    description:
      "A comprehensive hospital website designed to improve patient experience and streamline healthcare services online.",
    image: "/images/projects/healthcare-app.webp",
    tags: ["React", "Next.js", "HIPAA", "Responsive", "SEO", "Accessibility"],
    industry: "Healthcare",
    duration: "3 months",
    teamSize: "5 developers",
    challenge:
      "The hospital needed a modern, HIPAA-compliant website that would allow patients to easily find information, book appointments, and access their medical records securely.",
    solution:
      "We developed a responsive, user-friendly website with integrated patient portal, online appointment booking, and comprehensive service information. The site was built with HIPAA compliance in mind and optimized for both desktop and mobile devices.",
    results: [
      "50% increase in online appointments",
      "HIPAA compliant design and infrastructure",
      "Mobile-first approach with 95% mobile satisfaction",
      "40% reduction in phone call volume",
      "Improved patient satisfaction scores by 35%",
    ],
    features: [
      "Patient Portal Integration",
      "Online Appointment Booking",
      "Doctor Directory with Profiles",
      "Service Information Pages",
      "Emergency Contact Information",
      "Multi-language Support",
      "WCAG 2.1 AA Accessibility",
      "HIPAA Compliant Security",
    ],
    technologies: [
      { name: "React", description: "Frontend framework for dynamic user interfaces" },
      { name: "Next.js", description: "Full-stack React framework for production" },
      { name: "TypeScript", description: "Type-safe JavaScript for better development" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      { name: "Node.js", description: "Backend runtime environment" },
      { name: "PostgreSQL", description: "Secure database for patient data" },
    ],
  },
  "startup-launch-website": {
    title: "StartupLaunch Website",
    category: "Startup Website",
    description:
      "A professional startup website designed to attract investors and showcase innovative technology solutions.",
    image: "/images/projects/ecommerce-platform.webp",
    tags: ["Next.js", "TypeScript", "SEO", "Fast Loading", "Animation", "Conversion"],
    industry: "Startup",
    duration: "2 months",
    teamSize: "4 developers",
    challenge:
      "The startup needed a compelling website that would help them secure Series A funding while effectively communicating their value proposition to both investors and potential customers.",
    solution:
      "We created a high-performance website with engaging animations, clear value propositions, and investor-focused content. The site was optimized for speed, SEO, and conversion to maximize funding opportunities.",
    results: [
      "$2M Series A funding secured",
      "300% increase in qualified leads",
      "Perfect Google PageSpeed scores",
      "Featured in 5 major tech publications",
      "50K+ monthly website visitors",
    ],
    features: [
      "Investor Relations Section",
      "Product Demo Videos",
      "Team Profiles and Bios",
      "Press and Media Coverage",
      "Contact and Lead Forms",
      "Blog and News Updates",
      "Performance Analytics",
      "Social Media Integration",
    ],
    technologies: [
      { name: "Next.js", description: "React framework for optimal performance" },
      { name: "TypeScript", description: "Type-safe development environment" },
      { name: "Framer Motion", description: "Animation library for engaging interactions" },
      { name: "Tailwind CSS", description: "Responsive design system" },
      { name: "Vercel", description: "Deployment and hosting platform" },
      { name: "Google Analytics", description: "Performance tracking and insights" },
    ],
  },
  "predictive-care-ai": {
    title: "Predictive Care AI",
    category: "Healthcare ML Model",
    description:
      "An advanced machine learning model that predicts patient readmission risk and helps optimize care plans for better outcomes.",
    image: "/images/projects/healthcare-app.webp",
    tags: ["Python", "TensorFlow", "Healthcare Data", "Predictive", "AI", "Machine Learning"],
    industry: "Healthcare",
    duration: "6 months",
    teamSize: "3 ML engineers",
    challenge:
      "The hospital system was experiencing high readmission rates and needed a way to identify at-risk patients early to provide preventive care and reduce costs.",
    solution:
      "We developed a sophisticated machine learning model using patient history, vital signs, and treatment data to predict readmission risk. The model integrates with existing hospital systems to provide real-time alerts and care recommendations.",
    results: [
      "25% reduction in patient readmissions",
      "85% prediction accuracy rate",
      "Early intervention alerts for high-risk patients",
      "$2M annual cost savings",
      "Improved patient outcomes and satisfaction",
    ],
    features: [
      "Real-time Risk Assessment",
      "Predictive Analytics Dashboard",
      "Care Plan Recommendations",
      "Integration with EHR Systems",
      "Automated Alert System",
      "Historical Data Analysis",
      "Performance Monitoring",
      "HIPAA Compliant Processing",
    ],
    technologies: [
      { name: "Python", description: "Primary programming language for ML development" },
      { name: "TensorFlow", description: "Deep learning framework for model training" },
      { name: "Pandas", description: "Data manipulation and analysis library" },
      { name: "Scikit-learn", description: "Machine learning algorithms and tools" },
      { name: "PostgreSQL", description: "Secure database for healthcare data" },
      { name: "Docker", description: "Containerization for deployment" },
    ],
  },
}

interface PortfolioDetailProps {
  id: string
}

export function PortfolioDetail({ id }: PortfolioDetailProps) {
  const project = projectData[id]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    )
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/#portfolio">
              <Button variant="ghost" className="mb-6 text-blue-600 hover:text-blue-700">
                <ArrowLeft className="mr-2" size={16} />
                Back to Portfolio
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {project.category}
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                    <Calendar className="mr-2" size={16} />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                    <Users className="mr-2" size={16} />
                    {project.teamSize}
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                >
                  Start Similar Project
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 text-red-500" size={20} />
                      The Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">{project.challenge}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="mr-2 text-green-500" size={20} />
                      Our Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">{project.solution}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Technologies Used</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.technologies.map((tech: any, index: number) => (
                        <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{tech.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Key Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.results.map((result: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 text-green-500 flex-shrink-0" size={16} />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string, index: number) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create a similar solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/#portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
