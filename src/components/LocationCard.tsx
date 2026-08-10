'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

type Location = {
  id: string;
  name: string;
  address: string;
  hours: string;
  directions: string;
  image: string;
};

export default function LocationCard({ location }: { location: Location }) {
  return (
    <motion.div
      key={location.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-smooth hover:scale-105"
        />
      </div>

      <div>
        <h3 className="font-display text-4xl md:text-5xl mb-6">
          {location.name}
        </h3>

        <ul className="space-y-5">
          <li className="flex gap-3 items-start">
            <MapPin size={18} className="mt-0.5 text-clay-700 shrink-0" />
            <span className="text-ink/70">{location.address}</span>
          </li>
          <li className="flex gap-3 items-start">
            <Clock size={18} className="mt-0.5 text-clay-700 shrink-0" />
            <span className="text-ink/70">{location.hours}</span>
          </li>
          <li className="flex gap-3 items-start">
            <Navigation size={18} className="mt-0.5 text-clay-700 shrink-0" />
            <span className="text-ink/70">{location.directions}</span>
          </li>
        </ul>

        <a
          href="#contact"
          className="inline-block mt-8 px-7 py-3 border border-ink/20 text-sm tracking-wide hover:bg-ink hover:text-cream transition-colors duration-300"
        >
          预约{location.name}
        </a>
      </div>
    </motion.div>
  );
}
