'use client';

import { motion } from 'framer-motion';
import { classes, locations } from '@/lib/data';

const items = [
  ...classes.map((c) => ({ image: c.image, label: c.name, tag: c.tagline })),
  ...locations.map((l) => ({ image: l.image, label: l.name, tag: 'Studio' })),
];

const loopItems = [...items, ...items];

export default function GalleryMarquee() {
  return (
    <section className="relative py-16 md:py-24 bg-cream overflow-hidden">
      <div className="container-px mb-8 md:mb-10">
        <span className="section-label">场馆与课程</span>
        <h2 className="font-display text-3xl md:text-4xl mt-3">
          空间与练习，一览无余
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10" />

        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {loopItems.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="group relative w-[260px] md:w-[340px] aspect-[3/4] overflow-hidden shrink-0"
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs uppercase tracking-widest2 text-clay-300">
                  {item.tag}
                </span>
                <h3 className="font-display text-2xl text-cream mt-1">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
