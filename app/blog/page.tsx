import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"

export default function BlogPage() {
  return (
    <div className="overflow-hidden">
      <BlogHero />
      <BlogGrid />
    </div>
  )
}
