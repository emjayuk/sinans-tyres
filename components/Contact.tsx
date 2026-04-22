'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const contactDetails = [
  {
    label: 'Address',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 0 0-16 0c0 3.63 1.556 6.324 3.5 8.327a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    value: '5 Brook St, Redfield\nBristol BS5 9JX',
    href: 'https://maps.google.com/?q=5+Brook+St+Redfield+Bristol+BS5+9JX',
    linkLabel: 'Get directions',
  },
  {
    label: 'Phone',
    icon: (
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
    ),
    value: '07413 837418',
    href: 'tel:07413837418',
    linkLabel: 'Call now',
  },
  {
    label: 'Hours',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    value: 'Mon–Sat: 8:00am – 6:00pm\nSun: Closed',
    href: null,
    linkLabel: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Find Us
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F8FAFC] leading-tight"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Come <span className="text-[#FFCC00]">Visit</span> Us
          </h2>
          <div className="mt-4 h-1 w-16 bg-[#FFCC00] rounded-full" aria-hidden="true" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 flex gap-4"
              >
                <div className="w-10 h-10 bg-[#FFCC00]/10 rounded-lg flex items-center justify-center text-[#FFCC00] flex-shrink-0 mt-0.5">
                  {detail.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[#94A3B8] text-xs font-semibold tracking-wider uppercase"
                    style={{ fontFamily: 'General Sans, sans-serif' }}
                  >
                    {detail.label}
                  </span>
                  <span
                    className="text-[#F8FAFC] font-medium text-sm whitespace-pre-line leading-relaxed"
                    style={{ fontFamily: 'General Sans, sans-serif' }}
                  >
                    {detail.value}
                  </span>
                  {detail.href && (
                    <a
                      href={detail.href}
                      className="text-[#FFCC00] text-sm font-semibold hover:underline cursor-pointer mt-1 inline-flex items-center gap-1"
                      target={detail.href.startsWith('http') ? '_blank' : undefined}
                      rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {detail.linkLabel}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Big call CTA */}
            <a
              href="tel:07413837418"
              className="mt-2 flex items-center justify-between bg-[#DC2626] hover:bg-red-700 text-white px-7 py-5 rounded-xl transition-colors duration-200 cursor-pointer group"
            >
              <div>
                <div
                  className="text-xs font-semibold tracking-widest uppercase opacity-80 mb-1"
                  style={{ fontFamily: 'General Sans, sans-serif' }}
                >
                  Ready to book?
                </div>
                <div
                  className="text-2xl font-black"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  07413 837418
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 opacity-80 group-hover:scale-110 transition-transform duration-200"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-xl overflow-hidden border border-[#2A2A2A] h-[420px] lg:h-full min-h-[420px]"
          >
            <iframe
              title="Sinan's Tyres location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.7!2d-2.5647!3d51.4545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e2f5e87a34f%3A0x1!2s5+Brook+St%2C+Redfield%2C+Bristol+BS5+9JX%2C+UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
