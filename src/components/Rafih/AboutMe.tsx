"use client"; // Needed if you're using Next.js App Router

import { useLanguage } from "@/contexts/LanguageContext";

function AboutMe() {
  const { language, t } = useLanguage();

  const isArabic = language === "ar";

  return (
    <div id="about" dir={isArabic ? "rtl" : "ltr"} className="w-full">
      <section className="relative z-20 pt-0 pb-0 mt-4 md:mt-24 overflow-clip">
        <div className="w-[90%] max-w-[72.5rem] mx-auto relative">
          <div className="flex flex-col lg:flex-row gap-0 md:gap-8">
            {/* Left Content */}
            <div
              className={`w-full lg:w-1/2 flex-none pt-2 pb-2 md:pt-10 md:pb-10 pl-2 md:pl-4 lg:pr-20 ${
                isArabic ? "text-right arabic-font" : "text-left"
              } flex flex-col justify-center fade-in-up`}
              style={isArabic ? { direction: "rtl" } : { direction: "ltr" }}
            >
              <div className="mb-2 md:mb-6">
                <h1 className="uppercase font-montserrat text-[1.7rem] md:text-[3rem] lg:text-[3.4rem] font-medium tracking-tight ">
                  <span>{t(isArabic ? "aboutMe.heading.ar" : "aboutMe.heading")}</span>
                </h1>
              </div>
              <div className="mt-4 md:mt-16">
                <div className="w-full mb-0">
                  <div
                    className={`flex flex-col justify-start ${
                      isArabic ? "items-end" : "items-start"
                    }`}
                  >
                    <div className="relative flex flex-col flex-1 w-full mb-2 md:mb-5 fade-in-up delay-100">
                      <label className="mb-1 md:mb-2 text-sm font-normal leading-none tracking-wider text-left text-gray-700 uppercase">
                        {t(isArabic ? "aboutMe.label.ar" : "aboutMe.label")}
                      </label>
                      <p className={`${isArabic ? "text-right" : "text-left"} mb-2 md:mb-5`}>
                        {t(isArabic ? "aboutMe.para1.ar" : "aboutMe.para1").split(/\n/).map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="relative flex flex-col flex-1 w-full mb-2 md:mb-5 fade-in-up delay-200">
                      <p className={`${isArabic ? "text-right" : "text-left"} mb-2 md:mb-5`}>
                        {t(isArabic ? "aboutMe.para2.ar" : "aboutMe.para2").split(/\n/).map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="relative flex flex-col flex-1 w-full mb-2 md:mb-5 fade-in-up delay-300">
                      <p className={`${isArabic ? "text-right" : "text-left"} mb-2 md:mb-5`}>
                        {t(isArabic ? "aboutMe.para3.ar" : "aboutMe.para3").split(/\n/).map((line, i) => (
                          <span key={i}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="w-full lg:w-1/2 max-h-[100vh] sticky top-0 rounded-[29px] bg-cover bg-center min-h-[220px] h-[220px] md:h-[350px] lg:h-auto  my-5 fade-in-right"
              style={{ backgroundImage: "url('/profile.jpg')" }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
