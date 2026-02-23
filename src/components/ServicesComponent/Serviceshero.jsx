import React, { useState, useEffect } from 'react';

const ServicesHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 lg:pt-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -top-10 -left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svcGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34,211,238,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svcGrid)" />
        </svg>

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${10 + i * 9}%`, top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`, animationDuration: `${6 + i * 0.4}s`,
              backgroundColor: i % 2 === 0 ? 'rgba(34,211,238,0.6)' : 'rgba(59,130,246,0.6)',
              boxShadow: i % 2 === 0 ? '0 0 10px rgba(34,211,238,0.5)' : '0 0 10px rgba(59,130,246,0.5)',
            }}
          />
        ))}

        {/* Scan lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan-down" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-scan-right animation-delay-1000" />

        {/* Circuit SVG */}
        <div className="absolute top-1/4 right-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" className="animate-pulse-slow">
            <path d="M20 20 L20 80 L80 80 L80 140 L140 140" fill="none" stroke="rgba(34,211,238,1)" strokeWidth="2" strokeDasharray="5,5"/>
            <circle cx="20" cy="20" r="4" fill="rgba(59,130,246,1)"/>
            <circle cx="80" cy="80" r="4" fill="rgba(34,211,238,1)"/>
            <circle cx="140" cy="140" r="4" fill="rgba(59,130,246,1)"/>
            <path d="M180 20 L180 80 L120 80 L120 140 L60 140" fill="none" stroke="rgba(59,130,246,1)" strokeWidth="2" strokeDasharray="5,5"/>
            <circle cx="180" cy="20" r="4" fill="rgba(34,211,238,1)"/>
            <circle cx="120" cy="80" r="4" fill="rgba(59,130,246,1)"/>
          </svg>
        </div>

        {/* Rotating rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent rotate-45 animate-spin-very-slow" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-400/5 to-transparent -rotate-45 animate-spin-reverse" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-semibold text-cyan-400 tracking-wide">Enterprise-Grade Solutions</span>
        </div>

        {/* Heading */}
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="block text-white leading-tight mb-3">What We</span>
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Deliver
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-50" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          We are more than a hardware supplier — we are a strategic infrastructure partner 
          committed to <span className="text-cyan-400 font-medium">reliability</span>,{' '}
          <span className="text-blue-400 font-medium">security</span>, and{' '}
          <span className="text-cyan-400 font-medium">long-term value</span>.
        </p>

        {/* Approach badges */}
        <div className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {['Vendor-Neutral', 'Enterprise Standards', 'Performance-Driven', 'Long-Term Partnership'].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 border border-slate-700/60 rounded-full backdrop-blur-sm hover:border-cyan-400/50 transition-colors duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-sm font-semibold text-slate-300">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-50px) scale(1.1)} 66%{transform:translate(-20px,20px) scale(0.9)} }
        @keyframes float { 0%,100%{transform:translateY(0) translateX(0);opacity:0.6} 50%{transform:translateY(-30px) translateX(15px);opacity:1} }
        @keyframes gradient-x { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes pulse-slow { 0%,100%{opacity:1} 50%{opacity:0.7} }
        @keyframes spin-very-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-reverse { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes scan-down { 0%{top:0;opacity:0} 50%{opacity:1} 100%{top:100%;opacity:0} }
        @keyframes scan-right { 0%{left:0;opacity:0} 50%{opacity:1} 100%{left:100%;opacity:0} }
        .animate-blob{animation:blob 7s infinite}
        .animate-float{animation:float 6s ease-in-out infinite}
        .animate-gradient-x{background-size:200% 200%;animation:gradient-x 3s ease infinite}
        .animate-pulse-slow{animation:pulse-slow 3s ease-in-out infinite}
        .animate-spin-very-slow{animation:spin-very-slow 20s linear infinite}
        .animate-spin-reverse{animation:spin-reverse 25s linear infinite}
        .animate-scan-down{animation:scan-down 8s linear infinite}
        .animate-scan-right{animation:scan-right 10s linear infinite}
        .animation-delay-1000{animation-delay:1s}
        .animation-delay-2000{animation-delay:2s}
        .animation-delay-4000{animation-delay:4s}
      `}</style>
    </section>
  );
};

export default ServicesHeroSection;