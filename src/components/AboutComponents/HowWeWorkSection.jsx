import React, { useState, useEffect, useRef } from 'react';

const HowWeWorkSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger steps to appear one by one
            workSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 200);
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

  const workSteps = [
    {
      number: '01',
      title: 'Understand Your Requirement',
      description: 'We start by listening. No templates, no assumptions — just a clear understanding of what you need, where it will be deployed, and what success looks like.',
      icon: '🎯',
      details: [
        'Project scope and objectives',
        'Technical requirements gathering',
        'Environment and constraints',
        'Timeline and budget alignment'
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      number: '02',
      title: 'Validate Options (Lifecycle Assurance™)',
      description: 'Every recommendation goes through our Lifecycle Assurance™ framework — checking availability, compatibility, certification, and long-term support before we quote.',
      icon: '✓',
      details: [
        'Hardware lifecycle verification',
        'Compatibility and certification checks',
        'End-of-life risk assessment',
        'Future scalability planning'
      ],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      number: '03',
      title: 'Quote & Confirm',
      description: 'Transparent pricing with no hidden costs. You get a clear quotation with delivery timelines, warranty terms, and everything needed to make an informed decision.',
      icon: '📋',
      details: [
        'Detailed pricing breakdown',
        'Clear delivery timelines',
        'Warranty and support terms',
        'Documentation and compliance'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      number: '04',
      title: 'Support Beyond Delivery',
      description: 'Our relationship doesn\'t end at delivery. We stay available for replacements, expansions, technical queries, and end-of-life planning throughout your hardware lifecycle.',
      icon: '🔄',
      details: [
        'Post-deployment support',
        'Replacement parts sourcing',
        'Expansion and upgrade assistance',
        'Ongoing technical guidance'
      ],
      color: 'from-blue-600 to-cyan-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgzNCwgMjExLCAyMzgsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
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

        {/* Animated connecting line */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none hidden lg:block">
          <defs>
            <linearGradient id="processLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0)" />
              <stop offset="50%" stopColor="rgba(34, 211, 238, 0.6)" />
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
            </linearGradient>
          </defs>
          <path 
            d="M 100 50% L 95% 50%" 
            stroke="url(#processLine)" 
            strokeWidth="2" 
            fill="none"
            className="animate-draw-line"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full animate-fadeIn">
            <svg className="w-5 h-5 text-cyan-400 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-cyan-400 tracking-wide">Our Process</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 animate-fadeIn animation-delay-200">
            How Engagement Works
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn animation-delay-400">
            A structured, transparent approach to every project — from first contact to long-term support
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 lg:space-y-12">
          {workSteps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              {/* Step Container */}
              <div className="relative group">
                <div className="grid lg:grid-cols-12 gap-6 items-center">
                  {/* Number Circle */}
                  <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500"></div>
                      
                      {/* Number circle */}
                      <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/20`}>
                        <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                        <span className="text-3xl font-black text-white relative z-10">{step.number}</span>
                      </div>

                      {/* Animated pulse ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100 animate-ping-slow"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-500/30 group-hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)]">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Icon */}
                          <div className="text-5xl group-hover:scale-110 transition-transform duration-300 animate-float-subtle" style={{ animationDelay: `${index * 0.2}s` }}>
                            {step.icon}
                          </div>

                          {/* Title and Description */}
                          <div className="flex-1">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                              {step.description}
                            </p>

                            {/* Details List */}
                            <div className="grid sm:grid-cols-2 gap-3">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-slate-400 group-hover:text-cyan-300 transition-colors duration-300">
                                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden rounded-br-2xl">
                        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow (between steps) */}
                {index < workSteps.length - 1 && (
                  <div className="flex justify-center my-6 lg:ml-12">
                    <svg className="w-8 h-8 text-cyan-400 animate-bounce-slow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center animate-fadeIn animation-delay-1000">
          <div className="relative inline-block bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-2xl max-w-3xl">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-slate-300 leading-relaxed text-left">
                <strong className="text-white">No templates. No assumptions.</strong> Every engagement is reviewed personally to ensure we recommend what you actually need — not what's easiest to sell.
              </p>
            </div>
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
            opacity: 0.6;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        @keyframes draw-line {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
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

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-draw-line {
          stroke-dasharray: 1000;
          animation: draw-line 4s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
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

export default HowWeWorkSection;