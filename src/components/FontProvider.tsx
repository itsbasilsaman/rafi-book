"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { ReactNode } from "react"

interface FontProviderProps {
  children: ReactNode
  poppinsClass: string
  ibmPlexSansArabicClass: string
}

export default function FontProvider({ children, poppinsClass, ibmPlexSansArabicClass }: FontProviderProps) {
  const { language } = useLanguage()
  
  // The font is now handled globally in LanguageContext
  // This component provides the base font classes for Next.js font optimization
  const fontClass = language === 'ar' ? ibmPlexSansArabicClass : poppinsClass
  
  return (
    <div className={fontClass}>
      {children}
    </div>
  )
} 