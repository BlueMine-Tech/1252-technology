import React from 'react';
import { Link } from 'react-router-dom';

const WhoWereBestForSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#2F4456] relative overflow-hidden">
      {/* Sophisticated dotted background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(200, 217, 230, 0.5) 1.5px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#567C8D]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C8D9E6]/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#567C8D]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#567C8D]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight leading-tight drop-shadow-lg">
            Who We're Best For
          </h2>
          
          <p className="text-base lg:text-lg text-[#D4E3EA] max-w-2xl mx-auto leading-relaxed font-medium">
            We partner with businesses that value reliability, quality relationships, and long-term success.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-6xl mx-auto mb-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="group relative transform hover:-translate-y-2 transition-all duration-400"
            >
              {/* Enhanced glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#567C8D] to-[#C8D9E6] rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>
              
              {/* Card */}
              <div 
                className="relative rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-400 h-full flex flex-col"
                style={{ 
                  backgroundColor: '#FDFBF7', 
                  borderColor: '#E8E3D9', 
                  borderWidth: '2px',
                  padding: '1.75rem'
                }}
              >
                {/* Checkmark icon */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div 
                    className="rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-400"
                    style={{ 
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #567C8D, #C8D9E6)'
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
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', flex: 1 }}>
                  <h3 className="text-xl font-bold text-[#2F4456] group-hover:text-[#567C8D] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5F6D] leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 bg-white text-[#2F4456] font-bold text-base rounded-xl overflow-hidden transition-all duration-400 hover:shadow-2xl hover:shadow-white/20 hover:scale-105"
            style={{ padding: '1rem 2.5rem' }}
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <span>Start Your Partnership</span>
              <svg className="transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '1.25rem', height: '1.25rem', strokeWidth: '2.5' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C8D9E6] to-[#E8F1F7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </Link>
          
          {/* Footer badges - with proper gap */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-[#C8D9E6] text-sm font-medium">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-[#C8D9E6] rounded-full animate-pulse"></div>
              <span>Trusted by Industry Leaders</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-[#C8D9E6] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
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

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
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