import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-xl shadow-xl shadow-blue-900/20'
            : 'bg-gradient-to-b from-slate-950/90 to-slate-900/80 backdrop-blur-md'
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="relative group flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>

              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
                <span className="text-lg font-bold text-white">1252</span>
              </div>

              <div className="relative z-10 w-px h-8 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>

              <div className="relative z-10 flex flex-col">
                <span className="text-sm font-semibold text-slate-200 leading-tight tracking-wide">
                  Technology
                </span>
                <span className="text-xs text-cyan-400 leading-tight tracking-wider">
                  Pte Limited
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => {
                const isActive = isActivePath(link.path);
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className="relative px-5 py-2.5 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>

                    <span
                      className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? 'text-cyan-400'
                          : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {link.name}
                    </span>

                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300 ${
                        isActive ? 'w-3/4' : 'w-0 group-hover:w-1/2'
                      }`}
                    ></div>
                  </Link>
                );
              })}
            </div>

            <button className="hidden lg:block relative group overflow-hidden rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 transition-transform duration-500 group-hover:scale-110"></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 group"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-slate-200 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-cyan-400 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-slate-200 rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div
          className={`relative h-full flex flex-col pt-24 pb-8 px-6 transition-all duration-500 delay-100 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
        >
          <div className="flex-1 flex flex-col gap-2">
            {navLinks.map((link, index) => {
              const isActive = isActivePath(link.path);
              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`relative group px-6 py-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/30 to-cyan-500/30 shadow-lg shadow-blue-600/20'
                      : 'bg-slate-900/30 hover:bg-slate-800/40'
                  }`}
                >
                  <span
                    className={`text-lg font-medium ${
                      isActive ? 'text-cyan-400' : 'text-slate-200'
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          <button className="relative group overflow-hidden rounded-2xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700"></div>

            <div className="absolute inset-0 rounded-2xl border-2 border-white/20"></div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </div>

            <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
              Get Started
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>

          <div className="mt-8 pt-8 border-t border-blue-500/20">
            <p className="text-xs font-semibold text-cyan-400 tracking-wider mb-3">
              CONTACT US
            </p>
            <a
              href="mailto:max@1252.company"
              className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors mb-2"
            >
              max@1252.company
            </a>
            <a
              href="tel:+6590026490"
              className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
            >
              +65 9002 6490
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;