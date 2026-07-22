import { useState, useEffect, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { models } from '../data/models';
import { useNavigate, useLocation, Link } from 'react-router-dom';

// Versión "animable" del Link de react-router, para que la tarjeta sea
// un <a> real (con href) y así el navegador permita abrir en nueva pestaña
// con click central o Ctrl/Cmd+click.
const MotionLink = motion.create(Link);

export default function Catalog() {
  const [filter, setFilter] = useState<'all' | 'base' | 'pro' | 'mini'>('all');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleHighlight = (id: string) => {
      // Clear filter to ensure the model is visible
      setFilter('all');
      
      setTimeout(() => {
        const el = document.getElementById(`model-card-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-4', 'ring-apple-blue', 'ring-offset-4', 'dark:ring-offset-black', 'scale-105', 'z-10');
          setTimeout(() => {
            el.classList.remove('ring-4', 'ring-apple-blue', 'ring-offset-4', 'dark:ring-offset-black', 'scale-105', 'z-10');
          }, 2500);
        }
      }, 300);
    };

    const onCustomHighlight = (e: any) => handleHighlight(e.detail);
    window.addEventListener('highlight-model', onCustomHighlight);
    
    const params = new URLSearchParams(location.search);
    const highlightId = params.get('highlight');
    if (highlightId) {
      setTimeout(() => handleHighlight(highlightId), 500);
    }

    return () => window.removeEventListener('highlight-model', onCustomHighlight);
  }, [location.search]);

  const filteredModels = models.filter((model) => 
    filter === 'all' ? true : model.category === filter
  );

  // Click normal (botón izquierdo, sin teclas modificadoras): navega en la misma
  // pestaña, tal como funciona hoy.
  // Click central (rueda del mouse), Ctrl/Cmd+click o Shift+click: no hacemos
  // nada y dejamos que el navegador use su comportamiento nativo de <a href>,
  // que es abrir la batería en una pestaña (o ventana) nueva.
  const handleCardClick = (e: MouseEvent, modelId: string) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    navigate(`/bateria/${modelId}`);
  };

  return (
    <section id="modelos" className="py-16 scroll-mt-20 bg-apple-gray dark:bg-black px-4 sm:px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-dark dark:text-white mb-4 transition-colors duration-300">
            Precios por modelo
          </h2>
          <p className="text-lg text-apple-text dark:text-gray-400 font-medium transition-colors duration-300">
            Compatibilidad garantizada para toda la línea iPhone.
          </p>
        </div>

        {/* Filters */}
        <div className="relative z-20 flex justify-center mb-12">
          <div className="bg-[#e3e3e8] dark:bg-[#1c1c1e] p-1 rounded-full flex overflow-x-auto no-scrollbar shadow-inner">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'pro', label: 'Pro & Pro Max' },
              { id: 'base', label: 'Base & Plus' },
              { id: 'mini', label: 'Mini' }
            ].map((option) => (
              <button 
                key={option.id}
                onClick={() => setFilter(option.id as 'all' | 'base' | 'pro' | 'mini')}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  filter === option.id 
                    ? 'text-apple-dark dark:text-white' 
                    : 'text-apple-text hover:text-apple-dark dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {filter === option.id && (
                  <motion.div 
                    layoutId="activeFilterBattery"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredModels.map((model) => (
              <MotionLink
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                key={`${filter}-${model.id}`}
                id={`model-card-${model.id}`}
                to={`/bateria/${model.id}`}
                onClick={(e) => handleCardClick(e, model.id)}
                className="group bg-white dark:bg-[#111111] rounded-[24px] p-6 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-transparent dark:border-[#222] dark:hover:border-[#444] transition-all duration-500 transform hover:-translate-y-1 relative cursor-pointer"
              >
                <div className="w-full aspect-square bg-apple-gray dark:bg-black group-hover:bg-gray-100 dark:group-hover:bg-[#1a1a1a] rounded-2xl mb-6 flex items-center justify-center p-4 transition-colors duration-500 relative">
                  {/* Internal iPhone Battery Representation */}
                  <div className="w-32 h-[208px] md:w-[112px] md:h-[182px] lg:w-24 lg:h-[156px] bg-[#1d1d1f] rounded-xl relative shadow-md group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex flex-col p-3 md:p-2.5 lg:p-2 border border-gray-800 transition-all duration-500 group-hover:scale-105">
                    {/* Flex connector cable */}
                    <div className="absolute -top-5 left-5 w-9 h-5 md:-top-4 md:left-4 md:w-8 md:h-4 lg:-top-3 lg:left-3 lg:w-6 lg:h-3 bg-[#4a4a4a] rounded-t-sm flex justify-center border-x border-t border-gray-600">
                      <div className="w-5 h-2 md:w-4 md:h-1.5 lg:w-3 lg:h-1 bg-[#d4af37] mt-1 lg:mt-0.5 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Inner battery label/lines */}
                    <div className="w-full h-full border border-gray-700/50 rounded-lg flex flex-col items-center py-4 px-2 md:py-3 md:px-1.5 lg:py-2 lg:px-1 justify-between bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] group-hover:from-[#333] group-hover:to-[#1f1f1f] transition-colors duration-500">
                      <div className="space-y-2 md:space-y-1.5 lg:space-y-1 w-full flex flex-col items-center opacity-40">
                        <div className="w-16 md:w-14 lg:w-10 h-[3px] md:h-0.5 bg-gray-400 rounded-full"></div>
                        <div className="w-20 md:w-16 lg:w-12 h-[3px] md:h-0.5 bg-gray-400 rounded-full"></div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2 md:gap-1.5 lg:gap-1 w-full">
                        <div className="flex flex-col items-center w-full px-1 mt-1">
                          <div className="text-[18px] md:text-[15px] lg:text-[13px] font-black text-white/95 leading-[1.1] mb-1 lg:mb-0.5 text-center drop-shadow-md">
                            {model.name.replace('iPhone ', '')}
                          </div>
                          <div className="text-[8px] md:text-[7px] lg:text-[5px] font-bold text-gray-500 tracking-wider uppercase text-center leading-none mt-1 lg:mt-0.5">AmpSentrix Premium</div>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-1.5 lg:space-y-1 w-full flex flex-col items-center mb-2 md:mb-1.5 lg:mb-1 opacity-40">
                        <div className="w-20 md:w-16 lg:w-12 h-[3px] md:h-0.5 bg-gray-400 rounded-full"></div>
                        <div className="w-16 md:w-14 lg:w-10 h-[3px] md:h-0.5 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-apple-dark dark:text-white mb-4 transition-colors duration-300">{model.name}</h4>
                
                <div className="w-full space-y-3 mb-6 flex-grow">
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 dark:border-gray-800 pb-2 transition-colors duration-300">
                    <span className="text-apple-text dark:text-gray-400 transition-colors duration-300">Solo repuesto</span>
                    <span className="font-semibold text-apple-dark dark:text-white transition-colors duration-300">${model.priceBatteryOnly.toLocaleString('es-CL')}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-apple-text dark:text-gray-400 transition-colors duration-300">Con instalación</span>
                    <span className="font-semibold text-apple-dark dark:text-white transition-colors duration-300">${model.priceWithInstall.toLocaleString('es-CL')}</span>
                  </div>
                </div>

                <div className="w-full mt-auto pt-2">
                  <span 
                    className="w-full bg-apple-gray dark:bg-gray-800 text-apple-dark dark:text-white group-hover:bg-apple-dark group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Ver detalles de instalación
                  </span>
                </div>
              </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
