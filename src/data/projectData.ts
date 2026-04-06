export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  tech: string[];
  desc: string;
  fullDesc: string;
  startDate: string;
  endDate: string;
  client: {
    name: string;
    company: string;
    industry: string;
    location: string;
  };
  satisfaction: number; // 1-100
  review: string;
  features: string[];
  challenge: string;
  solution: string;
  impact: string[];
}

export const projectData: Record<string, ProjectDetail> = {
  "e-commerce-platform": {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    desc: "Full-featured online store with real-time inventory management, payment processing, and admin dashboard.",
    fullDesc: "A comprehensive e-commerce solution built from the ground up, featuring real-time inventory tracking, secure payment processing via Stripe, an intuitive admin dashboard for order management, and a responsive storefront optimized for conversions.",
    startDate: "2024-01-15",
    endDate: "2024-04-20",
    client: { name: "Sarah Chen", company: "TechStart Inc.", industry: "Retail / E-Commerce", location: "San Francisco, USA" },
    satisfaction: 98,
    review: "Rakibul delivered our platform ahead of schedule. The quality exceeded our expectations and our conversion rates doubled within the first month.",
    features: ["Real-time inventory management", "Stripe payment integration", "Admin dashboard with analytics", "Customer review system", "Wishlist & cart functionality", "Order tracking system"],
    challenge: "The client needed a scalable platform that could handle 10,000+ products with real-time stock updates across multiple warehouses.",
    solution: "Built a microservices architecture with WebSocket connections for live inventory sync, Redis caching for performance, and a custom admin panel for centralized management.",
    impact: ["200% increase in online sales", "50% reduction in order processing time", "99.9% uptime achieved", "4.8/5 average customer rating"],
  },
  "fitness-tracker-app": {
    slug: "fitness-tracker-app",
    title: "Fitness Tracker App",
    category: "App",
    tech: ["React Native", "Firebase", "Redux"],
    desc: "Cross-platform mobile app with workout tracking, health analytics, and social features.",
    fullDesc: "A feature-rich fitness application that helps users track workouts, monitor health metrics, set goals, and connect with a community of fitness enthusiasts. Available on both iOS and Android.",
    startDate: "2023-09-01",
    endDate: "2024-01-10",
    client: { name: "James Wilson", company: "AppFlow Fitness", industry: "Health & Fitness", location: "London, UK" },
    satisfaction: 95,
    review: "Exceptional work on our mobile app. Rakibul's attention to detail and communication made the entire development process seamless and enjoyable.",
    features: ["Workout logging & history", "Health metrics dashboard", "Social feed & challenges", "Push notifications", "Offline mode support", "Wearable device integration"],
    challenge: "Creating a smooth, native-like experience on both platforms while integrating with multiple health device APIs and maintaining offline functionality.",
    solution: "Leveraged React Native with custom native modules for device integration, implemented offline-first architecture with Firebase sync, and built a performant UI with 60fps animations.",
    impact: ["50,000+ downloads in first 3 months", "4.7 star rating on App Store", "35% daily active user retention", "Featured in App Store Health category"],
  },
  "saas-dashboard": {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    category: "Web",
    tech: ["Next.js", "Tailwind", "PostgreSQL", "Chart.js"],
    desc: "Real-time analytics dashboard with data visualization, user management, and reporting tools.",
    fullDesc: "An enterprise-grade analytics dashboard providing real-time data visualization, comprehensive user management, automated reporting, and role-based access control for SaaS businesses.",
    startDate: "2024-03-01",
    endDate: "2024-06-15",
    client: { name: "David Park", company: "DataMetrics Co.", industry: "SaaS / Analytics", location: "Toronto, Canada" },
    satisfaction: 97,
    review: "The dashboard transformed how we analyze data. Rakibul understood our complex requirements and delivered a solution that our entire team loves using daily.",
    features: ["Real-time data visualization", "Custom report builder", "Role-based access control", "Automated email reports", "Data export (CSV, PDF)", "API integration hub"],
    challenge: "Processing and visualizing millions of data points in real-time while maintaining sub-second response times and supporting concurrent users.",
    solution: "Implemented server-side rendering with Next.js for fast initial loads, WebSocket connections for live data, PostgreSQL with optimized queries, and Chart.js with canvas rendering for smooth visualizations.",
    impact: ["80% faster report generation", "3x improvement in data processing speed", "40% increase in team productivity", "Zero downtime since launch"],
  },
  "restaurant-booking": {
    slug: "restaurant-booking",
    title: "Restaurant Booking",
    category: "UI/UX",
    tech: ["Figma", "React", "Supabase"],
    desc: "Beautiful booking system with table management, push notifications, and review system.",
    fullDesc: "A modern restaurant booking platform with an elegant UI, smart table management, automated reminders, and an integrated review system that helps restaurants maximize their seating capacity.",
    startDate: "2023-11-10",
    endDate: "2024-02-28",
    client: { name: "Maria Garcia", company: "DineEasy", industry: "Food & Hospitality", location: "Barcelona, Spain" },
    satisfaction: 96,
    review: "Our website redesign resulted in a 150% increase in bookings. Rakibul truly understands conversion-focused design and delivered beyond our expectations.",
    features: ["Smart table management", "Automated booking reminders", "Customer review system", "Menu showcase", "Multi-language support", "Analytics dashboard"],
    challenge: "Designing an intuitive booking flow that reduces abandonment while giving restaurant owners powerful management tools without complexity.",
    solution: "Conducted extensive UX research, created a 3-step booking flow with smart defaults, built a drag-and-drop table layout editor, and implemented real-time availability updates.",
    impact: ["150% increase in online bookings", "60% reduction in no-shows", "4.9/5 user satisfaction score", "Expanded to 50+ restaurants"],
  },
  "social-media-app": {
    slug: "social-media-app",
    title: "Social Media App",
    category: "App",
    tech: ["React Native", "GraphQL", "AWS"],
    desc: "Feature-rich social platform with real-time messaging, stories, and content sharing.",
    fullDesc: "A next-generation social media application with real-time messaging, ephemeral stories, content sharing, and AI-powered content recommendations, built for scalability and engagement.",
    startDate: "2024-02-01",
    endDate: "2024-07-30",
    client: { name: "Alex Thompson", company: "ConnectHub", industry: "Social Media", location: "New York, USA" },
    satisfaction: 94,
    review: "Rakibul built a complex social platform that handles millions of interactions smoothly. His technical expertise and problem-solving skills are outstanding.",
    features: ["Real-time messaging", "Stories & reels", "Content feed algorithm", "Push notifications", "Media upload & processing", "User verification system"],
    challenge: "Building a scalable social platform that could handle millions of concurrent users with real-time features while keeping infrastructure costs manageable.",
    solution: "Architected with AWS serverless stack, GraphQL subscriptions for real-time features, CDN-based media delivery, and intelligent caching strategies to optimize costs.",
    impact: ["100,000+ users in 6 months", "Average 25 min daily session time", "99.95% uptime", "40% lower infrastructure costs than projected"],
  },
  "portfolio-builder": {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    category: "Web",
    tech: ["Next.js", "Prisma", "Tailwind"],
    desc: "Drag-and-drop portfolio builder with custom templates and SEO optimization.",
    fullDesc: "A no-code portfolio builder that empowers creatives to build stunning portfolios with drag-and-drop simplicity, custom templates, and built-in SEO tools for maximum visibility.",
    startDate: "2024-05-01",
    endDate: "2024-08-15",
    client: { name: "Emma Roberts", company: "CreativeStack", industry: "Creative Tools", location: "Melbourne, Australia" },
    satisfaction: 93,
    review: "The portfolio builder is exactly what our creative community needed. Intuitive, beautiful, and powerful — Rakibul nailed every aspect of the project.",
    features: ["Drag-and-drop editor", "20+ custom templates", "Built-in SEO tools", "Custom domain support", "Analytics dashboard", "Responsive preview"],
    challenge: "Creating a flexible drag-and-drop editor that produces clean, semantic HTML while being intuitive enough for non-technical users.",
    solution: "Built a custom block editor with React DnD, server-side rendering for SEO, a template engine with Handlebars, and an automated SEO scoring system.",
    impact: ["10,000+ portfolios created", "85% user retention rate", "Average 4.6/5 template rating", "Featured on Product Hunt"],
  },
  "travel-guide-app": {
    slug: "travel-guide-app",
    title: "Travel Guide App",
    category: "App",
    tech: ["Flutter", "Firebase", "Google Maps"],
    desc: "Interactive travel companion with offline maps, itinerary planning, and local recommendations.",
    fullDesc: "An all-in-one travel companion app featuring offline maps, smart itinerary planning, local recommendations powered by AI, and a community-driven review system for authentic travel experiences.",
    startDate: "2023-06-15",
    endDate: "2023-11-30",
    client: { name: "Carlos Mendez", company: "WanderWise", industry: "Travel & Tourism", location: "Mexico City, Mexico" },
    satisfaction: 92,
    review: "The travel app exceeded our vision. Rakibul's ability to integrate complex mapping features with a beautiful UI made WanderWise a must-have for travelers.",
    features: ["Offline maps & navigation", "AI-powered recommendations", "Itinerary builder", "Community reviews", "Currency converter", "Language translator"],
    challenge: "Providing rich mapping and recommendation features that work seamlessly offline while keeping the app size manageable for travelers with limited storage.",
    solution: "Implemented efficient map tile caching, on-device ML models for recommendations, delta-sync for content updates, and aggressive asset compression to keep the app under 50MB.",
    impact: ["200,000+ downloads globally", "Used in 80+ countries", "4.8 star rating on Google Play", "Partnership with 500+ local guides"],
  },
  "design-system": {
    slug: "design-system",
    title: "Design System",
    category: "UI/UX",
    tech: ["Figma", "Storybook", "React"],
    desc: "Comprehensive design system with 200+ components, tokens, and documentation.",
    fullDesc: "A enterprise-scale design system featuring 200+ reusable components, design tokens, comprehensive documentation, and automated accessibility testing — ensuring brand consistency across all products.",
    startDate: "2024-04-01",
    endDate: "2024-09-30",
    client: { name: "Lisa Wang", company: "ScaleUp Tech", industry: "Enterprise Software", location: "Singapore" },
    satisfaction: 99,
    review: "This design system has been transformative for our organization. Development speed increased dramatically and our products finally have a consistent, polished look.",
    features: ["200+ React components", "Design tokens system", "Storybook documentation", "Accessibility testing", "Figma component library", "Theme customization"],
    challenge: "Creating a design system that serves 12 product teams with different needs while maintaining strict consistency and accessibility standards.",
    solution: "Built a token-based architecture with CSS custom properties, compound components for flexibility, automated a11y testing with axe-core, and created a governance process for contributions.",
    impact: ["60% faster UI development", "100% WCAG 2.1 AA compliance", "Adopted by all 12 product teams", "90% reduction in design inconsistencies"],
  },
};

export const getProjectBySlug = (slug: string): ProjectDetail | undefined => {
  return projectData[slug];
};

export const getAllProjects = (): ProjectDetail[] => {
  return Object.values(projectData);
};
