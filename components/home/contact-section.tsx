"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
          duration: 5000,
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "kilobytekubera@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 81869 83105",
      description: "Everyday from 9am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Warangal, Telangan, India, 506002",
      description: "Come say hello at our office",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Let's Start Your Project
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with us today and let's discuss how we can help
            your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-700 dark:shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="h-12 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@gmail.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="h-12 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Mobile Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 1234567890"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="h-12 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Service Needed *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleInputChange("service", value)}
                      required
                    >
                      <SelectTrigger className="h-12 bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600">
                        <SelectItem value="website-design-development">Website Design & Development</SelectItem>
                        <SelectItem value="web-applications">Web Applications</SelectItem>
                        <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                        <SelectItem value="website-modernization">Website Modernization</SelectItem>
                        <SelectItem value="ecommerce-solutions">E-commerce Solutions</SelectItem>
                        <SelectItem value="enterprise-software">Enterprise Software</SelectItem>
                        <SelectItem value="startup-solutions">Startup Solutions</SelectItem>
                        <SelectItem value="healthcare-solutions">Healthcare Solutions</SelectItem>
                        <SelectItem value="education-technology">Education Technology</SelectItem>
                        <SelectItem value="financial-technology">Financial Technology</SelectItem>
                        <SelectItem value="ai-machine-learning">AI & Machine Learning</SelectItem>
                        <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="consulting-strategy">Consulting & Strategy</SelectItem>
                        <SelectItem value="maintenance-support">Maintenance & Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed dark:shadow-blue-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                We're here to help bring your vision to life. Whether you have a specific project in mind or just want
                to explore possibilities, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{info.content}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Response Guarantee</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                We typically respond to all inquiries within 2-4 hours during business hours. For urgent projects, we
                offer same-day consultations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
