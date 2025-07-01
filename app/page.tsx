import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/home/hero"
import { ServicesSection } from "@/components/home/services-section"
import { IndustriesSection } from "@/components/home/industries-section"
import { AboutSection } from "@/components/home/about-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ContactSection } from "@/components/home/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
