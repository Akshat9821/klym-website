"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, Package, CreditCard, Smartphone, Droplet, Mail, Clock } from "lucide-react"

export default function SupportPage() {
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
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="w-8 h-8 text-[#FF7E7E]" />
              <h1 className="text-4xl md:text-5xl font-bold">Need Help? We're Here for You</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At KLYM, we're committed to making your beauty journey seamless—from discovery to doorstep. Whether you have a question, concern, or just need some glow-boosting guidance, our support team is here for you.
            </p>
          </div>

          {/* Support Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Order & Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-[#FF7E7E]" />
                <h2 className="text-2xl font-semibold">📦 Order & Delivery</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Track Your Order:</strong> Visit "My Orders" in the app or website.</p>
                <p><strong>Issue with Delivery?</strong> Damaged, delayed, or incomplete? Let us know—we'll fix it fast.</p>
                <p><strong>Returns & Refunds:</strong> We offer easy returns on eligible products. Refunds are typically processed within 5–7 business days to your original payment method.</p>
              </div>
            </motion.div>

            {/* Payments & Wallet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-[#FF7E7E]" />
                <h2 className="text-2xl font-semibold">💳 Payments & Wallet</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Payment Failed?</strong> Don't worry—check your transaction history or reach out. We'll investigate.</p>
                <p><strong>KLYM Wallet Credits:</strong> Track and use your wallet balance easily at checkout.</p>
                <p><strong>Refund Status:</strong> Reach us if your refund hasn't hit your account after 7 days.</p>
              </div>
            </motion.div>

            {/* App & Account */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-[#FF7E7E]" />
                <h2 className="text-2xl font-semibold">📲 App & Account</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Login Issues?</strong> Reset your password via the app or contact us.</p>
                <p><strong>Edit Profile or Address:</strong> Go to your profile section to update details anytime.</p>
                <p><strong>Delete My Account:</strong> Write to us at <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a> for permanent account deletion.</p>
              </div>
            </motion.div>

            {/* Product & Routine Queries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Droplet className="w-6 h-6 text-[#FF7E7E]" />
                <h2 className="text-2xl font-semibold">🧴 Product & Routine Queries</h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>Confused about which product suits your skin?</strong></p>
                <p><strong>Not sure how to use your AI-personalized kit?</strong></p>
                <p>We're happy to guide you. Drop us a email at <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline">support@klym.life</a></p>
              </div>
            </motion.div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-[#FF7E7E]/10 to-[#FF7E7E]/5 rounded-lg p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-[#FF7E7E]" />
              <h2 className="text-2xl font-semibold">📧 Still Have a Question?</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Reach out anytime—we usually respond within a few hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-lg">
                <Mail className="w-5 h-5 text-[#FF7E7E]" />
                <span className="font-medium">Email:</span>
                <a href="mailto:support@klym.life" className="text-[#FF7E7E] hover:underline font-medium">
                  support@klym.life
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-lg text-gray-700">
                <Clock className="w-5 h-5 text-[#FF7E7E]" />
                <span className="font-medium">Timings:</span>
                <span>Monday–Saturday, 10 AM to 7 PM</span>
              </div>
            </div>

            <div className="mt-8">
              <a href="mailto:support@klym.life">
                <Button className="bg-[#FF7E7E] hover:bg-[#FF6B6B] text-white px-8 py-3 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy">
                <Button variant="outline" className="hover:bg-gray-50">
                  Privacy Policy
                </Button>
              </Link>
              <Link href="/terms-of-use">
                <Button variant="outline" className="hover:bg-gray-50">
                  Terms of Use
                </Button>
              </Link>
              <Link href="/user-privacy-choices">
                <Button variant="outline" className="hover:bg-gray-50">
                  User Privacy Choices
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">© 2025 KLYM. All rights reserved.</p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
