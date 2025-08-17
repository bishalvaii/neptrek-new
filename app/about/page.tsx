import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Leaf, Heart } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety is our top priority. We maintain the highest safety standards with experienced guides and quality equipment.",
    },
    {
      icon: Leaf,
      title: "Eco-Responsible",
      description:
        "We're committed to sustainable tourism that preserves Nepal's natural beauty for future generations.",
    },
    {
      icon: Users,
      title: "Local Expertise",
      description:
        "Our guides are local experts who know every trail, sharing authentic cultural experiences along the way.",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "We support local communities by hiring locally and contributing to community development projects.",
    },
  ]

  const team = [
    {
      name: "Pemba Sherpa",
      role: "Founder & Lead Guide",
      experience: "2+ years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Ang Dawa Sherpa",
      role: "Senior Mountain Guide",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Lakpa Sherpa",
      role: "Cultural Guide",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop"
          alt="Nepal mountain landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto container-padding">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Born in the shadows of the Himalayas, NepTrek connects adventurers with Nepal's most breathtaking landscapes
            through authentic, responsible trekking experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Mission</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Connecting Hearts with the Himalayas</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded by local Sherpa guides with generations of mountain wisdom, NepTrek was born from a simple
                belief: that the mountains should be experienced authentically, safely, and sustainably.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've guided thousands of trekkers through Nepal's most spectacular trails, from the iconic Everest Base
                Camp to hidden gems in remote valleys. Every journey we craft honors both the adventurous spirit of our
                guests and the sacred nature of these ancient peaks.
              </p>
              <Button size="lg" className="font-medium">
                Start Your Journey
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop"
                alt="Sherpa guide in mountains"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">What Drives Us Forward</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every step we take is guided by principles that honor the mountains, respect local communities, and ensure
              unforgettable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Meet Your Mountain Guides</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced team of local guides brings decades of mountain expertise and deep cultural knowledge to
              every trek.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Happy Trekkers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Trek Routes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
