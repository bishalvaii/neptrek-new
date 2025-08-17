import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedTreks } from "@/components/featured-treks"
import { WhyNepTrek } from "@/components/why-neptrek"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedTreks />
        <WhyNepTrek />
        <TestimonialCarousel />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
