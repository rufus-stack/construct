"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

export function Timeline({
  items,
}: {
  items: Omit<TimelineItemProps, "index">[];
}) {
  return (
    <div className="relative container mx-auto px-4 py-20">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-500/30 -translate-x-1/2 hidden md:block" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem key={index} index={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 text-center md:text-left w-full">
        <div
          className={`p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 ${
            !isEven && "md:text-right"
          }`}
        >
          <span className="inline-block px-3 py-1 bg-amber-500 text-black font-bold rounded-full mb-4 text-sm">
            {year}
          </span>
          <h3 className="text-2xl font-bold mb-2 dark:text-white">{title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
      {/* Dot */}
      <div className="relative z-10 w-4 h-4 bg-amber-500 rounded-full shrink-0 outline outline-4 outline-amber-500/20 hidden md:block" />
      <div className="flex-1 w-full" /> {/* Spacer */}
    </motion.div>
  );
}
