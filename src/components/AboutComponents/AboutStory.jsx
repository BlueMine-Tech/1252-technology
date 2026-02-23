import React, { useState, useEffect, useRef } from 'react';

const AboutStorySection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            [0, 1, 2, 3, 4, 5].forEach((i) => {
              setTimeout(() => {
                setVisibleItems(prev => [...new Set([...prev, i])]);
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isVisible = (i) => visibleItems.includes(i);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[480px] h-[480px] bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[480px] h-[480px] bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(34,211,238,0.9) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Vertical accent lines */}
        <div className="absolute top-0 right-20 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/15 to-transparent" />
        <div className="absolute top-0 left-20 w-px h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent" />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${7 + i * 0.5}s`,
              backgroundColor: i % 2 === 0 ? 'rgba(34,211,238,0.5)' : 'rgba(59,130,246,0.5)',
              boxShadow: i % 2 === 0 ? '0 0 8px rgba(34,211,238,0.4)' : '0 0 8px rgba(59,130,246,0.4)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className={`text-center mb-20 transition-all duration-900 ${isVisible(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Who We{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%] animate-gradient-x">
                Are
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A Singapore-based technology solutions provider delivering secure, scalable, and reliable
            IT infrastructure for modern businesses.
          </p>
        </div>

        {/* ── Who We Are + Why 1252 — Two Column ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          {/* Who We Are */}
          <div className={`group relative transition-all duration-700 ${isVisible(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 group-hover:border-cyan-400/50 p-8 overflow-hidden transition-all duration-400 group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/8 transition-all duration-500 rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5 mb-6">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full text-xs font-bold tracking-wide" style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#67e8f9' }}>
                  Our Identity
                </div>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  Who We Are
                </h3>

                <p className="text-slate-300 leading-relaxed mb-4">
                  1252 Technology Pte Ltd is a Singapore-based technology solutions provider delivering{' '}
                  <span className="text-cyan-400 font-medium">secure, scalable, and reliable</span> IT
                  infrastructure solutions for modern businesses.
                </p>

                <p className="text-slate-400 leading-relaxed">
                  We specialize in enterprise networking, secure connectivity, hardware supply, and managed
                  services — ensuring operational continuity and performance excellence.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Enterprise Networking', 'Secure Connectivity', 'Hardware Supply', 'Managed Services'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 border border-slate-700 text-slate-400 group-hover:border-cyan-400/30 group-hover:text-cyan-300/70 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why 1252 */}
          <div className={`group relative transition-all duration-700 delay-150 ${isVisible(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 group-hover:border-cyan-400/50 p-8 overflow-hidden transition-all duration-400 group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-600/0 group-hover:from-blue-500/5 group-hover:to-cyan-600/8 transition-all duration-500 rounded-2xl" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 p-0.5 mb-6">
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full text-xs font-bold tracking-wide" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#93c5fd' }}>
                  Our Name
                </div>

                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Why "1252"?
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Inspired by{' '}
                  <span className="text-blue-400 font-semibold">12 months</span> and{' '}
                  <span className="text-cyan-400 font-semibold">52 weeks</span>, our brand reflects
                  continuous reliability — every week, every month, every year.
                </p>

                {/* Visual — 12 months + 52 weeks counter cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 rounded-xl p-4 border border-blue-500/20 text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">12</div>
                    <div className="text-xs text-slate-400 font-medium">Months of Presence</div>
                  </div>
                  <div className="bg-slate-900/60 rounded-xl p-4 border border-cyan-500/20 text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">52</div>
                    <div className="text-xs text-slate-400 font-medium">Weeks of Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Vision & Mission — Two Column ── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          {/* Vision */}
          <div className={`group relative transition-all duration-700 ${isVisible(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-full relative overflow-hidden rounded-2xl p-0.5 bg-gradient-to-br from-cyan-500/40 to-blue-600/40">
              <div className="h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-8">
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(34,211,238,1)" strokeWidth="1" strokeDasharray="4,4"/>
                    <circle cx="40" cy="40" r="18" fill="none" stroke="rgba(34,211,238,1)" strokeWidth="1"/>
                    <circle cx="40" cy="40" r="5" fill="rgba(34,211,238,0.5)"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-2xl">
                      🌍
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-cyan-400/70 mb-0.5">Looking Ahead</div>
                      <h3 className="text-xl font-black text-white">Our Vision</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-lg">
                    To become a{' '}
                    <span className="text-cyan-400 font-semibold">trusted regional technology partner</span>{' '}
                    empowering businesses with secure, scalable, and future-ready infrastructure.
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
                    <span className="text-xs text-cyan-400/60 font-medium tracking-wide">REGIONAL REACH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className={`group relative transition-all duration-700 delay-150 ${isVisible(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-full relative overflow-hidden rounded-2xl p-0.5 bg-gradient-to-br from-blue-600/40 to-cyan-500/40">
              <div className="h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-8">
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <path d="M10 10 L10 40 L40 40 L40 70" fill="none" stroke="rgba(59,130,246,1)" strokeWidth="1.5" strokeDasharray="4,3"/>
                    <circle cx="10" cy="10" r="4" fill="rgba(59,130,246,0.6)"/>
                    <circle cx="40" cy="40" r="4" fill="rgba(34,211,238,0.6)"/>
                    <circle cx="40" cy="70" r="4" fill="rgba(59,130,246,0.6)"/>
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-blue-400/30 flex items-center justify-center text-2xl">
                      🚀
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-blue-400/70 mb-0.5">Our Purpose</div>
                      <h3 className="text-xl font-black text-white">Our Mission</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-lg">
                    To deliver{' '}
                    <span className="text-blue-400 font-semibold">reliable IT hardware, network solutions, and managed services</span>{' '}
                    that enable modern businesses to operate efficiently, securely, and without disruption.
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-400/40 to-transparent" />
                    <span className="text-xs text-blue-400/60 font-medium tracking-wide">ZERO DISRUPTION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Our Story — Full Width ── */}
        <div className={`transition-all duration-700 ${isVisible(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-gradient p-px">
            <div className="relative bg-slate-950 rounded-2xl p-10 lg:p-14 overflow-hidden">

              {/* BG decoration */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
                <svg className="absolute right-0 bottom-0 opacity-5" width="300" height="300" viewBox="0 0 300 300">
                  <path d="M30 30 L30 120 L120 120 L120 210 L210 210" fill="none" stroke="rgba(34,211,238,1)" strokeWidth="2" strokeDasharray="6,4"/>
                  <circle cx="30" cy="30" r="6" fill="rgba(34,211,238,0.8)"/>
                  <circle cx="120" cy="120" r="6" fill="rgba(59,130,246,0.8)"/>
                  <circle cx="210" cy="210" r="6" fill="rgba(34,211,238,0.8)"/>
                </svg>
              </div>

              <div className="relative z-10 grid lg:grid-cols-3 gap-10 items-start">

                {/* Left — Header */}
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">Our Story</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                    Built for{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Long-Term
                    </span>{' '}
                    Impact
                  </h3>

                  <div className="flex items-center gap-2 mt-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
                  </div>

                  <p className="text-slate-500 text-sm mt-4 font-medium tracking-wide">Singapore • Founded 2024</p>
                </div>

                {/* Right — Story content */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    1252 Technology was founded with a clear purpose:{' '}
                    <span className="text-white font-medium">to simplify business technology</span> without
                    compromising on quality, reliability, or accountability.
                  </p>

                  <p className="text-slate-400 leading-relaxed">
                    We provide secure, scalable IT hardware and infrastructure solutions that help
                    organizations operate with confidence and reliability — whether they're scaling a
                    data center, expanding their network, or future-proofing their infrastructure.
                  </p>

                  <div className="relative pl-5 border-l-2 border-cyan-400/40">
                    <p className="text-slate-300 leading-relaxed italic">
                      "More than a supplier, we are a{' '}
                      <span className="text-cyan-400 not-italic font-semibold">long-term technology partner</span>{' '}
                      — delivering trusted solutions built for performance, continuity, and growth."
                    </p>
                  </div>

                  {/* Pillars */}
                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    {[
                      { label: 'Performance', icon: '⚡' },
                      { label: 'Continuity', icon: '🔄' },
                      { label: 'Growth', icon: '📈' },
                    ].map((pillar) => (
                      <div key={pillar.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                        <span className="text-xl">{pillar.icon}</span>
                        <span className="text-sm font-semibold text-slate-300">{pillar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        .animate-gradient { animation: gradient 4s ease infinite; }
        .animation-delay-3000 { animation-delay: 3s; }
      `}</style>
    </section>
  );
};

export default AboutStorySection;