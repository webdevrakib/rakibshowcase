import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const posts = [
  {
    title: "Why React is Still the Best Choice for Web Apps in 2024",
    excerpt: "A comprehensive look at React's ecosystem, performance, and why it continues to dominate the frontend landscape.",
    date: "Mar 15, 2024",
    tag: "React",
    readTime: "5 min read",
  },
  {
    title: "Building Cross-Platform Apps with React Native",
    excerpt: "How to leverage React Native to build performant mobile apps that feel native on both iOS and Android.",
    date: "Feb 28, 2024",
    tag: "Mobile",
    readTime: "7 min read",
  },
  {
    title: "The Ultimate Guide to Technical SEO for Developers",
    excerpt: "Everything developers need to know about optimizing their websites for search engines.",
    date: "Feb 10, 2024",
    tag: "SEO",
    readTime: "8 min read",
  },
  {
    title: "Tailwind CSS Tips That Will Boost Your Productivity",
    excerpt: "Advanced Tailwind techniques and patterns that will make your development workflow faster.",
    date: "Jan 25, 2024",
    tag: "CSS",
    readTime: "4 min read",
  },
  {
    title: "How I Increased Client Conversions by 200%",
    excerpt: "A case study on conversion-focused web design and the strategies that made a real difference.",
    date: "Jan 12, 2024",
    tag: "Case Study",
    readTime: "6 min read",
  },
  {
    title: "API Design Best Practices for 2024",
    excerpt: "Modern API design patterns including REST, GraphQL, and tRPC — when to use what.",
    date: "Dec 28, 2023",
    tag: "Backend",
    readTime: "9 min read",
  },
];

const Blog = () => {
  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <SectionHeading
            badge="Blog"
            title="Insights &"
            highlight="Articles"
            description="Thoughts on development, design, and building products that matter."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:elevated-shadow transition-all duration-300"
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
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
