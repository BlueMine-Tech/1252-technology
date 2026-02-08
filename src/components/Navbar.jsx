

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ============================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  // ============================================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // ============================================
  // CLOSE MOBILE MENU ON ROUTE CHANGE
  // ============================================
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // ============================================
  // NAVIGATION LINKS
  // ============================================
  // Customize these links for your pages
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // Check if current path matches link
  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* ============================================
          MAIN NAVIGATION BAR
          ============================================ */}
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#2F4456]/95 backdrop-blur-md shadow-[0_8px_32px_rgba(47,68,86,0.2)]'
            : 'bg-[#2F4456] shadow-[0_2px_16px_rgba(47,68,86,0.1)]'
        }`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#567C8D] via-[#C8D9E6] to-[#567C8D] opacity-70"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            
            {/* ============================================
                LOGO/BRAND
                ============================================ */}
            <Link
              to="/"
              className="flex items-center gap-4 group relative z-10"
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 -left-3 -right-3 bg-gradient-to-r from-[#567C8D]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative flex items-center gap-4">
                {/* Number with gradient background */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#567C8D] to-[#2F4456] rounded-lg blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <span className="relative text-3xl lg:text-4xl font-black text-white tracking-tighter px-3 py-1 bg-gradient-to-br from-[#567C8D] to-[#2F4456] rounded-lg border border-[#567C8D]/30">
                    1252
                  </span>
                </div>
                
                {/* Animated separator */}
                <div className="relative h-9 w-[2px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#567C8D] via-[#C8D9E6] to-[#567C8D] rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 group-hover:animate-pulse"></div>
                </div>
                
                {/* Company name with better typography */}
                <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl font-bold text-white tracking-wide leading-tight">
                    Technology
                  </span>
                  <span className="text-[10px] lg:text-xs font-medium text-[#C8D9E6] tracking-[0.2em] uppercase opacity-75">
                    Pte Limited
                  </span>
                </div>
              </div>
            </Link>

            {/* ============================================
                DESKTOP NAVIGATION
                ============================================ */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const isActive = isActivePath(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-5 py-2.5 text-[15px] font-medium transition-all duration-300 rounded-lg group ${
                      isActive ? 'text-white' : 'text-white/80 hover:text-white'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {/* Hover background */}
                    <span className={`absolute inset-0 bg-white/5 rounded-lg transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                    }`}></span>
                    
                    {/* Text */}
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Bottom indicator */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#567C8D] to-[#C8D9E6] rounded-full transition-all duration-300 ${
                      isActive ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100'
                    }`}></span>
                  </Link>
                );
              })}
              
              {/* ============================================
                  CTA BUTTON
                  ============================================ */}
              <Link
                to="/contact"
                className="ml-6 relative px-8 py-3.5 text-[15px] font-semibold text-white rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(86,124,141,0.4)]"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#567C8D] via-[#2F4456] to-[#567C8D] bg-[length:200%_100%] group-hover:bg-[length:100%_100%] transition-all duration-500 animate-gradient"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                
                {/* Border gradient */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-[#567C8D] to-[#C8D9E6] bg-origin-border group-hover:from-[#FF6B35] group-hover:to-[#567C8D] transition-all duration-300" style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
                
                {/* Text with icon */}
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* ============================================
                MOBILE MENU TOGGLE
                ============================================ */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C8D9E6] focus:ring-offset-2 focus:ring-offset-[#2F4456] group"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-[2.5px] bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-[2.5px] bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 translate-x-3' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-[2.5px] bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom shadow line */}
        <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#567C8D]/30 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </nav>

      {/* ============================================
          MOBILE MENU
          ============================================ */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-[#2F4456]/95 backdrop-blur-xl transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Animated gradient orbs */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#567C8D]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#C8D9E6]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Menu content */}
        <div
          className={`relative h-full overflow-y-auto transition-all duration-500 delay-100 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="min-h-full flex flex-col pt-28 pb-8 px-6">
            {/* Mobile menu items */}
            <div className="space-y-2">
              {navLinks.map((link, index) => {
                const isActive = isActivePath(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block relative px-6 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-white/10 border-l-4 border-[#567C8D]'
                        : 'text-white/80 hover:text-white hover:bg-white/5 border-l-4 border-transparent hover:border-[#567C8D]/50'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none',
                      opacity: isMenuOpen ? 1 : 0,
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      <svg className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile CTA */}
            <div 
              className="mt-8 px-2"
              style={{
                animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out 0.4s forwards' : 'none',
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              <Link
                to="/contact"
                className="block relative px-8 py-5 text-center text-lg font-bold text-white rounded-xl overflow-hidden group"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#567C8D] to-[#2F4456] transition-all duration-300 group-hover:scale-105"></div>
                
                {/* Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-[#567C8D] group-hover:border-[#C8D9E6] transition-all duration-300"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Text */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Contact info in mobile menu */}
            <div 
              className="mt-auto pt-8 space-y-3 border-t border-white/10"
              style={{
                animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out 0.5s forwards' : 'none',
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              <p className="text-[#C8D9E6] text-sm font-medium tracking-wide">CONTACT US</p>
              <a href="mailto:max@1252.company" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">max@1252.company</span>
              </a>
              <a href="tel:+6590026490" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+65 9002 6490</span>
              </a>
            </div>
          </div>
        </div>
      </div>

 
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;

