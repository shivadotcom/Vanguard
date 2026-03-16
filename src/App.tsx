import React from 'react';
import { Search, Filter, Shield, Zap, Target, Info, ChevronRight, X, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES } from './constants';
import { Vehicle, Category } from './types';

const CATEGORIES: Category[] = ['All', 'Tank', 'APC', 'Aircraft', 'Naval', 'Artillery'];
const GENERIC_MILITARY_IMAGE = 'https://source.unsplash.com/800x600/?tank,military';

const getDynamicImage = (name: string, type: string) => `https://source.unsplash.com/800x600/?${encodeURIComponent(name)},military,${encodeURIComponent(type.toLowerCase())}`;

export default function App() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('All');
  const [selectedCountry, setSelectedCountry] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedVehicle, setSelectedVehicle] = React.useState<Vehicle | null>(null);
  const [activeTab, setActiveTab] = React.useState<'overview' | 'specs' | 'history' | 'gallery'>('overview');

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

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0b] text-[#e2e2e4]">
      {/* Sidebar */}
      <aside className="w-64 tech-border border-r flex flex-col">
        <div className="p-6 border-b border-[#27272a]">
          <h1 className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            VANGUARD
          </h1>
          <p className="tech-label mt-1">Tactical Database v2.4</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div>
            <h3 className="tech-label mb-3 px-2">Classification</h3>
            <div className="space-y-1">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between group ${
                    selectedCategory === cat ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-[#18181b]'
                  }`}
                >
                  {cat}
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedCategory === cat ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="tech-label mb-3 px-2">Origin</h3>
            <div className="space-y-1">
              {countries.map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between group ${
                    selectedCountry === country ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-[#18181b]'
                  }`}
                >
                  {country}
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedCountry === country ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 tech-card rounded-lg bg-blue-500/5 border-blue-500/20">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Info className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Status</span>
            </div>
            <p className="text-[10px] leading-relaxed opacity-70">
              Database synchronized with global intelligence feeds. All technical specifications verified for accuracy.
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-[#27272a]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="tech-label">System Online</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="h-16 tech-border border-b flex items-center justify-between px-8 bg-[#0a0a0b]/80 backdrop-blur-md z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search database..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#18181b] tech-border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="tech-label">Total Assets</span>
              <span className="tech-value">{filteredVehicles.length}</span>
            </div>
          </div>
        </header>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <motion.div
                layoutId={vehicle.id}
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className="tech-card rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={getDynamicImage(vehicle.name, vehicle.type)}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = GENERIC_MILITARY_IMAGE;
                    }}
                  />
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
                  <img
                    src={getDynamicImage(selectedVehicle.name, selectedVehicle.type)}
                    alt={selectedVehicle.name}
                    className="w-full aspect-video object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = GENERIC_MILITARY_IMAGE;
                    }}
                  />
                  <div className="px-8 pt-6">
                    <div className="flex gap-6 border-b border-[#27272a]">
                      {(['overview', 'specs', 'history', 'gallery'] as const).map((tab) => (
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
                          <section>
                            <h4 className="tech-label mb-3 flex items-center gap-2">
                              <Info className="w-4 h-4" /> Overview
                            </h4>
                            <p className="text-lg text-zinc-300 leading-relaxed tech-header">
                              {selectedVehicle.description}
                            </p>
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
                        {activeTab === 'gallery' && (
                          <div className="space-y-6">
                            <h4 className="tech-label mb-3 flex items-center gap-2">
                              <ImageIcon className="w-4 h-4" /> Tactical Imagery
                            </h4>
                            {selectedVehicle.gallery && selectedVehicle.gallery.length > 0 ? (
                              <div className="grid grid-cols-2 gap-4">
                                {selectedVehicle.gallery.map((img, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-square rounded-lg overflow-hidden tech-border group cursor-zoom-in"
                                  >
                                    <img
                                      src={img}
                                      alt={`${selectedVehicle.name} gallery ${i + 1}`}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                      referrerPolicy="no-referrer"
                                    />
                                  </motion.div>
                                ))}
                              </div>
                            ) : (
                              <div className="p-12 text-center tech-card rounded-lg border-dashed border-[#27272a]">
                                <ImageIcon className="w-8 h-8 text-zinc-600 mx-auto mb-3 opacity-20" />
                                <p className="text-zinc-500 text-sm">No additional imagery available for this asset.</p>
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
