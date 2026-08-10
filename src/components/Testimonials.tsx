'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-28 md:py-40 bg-olive-50 relative overflow-hidden">
      <div className="container-px max-w-3xl mx-auto text-center relative">
        <span className="section-label">学员声音</span>
        <Quote className="mx-auto mt-8 text-clay-500" size={36} />

        <div className="min-h-[180px] flex items-center justify-center mt-6">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-2xl md:text-3xl leading-snug text-ink/90">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-ink/50 tracking-wide">
                {current.name} — {current.detail}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`第 ${i + 1} 条学员评价`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-ink' : 'w-1.5 bg-ink/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
