import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <section 
      className="relative py-32 lg:py-40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl animate-float-slow"
          style={{ left: `${mousePosition.x * 0.1}%`, top: `${mousePosition.y * 0.1}%` }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-cyan-500 rounded-full opacity-15 blur-3xl animate-float-slow animation-delay-2000"
          style={{ right: `${mousePosition.x * 0.05}%`, bottom: `${mousePosition.y * 0.05}%` }}
        ></div>

        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-particle-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: i % 2 === 0 ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.6)',
              opacity: particle.opacity,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${i * 0.1}s`,
              boxShadow: i % 2 === 0 ? '0 0 10px rgba(34, 211, 238, 0.5)' : '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'grid-pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
          <div className="absolute inset-0 border-2 border-cyan-400 rounded-full animate-spin-very-slow"></div>
          <div className="absolute inset-8 border-2 border-blue-500 rounded-full animate-spin-reverse-slow"></div>
          <div className="absolute inset-16 border border-cyan-400 rounded-full animate-spin-very-slow"></div>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-400/30 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyan-400/30 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-cyan-400/30 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-400/30 animate-pulse-slow animation-delay-3000"></div>

        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
              <stop offset="50%" stopColor="rgba(34, 211, 238, 0.8)" />
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
            </linearGradient>
          </defs>
          <path d="M 100 100 Q 300 200, 500 100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-dash-flow" strokeDasharray="10,5" />
          <path d="M 900 200 Q 700 300, 500 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-dash-flow" strokeDasharray="10,5" style={{ animationDelay: '1s' }} />
          <path d="M 200 400 Q 400 300, 600 400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-dash-flow" strokeDasharray="10,5" style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading — gold border effect */}
        <div className="mb-8 animate-fadeIn">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight gold-border-text">
            Ready to Get Started?
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-4">
            Let's discuss how we can support your hardware requirements with reliable, long-term solutions.
          </p>
          <p className="text-lg text-cyan-400 font-semibold">
            12 Months. 52 Weeks. Always On.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeIn animation-delay-400">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(34,211,238,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-gradient-flow"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Request Solution Review
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>

          <a
            href="tel:+6590026490"
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-semibold text-slate-200 rounded-xl border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </a>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 animate-fadeIn animation-delay-800">
          <div className="group relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/60">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-400 mb-2">Email</h3>
              <a href="mailto:max@1252.company" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">max@1252.company</a>
            </div>
          </div>

          <div className="group relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/60">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-400 mb-2">Phone / WhatsApp</h3>
              <a href="tel:+6590026490" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">+65 9002 6490</a>
            </div>
          </div>

          <div className="group relative bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/60">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-400 mb-2">Location</h3>
              <p className="text-white font-medium text-sm">60 Paya Lebar Road, #06-28<br />Paya Lebar Square<br />Singapore 409051</p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 flex justify-center animate-fadeIn animation-delay-1200">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-400/30">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-slow"></div>
            <span className="text-sm font-semibold text-slate-300">Powered by Lifecycle Assurance™</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Gold border effect — consistent with HeroSection & LifecycleAssuranceSection */
        .gold-border-text {
          text-shadow:
             1px  1px 0px rgba(212, 175, 55, 0.75),
            -1px -1px 0px rgba(212, 175, 55, 0.75),
             1px -1px 0px rgba(212, 175, 55, 0.6),
            -1px  1px 0px rgba(212, 175, 55, 0.6),
             3px  3px 0px rgba(170, 130, 10, 0.35),
             4px  4px 3px rgba(0, 0, 0, 0.45);
        }

        .gold-border-text:hover {
          text-shadow:
             1px  1px 0px rgba(240, 200, 60, 0.9),
            -1px -1px 0px rgba(240, 200, 60, 0.9),
             1px -1px 0px rgba(240, 200, 60, 0.75),
            -1px  1px 0px rgba(240, 200, 60, 0.75),
             3px  3px 0px rgba(190, 150, 20, 0.45),
             4px  4px 3px rgba(0, 0, 0, 0.45);
          transition: text-shadow 0.4s ease;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }

        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(30px, -30px); opacity: 0.8; }
          50% { transform: translate(-20px, -50px); opacity: 1; }
          75% { transform: translate(-40px, -20px); opacity: 0.6; }
        }

        @keyframes grid-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes dash-flow {
          to { stroke-dashoffset: -100; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-particle-float { animation: particle-float 20s ease-in-out infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 30s linear infinite; }
        .animate-spin-reverse-slow { animation: spin-reverse-slow 25s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-gradient-flow { animation: gradient-flow 4s ease infinite; }
        .animate-dash-flow { animation: dash-flow 20s linear infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }

        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
      `}</style>
    </section>
  );
};

export default FinalCTASection;