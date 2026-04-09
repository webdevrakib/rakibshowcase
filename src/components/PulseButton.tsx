import { motion } from "framer-motion";
import { ReactNode } from "react";

const PulseButton = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        scale: [1, 1.05, 1],
        boxShadow: [
          "0 0 0 0 hsl(var(--primary) / 0)",
          "0 0 0 8px hsl(var(--primary) / 0.15)",
          "0 0 0 0 hsl(var(--primary) / 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.span>
  );
};

export default PulseButton;
