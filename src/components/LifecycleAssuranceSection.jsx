import React, { useState, useEffect, useRef } from 'react';

const LifecycleAssuranceSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger cards to appear one by one
            lifecycleSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
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

  const lifecycleSteps = [
    {
      number: '01',
      title: 'Assess',
      description: 'Requirements validation, environment checks, and hardware use-case alignment before quotation.',
      icon: '🔍',
      details: [
        'Physical environment assessment',
        'Power and cooling requirements',
        'Rack space and mounting needs',
        'Operating conditions validation'
      ]
    },
    {
      number: '02',
      title: 'Design',
      description: 'Hardware model selection, certification checks, compatibility verification, and scalability planning.',
      icon: '📐',
      details: [
        'Hardware specifications matching',
        'Brand and model selection',
        'Compatibility verification',
        'Expansion planning'
      ]
    },
    {
      number: '03',
      title: 'Deploy',
      description: 'Deployment-ready hardware sourcing with project timelines, spare parts planning, and documentation support.',
      icon: '🚀',
      details: [
        'Timely hardware delivery',
        'Spare parts availability',
        'Installation documentation',
        'Warranty registration'
      ]
    },
    {
      number: '04',
      title: 'Sustain',
      description: 'Post-deployment hardware continuity covering replacements, expansion, and end-of-life awareness.',
      icon: '🔄',
      details: [
        'Replacement part sourcing',
        'Hardware expansion support',
        'EOL notifications',
        'Upgrade path planning'
      ]
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full animate-fadeIn">
            <svg className="w-5 h-5 text-cyan-400 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-cyan-400 tracking-wide">Our Framework</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 animate-fadeIn animation-delay-200">
            Lifecycle Assurance™
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn animation-delay-400">
            Our proprietary framework ensuring hardware continuity across the full technology lifecycle — not just point-of-sale delivery
          </p>
        </div>

        {/* Lifecycle Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {lifecycleSteps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] hover:scale-105 h-full flex flex-col overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-float-subtle" style={{ animationDelay: `${index * 0.2}s` }}>
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div className="text-5xl font-black bg-gradient-to-r from-cyan-400/30 to-blue-500/30 bg-clip-text text-transparent mb-2 group-hover:from-cyan-400/50 group-hover:to-blue-500/50 transition-all duration-300">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-4 flex-grow">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2 mt-auto">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400 group-hover:text-cyan-300 transition-colors duration-300">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Arrow between cards (desktop only) */}
              {index < lifecycleSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-cyan-400 animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              {/* Mobile arrow (vertical) */}
              {index < lifecycleSteps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <svg className="w-8 h-8 text-cyan-400 animate-bounce-slow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center animate-fadeIn animation-delay-1000">
          <div className="relative inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-gradient p-8 rounded-2xl max-w-3xl overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50"></div>
            
            {/* Content */}
            <p className="relative z-10 text-lg text-white leading-relaxed">
              This approach ensures every <strong className="text-cyan-300">hardware solution</strong> remains stable, supported, and scalable throughout its lifecycle — from initial assessment to end-of-life replacement.
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

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }

        .animate-shine {
          animation: shine 3s infinite;
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

export default LifecycleAssuranceSection;