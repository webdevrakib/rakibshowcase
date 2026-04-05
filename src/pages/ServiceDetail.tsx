import { useParams, Link, Navigate } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Quote } from "lucide-react";
import { Globe, Smartphone, Palette, Search, Server, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const serviceData: Record<string, {
  icon: any;
  title: string;
  desc: string;
  longDesc: string;
  benefits: string[];
  features: string[];
  reviews: { name: string; role: string; rating: number; text: string }[];
}> = {
  "web-development": {
    icon: Globe,
    title: "Web Development",
    desc: "Custom websites and web applications built with React, Next.js, and modern frameworks.",
    longDesc: "I build high-performance, scalable web applications using cutting-edge technologies. From single-page applications to complex enterprise platforms, every project is crafted with clean code, optimized performance, and SEO best practices. Whether you need an e-commerce store, a SaaS dashboard, or a corporate website — I deliver pixel-perfect results that convert visitors into customers.",
    benefits: ["Lightning-fast performance", "SEO optimized structure", "Mobile responsive design", "Scalable architecture", "Cross-browser compatibility", "Accessibility compliant"],
    features: ["React / Next.js Development", "Custom CMS Integration", "E-commerce Solutions", "Progressive Web Apps (PWA)", "API Integration", "Performance Optimization"],
    reviews: [
      { name: "Sarah Johnson", role: "CEO, TechStart Inc.", rating: 5, text: "Rakibul built our entire web platform from scratch. The performance improvements were incredible — 40% faster load times and a 25% increase in conversions." },
      { name: "Michael Chen", role: "Founder, DataFlow", rating: 5, text: "Exceptional work on our SaaS dashboard. Clean code, great communication, and delivered ahead of schedule. Highly recommended!" },
      { name: "Emily Rodriguez", role: "Marketing Director, GrowthHub", rating: 5, text: "Our new website looks stunning and performs beautifully. The SEO optimization has already boosted our organic traffic by 60%." },
    ],
  },
  "mobile-apps": {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with React Native that feel native on both iOS and Android.",
    longDesc: "I create beautiful, high-performance mobile applications using React Native that work seamlessly on both iOS and Android. From concept to deployment on app stores, I handle the entire development lifecycle. Each app is built with smooth animations, offline capabilities, and native device integrations to deliver the best user experience.",
    benefits: ["Cross-platform development", "Native-like performance", "Push notifications", "Offline capability", "App Store deployment", "Real-time updates"],
    features: ["React Native Development", "iOS & Android Apps", "Push Notification Systems", "In-App Purchases", "Social Media Integration", "Location-Based Services"],
    reviews: [
      { name: "David Park", role: "CTO, FitTrack", rating: 5, text: "Our fitness app reached 50K downloads in the first month. Rakibul's attention to UX detail made all the difference." },
      { name: "Aisha Bello", role: "Founder, QuickDeliver", rating: 5, text: "The delivery app works flawlessly on both platforms. Real-time tracking and push notifications work perfectly." },
      { name: "James Wilson", role: "Product Manager, EduLearn", rating: 4, text: "Great mobile app development. The offline learning feature was exactly what our users needed." },
    ],
  },
  "ui-ux-design": {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered interface designs that convert visitors into customers.",
    longDesc: "I design intuitive, visually stunning interfaces that prioritize user experience and drive conversions. Using research-driven design methodologies, I create wireframes, prototypes, and final designs that align with your brand identity. Every design decision is backed by data and user behavior analysis to maximize engagement and satisfaction.",
    benefits: ["Conversion-focused design", "User research driven", "Accessibility compliant", "Brand consistent", "Responsive layouts", "Interactive prototypes"],
    features: ["UI Design Systems", "UX Research & Testing", "Wireframing & Prototyping", "Design System Creation", "Responsive Design", "Brand Identity Design"],
    reviews: [
      { name: "Lisa Wang", role: "CEO, StyleBox", rating: 5, text: "The redesign increased our conversion rate by 35%. Rakibul truly understands how design impacts business results." },
      { name: "Tom Harris", role: "Founder, FinanceApp", rating: 5, text: "Clean, professional designs that our users love. The onboarding flow redesign reduced drop-offs by 50%." },
      { name: "Nina Patel", role: "Head of Product, HealthPlus", rating: 5, text: "Incredible design work. The new dashboard is both beautiful and highly functional." },
    ],
  },
  "seo-optimization": {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies that boost your search rankings and organic traffic.",
    longDesc: "I implement comprehensive SEO strategies that drive measurable results. From technical SEO audits to content optimization and link building strategies, I help businesses increase their organic visibility and attract qualified traffic. Every strategy is data-driven and tailored to your specific industry and target audience.",
    benefits: ["Technical SEO audits", "Content strategy", "Performance optimization", "Analytics & reporting", "Keyword research", "Competitor analysis"],
    features: ["On-Page SEO", "Technical SEO Fixes", "Content Strategy", "Link Building", "Local SEO", "SEO Analytics & Reporting"],
    reviews: [
      { name: "Robert Kim", role: "Owner, LocalBiz Pro", rating: 5, text: "Our organic traffic increased by 200% in 6 months. Rakibul's SEO strategy completely transformed our online presence." },
      { name: "Amanda Foster", role: "Marketing Lead, TravelNow", rating: 5, text: "We went from page 5 to page 1 for our main keywords. The ROI has been incredible." },
      { name: "Carlos Mendez", role: "CEO, FreshEats", rating: 4, text: "Great SEO work. Our local search visibility improved dramatically and we're getting more walk-in customers." },
    ],
  },
  "api-development": {
    icon: Server,
    title: "API Development",
    desc: "Robust backend APIs with Node.js, Express, and PostgreSQL for your business logic.",
    longDesc: "I build scalable, secure backend APIs that power your applications. Using Node.js, Express, and modern database technologies, I create RESTful and GraphQL APIs with proper authentication, rate limiting, and comprehensive documentation. Every API is designed for performance, security, and easy maintenance.",
    benefits: ["RESTful & GraphQL APIs", "Secure authentication", "Rate limiting & caching", "Comprehensive documentation", "Database design", "Third-party integrations"],
    features: ["REST API Development", "GraphQL APIs", "Database Architecture", "Authentication Systems", "Payment Integration", "Cloud Deployment"],
    reviews: [
      { name: "Kevin O'Brien", role: "CTO, PayStream", rating: 5, text: "The payment API handles millions of transactions flawlessly. Security and performance are top-notch." },
      { name: "Sophia Lee", role: "Lead Developer, CloudSync", rating: 5, text: "Excellent API architecture. The documentation is clear and integration was seamless for our frontend team." },
      { name: "Alex Turner", role: "Founder, DataPipe", rating: 5, text: "Reliable, well-structured APIs. Rakibul's backend work has been the backbone of our platform." },
    ],
  },
  "full-stack-solutions": {
    icon: Code2,
    title: "Full-Stack Solutions",
    desc: "End-to-end development from database design to deployment and maintenance.",
    longDesc: "I provide complete end-to-end development services, handling everything from initial concept and database design to frontend development, deployment, and ongoing maintenance. This holistic approach ensures consistency, quality, and efficiency across your entire technology stack. You get a single point of contact for your entire project.",
    benefits: ["Complete project ownership", "CI/CD pipelines", "Cloud deployment", "Ongoing support", "Code review & optimization", "Scalable infrastructure"],
    features: ["Full-Stack Development", "DevOps & CI/CD", "Cloud Infrastructure", "Database Management", "Testing & QA", "Maintenance & Support"],
    reviews: [
      { name: "Rachel Green", role: "CEO, StartupLaunch", rating: 5, text: "Rakibul handled everything from design to deployment. Having one expert manage the full stack saved us time and money." },
      { name: "Daniel Brown", role: "CTO, EnterprisePro", rating: 5, text: "Outstanding full-stack work. The CI/CD pipeline and cloud setup have made our deployments effortless." },
      { name: "Maria Santos", role: "Founder, ShopEasy", rating: 5, text: "From database to frontend, everything works perfectly together. The ongoing support has been invaluable." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !serviceData[slug]) {
    return <Navigate to="/services" replace />;
  }

  const service = serviceData[slug];
  const Icon = service.icon;

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.longDesc}</p>
          </div>
        </div>
      </section>

      {/* Benefits & Features */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <h2 className="text-2xl font-bold text-foreground mb-6">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <div key={i} className="p-4 rounded-xl border border-border bg-card">
                    <span className="text-sm font-medium text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading badge="Reviews" title="What Clients" highlight="Say" description={`Real feedback from clients who used my ${service.title.toLowerCase()} services.`} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.reviews.map((review, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl border border-border bg-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{review.text}</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
                <p className="font-semibold text-foreground text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Start Today</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Ready to take your project to the next level? Let's discuss how I can help you achieve your goals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get In Touch <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
