import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mountain, Calendar, Star, Users } from "lucide-react"

interface TrekHeroProps {
  trek: {
    title: string
    subtitle: string
    image: string
    duration: string
    difficulty: string
    maxAltitude: string
    bestSeason: string
    price: string
    region: string
    rating: number
    reviewCount: number
    description: string
    highlights: string[]
  }
}

export function TrekHero({ trek }: TrekHeroProps) {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[70vh] overflow-hidden">
        <img src={trek.image || "/placeholder.svg"} alt={trek.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {trek.region} Region
                </Badge>
                <Badge
                  variant={trek.difficulty === "Challenging" ? "destructive" : "default"}
                  className="bg-white/20 text-white border-white/30"
                >
                  {trek.difficulty}
                </Badge>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{trek.title}</h1>

              <p className="text-xl md:text-2xl text-white/90 mb-6">{trek.subtitle}</p>

              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{trek.rating}</span>
                  <span>({trek.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Small Groups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trek Summary Cards */}
      <div className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-background/95 backdrop-blur">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-2xl font-bold text-foreground mb-1">{trek.duration}</div>
                <div className="text-sm text-muted-foreground">Duration</div>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur">
              <CardContent className="p-6 text-center">
                <Mountain className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-2xl font-bold text-foreground mb-1">{trek.maxAltitude}</div>
                <div className="text-sm text-muted-foreground">Max Altitude</div>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-lg font-bold text-foreground mb-1">{trek.bestSeason}</div>
                <div className="text-sm text-muted-foreground">Best Season</div>
              </CardContent>
            </Card>

            <Card className="bg-background/95 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{trek.price}</div>
                <div className="text-sm text-muted-foreground">Per Person</div>
                <Button className="w-full mt-3" size="sm">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Trek Description & Highlights */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">About This Trek</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{trek.description}</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Trek Highlights</h3>
              <ul className="space-y-3">
                {trek.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
