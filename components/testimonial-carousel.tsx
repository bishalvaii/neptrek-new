"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    trek: "Everest Base Camp Trek",
    rating: 5,
    text: "NepTrek made my dream of reaching Everest Base Camp a reality. Our guide Pemba was incredibly knowledgeable and made sure we were safe every step of the way. The experience exceeded all my expectations!",
    image: "/smiling-trekker.png",
  },
  {
    id: 2,
    name: "Marcus Weber",
    location: "Germany",
    trek: "Annapurna Circuit Trek",
    rating: 5,
    text: "Outstanding organization and genuine care for trekkers. The local insights our guide shared made this journey so much more meaningful. I felt like I was traveling with family rather than a tour group.",
    image: "/happy-trekker.png",
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Australia",
    trek: "Langtang Valley Trek",
    rating: 5,
    text: "After the 2015 earthquake, I wanted to support Nepal's recovery through tourism. NepTrek showed me how my visit directly helped local communities rebuild. Beautiful trek with a meaningful purpose.",
    image: "/female-trekker-prayer-flags.png",
  },
  {
    id: 4,
    name: "David Chen",
    location: "Canada",
    trek: "Manaslu Circuit Trek",
    rating: 5,
    text: "If you want an authentic, off-the-beaten-path experience, NepTrek is perfect. The Manaslu circuit was challenging but incredibly rewarding. Excellent guides and genuine hospitality throughout.",
    image: "/female-trekker-prayer-flags.png",
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    location: "Spain",
    trek: "Gokyo Lakes Trek",
    rating: 5,
    text: "The Gokyo Lakes trek was absolutely magical. Crystal clear lakes, stunning mountain views, and the most welcoming local people. NepTrek's attention to detail and safety was impressive.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Stories from the Trail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hear from fellow adventurers who've experienced the magic of Nepal's mountains with NepTrek.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                <div className="flex-1 text-center md:text-left space-y-4">
                  <Quote className="h-8 w-8 text-primary/30 mx-auto md:mx-0" />

                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center md:justify-start space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="space-y-1">
                      <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].location} • {testimonials[currentIndex].trek}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
