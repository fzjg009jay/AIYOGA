'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { locations } from '@/lib/data';
import LocationCard from './LocationCard';

export default function Locations() {
  const [active, setActive] = useState(locations[0].id);
  const current = locations.find((l) => l.id === active)!;

  return (
    <section id="locations" className="py-28 md:py-40 container-px">
      <div className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <span className="section-label">奥克兰门店</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            门店位置
          </h2>
        </div>

        <div className="flex gap-2 border-b hairline">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActive(loc.id)}
              className={`px-6 py-3 text-sm tracking-wide transition-colors duration-300 relative ${
                active === loc.id ? 'text-ink' : 'text-ink/40 hover:text-ink/70'
              }`}
            >
              {loc.name}
              {active === loc.id && (
                <span className="absolute left-0 right-0 -bottom-px h-px bg-ink" />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <LocationCard key={current.id} location={current} />
      </AnimatePresence>
    </section>
  );
}
