import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <ServicesList />
    </div>
  )
}
