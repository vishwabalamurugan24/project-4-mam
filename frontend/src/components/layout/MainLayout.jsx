import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
      <footer className="lg:ml-64 bg-white border-t border-slate-100 py-4 flex flex-col md:flex-row justify-between items-center px-8 gap-4 z-10 relative">
        <p className="font-inter text-xs tracking-wide uppercase text-slate-400">© 2024 Sentinel Emergency Systems. All systems operational.</p>
        <div className="flex gap-6">
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline transition-all" href="#">Privacy Protocol</a>
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline transition-all" href="#">Security Audit</a>
          <a className="font-inter text-xs tracking-wide uppercase text-slate-400 hover:text-blue-500 underline-offset-4 hover:underline transition-all" href="#">Contact Dispatch</a>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
