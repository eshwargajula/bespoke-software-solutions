"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Tablet, Monitor, Laptop } from "lucide-react"

export function ResponsiveDemo() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Fully Responsive Design</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our website adapts perfectly to all screen sizes and devices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle>Mobile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <Badge variant="secondary">320px - 768px</Badge>
                <p>• Single column layout</p>
                <p>• Touch-friendly buttons</p>
                <p>• Collapsible navigation</p>
                <p>• Optimized images</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Tablet className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle>Tablet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <Badge variant="secondary">768px - 1024px</Badge>
                <p>• Two column layout</p>
                <p>• Larger touch targets</p>
                <p>• Expanded navigation</p>
                <p>• Grid adjustments</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Laptop className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle>Laptop</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <Badge variant="secondary">1024px - 1440px</Badge>
                <p>• Multi-column layout</p>
                <p>• Full navigation bar</p>
                <p>• Hover effects</p>
                <p>• Optimal spacing</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <CardTitle>Desktop</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <Badge variant="secondary">1440px+</Badge>
                <p>• Wide layout</p>
                <p>• Maximum content width</p>
                <p>• Enhanced animations</p>
                <p>• Full feature set</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
