"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="section-spacing bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Signup */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Stay Connected to the Mountains</h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Get insider tips, trek updates, and inspiring stories from the Himalayas delivered to your inbox. Plus,
                be the first to know about special offers and new routes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    "Subscribed!"
                  ) : (
                    <>
                      Subscribe
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold">Ready to Start Planning?</h3>

            <div className="space-y-4">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Call Us Now</div>
                      <div className="text-sm text-primary-foreground/80">+977 9861060548</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-sm text-primary-foreground/80">info@neptrek.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="font-semibold">Visit Our Office</div>
                      <div className="text-sm text-primary-foreground/80">Lakeside, Pokhara, Nepal</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Get Free Trek Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
