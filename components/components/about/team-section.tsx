"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    avatar: "/images/team/alex-thompson.jpg",
    bio: "Visionary leader with 10+ years in tech industry.",
  },
  {
    name: "Sarah Kim",
    role: "CTO",
    avatar: "/images/team/sarah-kim.jpg",
    bio: "Full-stack expert specializing in scalable architectures.",
  },
  {
    name: "David Rodriguez",
    role: "Lead Designer",
    avatar: "/images/team/david-rodriguez.jpg",
    bio: "Creative designer focused on user-centered experiences.",
  },
  {
    name: "Emily Chen",
    role: "Mobile Developer",
    avatar: "/images/team/emily-chen.jpg",
    bio: "iOS and Android specialist with passion for innovation.",
  },
  {
    name: "Michael Johnson",
    role: "Backend Developer",
    avatar: "/images/team/michael-johnson.jpg",
    bio: "Database and API expert ensuring robust solutions.",
  },
  {
    name: "Lisa Wang",
    role: "Project Manager",
    avatar: "/images/team/lisa-wang.jpg",
    bio: "Agile methodology expert keeping projects on track.",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our diverse team of experts brings together creativity, technical expertise, and passion for innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Linkedin size={18} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Twitter size={18} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
