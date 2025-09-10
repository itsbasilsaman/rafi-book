"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface StepsSectionProps {
  steps: string[];
}

export default function StepsSection({ steps }: StepsSectionProps) {
  const { language, t } = useLanguage();
  return (
    <section
      className="py-2 px-2 md:px-0 bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-8">
        <h3 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">{t("rafih.sectionTwo.howTo")}</h3>
        <div className="flex flex-col gap-8">
          {/* Step 1 */}
          <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-5 md:p-7 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 flex items-center justify-center bg-white">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3596/3596093.png"
                  alt="Step 1 icon"
                  width={56}
                  height={56}
                  className="object-contain  w-14 h-14"
                />
              </div>
            </div>
            <div>
              <div className="text-lg md:text-xl font-semibold text-black mb-1">{t('rafih.sectionTwo.stepTitle1') || 'Step 1'}</div>
              <div className="text-gray-700 text-base md:text-lg">{steps[0]}</div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-5 md:p-7 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 flex items-center justify-center bg-white">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
                  alt="Step 2 icon"
                  width={56}
                  height={56}
                  className="object-contain w-10 h-10  "
                />
              </div>
            </div>
            <div>
              <div className="text-lg md:text-xl font-semibold text-black mb-1">{t('rafih.sectionTwo.stepTitle2') || 'Step 2'}</div>
              <div className="text-gray-700 text-base md:text-lg">{steps[1]}</div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-5 md:p-7 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 flex items-center justify-center bg-white">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                  alt="Step 3 icon"
                  width={56}
                  height={56}
                  className="object-contain w-10 h-10  "
                />
              </div>
            </div>
            <div>
              <div className="text-lg md:text-xl font-semibold text-black mb-1">{t('rafih.sectionTwo.stepTitle3') || 'Step 3'}</div>
              <div className="text-gray-700 text-base md:text-lg">{steps[2]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
