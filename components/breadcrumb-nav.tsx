"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { motion } from "framer-motion"

export function BreadcrumbNav() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      return { name, href }
    }),
  ]

  if (pathname === "/") return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
              {index === 0 ? (
                <Link
                  href={item.href}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Home className="w-4 h-4 mr-1" />
                  {item.name}
                </Link>
              ) : index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 dark:text-white font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  )
}
