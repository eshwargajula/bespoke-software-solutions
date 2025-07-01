import { PortfolioDetail } from "@/components/portfolio/portfolio-detail"

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="overflow-hidden">
      <PortfolioDetail slug={params.slug} />
    </div>
  )
}
