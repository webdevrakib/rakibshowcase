import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, highlight, description, center = true }: SectionHeadingProps) => {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {badge && (
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          className="mt-4 text-muted-foreground text-lg leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
