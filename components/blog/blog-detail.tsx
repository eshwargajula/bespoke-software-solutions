"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Mock blog post data - in a real app, this would come from a CMS or API
const getBlogPost = (slug: string) => {
  const posts = {
    "future-of-web-development-2024": {
      title: "The Future of Web Development: Trends to Watch in 2024",
      content: `
        <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications.</p>
        
        <h2>1. AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot and similar tools are just the beginning.</p>
        
        <h2>2. Progressive Web Apps (PWAs)</h2>
        <p>PWAs continue to bridge the gap between web and native applications. With improved offline capabilities and native-like experiences, PWAs are becoming the preferred choice for many businesses.</p>
        
        <h2>3. WebAssembly (WASM)</h2>
        <p>WebAssembly is enabling high-performance applications in the browser. Languages like Rust and C++ can now run at near-native speeds in web browsers, opening up new possibilities for web applications.</p>
        
        <h2>4. Serverless Architecture</h2>
        <p>Serverless computing is simplifying deployment and scaling. With platforms like Vercel, Netlify, and AWS Lambda, developers can focus on code rather than infrastructure management.</p>
        
        <h2>Conclusion</h2>
        <p>The future of web development is bright, with new technologies making development more efficient and applications more powerful. Staying updated with these trends is crucial for any developer looking to remain competitive in the field.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      category: "Trends & News",
      date: "2024-01-15",
      author: "Alex Thompson",
      authorBio:
        "Alex is the CEO and founder of CodeRise Digital with over 10 years of experience in web development and digital strategy.",
      authorAvatar: "/placeholder.svg?height=80&width=80",
    },
  }

  return posts[slug as keyof typeof posts] || posts["future-of-web-development-2024"]
}

const relatedPosts = [
  {
    title: "Building Responsive Designs with Tailwind CSS",
    slug: "responsive-designs-tailwind-css",
    image: "/placeholder.svg?height=150&width=200",
  },
  {
    title: "Optimizing Website Performance: A Complete Guide",
    slug: "optimizing-website-performance-guide",
    image: "/placeholder.svg?height=150&width=200",
  },
]

export function BlogDetail({ slug }: { slug: string }) {
  const post = getBlogPost(slug)

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="bg-blue-600 text-white mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{post.title}</h1>

              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                <Calendar size={16} className="mr-2" />
                <span className="mr-6">{new Date(post.date).toLocaleDateString()}</span>
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-sm text-gray-600 dark:text-gray-400">Share:</span>
                <Button variant="ghost" size="sm">
                  <Twitter size={18} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Facebook size={18} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin size={18} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Author Bio */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src={post.authorAvatar || "/placeholder.svg"}
                    alt={post.author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.author}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.authorBio}</p>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Twitter size={18} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Linkedin size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Read Next</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-40">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{relatedPost.title}</h4>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
