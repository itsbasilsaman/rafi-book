"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function ProductBuyButton() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <motion.button
      whileHover={{ scale: 1.06, backgroundColor: '#fff', color: '#000', boxShadow: '0 0 16px #0002' }}
      whileTap={{ scale: 0.97 }}
      className="w-full max-w-xs mx-auto mt-4  my-2 px-6 py-3 rounded-full bg-black text-white font-bold text-lg shadow-lg border border-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black flex items-center justify-center gap-2"
      style={{ letterSpacing: 1 }}
      onClick={() => {
        window.open('https://payments.cashfree.com/forms?code=RAFIH-GIFT', '_blank');
      }}
    >
      {isArabic ? 'اشتري الآن' : 'Buy Now'}
    </motion.button>
  );
}
