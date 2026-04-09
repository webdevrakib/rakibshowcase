import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

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
              {t("footer.desc")}
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Github, href: "https://github.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Facebook, href: "https://www.facebook.com/developerrakibulalam" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.quick_links")}</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: t("nav.about"), to: "/about" },
                { label: t("nav.services"), to: "/services" },
                { label: t("nav.portfolio"), to: "/portfolio" },
                { label: t("nav.blog"), to: "/blog" },
                { label: t("nav.contact"), to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("footer.services")}</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: t("service.web"), slug: "web-development" },
                { label: t("service.mobile"), slug: "mobile-apps" },
                { label: t("service.uiux"), slug: "ui-ux-design" },
                { label: t("service.seo"), slug: "seo-optimization" },
                { label: t("service.api"), slug: "api-development" },
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
            <h4 className="font-semibold text-foreground mb-4">{t("footer.contact")}</h4>
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
                {t("contact.bangladesh")}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rakibul Alam. {t("footer.rights")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.built")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
