import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Coffee, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => {
  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Crafting Digital <span className="gradient-text">Experiences</span> That Matter
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Rakibul Alam, a passionate Web & Mobile App Developer with over 5 years of experience building high-performance digital products for startups and businesses worldwide.
                </p>
                <p>
                  My approach combines technical excellence with strategic thinking — I don't just build features, I build solutions that drive measurable business results. Every line of code I write is optimized for performance, accessibility, and user experience.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="hero" asChild>
                  <Link to="/contact">Let's Work Together <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button variant="hero-outline" asChild>
                  <a href="#">Download CV</a>
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
                { icon: Award, label: "5+ Years", sub: "Experience" },
                { icon: Users, label: "30+", sub: "Happy Clients" },
                { icon: Coffee, label: "50+", sub: "Projects Done" },
                { icon: Zap, label: "99%", sub: "Satisfaction" },
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
          <SectionHeading badge="Journey" title="My" highlight="Story" description="From curious coder to professional developer — here's how I got here." />
          <div className="max-w-2xl mx-auto space-y-8">
            {[
              { year: "2019", title: "Started Web Development", desc: "Began learning HTML, CSS, and JavaScript. Built my first websites for local businesses." },
              { year: "2020", title: "First Freelance Clients", desc: "Started freelancing and delivered 10+ projects. Learned React and modern tooling." },
              { year: "2021", title: "Mobile App Development", desc: "Expanded into React Native and built cross-platform mobile applications." },
              { year: "2022", title: "Full-Stack Mastery", desc: "Mastered backend technologies. Started working with startups on complex systems." },
              { year: "2024", title: "50+ Projects Delivered", desc: "Reached a milestone of 50+ successful projects with clients worldwide." },
            ].map((item, i) => (
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
