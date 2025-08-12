import type React from "react"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KLYM - AI-Powered Skincare That Knows You Better",
  description:
    "AI-powered skincare that knows you better than you do. Get personalized skincare recommendations with clinical-grade accuracy. Dermatologist approved, privacy protected.",
  keywords: "AI skincare, personalized skincare, skin analysis, dermatologist approved, skincare routine",
  openGraph: {
    title: "KLYM - AI-Powered Skincare That Knows You Better",
    description:
      "AI-powered skincare that knows you better than you do. Get personalized skincare recommendations with clinical-grade accuracy.",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={urbanist.className}>
        {children}
      </body>
    </html>
  )
}
