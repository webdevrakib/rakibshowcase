import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Coffee, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import LiveText from "@/components/LiveText";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => {
  const { t } = useLanguage();

  const journeyItems = [
    { year: "2019", title: t("journey.2019.title"), desc: t("journey.2019.desc") },
    { year: "2020", title: t("journey.2020.title"), desc: t("journey.2020.desc") },
    { year: "2021", title: t("journey.2021.title"), desc: t("journey.2021.desc") },
    { year: "2022", title: t("journey.2022.title"), desc: t("journey.2022.desc") },
    { year: "2024", title: t("journey.2024.title"), desc: t("journey.2024.desc") },
  ];

  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
                {t("about.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t("about.title")} <span className="gradient-text"><LiveText text={t("about.highlight")} type="pulse" /></span> {t("about.title_suffix")}
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="hero" asChild>
                  <Link to="/contact">{t("about.work_together")} <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button variant="hero-outline" asChild>
                  <a href="#">{t("about.download_cv")}</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { icon: Award, label: "5+", sub: t("stat.experience") },
                { icon: Users, label: "30+", sub: t("stat.clients") },
                { icon: Coffee, label: "50+", sub: t("stat.projects") },
                { icon: Zap, label: "99%", sub: t("stat.satisfaction") },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading badge={t("about.journey_badge")} title={t("about.my")} highlight={t("about.story")} liveHighlight description={t("about.journey_desc")} />
          <div className="max-w-2xl mx-auto space-y-8">
            {journeyItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0">
                    {item.year}
                  </div>
                  {i < 4 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
