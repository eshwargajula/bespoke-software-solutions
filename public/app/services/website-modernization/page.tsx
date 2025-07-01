import { ServiceDetailHero } from "@/components/services/service-detail-hero"
import { ServiceDetailContent } from "@/components/services/service-detail-content"
import { ServiceProcess } from "@/components/services/service-process"
import { ServicePricing } from "@/components/services/service-pricing"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ServiceCTA } from "@/components/services/service-cta"
import { BreadcrumbNav } from "@/components/enhancements/breadcrumb-nav"

const serviceData = {
  iconName: "RefreshCw",
  title: "Website Modernization",
  subtitle: "Transform your outdated website into a modern digital asset",
  description:
    "Breathe new life into your existing website with our comprehensive redesign and modernization services. We analyze your current site, identify improvement opportunities, and create a modern, high-performing website that drives results.",
  heroImage: "/images/website-redesign.jpg",
  features: [
    "Performance Audit",
    "Modern Design",
    "Mobile Optimization",
    "SEO Improvements",
    "Security Updates",
    "Content Migration",
    "Speed Optimization",
    "Conversion Optimization",
  ],
  benefits: [
    {
      title: "Improved Performance",
      description: "Modern websites load faster, providing better user experience and higher search rankings.",
    },
    {
      title: "Enhanced Security",
      description: "Updated security measures protect your website and user data from modern threats.",
    },
    {
      title: "Better Mobile Experience",
      description: "Responsive design ensures your site works perfectly on all devices and screen sizes.",
    },
    {
      title: "Higher Conversions",
      description: "Modern design and improved user experience lead to better conversion rates and more leads.",
    },
  ],
  technologies: ["React", "Next.js", "Tailwind CSS", "WordPress", "Shopify", "Webflow", "Figma", "Google Analytics"],
  process: [
    {
      step: 1,
      title: "Website Audit",
      description: "Comprehensive analysis of your current website's performance, design, and functionality.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Create a modernization strategy based on audit findings and business goals.",
    },
    {
      step: 3,
      title: "Design & Development",
      description: "Redesign and rebuild your website with modern technologies and best practices.",
    },
    {
      step: 4,
      title: "Content Migration",
      description: "Carefully migrate existing content while improving structure and SEO optimization.",
    },
    {
      step: 5,
      title: "Launch & Optimization",
      description: "Launch the new site with proper redirects and ongoing optimization based on performance data.",
    },
  ],
  pricing: [
    {
      name: "Refresh",
      price: "$4,999",
      description: "Visual and performance improvements",
      features: [
        "Design refresh",
        "Mobile optimization",
        "Speed improvements",
        "Basic SEO updates",
        "2 months support",
      ],
    },
    {
      name: "Redesign",
      price: "$9,999",
      description: "Complete website transformation",
      features: [
        "Complete redesign",
        "Modern technology stack",
        "Content restructuring",
        "Advanced SEO",
        "Analytics setup",
        "4 months support",
      ],
      popular: true,
    },
    {
      name: "Rebuild",
      price: "Custom",
      description: "Complete rebuild with new functionality",
      features: [
        "Ground-up rebuild",
        "Custom functionality",
        "Advanced integrations",
        "Performance optimization",
        "Ongoing support",
      ],
    },
  ],
  faqs: [
    {
      question: "Will I lose my current search engine rankings?",
      answer:
        "We implement proper redirects and SEO best practices to maintain and often improve your search rankings during the redesign process.",
    },
    {
      question: "Can you work with my existing content?",
      answer:
        "Yes, we can migrate and optimize your existing content, or help create new content that better serves your goals.",
    },
    {
      question: "How long does a website redesign take?",
      answer:
        "Typically 4-8 weeks depending on the scope. Simple refreshes take less time, while complete rebuilds may take longer.",
    },
    {
      question: "Will my website be down during the redesign?",
      answer: "No, we develop the new site separately and only switch over when it's ready, minimizing any downtime.",
    },
  ],
}

export default function WebsiteModernizationPage() {
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
