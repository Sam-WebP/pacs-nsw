"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewport?: "once" | "always" | number;
}

const defaultVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  viewport = "once",
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewport === "once", margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.25, 0, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealLeft({
  children,
  className,
  delay = 0,
  duration = 0.6,
  viewport = "once",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewport === "once", margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, x: -60 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.25, 0, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealRight({
  children,
  className,
  delay = 0,
  duration = 0.6,
  viewport = "once",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewport === "once", margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, x: 60 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.25, 0, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealScale({
  children,
  className,
  delay = 0,
  duration = 0.6,
  viewport = "once",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewport === "once", margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.25, 0, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealStagger({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.1,
  viewport = "once",
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  viewport?: "once" | "always" | number;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewport === "once", margin: "-50px" }}
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
