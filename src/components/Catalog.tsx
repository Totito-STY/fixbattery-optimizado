import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { models } from '../data/models';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';

export default function Catalog() {
  const [filter, setFilter] = useState<'all' | 'base' | 'pro' | 'mini'>('all');

  const filteredModels = models.filter((model) => 
    filter === 'all' ? true : model.category === filter
  );

  return (
    <section id="modelos" className="py-16 bg-apple-gray dark:bg-black px-4 sm:px-6 lg:px-12 transition-colors duration-300">
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
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${filter === 'all' ? 'bg-apple-dark dark:bg-white text-white dark:text-apple-dark shadow-md' : 'bg-white dark:bg-gray-900 border border-apple-border dark:border-gray-800 text-apple-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setFilter('pro')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${filter === 'pro' ? 'bg-apple-dark dark:bg-white text-white dark:text-apple-dark shadow-md' : 'bg-white dark:bg-gray-900 border border-apple-border dark:border-gray-800 text-apple-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
          >
            Pro & Pro Max
          </button>
          <button 
            onClick={() => setFilter('base')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${filter === 'base' ? 'bg-apple-dark dark:bg-white text-white dark:text-apple-dark shadow-md' : 'bg-white dark:bg-gray-900 border border-apple-border dark:border-gray-800 text-apple-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
          >
            Base & Plus
          </button>
          <button 
            onClick={() => setFilter('mini')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${filter === 'mini' ? 'bg-apple-dark dark:bg-white text-white dark:text-apple-dark shadow-md' : 'bg-white dark:bg-gray-900 border border-apple-border dark:border-gray-800 text-apple-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
          >
            Mini
          </button>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredModels.map((model) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={model.id}
                className="group bg-white dark:bg-[#111111] rounded-[24px] p-6 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-transparent dark:border-[#222] dark:hover:border-[#444] transition-all duration-500 transform hover:-translate-y-1 relative"
              >
                <div className="w-full aspect-square bg-apple-gray dark:bg-black group-hover:bg-gray-100 dark:group-hover:bg-[#1a1a1a] rounded-2xl mb-6 flex items-center justify-center p-4 transition-colors duration-500 relative">
                  {/* Internal iPhone Battery Representation */}
                  <div className="w-24 h-[156px] bg-[#1d1d1f] rounded-xl relative shadow-md group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] flex flex-col p-2.5 border border-gray-800 transition-all duration-500 group-hover:scale-105">
                    {/* Flex connector cable */}
                    <div className="absolute -top-4 left-4 w-7 h-4 bg-[#4a4a4a] rounded-t-sm flex justify-center border-x border-t border-gray-600">
                      <div className="w-4 h-1.5 bg-[#d4af37] mt-1 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    {/* Inner battery label/lines */}
                    <div className="w-full h-full border border-gray-700/50 rounded-lg flex flex-col items-center py-3 px-1.5 justify-between bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] group-hover:from-[#333] group-hover:to-[#1f1f1f] transition-colors duration-500">
                      <div className="space-y-1.5 w-full flex flex-col items-center opacity-40">
                        <div className="w-12 h-0.5 bg-gray-400 rounded-full"></div>
                        <div className="w-16 h-0.5 bg-gray-400 rounded-full"></div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1.5 w-full">
                        {/* Ampsentrix stylized bolt/text */}
                        <div className="flex flex-col items-center w-full px-1 mt-1">
                          <div className="text-[14px] font-black text-white/95 leading-[1.1] mb-1 text-center drop-shadow-md">
                            {model.name.replace('iPhone ', '')}
                          </div>
                          <div className="text-[6px] font-bold text-gray-500 tracking-wider uppercase text-center leading-none mt-1">AmpSentrix Premium</div>
                        </div>
                      </div>

                      <div className="space-y-1.5 w-full flex flex-col items-center mb-1.5 opacity-40">
                        <div className="w-16 h-0.5 bg-gray-400 rounded-full"></div>
                        <div className="w-12 h-0.5 bg-gray-400 rounded-full"></div>
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
                  <a 
                    href={getWhatsAppLink(`Hola! Me interesa cotizar la batería AmpSentrix original para mi ${model.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20b858] text-white py-3 rounded-2xl text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Cotizar Batería AmpSentrix
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
