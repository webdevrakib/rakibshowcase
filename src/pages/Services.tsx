import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Palette, Search, Server, Code2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    icon: Globe,
    title: "Web Development",
    slug: "web-development",
    desc: "Custom websites and web applications built with React, Next.js, and modern frameworks. Optimized for speed and SEO.",
    benefits: ["Lightning-fast performance", "SEO optimized", "Mobile responsive", "Scalable architecture"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-apps",
    desc: "Cross-platform mobile apps with React Native that feel native on both iOS and Android.",
    benefits: ["Cross-platform", "Native performance", "Push notifications", "Offline capability"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    desc: "User-centered interface designs that convert visitors into customers with intuitive flows.",
    benefits: ["Conversion focused", "User research driven", "Accessibility compliant", "Brand consistent"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    slug: "seo-optimization",
    desc: "Data-driven SEO strategies that boost your search rankings and organic traffic.",
    benefits: ["Technical SEO", "Content strategy", "Performance optimization", "Analytics setup"],
  },
  {
    icon: Server,
    title: "API Development",
    slug: "api-development",
    desc: "Robust backend APIs with Node.js, Express, and PostgreSQL for your business logic.",
    benefits: ["RESTful & GraphQL", "Secure authentication", "Rate limiting", "Documentation"],
  },
  {
    icon: Code2,
    title: "Full-Stack Solutions",
    slug: "full-stack-solutions",
    desc: "End-to-end development from database design to deployment and maintenance.",
    benefits: ["Complete ownership", "CI/CD pipelines", "Cloud deployment", "Ongoing support"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and requirements through in-depth consultation." },
  { step: "02", title: "Planning", desc: "Creating wireframes, technical architecture, and a detailed project roadmap." },
  { step: "03", title: "Development", desc: "Building your product with clean code, regular updates, and milestone reviews." },
  { step: "04", title: "Launch & Support", desc: "Deploying, testing, and providing ongoing maintenance and optimization." },
];

const Services = () => {
  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <SectionHeading
            badge="Services"
            title="Solutions That"
            highlight="Deliver Results"
            description="Comprehensive development services tailored to your business needs. From concept to launch, I handle it all."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:glow-shadow transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading badge="Process" title="How I" highlight="Work" description="A proven 4-step process that ensures quality delivery every time." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                className="relative p-6 rounded-2xl border border-border bg-card text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="text-5xl font-bold gradient-text mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start a Project <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
