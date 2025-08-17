import { Shield, Users, Leaf, Award, Heart, MapPin } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Local Guides",
    description:
      "Our certified guides are born in the mountains, with deep knowledge of local culture, weather patterns, and safe routes.",
  },
  {
    icon: Shield,
    title: "Safety First Approach",
    description:
      "Comprehensive safety protocols, emergency communication, and experienced rescue coordination for your peace of mind.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description:
      "We practice responsible trekking that protects the environment and supports local communities economically.",
  },
  {
    icon: Award,
    title: "2+ Years Experience",
    description: "Trusted by thousands of trekkers worldwide with consistently excellent reviews and repeat customers.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "Every trek directly supports local families, schools, and conservation efforts in remote mountain communities.",
  },
  {
    icon: MapPin,
    title: "Authentic Experiences",
    description:
      "Stay in local teahouses, experience genuine Himalayan hospitality, and connect with mountain culture.",
  },
]

export function WhyNepTrek() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Why Choose NepTrek?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're not just a trekking company – we're your partners in creating life-changing adventures while making a
            positive impact on Nepal's mountain communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center space-y-4 p-6 rounded-lg hover:bg-background transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>

              <h3 className="font-serif text-xl font-bold text-foreground">{feature.title}</h3>

              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Trekkers</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground mt-1">Success Rate</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground mt-1">Trek Routes</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
