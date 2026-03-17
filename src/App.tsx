import React from 'react';
import { Search, Filter, Shield, Zap, Target, Info, ChevronRight, X, Image as ImageIcon, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES } from './constants';
import { Vehicle, Category } from './types';
import { generateVehicleImage, generateVehicleScene } from './services/geminiService';

const CATEGORIES: Category[] = ['All', 'Tank', 'APC', 'Aircraft', 'Naval', 'Artillery'];
const GENERIC_MILITARY_IMAGE = 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=800&auto=format&fit=crop';

const getDynamicImage = (id: string) => `https://picsum.photos/seed/${id}/800/450`;

export default function App() {
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('All');
  const [selectedCountry, setSelectedCountry] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedVehicle, setSelectedVehicle] = React.useState<Vehicle | null>(null);
  const [activeTab, setActiveTab] = React.useState<'overview' | 'specs' | 'history' | 'gallery'>('overview');
  const [aiImages, setAiImages] = React.useState<Record<string, string[]>>({});
  const [primaryImageOverrides, setPrimaryImageOverrides] = React.useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [isEditingUrl, setIsEditingUrl] = React.useState(false);
  const [tempUrl, setTempUrl] = React.useState('');
  const [sceneInput, setSceneInput] = React.useState('');
  const [aiGeneratedContent, setAiGeneratedContent] = React.useState<Record<string, { title: string, description: string, imagePrompt: string }>>({});
  const [isAiMenuOpen, setIsAiMenuOpen] = React.useState(false);
  const [isGeneratingAll, setIsGeneratingAll] = React.useState(false);
  const [generationProgress, setGenerationProgress] = React.useState('');

  React.useEffect(() => {
    if (selectedVehicle) {
      setSceneInput(selectedVehicle.aiPrompt || `A cinematic shot of a ${selectedVehicle.name} in action.`);
    }
  }, [selectedVehicle]);

  const isGenericImage = (url: string) => {
    const genericIds = [
      'photo-1567259565705-05249f3d9701',
      'photo-1516939884455-1445c8652f83',
      'photo-1621682372775-533449e550ed',
      'photo-1614332284882-331c326582a3',
      'photo-1583623025817-d180a2221d0a',
      'photo-1534260164206-2a3a4976001b',
      'photo-1599059813005-11265ba4b4ce',
      'photo-1576400883215-7083980b1297',
      'photo-1580136608260-42d1c49e6a70',
      'photo-1517976487492-5750f3195933',
      'photo-1500077423678-25eead48513a',
      'photo-1550985543-f47f38aee65e'
    ];
    return genericIds.some(id => url.includes(id));
  };

  const getVehicleImage = (vehicle: Vehicle) => {
    if (primaryImageOverrides[vehicle.id]) return primaryImageOverrides[vehicle.id];
    if (vehicle.image && !isGenericImage(vehicle.image)) return vehicle.image;
    return getDynamicImage(vehicle.id);
  };

  const handleGenerateImage = async (vehicle: Vehicle) => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const sceneData = await generateVehicleScene(vehicle.name, sceneInput || vehicle.aiPrompt || '');
      setAiGeneratedContent(prev => ({
        ...prev,
        [vehicle.id]: sceneData
      }));

      const imageUrl = await generateVehicleImage(vehicle.name, vehicle.type, vehicle.description, sceneData.imagePrompt);
      setAiImages(prev => ({ 
        ...prev, 
        [vehicle.id]: [...(prev[vehicle.id] || []), imageUrl] 
      }));
      // Automatically set as primary when generated
      setPrimaryImageOverrides(prev => ({ ...prev, [vehicle.id]: imageUrl }));
    } catch (error) {
      console.error("Failed to generate image", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateAllImages = async () => {
    if (isGeneratingAll) return;
    setIsGeneratingAll(true);
    
    try {
      for (let i = 0; i < VEHICLES.length; i++) {
        const vehicle = VEHICLES[i];
        // Skip if already generated
        if (primaryImageOverrides[vehicle.id]) continue;
        
        setGenerationProgress(`Generating ${i + 1} of ${VEHICLES.length}: ${vehicle.name}`);
        
        try {
          const scenePrompt = vehicle.aiPrompt || `A cinematic shot of a ${vehicle.name} in action.`;
          const sceneData = await generateVehicleScene(vehicle.name, scenePrompt);
          setAiGeneratedContent(prev => ({
            ...prev,
            [vehicle.id]: sceneData
          }));

          const imageUrl = await generateVehicleImage(vehicle.name, vehicle.type, vehicle.description, sceneData.imagePrompt);
          setAiImages(prev => ({ 
            ...prev, 
            [vehicle.id]: [...(prev[vehicle.id] || []), imageUrl] 
          }));
          setPrimaryImageOverrides(prev => ({ ...prev, [vehicle.id]: imageUrl }));
        } catch (error) {
          console.error(`Failed to generate image for ${vehicle.name}`, error);
          // Continue with the next vehicle even if one fails
        }
      }
    } finally {
      setIsGeneratingAll(false);
      setGenerationProgress('');
    }
  };

  const handleUpdateUrl = (vehicleId: string) => {
    if (tempUrl.trim()) {
      const url = tempUrl.trim();
      setAiImages(prev => ({ 
        ...prev, 
        [vehicleId]: [...(prev[vehicleId] || []), url] 
      }));
      // Automatically set as primary when added
      setPrimaryImageOverrides(prev => ({ ...prev, [vehicleId]: url }));
      setIsEditingUrl(false);
      setTempUrl('');
    }
  };

  const setAsPrimary = (vehicleId: string, url: string) => {
    setPrimaryImageOverrides(prev => ({ ...prev, [vehicleId]: url }));
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
          <div className="flex items-center gap-6">
            <button
              onClick={handleGenerateAllImages}
              disabled={isGeneratingAll}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/50 text-blue-400 rounded-md font-bold text-[10px] uppercase tracking-wider transition-all disabled:opacity-50"
            >
              {isGeneratingAll ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {isGeneratingAll ? generationProgress : 'Generate All AI Images'}
            </button>
            <div className="flex flex-col items-end border-l border-[#27272a] pl-6">
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
                    src={getVehicleImage(vehicle)}
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
                  <div className="relative group">
                    <img
                      src={getVehicleImage(selectedVehicle)}
                      alt={selectedVehicle.name}
                      className="w-full aspect-video object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = GENERIC_MILITARY_IMAGE;
                      }}
                    />
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                      {isGenerating ? (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/90 backdrop-blur-md text-white rounded-md font-bold text-[10px] uppercase tracking-wider shadow-lg">
                          <Loader2 className="w-3 h-3 animate-spin" />
                          Generating Cinematic Scene...
                        </div>
                      ) : isAiMenuOpen ? (
                        <div className="flex flex-col items-end gap-2 bg-black/80 backdrop-blur-xl p-4 rounded-lg border border-white/10 shadow-2xl w-72">
                          <div className="flex justify-between w-full items-center mb-1">
                            <label className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Scene Input</label>
                            <button onClick={() => setIsAiMenuOpen(false)} className="text-zinc-400 hover:text-white">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <textarea
                            value={sceneInput}
                            onChange={(e) => setSceneInput(e.target.value)}
                            placeholder="Describe the scene..."
                            className="w-full h-24 bg-black/40 border border-white/20 rounded p-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 resize-none"
                          />
                          <button
                            onClick={() => {
                              handleGenerateImage(selectedVehicle);
                              setIsAiMenuOpen(false);
                            }}
                            className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-bold text-[10px] uppercase tracking-wider shadow-lg transition-all w-full justify-center mt-2"
                          >
                            <Sparkles className="w-3 h-3" />
                            Generate Cinematic Scene
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setIsAiMenuOpen(true)}
                          className="flex items-center gap-2 px-3 py-1.5 bg-blue-600/90 hover:bg-blue-500 backdrop-blur-md text-white rounded-md font-bold text-[10px] uppercase tracking-wider shadow-lg transition-all"
                        >
                          <Sparkles className="w-3 h-3" />
                          AI Gen Primary
                        </button>
                      )}
                    </div>
                    {primaryImageOverrides[selectedVehicle.id] && (
                      <div className="absolute bottom-4 right-4 px-2 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
                        Custom Primary
                      </div>
                    )}
                  </div>
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
                          <section className="space-y-8">
                            {aiGeneratedContent[selectedVehicle.id] && (
                              <div className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl space-y-4">
                                <h4 className="tech-label flex items-center gap-2 text-blue-400">
                                  <Sparkles className="w-4 h-4" /> AI Generated Scene
                                </h4>
                                <div>
                                  <h5 className="text-white font-bold text-lg mb-2">{aiGeneratedContent[selectedVehicle.id].title}</h5>
                                  <p className="text-sm text-zinc-300 leading-relaxed italic border-l-2 border-blue-500/50 pl-4">
                                    "{aiGeneratedContent[selectedVehicle.id].description}"
                                  </p>
                                </div>
                                <div className="pt-4 border-t border-blue-500/10">
                                  <span className="text-[10px] font-bold text-blue-400/70 uppercase tracking-wider block mb-1">Image Prompt Used</span>
                                  <p className="text-xs text-zinc-400 font-mono bg-black/40 p-3 rounded">
                                    {aiGeneratedContent[selectedVehicle.id].imagePrompt}
                                  </p>
                                </div>
                              </div>
                            )}
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
                        {activeTab === 'gallery' && (
                          <div className="space-y-6">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="tech-label flex items-center gap-2">
                                <ImageIcon className="w-4 h-4" /> Tactical Imagery
                              </h4>
                              <div className="flex gap-2">
                                <button
                                  onClick={() => setIsEditingUrl(!isEditingUrl)}
                                  className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md font-bold text-[10px] uppercase tracking-wider shadow-lg transition-all"
                                >
                                  <ImageIcon className="w-3 h-3" />
                                  Add URL
                                </button>
                              </div>
                            </div>

                            {isEditingUrl && (
                              <div className="p-4 bg-black/40 border border-white/10 rounded-lg flex gap-2 mb-4">
                                <input
                                  type="text"
                                  value={tempUrl}
                                  onChange={(e) => setTempUrl(e.target.value)}
                                  placeholder="Paste tactical image URL..."
                                  className="flex-1 bg-[#18181b] border border-[#27272a] rounded px-3 py-1.5 text-xs focus:outline-none focus:border-blue-500"
                                  onKeyDown={(e) => e.key === 'Enter' && handleUpdateUrl(selectedVehicle.id)}
                                />
                                <button
                                  onClick={() => handleUpdateUrl(selectedVehicle.id)}
                                  className="px-3 py-1.5 bg-blue-600 rounded text-xs font-bold"
                                >
                                  Add
                                </button>
                              </div>
                            )}

                            {(() => {
                              const baseGallery = selectedVehicle.gallery && selectedVehicle.gallery.length > 0 
                                ? selectedVehicle.gallery 
                                : [
                                    `https://picsum.photos/seed/${selectedVehicle.id}-1/800/600`,
                                    `https://picsum.photos/seed/${selectedVehicle.id}-2/800/600`,
                                    `https://picsum.photos/seed/${selectedVehicle.id}-3/800/600`,
                                    `https://picsum.photos/seed/${selectedVehicle.id}-4/800/600`
                                  ];
                              
                              const customImages = aiImages[selectedVehicle.id] || [];
                              const galleryImages = [selectedVehicle.image, ...customImages, ...baseGallery];
                              
                              return (
                                <div className="grid grid-cols-2 gap-4">
                                  {galleryImages.map((img, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="aspect-square rounded-lg overflow-hidden tech-border group relative"
                                    >
                                      <img
                                        src={img}
                                        alt={`${selectedVehicle.name} gallery ${i + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        referrerPolicy="no-referrer"
                                      />
                                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                                        <button
                                          onClick={() => setAsPrimary(selectedVehicle.id, img)}
                                          className={`w-full py-2 rounded font-bold text-[10px] uppercase tracking-wider transition-colors ${
                                            (primaryImageOverrides[selectedVehicle.id] || selectedVehicle.image) === img
                                              ? 'bg-green-600 text-white'
                                              : 'bg-white/10 hover:bg-white/20 text-white'
                                          }`}
                                        >
                                          {(primaryImageOverrides[selectedVehicle.id] || selectedVehicle.image) === img ? 'Current Primary' : 'Set as Primary'}
                                        </button>
                                      </div>
                                      {img === selectedVehicle.image && (
                                        <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-zinc-500 rounded text-[8px] font-bold text-white uppercase">
                                          Original
                                        </div>
                                      )}
                                      {customImages.includes(img) && (
                                        <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-blue-500 rounded text-[8px] font-bold text-white uppercase">
                                          Custom
                                        </div>
                                      )}
                                    </motion.div>
                                  ))}
                                </div>
                              );
                            })()}
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
