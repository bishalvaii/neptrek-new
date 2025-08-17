import Link from "next/link"
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto container-padding section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8" />
              <span className="font-serif text-2xl font-bold">NepTrek</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for authentic Himalayan adventures. Expert local guides, sustainable practices, and
              unforgettable experiences in Nepal's majestic mountains.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/treks"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  All Treks
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/planning"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Planning Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Treks */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Popular Treks</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/treks/everest-base-camp"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Everest Base Camp
                </Link>
              </li>
              <li>
                <Link
                  href="/treks/annapurna-circuit"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Annapurna Circuit
                </Link>
              </li>
              <li>
                <Link
                  href="/treks/langtang-valley"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Langtang Valley
                </Link>
              </li>
              <li>
                <Link
                  href="/treks/manaslu-circuit"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Manaslu Circuit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">
                  Lakeside, Pokhara
                  <br />
                  Nepal
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+977 9861060548</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@neptrek.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 NepTrek. All rights reserved. | Licensed by Nepal Tourism Board</p>
        </div>
      </div>
    </footer>
  )
}
