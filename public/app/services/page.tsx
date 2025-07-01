import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <ServicesList />
    </div>
  )
}
