import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="text-xl font-bold font-display">
              <span className="gradient-text">Rakibul</span>
              <span className="text-foreground">.dev</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Professional Web & Mobile App Developer crafting digital experiences that drive business growth.
            </p>
            <div className="flex gap-3 mt-6">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Web Development", slug: "web-development" },
                { label: "Mobile Apps", slug: "mobile-apps" },
                { label: "UI/UX Design", slug: "ui-ux-design" },
                { label: "SEO Optimization", slug: "seo-optimization" },
                { label: "API Development", slug: "api-development" },
              ].map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:perfactrakib@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                perfactrakib@gmail.com
              </a>
              <a href="https://wa.me/8801764740380" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +880 1764740380
              </a>
              <span className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Bangladesh
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rakibul Alam. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion & precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
