import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceProcess } from "@/components/service-process"
import { ServicePricing } from "@/components/service-pricing"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceCTA } from "@/components/service-cta"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

const serviceData = {
  iconName: "Globe",
  title: "Website Design & Development",
  subtitle: "Custom websites that drive results",
  description:
    "We create stunning, responsive websites that not only look great but also perform exceptionally. Our websites are built with modern technologies, optimized for speed, SEO, and user experience.",
  heroImage: "/images/website-development.jpg",
  features: [
    "Responsive Design",
    "SEO Optimization",
    "Fast Loading Speed",
    "Modern UI/UX",
    "Content Management System",
    "Analytics Integration",
    "Security Features",
    "Mobile-First Approach",
  ],
  benefits: [
    {
      title: "Increased Online Presence",
      description: "A professional website establishes credibility and helps you reach more customers online.",
    },
    {
      title: "Better User Experience",
      description: "Intuitive navigation and responsive design ensure visitors have a great experience on any device.",
    },
    {
      title: "Higher Search Rankings",
      description: "SEO-optimized websites rank better in search engines, driving more organic traffic.",
    },
    {
      title: "Improved Conversions",
      description: "Strategic design and clear calls-to-action help convert visitors into customers.",
    },
  ],
  technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"],
  process: [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and project requirements.",
    },
    {
      step: 2,
      title: "Design & Wireframing",
      description: "Create wireframes and design mockups that align with your brand and objectives.",
    },
    {
      step: 3,
      title: "Development",
      description: "Build your website using modern technologies and best practices.",
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Thorough testing across devices and browsers before launching your site.",
    },
    {
      step: 5,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your site running smoothly.",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Contact form", "1 month support"],
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 pages",
        "Custom design",
        "Advanced SEO",
        "CMS integration",
        "Analytics setup",
        "3 months support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Performance optimization",
        "Ongoing support",
      ],
    },
  ],
  faqs: [
    {
      question: "How long does it take to build a website?",
      answer:
        "Typically 2-6 weeks depending on complexity. Simple sites take 2-3 weeks, while complex sites with custom features may take 4-6 weeks.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "All our websites are built with a mobile-first approach and are fully responsive across all devices.",
    },
    {
      question: "Do you provide website hosting?",
      answer:
        "We can recommend reliable hosting providers and help with setup. We also offer managed hosting solutions for an additional fee.",
    },
    {
      question: "Can I update the website content myself?",
      answer:
        "Yes, we integrate user-friendly content management systems that allow you to easily update text, images, and other content.",
    },
  ],
}

export default function WebsiteDesignDevelopmentPage() {
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
