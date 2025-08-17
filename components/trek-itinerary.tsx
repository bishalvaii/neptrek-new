"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Mountain, Clock } from "lucide-react"

interface ItineraryDay {
  day: number
  title: string
  altitude: string
  duration: string
  description: string
}

interface TrekItineraryProps {
  itinerary: ItineraryDay[]
}

export function TrekItinerary({ itinerary }: TrekItineraryProps) {
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1, 2, 3]))

  const toggleDay = (day: number) => {
    const newExpanded = new Set(expandedDays)
    if (newExpanded.has(day)) {
      newExpanded.delete(day)
    } else {
      newExpanded.add(day)
    }
    setExpandedDays(newExpanded)
  }

  const expandAll = () => {
    setExpandedDays(new Set(itinerary.map((day) => day.day)))
  }

  const collapseAll = () => {
    setExpandedDays(new Set())
  }

  return (
    <section className="section-spacing bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Day-by-Day Itinerary</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow the complete journey from start to finish. Each day is carefully planned for proper acclimatization
            and maximum enjoyment.
          </p>

          <div className="flex justify-center space-x-4 mt-6">
            <Button variant="outline" onClick={expandAll} size="sm">
              Expand All
            </Button>
            <Button variant="outline" onClick={collapseAll} size="sm">
              Collapse All
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {itinerary.map((day) => (
            <Card key={day.day} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleDay(day.day)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-foreground mb-1">{day.title}</h3>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Mountain className="h-4 w-4" />
                            <span>{day.altitude}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{day.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {expandedDays.has(day.day) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {expandedDays.has(day.day) && (
                  <div className="px-6 pb-6 border-t border-border">
                    <div className="pt-4 pl-16">
                      <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
