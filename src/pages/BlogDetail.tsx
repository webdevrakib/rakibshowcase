import { useParams, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft, Clock, Tag, User, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: number;
  name: string;
  text: string;
  date: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const post = blogPosts.find((p) => p.slug === slug);

  const [comments, setComments] = useState<Comment[]>([
    { id: 1, name: "John Doe", text: "Great article! Really helped me understand the concepts better.", date: "2 days ago" },
    { id: 2, name: "Jane Smith", text: "Thanks for sharing this. Very well written and informative.", date: "1 day ago" },
  ]);
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  if (!post) return <Navigate to="/blog" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setComments((prev) => [
      ...prev,
      { id: Date.now(), name: name.trim(), text: commentText.trim(), date: "Just now" },
    ]);
    setName("");
    setCommentText("");
    toast({ title: "Comment posted!", description: "Thanks for your feedback." });
  };

  // Simple markdown-like rendering for ## headings and paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-lg font-semibold text-foreground mt-6 mb-2">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
            {items.map((item, j) => {
              const text = item.replace("- ", "");
              const boldMatch = text.match(/^\*\*(.*?)\*\*(.*)/);
              return (
                <li key={j}>
                  {boldMatch ? (
                    <>
                      <strong className="text-foreground">{boldMatch[1]}</strong>
                      {boldMatch[2]}
                    </>
                  ) : (
                    text
                  )}
                </li>
              );
            })}
          </ul>
        );
      }
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{post.tag}</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold font-display text-foreground mb-4">{post.title}</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent(post.content)}
          </motion.article>
        </div>
      </section>

      {/* Comments */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 mb-8">
            <MessageCircle className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Comments ({comments.length})</h2>
          </div>

          <div className="space-y-4 mb-8">
            {comments.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl border border-border bg-card"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm text-foreground">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{c.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Leave a Comment</h3>
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Textarea
              placeholder="Write your comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              rows={4}
            />
            <Button variant="hero" type="submit" className="gap-2">
              <Send className="w-4 h-4" /> Post Comment
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
