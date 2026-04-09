import React from 'react';

const Reports = () => {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-headline text-3xl font-extrabold text-on-surface mb-2 tracking-tight">System Analytics & V2V Insights</h1>
        <p className="text-on-surface-variant body-lg max-w-2xl">Real-time performance metrics and predictive incident modeling for regional emergency response units.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Response Latency Chart */}
        <div className="md:col-span-2 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface">Response Latency</h3>
                <p className="text-xs text-outline font-medium uppercase tracking-tighter">Avg. Signal Propagation</p>
              </div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">-12% vs LY</span>
            </div>
            <div className="h-48 flex items-end gap-2 px-2">
              {[40, 55, 45, 70, 60, 85, 75, 50, 40, 95, 65].map((h, i) => (
                <div key={i} className={`flex-1 rounded-t-sm bg-primary/40`} style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex gap-4">
              <div>
                <p className="text-xs text-outline">Current Peak</p>
                <p className="font-headline text-lg font-bold">14.2ms</p>
              </div>
              <div>
                <p className="text-xs text-outline">Target</p>
                <p className="font-headline text-lg font-bold text-secondary">15.0ms</p>
              </div>
            </div>
            <button className="text-primary font-medium hover:underline text-sm">View Protocol Logs</button>
          </div>
        </div>

        {/* Fleet Utilization */}
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <div className="mb-8">
            <h3 className="font-headline text-lg font-bold">Fleet Utilization</h3>
            <p className="text-xs text-outline uppercase tracking-wider">Active Units: 42/50</p>
          </div>
          <div className="relative h-32 w-32 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-surface-container-highest"></div>
            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin-slow" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold font-headline">84%</span>
              <span className="text-[10px] text-outline font-bold">OPTIMAL</span>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary"></div> On Mission</span>
              <span className="font-bold">34</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-secondary"></div> Standby</span>
              <span className="font-bold">8</span>
            </div>
          </div>
        </div>

        {/* Incident Concentration */}
        <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 flex flex-col h-full">
          <div className="p-6">
            <h3 className="font-headline text-lg font-bold">Incident Concentration</h3>
            <p className="text-xs text-outline uppercase">Heatmap Tracking: Downtown</p>
          </div>
          <div className="flex-grow relative min-h-[150px] bg-slate-200">
            <img 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7d2eaSA_pRFmAHt16Vce4G_oVxmkTKzq-UIJEwj-BKRjvsWWhp45DCQjk14jg_lNMc3QmUyanE31JeJTUTBIapa353GJ-BAo9rBvE_KinyTwGD9XJorLZRjO8p62Ess6wVGlmZXOPjStB2sfj4LdHSqa-DBOLKN20jGs6XdPXmCVxVQ01hYfLKgXdQxSig56Vs8wsyXsGCIwljfhLK6Hrl7yQ1mI_KUFpni1S-XGJFQ1sSwdseTkqcKQwCT9mIrklCfF1m68ufA" 
              alt="Map"
            />
          </div>
        </div>

        {/* Logs Table */}
        <div className="md:col-span-3 lg:col-span-4 mt-4">
          <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface">Recent V2V Protocol Logs</h3>
                <p className="text-on-surface-variant text-sm">Detailed telemetry packets received across all emergency mesh nodes.</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium hover:bg-surface-container-highest transition-colors">Export CSV</button>
                <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Live Stream</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-outline text-xs uppercase tracking-widest font-bold">
                    <th className="pb-2 px-4">Node ID</th>
                    <th className="pb-2">Vehicle Type</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">DSRC Latency</th>
                    <th className="pb-2 text-right px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { id: '#SN-4219', type: 'Heavy Rescue', status: 'EN ROUTE', latency: '4.2 ms' },
                    { id: '#SN-5582', type: 'Mobile HQ', status: 'STATIONARY', latency: '8.1 ms' },
                    { id: '#SN-1022', type: 'Advanced Life', status: 'EN ROUTE', latency: '2.9 ms' },
                  ].map((row, i) => (
                    <tr key={i} className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors rounded-lg">
                      <td className="py-4 px-4 font-mono font-bold text-primary">{row.id}</td>
                      <td>{row.type}</td>
                      <td>
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${row.status === 'EN ROUTE' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="font-medium">{row.latency}</td>
                      <td className="text-right px-4"><span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">more_vert</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
