import React from 'react';

// Source: 1252 Technology - Brand Portfolio.pdf
// TODO: confirm brand guidelines/logo kits with each vendor before adding logos
// (check Cisco Partner Portal first — partner-status logo use is often governed
// by formal rules). Text-only names used here until each is confirmed.

const CATEGORIES = [
  {
    label: 'Networking & Wireless',
    accent: '#22d3ee', // cyan
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    brands: [
      { name: 'Cisco', categories: 'Enterprise switches, routers, wireless (Meraki), security appliances, collaboration (Webex)', note: 'Official Cisco Partner, via Ingram Micro' },
      { name: 'Ubiquiti', categories: 'Wireless access points (UniFi), switches, routers, security cameras (Protect)', note: 'Popular for SME networking' },
      { name: 'MikroTik', categories: 'Routers, switches, wireless systems, RouterOS-based networking gear', note: 'Budget-friendly networking' },
      { name: 'TP-Link', categories: 'Routers, switches, access points, smart home/IoT, surveillance (VIGI)', note: 'Consumer + SMB range' },
      { name: 'Linksys', categories: 'Routers, switches, mesh Wi-Fi systems', note: 'Consumer/SMB networking' },
      { name: 'Ruijie', categories: 'Enterprise switches, wireless, network management (Ruijie Cloud)', note: 'Growing enterprise networking presence' },
      { name: 'Huawei', categories: 'Enterprise networking, servers, storage', note: 'Subject to export/procurement restrictions in some markets', caution: true },
    ],
  },
  {
    label: 'Security & Surveillance',
    accent: '#f43f5e', // rose
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    brands: [
      { name: 'Fortinet', categories: 'Firewalls (FortiGate), network security, SD-WAN, endpoint security', note: 'Core security line' },
      { name: 'Hikvision', categories: 'CCTV cameras, NVRs/DVRs, video surveillance systems, access control', note: 'Surveillance leader' },
    ],
  },
  {
    label: 'Power & Infrastructure',
    accent: '#fbbf24', // amber
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    brands: [
      { name: 'APC', categories: 'UPS systems, power distribution units, surge protection, data center power', note: 'Power/backup infrastructure' },
      { name: 'Mesilix', categories: 'UPS, server racks, accessories', note: 'IT infrastructure, power protection, and networking hardware' },
      { name: 'Digitus', categories: 'Cabling, network accessories, KVM switches, connectivity hardware', note: 'Infrastructure accessories' },
    ],
  },
  {
    label: 'Industrial, IoT & Communications',
    accent: '#a78bfa', // violet
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M12 3v1.5M3.75 12H2.25M21.75 12h-1.5M5.106 5.106l1.06 1.06M17.834 17.834l1.06 1.06M18.894 5.106l-1.06 1.06M6.166 17.834l-1.06 1.06M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    brands: [
      { name: 'Teltonika', categories: 'Industrial routers, IoT gateways, GPS trackers, M2M connectivity', note: 'Industrial/IoT focus' },
      { name: 'Grandstream', categories: 'IP phones, VoIP gateways, PBX systems, video conferencing', note: 'Unified communications' },
    ],
  },
  {
    label: 'Storage',
    accent: '#818cf8', // indigo
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    brands: [
      { name: 'Synology', categories: 'NAS storage, backup solutions, surveillance station software', note: 'Storage/backup' },
    ],
  },
];

const BrandsPage = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-semibold text-cyan-400 tracking-widest uppercase">Brands & Partners</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            15 Brands, One Point of Contact
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We're not tied to one vendor, so our recommendations aren't either. Here's who we
            work with and what each is typically used for.
          </p>
        </div>

        {/* Grouped categories — every brand gets the same treatment */}
        <div className="space-y-14">
          {CATEGORIES.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-6">
                <div style={{ color: group.accent }}>{group.icon}</div>
                <h3 className="text-lg font-bold text-white">{group.label}</h3>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                {group.brands.map((brand) => (
                  <div key={brand.name} className="flex gap-4 py-4 border-b border-slate-800/60">
                    <div
                      className="w-1 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: group.accent, opacity: 0.5 }}
                    />
                    <div>
                      <h4 className="text-white font-black text-2xl mb-1.5">{brand.name}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed mb-1.5">{brand.categories}</p>
                      {brand.caution ? (
                        <span className="inline-block px-2.5 py-0.5 text-sm font-semibold rounded-full bg-white/5 border border-white/20 text-slate-300">
                          {brand.note}
                        </span>
                      ) : (
                        <p className="text-sm font-semibold text-slate-400">{brand.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <p className="text-center text-slate-500 text-sm mt-16 pt-10 border-t border-slate-800/60">
          Don't see your existing vendor?{' '}
          <a href="/contact" className="text-cyan-400 font-medium hover:underline">
            Tell us what you're running
          </a>
        </p>
      </div>
    </div>
  );
};

export default BrandsPage;