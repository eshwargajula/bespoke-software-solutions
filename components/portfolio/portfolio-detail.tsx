"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Globe } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"


// Mock project data - in a real app, this would come from a CMS or API
const getProject = (slug: string) => {
  const projects = {
    "e-commerce-platform": {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution built with modern technologies, featuring advanced inventory management, secure payment processing, and detailed analytics dashboard.",
      fullDescription: `
        <p>This e-commerce platform was designed to handle high-volume transactions while providing an exceptional user experience. The project involved creating a scalable architecture that could grow with the client's business needs.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Advanced inventory management system</li>
          <li>Multi-payment gateway integration</li>
          <li>Real-time analytics dashboard</li>
          <li>Mobile-responsive design</li>
          <li>SEO optimization</li>
          <li>Admin panel for easy management</li>
        </ul>
        
        <h2>Technical Implementation</h2>
        <p>The platform was built using React for the frontend, Node.js for the backend, and MongoDB for data storage. We implemented Redis for caching and used Stripe for payment processing.</p>
        
        <h2>Results</h2>
        <p>The platform resulted in a 40% increase in online sales and improved customer satisfaction scores by 35%. The client was able to expand their product catalog by 200% without performance issues.</p>
      `,
      images: [
        "/images/projects/ecommerce-platform.webp",
        "/images/projects/ecommerce-platform.webp",
        "/images/projects/ecommerce-platform.webp",
        "/images/projects/ecommerce-platform.webp",
      ],
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      category: "Web Application",
      client: "TechMart Inc.",
      duration: "4 months",
      year: "2023",
      liveUrl: "",
      githubUrl: "https://github.com/example",
    },
    "healthcare-mobile-app": {
      title: "Healthcare Mobile App",
      description:
        "A comprehensive healthcare management app for patients and doctors with appointment scheduling, telemedicine features, and secure patient data management.",
      fullDescription: `
        <p>This healthcare mobile application was developed to bridge the gap between patients and healthcare providers, offering a seamless digital health experience.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Appointment scheduling and management</li>
          <li>Telemedicine video consultations</li>
          <li>Secure patient data storage</li>
          <li>Prescription management</li>
          <li>Health tracking and monitoring</li>
          <li>Push notifications for reminders</li>
        </ul>
        
        <h2>Technical Implementation</h2>
        <p>Built using React Native for cross-platform compatibility, with Firebase for real-time data synchronization and secure authentication. The app complies with HIPAA regulations for healthcare data protection.</p>
        
        <h2>Results</h2>
        <p>The app improved patient engagement by 60% and reduced no-show appointments by 45%. Healthcare providers reported 30% time savings in administrative tasks.</p>
      `,
      images: [
        "/images/projects/healthcare-app.webp",
        "/images/projects/healthcare-app.webp",
        "/images/projects/healthcare-app.webp",
        "/images/projects/healthcare-app.webp",
      ],
      tags: ["React Native", "Firebase", "Healthcare", "Real-time", "HIPAA"],
      category: "Mobile App",
      client: "HealthCare Plus",
      duration: "6 months",
      year: "2023",
      liveUrl: "https://apps.apple.com/example",
      githubUrl: null,
    },
  }

  return projects[slug as keyof typeof projects] || projects["e-commerce-platform"]
}

const relatedProjects = [
  {
    title: "Financial Dashboard",
    slug: "financial-dashboard",
    image: "/images/projects/financial-dashboard.webp",
    category: "Web Application",
  },
  {
    title: "Restaurant Website",
    slug: "restaurant-website",
    image: "/images/projects/restaurant-website.webp",
    category: "Website",
  },
]

export function PortfolioDetail({ slug }: { slug: string }) {
  const project = getProject(slug)
  
  return (
    <>
      <Navigation />
    <div className="pt-32 pb-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Back Button */}
          <Link href="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <Badge className="bg-blue-600 text-white mb-4">{project.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
                    <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Duration</h3>
                    <p className="text-gray-600 dark:text-gray-400">{project.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Year</h3>
                    <p className="text-gray-600 dark:text-gray-400">{project.year}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Category</h3>
                    <p className="text-gray-600 dark:text-gray-400">{project.category}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2" size={18} />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={18} />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                  quality={90}
                />
              </div>
            </div>

            {/* Project Images Gallery */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 2}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                    quality={85}
                  />
                </div>
              ))}
            </div>

            {/* Project Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
            </div>

            {/* Related Projects */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Projects</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Card key={relatedProject.slug} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-40">
                        <Image
                          src={relatedProject.image || "/placeholder.svg"}
                          alt={relatedProject.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center rounded-t-lg"
                          quality={85}
                        />
                      </div>
                      <div className="p-4">
                        <Badge variant="outline" className="mb-2">
                          {relatedProject.category}
                        </Badge>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{relatedProject.title}</h4>
                        <Link href={`/portfolio/${relatedProject.slug}`}>
                          <Button variant="outline" size="sm">
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
    </>
  )
}
