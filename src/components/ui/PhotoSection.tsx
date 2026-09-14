"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface PhotoSectionProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export default function PhotoSection({
  src,
  alt,
  caption,
  priority = false,
}: PhotoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0px", "0px"] : ["-64px", "64px"],
  );

  return (
    <section
      ref={sectionRef}
      className="group relative h-[64vh] max-h-[760px] min-h-[420px] w-full overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute -top-16 -bottom-16 inset-x-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-primary-dark/0 to-transparent transition-opacity duration-500 group-hover:from-primary-dark/45"
      />
      {caption && (
        <p className="absolute bottom-8 left-6 text-eyebrow uppercase text-white transition-transform duration-500 group-hover:translate-x-1 sm:bottom-10 sm:left-8">
          {caption}
        </p>
      )}
    </section>
  );
}
