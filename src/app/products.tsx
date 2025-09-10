"use client";

 
import ProductCard from "@/components/Rafih/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";


const products = [
  {
    id: "1",
    title: {
      en: "Kerala & India Treasure – Limited Edition Gift Hamper (Only 50 Worldwide)",
      ar: "كنوز كيرالا والهند – علبة هدايا إصدار محدود (فقط 50 حول العالم)"
    },
    image: "/rafi-products/ProductOne-1.jpg",
    href: "/products/1"
  },
  {
    id: "2",
    title: {
      en: "Kerala Ayurveda Complete Herbal Care Kit – 100% Natural Wellness",
      ar: "مجموعة العناية العشبية الكاملة من كيرالا – عافية طبيعية 100%"
    },
    image: "/rafi-products/ProductTwo-1.jpg",
    href: "/products/2"
  },
 
];

export default function ProductsPage() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  return (
    <div className="py-4 lg:py-12  ">
  
      <div className="w-full px-4 sm:px-10 pt-12 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">
          {isArabic ? "منتجاتنا" : "Our Products"}
        </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl mx-auto justify-center items-start">
          {products.map(product => (
            <ProductCard key={product.id} {...product} title={product.title[language]} />
          ))}
        </div>
      </div>
    </div>
  );
}
