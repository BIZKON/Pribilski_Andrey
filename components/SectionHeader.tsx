'use client';

import { motion } from 'motion/react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ label, title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`inline-block mb-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="font-mono text-[11px] uppercase tracking-[4px] text-gold-main bg-gold-main/10 px-3 py-1 rounded-full border border-gold-main/20">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-text-main mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-text-muted text-lg max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
