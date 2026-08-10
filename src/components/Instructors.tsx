'use client';

import { motion } from 'framer-motion';
import { instructors } from '@/lib/data';

export default function Instructors() {
  return (
    <section id="instructors" className="py-28 md:py-40 container-px">
      <div className="mb-16 md:mb-20 max-w-2xl">
        <span className="section-label">师资团队</span>
        <h2 className="font-display text-4xl md:text-5xl mt-4">
          专业导师
        </h2>
        <p className="mt-4 text-ink/60 leading-relaxed">
          一支经过认证、经验深厚的导师团队，以专注与用心带领每一堂课。
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {instructors.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-smooth group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-cream translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-smooth">
              <h3 className="font-display text-xl md:text-2xl">{person.name}</h3>
              <p className="text-xs text-clay-300 uppercase tracking-wide mt-1">
                {person.focus}
              </p>
              <p className="text-sm text-cream/70 mt-3 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-smooth overflow-hidden">
                {person.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
