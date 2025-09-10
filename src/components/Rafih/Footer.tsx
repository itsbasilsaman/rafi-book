"use client";


import React from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <a href="/rafih-book" className="flex items-center" aria-label="BrandBik Home">
          <Image src="/rafi-logo.png" alt="BrandBik Logo" width={163} height={136} className="w-[56px] h-[56px] object-cover mr-2" />
        </a>
        {/* Social Icons */}
        <div className="flex items-center gap-4 text-xl mt-4 md:mt-0">
          <a href="https://www.instagram.com/mohd_alhindy?igsh=NnJyMnNjaDd1eTE3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://x.com/mohd_alhindy?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="https://linktr.ee/mohd_alhindy?utm_source=linktree_profile_share&ltsid=5f1c678e-0347-47f5-bc5c-41451fac4cc6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 border border-white px-4 py-2 rounded-full transition-colors flex items-center gap-1">
            <FaLinkedin />
            <span className="text-sm font-semibold  ml-1">Connect</span>
          </a>
        </div>
        {/* Brand/Developed by with logo */}
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <span>Developed with</span>
          <span className="text-red-500 text-base">❤</span>
          <span>by</span>
          <a href="https://brandbik.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">BrandBik LLP</a>
        </div>
      </div>
    </footer>
  );
}
