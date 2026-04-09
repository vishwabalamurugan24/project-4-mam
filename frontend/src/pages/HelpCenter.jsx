import React from 'react';

const HelpCenter = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <header className="mb-12">
        <h1 className="font-headline text-5xl font-extrabold text-on-surface mb-2 tracking-tight">Tactical Support Center</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl">Access critical protocols, system documentation, and direct command links for Sector 7 emergency operations.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <section className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Command Direct Link */}
          <div className="col-span-1 sm:col-span-2 bg-primary-container p-8 rounded-xl text-on-primary-container relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-headline text-xl font-bold mb-2">Direct Command Dispatch</h3>
              <p className="mb-6 opacity-90 max-w-md">Encrypted VOIP and text channel for real-time tactical adjustments during active emergency events.</p>
              <button className="bg-white text-primary px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
                <span className="material-symbols-outlined text-sm">headset_mic</span>
                Open Command Link
              </button>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[180px]">support_agent</span>
            </div>
          </div>

          {[
            { icon: 'vibration', title: 'Haptic Feedback Failure', desc: 'Protocol for resetting V2V tactile alert systems during high-vibration transit.' },
            { icon: 'hub', title: 'Mesh Network Sync', desc: 'Optimizing connection strength in dense urban canyons and multi-level structures.' },
            { icon: 'security', title: 'Security Override', desc: 'Authorized procedure for Level 3 clearance credential expiration recovery.' },
            { icon: 'database', title: 'Data Logging Errors', desc: 'Addressing synchronization delays between local vehicle storage and HQ servers.' },
          ].map((faq, i) => (
            <div key={i} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">{faq.icon}</span>
              </div>
              <h4 className="font-bold mb-2">{faq.title}</h4>
              <p className="text-sm text-on-surface-variant">{faq.desc}</p>
            </div>
          ))}
        </section>

        <aside className="md:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-headline font-bold text-lg mb-4">Documentation</h3>
            <ul className="space-y-4">
              {['System Core Protocol', 'V2V Triage Standards', 'Hardware Topology', 'Update Changelogs'].map((doc, i) => (
                <li key={i}>
                  <a className="flex items-center justify-between group" href="#">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 text-sm">description</span>
                      <span className="text-sm font-medium">{doc}</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors text-sm">chevron_right</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-tertiary/10 p-6 rounded-xl border border-tertiary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white">emergency</span>
              </div>
              <h3 className="font-bold text-on-error-container">Urgent Issues</h3>
            </div>
            <p className="text-sm text-on-error-container mb-4">For immediate system lockout or critical equipment failure during transit.</p>
            <a className="block w-full bg-tertiary text-white py-3 rounded-lg font-bold text-center hover:bg-red-700 transition-colors" href="tel:911">
              Dial Dispatch Priority
            </a>
          </div>
        </aside>
      </div>

      <section className="mt-16 bg-surface-container-highest p-12 rounded-[2rem] flex flex-col items-center text-center">
        <h2 className="font-headline text-3xl font-bold mb-4">Still searching for an answer?</h2>
        <p className="text-on-surface-variant mb-8 max-w-lg">Our technical command team is available 24/7 to ensure mission-critical systems remain at peak performance.</p>
        <div className="w-full max-w-md relative">
          <input className="w-full px-6 py-4 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Describe your issue..." type="text"/>
          <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-colors">Search</button>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
