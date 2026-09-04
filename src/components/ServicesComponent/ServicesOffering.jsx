import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServiceOfferingsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const offerings = [
    {
      id: 0,
      eyebrow: 'Section 1',
      title: 'Infrastructure Advisory & Consulting',
      heading: "Not sure what you need? We'll tell you straight.",
      body: "Buying network gear without a plan is how companies end up with switches they didn't need and gaps they didn't see coming. We're an official Cisco partner, and before we sell you anything, we'll look at what you actually have and tell you what you actually need — even if that means less hardware, not more.",
      items: [
        'Network design and architecture',
        "Vendor and hardware selection (we work across 15+ brands, so we're not just pushing one)",
        'Tender and RFP support for government or enterprise bids',
      ],
      cta: { label: 'Book a site assessment', to: '/contact?type=assessment' },
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      accent: 'from-cyan-400 to-blue-500',
    },
    {
      id: 1,
      eyebrow: 'Section 2',
      title: 'Installation & Deployment',
      heading: "We don't just sell it. We put it in.",
      body: "Structured cabling, CCTV, wireless networks, server and rack setups — we've done the on-site work, not just the paperwork. Recent projects include full CCTV supply-and-install for commercial clients, from camera selection through to commissioning.",
      items: [
        'Structured cabling and network wiring',
        'CCTV supply, installation, and commissioning',
        'Wireless network deployment',
        'Server and rack setup',
      ],
      cta: { label: 'Get a quote for installation', to: '/contact?type=installation' },
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      accent: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      eyebrow: 'Section 3',
      title: 'Ongoing Support',
      heading: "We don't disappear after install day.",
      body: "Once your network's up, we stay reachable — health checks, maintenance visits, and support when something's not working right. No long contracts required to start.",
      items: [
        'Scheduled maintenance visits',
        'Health checks and troubleshooting',
        "Ongoing support for systems we've installed",
      ],
      cta: { label: 'Talk to us about support', href: 'https://wa.me/6580771252' },
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
      accent: 'from-cyan-500 to-blue-600',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            offerings.forEach((_, i) => {
              setTimeout(() => setVisibleCards((prev) => [...new Set([...prev, i])]), 100 + i * 150);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-900/15 rounded-full filter blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            <span className="gold-border-text">How We</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
              Work With You
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From the first walkthrough to years after install — three ways we help, no procurement runaround.
          </p>
        </div>

        {/* Stacked sections */}
        <div className="space-y-8">
          {offerings.map((svc) => (
            <div
              key={svc.id}
              className={`transition-all duration-700 ${visibleCards.includes(svc.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-400/40 p-8 lg:p-10 overflow-hidden transition-all duration-400 hover:shadow-[0_20px_60px_rgba(34,211,238,0.1)]">
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${svc.accent} opacity-60`} />

                <div className="relative z-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-8 lg:gap-12 items-start">
                  {/* Left: identity + CTA */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.accent} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center text-cyan-400">
                          {svc.icon}
                        </div>
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-cyan-400/70">{svc.eyebrow}</span>
                    </div>
                    <h3 className="text-2xl lg:text-[1.75rem] font-black text-white mb-2 leading-snug">{svc.title}</h3>
                    <p className="text-slate-300 font-semibold mb-6">{svc.heading}</p>

                    {svc.cta.to ? (
                      <Link
                        to={svc.cta.to}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_10px_30px_rgba(34,211,238,0.35)] transition-all duration-300"
                      >
                        {svc.cta.label}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    ) : (
                      <a
                        href={svc.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_10px_30px_rgba(34,211,238,0.35)] transition-all duration-300"
                      >
                        {svc.cta.label}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Right: body copy + bullets */}
                  <div>
                    <p className="text-slate-400 leading-relaxed mb-6">{svc.body}</p>
                    <div className="space-y-2.5">
                      {svc.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${svc.accent} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gold-border-text {
          text-shadow:
             1px  1px 0px rgba(212, 175, 55, 0.75),
            -1px -1px 0px rgba(212, 175, 55, 0.75),
             1px -1px 0px rgba(212, 175, 55, 0.6),
            -1px  1px 0px rgba(212, 175, 55, 0.6),
             3px  3px 0px rgba(170, 130, 10, 0.35),
             4px  4px 3px rgba(0, 0, 0, 0.45);
        }
        @keyframes gradient-x { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        .animate-gradient-x{background-size:200% 200%;animation:gradient-x 3s ease infinite}
      `}</style>
    </section>
  );
};

export default ServiceOfferingsSection;