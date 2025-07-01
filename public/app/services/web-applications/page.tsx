import { ServiceDetailHero } from "@/components/services/service-detail-hero"
import { ServiceDetailContent } from "@/components/services/service-detail-content"
import { ServiceProcess } from "@/components/services/service-process"
import { ServicePricing } from "@/components/services/service-pricing"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ServiceCTA } from "@/components/services/service-cta"
import { BreadcrumbNav } from "@/components/enhancements/breadcrumb-nav"

const serviceData = {
  iconName: "Code",
  title: "Web Applications",
  subtitle: "Powerful, scalable web applications",
  description:
    "Build custom web applications that streamline your business processes and provide exceptional user experiences. From simple tools to complex enterprise solutions, we develop scalable applications tailored to your needs.",
  heroImage: "/images/web-applications.jpg",
  features: [
    "Custom Development",
    "Database Integration",
    "User Authentication",
    "API Development",
    "Real-time Features",
    "Cloud Deployment",
    "Security Implementation",
    "Performance Optimization",
  ],
  benefits: [
    {
      title: "Streamlined Operations",
      description: "Automate business processes and reduce manual work with custom web applications.",
    },
    {
      title: "Scalable Solutions",
      description: "Applications built to grow with your business and handle increasing user loads.",
    },
    {
      title: "Enhanced Productivity",
      description: "Custom tools designed specifically for your workflow improve team efficiency.",
    },
    {
      title: "Data-Driven Insights",
      description: "Built-in analytics and reporting help you make informed business decisions.",
    },
  ],
  technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis"],
  process: [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "Deep dive into your business processes and technical requirements.",
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "Design scalable architecture and choose the right technology stack.",
    },
    {
      step: 3,
      title: "MVP Development",
      description: "Build a minimum viable product to validate core functionality.",
    },
    {
      step: 4,
      title: "Iterative Development",
      description: "Add features incrementally based on feedback and testing.",
    },
    {
      step: 5,
      title: "Deployment & Scaling",
      description: "Deploy to production and implement scaling strategies as needed.",
    },
  ],
  pricing: [
    {
      name: "Simple App",
      price: "$8,999",
      description: "Basic web applications with core functionality",
      features: [
        "User authentication",
        "Basic CRUD operations",
        "Simple dashboard",
        "Database integration",
        "3 months support",
      ],
    },
    {
      name: "Advanced App",
      price: "$19,999",
      description: "Feature-rich applications with complex logic",
      features: [
        "Advanced user roles",
        "API integrations",
        "Real-time features",
        "Advanced analytics",
        "Payment processing",
        "6 months support",
      ],
      popular: true,
    },
    {
      name: "Enterprise App",
      price: "Custom",
      description: "Large-scale applications with enterprise features",
      features: [
        "Custom architecture",
        "Advanced security",
        "Third-party integrations",
        "Performance optimization",
        "Ongoing support",
      ],
    },
  ],
  faqs: [
    {
      question: "What's the difference between a website and web application?",
      answer:
        "Websites are primarily informational, while web applications are interactive tools that allow users to perform specific tasks and manipulate data.",
    },
    {
      question: "How do you ensure the application is secure?",
      answer:
        "We implement industry-standard security practices including encryption, secure authentication, input validation, and regular security audits.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes, we specialize in creating integrations with existing databases, APIs, and third-party services to ensure seamless workflow.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes, we offer comprehensive maintenance packages including updates, bug fixes, security patches, and feature enhancements.",
    },
  ],
}

export default function WebApplicationsPage() {
  return (
    <div className="overflow-hidden">
      <BreadcrumbNav />
      <ServiceDetailHero service={serviceData} />
      <ServiceDetailContent service={serviceData} />
      <ServiceProcess process={serviceData.process} />
      <ServicePricing pricing={serviceData.pricing} />
      <ServiceFAQ faqs={serviceData.faqs} />
      <ServiceCTA />
    </div>
  )
}
