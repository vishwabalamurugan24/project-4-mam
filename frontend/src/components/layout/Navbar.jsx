import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm h-16 flex justify-between items-center px-6">
      <div className="flex items-center gap-8">
        <Link to="/" className="font-headline font-bold tracking-tight text-blue-900 text-xl">Sentinel V2V</Link>
        <div className="hidden md:flex gap-6">
          <Link to="/dashboard" className="text-slate-500 hover:bg-slate-100 transition-colors px-3 py-1 rounded-lg">Dashboard</Link>
          <Link to="/radar" className="text-slate-500 hover:bg-slate-100 transition-colors px-3 py-1 rounded-lg">V2V Radar</Link>
          <Link to="/support" className="text-blue-700 border-b-2 border-blue-700 px-3 py-1">Support</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            className="bg-surface-container-highest/50 border-none rounded-full pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary text-sm outline-none" 
            placeholder="Search protocols..." 
            type="text" 
          />
        </div>
        <button className="p-2 text-slate-500 hover:bg-slate-100 transition-colors rounded-full active:scale-90 transition-transform">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
          <img 
            alt="Profile" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxht1Mujf_40TmEi0aqp3Giu8MjQN2VF8NpoDxpDttrlZHx3d1OnH7jYYVxdTZvXeTCS7aotUeFteeqV8sXZkSEDr-guOiZpDwPVCA_U3dXQAD4ZfKwwOPCQk_KUOd-4jUw24vylaKpqkU2WmCqAp2j__UAtHy_3KI3VCOqMuFCHmWRdLZ002kfQOKp1o35w3lxLjWn7MUzTu8HwvZpfyVlbWP-fbu-EFp2TYbxbKlCOgftTGlUhX-PuV3YnhaVgY8QtT7ZJgUBg" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
