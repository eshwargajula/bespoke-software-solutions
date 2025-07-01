"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <Card className="p-4 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-3">
              <Cookie className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white">We use cookies</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                    We use cookies to enhance your experience and analyze our traffic. By continuing to use our site,
                    you consent to our use of cookies.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button onClick={acceptCookies} size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
                    Accept All
                  </Button>
                  <Button onClick={declineCookies} variant="outline" size="sm" className="text-xs bg-transparent">
                    Decline
                  </Button>
                  <Link href="/privacy" className="text-xs text-blue-600 hover:underline self-center">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <Button
                onClick={() => setIsVisible(false)}
                variant="ghost"
                size="icon"
                className="w-6 h-6 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
