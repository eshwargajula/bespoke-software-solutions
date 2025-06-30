import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <div className="overflow-hidden">
      <PortfolioHero />
      <PortfolioGrid />
    </div>
  )
}
