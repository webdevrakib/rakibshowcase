import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Plus, Minus, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingItem {
  label: string;
  basePrice: number;
  unit: string;
}

const ServiceCostCalculator = ({ pricing, serviceTitle }: { pricing: PricingItem[]; serviceTitle: string }) => {
  const [quantities, setQuantities] = useState<Record<number, number>>(
    Object.fromEntries(pricing.map((_, i) => [i, 0]))
  );

  const updateQty = (index: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(0, (prev[index] || 0) + delta),
    }));
  };

  const total = pricing.reduce((sum, item, i) => sum + item.basePrice * (quantities[i] || 0), 0);

  const buildBreakdown = () => {
    return pricing
      .filter((_, i) => quantities[i] > 0)
      .map((item, i) => {
        const originalIndex = pricing.indexOf(item);
        return `${item.label}: ${quantities[originalIndex]} x $${item.basePrice} = $${item.basePrice * quantities[originalIndex]}`;
      })
      .join("\n");
  };

  const handleWhatsApp = () => {
    const breakdown = buildBreakdown();
    const message = encodeURIComponent(
      `Hi Rakibul! 👋\n\nI've estimated my ${serviceTitle} project:\n\n${breakdown}\n\n💰 Total Budget: $${total.toLocaleString()}\n\nI'd like to discuss this project. Can we get started?`
    );
    window.open(`https://wa.me/8801764740380?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const breakdown = buildBreakdown();
    const subject = encodeURIComponent(`${serviceTitle} Project Estimate - $${total.toLocaleString()}`);
    const body = encodeURIComponent(
      `Hi Rakibul,\n\nI've estimated my ${serviceTitle} project:\n\n${breakdown}\n\nTotal Budget: $${total.toLocaleString()}\n\nI'd like to discuss this project and get started.\n\nThank you!`
    );
    window.open(`mailto:rakibulhasanbd0@gmail.com?subject=${subject}&body=${body}`, "_self");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
          <Calculator className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Cost Estimator</h3>
          <p className="text-sm text-muted-foreground">Estimate your {serviceTitle.toLowerCase()} project cost</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {pricing.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50">
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">${item.basePrice} / {item.unit}</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-lg"
                onClick={() => updateQty(i, -1)}
                disabled={quantities[i] === 0}
              >
                <Minus className="w-3.5 h-3.5" />
              </Button>
              <span className="w-8 text-center text-sm font-semibold text-foreground">{quantities[i]}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-lg"
                onClick={() => updateQty(i, 1)}
              >
                <Plus className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl gradient-bg">
        <span className="text-sm font-medium text-primary-foreground">Estimated Total</span>
        <span className="text-2xl font-bold text-primary-foreground">${total.toLocaleString()}</span>
      </div>

      {total > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4 flex flex-col sm:flex-row gap-3"
        >
          <Button
            variant="hero"
            className="flex-1"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Send via WhatsApp
          </Button>
          <Button
            variant="hero-outline"
            className="flex-1"
            onClick={handleEmail}
          >
            <Mail className="w-4 h-4 mr-2" />
            Send via Email
          </Button>
        </motion.div>
      )}

      <p className="text-xs text-muted-foreground mt-3 text-center">
        * This is an estimate. Final pricing may vary based on project complexity.
      </p>
    </motion.div>
  );
};

export default ServiceCostCalculator;
