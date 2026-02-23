import React, { useState, useEffect, useRef } from 'react';

const TechEcosystemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reasons = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: 'Singapore-Based Support',
      desc: 'Fast turnaround with local expertise and regional reach.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
        </svg>
      ),
      title: 'Reliable Vendor Network',
      desc: 'Globally recognized manufacturers and trusted brand partnerships.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: 'Project-Friendly Approach',
      desc: 'Not just box selling — we support the full project lifecycle.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: 'Transparent Pricing',
      desc: 'Honest recommendations with no hidden costs or surprises.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Long-Term Mindset',
      desc: '12 months. 52 weeks. Commitment that outlasts the transaction.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: 'Founder-Led Accountability',
      desc: 'Every engagement personally reviewed. One point of contact, always.',
    },
  ];

  const ecosystemCategories = [
    { label: 'Networking', items: ['Routers', 'Switches', 'Firewalls', 'Access Points'] },
    { label: 'Connectivity', items: ['4G/5G Modems', 'SD-WAN', 'VPN Gateways', 'Fiber CPE'] },
    { label: 'Infrastructure', items: ['Servers', 'Rack Systems', 'UPS', 'Cabling'] },
    { label: 'Industrial', items: ['Rugged Devices', 'IoT Gateways', 'Edge Computing', 'Surveillance'] },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setIsVisible(true); }); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Technology Ecosystem ── */}
        <div className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Technology Ecosystem</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Enterprise-Grade{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
                Hardware
              </span>{' '}
              We Source
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We source and integrate solutions from globally recognized manufacturers — ensuring 
              flexibility, performance, and scalability for every client.
            </p>
          </div>

          {/* Ecosystem grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemCategories.map((cat, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-cyan-400/40 p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="font-black text-xs tracking-widest uppercase text-cyan-400/70 mb-4">{cat.label}</div>
                <div className="space-y-2">
                  {cat.items.map((item, ii) => (
                    <div key={ii} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why 1252 Technology ── */}
        <div>
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Why{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
                1252 Technology
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We are more than a hardware supplier — a strategic infrastructure partner committed 
              to reliability, security, and long-term value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-cyan-400/50 p-6 overflow-hidden transition-all duration-300 hover:shadow-[0_15px_50px_rgba(34,211,238,0.1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + i * 80}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/4 group-hover:to-blue-600/6 transition-all duration-400 rounded-2xl" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/15 to-blue-500/15 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors duration-300 text-base">{r.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy quote */}
          <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-gradient p-px">
              <div className="bg-slate-950 rounded-2xl px-10 py-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl" />
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl" />
                </div>
                <div className="relative z-10">
                  <div className="text-3xl mb-4">💬</div>
                  <p className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto italic">
                    "Technology should work quietly in the background —{' '}
                    <span className="text-cyan-400 not-italic font-semibold">stable, secure, and dependable</span>.
                    We focus on solutions that businesses can rely on{' '}
                    <span className="text-blue-400 not-italic font-semibold">every day of the year</span>."
                  </p>
                  <p className="text-slate-500 text-sm mt-4 tracking-wide font-medium">— Our Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(0.9)} }
        @keyframes gradient-x { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes gradient { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        .animate-blob{animation:blob 8s infinite}
        .animate-gradient-x{background-size:200% 200%;animation:gradient-x 3s ease infinite}
        .animate-gradient{animation:gradient 4s ease infinite}
        .animation-delay-3000{animation-delay:3s}
      `}</style>
    </section>
  );
};

export default TechEcosystemSection;