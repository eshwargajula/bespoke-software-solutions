"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const searchData = [
  { title: "Web Development Services", url: "/services/website-design-development", type: "Service" },
  { title: "Mobile App Development", url: "/services/mobile-app-development", type: "Service" },
  { title: "About Our Team", url: "/about", type: "Page" },
  { title: "Contact Us", url: "/contact", type: "Page" },
  { title: "Portfolio Projects", url: "/portfolio", type: "Page" },
  { title: "Latest Blog Posts", url: "/blog", type: "Blog" },
]

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(searchData)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (query) {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
    } else {
      setResults(searchData)
    }
  }, [query])

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="hidden md:flex items-center space-x-2 text-gray-500"
      >
        <Search size={16} />
        <span>Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg mx-4"
            >
              <Card>
                <CardContent className="p-0">
                  <div className="flex items-center border-b px-4 py-3">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search pages, services, blog posts..."
                      className="border-0 focus-visible:ring-0 text-lg"
                      autoFocus
                    />
                    <Button onClick={() => setIsOpen(false)} variant="ghost" size="sm">
                      <X size={16} />
                    </Button>
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {results.length > 0 ? (
                      results.map((item, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border-b last:border-b-0"
                          onClick={() => {
                            window.location.href = item.url
                            setIsOpen(false)
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{item.url}</p>
                            </div>
                            <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{item.type}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                        No results found for "{query}"
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
