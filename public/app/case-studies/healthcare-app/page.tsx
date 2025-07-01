import { CaseStudyTemplate } from "@/components/case-studies/case-study-template"
import { BreadcrumbNav } from "@/components/enhancements/breadcrumb-nav"

const caseStudyData = {
  title: "Healthcare Mobile App Development",
  client: "MedConnect",
  industry: "Healthcare",
  duration: "6 months",
  teamSize: "8 developers",
  heroImage: "/images/projects/healthcare-app.jpg",
  challenge:
    "MedConnect needed a HIPAA-compliant mobile application to connect patients with healthcare providers. The challenge was to create a secure, user-friendly platform that could handle sensitive medical data while providing seamless communication between patients and doctors.",
  solution:
    "We developed a comprehensive healthcare mobile app with end-to-end encryption, secure video calling, appointment scheduling, and electronic health records integration. The app was built with React Native for cross-platform compatibility and implemented advanced security measures to ensure HIPAA compliance.",
  results: [
    {
      metric: "User Adoption",
      value: "10K+",
      description: "Over 10,000 active users within first 6 months",
    },
    {
      metric: "Appointment Efficiency",
      value: "60%",
      description: "Appointment scheduling efficiency improved by 60%",
    },
    {
      metric: "Patient Satisfaction",
      value: "4.8/5",
      description: "Average patient satisfaction rating of 4.8 out of 5",
    },
  ],
  technologies: ["React Native", "Node.js", "PostgreSQL", "WebRTC", "AWS", "Docker"],
  features: [
    "HIPAA-compliant secure messaging",
    "Video consultation capabilities",
    "Appointment scheduling system",
    "Electronic health records integration",
    "Prescription management",
    "Real-time notifications",
  ],
  testimonial: {
    quote:
      "The app has revolutionized how we interact with our patients. It's secure, intuitive, and has significantly improved our operational efficiency.",
    author: "Dr. Michael Chen",
    position: "Chief Medical Officer, MedConnect",
  },
}

export default function HealthcareAppPage() {
  return (
    <div>
      <BreadcrumbNav />
      <CaseStudyTemplate {...caseStudyData} />
    </div>
  )
}
