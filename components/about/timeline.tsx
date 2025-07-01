"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "Started as a small team with big dreams to revolutionize digital experiences.",
  },
  {
    year: "2020",
    title: "First Major Client",
    description: "Landed our first enterprise client and delivered a game-changing web application.",
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 15+ talented developers and designers.",
  },
  {
    year: "2022",
    title: "100+ Projects",
    description: "Reached the milestone of completing over 100 successful projects.",
  },
  {
    year: "2023",
    title: "Mobile Focus",
    description: "Expanded our services to include comprehensive mobile app development.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Received multiple awards for excellence in web development and client satisfaction.",
  },
]

export function Timeline() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to industry recognition, here's how we've grown over the years.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
