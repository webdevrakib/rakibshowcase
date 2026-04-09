import { motion } from "framer-motion";

type AnimationType = "pulse" | "glow" | "bounce" | "typing";

interface LiveTextProps {
  text: string;
  className?: string;
  type?: AnimationType;
}

const animations = {
  pulse: {
    animate: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.05, 1],
    },
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  glow: {
    animate: {
      textShadow: [
        "0 0 0px currentColor",
        "0 0 12px currentColor",
        "0 0 0px currentColor",
      ],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  bounce: {
    animate: {
      y: [0, -4, 0],
    },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  typing: {
    animate: {
      opacity: [1, 0.3, 1],
      scaleX: [1, 0.97, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const LiveText = ({ text, className = "", type = "pulse" }: LiveTextProps) => {
  const anim = animations[type];
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={anim.animate}
      transition={anim.transition}
    >
      {text}
    </motion.span>
  );
};

export default LiveText;
