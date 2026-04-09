import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import PulseButton from "@/components/PulseButton";
import LiveText from "@/components/LiveText";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "I'll get back to you within 24 hours." });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="pt-20">
      <section className="section-padding" style={{ background: "var(--gradient-hero)" }}>
        <div className="container">
          <SectionHeading
            badge={t("contact.badge")}
            title={t("contact.title")}
            highlight={t("contact.highlight")}
            description={t("contact.desc")}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t("contact.get_in_touch")}</h3>
              <p className="text-muted-foreground mb-8">{t("contact.reach_out")}</p>

              <div className="space-y-6">
                <a href="mailto:perfactrakib@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t("contact.email")}</p>
                    <p className="text-sm text-muted-foreground">perfactrakib@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/8801764740380" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+880 1764740380</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t("contact.location")}</p>
                    <p className="text-sm text-muted-foreground">{t("contact.bangladesh")}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl border border-border bg-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">{t("contact.send_message")}</h3>
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.name")}</label>
                  <Input
                    placeholder={t("contact.name.placeholder")}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email")}</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message")}</label>
                  <Textarea
                    placeholder={t("contact.message.placeholder")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    maxLength={1000}
                  />
                </div>
                <PulseButton className="w-full">
                  <Button type="submit" variant="hero" className="w-full h-12" disabled={loading}>
                    {loading ? t("contact.sending") : t("contact.send")}
                    <Send className="w-4 h-4 ml-1" />
                  </Button>
                </PulseButton>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
