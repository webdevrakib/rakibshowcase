import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code2, Smartphone, Globe, Palette, Search, Server, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites and web apps built with modern frameworks for speed and scalability." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile applications with native performance and sleek UI." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered designs that convert visitors into customers." },
  { icon: Search, title: "SEO Optimization", desc: "Data-driven SEO strategies to boost your online visibility." },
  { icon: Server, title: "API Development", desc: "Robust RESTful and GraphQL APIs powering your business logic." },
  { icon: Code2, title: "Full-Stack Solutions", desc: "End-to-end development from database to deployment." },
];

const projects = [
  { title: "E-Commerce Platform", slug: "e-commerce-platform", category: "Web", tech: ["React", "Node.js", "MongoDB"], desc: "A full-featured online store with real-time inventory and payment processing." },
  { title: "Fitness Tracker App", slug: "fitness-tracker-app", category: "App", tech: ["React Native", "Firebase"], desc: "Cross-platform mobile app with workout tracking and health analytics." },
  { title: "SaaS Dashboard", slug: "saas-dashboard", category: "Web", tech: ["Next.js", "Tailwind", "PostgreSQL"], desc: "Analytics dashboard with real-time data visualization and reporting." },
  { title: "Restaurant Booking", slug: "restaurant-booking", category: "UI/UX", tech: ["Figma", "React", "Supabase"], desc: "Beautiful booking system with table management and notifications." },
];

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechStart", text: "Rakibul delivered our platform ahead of schedule. The quality exceeded our expectations and our conversion rates doubled.", rating: 5 },
  { name: "James Wilson", role: "Founder, AppFlow", text: "Exceptional work on our mobile app. Rakibul's attention to detail and communication made the process seamless.", rating: 5 },
  { name: "Maria Garcia", role: "Marketing Director", text: "Our website redesign resulted in a 150% increase in leads. Rakibul truly understands conversion-focused design.", rating: 5 },
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "React Native", level: 88 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "PostgreSQL / MongoDB", level: 85 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-6">
                <span className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Rakibul Alam</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Web & Mobile App Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I build high-performance digital products that help businesses grow. 
              From concept to deployment, I deliver solutions that convert.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start a Project <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#portfolio">
                  View My Work
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            badge="Services"
            title="What I"
            highlight="Offer"
            description="End-to-end development services designed to help your business succeed in the digital landscape."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:glow-shadow transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            badge="Portfolio"
            title="Featured"
            highlight="Projects"
            description="A selection of my recent work that showcases my skills and expertise."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:elevated-shadow transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="h-48 gradient-bg opacity-80 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-primary-foreground/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero-outline" asChild>
              <Link to="/portfolio">View All Projects <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            badge="Skills"
            title="My"
            highlight="Expertise"
            description="Technologies and tools I use to bring ideas to life."
          />
          <div className="max-w-2xl mx-auto grid gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm font-mono text-primary">{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full gradient-bg"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading
            badge="Testimonials"
            title="What Clients"
            highlight="Say"
            description="Don't just take my word for it — hear from the people I've worked with."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="p-6 rounded-2xl border border-border bg-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="relative rounded-3xl gradient-bg p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Let's Build Something Amazing
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Ready to turn your idea into reality? Let's discuss your project and make it happen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Start a Project <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <a href="https://wa.me/8801764740380" target="_blank" rel="noopener noreferrer">
                    WhatsApp Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
