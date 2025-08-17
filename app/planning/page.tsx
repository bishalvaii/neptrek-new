import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Calendar, Thermometer, Backpack, FileText, Phone } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PlanningPage() {
  const seasons = [
    {
      season: "Spring (March-May)",
      weather: "Clear skies, mild temperatures",
      pros: ["Perfect visibility", "Rhododendron blooms", "Stable weather"],
      cons: ["Busier trails", "Higher prices"],
      temp: "10-20°C at lower altitudes",
    },
    {
      season: "Autumn (September-November)",
      weather: "Crystal clear views, cool temperatures",
      pros: ["Best visibility", "Stable weather", "Comfortable temperatures"],
      cons: ["Peak season crowds", "Higher accommodation costs"],
      temp: "5-15°C at lower altitudes",
    },
    {
      season: "Winter (December-February)",
      weather: "Cold but clear at lower altitudes",
      pros: ["Fewer crowds", "Lower costs", "Clear mountain views"],
      cons: ["Very cold at altitude", "Some passes may be closed"],
      temp: "-10 to 10°C",
    },
    {
      season: "Monsoon (June-August)",
      weather: "Rainy, cloudy, humid",
      pros: ["Lush green landscapes", "Fewer trekkers", "Lower prices"],
      cons: ["Limited visibility", "Muddy trails", "Leeches"],
      temp: "15-25°C",
    },
  ]

  const essentials = [
    {
      category: "Clothing",
      items: [
        "Base layers (merino wool)",
        "Insulating layers (fleece/down)",
        "Waterproof jacket & pants",
        "Trekking pants",
        "Warm hat & sun hat",
        "Gloves (liner + insulated)",
        "Trekking socks (wool blend)",
      ],
    },
    {
      category: "Footwear",
      items: ["Waterproof trekking boots", "Camp shoes (lightweight)", "Gaiters", "Crampons (for high altitude)"],
    },
    {
      category: "Equipment",
      items: [
        "Sleeping bag (-10°C rating)",
        "Trekking poles",
        "Headlamp + extra batteries",
        "Water bottles/hydration system",
        "Water purification tablets",
        "First aid kit",
        "Sunglasses (glacier glasses)",
      ],
    },
    {
      category: "Personal Items",
      items: [
        "Sunscreen (SPF 50+)",
        "Lip balm with SPF",
        "Personal medications",
        "Toiletries",
        "Quick-dry towel",
        "Camera + extra batteries",
      ],
    },
  ]

  const faqs = [
    {
      question: "Do I need previous trekking experience?",
      answer:
        "While previous experience is helpful, it's not required for most of our treks. We offer routes suitable for beginners to advanced trekkers. Our guides will assess your fitness level and provide appropriate guidance throughout the journey.",
    },
    {
      question: "What level of fitness is required?",
      answer:
        "A good level of cardiovascular fitness is essential. We recommend regular hiking or cardio exercise for at least 2-3 months before your trek. You should be comfortable walking 6-8 hours per day on uneven terrain.",
    },
    {
      question: "How do I prevent altitude sickness?",
      answer:
        "Proper acclimatization is key. Our itineraries include rest days and gradual altitude gain. Stay hydrated, avoid alcohol, and inform your guide immediately if you experience symptoms like headaches, nausea, or dizziness.",
    },
    {
      question: "What about food and accommodation?",
      answer:
        "We stay in tea houses (local lodges) that provide basic but comfortable accommodation. Meals include a mix of Nepali, Tibetan, and international cuisine. Vegetarian options are always available.",
    },
    {
      question: "Do I need travel insurance?",
      answer:
        "Yes, comprehensive travel insurance including helicopter evacuation coverage is mandatory. We can recommend suitable policies that cover high-altitude trekking activities.",
    },
    {
      question: "What permits do I need?",
      answer:
        "Depending on your trek, you may need TIMS (Trekkers' Information Management System) cards and national park permits. We handle all permit arrangements as part of our service.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&h=1080&fit=crop"
          alt="Trekker planning with map"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto container-padding">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Plan Your Adventure</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Everything you need to know to prepare for your Himalayan trekking adventure. From gear lists to seasonal
            guides, we've got you covered.
          </p>
        </div>
      </section>

      {/* Best Time to Trek */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Seasonal Guide</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">When to Trek in Nepal</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each season offers unique experiences in the Himalayas. Choose the time that best matches your preferences
              and trekking goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seasons.map((season, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    {season.season}
                  </CardTitle>
                  <p className="text-muted-foreground">{season.weather}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Advantages</h4>
                      <ul className="space-y-1">
                        {season.pros.map((pro, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600 mb-2">Considerations</h4>
                      <ul className="space-y-1">
                        {season.cons.map((con, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Thermometer className="w-4 h-4 text-orange-500" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm font-medium">Temperature: {season.temp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Guide */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Packing Guide</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Essential Gear Checklist</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proper gear is crucial for a safe and comfortable trek. Here's our comprehensive packing list organized by
              category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {essentials.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Backpack className="w-6 h-6 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="font-medium">
              Download Complete Packing List
            </Button>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop"
                alt="Trekker training for mountain adventure"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4">Preparation</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Physical & Mental Preparation</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Physical Training</h3>
                  <p className="text-muted-foreground">
                    Start training at least 8-12 weeks before your trek. Focus on cardiovascular endurance, leg
                    strength, and hiking with a loaded backpack.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mental Preparation</h3>
                  <p className="text-muted-foreground">
                    Trekking in the Himalayas can be challenging. Prepare mentally for long days, basic accommodations,
                    and changing weather conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Health Checkup</h3>
                  <p className="text-muted-foreground">
                    Consult your doctor before the trek, especially if you have any pre-existing conditions. Consider
                    altitude sickness medication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about trekking in Nepal.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our experienced team is here to help you plan the perfect Himalayan adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              <Phone className="w-5 h-5 mr-2" />
              Talk to a Guide
            </Button>
            <Button size="lg" variant="outline" className="font-medium bg-transparent">
              <FileText className="w-5 h-5 mr-2" />
              Download Trek Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
