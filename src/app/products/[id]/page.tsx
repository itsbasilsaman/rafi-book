"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductBuyButton from "@/components/Rafih/ProductBuyButton";
 
import { useLanguage } from "../../../contexts/LanguageContext";
import Image from "next/image";

const products = [
  {
    id: "1",
    title: {
      en: "Kerala & India Treasure – Limited Edition Gift Hamper (Only 50 Worldwide)",
      ar: "كنوز كيرالا والهند – علبة هدايا إصدار محدود (فقط 50 حول العالم)"
    },
    images: [
      "/rafi-products/ProductOne-1.jpg",
      "/rafi-products/ProductOne-2.jpg",
      "/rafi-products/ProductOne-3.jpg",
      "/rafi-products/ProductOne-4.jpg"
    ],
    description: {
      en: `Unbox the essence of Kerala and India with this exclusive heritage gift hamper, carefully curated to bring together tradition, wellness, and luxury. Each item is handpicked to reflect the richness of Indian culture and the timeless bond with the Arab world.\n\nWhat’s Inside:\n\n🌿 Premium Spice Jars – aromatic cardamom, pepper, cinnamon, and cloves\n\n🌸 Mini Attar/Oud Roll-on – a fragrance inspired by Arabic elegance\n\n🪵 Natural Oud Wood Pieces – authentic touch of luxury and tradition\n\n🧼 Ayurvedic Soap – natural, skin-friendly wellness bar\n\n🖐 Handmade Souvenir – crafted by Kerala artisans\n\n🍵 Kerala Tea Leaves or Malabar Coffee – the taste of India in every sip\n\n💆 Herbal Hair Oil – enriched with herbs for strength and shine\n\n✨ Packaged in an elegant wooden box with premium detailing, this hamper is more than a gift—it’s a treasure of Kerala, designed for those who value authenticity, culture, and exclusivity.`,
      ar: `افتح جوهر كيرالا والهند مع علبة الهدايا التراثية الحصرية هذه، والتي تم تنسيقها بعناية لتجمع بين التقاليد والعافية والفخامة. كل عنصر مختار بعناية ليعكس غنى الثقافة الهندية والروابط الخالدة مع العالم العربي.\n\nماذا يوجد بالداخل:\n\n🌿 برطمانات توابل فاخرة – هيل، فلفل، قرفة وقرنفل عطرية\n\n🌸 عطر/عود رول أون صغير – رائحة مستوحاة من الأناقة العربية\n\n🪵 قطع عود طبيعية – لمسة أصيلة من الفخامة والتقاليد\n\n🧼 صابون أيروفيدي – طبيعي وصحي للبشرة\n\n🖐 تذكار يدوي – من صنع حرفيي كيرالا\n\n🍵 أوراق شاي كيرالا أو قهوة مالابار – طعم الهند في كل رشفة\n\n💆 زيت شعر عشبي – غني بالأعشاب للقوة واللمعان\n\n✨ معبأة في صندوق خشبي أنيق بتفاصيل فاخرة، هذه العلبة أكثر من مجرد هدية—إنها كنز من كيرالا، صممت لمن يقدرون الأصالة والثقافة والتميز.`
    }
  },
  {
    id: "2",
    title: {
      en: "Kerala Ayurveda Complete Herbal Care Kit – 100% Natural Wellness",
      ar: "مجموعة العناية العشبية الكاملة من كيرالا – عافية طبيعية 100%"
    },
    images: [
      "/rafi-products/ProductTwo-1.jpg",
      "/rafi-products/ProductTwo-2.jpg",
      "/rafi-products/ProductTwo-3.jpg",
      "/rafi-products/ProductTwo-4.jpg"
    ],
    description: {
      en: `Discover the timeless secrets of Ayurveda with this all-in-one Herbal Care Kit, crafted in Kerala – the land of Ayurveda. Each product is made with authentic herbs, oils, and natural extracts to restore balance, beauty, and wellness for your body and mind.\n\nWhat’s Inside:\n\n🌿 Ayurvedic Herbal Hair Oil – nourishes scalp, strengthens roots, adds shine\n\n🍃 Herbal Shampoo – gentle, natural cleansing for healthy hair\n\n🪷 Kumkumadi Thailam – the ancient beauty elixir for glowing skin\n\n🌸 Herbal Face Pack – revitalizes and refreshes skin\n\n🌿 Aloe Vera Gel – soothing hydration and cooling therapy\n\n🌾 Sandalwood Cream – brightens and softens skin naturally\n\n💆 Ayurveda Massage Oil – relieves stress and relaxes muscles\n\n🧼 Herbal Soap – pure herbal cleansing bar for daily freshness\n\n🪸 Herbal Body Scrub – exfoliates and renews skin\n\n✨ Presented as a premium wellness collection, this kit is your complete guide to natural self-care, beauty, and relaxation – rooted in the 5,000-year-old wisdom of Ayurveda.`,
      ar: `اكتشف أسرار الأيورفيدا الخالدة مع مجموعة العناية العشبية الكاملة هذه، المصنوعة في كيرالا – أرض الأيورفيدا. كل منتج مصنوع من أعشاب وزيوت ومستخلصات طبيعية أصيلة لاستعادة التوازن والجمال والعافية لجسمك وعقلك.\n\nماذا يوجد بالداخل:\n\n🌿 زيت شعر عشبي أيورفيدي – يغذي فروة الرأس، يقوي الجذور، ويمنح اللمعان\n\n🍃 شامبو عشبي – تنظيف لطيف وطبيعي لشعر صحي\n\n🪷 كومكومادي ثايلام – إكسير الجمال القديم لبشرة متوهجة\n\n🌸 قناع وجه عشبي – ينشط وينعش البشرة\n\n🌿 جل الألوفيرا – ترطيب وتهدئة فورية\n\n🌾 كريم الصندل – يضيء وينعم البشرة طبيعيًا\n\n💆 زيت مساج أيورفيدي – يخفف التوتر ويسترخي العضلات\n\n🧼 صابون عشبي – صابون تنظيف طبيعي للاستخدام اليومي\n\n🪸 مقشر للجسم بالأعشاب – يقشر ويجدد البشرة\n\n✨ مقدمة كمجموعة عافية فاخرة، هذه المجموعة هي دليلك الكامل للعناية الذاتية الطبيعية والجمال والاسترخاء – مستمدة من حكمة الأيورفيدا التي تعود إلى 5000 عام.`
    }
  },
  {
    id: "3",
    title: {
      en: "Collector's Dummy Product 2",
      ar: "منتج تجريبي للعرض فقط 2"
    },
    price: "$499 USD",
    image: "/products/plates.jpg",
    description: {
      en: "This is a dummy product for display purposes only.",
      ar: "هذا منتج تجريبي للعرض فقط."
    }
  },
];
export default function ProductDetailPage(){

  const descRef = React.useRef<HTMLDivElement>(null);
  const params = useParams();
  const { language } = useLanguage();
  const product = products.find(p => p.id === params.id);
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    if (!product || !product.images) return;
    if (typeof window === "undefined") return;
    const animate = () => {
      if (window.innerWidth < 768) {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
      } else {
        setCurrentImage((prev) => (prev + 2) % product.images.length);
      }
    };
    const interval = setInterval(animate, 2000);
    return () => clearInterval(interval);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen  flex flex-col justify-center items-center bg-[#fdf6f2] ">
       
        <div className="flex-1  pt-[110px] flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600">Sorry, the product you are looking for does not exist.</p>
        </div>
    
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#fdf6f2] flex flex-col">
    {/* Sticky Top Bar with section navigation */}
    <div  className="pt-[90px]">
 
       
    </div>
    <main className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-w-lg mx-auto flex flex-col gap-6 items-center pt-8 pb-24 px-2 md:pt-16 md:pb-32">
        {/* Animated Square Image Carousel */}
        <div className="w-full aspect-square max-w-xs mx-auto relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-black flex items-center justify-center">
          {product.images && product.images.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={product.title[language] + ' ' + (idx + 1)}
              width={400}
              height={400}
              className={`object-cover w-full h-full absolute transition-all duration-700 ${idx === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ left: 0, top: 0, borderRadius: '1rem', transition: 'all 0.7s cubic-bezier(.4,0,.2,1)' }}
            />
          ))}
        </div>
        {/* Details Section */}
        <section ref={descRef} className="w-full flex flex-col items-center text-center gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 leading-tight">{product.title[language]}</h1>
          <ProductDescription description={product.description[language]} />
          {product.price && (
            <div className="text-xl font-semibold text-black mb-2">{product.price}</div>
          )}
        </section>
        {/* Details Section 2 (for navigation) */}
        
      </div>
    </main>
    {/* Fixed Buy Now Button at the bottom */}
    <div className="fixed bottom-0 left-0 w-full z-40 bg-gradient-to-t from-white/95 via-white/80 to-transparent px-4 py-4 flex items-center justify-center border-t border-gray-200 shadow-2xl">
      <ProductBuyButton />
    </div>
 
  </div>
  );
}

// Helper component to format emoji points in product descriptions
function ProductDescription({ description }: { description: string }) {
  // Split by newlines and filter out empty lines
  const lines = description.split(/\n+/).filter(Boolean);
  // Find the index where the points start (first line with emoji)
  const emojiRegex = /^[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
  const firstEmojiIdx = lines.findIndex(line => emojiRegex.test(line.trim()));
  return (
    <div className="text-lg text-gray-700 mb-4 text-center max-w-2xl">
      {/* Intro text before points */}
      {firstEmojiIdx > 0 && (
        <p className="mb-4">{lines.slice(0, firstEmojiIdx).join(' ')}</p>
      )}
      {/* Emoji points as a styled list */}
      <ul className="list-none flex flex-col gap-2 items-center mb-4">
        {lines.slice(firstEmojiIdx).map((line, i) => {
          const match = line.match(emojiRegex);
          if (match) {
            return (
              <li key={i} className="flex items-start gap-2 w-full max-w-xl text-left">
                <span className="text-xl md:text-2xl leading-none">{match[0]}</span>
                <span className="flex-1">{line.replace(emojiRegex, '').trim()}</span>
              </li>
            );
          }
          // If not an emoji line, render as normal text
          return <li key={i} className="w-full max-w-xl text-left">{line}</li>;
        })}
      </ul>
      {/* Outro text if any (after points) */}
      {firstEmojiIdx >= 0 && lines.length > firstEmojiIdx && lines[lines.length-1] && !emojiRegex.test(lines[lines.length-1].trim()) && (
        <p>{lines[lines.length-1]}</p>
      )}
    </div>
  );
}
