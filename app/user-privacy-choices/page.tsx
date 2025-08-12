"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function UserPrivacyChoicesPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with KLYM Logo and Back Button */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/klym-logo.png"
              alt="KLYM logo"
              width={100}
              height={33}
              className="cursor-pointer"
              priority
            />
          </Link>
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">User Privacy Choices – KLYM</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At KLYM, we are committed to empowering our users with transparency and full control over their data. The following privacy choices are available to you within the KLYM app:
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF7E7E]">1. Withdraw Consent for Face Data</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You may withdraw your consent to use your selfie image for skin analysis at any time. This can be done by:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Requesting full account deletion via the app settings or</li>
                <li>Emailing us at <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a></li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Upon deletion, all face data and metadata associated with your profile will be permanently removed from our systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF7E7E]">2. Delete Account and Associated Data</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Users may delete their account at any time, which results in:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Permanent deletion of personal information (name, phone, email, etc.)</li>
                <li>Erasure of face image and related metadata from AWS/GCP</li>
                <li>Revocation of any active consent provided for facial data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF7E7E]">3. Opt Out of Marketing Analytics and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use third-party analytics and cookies to improve functionality and tailor user experience. Users can:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Opt out of non-essential data tracking and advertising personalization by writing to <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a></li>
                <li>Adjust cookie and tracking preferences via device settings or in-app toggles where available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF7E7E]">4. Manage Notification Preferences</h2>
              <p className="text-gray-700 leading-relaxed">
                You can manage and disable push notifications and in-app communications through your device settings or the app's notification control panel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF7E7E]">5. Request Data Access, Correction, or Export</h2>
              <p className="text-gray-700 leading-relaxed mb-3">At any point, you may:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Request a copy of the personal and facial metadata KLYM holds about you</li>
                <li>Ask for corrections to inaccurate data</li>
                <li>Request data portability in machine-readable formats</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, contact <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#FF7E7E]">6. Right to Be Forgotten</h2>
              <p className="text-gray-700 leading-relaxed">
                Users may request erasure of all stored data (including face data, metadata, and usage records) under applicable data protection laws. KLYM will honor such requests promptly unless legally obligated to retain any information.
              </p>
            </section>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Note:</strong> Some features may become unavailable after opting out or deleting data required for core app functions. However, KLYM will never penalize users for exercising their privacy rights.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                For full details, refer to our{' '}
                <Link href="/privacy-policy" className="text-[#FF7E7E] hover:underline font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-2">
              <strong>Last Updated:</strong> 22 July 2025
            </p>
            <p className="text-gray-600">© 2025 KLYM. All rights reserved.</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
