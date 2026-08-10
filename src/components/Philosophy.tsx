'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section id="studio" className="relative py-28 md:py-40 container-px">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 md:col-start-1"
        >
          <span className="section-label">品牌理念</span>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mt-4">
            找回身心的
            <br />
            内在秩序
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed max-w-md">
            在这座从未真正慢下来的城市里，AIYOGA 是一次刻意的停顿。
            我们将传统瑜伽的修行与现代普拉提的精准相融合，为奥克兰的
            都市人重建力量、呼吸与清明。
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
            每一间工作室都是一处感官意义上的静修所：温润的材质、
            考究的光线，以及恰到好处的静默。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="md:col-span-6 md:col-start-7 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=1400&auto=format&fit=crop"
              alt="Studio interior"
              className="w-full h-full object-cover transition-transform duration-700 ease-smooth hover:scale-105"
            />
          </div>
          <div className="hidden md:block absolute -bottom-10 -left-10 w-40 h-40 overflow-hidden border-8 border-cream shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=600&auto=format&fit=crop"
              alt="Practice detail"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
