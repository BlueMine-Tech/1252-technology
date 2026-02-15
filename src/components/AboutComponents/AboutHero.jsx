import React, { useState, useEffect } from 'react';

const AboutHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 lg:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-10 -left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              backgroundColor: i % 2 === 0 ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.6)',
              boxShadow: i % 2 === 0 
                ? '0 0 10px rgba(34, 211, 238, 0.5)' 
                : '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          />
        ))}

        {/* Scanning Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan-down"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-scan-right animation-delay-1000"></div>
        </div>

        {/* Circuit Pattern */}
        <div className="absolute top-1/4 right-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" className="animate-pulse-slow">
            <path d="M20 20 L20 80 L80 80 L80 140 L140 140" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-cyan-400"
                  strokeDasharray="5,5"/>
            <circle cx="20" cy="20" r="4" fill="currentColor" className="text-blue-400"/>
            <circle cx="80" cy="80" r="4" fill="currentColor" className="text-cyan-400"/>
            <circle cx="140" cy="140" r="4" fill="currentColor" className="text-blue-400"/>
            <path d="M180 20 L180 80 L120 80 L120 140 L60 140" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-blue-400"
                  strokeDasharray="5,5"/>
            <circle cx="180" cy="20" r="4" fill="currentColor" className="text-cyan-400"/>
            <circle cx="120" cy="80" r="4" fill="currentColor" className="text-blue-400"/>
          </svg>
        </div>

        {/* Connecting Dots Network */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="animate-pulse-very-slow">
            <defs>
              <radialGradient id="aboutDotGlow">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
              </radialGradient>
            </defs>
            <line x1="15%" y1="25%" x2="35%" y2="45%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            <line x1="35%" y1="45%" x2="55%" y2="35%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            <line x1="55%" y1="35%" x2="75%" y2="55%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            
            <circle cx="15%" cy="25%" r="4" fill="url(#aboutDotGlow)" className="animate-pulse-slow"/>
            <circle cx="35%" cy="45%" r="4" fill="url(#aboutDotGlow)" className="animate-pulse-slow animation-delay-500"/>
            <circle cx="55%" cy="35%" r="4" fill="url(#aboutDotGlow)" className="animate-pulse-slow animation-delay-1000"/>
            <circle cx="75%" cy="55%" r="4" fill="url(#aboutDotGlow)" className="animate-pulse-slow animation-delay-1500"/>
          </svg>
        </div>

        {/* Rotating Light Rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent rotate-45 animate-spin-very-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-400/5 to-transparent -rotate-45 animate-spin-reverse"></div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-cyan-400 tracking-wide">
              Singapore • Founded 2024
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block text-white leading-tight mb-3">
              We're Not the Biggest
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                We're the Most Careful
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-50"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <div 
            className={`mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              1252 Technology Pte Limited is a Singapore-based IT hardware and solutions provider 
              supporting businesses, system integrators, and project owners with reliable, 
              enterprise-grade technology.
            </p>
          </div>

          {/* Key Stats / Values */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Stat 1 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm font-semibold text-slate-300">
                  Founder-Led Accountability
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Every engagement personally reviewed
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  52
                </div>
                <div className="text-sm font-semibold text-slate-300">
                  Weeks of Commitment
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Long-term support mindset
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  SG
                </div>
                <div className="text-sm font-semibold text-slate-300">
                  Singapore-Based
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  Fast response, local support
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement Card */}
          <div 
            className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-gradient p-8 rounded-2xl overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-lg text-white leading-relaxed">
                  Technology should work <strong className="text-cyan-300">quietly in the background</strong> — 
                  stable, secure, and dependable. We focus on delivering solutions that businesses 
                  can rely on <strong className="text-cyan-300">every day of the year</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 1;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes pulse-very-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes scan-down {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes scan-right {
          0% {
            left: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-very-slow {
          animation: pulse-very-slow 6s ease-in-out infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }

        .animate-scan-down {
          animation: scan-down 8s linear infinite;
        }

        .animate-scan-right {
          animation: scan-right 10s linear infinite;
        }

        .animate-shine {
          animation: shine 3s infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AboutHeroSection;