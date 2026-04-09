import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogData";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Blog = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <SectionHeading
            badge={t("blog.badge")}
            title={t("blog.title")}
            highlight={t("blog.highlight")}
            description={t("blog.desc")}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <motion.article
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:elevated-shadow transition-all duration-300 h-full"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <div className="h-44 gradient-bg opacity-60 flex items-center justify-center">
                    <Tag className="w-10 h-10 text-primary-foreground/30" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {post.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-4">
                      {t("blog.read_more")} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
