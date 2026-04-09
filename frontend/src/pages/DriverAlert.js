import React from 'react';

const DriverAlert = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center p-4 md:p-8 space-y-8 h-full">
      {/* High-Visibility Warning Header */}
      <div className="w-full max-w-4xl bg-tertiary-container rounded-xl p-8 emergency-pulse flex flex-col items-center text-center shadow-xl border-4 border-tertiary">
        <span className="material-symbols-outlined text-on-tertiary text-7xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
        <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-tertiary uppercase tracking-tighter">AMBULANCE APPROACHING</h2>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Directional Action */}
        <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-12 flex flex-col justify-center items-center relative overflow-hidden shadow-sm border border-outline-variant/10">
          <div className="absolute top-4 left-6 text-slate-400 font-label text-xs tracking-widest uppercase font-semibold">Immediate Action</div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-primary text-9xl leading-none font-bold" style={{ fontVariationSettings: "'wght' 700" }}>turn_right</span>
            <h3 className="font-headline text-5xl font-bold text-primary mt-2">MOVE TO RIGHT</h3>
            <p className="text-on-surface-variant font-medium mt-2">Clear path for emergency vehicle</p>
          </div>
        </div>

        {/* Distance Countdown */}
        <div className="md:col-span-5 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between items-center shadow-sm">
          <div className="text-slate-400 font-label text-xs tracking-widest uppercase font-semibold w-full text-center">Vehicle Distance</div>
          <div className="flex flex-col items-center my-8">
            <span className="text-8xl font-headline font-extrabold text-tertiary">350</span>
            <span className="text-2xl font-bold text-on-surface-variant uppercase tracking-widest">Meters</span>
          </div>
          <div className="w-full bg-surface-container-high h-4 rounded-full overflow-hidden">
            <div className="bg-tertiary h-full w-2/3 rounded-full shadow-[0_0_10px_rgba(183,19,26,0.5)]"></div>
          </div>
        </div>

        {/* Radar Map View */}
        <div className="md:col-span-12 bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row h-96 border border-outline-variant/10">
          <div className="flex-1 relative bg-slate-100">
            <img 
              className="w-full h-full object-cover grayscale opacity-30" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWYlsXFLFaR4L_bcMkcfLNLFhi3CRSvuVAn8HkmnZtfYZ84iNwZUtVhuJKXKBh7VpZ_4a6GoW5z5n_d_E9CuWfCaIDGUsOhmAkjFZkT3zjNDAqpn1Fpsn2o-qndTZAV_OQO5XnJOpIyGBTz5fNyiEMxJqcUdRtXzh25DuCKWZbXhRDBd89S1ewJYSXqaPzENzPIZ_09p-7L28vSghupEcMPiUlEb_8BIYFhrfGV2-ei7IPlr2S1LbRVJ5xIwPhoMFJdomqzoNHvw" 
              alt="Map"
            />
            {/* User Vehicle */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(0,94,164,0.6)]"></div>
               {/* Pulse rings */}
               <div className="absolute w-24 h-24 border-2 border-primary/20 rounded-full"></div>
            </div>
            {/* Ambulance */}
            <div className="absolute top-1/4 right-1/3 text-tertiary">
               <span className="material-symbols-outlined text-4xl shadow-lg">ambulance</span>
            </div>
          </div>
          
          <div className="w-full md:w-80 p-8 bg-surface-container-lowest flex flex-col gap-6">
            <h4 className="font-headline font-bold text-xl">Inbound Alert</h4>
            <div className="space-y-6">
              {[
                { label: 'Approach Speed', value: '85 MPH', icon: 'speed' },
                { label: 'Unit Type', value: 'Advanced Life Support', icon: 'local_hospital' },
                { label: 'ID #', value: 'SENTINEL-X902', icon: 'emergency_share' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{item.label}</p>
                    <p className="font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-auto w-full bg-surface-container-highest hover:bg-primary hover:text-white transition-all py-4 rounded-xl font-bold text-sm tracking-widest uppercase">
              Acknowledge Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverAlert;
