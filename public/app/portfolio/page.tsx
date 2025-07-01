import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

export default function PortfolioPage() {
  return (
    <div className="overflow-hidden">
      <PortfolioHero />
      <PortfolioGrid />
    </div>
  )
}
