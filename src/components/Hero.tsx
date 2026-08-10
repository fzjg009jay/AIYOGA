'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599447292180-45fd84092ef4?q=80&w=2000&auto=format&fit=crop"
          alt="AIYOGA studio, Auckland"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10" />
      </div>

      <div className="relative container-px w-full pb-24 pt-40 text-cream">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="text-xs uppercase tracking-widest2 text-cream/70 mb-6"
        >
          奥克兰 · 瑜伽与普拉提
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.15}
          variants={fadeUp}
          className="font-display font-medium leading-[1.1] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] max-w-5xl"
        >
          呼吸。流动。
          <br />
          蜕变。
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.35}
          variants={fadeUp}
          className="mt-8 max-w-md text-base md:text-lg text-cream/80 font-light"
        >
          AIYOGA 融合传统瑜伽与现代普拉提，在沉浸而静谧的高端空间中，
          为奥克兰最挑剔的练习者打造身心焕新的体验。
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.5}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-cream text-ink text-sm tracking-wide hover:bg-clay-100 transition-colors duration-300"
          >
            立即预约
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#studio"
            className="inline-flex items-center gap-2 px-8 py-4 border border-cream/40 text-cream text-sm tracking-wide hover:bg-cream/10 transition-colors duration-300"
          >
            探索空间
          </a>
        </motion.div>
      </div>
    </section>
  );
}
