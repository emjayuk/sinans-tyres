'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'New & Part Tyres',
    description:
      'Brand new and quality part-worn tyres for all makes and models. Competitive prices with expert fitting included.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
        <circle cx="24" cy="24" r="20" stroke="#FFCC00" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="12" stroke="#FFCC00" strokeWidth="2" />
        <circle cx="24" cy="24" r="5" fill="#FFCC00" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={24 + 12 * Math.cos(rad)}
              y1={24 + 12 * Math.sin(rad)}
              x2={24 + 19 * Math.cos(rad)}
              y2={24 + 19 * Math.sin(rad)}
              stroke="#FFCC00"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    ),
  },
  {
    title: 'Wheel Alignment',
    description:
      'Precision computerised wheel alignment to extend tyre life, improve fuel economy and restore handling.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
        <path d="M6 24h36" stroke="#FFCC00" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 16h36" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M6 32h36" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="16" cy="24" r="4" fill="#FFCC00" />
        <circle cx="32" cy="24" r="4" fill="#FFCC00" />
        <path d="M16 20v8M32 20v8" stroke="#0A0A0A" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Disc Brake Pads',
    description:
      'Complete brake inspection and disc/pad replacement using quality parts. Keep your stopping power at peak performance.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="#FFCC00" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="10" stroke="#FFCC00" strokeWidth="2" />
        <path
          d="M24 6 A18 18 0 0 1 42 24"
          stroke="#DC2626"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="24" cy="24" r="4" fill="#FFCC00" />
      </svg>
    ),
  },
  {
    title: 'Servicing',
    description:
      'Full and interim vehicle servicing. Oil changes, filters, fluid checks and full system inspection to keep you safe.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
        <path
          d="M30 8l-2 4h-8l-2-4H30ZM18 12h12v4a6 6 0 0 1-12 0v-4Z"
          stroke="#FFCC00"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M24 22v6" stroke="#FFCC00" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="32" r="8" stroke="#FFCC00" strokeWidth="2" />
        <path
          d="M17.5 37.5 L14 41M30.5 37.5 L34 41"
          stroke="#FFCC00"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Exhaust',
    description:
      'Exhaust system inspection, repair and full replacement. We fix leaks, rattles and emissions issues fast.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
        <rect x="6" y="20" width="28" height="8" rx="4" stroke="#FFCC00" strokeWidth="2.5" />
        <path d="M34 24h8" stroke="#FFCC00" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="42" cy="24" r="3" stroke="#FFCC00" strokeWidth="2" />
        <path
          d="M38 18 Q40 14 38 10M42 20 Q44 16 42 12"
          stroke="#FFCC00"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
          fill="none"
        />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ borderColor: '#DC2626', y: -4 }}
      className="group relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 cursor-default transition-all duration-300 overflow-hidden"
    >
      {/* Yellow top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#FFCC00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="flex flex-col gap-4">
        <div className="w-14 h-14 bg-[#0A0A0A] rounded-lg flex items-center justify-center border border-[#2A2A2A] group-hover:border-[#FFCC00]/40 transition-colors duration-300">
          {service.icon}
        </div>

        <div>
          <h3
            className="text-[#F8FAFC] font-bold text-lg mb-2"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            {service.title}
          </h3>
          <p
            className="text-[#94A3B8] text-sm leading-relaxed"
            style={{ fontFamily: 'General Sans, sans-serif' }}
          >
            {service.description}
          </p>
        </div>

        <a
          href="tel:07413837418"
          className="inline-flex items-center gap-1.5 text-[#FFCC00] text-sm font-semibold hover:gap-3 transition-all duration-200 cursor-pointer mt-auto"
          aria-label={`Book ${service.title}`}
        >
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          ref={ref}
          className="mb-16"
        >
          <p
            className="text-[#FFCC00] text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: 'General Sans, sans-serif' }}
          >
            What We Do
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] leading-tight"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Our <span className="text-[#FFCC00]">Services</span>
            </h2>
            <a
              href="tel:07413837418"
              className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 text-sm cursor-pointer self-start sm:self-auto"
            >
              Get a Quote
            </a>
          </div>
          <div className="mt-4 h-1 w-16 bg-[#FFCC00] rounded-full" aria-hidden="true" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
