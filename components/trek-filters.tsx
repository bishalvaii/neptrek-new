"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter, X, SlidersHorizontal } from "lucide-react"

interface FilterState {
  region: string
  difficulty: string
  duration: number[]
  altitude: number[]
  season: string
  sortBy: string
}

interface TrekFiltersProps {
  onFiltersChange: (filters: FilterState) => void
}

export function TrekFilters({ onFiltersChange }: TrekFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    region: "all",
    difficulty: "all",
    duration: [1, 30],
    altitude: [1000, 6000],
    season: "all",
    sortBy: "popularity",
  })

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "everest", label: "Everest Region" },
    { value: "annapurna", label: "Annapurna Region" },
    { value: "langtang", label: "Langtang Region" },
    { value: "manaslu", label: "Manaslu Region" },
    { value: "mustang", label: "Upper Mustang" },
    { value: "dolpo", label: "Dolpo Region" },
  ]

  const difficulties = [
    { value: "all", label: "All Levels" },
    { value: "easy", label: "Easy" },
    { value: "moderate", label: "Moderate" },
    { value: "challenging", label: "Challenging" },
    { value: "strenuous", label: "Strenuous" },
  ]

  const seasons = [
    { value: "all", label: "All Seasons" },
    { value: "spring", label: "Spring (Mar-May)" },
    { value: "autumn", label: "Autumn (Sep-Nov)" },
    { value: "winter", label: "Winter (Dec-Feb)" },
    { value: "summer", label: "Summer (Jun-Aug)" },
  ]

  const sortOptions = [
    { value: "popularity", label: "Most Popular" },
    { value: "duration-asc", label: "Duration (Short to Long)" },
    { value: "duration-desc", label: "Duration (Long to Short)" },
    { value: "difficulty", label: "Difficulty Level" },
    { value: "altitude", label: "Max Altitude" },
  ]

  const updateFilters = (newFilters: FilterState) => {
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      region: "all",
      difficulty: "all",
      duration: [1, 30],
      altitude: [1000, 6000],
      season: "all",
      sortBy: "popularity",
    }
    updateFilters(clearedFilters)
  }

  const activeFiltersCount = Object.values(filters).filter((value) =>
    Array.isArray(value) ? value[0] !== 1000 || value[1] !== 6000 : value !== "all" && value !== "popularity",
  ).length

  return (
    <div className="mb-8">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-full justify-between">
          <span className="flex items-center">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {activeFiltersCount}
              </Badge>
            )}
          </span>
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Filter Panel */}
      <Card className={`${isOpen ? "block" : "hidden"} md:block`}>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {/* Region Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Region</label>
              <Select value={filters.region} onValueChange={(value) => updateFilters({ ...filters, region: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.value} value={region.value}>
                      {region.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Difficulty</label>
              <Select
                value={filters.difficulty}
                onValueChange={(value) => updateFilters({ ...filters, difficulty: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Duration Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Duration: {filters.duration[0]}-{filters.duration[1]} days
              </label>
              <Slider
                value={filters.duration}
                onValueChange={(value) => updateFilters({ ...filters, duration: value })}
                max={30}
                min={1}
                step={1}
                className="w-full"
              />
            </div>

            {/* Altitude Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Max Altitude: {filters.altitude[0]}-{filters.altitude[1]}m
              </label>
              <Slider
                value={filters.altitude}
                onValueChange={(value) => updateFilters({ ...filters, altitude: value })}
                max={6000}
                min={1000}
                step={100}
                className="w-full"
              />
            </div>

            {/* Season Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Best Season</label>
              <Select value={filters.season} onValueChange={(value) => updateFilters({ ...filters, season: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {seasons.map((season) => (
                    <SelectItem key={season.value} value={season.value}>
                      {season.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Sort By</label>
              <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ ...filters, sortBy: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {activeFiltersCount > 0 && (
            <div className="mt-6 pt-6 border-t border-border">
              <Button variant="outline" onClick={clearFilters} className="flex items-center bg-transparent">
                <X className="h-4 w-4 mr-2" />
                Clear All Filters
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
