import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

interface TrekInclusionsProps {
  inclusions: string[]
  exclusions: string[]
}

export function TrekInclusions({ inclusions, exclusions }: TrekInclusionsProps) {
  const safeInclusions = inclusions || []
  const safeExclusions = exclusions || []

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            What's Included
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {safeInclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <XCircle className="w-5 h-5" />
            What's Not Included
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {safeExclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
