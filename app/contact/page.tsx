import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Users, Star, Send } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+977-1-4123456", "+977-9841234567 (WhatsApp)"],
      description: "Available 24/7 for emergencies",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@neptrek.com", "emergency@neptrek.com"],
      description: "We respond within 2 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Thamel, Kathmandu", "Nepal"],
      description: "Visit us for in-person consultation",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat-Sun: 10AM-4PM"],
      description: "Nepal Standard Time (NST)",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      text: "Exceptional service from start to finish. The team was responsive and helped plan every detail of our EBC trek.",
      rating: 5,
    },
    {
      name: "Marco Silva",
      country: "Brazil",
      text: "Quick responses and professional guidance. They made our Annapurna trek unforgettable!",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      country: "UK",
      text: "Outstanding customer service. They were available 24/7 and handled all our concerns promptly.",
      rating: 5,
    },
  ]

  const emergencyContacts = [
    {
      title: "Trek Emergency Hotline",
      number: "+977-9841234567",
      available: "24/7 during treks",
    },
    {
      title: "Kathmandu Office Emergency",
      number: "+977-1-4123456",
      available: "24/7",
    },
    {
      title: "Tourist Police",
      number: "+977-1-4247041",
      available: "24/7",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1920&h=800&fit=crop"
          alt="Contact us - Nepal mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto container-padding">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Ready to start your Himalayan adventure? Our expert team is here to help plan your perfect trek.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Contact Information</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">How to Reach Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to connect with our team. We're here to answer your questions and help plan your adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-3">
                    {info.details.map((detail, i) => (
                      <p key={i} className="font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4">Send us a Message</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 cursor-pointer">Plan Your Trek</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tell us about your dream trek and we'll create a personalized itinerary just for you. Our experienced
                team will handle all the details so you can focus on the adventure.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="font-medium">100% Safe & Secure</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="font-medium">Expert Local Guides</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input placeholder="Your first name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input placeholder="Your last name" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <Input placeholder="Your country" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Interested Trek</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a trek" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="everest-base-camp">Everest Base Camp</SelectItem>
                      <SelectItem value="annapurna-base-camp">Annapurna Base Camp</SelectItem>
                      <SelectItem value="annapurna-circuit">Annapurna Circuit</SelectItem>
                      <SelectItem value="langtang-valley">Langtang Valley</SelectItem>
                      <SelectItem value="manaslu-circuit">Manaslu Circuit</SelectItem>
                      <SelectItem value="upper-mustang">Upper Mustang</SelectItem>
                      <SelectItem value="custom">Custom Trek</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Group Size</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of people" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Solo (1 person)</SelectItem>
                        <SelectItem value="2">Couple (2 people)</SelectItem>
                        <SelectItem value="3-5">Small Group (3-5 people)</SelectItem>
                        <SelectItem value="6-10">Medium Group (6-10 people)</SelectItem>
                        <SelectItem value="10+">Large Group (10+ people)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Month</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you want to trek?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="march">March</SelectItem>
                        <SelectItem value="april">April</SelectItem>
                        <SelectItem value="may">May</SelectItem>
                        <SelectItem value="september">September</SelectItem>
                        <SelectItem value="october">October</SelectItem>
                        <SelectItem value="november">November</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your trekking experience, fitness level, special requirements, or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-medium">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Emergency Support</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">24/7 Emergency Assistance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your safety is our priority. We provide round-the-clock emergency support during all our treks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <Card
                key={index}
                className="text-center p-6 border-2 border-red-200 hover:border-red-300 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{contact.title}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                  <p className="text-sm text-muted-foreground">{contact.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Client Reviews</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our trekkers say about our service and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4">Visit Our Office</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Find Us in Kathmandu</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Thamel, Kathmandu's tourist district. Drop by for a cup of tea and trek planning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Office Address</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  NepTrek Adventure Company
                  <br />
                  Thamel Marg, Ward No. 26
                  <br />
                  Kathmandu 44600, Nepal
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Getting There</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our office is easily accessible from Tribhuvan International Airport (30 minutes by taxi) and is
                  located in the heart of Thamel, surrounded by restaurants, shops, and other trekking agencies.
                </p>
              </div>
              <Button size="lg" className="font-medium">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop"
                alt="Kathmandu office location"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">NepTrek Office</p>
                  <p className="text-sm text-muted-foreground">Thamel, Kathmandu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
