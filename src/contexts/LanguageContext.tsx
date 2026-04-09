import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "bn";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { en: "Home", bn: "হোম" },
  "nav.about": { en: "About", bn: "আমার সম্পর্কে" },
  "nav.services": { en: "Services", bn: "সেবাসমূহ" },
  "nav.portfolio": { en: "Portfolio", bn: "পোর্টফোলিও" },
  "nav.blog": { en: "Blog", bn: "ব্লগ" },
  "nav.contact": { en: "Contact", bn: "যোগাযোগ" },
  "nav.hire": { en: "Hire Me", bn: "আমাকে নিয়োগ করুন" },

  // Hero
  "hero.available": { en: "Available for Projects", bn: "প্রজেক্টের জন্য উপলব্ধ" },
  "hero.hi": { en: "Hi, I'm", bn: "হ্যালো, আমি" },
  "hero.name": { en: "Rakibul Alam", bn: "রাকিবুল আলম" },
  "hero.role": { en: "Web & Mobile App Developer", bn: "ওয়েব ও মোবাইল অ্যাপ ডেভেলপার" },
  "hero.desc": { en: "I build high-performance digital products that help businesses grow. From concept to deployment, I deliver solutions that convert.", bn: "আমি উচ্চ-পারফরম্যান্স ডিজিটাল প্রোডাক্ট তৈরি করি যা ব্যবসায়িক প্রবৃদ্ধিতে সাহায্য করে। ধারণা থেকে ডিপ্লয়মেন্ট পর্যন্ত, আমি সমাধান প্রদান করি।" },
  "hero.start": { en: "Start a Project", bn: "প্রজেক্ট শুরু করুন" },
  "hero.view_work": { en: "View My Work", bn: "আমার কাজ দেখুন" },
  "hero.exp_badge": { en: "5+ Years Exp", bn: "৫+ বছরের অভিজ্ঞতা" },

  // Stats
  "stat.projects": { en: "Projects Completed", bn: "সম্পন্ন প্রজেক্ট" },
  "stat.clients": { en: "Happy Clients", bn: "সন্তুষ্ট ক্লায়েন্ট" },
  "stat.experience": { en: "Years Experience", bn: "বছরের অভিজ্ঞতা" },
  "stat.satisfaction": { en: "Client Satisfaction", bn: "ক্লায়েন্ট সন্তুষ্টি" },

  // Services section
  "services.badge": { en: "Services", bn: "সেবাসমূহ" },
  "services.title": { en: "What I", bn: "আমি কি" },
  "services.highlight": { en: "Offer", bn: "অফার করি" },
  "services.desc": { en: "End-to-end development services designed to help your business succeed in the digital landscape.", bn: "আপনার ব্যবসার ডিজিটাল সাফল্যের জন্য ডিজাইন করা সম্পূর্ণ ডেভেলপমেন্ট সেবা।" },
  "services.learn_more": { en: "Learn more", bn: "আরও জানুন" },

  // Service names
  "service.web": { en: "Web Development", bn: "ওয়েব ডেভেলপমেন্ট" },
  "service.mobile": { en: "Mobile Apps", bn: "মোবাইল অ্যাপ" },
  "service.uiux": { en: "UI/UX Design", bn: "UI/UX ডিজাইন" },
  "service.seo": { en: "SEO Optimization", bn: "SEO অপটিমাইজেশন" },
  "service.api": { en: "API Development", bn: "API ডেভেলপমেন্ট" },
  "service.fullstack": { en: "Full-Stack Solutions", bn: "ফুল-স্ট্যাক সমাধান" },
  "service.web.desc": { en: "Custom websites and web apps built with modern frameworks for speed and scalability.", bn: "আধুনিক ফ্রেমওয়ার্ক দিয়ে তৈরি দ্রুত ও স্কেলেবল কাস্টম ওয়েবসাইট ও ওয়েব অ্যাপ।" },
  "service.mobile.desc": { en: "Cross-platform mobile applications with native performance and sleek UI.", bn: "নেটিভ পারফরম্যান্স এবং সুন্দর UI সহ ক্রস-প্লাটফর্ম মোবাইল অ্যাপ্লিকেশন।" },
  "service.uiux.desc": { en: "User-centered designs that convert visitors into customers.", bn: "ব্যবহারকারী-কেন্দ্রিক ডিজাইন যা ভিজিটরকে কাস্টমারে রূপান্তর করে।" },
  "service.seo.desc": { en: "Data-driven SEO strategies to boost your online visibility.", bn: "আপনার অনলাইন দৃশ্যমানতা বৃদ্ধির জন্য ডেটা-চালিত SEO কৌশল।" },
  "service.api.desc": { en: "Robust RESTful and GraphQL APIs powering your business logic.", bn: "আপনার ব্যবসায়িক লজিক চালিত শক্তিশালী RESTful ও GraphQL API।" },
  "service.fullstack.desc": { en: "End-to-end development from database to deployment.", bn: "ডেটাবেস থেকে ডিপ্লয়মেন্ট পর্যন্ত সম্পূর্ণ ডেভেলপমেন্ট।" },

  // Portfolio section
  "portfolio.badge": { en: "Portfolio", bn: "পোর্টফোলিও" },
  "portfolio.title": { en: "Featured", bn: "বৈশিষ্ট্যযুক্ত" },
  "portfolio.highlight": { en: "Projects", bn: "প্রজেক্ট" },
  "portfolio.desc": { en: "A selection of my recent work that showcases my skills and expertise.", bn: "আমার দক্ষতা ও অভিজ্ঞতা প্রদর্শনকারী সাম্প্রতিক কাজের একটি নির্বাচন।" },
  "portfolio.view_all": { en: "View All Projects", bn: "সব প্রজেক্ট দেখুন" },

  // Skills section
  "skills.badge": { en: "Skills", bn: "দক্ষতা" },
  "skills.title": { en: "My", bn: "আমার" },
  "skills.highlight": { en: "Expertise", bn: "দক্ষতা" },
  "skills.desc": { en: "Technologies and tools I use to bring ideas to life.", bn: "ধারণাকে বাস্তবে রূপ দিতে আমি যে প্রযুক্তি ও টুল ব্যবহার করি।" },

  // Testimonials
  "testimonials.badge": { en: "Testimonials", bn: "প্রশংসাপত্র" },
  "testimonials.title": { en: "What Clients", bn: "ক্লায়েন্টরা কি" },
  "testimonials.highlight": { en: "Say", bn: "বলেন" },
  "testimonials.desc": { en: "Don't just take my word for it — hear from the people I've worked with.", bn: "শুধু আমার কথায় নয় — যাদের সাথে কাজ করেছি তাদের কথা শুনুন।" },

  // CTA section
  "cta.title": { en: "Let's Build Something Amazing", bn: "আসুন কিছু অসাধারণ তৈরি করি" },
  "cta.desc": { en: "Ready to turn your idea into reality? Let's discuss your project and make it happen.", bn: "আপনার ধারণাকে বাস্তবে রূপ দিতে প্রস্তুত? আসুন আপনার প্রজেক্ট নিয়ে আলোচনা করি।" },
  "cta.whatsapp": { en: "WhatsApp Me", bn: "WhatsApp করুন" },

  // About page
  "about.badge": { en: "About Me", bn: "আমার সম্পর্কে" },
  "about.title": { en: "Crafting Digital", bn: "ডিজিটাল" },
  "about.highlight": { en: "Experiences", bn: "অভিজ্ঞতা" },
  "about.title_suffix": { en: "That Matter", bn: "তৈরি করি যা গুরুত্বপূর্ণ" },
  "about.p1": { en: "I'm Rakibul Alam, a passionate Web & Mobile App Developer with over 5 years of experience building high-performance digital products for startups and businesses worldwide.", bn: "আমি রাকিবুল আলম, একজন আবেগী ওয়েব ও মোবাইল অ্যাপ ডেভেলপার। বিশ্বব্যাপী স্টার্টআপ ও ব্যবসার জন্য ৫ বছরেরও বেশি অভিজ্ঞতা সহ উচ্চ-পারফরম্যান্স ডিজিটাল প্রোডাক্ট তৈরি করি।" },
  "about.p2": { en: "My approach combines technical excellence with strategic thinking — I don't just build features, I build solutions that drive measurable business results. Every line of code I write is optimized for performance, accessibility, and user experience.", bn: "আমার পদ্ধতি প্রযুক্তিগত দক্ষতা ও কৌশলগত চিন্তার সমন্বয় — আমি শুধু ফিচার তৈরি করি না, আমি এমন সমাধান তৈরি করি যা পরিমাপযোগ্য ব্যবসায়িক ফলাফল দেয়।" },
  "about.p3": { en: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.", bn: "কোডিং না করলে আমি নতুন প্রযুক্তি অন্বেষণ, ওপেন-সোর্স প্রজেক্টে অবদান এবং ডেভেলপার কমিউনিটিতে জ্ঞান শেয়ার করি।" },
  "about.work_together": { en: "Let's Work Together", bn: "একসাথে কাজ করি" },
  "about.download_cv": { en: "Download CV", bn: "সিভি ডাউনলোড করুন" },
  "about.journey_badge": { en: "Journey", bn: "যাত্রা" },
  "about.my": { en: "My", bn: "আমার" },
  "about.story": { en: "Story", bn: "গল্প" },
  "about.journey_desc": { en: "From curious coder to professional developer — here's how I got here.", bn: "কৌতূহলী কোডার থেকে পেশাদার ডেভেলপার — এভাবেই আমি এখানে এসেছি।" },

  // Journey items
  "journey.2019.title": { en: "Started Web Development", bn: "ওয়েব ডেভেলপমেন্ট শুরু" },
  "journey.2019.desc": { en: "Began learning HTML, CSS, and JavaScript. Built my first websites for local businesses.", bn: "HTML, CSS, ও JavaScript শেখা শুরু করলাম। স্থানীয় ব্যবসার জন্য প্রথম ওয়েবসাইট তৈরি করলাম।" },
  "journey.2020.title": { en: "First Freelance Clients", bn: "প্রথম ফ্রিল্যান্স ক্লায়েন্ট" },
  "journey.2020.desc": { en: "Started freelancing and delivered 10+ projects. Learned React and modern tooling.", bn: "ফ্রিল্যান্সিং শুরু করলাম এবং ১০+ প্রজেক্ট ডেলিভার করলাম। React ও আধুনিক টুলিং শিখলাম।" },
  "journey.2021.title": { en: "Mobile App Development", bn: "মোবাইল অ্যাপ ডেভেলপমেন্ট" },
  "journey.2021.desc": { en: "Expanded into React Native and built cross-platform mobile applications.", bn: "React Native-এ প্রসারিত হলাম এবং ক্রস-প্লাটফর্ম মোবাইল অ্যাপ তৈরি করলাম।" },
  "journey.2022.title": { en: "Full-Stack Mastery", bn: "ফুল-স্ট্যাক দক্ষতা" },
  "journey.2022.desc": { en: "Mastered backend technologies. Started working with startups on complex systems.", bn: "ব্যাকএন্ড প্রযুক্তি আয়ত্ত করলাম। জটিল সিস্টেমে স্টার্টআপের সাথে কাজ শুরু করলাম।" },
  "journey.2024.title": { en: "50+ Projects Delivered", bn: "৫০+ প্রজেক্ট ডেলিভার" },
  "journey.2024.desc": { en: "Reached a milestone of 50+ successful projects with clients worldwide.", bn: "বিশ্বব্যাপী ক্লায়েন্টদের সাথে ৫০+ সফল প্রজেক্টের মাইলফলক অর্জন।" },

  // Services page
  "services.page.title": { en: "Solutions That", bn: "সমাধান যা" },
  "services.page.highlight": { en: "Deliver Results", bn: "ফলাফল দেয়" },
  "services.page.desc": { en: "Comprehensive development services tailored to your business needs. From concept to launch, I handle it all.", bn: "আপনার ব্যবসার প্রয়োজনে তৈরি সম্পূর্ণ ডেভেলপমেন্ট সেবা। ধারণা থেকে লঞ্চ পর্যন্ত আমি সব সামলাই।" },
  "services.process.badge": { en: "Process", bn: "প্রক্রিয়া" },
  "services.process.title": { en: "How I", bn: "আমি কিভাবে" },
  "services.process.highlight": { en: "Work", bn: "কাজ করি" },
  "services.process.desc": { en: "A proven 4-step process that ensures quality delivery every time.", bn: "একটি প্রমাণিত ৪-ধাপ প্রক্রিয়া যা প্রতিবার মানসম্পন্ন ডেলিভারি নিশ্চিত করে।" },
  "services.cta.title": { en: "Ready to", bn: "প্রস্তুত" },
  "services.cta.highlight": { en: "Get Started?", bn: "শুরু করতে?" },
  "services.cta.desc": { en: "Let's discuss your project requirements and find the perfect solution for your business.", bn: "আসুন আপনার প্রজেক্টের প্রয়োজনীয়তা আলোচনা করি এবং আপনার ব্যবসার জন্য সেরা সমাধান খুঁজি।" },

  // Process steps
  "process.discovery": { en: "Discovery", bn: "আবিষ্কার" },
  "process.discovery.desc": { en: "Understanding your goals, audience, and requirements through in-depth consultation.", bn: "গভীর পরামর্শের মাধ্যমে আপনার লক্ষ্য, দর্শক ও প্রয়োজনীয়তা বোঝা।" },
  "process.planning": { en: "Planning", bn: "পরিকল্পনা" },
  "process.planning.desc": { en: "Creating wireframes, technical architecture, and a detailed project roadmap.", bn: "ওয়্যারফ্রেম, প্রযুক্তিগত আর্কিটেকচার এবং বিস্তারিত প্রজেক্ট রোডম্যাপ তৈরি।" },
  "process.development": { en: "Development", bn: "ডেভেলপমেন্ট" },
  "process.development.desc": { en: "Building your product with clean code, regular updates, and milestone reviews.", bn: "পরিচ্ছন্ন কোড, নিয়মিত আপডেট এবং মাইলস্টোন রিভিউ সহ আপনার প্রোডাক্ট তৈরি।" },
  "process.launch": { en: "Launch & Support", bn: "লঞ্চ ও সাপোর্ট" },
  "process.launch.desc": { en: "Deploying, testing, and providing ongoing maintenance and optimization.", bn: "ডিপ্লয়, টেস্টিং এবং চলমান রক্ষণাবেক্ষণ ও অপটিমাইজেশন প্রদান।" },

  // Portfolio page
  "portfolio.page.desc": { en: "A curated collection of projects that showcase my expertise across web, mobile, and design.", bn: "ওয়েব, মোবাইল ও ডিজাইন জুড়ে আমার দক্ষতা প্রদর্শনকারী প্রজেক্টের একটি সংকলন।" },
  "portfolio.all": { en: "All", bn: "সব" },
  "portfolio.like": { en: "Like What You See?", bn: "যা দেখছেন পছন্দ হচ্ছে?" },
  "portfolio.like.desc": { en: "Let's create something amazing together. I'm always open to new opportunities and exciting projects.", bn: "আসুন একসাথে কিছু অসাধারণ তৈরি করি। আমি সবসময় নতুন সুযোগ ও উত্তেজনাপূর্ণ প্রজেক্টের জন্য উন্মুক্ত।" },

  // Blog page
  "blog.badge": { en: "Blog", bn: "ব্লগ" },
  "blog.title": { en: "Insights &", bn: "অন্তর্দৃষ্টি ও" },
  "blog.highlight": { en: "Articles", bn: "নিবন্ধ" },
  "blog.desc": { en: "Thoughts on development, design, and building products that matter.", bn: "ডেভেলপমেন্ট, ডিজাইন এবং গুরুত্বপূর্ণ প্রোডাক্ট তৈরি নিয়ে চিন্তাভাবনা।" },
  "blog.read_more": { en: "Read More", bn: "আরও পড়ুন" },

  // Contact page
  "contact.badge": { en: "Contact", bn: "যোগাযোগ" },
  "contact.title": { en: "Let's Work", bn: "আসুন একসাথে" },
  "contact.highlight": { en: "Together", bn: "কাজ করি" },
  "contact.desc": { en: "Have a project in mind? Let's discuss how I can help bring your vision to life.", bn: "একটি প্রজেক্ট মনে আছে? আসুন আলোচনা করি কিভাবে আমি আপনার ভিশন বাস্তবায়ন করতে পারি।" },
  "contact.get_in_touch": { en: "Get In Touch", bn: "যোগাযোগ করুন" },
  "contact.reach_out": { en: "Feel free to reach out via the form or through any of the channels below. I typically respond within 24 hours.", bn: "ফর্ম বা নিচের যেকোনো মাধ্যমে যোগাযোগ করুন। আমি সাধারণত ২৪ ঘন্টার মধ্যে উত্তর দিই।" },
  "contact.send_message": { en: "Send a Message", bn: "একটি বার্তা পাঠান" },
  "contact.name": { en: "Name", bn: "নাম" },
  "contact.name.placeholder": { en: "Your name", bn: "আপনার নাম" },
  "contact.email": { en: "Email", bn: "ইমেইল" },
  "contact.message": { en: "Message", bn: "বার্তা" },
  "contact.message.placeholder": { en: "Tell me about your project...", bn: "আপনার প্রজেক্ট সম্পর্কে বলুন..." },
  "contact.send": { en: "Send Message", bn: "বার্তা পাঠান" },
  "contact.sending": { en: "Sending...", bn: "পাঠানো হচ্ছে..." },
  "contact.location": { en: "Location", bn: "অবস্থান" },
  "contact.bangladesh": { en: "Bangladesh", bn: "বাংলাদেশ" },

  // Service detail
  "servicedetail.benefits": { en: "Key Benefits", bn: "মূল সুবিধাসমূহ" },
  "servicedetail.included": { en: "What's Included", bn: "কি অন্তর্ভুক্ত" },
  "servicedetail.pricing.badge": { en: "Pricing", bn: "মূল্য" },
  "servicedetail.pricing.title": { en: "Choose Your", bn: "আপনার" },
  "servicedetail.pricing.highlight": { en: "Plan", bn: "প্ল্যান বেছে নিন" },
  "servicedetail.reviews.badge": { en: "Reviews", bn: "রিভিউ" },
  "servicedetail.reviews.title": { en: "What Clients", bn: "ক্লায়েন্টরা কি" },
  "servicedetail.reviews.highlight": { en: "Say", bn: "বলেন" },
  "servicedetail.faq.badge": { en: "FAQ", bn: "সচরাচর জিজ্ঞাসা" },
  "servicedetail.faq.title": { en: "Frequently Asked", bn: "সচরাচর জিজ্ঞাসিত" },
  "servicedetail.faq.highlight": { en: "Questions", bn: "প্রশ্ন" },
  "servicedetail.cta.title_1": { en: "Let's", bn: "আসুন" },
  "servicedetail.cta.highlight": { en: "Start Today", bn: "আজই শুরু করি" },
  "servicedetail.cta.desc": { en: "Ready to take your project to the next level? Let's discuss how I can help you achieve your goals.", bn: "আপনার প্রজেক্টকে পরবর্তী স্তরে নিয়ে যেতে প্রস্তুত? আসুন আলোচনা করি কিভাবে আমি আপনার লক্ষ্য অর্জনে সাহায্য করতে পারি।" },

  // Cost calculator
  "calc.title": { en: "Cost Estimator", bn: "খরচ নির্ধারক" },
  "calc.estimate": { en: "Estimate your", bn: "আপনার" },
  "calc.project_cost": { en: "project cost", bn: "প্রজেক্ট খরচ নির্ধারণ করুন" },
  "calc.total": { en: "Estimated Total", bn: "আনুমানিক মোট" },
  "calc.whatsapp": { en: "Send via WhatsApp", bn: "WhatsApp-এ পাঠান" },
  "calc.email": { en: "Send via Email", bn: "ইমেইলে পাঠান" },
  "calc.note": { en: "* This is an estimate. Final pricing may vary based on project complexity.", bn: "* এটি একটি অনুমান। চূড়ান্ত মূল্য প্রজেক্টের জটিলতার উপর ভিত্তি করে পরিবর্তিত হতে পারে।" },

  // Pricing packages
  "pkg.popular": { en: "Popular", bn: "জনপ্রিয়" },
  "pkg.selected": { en: "✓ Selected", bn: "✓ নির্বাচিত" },
  "pkg.select": { en: "Select Plan", bn: "প্ল্যান নির্বাচন করুন" },
  "pkg.get_started": { en: "Get Started with", bn: "শুরু করুন" },

  // Footer
  "footer.desc": { en: "Professional Web & Mobile App Developer crafting digital experiences that drive business growth.", bn: "পেশাদার ওয়েব ও মোবাইল অ্যাপ ডেভেলপার, ব্যবসায়িক প্রবৃদ্ধি চালিত ডিজিটাল অভিজ্ঞতা তৈরি করি।" },
  "footer.quick_links": { en: "Quick Links", bn: "দ্রুত লিংক" },
  "footer.services": { en: "Services", bn: "সেবাসমূহ" },
  "footer.contact": { en: "Contact", bn: "যোগাযোগ" },
  "footer.rights": { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
  "footer.built": { en: "Built with passion & precision.", bn: "আবেগ ও নিখুঁততার সাথে তৈরি।" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "bn" ? "bn" : "en") as Lang;
  });

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
