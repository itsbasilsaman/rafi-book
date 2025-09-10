"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
 
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
 

export default function RafiHeader() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Add this helper function to check if we're on the works or about route
  const isDarkTextRoute = pathname === '/works' || pathname === '/about' || pathname === '/clients'

  // Close panel when route changes
  useEffect(() => {
    setIsPanelOpen(false)
  }, [pathname])

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 991)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle panel open/close
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isPanelOpen])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLanguageDropdownOpen(false)
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  const handleLanguageChange = (newLanguage: 'en' | 'ar') => {
    setLanguage(newLanguage)
    setIsLanguageDropdownOpen(false)
  }

  

  // Language Switcher Component
  const LanguageSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <motion.button
        onClick={() => {
          const newLanguage = language === "en" ? "ar" : "en"
          handleLanguageChange(newLanguage)
        }}
        className={`relative inline-flex items-center h-[42px] px-0 rounded-full cursor-pointer transition-all duration-300 ${
          isScrolled 
            ? "bg-gray-100 hover:bg-gray-200" 
            : "bg-white/20 hover:bg-white/30"
        } ${isMobile ? "w-[80px]" : "w-[85px]"}`}
        whileTap={{ scale: 0.95 }}
      >
        {/* Toggle Track */}
        <div className="relative w-full h-full flex items-center justify-between px-1">
          {/* Language Labels */}
          <span className={`text-sm pl-2 font-medium z-10 ${
            isScrolled 
              ? (language === "en" ? "text-white" : "text-gray-300")
              : (language === "en" ? "text-black" : "text-gray-100")
          }`}>
            EN
          </span>
          <span className={`text-sm pr-1 font-medium z-10 ${
            isScrolled 
              ? (language === "ar" ? "text-white" : "text-gray-300")
              : (language === "ar" ? "text-black" : "text-gray-100")
          }`}>
            عربي
          </span>
          
          {/* Toggle Circle */}
          <motion.div
            className={`absolute h-[34px] w-[38px] rounded-full ${
              isScrolled ? "bg-gray-800" : "bg-white"
            } shadow-md`}
            animate={{
              x: language === "en" ? 0 : isMobile ? "36px" : "39px"
            }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
          />
        </div>
      </motion.button>
    </div>
  )

  return (
    <header
      dir="ltr"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 bg-transparent`}
    >
      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-24 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          {/* Combined Navigation Container with Logo and CTA */}
          <div className={`relative flex items-center justify-between w-full transition-all duration-500 ease-in-out ${
            isScrolled || isDarkTextRoute
              ? "bg-white/80 backdrop-blur-md shadow-sm"
              : "bg-black/20 backdrop-blur-md"
          } rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3`}>

            {/* Left side: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" prefetch>
                {isLargeScreen ? (
                  <Image
                    src={isScrolled || isDarkTextRoute ? "/rafi-logo.png" : "/rafi-logo.png"}
                    alt="Logo"
                    width={250}
                    height={400}
                    className="w-[130px] sm:w-[110px] md:w-[120px] h-[40px] sm:h-[40px] md:h-[40px] object-contain"
                  />
                ) : (
                  <Image src="/rafi-logo.png" alt="Logo" width={300} height={200} className="w-[63px]  h-[36px]   object-cover" />
                )}
              </Link>
            </div>
            
           

            {/* Right side: Controls */}
            <div className="flex items-center">
              {/* Desktop Controls */}
              <div className="hidden lg:flex items-center gap-1 sm:gap-2 md:gap-3">
                <LanguageSwitcher />
               
              </div>

              {/* Mobile and Tablet Controls */}
              <div className="lg:hidden flex items-center gap-2 sm:gap-3 md:gap-4">
                <LanguageSwitcher isMobile={true} />
                
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </header>
  )
}