import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PulseButton from "@/components/PulseButton";
import LiveText from "@/components/LiveText";
import { useLanguage } from "@/contexts/LanguageContext";

export interface PricingPackage {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const ServicePricingPackages = ({
  packages,
  serviceTitle,
}: {
  packages: PricingPackage[];
  serviceTitle: string;
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useLanguage();

  const handleGetStarted = () => {
    if (selected === null) return;
    const pkg = packages[selected];
    const subject = encodeURIComponent(`Interested in ${serviceTitle} - ${pkg.name} Plan`);
    const body = encodeURIComponent(
      `Hi Rakibul,\n\nI'm interested in the "${pkg.name}" plan (${pkg.price}/${pkg.period}) for ${serviceTitle}.\n\nPlease share more details about how we can get started.\n\nThank you!`
    );
    window.open(`mailto:rakibulhasanbd0@gmail.com?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            onClick={() => setSelected(i)}
            className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
              selected === i
                ? "border-primary shadow-lg scale-[1.02]"
                : pkg.highlighted
                ? "border-primary/40 bg-card"
                : "border-border bg-card hover:border-primary/30"
            }`}
          >
            {pkg.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold gradient-bg text-primary-foreground">
                {t("pkg.popular")}
              </span>
            )}
            <div className="text-center mb-5">
              <h4 className="text-lg font-bold text-foreground mb-1">{pkg.name}</h4>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-sm text-muted-foreground">/ {pkg.period}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {pkg.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div
              className={`w-full text-center py-2 rounded-lg text-sm font-medium transition-colors ${
                selected === i
                  ? "gradient-bg text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {selected === i ? t("pkg.selected") : t("pkg.select")}
            </div>
          </motion.div>
        ))}
      </div>

      {selected !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <PulseButton>
            <Button variant="hero" size="lg" onClick={handleGetStarted}>
              <LiveText text={`${t("pkg.get_started")} ${packages[selected].name}`} type="glow" />
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </PulseButton>
        </motion.div>
      )}
    </div>
  );
};

export default ServicePricingPackages;
