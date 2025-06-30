import { CaseStudyTemplate } from "@/components/case-study-template"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

const caseStudyData = {
  title: "E-Commerce Platform Success Story",
  client: "TechMart Solutions",
  industry: "E-Commerce",
  duration: "4 months",
  teamSize: "6 developers",
  heroImage: "/images/projects/ecommerce-platform.jpg",
  challenge:
    "TechMart Solutions was struggling with an outdated e-commerce platform that couldn't handle their growing customer base. The site was slow, had poor mobile experience, and lacked modern features like real-time inventory management and personalized recommendations.",
  solution:
    "We built a modern, scalable e-commerce platform using React and Node.js with advanced features including real-time inventory tracking, AI-powered product recommendations, and seamless payment processing. The new platform was designed with mobile-first approach and optimized for performance.",
  results: [
    {
      metric: "Sales Increase",
      value: "150%",
      description: "Online sales increased by 150% within 3 months of launch",
    },
    {
      metric: "Page Load Speed",
      value: "2.1s",
      description: "Average page load time reduced from 8s to 2.1s",
    },
    {
      metric: "Mobile Conversions",
      value: "85%",
      description: "Mobile conversion rate improved by 85%",
    },
  ],
  technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
  features: [
    "Real-time inventory management",
    "AI-powered product recommendations",
    "Advanced search and filtering",
    "Multi-payment gateway integration",
    "Mobile-optimized checkout process",
    "Admin dashboard with analytics",
  ],
  testimonial: {
    quote:
      "CodeRise Digital transformed our business completely. The new platform not only looks amazing but has significantly improved our sales and customer satisfaction.",
    author: "Sarah Johnson",
    position: "CEO, TechMart Solutions",
  },
}

export default function EcommerceSuccessPage() {
  return (
    <div>
      <BreadcrumbNav />
      <CaseStudyTemplate {...caseStudyData} />
    </div>
  )
}
