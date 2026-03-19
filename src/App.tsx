import React from 'react';
import { Search, Filter, Shield, Zap, Target, Info, ChevronRight, X, Image as ImageIcon, ArrowLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES } from './constants';
import { Vehicle, Category } from './types';
import { VehicleImage } from './components/VehicleImage';

const CATEGORIES: Category[] = ['All', 'Tank', 'APC', 'Aircraft', 'Naval', 'Artillery'];
const GENERIC_MILITARY_IMAGE = '/images/defaults/tank.jpg';

export default function App() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('All');
  const [selectedCountry, setSelectedCountry] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedVehicle, setSelectedVehicle] = React.useState<Vehicle | null>(null);
  const [activeTab, setActiveTab] = React.useState<'overview' | 'specs' | 'history'>('overview');
  const [compareList, setCompareList] = React.useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  React.useEffect(() => {
    if (compareList.length === 0) {
      setIsCompareModalOpen(false);
    }
  }, [compareList]);

  const toggleCompare = (e: React.MouseEvent, vehicleId: string) => {
    e.stopPropagation();
    
    const vehicleToAdd = VEHICLES.find(v => v.id === vehicleId);
    if (!vehicleToAdd) return;

    if (compareList.includes(vehicleId)) {
      setCompareList(prev => prev.filter(id => id !== vehicleId));
      return;
    }
    
    if (compareList.length >= 6) {
      showToast("You can only compare up to 6 vehicles at a time.");
      return;
    }
    
    if (compareList.length > 0) {
      const firstVehicle = VEHICLES.find(v => v.id === compareList[0]);
      if (firstVehicle && firstVehicle.type !== vehicleToAdd.type) {
        showToast(`Cannot compare a ${vehicleToAdd.type} with a ${firstVehicle.type}. Select another ${firstVehicle.type}.`);
        return;
      }
    }
    
    setCompareList(prev => [...prev, vehicleId]);
  };

  const countries = React.useMemo(() => {
    const uniqueCountries = Array.from(new Set(VEHICLES.map(v => v.country))).sort();
    return ['All', ...uniqueCountries];
  }, []);

  const filteredVehicles = VEHICLES.filter(v => {
    const matchesCategory = selectedCategory === 'All' || v.type === selectedCategory;
    const matchesCountry = selectedCountry === 'All' || v.country === selectedCountry;
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      v.name.toLowerCase().includes(query) || 
      v.country.toLowerCase().includes(query) ||
      v.description.toLowerCase().includes(query) ||
      v.specs.weight?.toLowerCase().includes(query) ||
      v.specs.speed?.toLowerCase().includes(query) ||
      v.specs.armor?.toLowerCase().includes(query) ||
      v.specs.range?.toLowerCase().includes(query) ||
      v.specs.engine?.toLowerCase().includes(query) ||
      v.specs.armament?.some(arm => arm.toLowerCase().includes(query)) ||
      v.specs.crew?.toString().includes(query);
    return matchesCategory && matchesCountry && matchesSearch;
  });

  const chunkedVehicles = React.useMemo(() => {
    const chunks = [];
    for (let i = 0; i < filteredVehicles.length; i += 5) {
      chunks.push(filteredVehicles.slice(i, i + 5));
    }
    return chunks;
  }, [filteredVehicles]);

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-[#0a0a0b] text-[#e2e2e4]">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 tech-border border-b lg:border-b-0 lg:border-r flex flex-col shrink-0 z-20 bg-[#0a0a0b]">
        <div className="p-4 lg:p-6 border-b border-[#27272a] flex items-center justify-between">
          <div>
            <h1 className="text-lg lg:text-xl font-bold tracking-tighter flex items-center gap-2">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              VANGUARD
            </h1>
            <p className="tech-label mt-1 hidden lg:block">Tactical Database v2.4</p>
          </div>
          <div className="lg:hidden flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="tech-label">Online</span>
          </div>
        </div>

        <div className="flex-none lg:flex-1 overflow-y-auto p-3 lg:p-4 flex flex-col gap-4 lg:gap-6 hide-scrollbar">
          <div>
            <h3 className="tech-label px-2 mb-2">Classification</h3>
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible hide-scrollbar pb-2 lg:pb-0">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 lg:w-full text-left px-4 py-2 rounded-md text-xs lg:text-sm transition-all flex items-center justify-between group ${
                    selectedCategory === cat 
                      ? 'bg-blue-600 text-white border border-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.5)] font-medium' 
                      : 'bg-[#18181b] lg:bg-transparent hover:bg-[#27272a] border border-[#27272a] lg:border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat}
                  <ChevronRight className={`hidden lg:block w-4 h-4 transition-transform ${selectedCategory === cat ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="tech-label px-2 mb-2">Origin</h3>
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-x-visible hide-scrollbar pb-2 lg:pb-0">
              {countries.map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`shrink-0 lg:w-full text-left px-4 py-2 rounded-md text-xs lg:text-sm transition-all flex items-center justify-between group ${
                    selectedCountry === country 
                      ? 'bg-blue-600 text-white border border-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.5)] font-medium' 
                      : 'bg-[#18181b] lg:bg-transparent hover:bg-[#27272a] border border-[#27272a] lg:border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {country}
                  <ChevronRight className={`hidden lg:block w-4 h-4 transition-transform ${selectedCountry === country ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block p-4 tech-card rounded-lg bg-blue-500/5 border-blue-500/20 mt-auto">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Info className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Status</span>
            </div>
            <p className="text-[10px] leading-relaxed opacity-70">
              Database synchronized with global intelligence feeds. All technical specifications verified for accuracy.
            </p>
          </div>
        </div>

        <div className="hidden lg:block p-4 border-t border-[#27272a]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="tech-label">System Online</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative min-h-0 overflow-hidden">
        {/* Header */}
        <header className="tech-border border-b flex flex-col lg:flex-row items-center justify-between p-4 lg:px-8 lg:h-16 bg-[#0a0a0b]/80 backdrop-blur-md z-10 gap-4 lg:gap-0 shrink-0">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search database..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#18181b] tech-border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-4 lg:gap-6 w-full lg:w-auto overflow-x-auto hide-scrollbar pb-1 lg:pb-0">
            {compareList.length > 0 && (
              <div className="flex items-center bg-[#18181b] border border-[#27272a] rounded-md overflow-hidden transition-all hover:border-blue-500/50 shrink-0">
                <button
                  onClick={() => setIsCompareModalOpen(true)}
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 hover:bg-[#27272a] text-zinc-300 font-bold text-[10px] uppercase tracking-wider transition-colors"
                >
                  <ArrowLeftRight className="w-4 h-4 text-blue-400" />
                  <span className="whitespace-nowrap">Compare {compareList.length} {VEHICLES.find(v => v.id === compareList[0])?.type}{compareList.length > 1 ? 's' : ''}</span>
                </button>
                <div className="w-px h-4 bg-[#27272a]" />
                <button
                  onClick={() => setCompareList([])}
                  className="px-3 py-2 text-zinc-500 hover:text-red-400 hover:bg-[#27272a] transition-colors"
                  title="Clear comparison"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="flex flex-col items-end border-l border-[#27272a] pl-4 lg:pl-6 shrink-0">
              <span className="tech-label">Total Assets</span>
              <span className="tech-value">{filteredVehicles.length}</span>
            </div>
          </div>
        </header>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">
          {chunkedVehicles.map((chunk, rowIndex) => (
            <div key={rowIndex} className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x">
              {chunk.map((vehicle) => (
                <motion.div
                  layoutId={vehicle.id}
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="tech-card rounded-xl overflow-hidden cursor-pointer group shrink-0 w-[85vw] sm:w-[340px] lg:w-[400px] snap-center"
                >
                <div className="aspect-video relative overflow-hidden bg-[#18181b]">
                  <VehicleImage
                    vehicle={vehicle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => toggleCompare(e, vehicle.id)}
                    className={`absolute top-3 left-3 p-2 backdrop-blur-md rounded border transition-colors z-10 ${
                      compareList.includes(vehicle.id) 
                        ? 'bg-blue-600/80 border-blue-400 text-white' 
                        : (compareList.length > 0 && VEHICLES.find(v => v.id === compareList[0])?.type !== vehicle.type) || compareList.length >= 6
                          ? 'bg-black/40 border-white/5 text-zinc-600 cursor-not-allowed'
                          : 'bg-black/60 border-white/10 text-zinc-400 hover:text-white hover:bg-black/80'
                    }`}
                    title={
                      compareList.includes(vehicle.id) 
                        ? "Remove from comparison" 
                        : compareList.length >= 6 
                          ? "Maximum 6 vehicles reached" 
                          : (compareList.length > 0 && VEHICLES.find(v => v.id === compareList[0])?.type !== vehicle.type)
                            ? `Only ${VEHICLES.find(v => v.id === compareList[0])?.type}s can be compared right now`
                            : "Add to comparison"
                    }
                  >
                    <ArrowLeftRight className="w-4 h-4" />
                  </button>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10">
                    <span className="tech-label text-white">{vehicle.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold tracking-tight">{vehicle.name}</h3>
                    <span className="tech-label text-blue-400">{vehicle.country}</span>
                  </div>
                  <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                    {vehicle.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#27272a]">
                    <div>
                      <span className="tech-label block">Weight</span>
                      <span className="tech-value">{vehicle.specs.weight || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="tech-label block">Speed</span>
                      <span className="tech-value">{vehicle.specs.speed || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Details Overlay */}
        <AnimatePresence>
          {selectedVehicle && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedVehicle(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20"
              />
              <motion.div
                layoutId={selectedVehicle.id}
                className="absolute right-0 top-0 bottom-0 w-full max-w-2xl bg-[#0a0a0b] tech-border border-l z-30 shadow-2xl flex flex-col"
              >
                <div className="p-6 border-b border-[#27272a] flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tighter">{selectedVehicle.name}</h2>
                    <span className="tech-label">{selectedVehicle.type} • {selectedVehicle.country}</span>
                  </div>
                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="p-2 hover:bg-[#18181b] rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="relative group">
                    <VehicleImage
                      vehicle={selectedVehicle}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  <div className="px-8 pt-6">
                    <div className="flex gap-6 border-b border-[#27272a]">
                      {(['overview', 'specs', 'history'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`pb-4 text-xs font-bold uppercase tracking-widest transition-colors relative ${
                            activeTab === tab ? 'text-blue-400' : 'text-zinc-500 hover:text-zinc-300'
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
                  </div>

                  <div className="p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-8"
                      >
                        {activeTab === 'overview' && (
                          <section className="space-y-8">
                            <div>
                              <h4 className="tech-label mb-3 flex items-center gap-2">
                                <Info className="w-4 h-4" /> Overview
                              </h4>
                              <p className="text-lg text-zinc-300 leading-relaxed tech-header">
                                {selectedVehicle.description}
                              </p>
                            </div>
                            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#27272a]">
                              <div className="text-center">
                                <span className="tech-label block">Crew</span>
                                <span className="tech-value text-xl">{selectedVehicle.specs.crew}</span>
                              </div>
                              <div className="text-center">
                                <span className="tech-label block">Era</span>
                                <span className="tech-value text-xl">{selectedVehicle.era}</span>
                              </div>
                              <div className="text-center">
                                <span className="tech-label block">Status</span>
                                <span className="tech-value text-xl text-green-500">ACTIVE</span>
                              </div>
                            </div>
                          </section>
                        )}

                        {activeTab === 'specs' && (
                          <div className="space-y-8">
                            <section className="grid grid-cols-2 gap-8">
                              <div>
                                <h4 className="tech-label mb-3 flex items-center gap-2">
                                  <Zap className="w-4 h-4" /> Performance
                                </h4>
                                <div className="space-y-4">
                                  <div>
                                    <span className="tech-label block">Max Speed</span>
                                    <span className="tech-value text-lg">{selectedVehicle.specs.speed}</span>
                                  </div>
                                  <div>
                                    <span className="tech-label block">Operational Range</span>
                                    <span className="tech-value text-lg">{selectedVehicle.specs.range}</span>
                                  </div>
                                  <div>
                                    <span className="tech-label block">Weight</span>
                                    <span className="tech-value text-lg">{selectedVehicle.specs.weight}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="tech-label mb-3 flex items-center gap-2">
                                  <Target className="w-4 h-4" /> Armament
                                </h4>
                                <ul className="space-y-2">
                                  {selectedVehicle.specs.armament?.map((arm, i) => (
                                    <li key={i} className="tech-value text-sm flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                      {arm}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </section>

                            <section>
                              <h4 className="tech-label mb-3 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Protection
                              </h4>
                              <div className="p-4 tech-card rounded-lg border-blue-500/20 bg-blue-500/5">
                                <span className="tech-value">{selectedVehicle.specs.armor || 'Classified'}</span>
                              </div>
                            </section>
                          </div>
                        )}

                        {activeTab === 'history' && (
                          <div className="space-y-8">
                            {selectedVehicle.variants && selectedVehicle.variants.length > 0 && (
                              <section>
                                <h4 className="tech-label mb-3 flex items-center gap-2">
                                  <Filter className="w-4 h-4" /> Variants & Sub-models
                                </h4>
                                <div className="space-y-3">
                                  {selectedVehicle.variants.map((variant, i) => (
                                    <div key={i} className="p-4 tech-card rounded-lg border-[#27272a] bg-[#18181b]/50">
                                      <h5 className="text-sm font-bold text-blue-400 mb-1">{variant.name}</h5>
                                      <p className="text-xs text-zinc-400 leading-relaxed">{variant.description}</p>
                                    </div>
                                  ))}
                                </div>
                              </section>
                            )}

                            {selectedVehicle.timeline && selectedVehicle.timeline.length > 0 && (
                              <section>
                                <h4 className="tech-label mb-3 flex items-center gap-2">
                                  <Zap className="w-4 h-4" /> Historical Timeline
                                </h4>
                                <div className="relative pl-4 space-y-6 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-[#27272a]">
                                  {selectedVehicle.timeline.map((item, i) => (
                                    <div key={i} className="relative">
                                      <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-[#0a0a0b]" />
                                      <span className="text-xs font-bold text-blue-400 block mb-1">{item.year}</span>
                                      <p className="text-sm text-zinc-300 leading-relaxed">{item.event}</p>
                                    </div>
                                  ))}
                                </div>
                              </section>
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

        {/* Comparison Modal */}
        <AnimatePresence>
          {isCompareModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-[#0a0a0b] tech-border rounded-xl w-full max-w-7xl max-h-full flex flex-col overflow-hidden shadow-2xl"
              >
                <div className="p-6 border-b border-[#27272a] flex items-center justify-between bg-[#18181b]">
                  <h2 className="text-xl font-bold tracking-tighter flex items-center gap-2">
                    <ArrowLeftRight className="w-5 h-5 text-blue-500" />
                    Vehicle Comparison
                  </h2>
                  <button onClick={() => setIsCompareModalOpen(false)} className="p-2 hover:bg-[#27272a] rounded-full transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex-1 overflow-auto p-6">
                  {compareList.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-zinc-500">
                      <ArrowLeftRight className="w-12 h-12 mb-4 opacity-20" />
                      <p>No vehicles selected for comparison.</p>
                    </div>
                  ) : (
                    <div className="min-w-max pb-4">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr>
                            <th className="p-4 border-b border-r border-[#27272a] bg-[#0a0a0b] sticky left-0 z-20 w-32 md:w-48"></th>
                            {compareList.map(id => {
                              const v = VEHICLES.find(v => v.id === id);
                              if (!v) return null;
                              return (
                                <th key={id} className="p-4 border-b border-r border-[#27272a] w-64 md:w-80 align-top bg-[#0a0a0b]">
                                  <div className="relative aspect-video rounded-lg overflow-hidden tech-border mb-3 bg-[#18181b]">
                                    <VehicleImage 
                                      vehicle={v} 
                                      className="w-full h-full object-cover" 
                                    />
                                    <button onClick={(e) => toggleCompare(e, id)} className="absolute top-2 right-2 p-1.5 bg-black/60 rounded hover:bg-red-500/80 text-white backdrop-blur-md transition-colors">
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                  <h3 className="text-lg font-bold tracking-tight line-clamp-2">{v.name}</h3>
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#27272a]">
                          {[
                            { label: 'Type', key: 'type' },
                            { label: 'Country', key: 'country' },
                            { label: 'Weight', key: 'weight', isSpec: true },
                            { label: 'Speed', key: 'speed', isSpec: true },
                            { label: 'Range', key: 'range', isSpec: true },
                            { label: 'Crew', key: 'crew', isSpec: true },
                            { label: 'Armor', key: 'armor', isSpec: true },
                          ].map((row) => (
                            <tr key={row.label} className="hover:bg-blue-500/10 transition-colors group">
                              <td className="p-4 border-r border-[#27272a] tech-label sticky left-0 bg-[#0a0a0b] group-hover:bg-[#121215] z-10 whitespace-nowrap">
                                {row.label}
                              </td>
                              {compareList.map(id => {
                                const v = VEHICLES.find(v => v.id === id);
                                if (!v) return null;
                                const val = row.isSpec ? (v.specs as any)[row.key] : (v as any)[row.key];
                                return (
                                  <td key={id} className="p-4 border-r border-[#27272a] tech-value">
                                    {val || 'N/A'}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                          <tr className="hover:bg-blue-500/10 transition-colors group">
                            <td className="p-4 border-r border-[#27272a] tech-label sticky left-0 bg-[#0a0a0b] group-hover:bg-[#121215] z-10 align-top whitespace-nowrap">
                              Armament
                            </td>
                            {compareList.map(id => {
                              const v = VEHICLES.find(v => v.id === id);
                              if (!v) return null;
                              return (
                                <td key={id} className="p-4 border-r border-[#27272a] align-top">
                                  <ul className="space-y-2">
                                    {v.specs.armament?.map((arm, i) => (
                                      <li key={i} className="tech-value text-xs flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                        {arm}
                                      </li>
                                    ))}
                                  </ul>
                                </td>
                              );
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast Message */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-4 py-3 bg-[#18181b] text-zinc-300 rounded-lg shadow-2xl border border-[#27272a] text-sm flex items-center gap-3 min-w-[300px]"
            >
              <Info className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="flex-1">{toastMessage}</span>
              <button 
                onClick={() => setToastMessage(null)} 
                className="p-1 hover:bg-[#27272a] rounded-md text-zinc-500 hover:text-zinc-300 transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
