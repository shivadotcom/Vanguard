import React, { useState, useMemo } from 'react';
import { Search, Shield, ChevronRight, ArrowLeftRight, X, Info, ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES } from './constants';
import { Vehicle, Category } from './types';
import { VehicleImage } from './components/VehicleImage';

const CATEGORIES: Category[] = ['All', 'Tank', 'APC', 'Aircraft', 'Naval', 'Artillery'];
const ORIGINS = ['All', ...Array.from(new Set(VEHICLES.map(v => v.country))).sort()];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'history'>('overview');

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter(v => {
      const matchesCategory = selectedCategory === 'All' || v.type === selectedCategory;
      const matchesOrigin = selectedOrigin === 'All' || v.country === selectedOrigin;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        v.name.toLowerCase().includes(query) || 
        v.country.toLowerCase().includes(query) ||
        v.type.toLowerCase().includes(query);
      return matchesCategory && matchesOrigin && matchesSearch;
    });
  }, [selectedCategory, selectedOrigin, searchQuery]);

  return (
    <div className="flex h-screen bg-[#0B0F14] text-gray-200 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-[#1F2937] bg-[#0B0F14] flex flex-col z-20">
        {/* Logo */}
        <div className="p-6 border-b border-[#1F2937]">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-bold tracking-tight text-white">VANGUARD</h1>
          </div>
          <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
            Tactical Database V2.4
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
          {/* Classification */}
          <div>
            <h2 className="text-[10px] text-gray-500 font-mono tracking-widest mb-3 px-2 uppercase">
              Classification
            </h2>
            <div className="space-y-1">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setSelectedVehicle(null); }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat 
                      ? 'bg-blue-600 text-white font-medium' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-[#1F2937]'
                  }`}
                >
                  <span>{cat}</span>
                  {selectedCategory === cat && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>

          {/* Origin */}
          <div>
            <h2 className="text-[10px] text-gray-500 font-mono tracking-widest mb-3 px-2 uppercase">
              Origin
            </h2>
            <div className="space-y-1">
              {ORIGINS.map(origin => (
                <button
                  key={origin}
                  onClick={() => { setSelectedOrigin(origin); setSelectedVehicle(null); }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    selectedOrigin === origin 
                      ? 'bg-blue-600 text-white font-medium' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-[#1F2937]'
                  }`}
                >
                  <span>{origin}</span>
                  {selectedOrigin === origin && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="p-5 border-t border-[#1F2937] flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
            System Online
          </span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0B0F14] relative">
        {/* Topbar */}
        <header className="h-20 border-b border-[#1F2937] flex items-center justify-between px-8 shrink-0">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search database..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111827] border border-[#1F2937] rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-500"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                filteredVehicles.forEach(vehicle => {
                  import('./services/imageService').then(({ getVehicleImage }) => {
                    getVehicleImage(vehicle, Date.now());
                  });
                });
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
            >
              <ImageIcon className="w-4 h-4" />
              GENERATE ALL ({filteredVehicles.length})
            </button>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">
                Total Assets
              </span>
              <span className="text-xl font-bold text-white leading-none">
                {filteredVehicles.length}
              </span>
            </div>
          </div>
        </header>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={vehicle.id}
                  onClick={() => { setSelectedVehicle(vehicle); setActiveTab('overview'); }}
                  className="bg-[#111827] border border-[#1F2937] rounded-xl overflow-hidden flex flex-col hover:border-blue-500 transition-colors group cursor-pointer"
                >
                  {/* Image Area */}
                  <div className="relative h-56 bg-[#1F2937] shrink-0 overflow-hidden">
                    <VehicleImage
                      vehicle={vehicle}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60" />
                    
                    {/* Top Left Icon */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                      <ArrowLeftRight className="w-4 h-4 text-gray-300" />
                    </div>

                    {/* Top Right Badge */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-mono tracking-widest px-2.5 py-1 rounded uppercase">
                      {vehicle.type}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <h3 className="text-lg font-bold text-white leading-tight">{vehicle.name}</h3>
                      <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider shrink-0 mt-1">
                        {vehicle.country}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-400 line-clamp-2 mb-6 flex-1 leading-relaxed">
                      {vehicle.description}
                    </p>
                    
                    {/* Footer Specs */}
                    <div className="border-t border-[#1F2937] pt-5 grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1.5">
                          Weight
                        </div>
                        <div className="text-sm text-gray-200 font-mono">
                          {vehicle.specs.weight || 'CLASSIFIED'}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1.5">
                          Speed
                        </div>
                        <div className="text-sm text-gray-200 font-mono">
                          {vehicle.specs.speed || 'CLASSIFIED'}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Details Modal */}
        <AnimatePresence>
          {selectedVehicle && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedVehicle(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute right-0 top-0 bottom-0 w-full max-w-3xl bg-[#0B0F14] border-l border-[#1F2937] z-50 shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-8 flex items-start justify-between shrink-0">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">{selectedVehicle.name}</h2>
                    <div className="text-xs text-gray-500 font-mono tracking-widest uppercase">
                      {selectedVehicle.type} • {selectedVehicle.country}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="p-2 hover:bg-[#1F2937] rounded-full transition-colors text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  {/* Image */}
                  <div className="w-full h-[400px] relative bg-[#111827]">
                    <VehicleImage
                      vehicle={selectedVehicle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Tabs */}
                  <div className="px-8 mt-8 border-b border-[#1F2937] flex gap-8">
                    {(['overview', 'specs', 'history'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-bold tracking-widest uppercase transition-colors relative ${
                          activeTab === tab ? 'text-blue-500' : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {activeTab === 'overview' && (
                          <div>
                            <div className="flex items-center gap-2 text-gray-500 mb-6">
                              <Info className="w-4 h-4" />
                              <span className="text-[10px] font-mono tracking-widest uppercase">Overview</span>
                            </div>
                            <p className="text-xl text-gray-300 font-serif italic leading-relaxed">
                              {selectedVehicle.description}
                            </p>
                          </div>
                        )}

                        {activeTab === 'specs' && (
                          <div className="space-y-8">
                            <div>
                              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 border-b border-[#1F2937] pb-2">
                                Technical Specs
                              </div>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Weight</div>
                                  <div className="text-sm text-gray-200 font-mono">{selectedVehicle.specs.weight || 'CLASSIFIED'}</div>
                                </div>
                                <div>
                                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Speed</div>
                                  <div className="text-sm text-gray-200 font-mono">{selectedVehicle.specs.speed || 'CLASSIFIED'}</div>
                                </div>
                                <div>
                                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Range</div>
                                  <div className="text-sm text-gray-200 font-mono">{selectedVehicle.specs.range || 'CLASSIFIED'}</div>
                                </div>
                                <div>
                                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Engine</div>
                                  <div className="text-sm text-gray-200 font-mono">{selectedVehicle.specs.engine || 'CLASSIFIED'}</div>
                                </div>
                                <div>
                                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Crew</div>
                                  <div className="text-sm text-gray-200 font-mono">{selectedVehicle.specs.crew || 'CLASSIFIED'}</div>
                                </div>
                                <div>
                                  <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-1">Armor</div>
                                  <div className="text-sm text-gray-200 font-mono">{selectedVehicle.specs.armor || 'CLASSIFIED'}</div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 border-b border-[#1F2937] pb-2">
                                Armament
                              </div>
                              <ul className="space-y-3">
                                {selectedVehicle.specs.armament?.map((arm, i) => (
                                  <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                    <span>{arm}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {activeTab === 'history' && (
                          <div className="space-y-8">
                            {(!selectedVehicle.timeline || selectedVehicle.timeline.length === 0) && (!selectedVehicle.variants || selectedVehicle.variants.length === 0) && (
                              <div className="text-center py-12 text-gray-500 font-mono text-sm uppercase tracking-widest">
                                No historical data available
                              </div>
                            )}
                            {selectedVehicle.timeline && selectedVehicle.timeline.length > 0 && (
                              <div>
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-[#1F2937] pb-2">
                                  Operational Timeline
                                </div>
                                <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-[#1F2937]">
                                  {selectedVehicle.timeline.map((item, i) => (
                                    <div key={i} className="relative">
                                      <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-blue-500 border-4 border-[#0B0F14]" />
                                      <span className="text-[10px] font-mono font-bold text-blue-400 block mb-2 tracking-widest">{item.year}</span>
                                      <p className="text-sm text-gray-300 leading-relaxed">{item.event}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {selectedVehicle.variants && selectedVehicle.variants.length > 0 && (
                              <div>
                                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 border-b border-[#1F2937] pb-2">
                                  Known Variants
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                  {selectedVehicle.variants.map((variant, i) => (
                                    <div key={i} className="bg-[#111827] border border-[#1F2937] p-5 rounded-lg">
                                      <h4 className="text-sm font-bold text-white mb-2">{variant.name}</h4>
                                      <p className="text-xs text-gray-400 leading-relaxed">{variant.description}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
