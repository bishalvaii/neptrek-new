import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mountain, Route } from "lucide-react"
import Image from "next/image"

interface TrekMapProps {
  trekName: string
  mapImage?: string
  elevationProfile?: string
  keyLocations: string[]
}

export function TrekMap({ trekName, mapImage, elevationProfile, keyLocations }: TrekMapProps) {
  const safeKeyLocations = keyLocations || []

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Trek Route Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
            {mapImage ? (
              <Image src={mapImage || "/placeholder.svg"} alt={`${trekName} route map`} fill className="object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Route className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mountain className="w-5 h-5 text-primary" />
            Elevation Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
            {elevationProfile ? (
              <Image
                src={elevationProfile || "/placeholder.svg"}
                alt={`${trekName} elevation profile`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Mountain className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Elevation profile coming soon</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {safeKeyLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{location}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
