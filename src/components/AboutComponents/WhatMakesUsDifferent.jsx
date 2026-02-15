import React, { useState, useEffect, useRef } from 'react';

const WhatMakesUsDifferentSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger cards to appear one by one
            differentiators.forEach((_, index) => {
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

  const differentiators = [
    {
      icon: '🇸🇬',
      title: 'Singapore-Based Support',
      description: 'Fast turnaround with local presence. No offshore delays, no timezone gaps — just responsive service when you need it.',
      highlight: 'Same-day response'
    },
    {
      icon: '🤝',
      title: 'Reliable Vendor Network',
      description: 'Access to trusted brands and verified suppliers. We source from partners we know and trust, ensuring authenticity and quality.',
      highlight: 'Trusted sourcing'
    },
    {
      icon: '🎯',
      title: 'Project-Friendly Approach',
      description: 'We\'re not box sellers — we understand project timelines, constraints, and success criteria. Solutions tailored to your actual needs.',
      highlight: 'Not just box selling'
    },
    {
      icon: '💎',
      title: 'Transparent Pricing',
      description: 'Honest recommendations without hidden costs. You get clear pricing, realistic timelines, and straightforward advice.',
      highlight: 'No surprises'
    },
    {
      icon: '🔄',
      title: 'Long-Term Mindset',
      description: '12 months. 52 weeks. Always on. We commit to supporting your hardware throughout its lifecycle, not just until delivery.',
      highlight: '52-week commitment'
    },
    {
      icon: '👤',
      title: 'Founder-Led Accountability',
      description: 'Every engagement is personally reviewed by the founder. Direct access, consistent quality, and someone who cares about getting it right.',
      highlight: 'Personal oversight'
    }
  ];

  const idealClients = [
    {
      icon: '✓',
      text: 'Businesses that value reliability over cheapest price',
      color: 'text-cyan-400'
    },
    {
      icon: '✓',
      text: 'System integrators needing a dependable sourcing partner',
      color: 'text-blue-400'
    },
    {
      icon: '✓',
      text: 'Projects where long-term support matters',
      color: 'text-cyan-400'
    },
    {
      icon: '✓',
      text: 'Clients who want one accountable point of contact',
      color: 'text-blue-400'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgzNCwgMjExLCAyMzgsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              backgroundColor: i % 2 === 0 ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.4)',
              boxShadow: i % 2 === 0 
                ? '0 0 8px rgba(34, 211, 238, 0.4)' 
                : '0 0 8px rgba(59, 130, 246, 0.4)'
            }}
          />
        ))}

        {/* Hexagon Pattern */}
        <div className="absolute bottom-10 left-10 opacity-10">
          <svg width="150" height="150" viewBox="0 0 150 150" className="animate-spin-very-slow">
            <polygon points="75,15 127.5,45 127.5,105 75,135 22.5,105 22.5,45" 
                     fill="none" 
                     stroke="currentColor" 
                     strokeWidth="2" 
                     className="text-cyan-400"/>
            <polygon points="75,30 112.5,52.5 112.5,97.5 75,120 37.5,97.5 37.5,52.5" 
                     fill="none" 
                     stroke="currentColor" 
                     strokeWidth="1.5" 
                     className="text-blue-400"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full animate-fadeIn">
            <svg className="w-5 h-5 text-cyan-400 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-cyan-400 tracking-wide">Our Advantage</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 animate-fadeIn animation-delay-200">
            What Makes Us Different
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn animation-delay-400">
            We're not the biggest — we're the most careful. Here's what sets us apart.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-blue-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] hover:scale-105 h-full overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-float-subtle" style={{ animationDelay: `${index * 0.2}s` }}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                    {item.description}
                  </p>

                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/30 rounded-full">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse-slow"></div>
                    <span className="text-xs font-semibold text-cyan-400">{item.highlight}</span>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-2xl">
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI-Assisted Validation Highlight */}
        <div className="mb-16 animate-fadeIn animation-delay-800">
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-400/50 overflow-hidden max-w-4xl mx-auto">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-600/5 to-cyan-500/5 bg-[length:200%_100%] animate-gradient"></div>
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 animate-pulse-slow"></div>

            <div className="relative z-10 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">AI-Assisted Validation</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our recommendations are supported by <strong className="text-cyan-400">intelligent analysis</strong> to cross-check design choices, lifecycle risks, and deployment suitability before delivery — ensuring accuracy and consistency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We're Best For Section */}
        <div className="animate-fadeIn animation-delay-1000">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Who We're Best For
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We work with clients who understand that <span className="text-cyan-400 font-semibold">reliability matters more than cheapest price</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {idealClients.map((client, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {client.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center animate-fadeIn animation-delay-1200">
          <div className="inline-block bg-gradient-to-r from-blue-600/10 to-cyan-500/10 backdrop-blur-sm border border-cyan-400/20 px-6 py-4 rounded-full">
            <p className="text-slate-300">
              <span className="text-cyan-400 font-bold">Premium approach.</span>{' '}
              <span className="text-white font-semibold">Practical pricing.</span>{' '}
              <span className="text-slate-400">Long-term thinking.</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
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
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }

        @keyframes float-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
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

        @keyframes spin-very-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-subtle {
          animation: float-subtle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }

        .animate-spin-very-slow {
          animation: spin-very-slow 20s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
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

export default WhatMakesUsDifferentSection;