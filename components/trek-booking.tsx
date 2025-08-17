"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, MessageCircle, Star, Shield } from "lucide-react"
import Link from "next/link"

interface TrekBookingProps {
  trekName: string
  price: string
  duration: string
  difficulty: string
  groupSize: string
  nextDepartures: string[]
}

export function TrekBooking({ trekName, price, duration, difficulty, groupSize, nextDepartures }: TrekBookingProps) {
  const handleBookNow = () => {
    // Scroll to contact form or open booking modal
    window.location.href = "/contact?trek=" + encodeURIComponent(trekName)
  }

  const handleCallPhone = () => {
    window.open("tel:+977-1-4123456", "_self")
  }

  return (
    <div className="space-y-6">
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle className="text-2xl">{trekName}</CardTitle>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(127 reviews)</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{price}</div>
            <p className="text-sm text-muted-foreground">per person</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Difficulty:</span>
              <Badge variant={difficulty === "Challenging" ? "destructive" : "secondary"}>{difficulty}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Group Size:</span>
              <span className="font-medium">{groupSize}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Next Departures
            </h4>
            <div className="space-y-2">
              {nextDepartures.map((date, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                  <span className="text-sm">{date}</span>
                  <Badge variant="outline" className="text-xs">
                    Available
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Button size="lg" className="w-full font-medium" onClick={handleBookNow}>
              Book Now
            </Button>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask Questions
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="w-full" onClick={handleCallPhone}>
              <Phone className="w-4 h-4 mr-2" />
              Call +977-1-4123456
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Free cancellation up to 30 days before departure</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
