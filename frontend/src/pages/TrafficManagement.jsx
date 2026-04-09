import React from 'react';

const TrafficManagement = () => {
  return (
    <div className="space-y-10">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Traffic Management</h2>
          <p className="text-slate-500 mt-1">Metropolitan Grid Control - Sector 07-Bravo</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-sm font-medium text-primary">4 Active Corridors</span>
          </div>
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-error"></span>
            <span className="text-sm font-medium text-error">1 System Warning</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Intersection Grid */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline text-lg font-bold">Intersection Grid</h3>
            <button className="bg-primary-container text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">auto_mode</span>
              Auto-Optimization ON
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { id: '402', name: '5th Ave & Broadway', status: 'CLEAR', active: true },
              { id: '405', name: 'Main St & Oak', status: 'RED' },
              { id: '409', name: '8th St & Pine', status: 'YEL' },
              { id: '412', name: 'Park Row & Center', status: 'IDLE' },
              { id: '415', name: 'Canal St & Hudson', status: 'V2V PASS', active: true },
              { id: '422', name: 'Lexington & 42nd', status: 'OFFLINE', error: true },
            ].map((node) => (
              <div key={node.id} className={`rounded-xl p-4 border transition-all ${node.active ? 'bg-primary/5 border-primary/20' : node.error ? 'bg-error/5 border-error/20' : 'bg-surface-container-low border-outline-variant/10'}`}>
                <div className="flex flex-col h-full justify-between gap-4">
                  <div>
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${node.active ? 'text-primary' : node.error ? 'text-error' : 'text-slate-400'}`}>Intersection {node.id}</p>
                    <h4 className="font-headline text-md font-bold">{node.name}</h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                      <div className={`w-3 h-3 rounded-full ${node.status === 'CLEAR' || node.status === 'V2V PASS' ? 'bg-green-500' : node.status === 'RED' ? 'bg-error' : node.status === 'YEL' ? 'bg-yellow-500' : 'bg-slate-300'}`}></div>
                      <span className={`text-xs font-bold ${node.active ? 'text-green-700' : node.error ? 'text-error' : 'text-slate-400'}`}>{node.status}</span>
                    </div>
                    <button className={`p-2 rounded-lg ${node.active ? 'bg-primary text-white' : 'bg-surface-container-highest text-on-surface'}`}>
                      <span className="material-symbols-outlined text-sm">{node.active ? 'settings_remote' : 'power_settings_new'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Radar Mockup */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-high rounded-xl p-6 shadow-sm overflow-hidden relative">
          <h3 className="font-headline text-lg font-bold mb-4">Tactical Radar</h3>
          <div className="relative h-64 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-outline-variant/30"></div>
              <div className="w-32 h-32 rounded-full border border-outline-variant/30"></div>
              <div className="w-16 h-16 rounded-full border border-outline-variant/30"></div>
            </div>
            <div className="relative z-10 w-4 h-4 bg-primary rounded-full emergency-pulse"></div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="bg-surface-container-lowest/80 backdrop-blur-md p-3 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold">North Corridor</p>
                <p className="text-[10px] text-slate-500">Distance: 1.2km</p>
              </div>
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded font-bold">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficManagement;
