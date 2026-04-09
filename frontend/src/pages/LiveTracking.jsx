import React from 'react';

const LiveTracking = () => {
  return (
    <div className="relative h-[calc(100vh-120px)] -m-8 overflow-hidden">
      {/* Map Background Mockup */}
      <div className="absolute inset-0 bg-slate-100">
        <img 
          className="w-full h-full object-cover grayscale opacity-40" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfy2ZhxpGJHxyImhjCw4gH1Mmd07rv5TAnrzGRZXBrwgIowugHkA0HOT_yRiD8CI0k0KfCSclMY2ITeTxl72KQyt2vLmkQOBJspaPBhKz9NxWMdgx6yhP-PBjl0dkSFtZRAU4QwGh5L0UE-9yZy5k6G1k0vN3heRYKdhVo3mUtwisPv28bKs20HYml57KrH06seM8As0osoIfudNwIkkt91LIGtwrUKNq-wXrGhrUXrF3FSIw5BVK8MJ9jV8Zcnf2cnIx4FtEKfw" 
          alt="Map"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
      </div>

      {/* Floating UI Overlays */}
      <div className="relative z-10 p-8 h-full flex flex-col pointer-events-none">
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="glass-panel rounded-2xl p-2 flex gap-1 shadow-lg border border-white/20">
            <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">navigation</span>
              Active Units (14)
            </button>
            <button className="text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-surface-container-high transition-colors">Stationary</button>
            <button className="text-slate-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-surface-container-high transition-colors">Alerts (2)</button>
          </div>
          
          <div className="glass-panel rounded-2xl p-2 flex flex-col gap-2 shadow-lg border border-white/20">
            <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-surface-container-high rounded-lg"><span className="material-symbols-outlined">add</span></button>
            <button className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-surface-container-high rounded-lg"><span className="material-symbols-outlined">remove</span></button>
            <div className="w-8 h-[1px] bg-outline-variant/30 mx-auto"></div>
            <button className="w-10 h-10 flex items-center justify-center text-primary hover:bg-primary/10 rounded-lg"><span className="material-symbols-outlined">my_location</span></button>
          </div>
        </div>

        {/* Bottom Tracking Card */}
        <div className="mt-auto flex flex-col md:flex-row gap-6 items-end pointer-events-auto">
          <div className="glass-panel w-full md:w-[420px] rounded-[2rem] p-6 shadow-2xl border border-white/40">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">ambulance</span>
                </div>
                <div>
                  <h3 className="font-headline font-extrabold text-xl tracking-tight">UNIT AMB-902</h3>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">En Route • Priority 1</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-low rounded-2xl p-4">
                <p className="text-xs text-slate-500 font-medium mb-1">Destination ETA</p>
                <p className="font-headline font-bold text-2xl text-blue-900">4.2 <span className="text-sm font-normal text-slate-400">min</span></p>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-4">
                <p className="text-xs text-slate-500 font-medium mb-1">Proximity</p>
                <p className="font-headline font-bold text-2xl text-blue-900">1.8 <span className="text-sm font-normal text-slate-400">km</span></p>
              </div>
            </div>

            <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl transition-all">
              Open Comm Channel
              <span className="material-symbols-outlined text-lg">ring_volume</span>
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-4 border-l-4 border-tertiary shadow-lg animate-pulse">
              <div className="w-10 h-10 bg-tertiary-container rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">warning</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-tertiary">Traffic Alert</p>
                <p className="text-sm font-semibold">Gridlock at Sector 7-B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
