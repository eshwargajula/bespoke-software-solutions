import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { Timeline } from "@/components/timeline"
import { TeamSection } from "@/components/team-section"
import { BusinessStats } from "@/components/business-stats"

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
