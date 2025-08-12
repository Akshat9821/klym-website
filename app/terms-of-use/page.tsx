"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsOfUsePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">KLYM – Terms of Use</h1>
          
          <div className="text-gray-600 mb-8 space-y-2">
            <p><strong>Effective Date:</strong> 22-July-2025</p>
            <p><strong>Owned and Operated by:</strong> Gram AI Technologies Private Limited</p>
            <p><strong>Contact:</strong> <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a></p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using KLYM ("App," "Platform," or "Service"), you explicitly agree to be bound by these Terms of Use ("Terms"). If you disagree with any part of these Terms, you must immediately discontinue your use of the Platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. User Eligibility and Account Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                KLYM is intended for individuals who are 16 years of age or older. By registering an account, you confirm that you meet this age criterion.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                While you may freely browse the home page without an account, specific functionalities like facial scanning and product ordering require creating an account using a valid mobile number.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Users may delete their account manually via the app settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Product Discovery and AI-powered Recommendations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                KLYM provides personalized skincare recommendations and routines using an arithmetic algorithm based on matching cosmetic ingredients according to the International Nomenclature of Cosmetic Ingredients (INCI), ensuring global consistency and clarity.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800 font-semibold">
                  <strong>DISCLAIMER:</strong> Recommendations and analyses provided by KLYM are not medical advice and should not replace consultations with qualified dermatologists or medical professionals. Always seek medical advice for skin-related issues.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Ecommerce, Payment, and Shipping</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Purchases made on KLYM are direct transactions with Gram AI Technologies Private Limited.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Orders are typically shipped within seven (7) business days from the date of order placement.</li>
                <li>Orders may only be canceled before the shipping notification is sent to the user. No modifications or cancellations are permitted once the order has shipped.</li>
                <li>Products can be returned only if they arrive damaged or defective. Users must notify KLYM within 48 hours of delivery with photographic evidence of damage.</li>
                <li>Prices listed on the platform are subject to change without prior notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Prohibited Conduct and Restrictions</h2>
              <p className="text-gray-700 leading-relaxed mb-3">Users explicitly agree not to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Scan or upload facial data of individuals other than themselves from a single account.</li>
                <li>Attempt to misrepresent identity, create fake profiles, or use another person's account.</li>
                <li>Engage in reverse engineering, data mining, automated data extraction, scraping, or similar unauthorized activities.</li>
                <li>Reproduce, duplicate, copy, sell, resell, or commercially exploit any content, AI-generated reports, routines, or recommendations provided by KLYM without written consent.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-medium">
                Violation of these rules may result in immediate account suspension, termination, or legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property and Ownership</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All intellectual property rights, including trademarks, logos, designs, user interfaces, and AI-generated skincare routines and reports, are exclusively owned by Gram AI Technologies Private Limited.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Users are granted limited, personal, non-transferable licenses solely for personal use and may not distribute, commercially use, or otherwise exploit any content without express written authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>KLYM is provided "as is," and Gram AI Technologies Private Limited makes no warranties or guarantees regarding product effectiveness, suitability, or allergic reactions.</li>
                <li>Gram AI Technologies Private Limited is not liable for any skin irritation, allergic reactions, adverse effects, or misuse arising from product recommendations or usage.</li>
                <li>The user assumes all risks associated with the use of skincare products and routines recommended by KLYM.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Suspension and Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Gram AI Technologies Private Limited reserves the right to suspend or permanently terminate access to the platform without prior notice if a user:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Violates these Terms or engages in fraudulent activities.</li>
                <li>Attempts unauthorized facial scans, such as scanning multiple individuals using a single account.</li>
                <li>Engages in any illegal, harmful, or abusive behavior towards other users or KLYM staff.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution and Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed by and construed according to the laws of India, specifically the jurisdiction of Gurgaon, Haryana.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any dispute arising from these Terms shall be resolved exclusively through binding arbitration in Gurgaon, Haryana, in accordance with the Arbitration and Conciliation Act, 1996.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gram AI Technologies Private Limited reserves the right to modify or update these Terms of Use at any time without prior notice. Users will be notified of significant changes through the app or via registered email.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Continued use of the platform after modifications constitute acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Grievance and Support</h2>
              <p className="text-gray-700 leading-relaxed">
                For any grievances, questions, feedback, or assistance, users may contact: <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a>
              </p>
            </section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-gray-700 leading-relaxed font-medium">
                These Terms form a legally binding agreement between you and Gram AI Technologies Private Limited. Your compliance with these terms ensures a safe, fair, and enjoyable experience for all users.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">© 2025 KLYM. All rights reserved.</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
