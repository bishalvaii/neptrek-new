"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TrekFilters } from "@/components/trek-filters"
import { TrekGrid } from "@/components/trek-grid"

export default function TreksPage() {
  const [filters, setFilters] = useState({
    region: "all",
    difficulty: "all",
    duration: [1, 30],
    altitude: [1000, 6000],
    season: "all",
    sortBy: "popularity",
  })

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=800&fit=crop"
              alt="Trekking group in the mountains"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-primary-foreground">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Discover Your Perfect Trek</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
              From classic routes to hidden gems, explore Nepal's diverse trekking opportunities. Filter by your
              preferences to find the adventure that calls to you.
            </p>
          </div>
        </section>

        {/* Filters and Trek Grid */}
        <section className="section-spacing">
          <div className="max-w-7xl mx-auto container-padding">
            <TrekFilters onFiltersChange={handleFiltersChange} />
            <TrekGrid filters={filters} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
