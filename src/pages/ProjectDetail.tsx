import { useParams, Link, useNavigate } from "react-router-dom";
import { getProjectBySlug, getAllProjects } from "@/data/projectData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Building2, User, Star, CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button variant="hero" asChild>
            <Link to="/portfolio"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio</Link>
          </Button>
        </div>
      </main>
    );
  }

  const satisfactionColor = project.satisfaction >= 95 ? "text-green-500" : project.satisfaction >= 85 ? "text-yellow-500" : "text-orange-500";

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <Link to="/portfolio" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{project.category}</span>
            {project.tech.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-full text-xs font-mono bg-muted text-muted-foreground">{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{project.fullDesc}</p>
        </div>
      </section>

      {/* Timeline & Client Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Timeline */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
              className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" /> Project Timeline
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Start Date</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(project.startDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
                <div className="flex-1 text-right">
                  <p className="text-xs text-muted-foreground mb-1">End Date</p>
                  <p className="text-sm font-medium text-foreground">
                    {new Date(project.endDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="text-sm font-medium text-foreground">
                  {Math.ceil((new Date(project.endDate).getTime() - new Date(project.startDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} months
                </p>
              </div>
            </motion.div>

            {/* Client Info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" /> Client Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Client Name</p>
                    <p className="text-sm font-medium text-foreground">{project.client.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Company / Industry</p>
                    <p className="text-sm font-medium text-foreground">{project.client.company} — {project.client.industry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-medium text-foreground">{project.client.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-foreground mb-6">Client Satisfaction</h3>
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" className="stroke-muted" />
                <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" strokeLinecap="round"
                  className="stroke-primary" strokeDasharray={`${(project.satisfaction / 100) * 327} 327`} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-3xl font-bold ${satisfactionColor}`}>{project.satisfaction}%</span>
              </div>
            </div>
            <div className="flex justify-center gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`w-5 h-5 ${s <= Math.round(project.satisfaction / 20) ? "text-yellow-400 fill-yellow-400" : "text-muted"}`} />
              ))}
            </div>
            <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
              "{project.review}"
            </blockquote>
            <p className="mt-3 text-sm font-medium text-foreground">{project.client.name}, {project.client.company}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading badge="Features" title="Key" highlight="Features" description="What was delivered in this project." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {project.features.map((f, i) => (
              <motion.div key={f} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeading badge="Case Study" title="The" highlight="Story" description="Challenge, solution, and impact." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Target, title: "The Challenge", text: project.challenge },
              { icon: Lightbulb, title: "The Solution", text: project.solution },
            ].map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="p-6 rounded-2xl border border-border bg-card">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              className="p-6 rounded-2xl border border-border bg-card">
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-3">The Impact</h4>
              <ul className="space-y-2">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading badge="Related" title="Similar" highlight="Projects" description="Explore more projects in the same category." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {getAllProjects()
              .filter((p) => p.category === project.category && p.slug !== project.slug)
              .slice(0, 3)
              .map((p, i) => (
                <motion.div
                  key={p.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group rounded-2xl border border-border bg-card overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => navigate(`/portfolio/${p.slug}`)}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{p.category}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full text-xs font-mono bg-muted text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          {getAllProjects().filter((p) => p.category === project.category && p.slug !== project.slug).length === 0 && (
            <p className="text-center text-muted-foreground mt-4">No related projects found in this category.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Interested in a Similar Project?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">Let's discuss how I can help bring your idea to life.</p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
