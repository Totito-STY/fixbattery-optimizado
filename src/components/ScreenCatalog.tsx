import { useState, useEffect, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { screenModels } from '../data/screenModels';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { MonitorSmartphone, PenTool, Sparkles, ChevronRight } from 'lucide-react';

const MotionLink = motion.create(Link);

export default function ScreenCatalog() {
  const [filter, setFilter] = useState<'all' | 'base' | 'pro' | 'mini'>('all');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleHighlight = (id: string) => {
      setFilter('all');
      setTimeout(() => {
        const el = document.getElementById(`screen-card-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-2', 'ring-[#0071e3]', 'ring-offset-4', 'dark:ring-offset-black', 'scale-105', 'z-10');
          setTimeout(() => {
            el.classList.remove('ring-2', 'ring-[#0071e3]', 'ring-offset-4', 'dark:ring-offset-black', 'scale-105', 'z-10');
          }, 2500);
        }
      }, 300);
    };

    const onCustomHighlight = (e: any) => handleHighlight(e.detail);
    window.addEventListener('highlight-screen', onCustomHighlight);
    
    const params = new URLSearchParams(location.search);
    const highlightId = params.get('highlight');
    if (highlightId) {
      setTimeout(() => handleHighlight(highlightId), 500);
    }

    return () => window.removeEventListener('highlight-screen', onCustomHighlight);
  }, [location.search]);

  const filteredModels = screenModels.filter((model) => 
    filter === 'all' ? true : model.category === filter
  );

  const handleCardClick = (e: MouseEvent, modelId: string) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    navigate(`/pantalla/${modelId}`);
  };

  const filterOptions = [
    { id: 'all', label: 'Todos' },
    { id: 'pro', label: 'Pro & Pro Max' },
    { id: 'base', label: 'Base & Plus' },
    { id: 'mini', label: 'Mini' }
  ] as const;

  return (
    <section id="pantallas" className="pt-4 pb-24 sm:py-24 scroll-mt-16 bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-300 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] md:text-[4rem] font-semibold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
            Pantallas. <span className="text-gray-500 dark:text-gray-400">Brillo original.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto">
            Colores vibrantes, respuesta táctil perfecta y compatibilidad True Tone.
          </p>
        </div>

        {/* Apple-style Segmented Control */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#e3e3e8] dark:bg-[#1c1c1e] p-1 rounded-full flex overflow-x-auto no-scrollbar shadow-inner">
            {filterOptions.map((option) => (
              <button 
                key={option.id}
                onClick={() => setFilter(option.id)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  filter === option.id 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {filter === option.id && (
                  <motion.div 
                    layoutId="activeFilterScreen"
                    className="absolute inset-0 bg-white dark:bg-[#2c2c2e] rounded-full shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredModels.map((model) => (
              <MotionLink
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
                key={`${filter}-${model.id}`}
                id={`screen-card-${model.id}`}
                to={`/pantalla/${model.id}`}
                onClick={(e) => handleCardClick(e, model.id)}
                className="group bg-white dark:bg-[#111111] rounded-[24px] overflow-hidden flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none border border-transparent dark:border-[#222] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:border-gray-600 relative cursor-pointer"
              >
                
                {/* Premium Phone Presentation - Exploded View by Default */}
                <div className="w-full bg-[#fafafa] dark:bg-[#0a0a0a] pt-24 pb-16 flex flex-col items-center justify-center transition-colors duration-300 relative" style={{ perspective: '1200px' }}>
                  
                  {/* Floating Repair Tool (Screwdriver) - subtle hint */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-700 delay-200">
                    <PenTool className="w-8 h-8 text-gray-500 transform rotate-45 drop-shadow-md" strokeWidth={1} />
                  </div>

                  <div className="relative w-[110px] h-[220px] transition-transform duration-700 ease-out rotate-[-4deg] group-hover:rotate-[-8deg] group-hover:scale-105">
                    
                    {/* Phone Chassis (Bottom) */}
                    <div className="absolute inset-0 border-[3px] border-[#d2d2d7] dark:border-[#2c2c2e] rounded-[2.2rem] bg-[#e5e5ea] dark:bg-[#1c1c1e] shadow-sm flex flex-col items-center justify-center overflow-hidden transition-all duration-700 translate-x-3 translate-y-3 group-hover:translate-x-6 group-hover:translate-y-6 shadow-[5px_5px_20px_rgba(0,0,0,0.08)] dark:shadow-[5px_5px_20px_rgba(0,0,0,0.3)] group-hover:shadow-xl z-0">
                      
                      {/* MagSafe Ring Abstract */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45px] h-[45px] border-[2px] border-[#c7c7cc] dark:border-[#38383a] rounded-full opacity-60"></div>
                      <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-[2px] h-[15px] bg-[#c7c7cc] dark:bg-[#38383a] opacity-60"></div>
                      
                      {/* Internal details placeholder */}
                      <div className="w-[88%] h-[92%] border border-[#c7c7cc] dark:border-[#38383a] rounded-[1.6rem] opacity-90 flex flex-col p-1.5 gap-1.5 bg-[#f2f2f7] dark:bg-[#151515] relative z-10">
                         
                         {/* Top Section: Cameras & Logic Board Top */}
                         <div className="flex gap-1 h-[20%] w-full">
                           {/* Camera Module */}
                           <div className="w-[45%] h-full bg-black/15 dark:bg-white/10 rounded-lg flex flex-wrap p-1 gap-1 relative border border-black/5 dark:border-white/5">
                              <div className="w-3.5 h-3.5 rounded-full bg-black/20 dark:bg-black/50 border border-white/10"></div>
                              <div className="w-3.5 h-3.5 rounded-full bg-black/20 dark:bg-black/50 border border-white/10 absolute bottom-1 right-1"></div>
                              <div className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-black/50 border border-white/10 absolute bottom-1 left-1"></div>
                           </div>
                           {/* Logic Board Shielding (Top) */}
                           <div className="flex-1 h-full bg-[#e0e0e0] dark:bg-[#2a2a2c] rounded-md border border-black/10 dark:border-white/10 relative overflow-hidden flex flex-col p-1 gap-0.5">
                             <div className="w-full h-1/3 bg-black/5 dark:bg-white/5 rounded-sm"></div>
                             <div className="w-2/3 h-1/4 bg-black/5 dark:bg-white/5 rounded-sm"></div>
                             {/* Connector socket for display flex */}
                             <div className="absolute bottom-1 right-1 w-5 h-2 bg-[#111] border border-gray-600 rounded-[1px] flex justify-center items-center">
                               <div className="w-[80%] h-[20%] bg-amber-600 rounded-full"></div>
                             </div>
                           </div>
                         </div>

                         {/* Middle Section: Battery & Logic Board Bottom */}
                         <div className="flex gap-1.5 h-[60%] w-full">
                           {/* Battery */}
                           <div className="w-[55%] h-full bg-black/80 dark:bg-[#111] rounded-[4px] flex items-center justify-center relative overflow-hidden border border-black/20 dark:border-white/10 shadow-inner">
                              <div className="absolute inset-x-2 top-2 bottom-2 border border-white/10 rounded-sm"></div>
                              <span className="text-[7px] font-bold text-gray-400 tracking-widest rotate-[-90deg]">Li-ion</span>
                           </div>
                           
                           {/* Logic Board (Side) */}
                           <div className="flex-1 h-full bg-[#d5d5d8] dark:bg-[#242426] rounded-md border border-black/10 dark:border-white/10 flex flex-col p-1 gap-1 relative overflow-hidden">
                              <div className="w-full h-4 bg-black/10 dark:bg-black/30 rounded-sm"></div>
                              <div className="w-full h-8 bg-[#c0c0c0] dark:bg-[#2e2e30] rounded-sm border border-black/5 dark:border-white/5"></div>
                              <div className="w-3/4 h-3 bg-black/10 dark:bg-black/30 rounded-sm"></div>
                              {/* Processor / A-series chip */}
                              <div className="w-full h-8 mt-auto bg-[#1a1a1c] border border-gray-600 rounded-sm flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                                <span className="text-[5px] text-gray-400 font-bold">A16</span>
                              </div>
                           </div>
                         </div>

                         {/* Bottom Section: Taptic Engine & Speaker */}
                         <div className="flex gap-1 flex-1 w-full">
                            <div className="w-[45%] h-full bg-[#2a2a2c] rounded-[3px] border border-white/10 flex items-center justify-center relative">
                               <span className="text-[4px] text-gray-400 tracking-wider">TAPTIC</span>
                            </div>
                            <div className="flex-1 h-full bg-black/20 dark:bg-white/10 rounded-[3px] flex flex-col justify-evenly px-1">
                               <div className="w-full h-[1px] bg-black/30 dark:bg-white/20"></div>
                               <div className="w-full h-[1px] bg-black/30 dark:bg-white/20"></div>
                               <div className="w-full h-[1px] bg-black/30 dark:bg-white/20"></div>
                            </div>
                         </div>
                      </div>
                    </div>

                    {/* Single thin flex cable attached to the side of the screen */}
                    <div className="absolute top-[35%] left-[-20px] opacity-90 group-hover:opacity-100 transition-all duration-700 z-10 transform -translate-y-5 -translate-x-4 group-hover:-translate-y-10 group-hover:-translate-x-8 ease-out flex items-center">
                       {/* Connector on the base side */}
                       <div className="w-[6px] h-[20px] bg-[#111] border border-white/20 rounded-[2px] flex justify-center items-center z-10 relative shadow-sm">
                         <div className="w-[2px] h-[60%] bg-amber-400/60"></div>
                       </div>
                       {/* The Ribbon Cable */}
                       <div className="w-[16px] h-[14px] bg-gradient-to-r from-[#8b5a2b] via-[#cd7f32] to-[#8b5a2b] shadow-[0_2px_5px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-700 flex flex-col justify-evenly py-[1px] -ml-[1px]">
                          <div className="w-full h-[0.5px] bg-black/40"></div>
                          <div className="w-full h-[0.5px] bg-black/40"></div>
                          <div className="w-full h-[0.5px] bg-black/40"></div>
                          <div className="w-full h-[0.5px] bg-black/40"></div>
                       </div>
                    </div>

                    {/* New Screen Panel (Top) */}
                    <div className="absolute inset-0 border-[2px] border-[#050505] rounded-[2.2rem] bg-black shadow-[10px_10px_30px_rgba(0,0,0,0.25)] dark:shadow-[10px_10px_30px_rgba(0,0,0,0.5)] transform -translate-y-5 -translate-x-4 group-hover:-translate-y-10 group-hover:-translate-x-8 transition-all duration-700 ease-out z-20 flex flex-col items-center justify-center overflow-hidden group-hover:shadow-[25px_25px_50px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[25px_25px_50px_rgba(0,0,0,0.7)]">
                      
                      {/* Screen Edge Bezel */}
                      <div className="absolute inset-1 border-[2.5px] border-[#151515] rounded-[2rem] pointer-events-none z-40"></div>
                      
                      {/* Notch / Defined Dynamic Island */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[34%] h-[10px] bg-black rounded-full z-40 border border-white/[0.08] shadow-[0_0_8px_rgba(0,0,0,0.9)] flex items-center justify-between px-1.5 overflow-hidden">
                         {/* Face ID Sensors abstract */}
                         <div className="w-1.5 h-1.5 bg-[#0a0a0a] rounded-full flex items-center justify-center"><div className="w-[1.5px] h-[1.5px] bg-indigo-500/50 rounded-full"></div></div>
                         {/* Camera lens reflection */}
                         <div className="w-2 h-2 bg-[#05050a] rounded-full border border-white/[0.12] flex items-center justify-center"><div className="w-[2px] h-[2px] bg-blue-400/70 rounded-full shadow-[0_0_2px_rgba(96,165,250,0.8)]"></div></div>
                      </div>
                      
                      {/* Realistic OLED Display Glow & Dark Blue Profile */}
                      <div className="absolute inset-0 bg-[#050914] group-hover:bg-[#071126] transition-colors duration-700 z-10">
                        {/* Crisp Pixels texture */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDBoNHY0SDB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] mix-blend-screen opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                        
                        {/* Radial glowing core */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-indigo-900/10 to-transparent opacity-90 group-hover:from-blue-400/30 group-hover:via-indigo-800/20 group-hover:opacity-100 transition-all duration-700"></div>
                      </div>
                      
                      {/* Subtle Glass Reflections */}
                      <div className="absolute inset-0 pointer-events-none z-30">
                        {/* Diagonal slash reflection */}
                        <div className="absolute -inset-[150%] bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-80 transition-all duration-1000 transform translate-x-[35%] group-hover:translate-x-[-15%] rotate-[38deg]"></div>
                        {/* Edge highlight left */}
                        <div className="absolute left-[1px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-60"></div>
                        {/* Edge highlight top */}
                        <div className="absolute top-[1px] left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"></div>
                      </div>
                      
                      {/* Central Content */}
                      <div className="relative z-20 flex flex-col items-center mt-3 group-hover:-translate-y-1 transition-transform duration-700">
                        <svg className="w-10 h-10 text-white mb-2 fill-current opacity-95 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                        </svg>
                        <span className="text-[12px] font-sans font-medium tracking-tight text-white text-center px-2 opacity-95 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">
                          {model.name.replace('iPhone ', '')}
                        </span>
                      </div>

                      {/* Navigation Button on the right edge */}
                      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-white/60 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0 translate-x-2 border border-white/40">
                         <ChevronRight className="w-3 h-3 text-gray-800" strokeWidth={2.5} />
                      </div>
                    </div>

                  </div>
                </div>
                
                <div className="p-8 w-full flex flex-col items-center bg-white dark:bg-[#111111] transition-colors duration-300 flex-grow">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{model.name}</h4>
                  
                  <div className="w-full space-y-4 mb-8 flex-grow">
                    <div className="flex flex-col items-center justify-center text-sm">
                      <span className="text-gray-500 dark:text-gray-400 mb-1">Repuesto</span>
                      <span className="text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">${model.priceScreenOnly.toLocaleString('es-CL')}</span>
                    </div>
                    
                    <div className="w-full h-px bg-gray-200 dark:bg-[#222]"></div>
                    
                    <div className="flex flex-col items-center justify-center text-sm">
                      <span className="text-gray-500 dark:text-gray-400 mb-1">Instalado</span>
                      <span className="text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">${model.priceWithInstall.toLocaleString('es-CL')}</span>
                    </div>
                  </div>

                  <div className="w-full mt-auto">
                    <span className="inline-block bg-[#0071e3] hover:bg-[#0077ED] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300">
                      Comprar
                    </span>
                  </div>
                </div>
              </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
