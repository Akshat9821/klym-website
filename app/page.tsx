"use client"

import { motion, useScroll, useInView, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Apple, Play, Sparkles } from "lucide-react"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)
  const section5Ref = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const heroStillVisible = useInView(heroRef, { once: false, margin: "-50px" })
  const section2InView = useInView(section2Ref, { once: true, margin: "-100px" })
  const section3InView = useInView(section3Ref, { once: true, margin: "-100px" })
  const section4InView = useInView(section4Ref, { once: true, margin: "-100px" })
  const section5InView = useInView(section5Ref, { once: true, margin: "-100px" })

  const chatContainerRef = useRef(null)
  const [chatAnimationComplete, setChatAnimationComplete] = useState(false)
  const [isSection3Active, setIsSection3Active] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [visibleMessageCount, setVisibleMessageCount] = useState(0)
  
  // Scroll progress for section 3
  const { scrollYProgress: section3ScrollProgress } = useScroll({
    target: section3Ref,
    offset: ["start center", "end center"]
  })

  // Scroll progress for section 4 (Know Before You Glow)
  const { scrollYProgress: section4ScrollProgress } = useScroll({
    target: section4Ref,
    offset: ["start 80%", "end 20%"]
  })
  const phone1Y = useTransform(section4ScrollProgress, [0, 1], [30, -10])
  const phone2Y = useTransform(section4ScrollProgress, [0, 1], [50, -20])
  const phone3Y = useTransform(section4ScrollProgress, [0, 1], [30, -10])
  const phone1Rotate = useTransform(section4ScrollProgress, [0, 1], [-2, 0])
  const phone2Rotate = useTransform(section4ScrollProgress, [0, 1], [0, 0])
  const phone3Rotate = useTransform(section4ScrollProgress, [0, 1], [2, 0])

  const chatMessages = [
    {
      type: "ai",
      message:
        "Hi Ananya 👋\nYour scan picked up mild pigmentation, uneven tone, and a bit of dullness. Nothing serious — but worth improving.",
    },
    {
      type: "user",
      message:
        "Yes, I've noticed. I just don't know what's actually causing it.",
    },
    {
      type: "ai",
      message:
        "Looks like a mix of sun exposure ☀️, a few leftover acne marks 🔬, and some missed routines.",
    },
    {
      type: "user",
      message:
        "That makes sense. I just want something simple and effective.",
    },
    {
      type: "ai",
      message:
        "Most routines fail because they're not made for you. Let's fix that.",
    },
    {
      type: "ai",
      message:
        "Your essentials:\n✨ Vitamin C – brightens & protects\n🧪 Niacinamide – fades marks\n🌿 PHA – smooths gently",
    },
    {
      type: "ai",
      message:
        "Want a quick why? Or ready for your plan?",
    },
    {
      type: "user",
      message:
        "Quick why, please — I like knowing what I'm using.",
    },
    {
      type: "ai",
      message:
        "KLYM breaks it down — no fluff, just real science behind every ingredient.",
    },
  ]

  // Scroll hijacking effect - TEMPORARILY DISABLED FOR DEBUGGING
  useEffect(() => {
    // Temporarily disabled to debug scrolling issue
    // TODO: Re-enable after fixing scroll problem
    
    // Set a demo message count for testing
    setVisibleMessageCount(chatMessages.length)
    setChatAnimationComplete(true)
    
    return () => {
      // Ensure no scroll locks remain
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [chatMessages.length])

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Hero Section - Scroll 1 */}
      <section ref={heroRef} className="relative min-h-screen flex items-start justify-center pt-16 md:pt-24 px-4 overflow-hidden">
        {/* Background Portrait */}
        <div 
          className="absolute inset-0 z-0 hero-bg-image bg-contain md:bg-cover"
          style={{
            backgroundColor: '#ffffff',
            backgroundImage: 'url(/hero-portrait.png)',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        </div>
        {/* KLYM Logo - Top Center of Screen */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={heroInView && heroStillVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 -ml-10 sm:-ml-10 z-50"
        >
          <Image
            src="/klym-logo.png"
            alt="KLYM logo"
            width={120}
            height={40}
            className="h-10 w-auto sm:h-18"
            priority
          />
        </motion.div>
        
        
        <div className="relative z-20 container mx-auto max-w-6xl text-white">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-42 mb-8 ml-4"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto text-black mb-12">
              <span className="block md:inline">AI-powered skincare</span>
              <span className="block md:inline md:ml-2">that knows you better than you do.</span>
            </h2>
            
            {/* Side texts positioned below center text */}
            <div className="relative mt-8 px-4 sm:px-0">
              {/* Mobile (xs) — pin the badges to left/right so they don't drift */}
              <div className="block sm:hidden relative">
                {/* Left badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute left-1 -top-10"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2">
                    <div className="text-black text-xs font-semibold tracking-wider font-['Urbanist'] leading-tight text-left">
                      Your Skin, Decoded.
                    </div>
                  </div>
                </motion.div>

                {/* Right badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -right-1 -top-10"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 py-2">
                    <div className="text-black text-xs font-semibold tracking-wider font-['Urbanist'] leading-tight text-right">
                      Your Routine, Perfected.
                    </div>
                  </div>
                </motion.div>

                {/* Spacer so the absolute badges don't overlap following content */}
                <div className="h-20"></div>
              </div>

              {/* >= sm — keep the original desktop/tablet layout */}
              <div className="hidden sm:flex justify-between items-stretch gap-8">
                {/* YOUR SKIN, DECODED - Left aligned */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 md:px-6 md:py-4">
                    <div className="text-black text-base sm:text-lg md:text-xl font-semibold tracking-wider font-['Urbanist'] leading-tight text-left sm:text-center">
                      Your Skin, Decoded.
                    </div>
                  </div>
                </motion.div>

                {/* YOUR ROUTINE, PERFECTED - Right aligned */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex justify-end"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 md:px-6 md:py-4">
                    <div className="text-black text-base sm:text-lg md:text-xl font-semibold tracking-wider font-['Urbanist'] leading-tight text-right sm:text-center">
                      Your Routine, Perfected.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Guessing Games End Here */}
      <section ref={section2Ref} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={section2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-8 text-black whitespace-nowrap leading-snug tracking-tight">Guessing Games End Here</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - App Screen with Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={section2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* iPhone 16 Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-[3.5rem] p-2 shadow-2xl w-[340px] mx-auto">
                  {/* iPhone 16 Screen */}
                  <div className="bg-black rounded-[3rem] overflow-hidden relative aspect-[9/19.5]">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 shadow-inner">
                      <div className="absolute inset-1 bg-gray-900 rounded-full">
                        {/* Camera and sensors */}
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Video */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source src="/screen-recording.mov" type="video/mp4" />
                    </video>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-70"></div>
                  
                  {/* Side Buttons */}
                  <div className="absolute left-0 top-20 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
                  <div className="absolute left-0 top-36 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
                  <div className="absolute left-0 top-48 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
                  
                  {/* Power Button */}
                  <div className="absolute right-0 top-32 w-1 h-16 bg-gray-700 rounded-l-sm"></div>
                  
                  {/* Action Button (new iPhone 16 feature) */}
                  <div className="absolute left-0 top-16 w-1 h-4 bg-orange-500 rounded-r-sm opacity-80"></div>
                  
                  {/* Camera Control Button (new iPhone 16 feature) */}
                  <div className="absolute right-0 top-52 w-1 h-6 bg-gray-600 rounded-l-sm"></div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={section2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <h3 className="text-2xl md:text-3xl font-semibold leading-relaxed">
                Snap a selfie, get instant clarity. KLYM's AI scans your skin across 17+ parameters like hydration,
                texture, acne, and more.
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#FF7E7E] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-xl font-medium">Clinical-grade accuracy in seconds</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#FF7E7E] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-xl font-medium">Personalized insights instantly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Meet KLYM Chat Interface with Scroll Animation */}
      <section ref={section3Ref} className="pt-20 pb-8 md:pb-20 min-h-screen relative">
        {/* Section-wide background underlay */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-no-repeat bg-cover bg-center opacity-10 md:opacity-20 pointer-events-none"
          style={{ backgroundImage: "url(/chat-underlay.jpg)" }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={section3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#FF7E7E]">
              <span className="block">Meet KLYM</span>
              <span className="block text-xl sm:text-3xl md:text-5xl leading-tight md:leading-tight whitespace-nowrap sm:whitespace-normal">
                Your AI Cosmetologist Expert
              </span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto" ref={chatContainerRef}>
            <div className="rounded-3xl p-8 min-h-[800px] relative">
              <div className="space-y-6">
                {chatMessages.slice(0, visibleMessageCount).map((msg, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, y: 50 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      className={`flex ${msg.type === "ai" ? "justify-start" : "justify-end"}`}
                    >
                      <motion.div
                        className={`max-w-xs md:max-w-md px-6 py-4 rounded-2xl chat-bubble ${
                          msg.type === "ai"
                            ? "bg-white text-black rounded-bl-md shadow-lg border border-gray-100 chat-bubble-ai"
                            : "bg-[#FF7E7E] text-white rounded-br-md shadow-lg chat-bubble-user"
                        }`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">{msg.message}</p>
                        <p className={`text-xs mt-2 ${msg.type === "ai" ? "text-gray-500" : "text-white/80"}`}>
                          {msg.type === "ai" ? "KLYM AI" : "Ananya"}
                        </p>
                        
                        {/* Typing indicator effect for AI messages */}
                        {msg.type === "ai" && (
                          <motion.div
                            className="flex gap-1 mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-[#FF7E7E] rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-[#FF7E7E] rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-[#FF7E7E] rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            />
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Chat completion indicator */}
              {chatAnimationComplete && (
                <motion.div
                  className="text-center mt-8 md:mt-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                <motion.div
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF7E7E] to-[#FF9999] text-white rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 4px 15px rgba(255, 126, 126, 0.2)",
                      "0 8px 25px rgba(255, 126, 126, 0.4)",
                      "0 4px 15px rgba(255, 126, 126, 0.2)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-sm font-semibold">Chat Complete - Ready for Next Step</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        
        {/* Scroll progress indicator */}
        <motion.div
          className="fixed right-8 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gray-200 rounded-full overflow-hidden z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: section3InView ? 1 : 0 }}
        >
          <motion.div
            className="w-full bg-gradient-to-b from-[#FF7E7E] to-[#FF9999] rounded-full origin-top"
            style={{
              scaleY: section3ScrollProgress,
              height: "100%"
            }}
          />
        </motion.div>
      </section>

      {/* Section 4 - Know Before You Glow - Only shows when chat animation is near completion */}
      <motion.section 
        ref={section4Ref} 
        className="pt-10 md:pt-20 pb-20 bg-gray-50"
        initial={{ opacity: 0 }}
        style={{
          opacity: useTransform(section3ScrollProgress, [0.7, 0.85], [0, 1]),
          pointerEvents: useTransform(section3ScrollProgress, [0.7, 0.85], ["none", "auto"])
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={section4InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black">Know Before You Glow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understand product compatibility with your skin using KLYM's Fitment Scores. First time in India:
              Transparent, personalized skincare recommendations.
            </p>
          </motion.div>

          {/* Horizontal Scrolling App Screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={section4InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 md:gap-8 justify-start md:justify-center items-center min-w-max pl-[50vw] md:pl-0 pr-4 md:pr-0 md:max-w-5xl md:mx-auto mobile-transform">
                {[
                  { src: '/splash-screen.jpg', alt: 'Splash Screen' },
                  { src: '/IMG_9281.PNG', alt: 'App Screen 2' },
                  { src: '/IMG_9282.PNG', alt: 'App Screen 3' }
                ].map(({ src, alt }, index) => {
                  return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={section4InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 + (0.15 * index), ease: "easeOut" }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{
                      y: index === 0 ? phone1Y : index === 1 ? phone2Y : phone3Y,
                      rotate: index === 0 ? phone1Rotate : index === 1 ? phone2Rotate : phone3Rotate,
                    }}
                    className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl flex-shrink-0 w-[280px] cursor-pointer"
                  >
                    {/* iPhone Frame Elements */}
                    <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden relative aspect-[9/19.5] border border-gray-800">
                      {/* Dynamic Island */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-20">
                        <div className="absolute inset-1 bg-gray-900 rounded-full">
                          {/* Camera and sensors */}
                          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-700 rounded-full"></div>
                          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
                        </div>
                      </div>
                      
                      <Image
                        src={src}
                        alt={alt}
                        width={280}
                        height={580}
                        className={`w-full h-full object-cover`}
                        style={{ 
                          objectFit: index === 1 ? 'cover' : 'cover',
                          transform: index === 1 ? 'scale(1.0) translateY(0%)' : 'none',
                          transformOrigin: index === 1 ? 'center center' : 'center'
                        }}
                        priority={index === 1}
                        unoptimized
                      />
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full opacity-70"></div>
                    
                    {/* Side Buttons */}
                    <div className="absolute left-0 top-20 w-1 h-10 bg-gray-700 rounded-r-sm"></div>
                    <div className="absolute left-0 top-32 w-1 h-7 bg-gray-700 rounded-r-sm"></div>
                    <div className="absolute left-0 top-42 w-1 h-7 bg-gray-700 rounded-r-sm"></div>
                    
                    {/* Power Button */}
                    <div className="absolute right-0 top-28 w-1 h-14 bg-gray-700 rounded-l-sm"></div>
                    
                    {/* Action Button (iPhone 16 new feature) */}
                    <div className="absolute left-0 top-16 w-1 h-4 bg-orange-500 rounded-r-sm opacity-80"></div>
                    
                    {/* Camera Control Button (iPhone 16 new feature) */}
                    <div className="absolute right-0 top-48 w-1 h-5 bg-gray-600 rounded-l-sm"></div>
                  </motion.div>
                )
                })}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 5 - Ready to Meet Your Best Skin */}
      <section ref={section5Ref} className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={section5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-black">Ready to Meet Your Best Skin?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
              No more guesswork. Scan your skin, discover your routine, unlock your healthiest glow.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-row flex-nowrap items-center justify-between gap-1 sm:gap-8 lg:gap-12 mb-6 w-full px-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={section5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-2 sm:gap-3 w-auto"
              >
                <Sparkles className="w-3 h-3 sm:w-7 sm:h-7 text-[#FF7E7E]" />
                <span className="text-[11px] sm:text-xl font-semibold whitespace-nowrap tracking-tight">Dermatologist Approved</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={section5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center gap-2 sm:gap-3 w-auto"
              >
                <Sparkles className="w-3 h-3 sm:w-7 sm:h-7 text-[#FF7E7E]" />
                <span className="text-[11px] sm:text-xl font-semibold whitespace-nowrap tracking-tight">Privacy Protected</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={section5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center gap-2 sm:gap-3 w-auto"
              >
                <Sparkles className="w-3 h-3 sm:w-7 sm:h-7 text-[#FF7E7E]" />
                <span className="text-[11px] sm:text-xl font-semibold whitespace-nowrap tracking-tight">100% Free Analysis</span>
              </motion.div>
            </div>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={section5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-3 sm:gap-6 justify-center items-center w-full max-w-sm mx-auto mt-2 sm:mt-14"
            >
              <Button 
                asChild
                className="flex items-center justify-center gap-2 px-3 py-2 bg-[#FF7E7E] hover:bg-[#FF7E7E]/90 text-white text-sm sm:text-lg rounded-xl w-full"
              >
                <a 
                  href="https://apps.apple.com/in/app/klym/id6748438143" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Download for iOS
                </a>
              </Button>
              <Button 
                asChild
                className="flex items-center justify-center gap-2 px-3 py-2 bg-[#FF7E7E] hover:bg-[#FF7E7E]/90 text-white text-sm sm:text-lg rounded-xl w-full"
              >
                <a 
                  href="https://play.google.com/store/apps/details?id=com.gramai.klym&pcampaignid=web_share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Download on Android
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 text-lg">
            <a href="#" className="hover:text-[#FF7E7E] transition-colors text-center">
              About Us
            </a>
            <Link href="/privacy-policy" className="hover:text-[#FF7E7E] transition-colors text-center">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-[#FF7E7E] transition-colors text-center">
              Terms of Use
            </Link>
            <Link href="/user-privacy-choices" className="hover:text-[#FF7E7E] transition-colors text-center">
              User Privacy Choices
            </Link>
            <Link href="/support" className="hover:text-[#FF7E7E] transition-colors text-center">
              Support
            </Link>
          </div>
          
          {/* Social Media Section */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex-1"></div>
            <div className="text-center text-gray-400">
              <p>&copy; 2025 KLYM. All rights reserved.</p>
            </div>
            <div className="flex-1 flex justify-end">
              <div className="text-right">
                <div className="flex gap-2 sm:gap-3 md:gap-6">
                  <a href="https://www.instagram.com/klym_life?igsh=MWNsdzd6eXM0cGNrMQ==" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/instagram-logo.png"
                      alt="Instagram"
                      width={64}
                      height={64}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                  </a>
                  <a href="https://www.facebook.com/share/1B9hcPmwwX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/facebook-logo-updated.svg"
                      alt="Facebook"
                      width={64}
                      height={64}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/klym-life/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <Image
                      src="/linkedin-logo.png"
                      alt="LinkedIn"
                      width={64}
                      height={64}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
