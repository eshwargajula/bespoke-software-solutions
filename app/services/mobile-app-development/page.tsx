import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceProcess } from "@/components/service-process"
import { ServicePricing } from "@/components/service-pricing"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceCTA } from "@/components/service-cta"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

const serviceData = {
  iconName: "Smartphone",
  title: "Mobile App Development",
  subtitle: "Native and cross-platform mobile solutions",
  description:
    "Reach your customers on their mobile devices with intuitive, feature-rich mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter.",
  heroImage: "/images/mobile-development.jpg",
  features: [
    "iOS & Android Development",
    "Cross-platform Solutions",
    "App Store Optimization",
    "Push Notifications",
    "Offline Functionality",
    "In-app Purchases",
    "Social Media Integration",
    "Analytics & Tracking",
  ],
  benefits: [
    {
      title: "Wider Audience Reach",
      description: "Mobile apps help you reach customers wherever they are, increasing engagement and accessibility.",
    },
    {
      title: "Enhanced User Experience",
      description: "Native mobile features provide smoother, more intuitive user experiences than web browsers.",
    },
    {
      title: "Increased Customer Loyalty",
      description: "Mobile apps with push notifications and personalized content improve customer retention.",
    },
    {
      title: "Offline Accessibility",
      description: "Apps can work offline, ensuring users can access key features even without internet connection.",
    },
  ],
  technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS", "Redux", "GraphQL"],
  process: [
    {
      step: 1,
      title: "Strategy & Planning",
      description: "Define app objectives, target audience, and platform strategy (iOS, Android, or both).",
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Create intuitive designs following platform-specific guidelines and best practices.",
    },
    {
      step: 3,
      title: "Development",
      description: "Build the app using chosen technology stack with regular testing and feedback.",
    },
    {
      step: 4,
      title: "Testing & QA",
      description: "Comprehensive testing across devices, operating systems, and usage scenarios.",
    },
    {
      step: 5,
      title: "App Store Launch",
      description: "Handle app store submission, optimization, and launch strategy.",
    },
  ],
  pricing: [
    {
      name: "Simple App",
      price: "$12,999",
      description: "Basic mobile apps with essential features",
      features: [
        "Single platform (iOS or Android)",
        "Basic UI/UX design",
        "Core functionality",
        "App store submission",
        "3 months support",
      ],
    },
    {
      name: "Advanced App",
      price: "$24,999",
      description: "Feature-rich apps with complex functionality",
      features: [
        "Cross-platform development",
        "Custom UI/UX design",
        "API integrations",
        "Push notifications",
        "Analytics integration",
        "6 months support",
      ],
      popular: true,
    },
    {
      name: "Enterprise App",
      price: "Custom",
      description: "Large-scale apps with enterprise features",
      features: [
        "Multiple platforms",
        "Advanced security",
        "Complex integrations",
        "Custom backend",
        "Ongoing maintenance",
      ],
    },
  ],
  faqs: [
    {
      question: "Should I build for iOS, Android, or both?",
      answer:
        "It depends on your target audience and budget. We can help analyze your user base and recommend the best platform strategy.",
    },
    {
      question: "What's the difference between native and cross-platform development?",
      answer:
        "Native apps are built specifically for one platform, offering best performance. Cross-platform apps work on multiple platforms but may have some limitations.",
    },
    {
      question: "How long does app development take?",
      answer:
        "Simple apps take 3-4 months, while complex apps can take 6-12 months. Timeline depends on features, platforms, and complexity.",
    },
    {
      question: "Do you help with app store submission?",
      answer:
        "Yes, we handle the entire app store submission process, including optimization for better visibility and downloads.",
    },
  ],
}

export default function MobileAppDevelopmentPage() {
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
