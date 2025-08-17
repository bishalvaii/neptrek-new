"use client"

import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

interface FilterState {
  region: string
  difficulty: string
  duration: number[]
  altitude: number[]
  season: string
  sortBy: string
}

interface TrekGridProps {
  filters: FilterState
}

const allTreks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp Trek",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 14,
    difficulty: "challenging",
    maxAltitude: 5364,
    bestSeason: ["spring", "autumn"],
    price: 1299,
    region: "everest",
    rating: 4.9,
    reviewCount: 324,
    description: "The ultimate Himalayan adventure to the base of the world's highest peak.",
    highlights: ["Namche Bazaar", "Tengboche Monastery", "Kala Patthar viewpoint"],
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit Trek",
    image: "https://images.unsplash.com/photo-1678501218653-d3b60b2e4136?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 16,
    difficulty: "moderate",
    maxAltitude: 5416,
    bestSeason: ["spring", "autumn"],
    price: 1199,
    region: "annapurna",
    rating: 4.8,
    reviewCount: 256,
    description: "Classic circuit trek through diverse landscapes and cultures.",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Poon Hill sunrise"],
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley Trek",
    image: "https://images.unsplash.com/photo-1643548947288-fbf86caf414a?q=80&w=802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 10,
    difficulty: "moderate",
    maxAltitude: 4984,
    bestSeason: ["spring", "autumn"],
    price: 899,
    region: "langtang",
    rating: 4.7,
    reviewCount: 189,
    description: "Pristine valley trek with rich Tamang culture and stunning mountain views.",
    highlights: ["Kyanjin Gompa", "Langtang Lirung views", "Tamang villages"],
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit Trek",
    image: "https://images.unsplash.com/photo-1751566609738-e1ed580bcb33?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 18,
    difficulty: "challenging",
    maxAltitude: 5106,
    bestSeason: ["spring", "autumn"],
    price: 1499,
    region: "manaslu",
    rating: 4.9,
    reviewCount: 142,
    description: "Off-the-beaten-path adventure around the world's eighth highest peak.",
    highlights: ["Larkya La Pass", "Samagaon village", "Manaslu Base Camp"],
  },
  {
    id: "gokyo-lakes",
    title: "Gokyo Lakes Trek",
    image: "https://images.unsplash.com/photo-1544442069-97dded965a9f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 12,
    difficulty: "moderate",
    maxAltitude: 5357,
    bestSeason: ["spring", "autumn"],
    price: 1149,
    region: "everest",
    rating: 4.8,
    reviewCount: 198,
    description: "Stunning alpine lakes with panoramic views of Everest and surrounding peaks.",
    highlights: ["Gokyo Ri summit", "Sacred lakes", "Cho Oyu views"],
  },
  {
    id: "upper-mustang",
    title: "Upper Mustang Trek",
    image: "https://images.unsplash.com/photo-1619463206719-f87a692cdd7a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", duration: 14,
    difficulty: "moderate",
    maxAltitude: 4000,
    bestSeason: ["spring", "autumn", "winter", "summer"],
    price: 1399,
    region: "mustang",
    rating: 4.6,
    reviewCount: 87,
    description: "Journey to the forbidden kingdom with unique Tibetan culture and landscapes.",
    highlights: ["Lo Manthang palace", "Ancient caves", "Tibetan monasteries"],
  },
  {
    id: "annapurna-base-camp",
    title: "Annapurna Base Camp Trek",
    image: "https://images.unsplash.com/photo-1678501419916-ef2b21d3f1ae?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // ABC amphitheater
    duration: 12,
    difficulty: "moderate",
    maxAltitude: 4130,
    bestSeason: ["spring", "autumn"],
    price: 999,
    region: "annapurna",
    rating: 4.7,
    reviewCount: 267,
    description: "Trek into the heart of the Annapurna Sanctuary surrounded by towering peaks.",
    highlights: ["Annapurna Sanctuary", "Machapuchare views", "Hot springs"],
  },
  {
    id: "mardi-himal",
    title: "Mardi Himal Trek",
    image: "https://images.unsplash.com/photo-1618084400690-5961cd6c60c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Mardi Himal ridge
    duration: 8,
    difficulty: "easy",
    maxAltitude: 4500,
    bestSeason: ["spring", "autumn"],
    price: 699,
    region: "annapurna",
    rating: 4.5,
    reviewCount: 156,
    description: "Hidden gem trek with spectacular mountain views and fewer crowds.",
    highlights: ["Mardi Himal Base Camp", "Forest trails", "Mountain panoramas"],
  },
  {
    id: "poon-hill",
    title: "Poon Hill Trek",
    image: "https://www.discoveraltitude.com/uploads/media/ghorepani-poonhill-trek-distance/poonhill-crowd.jpg", // Sunrise from Poon Hill
    duration: 5,
    difficulty: "easy",
    maxAltitude: 3210,
    bestSeason: ["spring", "autumn", "winter"],
    price: 499,
    region: "annapurna",
    rating: 4.6,
    reviewCount: 423,
    description: "Perfect introduction to Himalayan trekking with stunning sunrise views.",
    highlights: ["Poon Hill sunrise", "Rhododendron forests", "Gurung villages"],
  },
  {
    id: "everest-three-passes",
    title: "Everest Three Passes Trek",
    image: "https://www.desireadventures.com/images/product/Everest%20Three%20Passes.jpeg", // High pass view
    duration: 21,
    difficulty: "strenuous",
    maxAltitude: 5545,
    bestSeason: ["spring", "autumn"],
    price: 1899,
    region: "everest",
    rating: 4.9,
    reviewCount: 89,
    description: "Ultimate Everest region challenge crossing three high altitude passes.",
    highlights: ["Renjo La Pass", "Cho La Pass", "Kongma La Pass", "Gokyo Lakes", "EBC"],
  },
  {
    id: "tsum-valley",
    title: "Tsum Valley Trek",
    image: "https://vajraadventure.com/storage/Manaslu%20circuit/tusum-valley-2.jpg", // Hidden valley
    duration: 16,
    difficulty: "moderate",
    maxAltitude: 3700,
    bestSeason: ["spring", "autumn"],
    price: 1299,
    region: "manaslu",
    rating: 4.7,
    reviewCount: 67,
    description: "Hidden sacred valley with ancient Tibetan Buddhist culture.",
    highlights: ["Mu Gompa monastery", "Tibetan culture", "Sacred valley"],
  },
  {
    id: "nar-phu-valley",
    title: "Nar Phu Valley Trek",
    image: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_1024,h_683/https://www.insidehimalayas.com/wp-content/uploads/2024/06/Nar-Village-1024x683.jpg", // Remote valley
    duration: 17,
    difficulty: "challenging",
    maxAltitude: 5416,
    bestSeason: ["spring", "autumn"],
    price: 1599,
    region: "annapurna",
    rating: 4.8,
    reviewCount: 45,
    description: "Remote restricted area trek to ancient Tibetan villages.",
    highlights: ["Nar village", "Phu village", "Kang La Pass", "Ancient culture"],
  },
  {
    id: "dolpo-trek",
    title: "Upper Dolpo Trek",
    image: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_1024,h_683/https://www.insidehimalayas.com/wp-content/uploads/2024/06/Nar-Village-1024x683.jpg", // Barren landscape
    duration: 24,
    difficulty: "strenuous",
    maxAltitude: 5360,
    bestSeason: ["summer"],
    price: 2499,
    region: "dolpo",
    rating: 4.9,
    reviewCount: 23,
    description: "Remote trans-Himalayan trek through Nepal's largest district.",
    highlights: ["Shey Phoksundo Lake", "Crystal Mountain", "Tibetan plateau"],
  },
  {
    id: "kanchenjunga-base-camp",
    title: "Kanchenjunga Base Camp Trek",
    image: "https://cdn.tripspoint.com/uploads/photos/8768/kanchenjunga-base-camp-trek_z94bT.jpeg", // Third highest peak
    duration: 22,
    difficulty: "strenuous",
    maxAltitude: 5143,
    bestSeason: ["spring", "autumn"],
    price: 1999,
    region: "kanchenjunga",
    rating: 4.8,
    reviewCount: 34,
    description: "Remote trek to the base of the world's third highest mountain.",
    highlights: ["North & South Base Camps", "Pristine wilderness", "Rare wildlife"],
  },
  {
    id: "makalu-base-camp",
    title: "Makalu Base Camp Trek",
    image: "https://hikeontreks.com/wp-content/uploads/2018/12/Media-41.jpg", // Fifth highest peak
    duration: 20,
    difficulty: "strenuous",
    maxAltitude: 4870,
    bestSeason: ["spring", "autumn"],
    price: 1799,
    region: "makalu",
    rating: 4.7,
    reviewCount: 28,
    description: "Challenging trek through pristine wilderness to Makalu Base Camp.",
    highlights: ["Makalu Base Camp", "Barun Valley", "Diverse ecosystems"],
  },
  {
    id: "khopra-danda",
    title: "Khopra Danda Trek",
    image: "https://www.nepalmountaintrekkers.com/wp-content/uploads/2021/02/ss.jpg", // Community lodge trek
    duration: 9,
    difficulty: "moderate",
    maxAltitude: 3660,
    bestSeason: ["spring", "autumn"],
    price: 799,
    region: "annapurna",
    rating: 4.6,
    reviewCount: 112,
    description: "Community-based trek with stunning Annapurna and Dhaulagiri views.",
    highlights: ["Khopra Ridge", "Khayer Lake", "Community lodges", "Dhaulagiri views"],
  },
]

