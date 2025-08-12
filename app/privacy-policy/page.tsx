"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">KLYM – Privacy Policy</h1>
          
          <div className="text-gray-600 mb-8 space-y-2">
            <p><strong>Effective Date:</strong> 22-July-2025</p>
            <p><strong>Owned and Operated by:</strong> Gram AI Technologies Private Limited</p>
            <p><strong>Contact:</strong> <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a></p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to KLYM ("App," "Platform," or "Service"). This Privacy Policy explains in detail how Gram AI Technologies Private Limited ("we," "us," or "our") collects, uses, shares, stores, protects, and manages your personal data, including highly sensitive facial information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Data Collection</h2>
              <h3 className="text-xl font-medium mb-3">2.1 Face Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                KLYM collects your selfie image via the app's camera module. This data specifically includes high-resolution photographic images capturing your facial features, contours, and identifiable characteristics for skin analysis.
              </p>
              <h3 className="text-xl font-medium mb-3">2.2 Other Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">We also collect the following personal information:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Name</li>
                <li>Gender</li>
                <li>Age</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Residential and delivery address</li>
                <li>Payment information (credit/debit card details, UPI IDs, or other payment methods)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Usage of Face Data</h2>
              <p className="text-gray-700 leading-relaxed mb-3">The collected facial data is exclusively and explicitly used for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Generating detailed, personalized skin analysis reports based on specific skin parameters</li>
                <li>Creating and delivering tailored skincare routines personalized to your unique skin profile</li>
                <li>Training and refining our proprietary AI and machine learning models for continuously enhanced skincare recommendations</li>
                <li>Quality assurance and accuracy verification through manual review by authorized and trained professionals within our organization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Third-party Sharing & Storage</h2>
              <h3 className="text-xl font-medium mb-3">4.1 Third-party Providers and Why We Share Face Data</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Face data collected from you is shared only with Orbo, our trusted third-party provider specializing in skin imaging and analysis. Orbo uses your selfie image to generate a detailed visual skin analysis report through advanced computer vision algorithms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not share face data with AWS, GCP, OpenAI, or any other third parties. These services are used strictly for encrypted data storage (AWS/GCP) or metadata processing (OpenAI), not for receiving or analyzing raw face images.
              </p>
              <h3 className="text-xl font-medium mb-3">4.2 Third-party Storage Practices</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li><strong>AWS and GCP:</strong> Used solely for secure cloud storage of encrypted facial images and metadata. They do not access, process, or analyze this data.</li>
                <li><strong>OpenAI:</strong> Does not store or process facial images. It may process non-image metadata (e.g., skin concern tags) to generate skincare advice but has no access to selfie images.</li>
                <li><strong>Orbo:</strong> Does not store facial photos or feature vectors. According to Orbo's official privacy policy, all facial image processing is done entirely on-device using their SDKs, and no facial images or vectors are uploaded to or stored on their servers. Orbo does not retain, reuse, resell, or transmit face data beyond the local session on the user's device.</li>
              </ul>
              <h3 className="text-xl font-medium mb-3">4.3 Data Storage Locations</h3>
              <p className="text-gray-700 leading-relaxed">
                All collected data, including facial images and related metadata, is securely stored in cloud infrastructure provided by AWS and GCP. These cloud providers operate in data centers compliant with rigorous global data protection standards and best security practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li><strong>Original face images:</strong> Retained for up to 30 days from the date of your last activity to enable consistent follow-ups and repeat consultations.</li>
                <li><strong>Facial metadata:</strong> Retained only as long as needed to provide personalized services or until the user requests deletion.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not retain face data indefinitely without purpose. Our retention timelines are driven by transparency, necessity, and compliance with privacy principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. User Consent & Transparency</h2>
              <p className="text-gray-700 leading-relaxed">
                Your explicit consent for facial data collection is obtained clearly by your act of granting camera access permission to capture selfies. Consent may be withdrawn and full data deletion executed anytime by requesting account deletion directly through the app's account settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. User Rights (DPDP/GDPR Compliance)</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Under applicable laws and standards (DPDP Act, GDPR, and global privacy regulations), you hold the following rights regarding your data:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mb-3">
                <li>Right to Access</li>
                <li>Right to Correction</li>
                <li>Right to Data Portability</li>
                <li>Right to Erasure</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Exercise these rights by contacting <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We maintain stringent security protocols to protect your data:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Advanced encryption methods protect your data in transit and when stored</li>
                <li>Regular, independent third-party security audits and vulnerability assessments</li>
                <li>Robust and secure cloud infrastructure is maintained via reputable providers (AWS and GCP)</li>
                <li>Strict internal access control, multi-factor authentication, and security monitoring protocols are continuously enforced</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                KLYM is strictly designed for users aged 16 and above. If we become aware that a user younger than 16 years has provided us with personal information, including facial data, we take immediate steps to permanently delete such information from our records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Cookies and Third-party Analytics</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We utilize cookies and employ third-party analytics tools for purposes including app functionality optimization, detailed user engagement analytics, and targeted advertising activities. Providers used include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Meta</li>
                <li>Google</li>
                <li>Reddit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Grievance Officer & Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-3">For privacy concerns, queries, or grievances, please contact:</p>
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy may be periodically updated to comply with evolving legal requirements or changes in our data handling practices. Users will be duly notified via app notifications or email communications of significant policy changes. Continued use of the KLYM platform following these updates constitutes acceptance of the revised Privacy Policy terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Specific Disclosures Regarding Face Data (Addressing App Store Guideline 2.1)</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">What face data does the app collect?</h4>
                  <p className="text-gray-700">High-resolution selfie images of the user's face to assess skin concerns and generate personalized skincare insights.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Why do we store face data?</h4>
                  <p className="text-gray-700">We store face data to provide visual tracking of skin health over time, power AI model refinement, and deliver consistent, high-quality recommendations to the user.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How long will face data be stored and why this length of time?</h4>
                  <p className="text-gray-700">Face images are stored for 30 days from last user activity to allow repeat comparisons and history-based insights. Metadata is stored only as long as needed for app functionality or until deleted by the user.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Which third parties receive face data?</h4>
                  <p className="text-gray-700">Face data is shared only with Orbo, our trusted computer vision partner for generating skin scan reports.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Why we share with each third party:</h4>
                  <p className="text-gray-700">Orbo: Specializes in AI-based skin analysis and receives selfie images only to generate the scan report. Other partners (AWS, GCP, OpenAI) do not receive raw face data.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Do these third parties store face data?</h4>
                  <p className="text-gray-700 mb-2">Orbo does not store face data. All processing is done on-device, and face images or vectors are not transmitted or saved.</p>
                  <p className="text-gray-700 mb-2">AWS/GCP store encrypted face data securely, but do not process or access it.</p>
                  <p className="text-gray-700">OpenAI does not receive or store face data.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Where is this described in the privacy policy?</h4>
                  <p className="text-gray-700">Sections 2.1, 3, 4.1, 4.2, 5, and this section provide all required details.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-3">Quote from policy:</h4>
                <blockquote className="text-gray-700 italic">
                  "KLYM collects your selfie image via the app's camera module. Face data includes high-resolution images clearly identifying facial features, used explicitly for personalized skincare reports, tailored routines, AI model refinement, and manual quality assurance reviews. Data is securely shared only with Orbo for analysis and stored on AWS/GCP for encrypted retention for up to 30 days. Metadata is retained as long as necessary unless deleted upon user request."
                </blockquote>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">© 2025 KLYM. All rights reserved.</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
