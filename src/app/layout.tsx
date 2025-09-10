import type { Metadata } from "next";
 import { Poppins } from 'next/font/google';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import "./globals.css";
import RafiHeader from "@/components/Rafih/Navbar";
import Footer from "@/components/Rafih/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FontProvider from "@/components/FontProvider";
// Load Poppins font with required weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // add the weights you need
  style: ['normal', 'italic'], // optional
  display: 'swap',             // best for SEO and performance
});

// Load IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
});

 
export const metadata: Metadata = {
  title: "India in One Book – Your Ultimate Arabic Guide to India",
  description: `It is the ultimate Arabic digital guide to India’s history, culture, food, travel, and wellness. Written by Mohamed Rafih, it offers insider tips, maps, and stories to explore India with confidence.`,
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        
      >
       <LanguageProvider>
            <FontProvider 
            poppinsClass={poppins.className} 
            ibmPlexSansArabicClass={ibmPlexSansArabic.className}
          >
            <RafiHeader/>
            {children}
            <Footer/>
         </FontProvider>
       </LanguageProvider>
      </body>
    </html>
  );
}
