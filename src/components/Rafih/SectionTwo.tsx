"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
 
import StepsSection from "./StepsSection";
import { useLanguage } from "@/contexts/LanguageContext";
import ProductsPage from "@/app/products";
 


export default function SectionTwo(){
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.disconnect();
    };
  }, []);


  // Steps array for dynamic content
  // Steps for "How to download the ebook"
  const steps: string[] = [
    t("rafih.sectionTwo.step1"), // e.g. Step 1: Go to payment page
    t("rafih.sectionTwo.step2"), // e.g. Step 2: Complete payment
    t("rafih.sectionTwo.step3"), // e.g. Step 3: Download your ebook instantly
  ];

  return (

    <div>
      {/* Main Section */}
      <section
        ref={sectionRef}
        dir={language === "ar" ? "rtl" : "ltr"}
        className={`relative z-20 bg-black text-white transition-all duration-700 section item-box ${
          isVisible ? "animate" : ""
        } px-4 py-8 md:px-8 md:py-12 flex items-center justify-center w-full`}
      >
        <div className="w-full max-w-3xl mx-auto relative">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full px-2 md:px-4">
            <h2
              className={`heading-style-h2 box-title is-word item main-c is-1 capitalize font-montserrat font-medium leading-snug transition-all duration-700 ${
                isVisible ? "animate" : ""
              } text-xl md:text-3xl text-center px-1 md:px-2`}
              style={{ direction: language === "ar" ? "rtl" : "ltr" }}
            >
              {t("rafih.sectionTwo.heading")}
            </h2>
            {/* Cashfree Payment Button Snippet */}
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 0 24px 4px #0002, 0 4px 16px #0A5FFF22', backgroundColor: '#181818', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              className="relative cursor-pointer bg-white text-black px-5 py-3 rounded-lg shadow-lg flex items-center justify-center font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black overflow-hidden group border-2 border-black"
              style={{ boxShadow: '0 4px 16px #0A5FFF22' }}
              onClick={e => {
                // Ripple effect
                const btn = e.currentTarget;
                const circle = document.createElement('span');
                const diameter = Math.max(btn.clientWidth, btn.clientHeight);
                const radius = diameter / 2;
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${e.nativeEvent.offsetX - radius}px`;
                circle.style.top = `${e.nativeEvent.offsetY - radius}px`;
                circle.className = 'ripple';
                btn.appendChild(circle);
                setTimeout(() => circle.remove(), 600);
                window.open('https://payments.cashfree.com/forms/RAFIHBOOK', '_blank');
              }}
            >
              <span className="flex items-center gap-2">
                {isArabic ?  'اشتري الان' : 'Buy Now'}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                  {/* Arrow icon, flips for Arabic */}
                  {isArabic ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                      <path d="M13 9H5M5 9L8 6M5 9L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                      <path d="M5 9H13M13 9L10 6M13 9L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
              </span>
              {/* Ripple effect style */}
              <style jsx>{`
                .ripple {
                  position: absolute;
                  border-radius: 50%;
                  transform: scale(0);
                  animation: ripple 0.6s linear;
                  background: rgba(0,0,0,0.15);
                  pointer-events: none;
                  z-index: 2;
                }
                @keyframes ripple {
                  to {
                    transform: scale(2.5);
                    opacity: 0;
                  }
                }
              `}</style>
            </motion.button>
          </div>
        </div>
      </section>
<ProductsPage/>
  {/* Steps Section - How to download the ebook */}
  <StepsSection steps={steps} />
    </div>
  );
}
