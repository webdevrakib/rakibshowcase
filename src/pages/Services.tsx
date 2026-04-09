import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Palette, Search, Server, Code2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import LiveText from "@/components/LiveText";
import PulseButton from "@/components/PulseButton";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Services = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t("service.web"),
      slug: "web-development",
      desc: "Custom websites and web applications built with React, Next.js, and modern frameworks. Optimized for speed and SEO.",
      benefits: ["Lightning-fast performance", "SEO optimized", "Mobile responsive", "Scalable architecture"],
    },
    {
      icon: Smartphone,
      title: t("service.mobile"),
      slug: "mobile-apps",
      desc: "Cross-platform mobile apps with React Native that feel native on both iOS and Android.",
      benefits: ["Cross-platform", "Native performance", "Push notifications", "Offline capability"],
    },
    {
      icon: Palette,
      title: t("service.uiux"),
      slug: "ui-ux-design",
      desc: "User-centered interface designs that convert visitors into customers with intuitive flows.",
      benefits: ["Conversion focused", "User research driven", "Accessibility compliant", "Brand consistent"],
    },
    {
      icon: Search,
      title: t("service.seo"),
      slug: "seo-optimization",
      desc: "Data-driven SEO strategies that boost your search rankings and organic traffic.",
      benefits: ["Technical SEO", "Content strategy", "Performance optimization", "Analytics setup"],
    },
    {
      icon: Server,
      title: t("service.api"),
      slug: "api-development",
      desc: "Robust backend APIs with Node.js, Express, and PostgreSQL for your business logic.",
      benefits: ["RESTful & GraphQL", "Secure authentication", "Rate limiting", "Documentation"],
    },
    {
      icon: Code2,
      title: t("service.fullstack"),
      slug: "full-stack-solutions",
      desc: "End-to-end development from database design to deployment and maintenance.",
      benefits: ["Complete ownership", "CI/CD pipelines", "Cloud deployment", "Ongoing support"],
    },
  ];

  const processSteps = [
    { step: "01", title: t("process.discovery"), desc: t("process.discovery.desc") },
    { step: "02", title: t("process.planning"), desc: t("process.planning.desc") },
    { step: "03", title: t("process.development"), desc: t("process.development.desc") },
    { step: "04", title: t("process.launch"), desc: t("process.launch.desc") },
  ];

  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <SectionHeading
            badge={t("services.badge")}
            title={t("services.page.title")}
            highlight={t("services.page.highlight")}
            liveHighlight
            description={t("services.page.desc")}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:glow-shadow transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/services/${service.slug}`)}
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
          <SectionHeading badge={t("services.process.badge")} title={t("services.process.title")} highlight={t("services.process.highlight")} description={t("services.process.desc")} />
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
            {t("services.cta.title")} <span className="gradient-text">{t("services.cta.highlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            {t("services.cta.desc")}
          </p>
          <PulseButton>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact"><LiveText text={t("hero.start")} type="glow" /> <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </PulseButton>
        </div>
      </section>
    </main>
  );
};

export default Services;
