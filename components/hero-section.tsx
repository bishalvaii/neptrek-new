"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Award, MapPin } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Split Layout Container */}
      <div className="relative z-10 w-full mx-auto grid lg:grid-cols-2 gap-12 items-center container-padding">

        {/* Left Content Section */}
        <div className="relative space-y-8">
          {/* Floating Badges - Now positioned relative to content */}
        
          <div className="absolute bottom-36 -right-4 z-20 hidden lg:block">
            <div
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-4 border border-blue-400/30 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2 text-white">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/20">
              <MapPin className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Nepal • Himalayas • Adventure</span>
            </div>

            {/* Enhanced Title */}
            <div className="space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                Discover Nepal's
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-gradient-x">
                  Majestic Himalayas
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
                Experience authentic Himalayan adventures with expert local guides. From Everest Base Camp to hidden
                valleys, we craft unforgettable journeys that respect nature and empower communities.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="cursor-pointer group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  Plan Your Trek
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/blog">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-slate-600 text-white D px-8 py-4 text-lg bg-slate-800/30 backdrop-blur-sm hover:border-slate-500 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform cursor-pointer" />
                  Watch Stories
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-lg">
              {[
                { number: "2+", label: "Years Experience", icon: Award },
                { number: "500+", label: "Happy Trekkers", icon: Star },
                { number: "25+", label: "Trek Routes", icon: MapPin },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:-translate-y-1">
                    <stat.icon className="h-5 w-5 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className={`relative h-[600px] lg:h-[700px] xl:h-[800px] transition-all duration-1200 delay-300 pt-5 ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95 " }`}
        >
          {/* Image Container with Creative Effects */}
          <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl"></div>

            {/* Main Image */}
            <div className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden">
              <img
                src="https://www.amazingnepaltrek.com/uploads/packages/1732803120-Manaslu%20Circuit%20Trek.webp"
                alt="Majestic Himalayan peaks with prayer flags"
                className="w-full h-full object-cover transition-transform duration-[20s] ease-out hover:scale-110"
                style={{
                  transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
                }}
              />

              {/* Image Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Floating Elements on Image */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm font-medium opacity-90">Featured Trek</p>
                      <p className="text-lg font-semibold">Manaslu Circuit</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-90">Duration</p>
                      <p className="text-lg font-semibold">14 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Particles around Image */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </section>
  )
}
