"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {

  // Always initialize to 'ar' for SSR safety (default Arabic)
  const [language, setLanguageState] = useState<Language>('ar');
 

  // On mount, update language from localStorage if available, otherwise default to 'ar'
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language');
      if (storedLang === 'ar' || storedLang === 'en') {
        setLanguageState(storedLang);
      } else {
        setLanguageState('ar'); // default to Arabic if nothing stored
        localStorage.setItem('language', 'ar');
      }
    }
  }, []);

  // Update localStorage and DOM whenever language changes (client only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('language', language);
    const mainContent = document.querySelector('main');
    const bodyElement = document.body;
    if (mainContent) {
      mainContent.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
    if (language === 'ar') {
      bodyElement.classList.add('font-arabic');
      bodyElement.style.fontFamily = '"IBM Plex Sans Arabic", "Noto Sans Arabic", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    } else {
      bodyElement.classList.remove('font-arabic');
      bodyElement.style.fontFamily = '"Poppins", sans-serif';
    }
  }, [language]);

  // setLanguage wrapper for context consumers
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const translations: Translations = {
    en: {
  // Rafih Banner Section
  'rafih.banner.subheading': 'India, Through An Indian’s Eyes',
  'rafih.banner.heading': "The Complete Arabic Guidebook <span class='text-gray-500'>to India’s Heart & Heritage</span>",
  'rafih.banner.description': "Discover <strong>“India in One Book – Through My Eyes”</strong>: the only digital guidebook to unlock India’s history, culture, food, wellness, travel secrets, and more — all explained in Arabic, by an Indian who knows what you need to know.<br /><br />Whether you’re planning a family adventure, seeking medical care, searching for halal dining, or dreaming of Kerala’s beauty, this book answers your real questions with practical tips, personal stories, and exclusive maps and checklists.<br /><br />Start your Indian journey with confidence, clarity, and insider access—crafted for Arab travelers, by Muhammed Rafih.",
  // Packages Section
 'packages.heading1': 'India',
'packages.heading2': 'in your hands',
  'packages.intro': '“India in One Book – Through My Eyes” brings all of India to you — in Arabic, by an Indian who knows what you need to know. Whether you seek culture, medical help, halal food, or authentic adventure, our digital packages and guides unlock India for you and your family.',
  'packages.button': 'Download Your Guide',
  'packages.item1.title': 'India for Arab Travelers',
  'packages.item1.desc': 'Explore India’s rich history, from ancient civilizations to modern wonders, tailored for Arab travelers.',
  'packages.item2.title': 'Quick Kerala Mini Guide',
  'packages.item2.desc': 'True stories and personal journeys: discover India through the eyes of locals and Arab visitors.',
  'packages.item3.title': 'Wellness & Medical Travel',
  'packages.item3.desc': 'Dive into India’s vibrant culture—traditions, festivals, and daily life explained in Arabic.',
  'packages.item4.title': 'Halal Food & Dining Guide',
  'packages.item4.desc': 'Your essential travel guide: practical tips, must-see places, and insider advice for a smooth journey.',
  'packages.item5.title': 'Indian Festivals & Family Fun',
  'packages.item5.desc': 'Business in India: opportunities, etiquette, and how to succeed as an Arab entrepreneur or investor.',
  'packages.item6.title': 'Practical Planning Extras',
  'packages.item6.desc': 'Medical and wellness travel: trusted hospitals, Ayurveda, and health tips for Arab families in India.',
      // Location Section (Cards & Headings)
      'location.card1.heading': "Discover India's Hidden Heritage",
      'location.card1.desc': "Uncover stories, Islamic history, and places only a local can share.",
      'location.card2.heading': "Kerala: Where India Meets Arabia",
      'location.card2.desc': "Experience the culture, nature, and deep-rooted bonds with the Arab world.",
      'location.card3.heading': "Plan Smart – Travel Far",
      'location.card3.desc': "Get insider advice on food, clinics, wellness and safe journeys.",
      'location.card4.heading': "Create Memories in Every Chapter",
      'location.card4.desc': "From sacred traditions to Bollywood, experience it all — wonder, joy, and learning.",
      'location.sectionHeading.0': 'India',
      'location.sectionHeading.1': 'Through My Eyes:',
      'location.sectionHeading.2': 'Culture,',
      'location.sectionHeading.3': 'Secrets,',
      'location.sectionHeading.4': 'Inspiration',
      // AboutMe Section
      'aboutMe.heading': 'About Me',
'aboutMe.label': 'India in One Book – Through My Eyes',
'aboutMe.para1': `Peace be upon you,\n\nI am Mohamed Rafea, the first Indian content creator in Arabic and a proud son of Kerala. For years, I have dedicated myself to building a bridge between India and the Arab world, by sharing the stories, traditions, and everyday realities of this fascinating country – all in a language I have come to love: Arabic.\n\nMy journey began in the heart of Kerala, surrounded by an ancient culture and endless natural beauty. Inspired by the deep historical ties between India and the Gulf, I made it my mission to answer the real questions my Arab brothers and sisters ask: What is India truly like? What do we eat? Where do we travel? How do we find healing? How do we start businesses?\n\nEvery message and comment from my audience has been a source of inspiration. From this, I poured my heart into the project “India in One Book – Through My Eyes”: a comprehensive digital reference that goes beyond travel to answer your questions about history, food, health, medical tourism, family trips, business, and the secrets of my homeland, Kerala.`,
'aboutMe.para2': `Having lived, studied, and grown between India and the Gulf, I deeply understand the hopes and concerns of Arab travelers: halal food, authentic experiences, trusted hospitals, honest advice, and the language barrier. That is why my book covers all of this with clarity, offering practical checklists, video guides, and trustworthy tips.\n\nMy vision is simple: to make India welcoming, safe, and unforgettable for every Arab traveler and family.`,
'aboutMe.para3': `I invite you to join me on this journey, to see India through my eyes, and to turn your dream trip into reality. Whether you want to relax on Kerala’s backwaters, seek healing in a top hospital, taste a new spice in Delhi, or simply understand Indian festivals and family life – you will find it all here, with love and clarity.\n\nIndia in One Book – your bridge to the real India, written for Arabs, by an Indian who cares.\n\nWith you, Mohamed Rafih – India as you’ve never seen it before`,
      'hero.title.part1': 'We build',
      'hero.title.part2': 'bold brands',
      'hero.title.part3': '&',
      'hero.title.part4': 'digital experiences',
      'hero.subtitle': 'Strategy, identity, and design — elevated.',
      'hero.letsTalk': "Let's Talk",
      
  // Rafih SectionTwo
  'rafih.sectionTwo.heading': 'Experience every side of India — history, food, healing, Kerala and more — in one Arabic digital book by Muhammed Rafih.',
  'rafih.sectionTwo.button': 'Download India in One Book Now!',
  'rafih.sectionTwo.howTo': 'How to Download the Arabic eBook',
  'rafih.sectionTwo.step1': 'Click the download button below to start your order.',
  'rafih.sectionTwo.step2': 'Complete the secure payment form with your details.',
  'rafih.sectionTwo.step3': 'After payment, instantly receive your Arabic guide as a digital download.',
  'rafih.sectionTwo.stepTitle1': 'Start Your Order',
  'rafih.sectionTwo.stepTitle2': 'Secure Payment',
  'rafih.sectionTwo.stepTitle3': 'Get Your Guide Instantly',

  // About Section
      'about.title': 'Building Brands with Purpose',
      'about.subtitle': 'Brandbik transforms bold ideas into digital realities, blending creativity, strategy, and technology for next-level impact.',
      'about.description': "From startups to global icons, we craft unforgettable experiences and measurable results. Let's create something remarkable together.",
      'about.button': 'About',
      'about.stats.projects': 'Brands',
      'about.stats.countries': 'Countries',
      'about.stats.clients': 'Industries',
      
      // Services Section
      'services.title': 'Our Services',
      'services.subtitle': 'Strategic solutions, creative execution, and measurable results for ambitious brands.',
      'services.web.title': 'Web Development',
      'services.web.description': 'Robust, scalable websites engineered for performance and growth.',
      'services.app.title': 'App Development',
      'services.app.description': 'Intuitive mobile solutions that drive engagement and deliver value.',
      'services.branding.title': 'Brand Strategy',
      'services.branding.description': 'Distinctive brand identities that inspire trust and recognition.',
      'services.digital.title': 'Digital Marketing',
      'services.digital.description': 'Data-driven campaigns that accelerate your brand\'s online impact.',
      'services.social.title': 'Social Media',
      'services.social.description': 'Strategic content and community building for maximum reach.',
      'services.advertising.title': '  Advertising',
      'services.advertising.description': 'Targeted ad solutions designed to maximize ROI and brand visibility.',
      
      // Works Section
      'works.title': 'Our Work',
      'works.subtitle': 'Discover our latest projects and creative solutions.',
      'works.categories.website': 'Website Development',
      'works.categories.app': 'App Development',
      'works.categories.branding': 'Branding',
      'works.categories.social': 'Social Media',
      'works.categories.all': 'All',
      
      // Works Section Project 3
      'worksSection.project3.title': 'Engineered and Launched Robust Full-Stack Web Platforms',
      'worksSection.project3.category': 'Full-Stack Web Development',
      
      // Clients Section
      'clients.title': 'Clients',
      'clients.subtitle': 'We collaborate with brands across industries — from startups to global leaders — to craft experiences that resonate and endure.',
      'clients.viewAll': 'View all works',
      
      // Process Section
      'process.title': 'Our Process',
      'process.step1.title': 'Discover',
      'process.step1.description': 'We start with deep research to understand your audience, competitors, and goals.',
      'process.step2.title': 'Design',
      'process.step2.description': 'We craft systems — not just logos — that scale across all touchpoints.',
      'process.step3.title': 'Deliver',
      'process.step3.description': 'Every file, asset, and guide you need. Ready to launch and grow.',
      
      // Results Section
      'results.title': 'The Result',
      'results.description': 'A cohesive, elevated identity that helped increase brand recall. The new site saw a 28% lift in conversion within the first quarter post-launch.',
      'results.contact': 'Contact Us',
      
      // Header Navigation
      'header.about': 'About Us',
      'header.services': 'Services',
      'header.works': 'Works',
      'header.career': 'Career',
      'header.contact': 'Contact Us',
      'header.getStarted': 'Get Started',
      'header.connectUs': 'Connect Us',
      
      // GetStartedPanel Navigation
      'panel.impact': 'Impact',
      'panel.testimonials': 'Testimonials',
      'panel.clients': 'Clients',
      'panel.partnership': 'Partnership',
      'panel.insights': 'Insights',
      'panel.getInTouch': 'Get in Touch',
      
      // GetStartedPanel Section Content
      'panel.impact.title': 'Transforming Digital Landscapes',
      'panel.impact.desc': "At BrandBik, we're not just building digital solutions – we're crafting experiences that drive real business growth. Our approach combines technical excellence with creative innovation to deliver results that matter.",
      'panel.impact.feature1.title': 'Strategic Innovation',
      'panel.impact.feature1.desc': 'We blend cutting-edge technology with strategic thinking to create solutions that give your business a competitive edge.',
      'panel.impact.feature2.title': 'Proven Excellence',
      'panel.impact.feature2.desc': 'Our track record of successful projects demonstrates our commitment to delivering exceptional results.',
      'panel.impact.feature3.title': 'Client-Centric Approach',
      'panel.impact.feature3.desc': 'We put your business goals at the center of everything we do, ensuring solutions that truly serve your needs.',
      'panel.impact.cta': 'Discover Our Impact',

      'panel.testimonials.title': 'Client Success Stories',
      'panel.testimonials.desc': 
        "Our clients' success is our greatest achievement. Each project represents a unique journey of transformation and growth.",
      'panel.testimonials.feature1.title': 'Enterprise Transformation',
      'panel.testimonials.feature1.desc': 'Leading global enterprises trust us to deliver innovative solutions that drive their digital evolution.',
      'panel.testimonials.feature2.title': 'Startup Success',
      'panel.testimonials.feature2.desc': "We've helped numerous startups establish their digital presence and scale their operations effectively.",
      'panel.testimonials.feature3.title': 'Industry Recognition',
      'panel.testimonials.feature3.desc': 'Our work has been consistently recognized for excellence in digital innovation and client satisfaction.',
      'panel.testimonials.cta': 'Read Success Stories',

      'panel.clients.title': 'Global Reach',
      'panel.clients.desc': 'Our influence extends across borders, serving clients worldwide with innovative digital solutions that transcend geographical boundaries.',
      'panel.clients.feature1.title': 'International Presence',
      'panel.clients.feature1.desc': 'We serve clients across multiple continents, bringing global best practices to every project.',
      'panel.clients.feature2.title': 'Industry Diversity',
      'panel.clients.feature2.desc': 'Our expertise spans across various sectors, from technology to healthcare, finance to retail.',
      'panel.clients.feature3.title': 'Cultural Understanding',
      'panel.clients.feature3.desc': 'We adapt our solutions to respect and enhance local business practices and cultural contexts.',
      'panel.clients.cta': 'Meet Our Clients',

      'panel.partnership.title': 'Innovation Through Partnership',
      'panel.partnership.desc': 'We believe in the power of collaboration. Our strategic partnerships enable us to deliver comprehensive solutions that drive innovation.',
      'panel.partnership.feature1.title': 'Technology Partners',
      'panel.partnership.feature1.desc': 'We collaborate with leading technology providers to deliver cutting-edge solutions.',
      'panel.partnership.feature2.title': 'Industry Experts',
      'panel.partnership.feature2.desc': 'Our network of industry specialists ensures we stay ahead of emerging trends and technologies.',
      'panel.partnership.feature3.title': 'Research Collaborations',
      'panel.partnership.feature3.desc': 
        "We partner with research institutions to develop innovative solutions for tomorrow's challenges.",
      'panel.partnership.cta': 'Partner With Us',

      'panel.insights.title': 'Digital Insights',
      'panel.insights.desc': 'Stay ahead of the curve with our expert insights, industry trends, and thought leadership in digital transformation.',
      'panel.insights.feature1.title': 'Industry Analysis',
      'panel.insights.feature1.desc': 'Deep dives into emerging trends and their impact on business transformation.',
      'panel.insights.feature2.title': 'Expert Perspectives',
      'panel.insights.feature2.desc': 'Insights from our team of specialists on the future of digital innovation.',
      'panel.insights.feature3.title': 'Success Strategies',
      'panel.insights.feature3.desc': 'Practical guidance on implementing successful digital transformation initiatives.',
      'panel.insights.cta': 'Explore Insights',

      'panel.contact.title': "Let's Create Together",
      'panel.contact.desc': 'Ready to transform your digital presence? Our team of experts is here to help you achieve your business goals through innovative solutions.',
      'panel.contact.feature1.title': 'Dedicated Support',
      'panel.contact.feature1.desc': 'Our team is available to assist you at every step of your digital journey.',
      'panel.contact.feature2.title': 'Quick Response',
      'panel.contact.feature2.desc': 'We prioritize your needs and ensure timely communication throughout our engagement.',
      'panel.contact.feature3.title': 'Tailored Solutions',
      'panel.contact.feature3.desc': 'Every project is unique, and we customize our approach to meet your specific requirements.',
      'panel.contact.cta': 'Get in Touch',
      
      // Footer Navigation
      'footer.tagline': 'Delivering Technological Excellence and Innovation to Businesses Worldwide — With Presence in India, Saudi Arabia & the UK',
      'footer.pages': 'Pages',
      'footer.brandbik' : 'BRANDBIK LLP' , 
      'footer.home': 'Home',
      'footer.aboutUs': 'About us',
      'footer.services': 'Services',
      'footer.works': 'Works',
      'footer.contactUs': 'Contact Us',
      'footer.contactInfo': 'Contact Us',
      'footer.copyright': '© {year} Brandbik. All rights reserved.',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.termsOfService': 'Terms of Service',
      'footer.cookiePolicy': 'Cookie Policy',
      
      // Team Description
      'team.contactUs': 'Contact Us',
      
      // About Banner
      'about.banner.badge': 'About',
      'about.banner.title': 'We build brands that move with purpose.',
      'about.banner.subtitle1': 'Brandbik specializes in building impactful brands, innovative digital experiences, and strategic growth solutions for forward-thinking businesses.',
      'about.banner.subtitle2': "Whether you're an emerging startup or an established global enterprise, we craft compelling narratives and design enduring connections that drive success.",
      'about.banner.gallery.title': 'Our team in action',
      
      // Team Description
      'team.description.text': "We're a cross-disciplinary team of strategists, designers, developers, and storytellers. What brings us together is a shared belief",
      
      // About Boxes
      'about.boxes.brands': 'Brands We Work With',
      'about.boxes.projects': 'Projects Completed',
      'about.boxes.countries': 'Countries we work with',
      'about.boxes.scaled': 'Industries Empowered',
      'about.boxes.revenue': 'Revenue Generated',
      'about.boxes.clients': 'Happy Clients',
      
      // Approach Section
      'approach.badge': 'Approach',
      'approach.title': 'What Sets us apart',
      'approach.innovation': 'Innovation',
      'approach.quality': 'Quality Focused',
      'approach.results': 'Results-driven',
      'approach.skilled': 'Skilled Team',
      'approach.customer': 'Customer-Centric',
      'approach.agile': 'Agile Process',
      'approach.transparent': 'Transparent Communication',
      'approach.timely': 'Timely Delivery',
      'approach.technology': 'Cutting-edge Technology',
      'approach.data': 'Data-Driven Decisions',
      'approach.security': 'Security-First Approach',
      'approach.sustainability': 'Sustainability',
      
      // Our Team Section
      'team.badge': 'About',
      'team.title': 'Our Core Team',
      
      // Client Reviews
      'reviews.badge': 'Client Reviews',
      'reviews.cta.title': 'Lets work with Us',
      'reviews.cta.description': 'Discover how we turn ideas into impact. From App development to Web Design, SEO, and Digital Marketing, our work speaks for itself. Explore our latest projects on social media and see what sets us apart.',
      'reviews.cta.button': 'Connect Us',
      
      // Services in Reviews
      'reviews.services.branding': 'Branding',
      'reviews.services.app': 'App Development',
      'reviews.services.social': 'Social Media',
      'reviews.services.website': 'Website Design',
      'reviews.services.uxui': 'UX/UI Design',
      'reviews.services.marketing': 'Digital Marketing',
      
      // Service Main Banner
      'service.main.title': 'Empowering Brands with Next-Gen Solutions',
      'service.main.subtitle': 'Discover a full spectrum of services designed to elevate your brand, drive growth, and create lasting impact in the digital era.',
      'service.main.button': 'Start Your Project',
      
      // Service Content
      'service.content.text': 'From strategy to execution — we help businesses grow through clarity, creativity, and design.',
      'service.content.highlight.strategy': 'strategy',
      'service.content.highlight.execution': 'execution',
      'service.content.highlight.clarity': 'clarity',
      'service.content.highlight.creativity': 'creativity',
      'service.content.highlight.design': 'design',
      'service.content.highlight.growth': 'growth',
      'service.content.highlight.businesses': 'businesses',
      'service.content.highlight.impact': 'impact',
      
      // Bottom Bar
      'bottom.bar.title': 'Lets work with Us',
      'bottom.bar.description': 'Discover how we turn ideas into impact. From App development to Web Design, SEO, and Digital Marketing, our work speaks for itself. Explore our latest projects on social media and see what sets us apart.',
      'bottom.bar.button': 'Download India in One Book Now!',
      
      // Service Banners
      'service.banner.web.title': 'Web Development',
      'service.banner.web.subtitle': 'We\'re committed to delivering exceptional web solutions that drive results.',
      'service.banner.web.button': 'Let\'s Talk',
      
      'service.banner.app.title': 'App Development',
      'service.banner.app.subtitle': 'We\'re committed to delivering exceptional mobile solutions that drive results.',
      'service.banner.app.button': 'Let\'s Talk',
      
      'service.banner.branding.title': 'Brand Strategy',
      'service.banner.branding.subtitle': 'We\'re committed to delivering exceptional branding solutions that drive results.',
      'service.banner.branding.button': 'Let\'s Talk',
      
      'service.banner.digital.title': 'Digital Marketing',
      'service.banner.digital.subtitle': 'We\'re committed to delivering exceptional digital marketing solutions that drive results.',
      'service.banner.digital.button': 'Let\'s Talk',
      
      'service.banner.social.title': 'Social Media Management',
      'service.banner.social.subtitle': 'We\'re committed to delivering exceptional social media solutions that drive results.',
      'service.banner.social.button': 'Let\'s Talk',
      
      'service.banner.advertising.title': 'Performance Advertising',
      'service.banner.advertising.subtitle': 'We\'re committed to delivering exceptional advertising solutions that drive results.',
      'service.banner.advertising.button': 'Let\'s Talk',
      
      // Work Banner
      'work.banner.title': 'Work that speaks louder than words.',
      'work.banner.countries': 'Countries',
      'work.banner.industries': 'Industries',
      
      // Work Main
      'work.main.categories.website': 'Website Development',
      'work.main.categories.app': 'App Development',
      'work.main.categories.branding': 'Branding',
      'work.main.categories.social': 'Social Media',
      
      // Work Projects - Website Development
      'work.projects.cyberseed.title': 'Cyberseed',
      'work.projects.cyberseed.description': 'Crafted a sleek business consultancy website with seamless UX for Cyberseed\'s digital transformation.',
      'work.projects.scitor.title': 'Scitor Academy',
      'work.projects.scitor.description': 'Built an engaging educational platform powering Scitor Academy\'s digital marketing and tech courses.',
      'work.projects.zayior.title': 'Zayior',
      'work.projects.zayior.description': 'Designed a luxurious resort website with stunning visuals and seamless booking for Zayior\'s retreat experience.',
      'work.projects.teamae.title': 'TeamAE',
      'work.projects.teamae.description': 'Launched a professional business consultancy website showcasing Team AE\'s comprehensive services.',
      'work.projects.galaxy.title': 'Galaxy Paints',
      'work.projects.galaxy.description': 'Engineered a modern e-commerce platform with intuitive shopping for Galaxy Paints\' premium products.',
      'work.projects.aes.title': 'AES School of commerce',
      'work.projects.aes.description': 'Developed an educational website platform for AES School of Commerce to showcase their expertise.',
      'work.projects.aesschool.title': 'AES School',
      'work.projects.aesschool.description': 'Developed a comprehensive educational website platform for AES School showcasing their academic excellence and programs.',
      'work.projects.gamegate.title': 'Gamegate',
      'work.projects.gamegate.description': 'Built a high-performance esports platform with real-time tournaments and streaming capabilities.',
      'work.projects.genchi.title': 'Genchi Global',
      'work.projects.genchi.description': 'Created a corporate website showcasing Genchi Global\'s diverse projects and global reach.',
      'work.projects.mikara.title': 'Mikara Organics',
      'work.projects.mikara.description': 'Launched an e-commerce platform featuring Mikara Organics\' premium organic products.',
      'work.projects.tenderoutes.title': 'Tenderoutes',
      'work.projects.tenderoutes.description': 'Built a travel agency website with comprehensive booking features for Tenderoutes\' global adventures.',
      'work.projects.algharafa.title': 'Al Gharafa',
      'work.projects.algharafa.description': 'Crafted a professional corporate website reflecting Al Gharafa\'s construction expertise and heritage.',
      'work.projects.aboglumbo.title': 'Abo Glumbo',
      'work.projects.aboglumbo.description': 'Developed a smart home services platform connecting customers with trusted professionals.',
      'work.projects.shetalksweb.title': 'SheTalks Web',
      'work.projects.shetalksweb.description': 'A modern platform for women to connect and inspire.',
      
      // Work Projects - App Development
      'work.projects.handyman.title': 'Handyman',
      'work.projects.handyman.description': 'Developed a comprehensive home services app connecting customers with skilled professionals.',
      'work.projects.mrcars.title': 'Mr Cars',
      'work.projects.mrcars.description': 'Built a car rental platform with advanced booking and fleet management capabilities.',
      'work.projects.saver.title': 'Saver',
      'work.projects.saver.description': 'Created a student-focused savings app promoting financial literacy and smart spending habits.',
      'work.projects.khbrah.title': 'Khbrah App',
      'work.projects.khbrah.description': 'Legal help with expert lawyers, video calls, and docs—fast and easy.',
      'work.projects.khbrahweb.title': 'Khbrah — Advertising Website',
  'work.projects.khbrahweb.description': 'Designed and developed a modern, bilingual advertising platform with engaging visuals and a mobile-first user experience.',
      
      // Work Projects - Branding
      'work.projects.financeva.title': 'Financeva',
      'work.projects.financeva.description': 'Designed a comprehensive brand identity for Financeva\'s financial services platform.',
      'work.projects.shetalks.title': 'SheTalks',
      'work.projects.shetalks.description': 'Empowering women through a bold, modern brand identity for SheTalks.',
      // Manever project
      'work.projects.manever.title': 'Manever',
      'work.projects.manever.description': 'Crafted a unique brand identity blending comfort, style, and family togetherness for Manever.',
      'work.projects.moonwhite.title': 'Moonwhite',
      'work.projects.moonwhite.description': 'Created the Face of Moonwhite, A Bold Identity for Diverse Ventures.',
      'work.projects.teamae.branding.title': 'TeamAE Branding',
      'work.projects.teamae.branding.description': 'Developed a professional brand identity reflecting TeamAE\'s business consultancy expertise.',
      'work.projects.cyberseed.branding.title': 'Cyberseed ',
      'work.projects.cyberseed.branding.description': 'Created a modern brand identity for Cyberseed\'s digital transformation services.',
      'work.projects.matrix.title': 'Matrix Microns',
      'work.projects.matrix.description': 'Designed a corporate brand identity for Matrix Microns\' technology solutions.',
      'work.projects.mpbg.title': 'MPB Group',
      'work.projects.mpbg.description': 'Crafted a professional brand identity for MPB Group\'s diverse business portfolio.',
      
      // Work Projects - Social Media
      'work.projects.babaganoush.title': 'Baba Ganoush',
      'work.projects.babaganoush.description': 'Managed comprehensive social media campaigns for Baba Ganoush\'s culinary brand.',
      'work.projects.chefpillai.title': 'Chef Pillai',
      'work.projects.chefpillai.description': 'Developed engaging social media strategies for Chef Pillai\'s restaurant brand.',
      'work.projects.greensdoor.title': 'Greens Door Organics',
      'work.projects.greensdoor.description': 'Created organic-focused social media content for Greens Door Organics.',
      'work.projects.indoarab.title': 'Indo Arab',
'work.projects.indoarab.description': 'Managed branding presence for Indo Arab\'s cultural exchange platform.',
      'work.projects.urbanbite.title': 'Urban Bite',
      'work.projects.urbanbite.description': 'Developed food-focused social media campaigns for Urban Bite\'s culinary brand.',
      'work.projects.ventes.title': 'Ventes',
      'work.projects.ventes.description': 'Created engaging social media content for Ventes\' retail brand.',
      'work.projects.weonlywheels.title': 'We Only Wheels',
      'work.projects.weonlywheels.description': 'Managed automotive-focused social media for We Only Wheels.',
      'work.projects.aes.digital.title': 'AES School Digital',
      'work.projects.aes.digital.description': 'Developed educational social media strategies for AES School\'s digital presence.',
      'work.projects.dubai.title': 'Dubai Visa Services',
      'work.projects.dubai.description': 'Created travel-focused social media content for Dubai visa services.',
      'work.projects.galaxy.social.title': 'Galaxy Paints Social',
      'work.projects.galaxy.social.description': 'Managed paint industry social media campaigns for Galaxy Paints.',
      
      // Additional missing project translations
      'work.projects.silhouettes.title': 'Silhouettes By Saleena',
      'work.projects.silhouettes.description': 'Crafted a complete brand identity and logo reflecting Silhouettes By Saleena\'s fashion sophistication.',
      'work.projects.biriyani.title': 'The Biriyani & Beyond Co',
      'work.projects.biriyani.description': 'Designed a vibrant brand identity capturing the emotion and tradition of authentic biryani culture.',
      'work.projects.aes.branding.title': 'AES School of Commerce',
      'work.projects.aes.branding.description': 'Designed a visionary brand identity symbolizing AES School of Commerce\'s progress and connectivity.',
      'work.projects.galaxon.title': 'Galaxon Max',
      'work.projects.galaxon.description': 'Developed digital marketing campaigns highlighting Galaxon Max\'s innovative construction solutions.',
  // Usra Project
  'work.projects.usraweb.title': 'Usra: Your Trusted Legal Partner',
  'work.projects.usraweb.description': 'Connect instantly with expert Saudi female lawyers for secure, confidential legal help.',
  'work.projects.usraweb.content': 'USRA: Your Trusted Legal Partner and Connect instantly with expert Saudi female lawyers for secure, confidential legal help.',
  'work.projects.usrapp.title': 'Usra – Legal Empowerment for Women',
  'work.projects.usrapp.description': 'An engaging platform raising awareness of women’s legal rights and connecting them with expert support in Saudi Arabia.',
      
      // Client Reviews
      'reviews.soumya.name': 'Soumya Chandran',
      'reviews.soumya.role': 'Founder of SheTalks',
      'reviews.soumya.text': 'Brandbik built a safe and empowering platform for SheTalks that truly reflects our vision of inspiring and connecting women.',
      'reviews.soumya.longText': 'Brandbik built a safe and empowering platform for SheTalks that truly reflects our vision of inspiring and connecting women. Their attention to detail and understanding of our community\'s needs made all the difference in creating a space where women can freely express themselves and grow together.',
      
      'reviews.ahmad.name': 'Ahmad Al Munif',
      'reviews.ahmad.role': 'CEO, Abu Glumbo',
      'reviews.ahmad.text': 'Brandbik transformed our idea into a smooth, real-time service app with great design and technical skill.',
      'reviews.ahmad.longText': 'Brandbik transformed our idea into a smooth, real-time service app with great design and technical skill. Their team\'s expertise in both frontend and backend development ensured we got a scalable solution that perfectly matches our business requirements and user expectations.',
      
      'reviews.sahal.name': 'Saleena',
      'reviews.sahal.role': 'Founder of Silhouettes by Saleena',
      'reviews.sahal.text': 'Brandbik created a modern, professional website that perfectly matches our brand and business goals.',
      'reviews.sahal.longText': 'Brandbik created a modern, professional website that perfectly matches our brand and business goals. Their strategic approach to design and development helped us establish a strong online presence, resulting in increased engagement and better conversion rates.',
      
      'reviews.majed.name': 'Majed alkuwayki',
      'reviews.majed.role': 'CEO, Khibra App',
      'reviews.majed.text': 'They built a secure and intuitive legal consultation app, showing deep understanding and high-quality execution.',
      'reviews.majed.longText': 'They built a secure and intuitive legal consultation app, showing deep understanding and high-quality execution. The platform\'s robust security features and user-friendly interface have made it easier for our clients to access legal services while maintaining complete confidentiality.',
      
      'reviews.esraa.name': 'Al Esraa School',
      'reviews.esraa.role': 'Saver App',
      'reviews.esraa.text': 'Brandbik delivered a creative savings app that helps students reduce waste and make smarter choices.',
      'reviews.esraa.longText': 'Brandbik delivered a creative savings app that helps students reduce waste and make smarter choices. Their innovative approach to gamification and user engagement has made financial literacy fun and accessible for our students, leading to positive behavioral changes.',

      // Contact Page Translations
      'contact.title': 'Let\'s work together.',
      'contact.subtitle': 'Whether you\'re launching something new or reinventing your brand — we\'d love to hear from you.',
      'contact.form.firstName': 'First Name',
      'contact.form.firstNamePlaceholder': 'First name',
      'contact.form.lastName': 'Last Name',
      'contact.form.lastNamePlaceholder': 'Last name',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'Email address',
      'contact.form.mobile': 'Mobile Number',
      'contact.form.mobilePlaceholder': 'Mobile number',
      'contact.form.message': 'Tell us more',
      'contact.form.messagePlaceholder': 'Your message',
      'contact.form.submit': 'Submit',
      'contact.whatsapp.message': 'New Contact Form Submission:\n\nName: {firstName} {lastName}\nEmail: {email}\nMobile: {mobile}\nMessage: {message}',
      
      // Location Section Translations
      'location.title': 'Our Locations',
      'location.india.name': 'India',
      'location.india.address': 'Brandbik LLP, Rajiv Gandhi Bypass, Manjeri, Kerala 676121',
      'location.saudi.name': 'Saudi Arabia',
      'location.saudi.address': ' Building No. 6143, 1 King Abdulaziz Rd, Al Aarid, Riyadh 13342, Saudi Arabia',
      'location.uk.name': 'UK',
      'location.uk.address': 'Coventry, West Midlands County, England, United Kingdom (UK)\n+44 7384021507',
      'location.map.attribution': 'Map data ©2023 Google',
      
     // Our Team Members
'team.member.1.name': 'Fadhil Muhammed',
'team.member.1.role': 'Chief Brand Strategist',

'team.member.2.name': 'Althaf Shareef',
'team.member.2.role': 'AI & Technology Innovation Lead',

'team.member.3.name': 'Muhammed Saleel',
'team.member.3.role': 'Lead Full-Stack Developer',

'team.member.4.name': 'Basil Saman',
'team.member.4.role': 'Frontend Developer',

'team.member.5.name': 'Nasih Ameen',
'team.member.5.role': 'Flutter Developer',

'team.member.6.name': 'Adnan Yousuf',
'team.member.6.role': 'Mobile App Developer (Flutter)',

'team.member.7.name': 'Muhammed Rafih',
'team.member.7.role': ' Arabic Content Creator',

'team.member.8.name': 'Amna Abdullah',
'team.member.8.role': 'Backend Developer & Support Lead',

'team.member.9.name': 'Shamna Sheri',
'team.member.9.role': 'Marketing Coordinator & HR Lead',

'team.member.10.name': 'Shaheed AK',
'team.member.10.role': 'Financial Consultant',

'team.member.11.name': 'Sahal Muhammed',
'team.member.11.role': 'Management Consultant',

'team.member.12.name': 'Fawazs Ahammed',
'team.member.12.role': 'Chattered Accountant',

'team.member.13.name': 'Khadeeja Haneen',
'team.member.13.role': 'Brand Research Analyst',

'team.member.14.name': 'Javid Khan',
'team.member.14.role': 'Search Engine Marketing Executive',

'team.member.15.name': 'Minha Sherin',
'team.member.15.role': 'Content Strategist & Scriptwriter',

'team.member.16.name': 'Shafeer',
'team.member.16.role': 'Business Strategist & Consultant',

      // Privacy Policy Section
      'privacy.title': 'Privacy Policy',
      'privacy.intro.title': 'Introduction',
      'privacy.intro.body': 'Brandbik is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
      'privacy.collect.title': 'Information We Collect',
      'privacy.collect.1': 'Personal Information: such as your name, email address, phone number, and any other information you provide via our contact forms or communications.',
      'privacy.collect.2': 'Usage Data: including your IP address, browser type, device information, pages visited, and time spent on our site.',
      'privacy.collect.3': 'Cookies & Tracking: we use cookies and similar technologies to enhance your experience and analyze site usage.',
      'privacy.use.title': 'How We Use Your Information',
      'privacy.use.1': 'To provide, operate, and maintain our website and services.',
      'privacy.use.2': 'To respond to your inquiries and provide customer support.',
      'privacy.use.3': 'To improve our website, services, and user experience.',
      'privacy.use.4': 'To send you updates, marketing, or promotional materials (you may opt out at any time).',
      'privacy.use.5': 'To comply with legal obligations and protect our rights.',
      'privacy.share.title': 'Information Sharing & Disclosure',
      'privacy.share.1': 'We do not sell or rent your personal information to third parties.',
      'privacy.share.2': 'We may share information with trusted service providers who assist us in operating our website and services, subject to confidentiality agreements.',
      'privacy.share.3': 'We may disclose information if required by law or to protect our rights and safety.',
      'privacy.security.title': 'Data Security',
      'privacy.security.body': 'We implement reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.',
      'privacy.rights.title': 'Your Rights & Choices',
      'privacy.rights.1': 'You may request access, correction, or deletion of your personal information.',
      'privacy.rights.2': 'You may opt out of receiving marketing communications from us at any time.',
      'privacy.rights.3': 'For any privacy-related requests, please contact us at',
      'privacy.children.title': "Children's Privacy",
      'privacy.children.body': 'Our website and services are not directed to children under 13. We do not knowingly collect personal information from children.',
      'privacy.changes.title': 'Changes to This Policy',
      'privacy.changes.body': 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.',
      'privacy.contact.title': 'Contact Us',
      'privacy.contact.body': 'If you have any questions or concerns about this Privacy Policy, please contact us at',
      // Terms of Service Section
      'terms.title': 'Terms of Service',
      'terms.intro.title': 'Introduction',
      'terms.intro.body': 'By accessing or using the Brandbik website and services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.',
      'terms.accept.title': 'Acceptance of Terms',
      'terms.accept.body': 'Your use of our website and services constitutes your acceptance of these terms. If you do not agree, please do not use our services.',
      'terms.use.title': 'Use of Services',
      'terms.use.1': 'You agree to use our website and services only for lawful purposes and in accordance with these terms.',
      'terms.use.2': 'You must not use our services to engage in any activity that is unlawful, harmful, or infringes on the rights of others.',
      'terms.ip.title': 'Intellectual Property',
      'terms.ip.body': 'All content, trademarks, and intellectual property on this site are owned by Brandbik or its licensors. You may not use, reproduce, or distribute any content without our written permission.',
      'terms.user.title': 'User Responsibilities',
      'terms.user.1': 'You are responsible for maintaining the confidentiality of your account information.',
      'terms.user.2': 'You agree to provide accurate and complete information when using our services.',
      'terms.liability.title': 'Limitation of Liability',
      'terms.liability.body': 'Brandbik is not liable for any damages arising from your use of our website or services. Our services are provided "as is" without warranties of any kind.',
      'terms.changes.title': 'Changes to Terms',
      'terms.changes.body': 'We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date.',
      'terms.contact.title': 'Contact Us',
      'terms.contact.body': 'If you have any questions about these Terms of Service, please contact us at',
  'terms.refund.title': 'No Refund Policy',
  'terms.refund.body': 'All payments made for our services/products are final and non-refundable. By completing your purchase, you acknowledge and agree that you are not entitled to claim any refund, cancellation, or chargeback for any reason whatsoever, including but not limited to dissatisfaction with the service, change of mind, or non-usage of the service/product.',
    },
    ar: {
    // Rafih Banner Section (Arabic)
    'rafih.banner.subheading': 'الهند بعيون هندي',
    'rafih.banner.heading': "<span class='text-gray-500'>الدليل العربي الشامل</span> إلى قلب وتراث الهند",
    'rafih.banner.description': "اكتشف \"الهند في كتاب واحد – بعيني\": الدليل الرقمي الوحيد الذي يكشف لك تاريخ الهند، ثقافتها، طعامها، الصحة، أسرار السفر والمزيد — كل ذلك باللغة العربية، بقلم هندي يعرف ما تحتاج معرفته.<br /><br />سواء كنت تخطط لمغامرة عائلية، أو تبحث عن رعاية طبية، أو مطاعم حلال، أو تحلم بجمال كيرالا، هذا الكتاب يجيب عن أسئلتك الحقيقية بنصائح عملية، وقصص شخصية، وخرائط وقوائم حصرية.<br /><br />ابدأ رحلتك الهندية بثقة ووضوح ومعرفة من الداخل—مصمم خصيصًا للمسافرين العرب، بقلم محمد رفيع.",
  // Packages Section (Arabic)
   'packages.heading1': 'الهند',
'packages.heading2': 'بين يديك',
  'packages.intro': '"الهند في كتاب واحد – بعيني" يجلب لك كل الهند — بالعربية، بقلم هندي يعرف ما تحتاج معرفته. سواء كنت تبحث عن الثقافة، المساعدة الطبية، الطعام الحلال، أو المغامرة الأصيلة، باقاتنا الرقمية وأدلتنا تفتح الهند لك ولعائلتك.',
  'packages.button': 'حمّل دليلك الآن',
  'packages.item1.title': 'الهند للمسافرين العرب',
  'packages.item1.desc': 'اكتشف تاريخ الهند العريق من الحضارات القديمة إلى المعالم الحديثة، مصمم خصيصًا للمسافرين العرب.',
  'packages.item2.title': 'دليل كيرالا السريع',
  'packages.item2.desc': 'قصص حقيقية ورحلات شخصية: تعرف على الهند بعيون السكان المحليين والزوار العرب.',
  'packages.item3.title': 'العافية والسياحة العلاجية',
  'packages.item3.desc': 'انغمس في ثقافة الهند النابضة — التقاليد والمهرجانات والحياة اليومية مشروحة بالعربية.',
  'packages.item4.title': 'دليل الطعام الحلال والمطاعم',
  'packages.item4.desc': 'دليلك العملي للسفر: نصائح مهمة، أماكن لا تُفوّت، وإرشادات من الداخل لرحلة سلسة.',
  'packages.item5.title': 'المهرجانات الهندية ومرح العائلة',
  'packages.item5.desc': 'الأعمال في الهند: الفرص، آداب التعامل، وكيفية النجاح كرائد أعمال أو مستثمر عربي.',
  'packages.item6.title': 'إضافات التخطيط العملي',
  'packages.item6.desc': 'السياحة العلاجية والصحة: مستشفيات موثوقة، الأيورفيدا، ونصائح صحية للعائلات العربية في الهند.',
      // Location Section (Cards & Headings)
      'location.card1.heading': 'اكتشف التراث الهندي الخفي',
      'location.card1.desc': 'اكتشف القصص والتاريخ الإسلامي وأماكن لا يعرفها إلا السكان المحليون.',
      'location.card2.heading': 'كيرالا: حيث تلتقي الهند بالعالم العربي',
      'location.card2.desc': 'عِش الثقافة والطبيعة والروابط العميقة مع العالم العربي.',
      'location.card3.heading': 'خطط بذكاء – وسافر بعيدًا',
      'location.card3.desc': 'احصل على نصائح من الداخل حول الطعام والعيادات والصحة ورحلات آمنة.',
      'location.card4.heading': 'اصنع ذكريات في كل فصل',
      'location.card4.desc': 'من التقاليد المقدسة إلى بوليوود، عِش كل شيء — الدهشة، الفرح، والتعلم.',
      'location.sectionHeading.0': 'الهند',
      'location.sectionHeading.1': 'بعيني:',
      'location.sectionHeading.2': 'الثقافة،',
      'location.sectionHeading.3': 'الأسرار،',
      'location.sectionHeading.4': 'الإلهام',
      // AboutMe Section (Arabic)
      'aboutMe.heading.ar': 'من أنا',
'aboutMe.label.ar': 'الهند في كتاب واحد – بعيني',
'aboutMe.para1.ar': `السلام عليكم ورحمة الله وبركاته،\n\nأنا محمد رافع، أول صانع محتوى هندي بالعربية وابن فخور من كيرالا. منذ سنوات كرّست جهدي لبناء جسر بين الهند والعالم العربي، عبر مشاركة القصص والتقاليد والواقع اليومي لهذا البلد المدهش – وكل ذلك بلغة أحببتها: العربية.\n\nبدأت رحلتي من قلب كيرالا، بين ثقافة عريقة وجمال طبيعي لا ينتهي. واستلهمت من الروابط التاريخية العميقة بين الهند والخليج، فجعلت مهمتي الإجابة عن الأسئلة الحقيقية التي يطرحها إخوتي العرب: كيف هي الهند فعلًا؟ ماذا نأكل؟ أين نسافر؟ كيف نجد الشفاء؟ وكيف نبدأ أعمالنا؟\n\nكل رسالة وكل تعليق من جمهوري كان مصدر إلهام لي. ومن هنا وضعت قلبي في مشروع "الهند في كتاب واحد – بعيني": مرجع رقمي شامل يتجاوز السفر ليجيب عن أسئلتكم حول التاريخ، الطعام، الصحة، السياحة العلاجية، الرحلات العائلية، الأعمال، وأسرار موطني كيرالا.`,
'aboutMe.para2.ar': `وبحكم أنني عشت وتعلمت ونشأت بين الهند والخليج، فأنا أعرف تمامًا آمال ومخاوف المسافرين العرب: الطعام الحلال، التجارب الأصيلة، المستشفيات الموثوقة، النصائح الصادقة، وحاجز اللغة. لذلك يغطي كتابي كل ذلك بوضوح، مع قوائم عملية، وأدلة فيديو، ونصائح عائلية.\n\nرؤيتي بسيطة: أن أجعل الهند مرحبة وآمنة ولا تُنسى لكل مسافر وعائلة عربية.`,
'aboutMe.para3.ar': `أدعوك للانضمام إلي في هذه الرحلة، لترى الهند بعيني، وتحول رحلتك الحلم إلى حقيقة. سواء أردت الاسترخاء في مياه كيرالا، أو البحث عن الشفاء في أفضل المستشفيات، أو تجربة توابل جديدة في دلهي، أو ببساطة فهم المهرجانات والحياة العائلية الهندية – ستجد كل ذلك هنا، بمحبة ووضوح.\n\nالهند في كتاب واحد – جسرُك إلى الهند الحقيقية، مكتوب للعرب، بقلم هندي يهتم.\n\nمعكم محمد رفيع – الهند كما لم ترها من قبل`,

      'hero.title.part1': 'نحن نبني',
      'hero.title.part2': 'علامات تجارية جريئة',
      'hero.title.part3': 'و',
      'hero.title.part4': 'تجارب رقمية',
      'hero.subtitle': 'استراتيجية، هوية، وتصميم — متطور.',
      'hero.letsTalk': 'تحدث معنا',
      
  // Rafih SectionTwo (Arabic)
  'rafih.sectionTwo.heading': 'اكتشف كل جوانب الهند — التاريخ، الطعام، الشفاء، كيرالا والمزيد — في كتاب رقمي عربي واحد بقلم محمد رفيع.',
  'rafih.sectionTwo.button': 'حمّل كتاب الهند في كتاب واحد الآن!',
  'rafih.sectionTwo.howTo': 'كيفية تحميل الكتاب الإلكتروني العربي',
  'rafih.sectionTwo.step1': 'اضغط زر التحميل بالأسفل لبدء الطلب.',
  'rafih.sectionTwo.step2': 'أكمل نموذج الدفع الآمن وأدخل بياناتك.',
  'rafih.sectionTwo.step3': 'بعد الدفع، ستحصل فوراً على دليلك العربي كملف رقمي.',
  'rafih.sectionTwo.stepTitle1': 'ابدأ طلبك',
  'rafih.sectionTwo.stepTitle2': 'دفع آمن',
  'rafih.sectionTwo.stepTitle3': 'استلم دليلك فوراً',

  // About Section
      'about.title': 'نحن نبني علامات تجارية تتحرك بهدف',
      'about.subtitle': 'براندبيك هي وكالة إبداعية تصنع العلامات التجارية الحديثة والتجارب الرقمية واستراتيجيات النمو للطموحين.',
      'about.description': 'من الشركات الناشئة إلى الشركات العالمية، نصمم قصصًا تتصل وتدوم.',
      'about.button': 'من نحن',
      'about.stats.projects': 'العلامات التجارية',
      'about.stats.countries': 'الدول',
      'about.stats.clients': 'القطاعات',
      
      // Services Section
      'services.title': 'خدماتنا',
      'services.subtitle': 'نقدم حلولاً شاملة لمساعدة علامتك التجارية على الازدهار في العصر الرقمي.',
      'services.web.title': 'تطوير المواقع',
      'services.web.description': 'تصاميم مواقع فريدة وعالية الأداء مناسبة لجذب عملائك.',
      'services.app.title': 'تطوير التطبيقات',
      'services.app.description': 'تطبيقات جوال عالية الجودة مع واجهة مستخدم لتحويل الأفكار إلى أعمال.',
      'services.branding.title': 'العلامة التجارية',
      'services.branding.description': 'نحن نجعل علامتك التجارية تبرز في العالم الرقمي.',
      'services.digital.title': 'التسويق الرقمي',
      'services.digital.description': 'حلول متميزة لتعزيز وجودك في العالم الحديث.',
      'services.social.title': 'وسائل التواصل الاجتماعي',
      'services.social.description': 'تعظيم وصولك من خلال حملاتنا الإعلانية المتخصصة وتوليد العملاء المحتملين.',
      'services.advertising.title': 'الإعلان',
      'services.advertising.description': 'تعظيم وصولك من خلال حملات إعلانية مستهدفة.',
      
      // Works Section
      'works.title': 'أعمالنا',
      'works.subtitle': 'اكتشف أحدث مشاريعنا وحلولنا الإبداعية.',
      'works.categories.website': 'تطوير المواقع',
      'works.categories.app': 'تطوير التطبيقات',
      'works.categories.branding': 'العلامة التجارية',
      'works.categories.social': 'وسائل التواصل الاجتماعي',
      'works.categories.all': 'الكل',
      
      // Works Section Project 3
      'worksSection.project3.title': 'هندسة وإطلاق منصات ويب متكاملة قوية',
      'worksSection.project3.category': 'تطوير الويب المتكامل',
      
      // Clients Section
      'clients.title': 'العملاء',
      'clients.subtitle': 'نحن نتعاون مع العلامات التجارية عبر الصناعات — من الشركات الناشئة إلى القادة العالميين — لتصميم تجارب تتردد صدى وتدوم.',
      'clients.viewAll': 'عرض جميع الأعمال',
      
      // Process Section
      'process.title': 'عملنا',
      'process.step1.title': 'اكتشاف',
      'process.step1.description': 'نبدأ بأبحاث عميقة لفهم جمهورك ومنافسيك وأهدافك.',
      'process.step2.title': 'تصميم',
      'process.step2.description': 'نحن نصمم أنظمة — وليس مجرد شعارات — تتوسع عبر جميع نقاط الاتصال.',
      'process.step3.title': 'تسليم',
      'process.step3.description': 'كل الملفات والأصول والأدلة التي تحتاجها. جاهز للإطلاق والنمو.',
      
      // Results Section
      'results.title': 'النتيجة',
      'results.description': 'هوية متماسكة ومتطورة ساعدت في زيادة تذكر العلامة التجارية. شهد الموقع الجديد زيادة بنسبة 28٪ في التحويل خلال الربع الأول بعد الإطلاق.',
      'results.contact': 'اتصل بنا',
      
      // Header Navigation
      'header.about': 'من نحن',
      'header.services': 'خدماتنا',
      'header.works': 'أعمالنا',
      'header.career': 'وظائف',
      'header.contact': 'اتصل بنا',
      'header.getStarted': 'ابدأ الآن',
      'header.connectUs': 'تواصل معنا',
      
      // GetStartedPanel Navigation
      'panel.impact': 'التأثير',
      'panel.testimonials': 'آراء العملاء',
      'panel.clients': 'العملاء',
      'panel.partnership': 'الشراكة',
      'panel.insights': 'الرؤى',
      'panel.getInTouch': 'تواصل معنا',
      
      // GetStartedPanel Section Content (Arabic)
      'panel.impact.title': 'تحويل المشهد الرقمي',
      'panel.impact.desc': 'في براندبيك، نحن لا نبني حلولاً رقمية فقط – بل نصنع تجارب تدفع نمو الأعمال الحقيقي. يجمع نهجنا بين التميز التقني والابتكار الإبداعي لتقديم نتائج ملموسة.',
      'panel.impact.feature1.title': 'ابتكار استراتيجي',
      'panel.impact.feature1.desc': 'نمزج بين أحدث التقنيات والتفكير الاستراتيجي لنبتكر حلولاً تمنح عملك ميزة تنافسية.',
      'panel.impact.feature2.title': 'تميز مثبت',
      'panel.impact.feature2.desc': 'سجلنا الحافل بالمشاريع الناجحة يبرهن التزامنا بتقديم نتائج استثنائية.',
      'panel.impact.feature3.title': 'نهج يركز على العميل',
      'panel.impact.feature3.desc': 'نضع أهداف عملك في صميم كل ما نقوم به، لضمان حلول تخدم احتياجاتك فعلاً.',
      'panel.impact.cta': 'اكتشف تأثيرنا',

      'panel.testimonials.title': 'قصص نجاح العملاء',
      'panel.testimonials.desc': 'نجاح عملائنا هو أعظم إنجاز لنا. كل مشروع يمثل رحلة فريدة من التحول والنمو.',
      'panel.testimonials.feature1.title': 'تحول المؤسسات',
      'panel.testimonials.feature1.desc': 'تثق بنا المؤسسات العالمية الرائدة لتقديم حلول مبتكرة تدفع تطورها الرقمي.',
      'panel.testimonials.feature2.title': 'نجاح الشركات الناشئة',
      'panel.testimonials.feature2.desc': 'ساعدنا العديد من الشركات الناشئة على تأسيس حضورها الرقمي وتوسيع عملياتها بفعالية.',
      'panel.testimonials.feature3.title': 'الاعتراف الصناعي',
      'panel.testimonials.feature3.desc': 'يحظى عملنا دائماً بالاعتراف لتميزه في الابتكار الرقمي ورضا العملاء.',
      'panel.testimonials.cta': 'اقرأ قصص النجاح',

      'panel.clients.title': 'الانتشار العالمي',
      'panel.clients.desc': 'يمتد تأثيرنا عبر الحدود، نخدم العملاء حول العالم بحلول رقمية مبتكرة تتجاوز الحواجز الجغرافية.',
      'panel.clients.feature1.title': 'حضور دولي',
      'panel.clients.feature1.desc': 'نخدم عملاء في قارات متعددة، ونقدم أفضل الممارسات العالمية في كل مشروع.',
      'panel.clients.feature2.title': 'تنوع صناعي',
      'panel.clients.feature2.desc': 'يمتد تخصصنا عبر قطاعات متنوعة من التكنولوجيا إلى الصحة والمالية والتجزئة.',
      'panel.clients.feature3.title': 'فهم ثقافي',
      'panel.clients.feature3.desc': 'نكيّف حلولنا لتعزيز واحترام الممارسات التجارية والسياقات الثقافية المحلية.',
      'panel.clients.cta': 'تعرف على عملائنا',

      'panel.partnership.title': 'الابتكار من خلال الشراكة',
      'panel.partnership.desc': 'نؤمن بقوة التعاون. تمكننا شراكاتنا الاستراتيجية من تقديم حلول شاملة تدفع الابتكار.',
      'panel.partnership.feature1.title': 'شركاء التكنولوجيا',
      'panel.partnership.feature1.desc': 'نتعاون مع مزودي التكنولوجيا الرائدين لتقديم حلول متطورة.',
      'panel.partnership.feature2.title': 'خبراء الصناعة',
      'panel.partnership.feature2.desc': 'شبكتنا من المتخصصين تضمن مواكبتنا لأحدث الاتجاهات والتقنيات.',
      'panel.partnership.feature3.title': 'تعاونات بحثية',
      'panel.partnership.feature3.desc': 'نتعاون مع مؤسسات بحثية لتطوير حلول مبتكرة لتحديات الغد.',
      'panel.partnership.cta': 'شاركنا الشراكة',

      'panel.insights.title': 'رؤى رقمية',
      'panel.insights.desc': 'ابق في المقدمة مع رؤانا الخبيرة واتجاهات الصناعة والقيادة الفكرية في التحول الرقمي.',
      'panel.insights.feature1.title': 'تحليل الصناعة',
      'panel.insights.feature1.desc': 'تحليلات معمقة للاتجاهات الناشئة وتأثيرها على تحول الأعمال.',
      'panel.insights.feature2.title': 'وجهات نظر الخبراء',
      'panel.insights.feature2.desc': 'رؤى من فريقنا حول مستقبل الابتكار الرقمي.',
      'panel.insights.feature3.title': 'استراتيجيات النجاح',
      'panel.insights.feature3.desc': 'إرشادات عملية لتنفيذ مبادرات التحول الرقمي الناجحة.',
      'panel.insights.cta': 'استكشف الرؤى',

      'panel.contact.title': 'لنبدع معاً',
      'panel.contact.desc': 'جاهز لتحويل حضورك الرقمي؟ فريق خبرائنا هنا لمساعدتك في تحقيق أهداف عملك من خلال حلول مبتكرة.',
      'panel.contact.feature1.title': 'دعم مخصص',
      'panel.contact.feature1.desc': 'فريقنا متاح لمساعدتك في كل خطوة من رحلتك الرقمية.',
      'panel.contact.feature2.title': 'استجابة سريعة',
      'panel.contact.feature2.desc': 'نولي احتياجاتك الأولوية ونضمن التواصل السريع طوال فترة التعاون.',
      'panel.contact.feature3.title': 'حلول مخصصة',
      'panel.contact.feature3.desc': 'كل مشروع فريد، ونخصص نهجنا ليتناسب مع متطلباتك الخاصة.',
      'panel.contact.cta': 'تواصل معنا',
      
      // Footer Navigation
      'footer.tagline': ' نقدّم التميز والابتكار التكنولوجي للأعمال حول العالم — مع تواجد في الهند والمملكة العربية السعودية والمملكة المتحدة' ,
      'footer.pages': 'الصفحات',
      'footer.brandbik' : 'براندبيك LLP',
      'footer.home': 'الرئيسية',
      'footer.aboutUs': 'من نحن',
      'footer.services': 'خدماتنا',
      'footer.works': 'أعمالنا',
      'footer.contactUs': 'اتصل بنا',
      'footer.contactInfo': 'معلومات الاتصال',
      'footer.copyright': '© {year} براندبيك. جميع الحقوق محفوظة.',
      'footer.privacyPolicy': 'سياسة الخصوصية',
      'footer.termsOfService': 'شروط الخدمة',
      'footer.cookiePolicy': 'سياسة ملفات تعريف الارتباط',
      
      // Team Description
      'team.contactUs': 'اتصل بنا',
      
      // About Banner
      'about.banner.badge': 'من نحن',
      'about.banner.title': 'نحن نبني علامات تجارية تتحرك بهدف.',
      'about.banner.subtitle1': 'تتخصص براندبيك في بناء العلامات التجارية المؤثرة والتجارب الرقمية المبتكرة وحلول النمو الاستراتيجية للشركات المتقدمة.',
      'about.banner.subtitle2': 'سواء كنت شركة ناشئة ناشئة أو مؤسسة عالمية راسخة، نصمم قصصًا مقنعة وروابط دائمة تدفع النجاح.',
      'about.banner.gallery.title': 'فريقنا في العمل',
      
      // Team Description
      'team.description.text': 'نحن فريق متعدد التخصصات من الاستراتيجيين والمصممين والمطورين ورواة القصص. ما يجمعنا هو إيمان مشترك',
      
      // About Boxes
      'about.boxes.brands': 'العلامات التجارية التي نعمل معها',
      'about.boxes.projects': 'المشاريع المكتملة',
      'about.boxes.countries': 'البلدان التي نعمل معها',
      'about.boxes.scaled': 'القطاعات التي قمنا بتمكينها',
      'about.boxes.revenue': 'الإيرادات المحققة',
      'about.boxes.clients': 'العملاء السعداء',
      
      // Approach Section
      'approach.badge': 'النهج',
      'approach.title': 'ما يميزنا',
      'approach.innovation': 'الابتكار',
      'approach.quality': 'التركيز على الجودة',
      'approach.results': 'التركيز على النتائج',
      'approach.skilled': 'فريق ماهر',
      'approach.customer': 'التركيز على العملاء',
      'approach.agile': 'عملية رشيقة',
      'approach.transparent': 'تواصل شفاف',
      'approach.timely': 'تسليم في الوقت المحدد',
      'approach.technology': 'تقنية متطورة',
      'approach.data': 'قرارات مدعومة بالبيانات',
      'approach.security': 'نهج الأمان أولاً',
      'approach.sustainability': 'الاستدامة',
      
      // Our Team Section
      'team.badge': 'من نحن',
      'team.title': 'فريقنا الأساسي',
      
      // Client Reviews
      'reviews.badge': 'آراء العملاء',
      'reviews.cta.title': 'دعنا نعمل معاً',
      'reviews.cta.description': 'اكتشف كيف نحول الأفكار إلى تأثير. من تطوير التطبيقات إلى تصميم المواقع وتحسين محركات البحث والتسويق الرقمي، عملنا يتحدث عن نفسه. استكشف أحدث مشاريعنا على وسائل التواصل الاجتماعي وانظر ما يميزنا.',
      'reviews.cta.button': 'تواصل معنا',
      
      // Services in Reviews
      'reviews.services.branding': 'العلامة التجارية',
      'reviews.services.app': 'تطوير التطبيقات',
      'reviews.services.social': 'وسائل التواصل الاجتماعي',
      'reviews.services.website': 'تصميم المواقع',
      'reviews.services.uxui': 'تصميم تجربة المستخدم',
      'reviews.services.marketing': 'التسويق الرقمي',
      
      // Service Main Banner
      'service.main.title': 'تمكين العلامات التجارية بحلول الجيل القادم',
      'service.main.subtitle': 'اكتشف مجموعة كاملة من الخدمات المصممة لرفع مستوى علامتك التجارية ودفع النمو وإنشاء تأثير دائم في العصر الرقمي.',
      'service.main.button': 'ابدأ مشروعك',
      
      // Service Content
      'service.content.text': 'من الاستراتيجية إلى التنفيذ — نساعد الشركات على النمو من خلال الوضوح والإبداع والتصميم.',
      'service.content.highlight.strategy': 'استراتيجية',
      'service.content.highlight.execution': 'تنفيذ',
      'service.content.highlight.clarity': 'وضوح',
      'service.content.highlight.creativity': 'إبداع',
      'service.content.highlight.design': 'تصميم',
      'service.content.highlight.growth': 'نمو',
      'service.content.highlight.businesses': 'شركات',
      'service.content.highlight.impact': 'تأثير',
      
      // Bottom Bar
      'bottom.bar.title': 'دعنا نعمل معاً',
      'bottom.bar.description': 'اكتشف كيف نحول الأفكار إلى تأثير. من تطوير التطبيقات إلى تصميم المواقع وتحسين محركات البحث والتسويق الرقمي، عملنا يتحدث عن نفسه. استكشف أحدث مشاريعنا على وسائل التواصل الاجتماعي وانظر ما يميزنا.',
      'bottom.bar.button': 'حمّل الهند في كتاب واحد الآن!',
      
      // Service Banners
      'service.banner.web.title': 'تطوير المواقع',
      'service.banner.web.subtitle': 'نحن ملتزمون بتقديم حلول ويب استثنائية تحقق النتائج.',
      'service.banner.web.button': 'تحدث معنا',
      
      'service.banner.app.title': 'تطوير التطبيقات',
      'service.banner.app.subtitle': 'نحن ملتزمون بتقديم حلول جوال استثنائية تحقق النتائج.',
      'service.banner.app.button': 'تحدث معنا',
      
      'service.banner.branding.title': 'استراتيجية العلامة التجارية',
      'service.banner.branding.subtitle': 'نحن ملتزمون بتقديم حلول علامة تجارية استثنائية تحقق النتائج.',
      'service.banner.branding.button': 'تحدث معنا',
      
      'service.banner.digital.title': 'التسويق الرقمي',
      'service.banner.digital.subtitle': 'نحن ملتزمون بتقديم حلول تسويق رقمي استثنائية تحقق النتائج.',
      'service.banner.digital.button': 'تحدث معنا',
      
      'service.banner.social.title': 'إدارة وسائل التواصل الاجتماعي',
      'service.banner.social.subtitle': 'نحن ملتزمون بتقديم حلول وسائل التواصل الاجتماعي الاستثنائية التي تحقق النتائج.',
      'service.banner.social.button': 'تحدث معنا',
      
      'service.banner.advertising.title': 'الإعلان الأدائي',
      'service.banner.advertising.subtitle': 'نحن ملتزمون بتقديم حلول إعلانية استثنائية تحقق النتائج.',
      'service.banner.advertising.button': 'تحدث معنا',
      
      // Work Banner
      'work.banner.title': 'عمل يتحدث بصوت أعلى من الكلمات.',
      'work.banner.countries': 'الدول',
      'work.banner.industries': ' الصناعات',
      
      // Work Main
      'work.main.categories.website': 'تطوير المواقع',
      'work.main.categories.app': 'تطوير التطبيقات',
      'work.main.categories.branding': 'العلامة التجارية',
      'work.main.categories.social': 'وسائل التواصل الاجتماعي',
      
      // Work Projects - Website Development
      'work.projects.cyberseed.title': 'سايبرسيد',
      'work.projects.cyberseed.description': 'صممنا موقع استشارات أعمال أنيق مع تجربة مستخدم سلسة لتحول سايبرسيد الرقمي.',
      'work.projects.scitor.title': 'أكاديمية سيتور',
      'work.projects.scitor.description': 'بنينا منصة تعليمية جذابة تدعم دورات التسويق الرقمي والتكنولوجيا في أكاديمية سيتور.',
      'work.projects.zayior.title': 'زايور',
      'work.projects.zayior.description': 'صممنا موقع منتجع فاخر مع صور مذهلة وحجز سلس لتجربة زايور الاستجمامية.',
      'work.projects.teamae.title': 'فريق إي إي',
      'work.projects.teamae.description': 'أطلقنا موقع استشارات أعمال احترافي يعرض خدمات فريق إي إي الشاملة.',
      'work.projects.galaxy.title': 'جالاكسي بينتس',
      'work.projects.galaxy.description': 'صممنا منصة تجارة إلكترونية حديثة مع تسوق بديهي لمنتجات جالاكسي بينتس المميزة.',
      'work.projects.aes.title': 'مدرسة إي إي إس التجارية',
      'work.projects.aes.description': 'طورنا منصة موقع تعليمي لمدرسة إي إي إس التجارية لعرض خبراتهم.',
      'work.projects.aesschool.title': 'مدرسة إي إي إس',
      'work.projects.aesschool.description': 'طورنا منصة موقع تعليمي شاملة لمدرسة إي إي إس لعرض التميز الأكاديمي وبرامجهم.',
      'work.projects.gamegate.title': 'جيم جيت',
      'work.projects.gamegate.description': 'بنينا منصة رياضات إلكترونية عالية الأداء مع بطولات فورية وقدرات بث.',
      'work.projects.genchi.title': 'جنشي جلوبال',
      'work.projects.genchi.description': 'أنشأنا موقع شركة يعرض مشاريع جنشي جلوبال المتنوعة والوصول العالمي.',
      'work.projects.mikara.title': 'ميكارا أورجانيكس',
      'work.projects.mikara.description': 'أطلقنا منصة تجارة إلكترونية تعرض منتجات ميكارا أورجانيكس العضوية المميزة.',
      'work.projects.tenderoutes.title': 'تيندر روتس',
      'work.projects.tenderoutes.description': 'بنينا موقع وكالة سفر مع ميزات حجز شاملة لمغامرات تيندر روتس العالمية.',
      'work.projects.algharafa.title': 'الغرفة',
      'work.projects.algharafa.description': 'صممنا موقع شركة احترافي يعكس خبرة الغرفة في البناء والتراث.',
      'work.projects.aboglumbo.title': 'أبو جلومبو',
      'work.projects.aboglumbo.description': 'طورنا منصة خدمات منزل ذكية تربط العملاء بالمحترفين الموثوقين.',
      'work.projects.shetalksweb.title': 'شي توكس ويب',
      'work.projects.shetalksweb.description': 'منصة حديثة لتمكين النساء والإلهام.',
      
      // Work Projects - App Development
      'work.projects.handyman.title': 'هاندي مان',
      'work.projects.handyman.description': 'طورنا تطبيق خدمات منزل شامل يربط العملاء بالمحترفين المهرة.',
      'work.projects.mrcars.title': 'مستر كارز',
      'work.projects.mrcars.description': 'بنينا منصة تأجير سيارات مع ميزات حجز متقدمة وإدارة أسطول.',
      'work.projects.saver.title': 'سيفر',
      'work.projects.saver.description': 'أنشأنا تطبيق توفير يركز على الطلاب ويعزز الثقافة المالية والعادات الذكية للإنفاق.',
      'work.projects.khbrah.title': 'خبرة',
      'work.projects.khbrah.description': 'مساعدة قانونية مع خبراء محامين، مكالمات فيديو، ومستندات — بسرعة وسهولة.',
        'work.projects.khbrahweb.title': 'خبرة — موقع إعلانات',
  'work.projects.khbrahweb.description': 'صممنا وطورنا منصة إعلانات حديثة ثنائية اللغة مع صور جذابة وتجربة مستخدم تركز على الجوال.',
      
      
      // Work Projects - Branding
      'work.projects.financeva.title': 'فاينانسفا',
      'work.projects.financeva.description': 'صممنا هوية علامة تجارية شاملة لمنصة فاينانسفا للخدمات المالية.',
      'work.projects.shetalks.title': 'شي توكس',
      'work.projects.shetalks.description': 'إبراز تمكين المرأة من خلال هوية علامة تجارية جريئة وعصرية لـ SheTalks.',
      // Manever project
      'work.projects.manever.title': 'Manever',
      'work.projects.manever.description': 'Crafted a unique brand identity blending comfort, style, and family togetherness for Manever.',
      'work.projects.moonwhite.title': 'مونوايت',
      'work.projects.moonwhite.description': 'أنشأنا هوية جريئة لمونوايت، وجه جديد لمجموعة متنوعة من المشاريع.',
      'work.projects.teamae.branding.title': 'هوية فريق إي إي',
      'work.projects.teamae.branding.description': 'طورنا هوية علامة تجارية احترافية تعكس خبرة فريق إي إي في استشارات الأعمال.',
      'work.projects.cyberseed.branding.title': 'هوية سايبرسيد',
      'work.projects.cyberseed.branding.description': 'أنشأنا هوية علامة تجارية حديثة لخدمات تحول سايبرسيد الرقمي.',
      'work.projects.matrix.title': 'ماتريكس مايكرونز',
      'work.projects.matrix.description': 'صممنا هوية علامة تجارية للشركات لحلول ماتريكس مايكرونز التكنولوجية.',
      'work.projects.mpbg.title': 'مجموعة إم بي بي',
      'work.projects.mpbg.description': 'صممنا هوية علامة تجارية احترافية لمحفظة مجموعة إم بي بي المتنوعة للأعمال.',
      
      // Work Projects - Social Media
      'work.projects.babaganoush.title': 'بابا غنوش',
      'work.projects.babaganoush.description': 'أدرنا حملات وسائل التواصل الاجتماعي الشاملة للعلامة التجارية الطهي بابا غنوش.',
      'work.projects.chefpillai.title': 'شيف بيلاي',
      'work.projects.chefpillai.description': 'طورنا استراتيجيات وسائل التواصل الاجتماعي الجذابة للعلامة التجارية للمطعم شيف بيلاي.',
      'work.projects.greensdoor.title': 'غرينز دور أورجانيكس',
      'work.projects.greensdoor.description': 'أنشأنا محتوى وسائل التواصل الاجتماعي المركّز على العضوية لغرينز دور أورجانيكس.',
      'work.projects.indoarab.title': 'إندو عرب',
      'work.projects.indoarab.description': 'أدرنا حضور العلامة التجارية لمنصة التبادل الثقافي بين الهند والعرب.',

      'work.projects.urbanbite.title': 'أوربان بايت',
      'work.projects.urbanbite.description': 'طورنا حملات وسائل التواصل الاجتماعي المركّزة على الطعام للعلامة التجارية الطهي أوربان بايت.',
      'work.projects.ventes.title': 'فينتس',
      'work.projects.ventes.description': 'أنشأنا محتوى وسائل التواصل الاجتماعي الجذاب للعلامة التجارية للبيع بالتجزئة فينتس.',
      'work.projects.weonlywheels.title': 'وي أونلي ويلز',
      'work.projects.weonlywheels.description': 'أدرنا وسائل التواصل الاجتماعي المركّزة على السيارات لوي أونلي ويلز.',
      'work.projects.aes.digital.title': 'المدرسة الرقمية إي إي إس',
      'work.projects.aes.digital.description': 'طورنا استراتيجيات وسائل التواصل الاجتماعي التعليمية للوجود الرقمي لمدرسة إي إي إس.',
      'work.projects.dubai.title': 'خدمات تأشيرة دبي',
      'work.projects.dubai.description': 'أنشأنا محتوى وسائل التواصل الاجتماعي المركّز على السفر لخدمات تأشيرة دبي.',
      'work.projects.galaxy.social.title': 'وسائل التواصل الاجتماعي جالاكسي بينتس',
      'work.projects.galaxy.social.description': 'أدرنا حملات وسائل التواصل الاجتماعي لصناعة الطلاء لجالاكسي بينتس.',
      
      // Additional missing project translations
      'work.projects.silhouettes.title': 'سيلويتس باي سالينا',
      'work.projects.silhouettes.description': 'صممنا هوية علامة تجارية كاملة وشعار يعكس أناقة سيلويتس باي سالينا في الأزياء.',
      'work.projects.biriyani.title': 'شركة البيرياني وما بعده',
      'work.projects.biriyani.description': 'صممنا هوية علامة تجارية حيوية تجسد العاطفة والتقاليد لثقافة البيرياني الأصيلة.',
      'work.projects.aes.branding.title': 'مدرسة إي إي إس التجارية',
      'work.projects.aes.branding.description': 'صممنا هوية علامة تجارية رؤيوية تجسد تقدم مدرسة إي إي إس التجارية والاتصال.',
      'work.projects.galaxon.title': 'جالاكسون ماكس',
      'work.projects.galaxon.description': 'طورنا حملات تسويق رقمي تسلط الضوء على حلول جالاكسون ماكس المبتكرة في البناء.',
  // Usra Project
  'work.projects.usraweb.title': 'أسرة: شريكك القانوني الموثوق',
  'work.projects.usraweb.description': 'تواصلي فوراً مع محاميات سعوديات خبيرات للحصول على مساعدة قانونية آمنة وسرية.',
  'work.projects.usraweb.content': 'أسرة: شريكك القانوني الموثوق وتواصلي فوراً مع محاميات سعوديات خبيرات للحصول على مساعدة قانونية آمنة وسرية.',
  'work.projects.usrapp.title': 'أسرة – التمكين القانوني للمرأة',
  'work.projects.usrapp.description': 'منصة تفاعلية لرفع الوعي بحقوق المرأة القانونية وربطها بالدعم والخبراء في المملكة العربية السعودية.',
      
      // Client Reviews
      'reviews.soumya.name': 'سوميا تشاندران',
      'reviews.soumya.role': 'مؤسسة شي توكس',
      'reviews.soumya.text': 'بنى براندبيك منصة آمنة وتمكينية لشي توكس تعكس حقاً رؤيتنا في إلهام وربط النساء.',
      'reviews.soumya.longText': 'بنى براندبيك منصة آمنة وتمكينية لشي توكس تعكس حقاً رؤيتنا في إلهام وربط النساء. اهتمامهم بالتفاصيل وفهم احتياجات مجتمعنا أحدث كل الفرق في إنشاء مساحة يمكن للنساء فيها التعبير عن أنفسهن بحرية والنمو معاً.',
      
      'reviews.ahmad.name': 'أحمد المنيف',
      'reviews.ahmad.role': 'الرئيس التنفيذي، أبو جلومبو',
      'reviews.ahmad.text': 'حول براندبيك فكرتنا إلى تطبيق خدمة سلس وفوري مع تصميم رائع ومهارة تقنية.',
      'reviews.ahmad.longText': 'حول براندبيك فكرتنا إلى تطبيق خدمة سلس وفوري مع تصميم رائع ومهارة تقنية. خبرة فريقهم في تطوير الواجهة الأمامية والخلفية ضمنت لنا حلاً قابلاً للتوسع يتطابق تماماً مع متطلبات أعمالنا وتوقعات المستخدمين.',
      
      'reviews.sahal.name': 'سالينا',
      'reviews.sahal.role': 'مؤسسة سيلويتس باي سالينا',
      'reviews.sahal.text': 'Brandbik created a modern, professional website that perfectly matches our brand and business goals.',
      'reviews.sahal.longText': 'Brandbik created a modern, professional website that perfectly matches our brand and business goals. Their strategic approach to design and development helped us establish a strong online presence, resulting in increased engagement and better conversion rates.',
      
      'reviews.majed.name': 'ماجد الكويكي',
      'reviews.majed.role': 'الرئيس التنفيذي، تطبيق خبرة',
      'reviews.majed.text': 'بنوا تطبيق استشارات قانونية آمن وبديهي، يظهر فهماً عميقاً وتنفيذاً عالي الجودة.',
      'reviews.majed.longText': 'بنوا تطبيق استشارات قانونية آمن وبديهي، يظهر فهماً عميقاً وتنفيذاً عالي الجودة. ميزات الأمان القوية للمنصة والواجهة سهلة الاستخدام جعلت من السهل على عملائنا الوصول إلى الخدمات القانونية مع الحفاظ على السرية التامة.',
      
      'reviews.esraa.name': 'مدرسة الإسراء',
      'reviews.esraa.role': 'تطبيق سيفر',
      'reviews.esraa.text': 'قدم براندبيك تطبيق توفير إبداعي يساعد الطلاب على تقليل الهدر واتخاذ خيارات أكثر ذكاءً.',
      'reviews.esraa.longText': 'قدم براندبيك تطبيق توفير إبداعي يساعد الطلاب على تقليل الهدر واتخاذ خيارات أكثر ذكاءً. نهجهم المبتكر في التلعيب وتفاعل المستخدمين جعل الثقافة المالية ممتعة وسهلة الوصول لطلابنا، مما أدى إلى تغييرات سلوكية إيجابية.',

      // Contact Page Translations
      'contact.title': 'دعنا نعمل معاً.',
      'contact.subtitle': 'سواء كنت تطلق شيئاً جديداً أو تعيد اختراع علامتك التجارية — نود أن نسمع منك.',
      'contact.form.firstName': 'الاسم الأول',
      'contact.form.firstNamePlaceholder': 'الاسم الأول',
      'contact.form.lastName': 'اسم العائلة',
      'contact.form.lastNamePlaceholder': 'اسم العائلة',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.emailPlaceholder': 'عنوان البريد الإلكتروني',
      'contact.form.mobile': 'رقم الجوال',
      'contact.form.mobilePlaceholder': 'رقم الجوال',
      'contact.form.message': 'أخبرنا المزيد',
      'contact.form.messagePlaceholder': 'رسالتك',
      'contact.form.submit': 'إرسال',
      'contact.whatsapp.message': 'تقديم نموذج اتصال جديد:\n\nالاسم: {firstName} {lastName}\nالبريد الإلكتروني: {email}\nالجوال: {mobile}\nالرسالة: {message}',
      
      // Location Section Translations
      'location.title': 'مواقعنا',
      'location.india.name': 'الهند',
      'location.india.address': 'براندبيك LLP، طريق راجيف غاندي السريع، مانجيري، كيرالا 676121',
      'location.saudi.name': 'المملكة العربية السعودية',
       'location.saudi.address': 'مبنى رقم 6143، طريق الملك عبدالعزيز، حي العارض، الرياض 13342، المملكة العربية السعودية',
      'location.uk.name': 'المملكة المتحدة',
      'location.uk.address': 'كوفنتري، مقاطعة ويست ميدلاندز، إنجلترا، المملكة المتحدة (المملكة المتحدة)\n+44 7384021507',
      'location.map.attribution': 'بيانات الخريطة ©2023 جوجل',
      
      // Our Team Members (Arabic)
      'team.member.1.name': 'فاضل محمد',
      'team.member.1.role': 'كبير استراتيجيي العلامة التجارية',

      'team.member.2.name': 'ألطاف شريف',
      'team.member.2.role': 'قائد الابتكار التقني والذكاء الاصطناعي',

      'team.member.3.name': 'محمد سليل',
      'team.member.3.role': 'قائد تطوير البرمجيات الشامل',

      'team.member.4.name': 'باسل سامان',
      'team.member.4.role': 'مطور الواجهة الأمامية',

      'team.member.5.name': 'ناصح أمين',
      'team.member.5.role': 'مطور فلاتر',

      'team.member.6.name': 'عدنان يوسف',
      'team.member.6.role': 'مطور تطبيقات الجوال (فلاتر)',

      'team.member.7.name': 'محمد رفيه',
      'team.member.7.role': 'رئيس قسم التقنية والبنية التحتية',

      'team.member.8.name': 'آمنة عبد الله',
      'team.member.8.role': 'مطور خلفية وقائد الدعم',

      'team.member.9.name': 'شامنا شيري',
      'team.member.9.role': 'منسقة التسويق وقائدة الموارد البشرية',

      'team.member.10.name': 'شهيد أيه كيه',
      'team.member.10.role': 'استشاري مالي',

      'team.member.11.name': 'سحل محمد',
      'team.member.11.role': 'استشاري أعمال',

      'team.member.12.name': 'فواز',
      'team.member.12.role': 'مساعد تطوير الأعمال',

      'team.member.13.name': 'خديجة حنين',
      'team.member.13.role': 'محللة أبحاث العلامة التجارية',

      'team.member.14.name': 'جاويد خان',
      'team.member.14.role': 'تنفيذي تسويق محركات البحث',

      'team.member.15.name': 'منحة شيرين',
      'team.member.15.role': 'استراتيجية محتوى وكاتبة نصوص',

      'team.member.16.name': 'شريف',
      'team.member.16.role': 'استراتيجي ومستشار أعمال',

      // Privacy Policy Section
      'privacy.title': 'سياسة الخصوصية',
      'privacy.intro.title': 'مقدمة',
      'privacy.intro.body': 'تلتزم براندبيك بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك واستخدامها والإفصاح عنها وحمايتها عند زيارتك لموقعنا الإلكتروني أو استخدامك لخدماتنا.',
      'privacy.collect.title': 'المعلومات التي نجمعها',
      'privacy.collect.1': 'المعلومات الشخصية: مثل اسمك، بريدك الإلكتروني، رقم هاتفك، وأي معلومات أخرى تقدمها عبر نماذج الاتصال أو التواصل معنا.',
      'privacy.collect.2': 'بيانات الاستخدام: بما في ذلك عنوان IP الخاص بك، نوع المتصفح، معلومات الجهاز، الصفحات التي تمت زيارتها، والوقت الذي قضيته على موقعنا.',
      'privacy.collect.3': 'ملفات تعريف الارتباط والتتبع: نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لتحسين تجربتك وتحليل استخدام الموقع.',
      'privacy.use.title': 'كيف نستخدم معلوماتك',
      'privacy.use.1': 'لتقديم وتشغيل وصيانة موقعنا وخدماتنا.',
      'privacy.use.2': 'للرد على استفساراتك وتقديم الدعم.',
      'privacy.use.3': 'لتحسين موقعنا وخدماتنا وتجربة المستخدم.',
      'privacy.use.4': 'لإرسال التحديثات أو المواد التسويقية أو الترويجية (يمكنك إلغاء الاشتراك في أي وقت).',
      'privacy.use.5': 'للامتثال للالتزامات القانونية وحماية حقوقنا.',
      'privacy.share.title': 'مشاركة المعلومات والإفصاح عنها',
      'privacy.share.1': 'لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة.',
      'privacy.share.2': 'قد نشارك المعلومات مع مزودي خدمات موثوقين يساعدوننا في تشغيل موقعنا وخدماتنا، وذلك بموجب اتفاقيات سرية.',
      'privacy.share.3': 'قد نفصح عن المعلومات إذا طُلب منا ذلك بموجب القانون أو لحماية حقوقنا وسلامتنا.',
      'privacy.security.title': 'أمان البيانات',
      'privacy.security.body': 'نطبق تدابير أمنية معقولة لحماية معلوماتك. ومع ذلك، لا توجد وسيلة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100٪.',
      'privacy.rights.title': 'حقوقك واختياراتك',
      'privacy.rights.1': 'يمكنك طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها.',
      'privacy.rights.2': 'يمكنك إلغاء الاشتراك في الرسائل التسويقية في أي وقت.',
      'privacy.rights.3': 'لأي طلبات تتعلق بالخصوصية، يرجى التواصل معنا عبر',
      'privacy.children.title': 'خصوصية الأطفال',
      'privacy.children.body': 'موقعنا وخدماتنا غير موجهة للأطفال دون سن 13 عامًا. نحن لا نجمع معلومات شخصية عن الأطفال عن علم.',
      'privacy.changes.title': 'التغييرات على هذه السياسة',
      'privacy.changes.body': 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر التغييرات على هذه الصفحة مع تاريخ سريان محدث.',
      'privacy.contact.title': 'تواصل معنا',
      'privacy.contact.body': 'إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر',
      // Terms of Service Section
      'terms.title': 'شروط الخدمة',
      'terms.intro.title': 'مقدمة',
      'terms.intro.body': 'باستخدامك لموقع وخدمات براندبيك، فإنك توافق على الالتزام بهذه الشروط. يرجى قراءتها بعناية.',
      'terms.accept.title': 'قبول الشروط',
      'terms.accept.body': 'استخدامك لموقعنا وخدماتنا يعني موافقتك على هذه الشروط. إذا لم توافق، يرجى عدم استخدام خدماتنا.',
      'terms.use.title': 'استخدام الخدمات',
      'terms.use.1': 'توافق على استخدام موقعنا وخدماتنا فقط للأغراض المشروعة ووفقًا لهذه الشروط.',
      'terms.use.2': 'يجب ألا تستخدم خدماتنا في أي نشاط غير قانوني أو ضار أو ينتهك حقوق الآخرين.',
      'terms.ip.title': 'الملكية الفكرية',
      'terms.ip.body': 'جميع المحتوى والعلامات التجارية وحقوق الملكية الفكرية في هذا الموقع مملوكة لبراندبيك أو الجهات المرخصة لها. لا يجوز لك استخدام أو نسخ أو توزيع أي محتوى دون إذن كتابي منا.',
      'terms.user.title': 'مسؤوليات المستخدم',
      'terms.user.1': 'أنت مسؤول عن الحفاظ على سرية معلومات حسابك.',
      'terms.user.2': 'توافق على تقديم معلومات دقيقة وكاملة عند استخدام خدماتنا.',
      'terms.liability.title': 'تحديد المسؤولية',
      'terms.liability.body': 'براندبيك غير مسؤولة عن أي أضرار ناتجة عن استخدامك لموقعنا أو خدماتنا. يتم تقديم خدماتنا "كما هي" دون أي ضمانات من أي نوع.',
      'terms.changes.title': 'تغييرات على الشروط',
      'terms.changes.body': 'قد نقوم بتحديث شروط الخدمة هذه من وقت لآخر. سيتم نشر التغييرات على هذه الصفحة مع تاريخ سريان محدث.',
      'terms.contact.title': 'تواصل معنا',
      'terms.contact.body': 'إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا عبر',
  'terms.refund.title': 'سياسة عدم الاسترداد',
  'terms.refund.body': 'جميع المدفوعات المقدمة مقابل خدماتنا/منتجاتنا نهائية وغير قابلة للاسترداد. بإتمام عملية الشراء، فإنك تقر وتوافق على أنك غير مؤهل للمطالبة بأي استرداد أو إلغاء أو اعتراض دفع لأي سبب من الأسباب، بما في ذلك على سبيل المثال لا الحصر عدم الرضا عن الخدمة أو تغيير الرأي أو عدم استخدام الخدمة/المنتج.',
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

 
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 