import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mountain, Calendar, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredTreks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp Trek",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Specific EBC with prayer flags
    duration: "14 days",
    difficulty: "Challenging",
    maxAltitude: "5,364m",
    bestSeason: "Mar-May, Sep-Nov",
    price: "$1,299",
    description: "The ultimate Himalayan adventure to the base of the world's highest peak.",
    highlights: ["Namche Bazaar", "Tengboche Monastery", "Kala Patthar viewpoint"],
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit Trek",
    image: "https://images.unsplash.com/photo-1678501218653-d3b60b2e4136?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Thorong La Pass view
    duration: "16 days",
    difficulty: "Moderate",
    maxAltitude: "5,416m",
    bestSeason: "Mar-May, Oct-Dec",
    price: "$1,199",
    description: "Classic circuit trek through diverse landscapes and cultures.",
    highlights: ["Thorong La Pass", "Muktinath Temple", "Poon Hill sunrise"],
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley Trek",
    image: "https://images.unsplash.com/photo-1643548947288-fbf86caf414a?q=80&w=802&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Perfect Langtang Valley view
    duration: "10 days",
    difficulty: "Moderate",
    maxAltitude: "4,984m",
    bestSeason: "Mar-May, Sep-Nov",
    price: "$899",
    description: "Pristine valley trek with rich Tamang culture and stunning mountain views.",
    highlights: ["Kyanjin Gompa", "Langtang Lirung views", "Tamang villages"],
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit Trek",
    image: "https://images.unsplash.com/photo-1751566609738-e1ed580bcb33?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Manaslu peak view
    duration: "18 days",
    difficulty: "Challenging",
    maxAltitude: "5,106m",
    bestSeason: "Mar-May, Sep-Nov",
    price: "$1,499",
    description: "Off-the-beaten-path adventure around the world's eighth highest peak.",
    highlights: ["Larkya La Pass", "Samagaon village", "Manaslu Base Camp"],
  },
  {
    id: "gokyo-lakes",
    title: "Gokyo Lakes Trek",
    image: "https://images.unsplash.com/photo-1544442069-97dded965a9f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Turquoise alpine lakes
    duration: "12 days",
    difficulty: "Moderate",
    maxAltitude: "5,357m",
    bestSeason: "Mar-May, Sep-Nov",
    price: "$1,149",
    description: "Stunning alpine lakes with panoramic views of Everest and surrounding peaks.",
    highlights: ["Gokyo Ri summit", "Sacred lakes", "Cho Oyu views"],
  },
  {
    id: "upper-mustang",
    title: "Upper Mustang Trek",
    image: "https://images.unsplash.com/photo-1619463206719-f87a692cdd7a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Desert-like Mustang landscape
    duration: "14 days",
    difficulty: "Moderate",
    maxAltitude: "4,000m",
    bestSeason: "Mar-Nov",
    price: "$1,399",
    description: "Journey to the forbidden kingdom with unique Tibetan culture and landscapes.",
    highlights: ["Lo Manthang palace", "Ancient caves", "Tibetan monasteries"],
  },
]

export function FeaturedTreks() {
  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Featured Trek Adventures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our most popular trekking routes, each offering unique experiences and breathtaking views of the
            Himalayan giants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTreks.map((trek) => (
            <Card key={trek.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={trek.image || "/placeholder.svg"}
                  alt={trek.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={trek.difficulty === "Challenging" ? "destructive" : "secondary"}
                    className="font-medium"
                  >
                    {trek.difficulty}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {trek.price}
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {trek.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">{trek.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mountain className="h-4 w-4" />
                    <span>{trek.maxAltitude}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground col-span-2">
                    <Calendar className="h-4 w-4" />
                    <span>Best: {trek.bestSeason}</span>
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
                    <Link href={`/treks/${trek.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/treks">
              View All Treks
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
