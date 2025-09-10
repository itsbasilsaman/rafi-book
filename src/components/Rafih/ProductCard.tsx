"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ProductCardProps {
  title: string;
  price?: string;
  image: string;
  href: string;
}

export default function ProductCard({ title, price, image, href }: ProductCardProps) {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <div className="group flex justify-center md:justify-center">
      <Link href={href} className="w-full">
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg bg-black/90 border border-gray-200 flex flex-col items-center justify-center aspect-square min-h-[260px] max-w-[340px] mx-auto"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="w-full aspect-square flex items-center justify-center bg-black">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-all duration-300 group-hover:blur-[2px] group-hover:scale-105 rounded-2xl"
              style={{ minHeight: 0, minWidth: 0 }}
            />
            {/* Animated Buy Now overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="bg-black text-white px-6 py-2 rounded-full font-semibold text-lg shadow-lg border border-white/20 opacity-90 group-hover:opacity-100 transition-all duration-300">
                {isArabic ? 'عرض التفاصيل' : 'View Detail'}
              </span>
            </motion.div>
          </div>
          <div className="w-full flex flex-col items-center justify-center py-6 px-4 gap-3 flex-1">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-center line-clamp-2">{title}</h3>
            {price && (
              <p className="text-gray-200 text-base font-medium text-center mt-1">{price}</p>
            )}
          </div>
        </motion.div>
      </Link>
      {/* Bottom Buy Now Button for desktop */}
      <div className="w-full px-4 pb-4 hidden md:block mt-auto">
        <a
          href="https://payments.cashfree.com/forms?code=RAFIH-GIFT"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block px-7 py-3 rounded-full bg-white text-black font-bold shadow hover:bg-gray-200 transition-colors duration-200 text-base text-center"
          style={{ letterSpacing: 1 }}
        >
          {isArabic ? 'اشتري الآن' : 'Buy Now'}
        </a>
      </div>
      {/* Inline Buy Now Button for mobile */}
      <div className="w-full px-4 pb-4 block md:hidden">
        <a
          href="https://payments.cashfree.com/forms?code=RAFIH-GIFT"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block px-7 py-3 rounded-full bg-white text-black font-bold shadow hover:bg-gray-200 transition-colors duration-200 text-base text-center"
          style={{ letterSpacing: 1 }}
        >
          {isArabic ? 'اشتري الآن' : 'Buy Now'}
        </a>
      </div>
    </div>
  );
}

