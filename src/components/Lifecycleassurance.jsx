import React from 'react';

const LifecycleAssuranceSection = () => {
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
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8D9E6] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#567C8D] rounded-full filter blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-[#567C8D]/10 to-[#2F4456]/10 rounded-full border border-[#567C8D]/20">
            <svg className="w-5 h-5 text-[#567C8D]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-[#567C8D] tracking-wide">Our Framework</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-[#2F4456] mb-4">
            Lifecycle Assurance™
          </h2>
          <p className="text-xl text-[#567C8D] max-w-3xl mx-auto">
            Our proprietary framework ensuring hardware continuity across the full technology lifecycle — not just point-of-sale delivery
          </p>
        </div>

        {/* Lifecycle Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {lifecycleSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-[#F5EFEB] to-white p-8 rounded-2xl border-2 border-[#567C8D]/20 hover:border-[#567C8D] transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="text-5xl font-black text-[#567C8D]/20 mb-2">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#2F4456] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#333333] leading-relaxed mb-4 flex-grow">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mt-auto">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#567C8D]">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow between cards (desktop only) */}
              {index < lifecycleSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-[#567C8D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              {/* Mobile arrow (vertical) */}
              {index < lifecycleSteps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <svg className="w-8 h-8 text-[#567C8D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#2F4456] to-[#567C8D] p-8 rounded-2xl max-w-3xl">
            <p className="text-lg text-white leading-relaxed">
              This approach ensures every <strong>hardware solution</strong> remains stable, supported, and scalable throughout its lifecycle — from initial assessment to end-of-life replacement.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default LifecycleAssuranceSection;