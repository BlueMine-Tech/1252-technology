import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const WhoWereBestForSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger cards to appear one by one
            [0, 1, 2, 3].forEach((index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "Value-Driven",
      text: "Businesses that value reliability over cheapest price"
    },
    {
      title: "Integration Partners",
      text: "System integrators needing a dependable sourcing partner"
    },
    {
      title: "Long-Term Focus",
      text: "Projects where long-term support matters"
    },
    {
      title: "Accountability First",
      text: "Clients who want one accountable point of contact"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Hardware/Server Background Elements */}
      <div className="absolute inset-0">
        {/* Network Cable Lines - Orange/Yellow like in image */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cableGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
            <linearGradient id="cableGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          
          {/* Curved cable paths simulating network cables */}
          <path d="M 100 200 Q 300 100, 500 250" stroke="url(#cableGradient1)" strokeWidth="3" fill="none" className="animate-dash" strokeDasharray="10,5"/>
          <path d="M 200 400 Q 400 300, 700 450" stroke="url(#cableGradient1)" strokeWidth="3" fill="none" className="animate-dash-delayed" strokeDasharray="10,5"/>
          <path d="M 800 150 Q 1000 250, 1200 200" stroke="url(#cableGradient2)" strokeWidth="3" fill="none" className="animate-dash" strokeDasharray="10,5"/>
          <path d="M 600 600 Q 800 500, 1100 650" stroke="url(#cableGradient2)" strokeWidth="3" fill="none" className="animate-dash-delayed" strokeDasharray="10,5"/>
          
          {/* Connection points - like server ports */}
          <circle cx="100" cy="200" r="6" fill="#F59E0B" className="animate-pulse-slow">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="500" cy="250" r="6" fill="#EAB308" className="animate-pulse-slow" style={{animationDelay: '0.5s'}}>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="450" r="6" fill="#F59E0B" className="animate-pulse-slow" style={{animationDelay: '1s'}}>
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1200" cy="200" r="6" fill="#22D3EE" className="animate-pulse-slow">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>

        {/* Server Rack Representation - Left Side */}
        <div className="absolute left-10 top-20 opacity-10">
          <div className="flex flex-col gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex gap-1 items-center">
                <div className="w-32 h-3 bg-gradient-to-r from-blue-600/50 to-cyan-500/50 rounded-sm animate-pulse-slow" style={{animationDelay: `${i * 0.2}s`}}></div>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60 animate-blink" style={{animationDelay: `${i * 0.3}s`}}></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400/60 animate-blink" style={{animationDelay: `${i * 0.3 + 0.5}s`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side server rack */}
        <div className="absolute right-10 bottom-20 opacity-10">
          <div className="flex flex-col gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-1 items-center flex-row-reverse">
                <div className="w-32 h-3 bg-gradient-to-l from-blue-600/50 to-cyan-500/50 rounded-sm animate-pulse-slow" style={{animationDelay: `${i * 0.25}s`}}></div>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60 animate-blink" style={{animationDelay: `${i * 0.4}s`}}></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-400/60 animate-blink" style={{animationDelay: `${i * 0.4 + 0.3}s`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-blob"></div>
        
        {/* Grid Pattern representing circuit board */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Data Flow Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-data-flow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              width: i % 3 === 0 ? '8px' : '4px',
              height: i % 3 === 0 ? '8px' : '4px',
              backgroundColor: i % 2 === 0 ? 'rgba(34, 211, 238, 0.4)' : 'rgba(245, 158, 11, 0.4)',
              boxShadow: i % 2 === 0 
                ? '0 0 12px rgba(34, 211, 238, 0.6)' 
                : '0 0 12px rgba(245, 158, 11, 0.6)'
            }}
          />
        ))}

        {/* Tech Pattern Icons - Server Slots */}
        <div className="absolute top-1/4 left-1/4 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100" className="animate-spin-very-slow">
            <rect x="10" y="10" width="80" height="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400"/>
            <rect x="10" y="35" width="80" height="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"/>
            <rect x="10" y="60" width="80" height="15" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400"/>
            <circle cx="20" cy="17.5" r="2" fill="currentColor" className="text-yellow-500"/>
            <circle cx="20" cy="42.5" r="2" fill="currentColor" className="text-cyan-400"/>
            <circle cx="20" cy="67.5" r="2" fill="currentColor" className="text-yellow-500"/>
          </svg>
        </div>

        {/* Accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight leading-tight drop-shadow-lg">
            Who We're Best For
          </h2>
          
          <p className="text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
            We partner with businesses that value reliability, quality relationships, and long-term success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {cards.map((item, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } hover:-translate-y-2`}
            >
              {/* Enhanced glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              
              {/* Card */}
              <div 
                className="relative rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-400 h-full flex flex-col backdrop-blur-sm"
                style={{ 
                  backgroundColor: 'rgba(30, 41, 59, 0.6)', 
                  borderColor: 'rgba(34, 211, 238, 0.3)', 
                  borderWidth: '2px',
                  padding: '1.75rem'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl pointer-events-none"></div>

                {/* Checkmark icon */}
                <div style={{ marginBottom: '1.25rem' }} className="relative z-10">
                  <div 
                    className="rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-400"
                    style={{ 
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #3B82F6, #22D3EE)'
                    }}
                  >
                    <svg 
                      className="text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      style={{ width: '1.5rem', height: '1.5rem', strokeWidth: '3' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', flex: 1 }} className="relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fadeIn animation-delay-800">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] text-white font-bold text-base rounded-xl overflow-hidden transition-all duration-400 hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105"
            style={{ padding: '1rem 2.5rem' }}
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <span>Start Your Partnership</span>
              <svg className="transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem', strokeWidth: '2.5' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-[length:200%_100%] animate-gradient"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/50 group-hover:border-cyan-300 transition-all duration-300"></div>
          </Link>
          
          {/* Footer badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-slate-300 text-sm font-medium">
            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-slow"></div>
              <span>Trusted by Industry Leaders</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <span>Enterprise-Grade Support</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.05);
          }
        }

        @keyframes data-flow {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          25% {
            transform: translate(50px, -30px);
            opacity: 0.8;
          }
          50% {
            transform: translate(100px, 20px);
            opacity: 1;
          }
          75% {
            transform: translate(150px, -10px);
            opacity: 0.6;
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
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

        @keyframes dash {
          to {
            stroke-dashoffset: -100;
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

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
        }

        .animate-data-flow {
          animation: data-flow 8s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 2s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-dash {
          animation: dash 20s linear infinite;
        }

        .animate-dash-delayed {
          animation: dash 25s linear infinite;
          animation-delay: 2s;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 30s linear infinite;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        @media (min-width: 1024px) {
          .max-w-6xl > div {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .max-w-6xl > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWereBestForSection;