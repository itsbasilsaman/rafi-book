
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
// import Link from "next/link";
import Image from "next/image";


function Packages() {
  const { language, t } = useLanguage();
  const isArabic = language === 'ar';
  // Inject 3D slide animation CSS only once on client
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const styleId = '3d-slide-animation-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
      .animate-3d-slide { animation: slide3d 0.7s cubic-bezier(.4,2,.6,1) forwards; }
      @keyframes slide3d {
      0% { transform: none; }
      40% { transform: rotateY(30deg) scale(1.05) translateX(30px); }
      100% { transform: none; }
      }
      `;
      document.head.appendChild(style);
    }
  }, []);
  // State to track which card is animating
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Inject 3D slide animation CSS only once on client
  useEffect(() => {
    const styleId = '3d-slide-animation-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .animate-3d-slide {
          animation: slide3d 0.7s cubic-bezier(.4,2,.6,1) forwards;
        }
        @keyframes slide3d {
          0% { transform: none; }
          40% { transform: rotateY(30deg) scale(1.05) translateX(30px); }
          100% { transform: none; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  // ...existing code...

  // Card content for both English and Arabic
  const cardContentEn = [
    {
      title: "India Through My Eyes",
      desc: "A personal journey unveiling India’s hidden beauty, told through the eyes of Arab travelers who found a home away from home.",
    },
    {
      title: "Roots of Islam in India",
      desc: "From the first footsteps of Arab traders to majestic mosques and centuries of cultural harmony — the untold Islamic legacy of India.",
    },
    {
      title: "Spices, Oud & Attar",
      desc: "Fragrant trails of India’s spice ports, the timeless Gulf–India trade, and the soulful art of oud and attar crafted for Arab hearts.",
    },
    // ...remaining cards, shifted down...
    {
      title: "Timeless India: A Living History",
      desc: "From ancient empires to modern marvels — India’s story told for Arab travelers seeking depth and wonder.",
    },
    {
      title: "Tales That Shaped a Nation",
      desc: "True stories, legends, and hidden gems — discover India through voices of its people and Arab explorers.",
    },
    {
      title: "Colors of Culture",
      desc: "A journey through India’s festivals, traditions, and art — where every corner feels like a new world.",
    },
    {
      title: "India Travel Secrets",
      desc: "Your insider’s guide to iconic spots, halal-friendly stays, and hidden escapes — designed for Arab visitors.",
    },
    {
      title: "Business in India",
      desc: "Explore booming business avenues in fashion, real estate, spices, and tech — opportunities bridging GCC and India.",
    },
    {
      title: "Healing in India",
      desc: "From Ayurveda to world-class hospitals — why India is a trusted hub for Arab medical travelers.",
    },
    {
      title: "Learn in India",
      desc: "Top universities, Islamic heritage studies, and modern programs — India as a gateway for Arab students.",
    },
    {
      title: "Flavors of India",
      desc: "From biryani to street food — the Indian dishes Arabs already love, and the ones they haven’t discovered yet.",
    },
    {
      title: "Souqs of India",
      desc: "Spices, perfumes, textiles, gold, antiques — India’s treasures that Arabs take home.",
    },
    {
      title: "Islamic Heritage in India",
      desc: "Mosques, forts, and forgotten stories of Arab traders and scholars who shaped Indian history.",
    },
    {
      title: "Kerala: Arabs’ Second Home",
      desc: "Why Kerala is called “Khairullah” — beaches, backwaters, and Arab-friendly hospitality.",
    },
    {
      title: "Ayurveda & Wellness",
      desc: "A deep dive into ancient healing, spa retreats, and natural remedies Arabs are increasingly seeking.",
    },
  ];

  const cardContentAr = [
    {
      title: "الهند بعيني",
      desc: "رحلة شخصية تكشف جمال الهند الخفي بعيون المسافرين العرب الذين وجدوا وطناً ثانياً.",
    },
    {
      title: "جذور الإسلام في الهند",
      desc: "من أولى خطوات التجار العرب إلى المساجد العظيمة وقرون من التناغم الثقافي — الإرث الإسلامي غير المروي للهند.",
    },
    {
      title: "التوابل والعود والعطر",
      desc: "دروب عطرة من موانئ التوابل الهندية، تجارة الخليج والهند الخالدة، وفن العود والعطر المصنوع لقلوب العرب.",
    },
    // ...remaining cards, shifted down...
    {
      title: "الهند الخالدة: تاريخ حي",
      desc: "من الإمبراطوريات القديمة إلى العجائب الحديثة — قصة الهند للمسافر العربي الباحث عن العمق والدهشة.",
    },
    {
      title: "حكايات صنعت أمة",
      desc: "قصص حقيقية، أساطير، وجواهر مخفية — اكتشف الهند بأصوات شعبها والمستكشفين العرب.",
    },
    {
      title: "ألوان الثقافة",
      desc: "رحلة عبر مهرجانات الهند وتقاليدها وفنونها — حيث كل زاوية عالم جديد.",
    },
    {
      title: "أسرار السفر في الهند",
      desc: "دليلك لأشهر الأماكن، الإقامات الحلال، والهروب إلى الجواهر الخفية — مصمم للمسافر العربي.",
    },
    {
      title: "الأعمال في الهند",
      desc: "استكشف فرص الأعمال المزدهرة في الموضة، العقارات، التوابل، والتقنية — جسور بين الخليج والهند.",
    },
    {
      title: "الشفاء في الهند",
      desc: "من الأيورفيدا إلى المستشفيات العالمية — لماذا الهند وجهة العرب للعلاج.",
    },
    {
      title: "التعليم في الهند",
      desc: "جامعات رائدة، دراسات التراث الإسلامي، وبرامج حديثة — الهند بوابة الطلاب العرب.",
    },
    {
      title: "نكهات الهند",
      desc: "من البرياني إلى طعام الشارع — أطباق هندية يعشقها العرب وتنتظر من يكتشفها.",
    },
    {
      title: "أسواق الهند",
      desc: "توابل، عطور، أقمشة، ذهب، تحف — كنوز الهند التي يأخذها العرب معهم.",
    },
    {
      title: "التراث الإسلامي في الهند",
      desc: "مساجد، حصون، وقصص منسية عن تجار وعلماء عرب صنعوا تاريخ الهند.",
    },
    {
      title: "كيرالا: الوطن الثاني للعرب",
      desc: "لماذا تُسمى كيرالا \"خير الله\" — شواطئ، بحيرات، وضيافة عربية.",
    },
    {
      title: "الأيورفيدا والعافية",
      desc: "غوص في العلاج القديم، منتجعات السبا، والعلاجات الطبيعية التي يبحث عنها العرب.",
    },
  ];

  // Repeat images if not enough for all cards
  const images = [
    "https://www.planetware.com/photos-large/IND/india-top-attractions-mysore-palace.jpg",
     "https://www.treebo.com/blog/wp-content/uploads/2018/02/eid.jpg",
     "https://www.tastingtable.com/img/gallery/tips-you-need-when-cooking-with-spices/l-intro-1670951341.jpg",
    "https://wallpapercave.com/wp/wp2649841.jpg",
    
    "https://realhappiness.org/images/about-ayurveda.jpg",
    "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20181212162032/Traditional-Kathakali-dance.jpg",
    "https://seoimgak.mmtcdn.com/blog/sites/default/files/kerala%20hero.jpg",
  "https://www.globalbusinessculture.com/wp-content/uploads/2021/11/Business-Culture-in-India.jpg",
  "https://img.veenaworld.com/wp-content/uploads/2023/06/A-Trip-to-Kashmir-in-June-The-Perfect-Itinerary-Decoded.jpg",
  "https://indiafacts.org/wp-content/uploads/2019/08/Ganga-Jamuni-Tehzeeb.jpeg",
 
    "http://vietnamvisavoa.com/public/uploads/files/halal%20food.jpg",

    "https://wallpapercave.com/wp/wp8149661.jpg",
   "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/04/Taj-Mahal-Uttar-Pradesh-Indo-Islamic-Architecture_8th-Apr.jpeg",
   "https://i.assetzen.net/i/huXs1CfIFbS1/w:1920/h:/q:70.jpg",
   "https://www.lordsayurveda.com/wp-content/uploads/2024/08/blog_tradition-1.webp",
   
  ];

  return (
    <section
      className="relative z-[2] pt-14 pb-14 bg-white"
      id="package"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-[95%] max-w-[1200px] mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Left Content */}
          <div className="flex flex-col items-center w-full max-w-[420px] text-center lg:text-left">
            <div className="mb-4 lg:mb-6">
              <h2 className="mb-2 lg:mb-4 text-[2.2rem] lg:text-[3rem] font-semibold leading-tight text-center tracking-tight">
                <span className="inline-block align-top">{t("packages.heading1")}</span>{" "}
                <span className="inline-block align-top">{t("packages.heading2")}</span>
              </h2>
            </div>
            <div className="text-gray-500">
              <p className="mb-4 text-base font-medium lg:mb-6">
                {t("packages.intro")}
              </p>
            </div>
            <div>
              {/* Cashfree Payment Button Snippet */}
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
          </div>

          {/* Right Cards */}
          <ul
            role="list"
            className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 p-0 mb-0 list-none"
          >
            {(language === 'ar' ? cardContentAr : cardContentEn).map((card, idx) => {
              const img = images[idx % images.length];
              return (
                <li
                  key={idx}
                  className={`group flex flex-col overflow-hidden bg-white border border-gray-200 rounded-xl transition-transform duration-500 hover:scale-[1.03] active:scale-95 ${activeCard === idx ? 'animate-3d-slide' : ''}`}
                  style={{ perspective: '800px', transform: activeCard === idx ? 'rotateY(30deg) scale(1.05) translateX(30px)' : undefined }}
                  tabIndex={0}
                  onMouseMove={e => {
                    const cardEl = e.currentTarget;
                    const rect = cardEl.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const rotateY = ((x / rect.width) - 0.5) * 10;
                    const rotateX = ((y / rect.height) - 0.5) * -10;
                    cardEl.style.transform = activeCard === idx
                      ? `rotateY(30deg) scale(1.05) translateX(30px)`
                      : `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.03)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = activeCard === idx ? 'rotateY(30deg) scale(1.05) translateX(30px)' : '';
                  }}
                  onTouchStart={e => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onTouchEnd={e => {
                    e.currentTarget.style.transform = activeCard === idx ? 'rotateY(30deg) scale(1.05) translateX(30px)' : '';
                  }}
                  onClick={() => {
                    setActiveCard(idx);
                    setTimeout(() => setActiveCard(null), 700);
                  }}
                >
                  <div className="w-full h-[180px] relative">
                    <div className="relative w-full h-full aspect-[330/180]">
                      <Image
                        src={img}
                        alt={`package-${idx}`}
                        fill
                        className="absolute inset-0 object-cover w-full h-full z-[1]"
                        style={idx === 5 ? { objectFit: "cover" } : {}}
                        sizes="(max-width: 767px) 90vw, (max-width: 991px) 44vw, 20vw"
                        priority={idx < 2}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-5 md:p-6">
                    <div className="mb-2">
                      <p className="font-sans text-lg md:text-xl font-semibold leading-tight tracking-wide text-gray-900 uppercase">
                        {card.title}
                      </p>
                    </div>
                    <div className="text-gray-500">
                      <p className="text-xs md:text-sm leading-snug tracking-widest uppercase">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
 
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Packages;
