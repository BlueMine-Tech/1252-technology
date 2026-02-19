import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: '⚡', text: 'Fast Response' },
    { icon: '✓', text: 'Trusted Sourcing' },
    { icon: '🎯', text: 'Project-Ready Solutions' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20 lg:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-10 -left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Gold accent subtle glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-blob animation-delay-5000"></div>
        
        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.05)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0.05)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/20 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-blue-500/20 rounded-full animate-ping-slow animation-delay-2000"></div>
        
        {/* Floating Particles - More of them */}
        {[...Array(12)].map((_, i) => (
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

        {/* Hexagon Pattern */}
        <div className="absolute top-1/3 right-10 opacity-10">
          <svg width="200" height="200" viewBox="0 0 200 200" className="animate-spin-very-slow">
            <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" 
                     fill="none" 
                     stroke="currentColor" 
                     strokeWidth="2" 
                     className="text-cyan-400"/>
            <polygon points="100,40 150,70 150,130 100,160 50,130 50,70" 
                     fill="none" 
                     stroke="currentColor" 
                     strokeWidth="1.5" 
                     className="text-blue-400"/>
          </svg>
        </div>

        {/* Circuit Board Pattern */}
        <div className="absolute bottom-10 left-10 opacity-10">
          <svg width="150" height="150" viewBox="0 0 150 150" className="animate-pulse-slow">
            <path d="M20 20 L20 60 L60 60 L60 100 L100 100" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-cyan-400"
                  strokeDasharray="5,5"/>
            <circle cx="20" cy="20" r="3" fill="currentColor" className="text-blue-400"/>
            <circle cx="60" cy="60" r="3" fill="currentColor" className="text-cyan-400"/>
            <circle cx="100" cy="100" r="3" fill="currentColor" className="text-blue-400"/>
            <path d="M130 20 L130 60 L90 60 L90 100 L50 100" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className="text-blue-400"
                  strokeDasharray="5,5"/>
            <circle cx="130" cy="20" r="3" fill="currentColor" className="text-cyan-400"/>
            <circle cx="90" cy="60" r="3" fill="currentColor" className="text-blue-400"/>
          </svg>
        </div>

        {/* Glowing Dots Network */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" className="animate-pulse-very-slow">
            <defs>
              <radialGradient id="dotGlow">
                <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" />
                <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
              </radialGradient>
            </defs>
            {/* Connecting lines and dots */}
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            <line x1="50%" y1="30%" x2="70%" y2="50%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            <line x1="70%" y1="50%" x2="90%" y2="35%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
            
            <circle cx="10%" cy="20%" r="4" fill="url(#dotGlow)" className="animate-pulse-slow"/>
            <circle cx="30%" cy="40%" r="4" fill="url(#dotGlow)" className="animate-pulse-slow animation-delay-500"/>
            <circle cx="50%" cy="30%" r="4" fill="url(#dotGlow)" className="animate-pulse-slow animation-delay-1000"/>
            <circle cx="70%" cy="50%" r="4" fill="url(#dotGlow)" className="animate-pulse-slow animation-delay-1500"/>
            <circle cx="90%" cy="35%" r="4" fill="url(#dotGlow)" className="animate-pulse-slow animation-delay-2000"/>
          </svg>
        </div>

        {/* Animated Light Rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-transparent rotate-45 animate-spin-very-slow"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-400/5 to-transparent -rotate-45 animate-spin-reverse"></div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge with gold accent */}
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full transition-all duration-1000 relative ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            {/* Subtle gold accent lines */}
            <div className="absolute inset-0 rounded-full border border-yellow-500/20 -translate-y-[1px]"></div>
            <div className="absolute inset-0 rounded-full border border-yellow-600/15 translate-x-[1px]"></div>
            
            <svg className="w-5 h-5 text-cyan-400 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-cyan-400 tracking-wide">
              Powered by Lifecycle Assurance™
            </span>
          </div>

          {/* Main Heading with gold underline accent */}
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block text-white leading-tight mb-3">
              We Power Modern
            </span>
            <span className="block text-white leading-tight mb-3">
              Businesses with
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Trusted Technology
              </span>
              {/* Main blue glow */}
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-50"></span>
              {/* Subtle gold accent line */}
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <div 
            className={`mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-3 leading-relaxed">
              Reliable IT Hardware & Network Solutions
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              <span className="inline-block animate-pulse-slow">12 Months.</span>{' '}
              <span className="inline-block animate-pulse-slow animation-delay-500">52 Weeks.</span>{' '}
              <span className="inline-block animate-pulse-slow animation-delay-1000 text-cyan-400">Always On.</span>
            </p>
          </div>

          {/* Feature Pills with gold accents */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-2 px-6 py-3 bg-blue-600/10 backdrop-blur-sm border border-blue-500/30 rounded-full hover:bg-blue-600/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gold accent on hover */}
                <div className="absolute inset-0 rounded-full border border-yellow-500/0 group-hover:border-yellow-500/20 transition-all duration-300 -translate-x-[1px] -translate-y-[1px]"></div>
                
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with gold accents */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="group relative px-10 py-5 text-lg font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(34,211,238,0.4)]"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-[length:200%_100%] animate-gradient"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Border with subtle gold accent */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-500 group-hover:border-cyan-400 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-xl border border-yellow-500/0 group-hover:border-yellow-500/20 transition-all duration-300 translate-x-[1px] translate-y-[1px]"></div>
              
              {/* Text */}
              <span className="relative z-10 flex items-center gap-2">
                Request Solution Review
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/about"
              className="group relative px-10 py-5 text-lg font-semibold text-slate-200 rounded-xl border-2 border-blue-600/50 hover:border-cyan-400 hover:bg-blue-600/10 transition-all duration-300 flex items-center gap-2"
            >
              {/* Subtle gold accent on hover */}
              <div className="absolute inset-0 rounded-xl border border-yellow-500/0 group-hover:border-yellow-500/15 transition-all duration-300 -translate-x-[1px] -translate-y-[1px]"></div>
              
              Learn Our Approach
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex flex-col items-center gap-3 animate-bounce-slow">
              <span className="text-sm font-medium text-slate-400/70 tracking-wider uppercase">
                Scroll to Explore
              </span>
              <div className="relative w-6 h-10 border-2 border-blue-500/50 rounded-full flex items-start justify-center p-2">
                {/* Gold accent on scroll indicator */}
                <div className="absolute inset-0 rounded-full border border-yellow-500/20 translate-x-[1px]"></div>
                <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-scroll"></div>
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

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
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

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-very-slow {
          animation: pulse-very-slow 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-scan-down {
          animation: scan-down 8s linear infinite;
        }

        .animate-scan-right {
          animation: scan-right 10s linear infinite;
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

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;