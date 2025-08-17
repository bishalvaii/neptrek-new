import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "NepTrek - Expert Himalayan Trekking Adventures in Nepal",
  description:
    "Discover Nepal's majestic Himalayas with NepTrek. Expert-guided treks to Everest Base Camp, Annapurna Circuit, Langtang Valley and more. Local guides, safety-first approach, sustainable trekking.",
  generator: "v0.dev",
  keywords:
    "Nepal trekking, Himalayan adventures, Everest Base Camp, Annapurna Circuit, local guides, sustainable tourism",
  authors: [{ name: "NepTrek" }],
  openGraph: {
    title: "NepTrek - Expert Himalayan Trekking Adventures",
    description: "Discover Nepal's majestic Himalayas with expert local guides",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
