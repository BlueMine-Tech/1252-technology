import React, { useState, useEffect, useRef } from 'react';

const IndustriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const industries = [
    { name: 'Manufacturing & Industrial', icon: '🏭', desc: 'Rugged solutions for demanding environments' },
    { name: 'Logistics & Transportation', icon: '🚛', desc: 'Mobile and fleet connectivity' },
    { name: 'Retail & F&B', icon: '🏪', desc: 'Reliable POS and in-store networks' },
    { name: 'Corporate Offices', icon: '🏢', desc: 'Enterprise LAN/WAN infrastructure' },
    { name: 'Multi-Site Enterprises', icon: '🌐', desc: 'Unified connectivity across locations' },
    { name: 'System Integrators', icon: '🔧', desc: 'Hardware sourcing and project support' },
    { name: 'Construction & Remote Sites', icon: '🏗️', desc: 'Temporary and ruggedized deployments' },
    { name: 'Utilities & Energy', icon: '⚡', desc: 'Mission-critical industrial networks' },
    { name: 'Healthcare & Medical', icon: '🏥', desc: 'Secure and compliant infrastructure' },
    { name: 'Education & Institutions', icon: '🎓', desc: 'Campus-wide networking solutions' },
    { name: 'Smart Cities & IoT', icon: '📡', desc: 'Edge and sensor deployments' },
    { name: 'Government & Public Sector', icon: '🏛️', desc: 'Certified and compliant hardware' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setIsVisible(true); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full filter blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            <span className="gold-border-text">Trusted Across</span>
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
              Every Sector
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From enterprise offices to remote industrial sites — we deliver the right hardware 
            for the right environment, every time.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/40 hover:border-cyan-400/50 p-5 overflow-hidden transition-all duration-300 group-hover:shadow-[0_10px_40px_rgba(34,211,238,0.1)] cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/8 transition-all duration-400 rounded-xl" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {ind.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-slate-500 text-sm">
            Not sure if we cover your industry?{' '}
            <span className="text-cyan-400 font-medium cursor-pointer hover:underline">
              Tell us your requirement →
            </span>
          </p>
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

        @keyframes gradient-x { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        .animate-gradient-x{background-size:200% 200%;animation:gradient-x 3s ease infinite}
      `}</style>
    </section>
  );
};

export default IndustriesSection;