import React from 'react';

const AmbulanceDashboard = () => {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Ambulance HUD</h1>
          <p className="text-slate-500 mt-1">Unit SENTINEL-X902 • Active Duty</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-green-700">V2V Active</span>
          </div>
          <div className="bg-surface-container-low px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-sm font-medium text-primary">GPS Linked</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Destination Card */}
        <div className="md:col-span-8 bg-primary text-on-primary p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-black opacity-70 mb-2">Current Objective</p>
                <h2 className="font-headline text-4xl font-extrabold tracking-tighter">St. Jude Medical Center</h2>
              </div>
              <div className="text-right">
                <p className="text-4xl font-headline font-black">4.2 <span className="text-lg opacity-70">min</span></p>
                <p className="text-xs uppercase font-bold opacity-70">Estimated ETA</p>
              </div>
            </div>
            
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-3/4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-xs font-bold">1.8 KM REMAINING</span>
                  <span className="text-xs font-bold">DESTINATION</span>
                </div>
              </div>
              <button className="bg-white text-primary p-4 rounded-2xl shadow-lg hover:scale-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-3xl">navigation</span>
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <span className="material-symbols-outlined text-[12rem]">local_hospital</span>
          </div>
        </div>

        {/* Tactical Alerts Side panel */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-tertiary-container text-on-tertiary p-6 rounded-3xl shadow-lg emergency-pulse">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined">warning</span>
              <h3 className="font-bold uppercase tracking-widest text-sm">Critical Proximity</h3>
            </div>
            <p className="text-xs font-medium opacity-90 leading-relaxed">Heavy congestion at 5th Ave & Broadway. V2V clearing initiated.</p>
          </div>
          
          <div className="bg-surface-container-high p-6 rounded-3xl border border-outline-variant/10">
            <h3 className="font-headline font-bold text-lg mb-4">Nearby Mesh Nodes</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm font-medium">Node #SN-4219</span>
                </div>
                <span className="text-xs font-bold text-slate-400">4.2ms</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-sm font-medium">Node #SN-1022</span>
                </div>
                <span className="text-xs font-bold text-slate-400">2.9ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/5">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Velocity</p>
            <h4 className="font-headline text-3xl font-extrabold">64 <span className="text-sm font-medium text-slate-400">MPH</span></h4>
          </div>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/5">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Mesh Strength</p>
            <h4 className="font-headline text-3xl font-extrabold flex items-baseline gap-1">98 <span className="text-sm font-medium text-slate-400">%</span></h4>
          </div>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/5">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Signal Load</p>
            <h4 className="font-headline text-3xl font-extrabold">12 <span className="text-sm font-medium text-slate-400">ms</span></h4>
          </div>
          <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/5">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Battery</p>
            <h4 className="font-headline text-3xl font-extrabold">87 <span className="text-sm font-medium text-slate-400">%</span></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceDashboard;
