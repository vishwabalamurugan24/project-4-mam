import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/dashboard", icon: "dashboard", label: "Dashboard" },
    { to: "/radar", icon: "radar", label: "V2V Radar" },
    { to: "/logs", icon: "assignment", label: "Patient Logs" },
    { to: "/fleet", icon: "local_shipping", label: "Fleet Status" },
    { to: "/support", icon: "help", label: "Support" },
    { to: "/settings", icon: "settings", label: "Settings" },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 pt-20 flex flex-col bg-slate-50 border-r border-slate-200 hidden lg:flex z-40">
      <div className="px-6 mb-8">
        <h2 className="font-headline font-bold text-blue-900 text-lg">HQ Command</h2>
        <p className="text-slate-500 text-xs uppercase tracking-widest font-medium">Sector 7 - Active</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-6 py-3 transition-all duration-200 ${
              location.pathname === link.to
                ? "bg-blue-100 text-blue-800 mx-2 rounded-lg"
                : "text-slate-600 hover:bg-blue-50"
            }`}
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="font-medium">{link.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 mt-auto">
        <button className="w-full bg-tertiary text-on-tertiary py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-tertiary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform">
          <span className="material-symbols-outlined">emergency</span>
          Broadcast SOS
        </button>
      </div>
      <div className="p-6 border-t border-slate-200 space-y-4">
        <Link to="/status" className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600">
          <span className="material-symbols-outlined text-sm">check_circle</span>
          System Status
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
