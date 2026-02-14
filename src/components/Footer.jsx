import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'IT Hardware & Infrastructure',
    'Networking & Routing Solutions',
    'Surveillance & Security Systems',
    'Industrial Equipment',
  ];

  const industries = [
    'Construction & Remote Sites',
    'Manufacturing & Industrial',
    'Logistics & Supply Chain',
    'Utilities & Infrastructure',
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
              backgroundColor: i % 2 === 0 ? 'rgba(34, 211, 238, 0.3)' : 'rgba(59, 130, 246, 0.3)',
              boxShadow: i % 2 === 0 
                ? '0 0 8px rgba(34, 211, 238, 0.3)' 
                : '0 0 8px rgba(59, 130, 246, 0.3)'
            }}
          />
        ))}
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="group inline-block">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/30 group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                  <span className="text-lg font-bold text-white">1252</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 leading-tight tracking-wide">
                    Technology
                  </span>
                  <span className="text-xs text-cyan-400 leading-tight tracking-wider">
                    Pte Limited
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed text-sm">
              Reliable IT Hardware & Network Solutions supporting businesses with enterprise-grade technology.
            </p>

            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 backdrop-blur-sm border border-blue-500/30 rounded-lg">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-slow"></div>
              <span className="text-xs font-semibold text-slate-300">
                Powered by Lifecycle Assurance™
              </span>
            </div>

            {/* Social Links (Optional - can add later) */}
            <div className="flex gap-3">
              <a
                href="mailto:max@1252.company"
                className="group w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-blue-500/30 hover:border-cyan-400 hover:bg-blue-600/20 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:+6590026490"
                className="group w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-blue-500/30 hover:border-cyan-400 hover:bg-blue-600/20 transition-all duration-300"
                aria-label="Phone"
              >
                <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Industries */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:max@1252.company" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  max@1252.company
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+6590026490" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                  +65 9002 6490
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-slate-400">Singapore</span>
              </li>
            </ul>

            <div className="pt-6 border-t border-slate-700">
              <h4 className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">Key Industries</h4>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-slate-800/50 border border-blue-500/20 rounded text-slate-400"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {currentYear} 1252 Technology Pte Limited. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <span className="text-sm text-slate-500">
                Singapore Business Registration
              </span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text animate-gradient-x">
            12 Months. 52 Weeks. Always On.
          </p>
        </div>
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
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;