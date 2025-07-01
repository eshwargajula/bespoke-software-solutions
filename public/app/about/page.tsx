import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { Timeline } from "@/components/about/timeline"
import { TeamSection } from "@/components/about/team-section"
import { BusinessStats } from "@/components/about/business-stats"

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <MissionVision />
      <Timeline />
      <TeamSection />
      <BusinessStats />
    </div>
  )
}
