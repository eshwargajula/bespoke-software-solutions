import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export default function BlogPage() {
  return (
    <div className="overflow-hidden">
      <BlogHero />
      <BlogGrid />
    </div>
  )
}
