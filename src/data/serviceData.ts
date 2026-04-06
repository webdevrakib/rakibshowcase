import { Globe, Smartphone, Palette, Search, Server, Code2 } from "lucide-react";

export const serviceData: Record<string, {
  icon: any;
  title: string;
  desc: string;
  longDesc: string;
  benefits: string[];
  features: string[];
  reviews: { name: string; role: string; rating: number; text: string }[];
  faqs: { question: string; answer: string }[];
  pricing: { label: string; basePrice: number; unit: string }[];
}> = {
  "web-development": {
    icon: Globe,
    title: "Web Development",
    desc: "Custom websites and web applications built with React, Next.js, and modern frameworks.",
    longDesc: "I build high-performance, scalable web applications using cutting-edge technologies. From single-page applications to complex enterprise platforms, every project is crafted with clean code, optimized performance, and SEO best practices.",
    benefits: ["Lightning-fast performance", "SEO optimized structure", "Mobile responsive design", "Scalable architecture", "Cross-browser compatibility", "Accessibility compliant"],
    features: ["React / Next.js Development", "Custom CMS Integration", "E-commerce Solutions", "Progressive Web Apps (PWA)", "API Integration", "Performance Optimization"],
    reviews: [
      { name: "Sarah Johnson", role: "CEO, TechStart Inc.", rating: 5, text: "Rakibul built our entire web platform from scratch. The performance improvements were incredible — 40% faster load times and a 25% increase in conversions." },
      { name: "Michael Chen", role: "Founder, DataFlow", rating: 5, text: "Exceptional work on our SaaS dashboard. Clean code, great communication, and delivered ahead of schedule." },
      { name: "Emily Rodriguez", role: "Marketing Director, GrowthHub", rating: 5, text: "Our new website looks stunning and performs beautifully. The SEO optimization has already boosted our organic traffic by 60%." },
    ],
    faqs: [
      { question: "How long does a typical website take to build?", answer: "A standard website takes 2-4 weeks. Complex web applications with custom features can take 4-8 weeks depending on scope and requirements." },
      { question: "Do you provide ongoing maintenance?", answer: "Yes! I offer monthly maintenance packages that include bug fixes, security updates, performance monitoring, and content updates." },
      { question: "Which technologies do you use?", answer: "I primarily use React, Next.js, TypeScript, and Tailwind CSS for the frontend. For backends, I work with Node.js, Express, and various databases like PostgreSQL and MongoDB." },
      { question: "Can you redesign my existing website?", answer: "Absolutely. I can modernize your existing website while preserving your brand identity and improving performance, UX, and SEO." },
      { question: "Do you build e-commerce websites?", answer: "Yes, I build custom e-commerce solutions with payment integration (Stripe, PayPal), inventory management, and order tracking systems." },
    ],
    pricing: [
      { label: "Landing Page", basePrice: 300, unit: "page" },
      { label: "Multi-page Website", basePrice: 200, unit: "page" },
      { label: "Custom Feature", basePrice: 150, unit: "feature" },
      { label: "API Integration", basePrice: 200, unit: "integration" },
    ],
  },
  "mobile-apps": {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with React Native that feel native on both iOS and Android.",
    longDesc: "I create beautiful, high-performance mobile applications using React Native that work seamlessly on both iOS and Android. From concept to deployment on app stores, I handle the entire development lifecycle.",
    benefits: ["Cross-platform development", "Native-like performance", "Push notifications", "Offline capability", "App Store deployment", "Real-time updates"],
    features: ["React Native Development", "iOS & Android Apps", "Push Notification Systems", "In-App Purchases", "Social Media Integration", "Location-Based Services"],
    reviews: [
      { name: "David Park", role: "CTO, FitTrack", rating: 5, text: "Our fitness app reached 50K downloads in the first month. Rakibul's attention to UX detail made all the difference." },
      { name: "Aisha Bello", role: "Founder, QuickDeliver", rating: 5, text: "The delivery app works flawlessly on both platforms. Real-time tracking and push notifications work perfectly." },
      { name: "James Wilson", role: "Product Manager, EduLearn", rating: 4, text: "Great mobile app development. The offline learning feature was exactly what our users needed." },
    ],
    faqs: [
      { question: "Do you build for both iOS and Android?", answer: "Yes! Using React Native, I build a single codebase that runs natively on both iOS and Android, saving you time and cost." },
      { question: "How much does a mobile app cost?", answer: "A basic app starts around $2,000-$5,000. Complex apps with real-time features, payments, and advanced UI can range from $5,000-$15,000+." },
      { question: "Do you handle App Store submission?", answer: "Yes, I handle the entire process — from building the app to submitting it to both Google Play Store and Apple App Store." },
      { question: "Can you add push notifications?", answer: "Absolutely. I integrate push notifications using Firebase Cloud Messaging for both platforms." },
    ],
    pricing: [
      { label: "Basic App (5-8 screens)", basePrice: 500, unit: "app" },
      { label: "Additional Screen", basePrice: 100, unit: "screen" },
      { label: "Push Notifications", basePrice: 200, unit: "setup" },
      { label: "Payment Integration", basePrice: 300, unit: "integration" },
    ],
  },
  "ui-ux-design": {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered interface designs that convert visitors into customers.",
    longDesc: "I design intuitive, visually stunning interfaces that prioritize user experience and drive conversions. Every design decision is backed by data and user behavior analysis to maximize engagement.",
    benefits: ["Conversion-focused design", "User research driven", "Accessibility compliant", "Brand consistent", "Responsive layouts", "Interactive prototypes"],
    features: ["UI Design Systems", "UX Research & Testing", "Wireframing & Prototyping", "Design System Creation", "Responsive Design", "Brand Identity Design"],
    reviews: [
      { name: "Lisa Wang", role: "CEO, StyleBox", rating: 5, text: "The redesign increased our conversion rate by 35%. Rakibul truly understands how design impacts business results." },
      { name: "Tom Harris", role: "Founder, FinanceApp", rating: 5, text: "Clean, professional designs that our users love. The onboarding flow redesign reduced drop-offs by 50%." },
      { name: "Nina Patel", role: "Head of Product, HealthPlus", rating: 5, text: "Incredible design work. The new dashboard is both beautiful and highly functional." },
    ],
    faqs: [
      { question: "What tools do you use for design?", answer: "I use Figma for UI design, prototyping, and design systems. For user research, I use tools like Hotjar and Google Analytics." },
      { question: "Do you provide design files?", answer: "Yes, you receive the complete Figma file with organized layers, components, and a style guide for your development team." },
      { question: "How many revision rounds are included?", answer: "Each project includes 2-3 rounds of revisions. Additional revisions are available at an hourly rate." },
      { question: "Can you create a full brand identity?", answer: "Yes, I offer brand identity packages including logo design, color palette, typography, and comprehensive brand guidelines." },
    ],
    pricing: [
      { label: "UI Design (per page)", basePrice: 150, unit: "page" },
      { label: "UX Research & Audit", basePrice: 400, unit: "project" },
      { label: "Design System", basePrice: 600, unit: "system" },
      { label: "Prototype", basePrice: 250, unit: "prototype" },
    ],
  },
  "seo-optimization": {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies that boost your search rankings and organic traffic.",
    longDesc: "I implement comprehensive SEO strategies that drive measurable results. From technical SEO audits to content optimization and link building, I help businesses increase their organic visibility.",
    benefits: ["Technical SEO audits", "Content strategy", "Performance optimization", "Analytics & reporting", "Keyword research", "Competitor analysis"],
    features: ["On-Page SEO", "Technical SEO Fixes", "Content Strategy", "Link Building", "Local SEO", "SEO Analytics & Reporting"],
    reviews: [
      { name: "Robert Kim", role: "Owner, LocalBiz Pro", rating: 5, text: "Our organic traffic increased by 200% in 6 months. Rakibul's SEO strategy completely transformed our online presence." },
      { name: "Amanda Foster", role: "Marketing Lead, TravelNow", rating: 5, text: "We went from page 5 to page 1 for our main keywords. The ROI has been incredible." },
      { name: "Carlos Mendez", role: "CEO, FreshEats", rating: 4, text: "Great SEO work. Our local search visibility improved dramatically." },
    ],
    faqs: [
      { question: "How long until I see SEO results?", answer: "SEO is a long-term strategy. You can expect to see initial improvements in 2-3 months, with significant results within 4-6 months." },
      { question: "Do you guarantee first page rankings?", answer: "No ethical SEO professional can guarantee rankings. I focus on proven strategies that consistently improve organic traffic and visibility." },
      { question: "What's included in an SEO audit?", answer: "A comprehensive audit covers technical SEO, on-page factors, content quality, backlink profile, competitor analysis, and actionable recommendations." },
      { question: "Do you provide monthly reports?", answer: "Yes, I provide detailed monthly reports showing keyword rankings, traffic changes, and progress toward your goals." },
    ],
    pricing: [
      { label: "SEO Audit", basePrice: 300, unit: "audit" },
      { label: "Monthly SEO Package", basePrice: 400, unit: "month" },
      { label: "Content Strategy", basePrice: 250, unit: "strategy" },
      { label: "Local SEO Setup", basePrice: 200, unit: "setup" },
    ],
  },
  "api-development": {
    icon: Server,
    title: "API Development",
    desc: "Robust backend APIs with Node.js, Express, and PostgreSQL for your business logic.",
    longDesc: "I build scalable, secure backend APIs that power your applications. Using Node.js, Express, and modern database technologies, I create RESTful and GraphQL APIs with proper authentication and documentation.",
    benefits: ["RESTful & GraphQL APIs", "Secure authentication", "Rate limiting & caching", "Comprehensive documentation", "Database design", "Third-party integrations"],
    features: ["REST API Development", "GraphQL APIs", "Database Architecture", "Authentication Systems", "Payment Integration", "Cloud Deployment"],
    reviews: [
      { name: "Kevin O'Brien", role: "CTO, PayStream", rating: 5, text: "The payment API handles millions of transactions flawlessly. Security and performance are top-notch." },
      { name: "Sophia Lee", role: "Lead Developer, CloudSync", rating: 5, text: "Excellent API architecture. The documentation is clear and integration was seamless." },
      { name: "Alex Turner", role: "Founder, DataPipe", rating: 5, text: "Reliable, well-structured APIs. Rakibul's backend work has been the backbone of our platform." },
    ],
    faqs: [
      { question: "Do you write API documentation?", answer: "Yes, every API comes with comprehensive documentation using Swagger/OpenAPI, making it easy for frontend teams to integrate." },
      { question: "What databases do you work with?", answer: "I work with PostgreSQL, MongoDB, MySQL, and Redis. I choose the best database based on your project's specific needs." },
      { question: "Do you implement authentication?", answer: "Yes, I implement secure authentication using JWT, OAuth 2.0, and session-based auth depending on your requirements." },
      { question: "Can you integrate third-party APIs?", answer: "Absolutely. I have experience integrating payment gateways, email services, social logins, maps, and many other third-party services." },
    ],
    pricing: [
      { label: "REST API Endpoint", basePrice: 100, unit: "endpoint" },
      { label: "Authentication System", basePrice: 400, unit: "system" },
      { label: "Database Design", basePrice: 300, unit: "project" },
      { label: "Third-party Integration", basePrice: 200, unit: "integration" },
    ],
  },
  "full-stack-solutions": {
    icon: Code2,
    title: "Full-Stack Solutions",
    desc: "End-to-end development from database design to deployment and maintenance.",
    longDesc: "I provide complete end-to-end development services, handling everything from initial concept and database design to frontend development, deployment, and ongoing maintenance.",
    benefits: ["Complete project ownership", "CI/CD pipelines", "Cloud deployment", "Ongoing support", "Code review & optimization", "Scalable infrastructure"],
    features: ["Full-Stack Development", "DevOps & CI/CD", "Cloud Infrastructure", "Database Management", "Testing & QA", "Maintenance & Support"],
    reviews: [
      { name: "Rachel Green", role: "CEO, StartupLaunch", rating: 5, text: "Rakibul handled everything from design to deployment. Having one expert manage the full stack saved us time and money." },
      { name: "Daniel Brown", role: "CTO, EnterprisePro", rating: 5, text: "Outstanding full-stack work. The CI/CD pipeline and cloud setup have made our deployments effortless." },
      { name: "Maria Santos", role: "Founder, ShopEasy", rating: 5, text: "From database to frontend, everything works perfectly together. The ongoing support has been invaluable." },
    ],
    faqs: [
      { question: "What does full-stack include?", answer: "Full-stack covers frontend (React/Next.js), backend (Node.js/Express), database design, API development, deployment, and CI/CD pipeline setup." },
      { question: "Do you handle deployment?", answer: "Yes, I deploy to cloud platforms like AWS, Vercel, or DigitalOcean with proper CI/CD pipelines for automated deployments." },
      { question: "What about ongoing maintenance?", answer: "I offer monthly maintenance plans covering bug fixes, security patches, performance monitoring, and feature updates." },
      { question: "Can you work with my existing team?", answer: "Absolutely. I can integrate into your existing workflow, follow your coding standards, and collaborate with your team via Git." },
    ],
    pricing: [
      { label: "MVP Development", basePrice: 2000, unit: "project" },
      { label: "Additional Feature Module", basePrice: 500, unit: "module" },
      { label: "DevOps & CI/CD Setup", basePrice: 400, unit: "setup" },
      { label: "Monthly Maintenance", basePrice: 300, unit: "month" },
    ],
  },
};
