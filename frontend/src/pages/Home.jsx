import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-background font-body text-on-surface min-h-screen flex flex-col relative overflow-hidden hero-pattern -m-8">
      {/* Header (Home Mode) */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm h-16 flex items-center justify-between px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-slate-900 uppercase">LIFESAVER</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary py-5" to="/">Home</Link>
          <Link className="text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors" to="/registration">Register</Link>
          <Link className="text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors" to="/support">Support</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link className="bg-tertiary text-white px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2" to="/alert">
            <span className="material-symbols-outlined text-lg">emergency</span>
            EMERGENCY
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10 pt-32">
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full scale-150"></div>
          <div className="relative bg-surface-container-lowest p-8 rounded-3xl shadow-2xl border-4 border-white inline-block">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.85] uppercase">
              CLEAR.<br /><span className="text-primary-container">AHEAD.</span>
            </h1>
          </div>
        </div>
        <p className="max-w-2xl text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed mb-12">
          The world's first V2V connectivity framework strictly designed to optimize ambulance trajectory and eliminate civilian congestion using distributed intelligence.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/dashboard" className="group relative bg-surface-container-lowest p-6 rounded-2xl shadow-xl w-64 text-left hover:bg-primary-container transition-all duration-300 overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary mb-4 group-hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>podium</span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface group-hover:text-white transition-colors">Command Access</h3>
              <p className="text-[11px] text-outline group-hover:text-white/80 mt-1 transition-colors">Regional supervisor and dispatch portal.</p>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">hub</span>
            </div>
          </Link>
          <Link to="/alert" className="group relative bg-surface-container-lowest p-6 rounded-2xl shadow-xl w-64 text-left hover:bg-secondary transition-all duration-300 overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary mb-4 group-hover:text-white transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface group-hover:text-white transition-colors">Field Response</h3>
              <p className="text-[11px] text-outline group-hover:text-white/80 mt-1 transition-colors">Ambulance HUD and crew telemetry tools.</p>
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">local_shipping</span>
            </div>
          </Link>
        </div>
      </main>

      <footer className="w-full py-8 mt-auto bg-white/80 backdrop-blur-md border-t border-slate-100 flex flex-col md:flex-row justify-between items-center px-12 z-20 gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] uppercase tracking-widest font-extrabold text-slate-400">© 2024 SENTINEL Systems. All Rights Reserved.</p>
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-primary">Metropolitan Operations Center: Sector 7</p>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-outline">Network Protocols</span>
            <div className="flex gap-4 font-bold text-[10px] text-slate-400">
              <span>Standard-V2V</span>
              <span>IEEE 802.11p</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
