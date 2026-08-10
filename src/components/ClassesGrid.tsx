'use client';

import { motion } from 'framer-motion';
import { classes } from '@/lib/data';

export default function ClassesGrid() {
  return (
    <section id="classes" className="py-28 md:py-40 container-px bg-ink text-cream">
      <div className="mb-16 md:mb-20 max-w-2xl">
        <span className="section-label text-clay-300">课程体系</span>
        <h2 className="font-display text-4xl md:text-5xl mt-4">
          精选课程
        </h2>
        <p className="mt-4 text-cream/60 leading-relaxed">
          从动态流动到静态修复，为都市生活的每一种节奏，精心策划一堂课。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10">
        {classes.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-ink p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-smooth"
              />
              <div className="absolute inset-0 bg-ink/80" />
            </div>

            <div className="relative flex flex-col h-full min-h-[220px] justify-between">
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-widest2 text-clay-300">
                  {c.tagline}
                </span>
                <span className="text-xs text-cream/50">{c.duration}</span>
              </div>

              <div>
                <h3 className="font-display text-3xl md:text-4xl mb-3 group-hover:translate-x-1 transition-transform duration-500">
                  {c.name}
                </h3>
                <p className="text-cream/60 text-sm leading-relaxed max-w-sm">
                  {c.description}
                </p>
                <span className="inline-block mt-5 text-xs uppercase tracking-wide border border-cream/20 px-3 py-1 text-cream/70">
                  {c.intensity}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
