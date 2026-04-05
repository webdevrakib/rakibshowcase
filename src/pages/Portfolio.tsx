import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "Web", "App", "UI/UX"];

const projects = [
  { title: "E-Commerce Platform", category: "Web", tech: ["React", "Node.js", "MongoDB", "Stripe"], desc: "Full-featured online store with real-time inventory management, payment processing, and admin dashboard.", image: null },
  { title: "Fitness Tracker App", category: "App", tech: ["React Native", "Firebase", "Redux"], desc: "Cross-platform mobile app with workout tracking, health analytics, and social features.", image: null },
  { title: "SaaS Dashboard", category: "Web", tech: ["Next.js", "Tailwind", "PostgreSQL", "Chart.js"], desc: "Real-time analytics dashboard with data visualization, user management, and reporting tools.", image: null },
  { title: "Restaurant Booking", category: "UI/UX", tech: ["Figma", "React", "Supabase"], desc: "Beautiful booking system with table management, push notifications, and review system.", image: null },
  { title: "Social Media App", category: "App", tech: ["React Native", "GraphQL", "AWS"], desc: "Feature-rich social platform with real-time messaging, stories, and content sharing.", image: null },
  { title: "Portfolio Builder", category: "Web", tech: ["Next.js", "Prisma", "Tailwind"], desc: "Drag-and-drop portfolio builder with custom templates and SEO optimization.", image: null },
  { title: "Travel Guide App", category: "App", tech: ["Flutter", "Firebase", "Google Maps"], desc: "Interactive travel companion with offline maps, itinerary planning, and local recommendations.", image: null },
  { title: "Design System", category: "UI/UX", tech: ["Figma", "Storybook", "React"], desc: "Comprehensive design system with 200+ components, tokens, and documentation.", image: null },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <SectionHeading
            badge="Portfolio"
            title="My"
            highlight="Work"
            description="A curated collection of projects that showcase my expertise across web, mobile, and design."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "gradient-bg text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:elevated-shadow transition-all duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                layout
              >
                <div className="h-44 gradient-bg opacity-80 flex items-center justify-center relative overflow-hidden">
                  <Code2 className="w-12 h-12 text-primary-foreground/30" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Like What You See?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let's create something amazing together. I'm always open to new opportunities and exciting projects.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start a Project <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
