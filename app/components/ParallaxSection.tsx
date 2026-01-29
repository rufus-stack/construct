"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children?: React.ReactNode;
  backgroundImage: string;
  height?: string;
  overlayOpacity?: number;
}

export function ParallaxSection({
  children,
  backgroundImage,
  height = "h-[80vh]",
  overlayOpacity = 0.4,
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className={`relative ${height} overflow-hidden flex items-center justify-center`}
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      </motion.div>

      <div
        className="absolute inset-0 z-10 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      <div className="relative z-20 text-white w-full">{children}</div>
    </div>
  );
}
