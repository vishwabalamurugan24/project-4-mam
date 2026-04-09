import React from 'react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-2">
        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">System Configurations</h1>
        <p className="text-on-surface-variant max-w-2xl">Manage your personnel credentials, interface preferences, and critical V2V alert thresholds for high-stakes emergency response.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-1 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
            <div className="flex flex-col items-center text-center">
              <div className="relative group">
                <img 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-surface-container shadow-inner" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT4MBh5xhbJynzIXud1CZNYz66opgAheKi3eIlTQFI68Eq4uw5twMXjt7FIv0P6X4aH565HxBg9yHAdMBXPukfaU1GMi0lGP24RDgh3XV2eARoMpWEJe_8pjhPM1Ox3H2nIrCHJV2Q40oZCvcKZM06qPr80AQVPNmUQj7xdxWqoLH2MTnawRhJTVvTNH23K5aE_wLkDRd2QGO9u_FsZphO6uYdvbdJfHJizoHRnuyXghHza1cFIhG65ziy0mchTU3dLf7EwvF7yg"
                />
                <button className="absolute bottom-1 right-1 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-sm">edit</span>
                </button>
              </div>
              <h2 className="mt-4 font-headline text-xl font-bold">Dr. Elias Thorne</h2>
              <p className="text-primary font-medium text-sm">Unit Commander • Sector 7</p>
              <div className="mt-4 flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full text-xs text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> System Verified
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <button className="w-full flex items-center justify-between px-4 py-3 bg-surface-container-low hover:bg-surface-container-high rounded-lg transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant">lock</span>
                  <span className="text-sm font-medium">Security Keys</span>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/5">
            <div className="flex items-center gap-3 text-tertiary">
              <span className="material-symbols-outlined">verified_user</span>
              <span className="font-bold text-sm">Clearance Level 4</span>
            </div>
            <p className="mt-2 text-xs text-on-surface-variant leading-relaxed">Authorized for emergency broadcast overrides and tactical fleet deployment.</p>
          </div>
        </section>

        <section className="lg:col-span-2 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">notifications_active</span>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold">Alert Protocols</h3>
                <p className="text-sm text-on-surface-variant">Customize how you receive critical V2V data.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Haptic Feedback', desc: 'Vibrate steering wheel or wearable on proximity alerts.', checked: true },
                { label: 'Voice Synthesis', desc: 'Audible narration of incoming vehicle telemetry.', checked: false },
                { label: 'HUD Overlay', desc: 'Display alerts on windshield via integrated projection.', checked: true },
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-surface-container last:border-0">
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{setting.label}</p>
                    <p className="text-xs text-on-surface-variant">{setting.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked={setting.checked} className="sr-only peer" type="checkbox"/>
                    <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-tertiary/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-tertiary">speed</span>
              </div>
              <div>
                <h3 className="font-headline text-lg font-bold">V2V Radar Sensitivity</h3>
                <p className="text-sm text-on-surface-variant">Adjust thresholds for proximity and velocity triggers.</p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Proximity Buffer (Meters)</label>
                  <span className="bg-surface-container-high px-2 py-1 rounded text-xs font-bold text-primary">250m</span>
                </div>
                <input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" max="1000" min="50" step="50" type="range" defaultValue="250"/>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 pt-4">
            <button className="px-6 py-3 text-primary font-bold hover:bg-surface-container-high rounded-xl transition-colors">Discard Changes</button>
            <button className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all">
              Save Configurations
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