export function TrekGrid({ filters }: TrekGridProps) {
  const filteredAndSortedTreks = useMemo(() => {
    const filtered = allTreks.filter((trek) => {
      // Region filter
      if (filters.region !== "all" && trek.region !== filters.region) return false

      // Difficulty filter
      if (filters.difficulty !== "all" && trek.difficulty !== filters.difficulty) return false

      // Duration filter
      if (trek.duration < filters.duration[0] || trek.duration > filters.duration[1]) return false

      // Altitude filter
      if (trek.maxAltitude < filters.altitude[0] || trek.maxAltitude > filters.altitude[1]) return false

      // Season filter
      if (filters.season !== "all" && !trek.bestSeason.includes(filters.season)) return false

      return true
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "duration-asc":
          return a.duration - b.duration
        case "duration-desc":
          return b.duration - a.duration
        case "difficulty":
          const difficultyOrder = { easy: 1, moderate: 2, challenging: 3, strenuous: 4 }
          return (
            difficultyOrder[a.difficulty as keyof typeof difficultyOrder] -
            difficultyOrder[b.difficulty as keyof typeof difficultyOrder]
          )
        case "altitude":
          return b.maxAltitude - a.maxAltitude
        case "popularity":
        default:
          return b.rating * b.reviewCount - a.rating * a.reviewCount
      }
    })

    return filtered
  }, [filters])

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">All Treks</h2>
          <p className="text-muted-foreground">{filteredAndSortedTreks.length} adventures found</p>
        </div>
      </div>

      {/* Trek Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedTreks.map((trek) => (
          <Card key={trek.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative overflow-hidden">
              <img
                src={trek.image || "/placeholder.svg"}
                alt={trek.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge
                  variant={
                    trek.difficulty === "challenging"
                      ? "destructive"
                      : trek.difficulty === "easy"
                        ? "secondary"
                        : "default"
                  }
                  className="font-medium capitalize"
                >
                  {trek.difficulty}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ${trek.price}
              </div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="outline" className="bg-white/90 text-foreground border-white/20 capitalize">
                  {trek.region}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {trek.title}
                </h3>
                <div className="flex items-center space-x-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{trek.rating}</span>
                  <span className="text-muted-foreground">({trek.reviewCount})</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">{trek.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{trek.duration} days</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mountain className="h-4 w-4" />
                  <span>{trek.maxAltitude.toLocaleString()}m</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground col-span-2">
                  <Calendar className="h-4 w-4" />
                  <span>Best: {trek.bestSeason.join(", ")}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Highlights:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {trek.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex space-x-3">
                <Button asChild className="flex-1">
                  <Link href={`/treks/${trek.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAndSortedTreks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No treks match your current filters.</p>
          <p className="text-muted-foreground">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  )
}
