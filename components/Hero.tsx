'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

function TyreGraphic() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Yellow radial glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(255,204,0,0.22) 0%, rgba(255,204,0,0.06) 50%, transparent 75%)',
          filter: 'blur(32px)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Entry animation wrapper: fade in from right + scale up */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      >
        {/* Float up/down */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Continuous spin */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{
              filter: 'drop-shadow(0 0 32px rgba(255,204,0,0.35)) drop-shadow(0 0 64px rgba(255,204,0,0.15))',
            }}
          >
            <Image
              src="/wheel.png"
              alt="Alloy wheel"
              width={500}
              height={500}
              priority
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Grid layer — racing circuit overhead lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,204,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 0,
        }}
      />

      {/* Spotlight sweep — yellow radial cone drifting left→right */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
        animate={{
          background: [
            'radial-gradient(ellipse 55% 70% at -10% 40%, rgba(255,204,0,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 55% 70% at 55%  40%, rgba(255,204,0,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 55% 70% at 110% 40%, rgba(255,204,0,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 55% 70% at 55%  40%, rgba(255,204,0,0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 55% 70% at -10% 40%, rgba(255,204,0,0.08) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Yellow diagonal slash accents */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 right-0 w-[600px] h-full overflow-hidden pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 2 }}
      >
        <div
          className="absolute top-[-10%] right-[-8%] w-16 h-[140%] bg-[#FFCC00]"
          style={{ transform: 'rotate(-15deg)', opacity: 0.06 }}
        />
        <div
          className="absolute top-[-10%] right-[4%] w-8 h-[140%] bg-[#FFCC00]"
          style={{ transform: 'rotate(-15deg)', opacity: 0.04 }}
        />
        <div
          className="absolute top-[-10%] right-[10%] w-4 h-[140%] bg-[#FFCC00]"
          style={{ transform: 'rotate(-15deg)', opacity: 0.03 }}
        />
      </motion.div>

      {/* Red accent stripe at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-[#DC2626]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 self-start">
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#FFCC00]/40 text-[#FFCC00] tracking-widest uppercase"
                style={{ fontFamily: 'General Sans, sans-serif' }}
              >
                Redfield, Bristol
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight text-[#F8FAFC]"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Bristol&apos;s{' '}
              <span className="text-[#FFCC00]">Premier</span>
              <br />
              Tyre &amp;{' '}
              <span className="relative inline-block">
                Auto
                <span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-[#DC2626]"
                  aria-hidden="true"
                />
              </span>
              <br />
              Service
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-[#94A3B8] text-lg md:text-xl max-w-md leading-relaxed"
              style={{ fontFamily: 'General Sans, sans-serif' }}
            >
              Same-day fitting. Expert mechanics. Competitive prices.{' '}
              <span className="text-[#DC2626] font-semibold">Trusted by 5,000+ Bristol drivers.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="tel:07413837418"
                className="inline-flex items-center gap-2.5 bg-[#FFCC00] hover:bg-yellow-400 text-[#0A0A0A] font-bold px-8 py-4 rounded transition-colors duration-200 text-base cursor-pointer"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                Call Now — 07413 837418
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-[#2A2A2A] hover:border-[#FFCC00] text-[#F8FAFC] hover:text-[#FFCC00] font-semibold px-8 py-4 rounded transition-colors duration-200 text-base cursor-pointer"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Our Services
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
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              {[
                { label: '15+ Years', sub: 'Experience' },
                { label: 'Same Day', sub: 'Service' },
                { label: 'Fair', sub: 'Pricing' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <div className="w-1.5 h-8 bg-[#FFCC00] rounded-full" aria-hidden="true" />
                  <div>
                    <div
                      className="text-[#F8FAFC] font-bold text-sm leading-none"
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                    >
                      {badge.label}
                    </div>
                    <div className="text-[#94A3B8] text-xs mt-0.5">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: wheel image */}
          <div className="flex justify-center lg:justify-end">
            <TyreGraphic />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[#94A3B8] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#FFCC00] to-transparent"
        />
      </motion.div>
    </section>
  );
}
