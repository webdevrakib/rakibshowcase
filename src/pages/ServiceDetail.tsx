import { useParams, Link, Navigate } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ServiceCostCalculator from "@/components/ServiceCostCalculator";
import ServicePricingPackages from "@/components/ServicePricingPackages";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star, Quote } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { serviceData } from "@/data/serviceData";
import LiveText from "@/components/LiveText";
import PulseButton from "@/components/PulseButton";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

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
              <LiveText text={service.title} type="pulse" />
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
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("servicedetail.benefits")}</h2>
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
              <h2 className="text-2xl font-bold text-foreground mb-6">{t("servicedetail.included")}</h2>
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

      {/* Pricing Packages */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading badge={t("servicedetail.pricing.badge")} title={t("servicedetail.pricing.title")} highlight={t("servicedetail.pricing.highlight")} description={`Select the perfect package for your ${service.title.toLowerCase()} needs.`} />
          <ServicePricingPackages packages={service.packages} serviceTitle={service.title} />
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="section-padding">
        <div className="container max-w-2xl">
          <ServiceCostCalculator pricing={service.pricing} serviceTitle={service.title} />
        </div>
      </section>

      {/* Client Reviews */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading badge={t("servicedetail.reviews.badge")} title={t("servicedetail.reviews.title")} highlight={t("servicedetail.reviews.highlight")} liveHighlight description={`Real feedback from clients who used my ${service.title.toLowerCase()} services.`} />
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

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <SectionHeading badge={t("servicedetail.faq.badge")} title={t("servicedetail.faq.title")} highlight={t("servicedetail.faq.highlight")} liveHighlight description={`Common questions about my ${service.title.toLowerCase()} services.`} />
          <Accordion type="single" collapsible className="space-y-3">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("servicedetail.cta.title_1")} <span className="gradient-text">{t("servicedetail.cta.highlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            {t("servicedetail.cta.desc")}
          </p>
          <PulseButton>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact"><LiveText text={t("contact.get_in_touch")} type="glow" /> <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </PulseButton>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
