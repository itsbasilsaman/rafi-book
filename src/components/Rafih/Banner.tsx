
"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";
import type { MouseEvent,   } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";


// WhatsApp floating button message
const whatsappMessage = encodeURIComponent(
  `Hi! I am interested in the digital guidebook "India in One Book – Through My Eyes". Please share more details!`
);
const whatsappNumber = "919961844241"; // WhatsApp number without +


function Banner() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";


  // Loader state
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Banner image carousel
  const images = [
    "/rafi-banner.jpg",
    "/rafi-banner-two.jpg",
       "/rafi-banner-three.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);


  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // 3D Parallax effect for image
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: MouseEvent<HTMLDivElement> | { clientX: number; clientY: number }) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <>
      {/* Loader overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7 } }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-2xl"
              style={{ perspective: 800 }}
            >
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center"
              >
                <Image src="/rafi-logo.png" alt="logo" width={40} height={40} className="object-contain" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-white pt-[110px] md:pt-[150px] "
        dir={isArabic ? "rtl" : "ltr"}
        style={{ filter: loading ? 'blur(2px)' : 'none', pointerEvents: loading ? 'none' : 'auto' }}
      >
      {/* Left Image Section with sliding animation */}
      <div
        className="w-full md:w-1/2 relative overflow-hidden min-h-[300px] lg:min-h-[400px] flex items-center justify-center"
        ref={imageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={e => {
          const touch = e.touches[0];
          if (!touch) return;
          handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
        }}
        onTouchEnd={handleMouseLeave}
        style={{ perspective: 800 }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
            className="absolute w-full h-full flex items-center justify-center"
            style={{
              transform: `rotateY(${-tilt.x}deg) rotateX(${tilt.y}deg) scale3d(1.04,1.04,1.04)`
            }}
          >
            <Image
              src={images[current]}
              alt={t("aboutMe.label")}
              width={370}
              height={400}
              className="rounded-lg shadow-lg w-full lg:h-[400px] h-[300px] object-cover lg:w-[370px]"
              priority
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Text Section */}
      <div className={`w-full mt-8 md:w-1/2 md:mt-0 md:ml-10 animate-slideIn ${isArabic ? "text-right arabic-font" : "text-left"}`}>
        <p className="mb-2 text-sm text-gray-600 text-center">
          {t("rafih.banner.subheading") || (isArabic ? "الهند بعيون هندي": "India Through the Eyes of an Indian")}
        </p>


        <h1
          className="mb-4 text-3xl font-bold text-center leading-tight text-gray-800 md:text-5xl"
          dangerouslySetInnerHTML={{
            __html:
           
              (isArabic
                ?  "الدليل العربي الشامل إلى الهند"
                : "The Comprehensive Arabic Guide to India  ")
          }}
        />

        {/* Pay Now Button - always visible at top of text section */}
        <div className="flex flex-col items-center justify-center w-full mb-6">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px 4px #fff, 0 4px 16px #0A5FFF22', backgroundColor: '#181818', color: '#fff' }}
            whileTap={{ scale: 0.97 }}
            className="relative cursor-pointer bg-black text-white px-5 py-3 rounded-lg shadow-lg flex items-center justify-center font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black overflow-hidden group"
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
              {isArabic ? 'اشتري الآن ' : 'Buy Now'}
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
                background: rgba(255,255,255,0.3);
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

        <p
        className="mb-6 text-gray-600"
dangerouslySetInnerHTML={{
  __html:
  
    (isArabic
      ?
        `اكتشف "الهند في كتاب واحد – بعيني": الدليل الرقمي الأوسع الذي يكشف لك تاريخ الهند، ثقافتها، مطبخها، أسرار السفر، الصحة وأكثر — كل ذلك باللغة العربية، بقلم هندي يعرف تمامًا ما تحتاج إليه.<br /><br />سواء كنت تخطط لرحلة عائلية، تبحث عن رعاية طبية، مطاعم حلال، أو تحلم بجمال كيرالا… هذا الكتاب يقدم لك نصائح عملية، قصصًا واقعية، خرائط وقوائم حصرية.<br /><br />ابدأ رحلتك إلى الهند بثقة ووضوح ومعرفة من الداخل — بقلم محمد رافع.`
      :
        `Discover <strong>“India in One Book – Through My Eyes”</strong>: The most extensive digital guide that reveals India’s history, culture, cuisine, travel secrets, health, and more — all in Arabic, written by an Indian who knows exactly what you need.<br /><br />Whether you’re planning a family trip, seeking medical care, looking for halal restaurants, or dreaming of the beauty of Kerala… this book offers practical tips, real stories, maps, and exclusive lists.<br /><br />Begin your journey to India with confidence, clarity, and insider knowledge — written by Mohamed Rafih.`)
}}

        />
      </div>
    </div>
    {/* WhatsApp Floating Button */}
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ rotateY: 0, rotateX: 0 }}
      animate={{ rotateY: [0, 30, 0, -30, 0], rotateX: [0, -30, 0, 30, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      className="fixed z-50 bottom-6 right-6 md:bottom-10 md:right-10"
      style={{ perspective: 800 }}
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.95, rotate: -10 }}
        className="shadow-2xl rounded-full p-1 bg-gradient-to-tr from-green-400 via-emerald-500 to-lime-400 animate-pulse"
        style={{ boxShadow: '0 8px 32px #25D36655' }}
      >
        <motion.div
          className="w-16 h-16  flex items-center justify-center bg-white rounded-full border-4 border-green-400"
          style={{
            boxShadow: '0 2px 12px #25D36644',
            background: 'radial-gradient(circle at 30% 30%, #eafff3 60%, #b9f5d8 100%)',
          }}
        >
          {/* Standard WhatsApp icon SVG */}
       <FaWhatsapp className="text-green-400 text-[32px]" />
        </motion.div>
      </motion.div>
    </motion.a>

    {/* Developed by BrandBik LLP Floating Box */}
    <div
      className="fixed z-50 bottom-6 left-4 md:bottom-10 md:left-10 bg-black/90 text-white text-xs md:text-sm px-3 py-1 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-0 md:gap-1   text-center"
      style={{ backdropFilter: 'blur(2px)', minWidth: 120 }}
    >
      <span>
        Developed with <span className="mx-1 text-red-500 text-base">❤</span>
      </span>
      <span className="md:ml-1 font-semibold">by BrandBik LLP</span>
    </div>
    </>
  );
}

export default Banner;
