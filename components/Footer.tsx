export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111] border-t border-[#2A2A2A]">
      {/* Top yellow stripe */}
      <div className="h-1 bg-[#FFCC00]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="font-black text-2xl text-[#FFCC00] tracking-tight cursor-pointer"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              SINAN&apos;S TYRES
            </a>
            <p
              className="text-[#94A3B8] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: 'General Sans, sans-serif' }}
            >
              Bristol&apos;s trusted tyre and auto service specialist. Honest pricing,
              expert fitting, same-day service.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[#F8FAFC] font-bold text-sm tracking-wider uppercase"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                'New & Part Tyres',
                'Wheel Alignment',
                'Disc Brake Pads',
                'Servicing',
                'Exhaust',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-[#94A3B8] hover:text-[#FFCC00] text-sm transition-colors duration-200 cursor-pointer"
                    style={{ fontFamily: 'General Sans, sans-serif' }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-[#F8FAFC] font-bold text-sm tracking-wider uppercase"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Contact
            </h3>
            <address
              className="not-italic flex flex-col gap-3"
              style={{ fontFamily: 'General Sans, sans-serif' }}
            >
              <div className="flex items-start gap-2 text-[#94A3B8] text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#FFCC00] mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 0 0-16 0c0 3.63 1.556 6.324 3.5 8.327a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  5 Brook St, Redfield
                  <br />
                  Bristol BS5 9JX
                </span>
              </div>
              <a
                href="tel:07413837418"
                className="flex items-center gap-2 text-[#94A3B8] hover:text-[#FFCC00] text-sm transition-colors duration-200 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#FFCC00] flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                07413 837418
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#94A3B8] text-xs"
            style={{ fontFamily: 'General Sans, sans-serif' }}
          >
            &copy; {year} Sinan&apos;s Tyres. All rights reserved.
          </p>
          <p
            className="text-[#94A3B8] text-xs"
            style={{ fontFamily: 'General Sans, sans-serif' }}
          >
            5 Brook St, Redfield, Bristol BS5 9JX
          </p>
        </div>
      </div>
    </footer>
  );
}
