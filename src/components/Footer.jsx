import React from 'react';
import { Link } from 'react-router-dom';

// Same logo import as Navbar
import logo from '../assets/1252-01.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">

          {/* Company Info — logo matches Navbar exactly */}
          <div className="space-y-4 flex flex-col items-center">
            <Link to="/" className="relative group flex items-center transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
              <div className="relative z-10 rounded-lg overflow-hidden">
                <img
                  src={logo}
                  alt="1252 Technology Pte Ltd"
                  className="h-50 w-auto object-contain"
                  style={{
                    minWidth: '120px',
                    maxWidth: '250px',
                    mixBlendMode: 'screen',
                    filter: 'brightness(2.0) saturate(1.3) contrast(1.1) drop-shadow(0 0 0px transparent)',
                    transition: 'filter 0.3s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(2.4) saturate(1.4) contrast(1.1) drop-shadow(0 0 14px rgba(6,182,212,0.8))'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(2.0) saturate(1.3) contrast(1.1) drop-shadow(0 0 0px transparent)'}
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Reliable IT Hardware & Network Solutions.<br />
              12 Months. 52 Weeks. Always On.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 inline-block text-left">
              {/* Email */}
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:max@1252technology.com"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap"
                >
                  max@1252technology.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:+6580771252"
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300 whitespace-nowrap"
                >
                  +65 80771252
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-slate-400">
                  60 Paya Lebar Road, #06-28,<br />
                  Paya Lebar Square,<br />
                  Singapore 409051
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-slate-500">
              © {currentYear} 1252 Technology Pte Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 backdrop-blur-sm border border-blue-500/30 rounded-lg">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-slow"></div>
              <span className="text-xs font-semibold text-slate-300">
                Powered by Lifecycle Assurance™
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-blob { animation: blob 8s infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </footer>
  );
};

export default Footer;
