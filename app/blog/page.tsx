import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const featuredPost = {
    title: "Complete Guide to Everest Base Camp Trek: What You Need to Know",
    excerpt:
      "Everything you need to know about the world's most famous trek, from preparation tips to what to expect on the trail.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop",
    author: "Pemba Sherpa",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Trek Guides",
  }

  const blogPosts = [
    {
      title: "Best Time to Trek Annapurna Circuit: Seasonal Guide",
      excerpt:
        "Discover the optimal seasons for trekking the Annapurna Circuit and what to expect during each time of year.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      author: "Ang Dawa Sherpa",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Trek Guides",
    },
    {
      title: "Altitude Sickness: Prevention and Treatment in the Himalayas",
      excerpt:
        "Essential knowledge about altitude sickness, its symptoms, and how to prevent and treat it during high-altitude treks.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop",
      author: "Dr. Tenzin Norbu",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Health & Safety",
    },
    {
      title: "Sustainable Trekking: Leave No Trace in Nepal",
      excerpt:
        "Learn how to trek responsibly and minimize your environmental impact while exploring Nepal's pristine mountain regions.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop",
      author: "Lakpa Sherpa",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Sustainability",
    },
    {
      title: "Photography Tips for Himalayan Treks",
      excerpt:
        "Capture stunning mountain landscapes and cultural moments with these expert photography tips for high-altitude environments.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      author: "Maya Tamang",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Photography",
    },
    {
      title: "Local Culture and Customs: Respecting Mountain Communities",
      excerpt:
        "Understanding and respecting the rich cultural heritage of Nepal's mountain communities during your trek.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=250&fit=crop",
      author: "Pemba Sherpa",
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "Culture",
    },
    {
      title: "Essential Gear Review: Best Trekking Boots for Nepal",
      excerpt:
        "Comprehensive review of the best trekking boots for Nepal's diverse terrain, from rocky trails to snow-covered passes.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      author: "Ang Dawa Sherpa",
      date: "February 25, 2024",
      readTime: "11 min read",
      category: "Gear Reviews",
    },
  ]

  const categories = [
    "All",
    "Trek Guides",
    "Health & Safety",
    "Sustainability",
    "Photography",
    "Culture",
    "Gear Reviews",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop"
          alt="Mountain landscape blog header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto container-padding">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Trek Stories & Guides</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Expert insights, trek guides, and stories from the heart of the Himalayas
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="mb-8">
            <Badge className="mb-4">Featured Article</Badge>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-tight">Latest from the Trail</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button className="w-fit">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <h3 className="font-serif text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Stay Updated with Trek Stories</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get the latest trek guides, safety tips, and mountain stories delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
