import React from 'react';

const Registration = () => {
  return (
    <div className="min-h-screen bg-surface flex flex-col pt-16 -m-8">
      <main className="flex-grow flex">
        {/* Sidebar Branding & Visual */}
        <aside className="hidden lg:flex w-1/3 flex-col justify-between p-12 bg-surface-container-low border-r border-outline-variant/15">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-xs font-semibold text-primary tracking-wider uppercase">System Onboarding</span>
            </div>
            <h1 className="text-4xl font-headline font-extrabold text-on-surface leading-tight">
              Secure Network <br /> Entry Protocol
            </h1>
            <p className="text-lg text-on-surface-variant max-w-sm">
              Join the V2V response network. Your credentials ensure real-time coordination and patient safety during high-stakes transit.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-6">
              {[
                { step: 1, title: 'Identity Verification', sub: 'Personal & Professional Info', active: true },
                { step: 2, title: 'Unit Credentials', sub: 'V2V Tagging & Fleet Sync' },
                { step: 3, title: 'Security Audit', sub: 'Biometric & Password Setup' },
              ].map((s) => (
                <div key={s.step} className={`flex items-start gap-4 ${s.active ? '' : 'opacity-40'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${s.active ? 'bg-primary text-white shadow-lg' : 'bg-surface-container-highest text-on-surface-variant'}`}>{s.step}</div>
                  <div>
                    <p className="font-semibold text-on-surface">{s.title}</p>
                    <p className="text-sm text-on-surface-variant">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Form Canvas */}
        <section className="flex-grow flex items-center justify-center p-6 lg:p-12 bg-surface-container-lowest">
          <div className="w-full max-w-xl">
            <div className="space-y-10">
              <header>
                <h2 className="text-2xl font-headline font-bold text-on-surface">Identity Verification</h2>
                <p className="text-on-surface-variant">Please provide your legal medical or operator details.</p>
              </header>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative flex flex-col items-center justify-center p-6 rounded-xl bg-surface-container-low cursor-pointer border-2 border-transparent transition-all hover:bg-surface-container-high has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <input defaultChecked className="sr-only" name="role" type="radio" />
                    <span className="material-symbols-outlined text-3xl mb-2 text-primary">medical_services</span>
                    <span className="font-semibold text-sm">Medical Personnel</span>
                  </label>
                  <label className="relative flex flex-col items-center justify-center p-6 rounded-xl bg-surface-container-low cursor-pointer border-2 border-transparent transition-all hover:bg-surface-container-high has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <input className="sr-only" name="role" type="radio" />
                    <span className="material-symbols-outlined text-3xl mb-2 text-primary">emergency_share</span>
                    <span className="font-semibold text-sm">Fleet Operator</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-outline tracking-wider uppercase ml-1">Full Legal Name</label>
                    <input className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20" placeholder="Dr. Sarah Connor" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-outline tracking-wider uppercase ml-1">License ID</label>
                    <input className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20" placeholder="MED-9920-X" type="text" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline tracking-wider uppercase ml-1">Secure Email Address</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-lg">mail</span>
                    <input className="w-full bg-surface-container-highest border-none rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary/20" placeholder="sarah.c@dispatch.emergency.gov" type="email" />
                  </div>
                </div>

                <div className="pt-8 flex items-center justify-between">
                  <button className="text-primary font-semibold hover:underline px-4" type="button">Save Progress</button>
                  <button className="bg-primary text-white px-10 py-3 rounded-xl font-bold shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all" type="submit">
                    Continue to Step 2
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Registration;
