import React, { useState } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const MaterialLibraryEngineeringOS_520c82 = () => {
  const { materialState, simulationState, osStatus } = useEngineeringStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('METALS');

  const materials = [
    { id: 'Ti-6Al-4V', label: 'Titanium Grade 5', type: 'METALS', density: 4.43, yield: 880, grade: 'GRADE_5' },
    { id: 'Al 7075-T6', label: 'Aerospace Aluminum', type: 'METALS', density: 2.81, yield: 503, grade: 'AEROSPACE' },
    { id: 'SS 316L', label: 'Stainless Steel', type: 'METALS', density: 8.00, yield: 290, grade: 'STAINLESS' },
    { id: 'Inconel 718', label: 'Nickel Superalloy', type: 'METALS', density: 8.19, yield: 1030, grade: 'SUPERALLOY' },
  ];

  const filteredMaterials = materials.filter(m => 
    m.type === selectedFilter && 
    (m.id.toLowerCase().includes(searchQuery.toLowerCase()) || m.label.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4d8eff]/30">
      {/* TopAppBar */}
      <header className="h-12 bg-[#10131a]/70 backdrop-blur-xl border-b border-[#424754]/30 flex justify-between items-center px-6 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#adc6ff]">deployed_code</span>
          <h1 className="font-bold text-[18px] tracking-tighter text-[#adc6ff] uppercase">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6 font-mono text-[10px] tracking-widest">
            <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors uppercase">DASHBOARD</span>
            <span className="text-[#4cd7f6] font-bold cursor-pointer uppercase border-b border-[#4cd7f6]">LIBRARY</span>
            <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors uppercase">SIMULATION</span>
          </nav>
          <div className="font-mono text-[10px] text-[#adc6ff] border border-[#adc6ff]/30 px-3 py-1 bg-[#adc6ff]/5 uppercase tracking-tighter">
            GPU: {((simulationState?.gpu?.cluster_load_pct || 0) * 100).toFixed(0)}% | SIM: {simulationState?.solver?.load_pct > 0 ? 'ACTIVE' : 'READY'}
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* NavigationDrawer (Left) */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <h2 className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase">SYSTEM_CORE</h2>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: false },
              { label: 'Simulations', icon: 'model_training', active: false },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: true },
              { label: 'Manufacturing', icon: 'factory', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-4 px-4 py-3 rounded transition-all cursor-pointer group ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] tracking-tight uppercase">{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="px-6 pt-6 border-t border-[#424754]/30">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]"></div>
              <span className="font-mono text-[10px] text-[#8c909f] tracking-widest">UPTIME: {osStatus?.uptime || 0}s</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex overflow-hidden bg-[#10131a]">
          <div className="flex-1 grid grid-cols-12 gap-6 p-6 h-full overflow-hidden">
            {/* Library Column */}
            <section className="col-span-12 lg:col-span-4 flex flex-col gap-6 overflow-hidden h-full">
              {/* Search & Filters */}
              <div className="bg-[#1d2027] p-5 border border-[#424754]/50 rounded-lg shadow-xl shrink-0">
                <div className="relative mb-5">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8c909f] text-sm">search</span>
                  <input 
                    className="w-full bg-[#10131a] border border-[#424754] py-2.5 pl-10 pr-4 font-mono text-[11px] text-[#e1e2ec] focus:border-[#4cd7f6] focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]/20 rounded-md transition-all placeholder:text-[#8c909f]/50" 
                    placeholder="SEARCH_MATERIAL_DATABASE..." 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['METALS', 'COMPOSITES', 'CERAMICS', 'POLYMERS'].map((filter) => (
                    <button 
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`font-mono text-[9px] py-2 border transition-all rounded ${
                        selectedFilter === filter 
                          ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-[#03b5d3]/50 font-bold' 
                          : 'bg-[#1d2027] text-[#8c909f] border-[#424754] hover:bg-[#32353c]/50'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material List */}
              <div className="flex-1 bg-[#1d2027] border border-[#424754]/50 rounded-lg overflow-hidden flex flex-col shadow-xl">
                <div className="bg-[#272a31] h-8 px-4 flex items-center justify-between border-b border-[#424754]/30 shrink-0">
                  <span className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase">MATERIAL_INDEX</span>
                  <span className="material-symbols-outlined text-sm text-[#8c909f]">filter_list</span>
                </div>
                <div className="overflow-y-auto flex-1 custom-scrollbar">
                  {filteredMaterials.map((m, i) => (
                    <div 
                      key={m.id}
                      className={`p-4 border-b border-[#424754]/20 cursor-pointer transition-all hover:bg-[#32353c]/30 ${
                        i === 0 ? 'bg-[#32353c]/50 border-l-4 border-l-[#4cd7f6]' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`font-mono text-[12px] font-bold ${i === 0 ? 'text-[#4cd7f6]' : 'text-[#e1e2ec]'}`}>{m.id}</span>
                        <span className={`font-mono text-[8px] px-2 py-0.5 rounded ${i === 0 ? 'bg-[#03b5d3]/10 text-[#4cd7f6]' : 'bg-[#424754]/30 text-[#8c909f]'}`}>
                          {m.grade}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-y-1">
                        <span className="font-mono text-[10px] text-[#8c909f]">DENSITY: {m.density} g/cm³</span>
                        <span className="font-mono text-[10px] text-[#8c909f]">YIELD: {m.yield} MPa</span>
                      </div>
                    </div>
                  ))}
                  {filteredMaterials.length === 0 && (
                    <div className="p-8 text-center font-mono text-[10px] text-[#8c909f] italic">
                      NO_RECORDS_FOUND_IN_"{selectedFilter}"
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Detailed Analysis Column */}
            <section className="col-span-12 lg:col-span-8 flex flex-col gap-6 overflow-hidden h-full">
              {/* Analysis Header */}
              <div className="bg-[#1d2027] p-6 border border-[#424754]/50 rounded-lg flex justify-between items-center shadow-xl shrink-0">
                <div>
                  <div className="flex items-center gap-4">
                    <h2 className="font-bold text-[#adc6ff] text-[24px] tracking-tighter uppercase">Ti-6Al-4V (Titanium Grade 5)</h2>
                    <span className="bg-[#10B981]/10 text-[#10B981] font-mono text-[10px] px-3 py-1 rounded-full border border-[#10B981]/30 font-bold uppercase tracking-widest">VALIDATED</span>
                  </div>
                  <p className="font-mono text-[#8c909f] text-[11px] mt-2 leading-relaxed max-w-2xl">
                    High-strength alpha-beta titanium alloy containing 6% aluminum and 4% vanadium. Preferred for mission-critical aerospace structures and bio-compatible implants.
                  </p>
                </div>
                <button className="bg-[#03b5d3] text-[#001f26] font-mono text-[10px] font-bold px-6 py-3 rounded flex items-center gap-3 shadow-[0_0_20px_rgba(3,181,211,0.3)] hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  APPLY_MATERIAL
                </button>
              </div>

              <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden">
                {/* Properties Grid */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-6 overflow-y-auto custom-scrollbar pr-2">
                  <div className="bg-[#1d2027] border border-[#424754]/50 rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-[#272a31] h-8 px-4 flex items-center shrink-0">
                      <span className="font-mono text-[9px] text-[#e1e2ec] font-bold tracking-widest uppercase">MECHANICAL_PROPERTIES</span>
                    </div>
                    <div className="p-5 space-y-5">
                      {[
                        { label: 'DENSITY', value: '4.43', unit: 'g/cm³' },
                        { label: "YOUNG'S_MODULUS", value: '113.8', unit: 'GPa' },
                        { label: 'YIELD_STRENGTH', value: '880', unit: 'MPa' },
                        { label: 'TENSILE_STRENGTH', value: '950', unit: 'MPa' },
                      ].map((p, i) => (
                        <div key={p.label}>
                          <div className="flex justify-between font-mono text-[9px] mb-1.5 text-[#8c909f] uppercase tracking-widest">{p.label}</div>
                          <div className="font-mono text-2xl text-[#4cd7f6] font-bold flex items-baseline gap-2">
                            {p.value} <span className="text-[11px] text-[#8c909f] font-normal">{p.unit}</span>
                          </div>
                          {i < 3 && <div className="h-px bg-[#424754]/20 mt-4" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Cards */}
                  <div className="space-y-3">
                    <button className="w-full bg-[#1d2027] border border-[#424754]/50 hover:border-[#4cd7f6] transition-all p-4 rounded-lg flex items-center justify-between group shadow-lg">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded bg-[#4cd7f6]/10 flex items-center justify-center text-[#4cd7f6]">
                          <span className="material-symbols-outlined">Activity</span>
                        </div>
                        <div>
                          <div className="font-mono text-[10px] text-[#e1e2ec] font-bold tracking-widest">SIMULATE_FEA</div>
                          <div className="font-mono text-[9px] text-[#8c909f] mt-1">Stress/Strain Tensor Analysis</div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[#8c909f] group-hover:text-[#4cd7f6] group-hover:translate-x-1 transition-all">chevron_right</span>
                    </button>
                    <button className="w-full bg-[#1d2027] border border-[#424754]/50 hover:border-[#adc6ff] transition-all p-4 rounded-lg flex items-center justify-between group shadow-lg">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded bg-[#adc6ff]/10 flex items-center justify-center text-[#adc6ff]">
                          <span className="material-symbols-outlined">auto_awesome</span>
                        </div>
                        <div>
                          <div className="font-mono text-[10px] text-[#e1e2ec] font-bold tracking-widest">AI_OPTIMIZE_GCODE</div>
                          <div className="font-mono text-[9px] text-[#8c909f] mt-1">Lattice Pathing Tweaks</div>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[#8c909f] group-hover:text-[#adc6ff] group-hover:translate-x-1 transition-all">chevron_right</span>
                    </button>
                  </div>
                </div>

                {/* Visualizations Area */}
                <div className="col-span-12 md:col-span-8 flex flex-col gap-6 overflow-hidden">
                  <div className="flex-1 bg-[#1d2027] border border-[#424754]/50 rounded-lg flex flex-col shadow-xl overflow-hidden">
                    <div className="bg-[#272a31] h-8 px-4 flex items-center justify-between shrink-0">
                      <span className="font-mono text-[9px] text-[#e1e2ec] font-bold tracking-widest uppercase">STRESS-STRAIN_DYNAMICS</span>
                      <span className="font-mono text-[9px] text-[#8c909f] tracking-tighter">T=20°C | P=1atm | STRAIN_RATE: 1e-3/s</span>
                    </div>
                    <div className="flex-1 relative p-12 overflow-hidden">
                      <div className="absolute inset-x-12 bottom-12 border-b border-[#424754]/50" />
                      <div className="absolute inset-y-12 left-12 border-l border-[#424754]/50" />
                      
                      {/* Grid Lines */}
                      <div className="absolute inset-12 flex flex-col justify-between pointer-events-none opacity-[0.05]">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div key={i} className="w-full h-px bg-[#e1e2ec]" />
                        ))}
                      </div>

                      {/* Interactive SVG Plot */}
                      <svg className="absolute inset-12 w-[calc(100%-96px)] h-[calc(100%-96px)] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path 
                          d="M 0 100 L 25 35 C 45 25 75 22 100 20" 
                          fill="none" 
                          stroke="#4cd7f6" 
                          strokeWidth="1.5" 
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_8px_rgba(76,215,246,0.5)]"
                        />
                        <circle cx="25" cy="35" r="2.5" fill="#4cd7f6" className="animate-pulse shadow-lg" />
                      </svg>

                      {/* Legend */}
                      <div className="absolute top-16 right-16 bg-[#10131a]/80 backdrop-blur-md border border-[#424754]/50 p-4 rounded-lg shadow-2xl flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6]" />
                          <span className="font-mono text-[10px] text-[#e1e2ec] font-bold uppercase tracking-tighter">ELASTIC_REGION</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ffb786]" />
                          <span className="font-mono text-[10px] text-[#8c909f] uppercase tracking-tighter">PLASTIC_FLOW</span>
                        </div>
                      </div>

                      {/* Axis Labels */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#8c909f] tracking-[0.2em] uppercase font-bold">STRAIN (ε)</div>
                      <div className="absolute top-1/2 left-4 -translate-y-1/2 -rotate-90 font-mono text-[10px] text-[#8c909f] tracking-[0.2em] uppercase font-bold whitespace-nowrap">STRESS (σ) MPa</div>
                    </div>
                  </div>

                  {/* Microstructure Preview */}
                  <div className="h-40 bg-[#1d2027] border border-[#424754]/50 rounded-lg overflow-hidden flex shadow-xl shrink-0 group">
                    <div className="w-40 h-full shrink-0 border-r border-[#424754]/30 relative overflow-hidden">
                      <img 
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-1000 scale-125" 
                        src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDwBRKnR6thts6CGtCRW6gSsYSXRwaDbyiPrN2Ztryv5VM2P9-Q9ahheC8qSt97nLOfRxX2w4T7FZI7iNLqsi_RgUIbH0WRjPUQL5kX6mX-cP3gJ_JnD_vZeSgeN8oZgIFbDC16jEX9Ph7wL8omzNr3n4FcQzg9tDZoSTrjs6iWz7Q5oQwrjPK3kO3YKRtLgy4VHDmM0bmROW25x3REiNcXG8CLxc_xNiA5oDysG-EEUssKdoqub8M96Zc_4WhjxIW12mCLxfbpI3YJ" 
                        alt="Microstructure Scan"
                      />
                      <div className="absolute inset-0 bg-[#4cd7f6]/5 mix-blend-overlay" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#4cd7f6] text-sm">microscope</span>
                        <span className="font-mono text-[10px] text-[#adc6ff] font-bold tracking-widest uppercase">MICROSTRUCTURE_SCAN (Lot #TR-992)</span>
                      </div>
                      <p className="font-mono text-[11px] text-[#8c909f] leading-relaxed italic">
                        Phase composition: 94% Alpha, 6% Beta. Grain size distribution centered at 12μm. No significant porosity detected. Specimen meets aerospace fatigue endurance standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424754;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default MaterialLibraryEngineeringOS_520c82;
