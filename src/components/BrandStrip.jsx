import React from 'react';
import { Link } from 'react-router-dom';

// Text-only brand names per brief: "confirm brand guidelines/logo kits with each
// vendor (check Cisco Partner Portal first)... Until confirmed, use text-only
// brand names instead of logos to avoid any guideline issues."
// Swap in actual <img> logos here once each vendor's usage terms are confirmed.
const BRAND_NAMES = [
  'Cisco', 'Fortinet', 'Ubiquiti', 'MikroTik', 'TP-Link',
  'Teltonika', 'APC', 'Hikvision', 'Grandstream', 'Linksys',
];

const BrandsStrip = () => {
  return (
    <section className="py-12 bg-slate-950 border-y border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-6">
          Brands We Carry
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {BRAND_NAMES.map((name) => (
            <span
              key={name}
              className="text-slate-400 hover:text-cyan-400 font-semibold text-lg transition-colors duration-300 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>

        <Link
          to="/brands"
          className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          See all 15+ authorized brands
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default BrandsStrip;