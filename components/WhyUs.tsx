'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

const stats = [
  {
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    sub: 'Serving Bristol drivers since 2009',
    color: '#FFCC00',
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Happy Customers',
    sub: 'Trusted by thousands across Bristol',
    color: '#DC2626',
  },
  {
    value: 1,
    suffix: ' Day',
    label: 'Same Day Service',
    sub: 'Most jobs done the same day',
    color: '#FFCC00',
  },
];

function StatCard({
  stat,
  active,
  index,
}: {
  stat: (typeof stats)[number];
  active: boolean;
  index: number;
}) {
  const count = useCounter(stat.value, 1800, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      className="relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 md:p-10 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5"
        style={{ background: stat.color }}
        aria-hidden="true"
      />

      {/* Top colour bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{ background: stat.color }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col gap-3">
        {/* Counter */}
        <div
          className="text-5xl md:text-6xl font-black leading-none"
          style={{ fontFamily: 'Satoshi, sans-serif', color: stat.color }}
          aria-live="polite"
        >
          {count}
          {stat.suffix}
        </div>

        {/* Label */}
        <div
          className="text-[#F8FAFC] text-xl font-bold"
          style={{ fontFamily: 'Satoshi, sans-serif' }}
        >
          {stat.label}
        </div>

        {/* Sub-label */}
        <p
          className="text-[#94A3B8] text-sm leading-relaxed"
          style={{ fontFamily: 'General Sans, sans-serif' }}
        >
          {stat.sub}
        </p>
      </div>
    </motion.div>
  );
}

const reasons = [
  'All makes and models',
  'No hidden charges',
  'Fully trained mechanics',
  'Quality parts guaranteed',
  'Fast turnaround',
  'Friendly, honest service',
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="why-us"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111 50%, #0A0A0A 100%)' }}
    >
      {/* Diagonal yellow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,204,0,0.015) 40px, rgba(255,204,0,0.015) 80px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p
            className="text-[#FFCC00] text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ fontFamily: 'General Sans, sans-serif' }}
          >
            Why Choose Us
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] leading-tight"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Bristol&apos;s Most{' '}
            <span className="text-[#DC2626]">Trusted</span>
            <br />
            Auto Specialists
          </h2>
          <div className="mt-4 h-1 w-16 bg-[#DC2626] rounded-full" aria-hidden="true" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>

        {/* Reasons list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h3
                className="text-[#F8FAFC] font-bold text-xl mb-6"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                What makes us different
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reasons.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-center gap-3 text-[#94A3B8] text-sm"
                    style={{ fontFamily: 'General Sans, sans-serif' }}
                  >
                    <span
                      className="w-5 h-5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/40 flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-[#FFCC00]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-shrink-0">
              <a
                href="tel:07413837418"
                className="inline-flex flex-col items-center gap-1 bg-[#FFCC00] hover:bg-yellow-400 text-[#0A0A0A] font-black px-10 py-6 rounded-xl transition-colors duration-200 cursor-pointer text-center"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                <span className="text-2xl">07413 837418</span>
                <span className="text-xs font-semibold opacity-70 tracking-wider uppercase">
                  Call to Book
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
