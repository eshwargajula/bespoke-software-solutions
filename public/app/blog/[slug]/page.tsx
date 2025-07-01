import { BlogDetail } from "@/components/blog/blog-detail"

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="overflow-hidden">
      <BlogDetail slug={params.slug} />
    </div>
  )
}
