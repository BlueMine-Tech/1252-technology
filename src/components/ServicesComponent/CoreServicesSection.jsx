import React, { useState, useEffect, useRef } from 'react';

const CoreServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 0,
      title: 'IT Hardware Supply & Deployment',
      shortTitle: 'Hardware',
      description: 'Enterprise and industrial-grade hardware sourced, validated, and delivered for reliable performance across any environment.',
      items: [
        'Enterprise routers & firewalls',
        'Industrial 4G/5G routers',
        'Network switches & access points',
        'Server & rack infrastructure',
        'Edge computing devices',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      ),
      accent: 'from-cyan-400 to-blue-500',
      borderHover: 'hover:border-cyan-400/60',
      tag: 'Core Offering',
    },
    {
      id: 1,
      title: 'Network & Connectivity Solutions',
      shortTitle: 'Networking',
      description: 'Wired, wireless, and cellular connectivity for offices, remote sites, and critical environments — designed for uptime.',
      items: [
        'LAN / WAN architecture',
        'Secure VPN & SD-WAN',
        'Multi-site connectivity',
        'Redundant & failover setup',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      accent: 'from-blue-500 to-cyan-400',
      borderHover: 'hover:border-blue-400/60',
      tag: 'High Demand',
    },
    {
      id: 2,
      title: 'Managed Infrastructure Support',
      shortTitle: 'Managed Support',
      description: 'Ongoing support to keep your infrastructure stable, maintained, and ready — every week of the year.',
      items: [
        'Remote monitoring',
        'Preventive maintenance',
        'Incident response',
        'Lifecycle management',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      accent: 'from-cyan-500 to-blue-600',
      borderHover: 'hover:border-cyan-400/60',
      tag: 'Always-On',
    },
    {
      id: 3,
      title: 'Technology Consulting',
      shortTitle: 'Consulting',
      description: 'Strategic guidance to help you plan, refresh, and future-proof your IT infrastructure with confidence.',
      items: [
        'Infrastructure assessment',
        'Technology refresh planning',
        'Cost optimization strategy',
        'Expansion-ready IT design',
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      accent: 'from-blue-600 to-cyan-500',
      borderHover: 'hover:border-blue-400/60',
      tag: 'Strategic',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, i) => {
              setTimeout(() => setVisibleCards(prev => [...new Set([...prev, i])]), 100 + i * 130);
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
    <section ref={sectionRef} className="py-24 lg:py-36 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, rgba(34,211,238,0.9) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
            <svg className="w-4 h-4 text-cyan-400 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-cyan-400 tracking-wide">Our Core Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            {/* "Built for" and "of Your Infrastructure" get the gold border effect */}
            <span className="gold-border-text">Built for</span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
              Every Layer
            </span>
            {' '}
            <span className="gold-border-text">of Your Infrastructure</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From sourcing to strategy — we cover the full hardware and infrastructure lifecycle
            with expertise and accountability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`group relative transition-all duration-700 ${visibleCards.includes(svc.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className={`relative h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 ${svc.borderHover} p-8 overflow-hidden transition-all duration-400 group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]`}>
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${svc.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/8 transition-all duration-500 rounded-2xl" />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${svc.accent} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center text-cyan-400">
                        {svc.icon}
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-bold rounded-full" style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#67e8f9' }}>
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{svc.description}</p>

                  {/* Items */}
                  <div className="space-y-2.5">
                    {svc.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${svc.accent} flex items-center justify-center flex-shrink-0`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden rounded-br-2xl">
                    <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ============================================================
           GOLD BORDER EFFECT — matches HeroSection gold-border-text
        ============================================================ */
        .gold-border-text {
          text-shadow:
             1px  1px 0px rgba(212, 175, 55, 0.75),
            -1px -1px 0px rgba(212, 175, 55, 0.75),
             1px -1px 0px rgba(212, 175, 55, 0.6),
            -1px  1px 0px rgba(212, 175, 55, 0.6),
             3px  3px 0px rgba(170, 130, 10, 0.35),
             4px  4px 3px rgba(0, 0, 0, 0.45);
        }

        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(0.9)} }
        @keyframes gradient-x { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes pulse-slow { 0%,100%{opacity:1} 50%{opacity:0.6} }
        .animate-blob{animation:blob 8s infinite}
        .animate-gradient-x{background-size:200% 200%;animation:gradient-x 3s ease infinite}
        .animate-pulse-slow{animation:pulse-slow 3s ease-in-out infinite}
        .animation-delay-3000{animation-delay:3s}
      `}</style>
    </section>
  );
};

export default CoreServicesSection;