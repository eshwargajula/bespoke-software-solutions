"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const categories = ["All", "Web Dev", "UI/UX", "Mobile Development", "Trends & News"]

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    image: "/images/blog/web-development-trends.jpg",
    category: "Trends & News",
    date: "2024-01-15",
    author: "Alex Thompson",
    slug: "future-of-web-development-2024",
  },
  {
    title: "Building Responsive Designs with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive designs efficiently using Tailwind CSS utility classes.",
    image: "/images/blog/tailwind-css.jpg",
    category: "Web Dev",
    date: "2024-01-12",
    author: "Sarah Kim",
    slug: "responsive-designs-tailwind-css",
  },
  {
    title: "UX Design Principles for Better User Engagement",
    excerpt: "Discover key UX design principles that can significantly improve user engagement and conversion rates.",
    image: "/images/blog/ux-design.jpg",
    category: "UI/UX",
    date: "2024-01-10",
    author: "David Rodriguez",
    slug: "ux-design-principles-engagement",
  },
  {
    title: "React Native vs Flutter: Choosing the Right Framework",
    excerpt:
      "A comprehensive comparison of React Native and Flutter to help you choose the best framework for your mobile app.",
    image: "/images/blog/mobile-frameworks.jpg",
    category: "Mobile Development",
    date: "2024-01-08",
    author: "Emily Chen",
    slug: "react-native-vs-flutter-comparison",
  },
  {
    title: "Optimizing Website Performance: A Complete Guide",
    excerpt: "Learn essential techniques to optimize your website performance and improve user experience.",
    image: "/images/blog/performance-optimization.jpg",
    category: "Web Dev",
    date: "2024-01-05",
    author: "Michael Johnson",
    slug: "optimizing-website-performance-guide",
  },
  {
    title: "The Psychology of Color in Web Design",
    excerpt: "Understand how color psychology can influence user behavior and improve your web design effectiveness.",
    image: "/images/blog/color-psychology.jpg",
    category: "UI/UX",
    date: "2024-01-03",
    author: "Lisa Wang",
    slug: "psychology-of-color-web-design",
  },
]

export function BlogGrid() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <User size={16} className="mr-2" />
                    <span>{post.author}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full group bg-transparent">
                      Read More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
