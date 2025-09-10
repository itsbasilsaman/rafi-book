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
    <div className="flex justify-center items-stretch">
      <div className="w-full max-w-xs bg-white border border-black rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform duration-200 hover:scale-[1.025]">
        <Link href={href} className="block w-full group">
          <div className="relative w-full aspect-square bg-white flex items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="object-cover w-full h-full"
              style={{ minHeight: 0, minWidth: 0 }}
              priority
            />
            {/* Blurred overlay and animated button on hover */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ pointerEvents: 'none' }}
            >
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-6 py-2 rounded-full font-semibold text-lg shadow-lg border border-black bg-black text-white"
                style={{ pointerEvents: 'auto' }}
              >
                {isArabic ? 'عرض التفاصيل' : 'View Detail'}
              </motion.span>
            </div>
          </div>
        </Link>
        <div className="flex flex-col items-center justify-between flex-1 px-5 py-6 gap-3">
          <h3 className="text-lg md:text-xl font-bold text-black text-center mb-2 line-clamp-3">{title}</h3>
          {price && (
            <p className="text-base font-medium text-center text-black/70 mt-1">{price}</p>
          )}
          <Link
            href={href}
            className="mt-4 w-full block px-7 py-3 rounded-full bg-black text-white font-bold shadow hover:bg-gray-900 transition-colors duration-200 text-base text-center border border-black"
            style={{ letterSpacing: 1 }}
          >
            {isArabic ? 'عرض التفاصيل' : 'View Detail'}
          </Link>
        </div>
      </div>
    </div>
  );
}

