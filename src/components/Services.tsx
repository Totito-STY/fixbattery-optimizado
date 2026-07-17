import { motion } from 'motion/react';
import { PenTool, ShoppingBag } from 'lucide-react';

export default function Services() {
  const scrollToModels = () => {
    document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-16 bg-white dark:bg-black px-4 sm:px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        
        {/* Card 1: Con instalación incluida */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-[#f0fdf4] dark:bg-[#0c1f11] border border-[#dcfce7] dark:border-[#1a3822] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start justify-between cursor-pointer transition-transform hover:scale-[1.01]"
          onClick={scrollToModels}
        >
          <div className="flex-1 z-10 w-full mb-8 sm:mb-0 text-center sm:text-left">
            <div className="w-14 h-14 bg-[#34c759] rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto sm:mx-0">
              <PenTool className="text-white w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="font-bold text-2xl md:text-3xl mb-3 text-gray-900 dark:text-white leading-tight">
              Con instalación incluida
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-[220px] font-medium leading-relaxed mx-auto sm:mx-0">
              Nosotros instalamos la batería por ti.
            </p>
            <button className="bg-[#34c759] hover:bg-[#2eb350] text-white px-6 py-2.5 rounded-full font-semibold transition-colors">
              Ver modelos
            </button>
          </div>
          
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end relative z-0 mt-4 sm:mt-0">
             {/* iPhone with green battery illustration */}
             <div className="w-[140px] h-[280px] bg-[#1a1a1a] rounded-[36px] border-[6px] border-[#2a2a2a] relative shadow-2xl flex items-center justify-center -mb-24 sm:-my-6 ring-1 ring-black/50">
                <div className="absolute top-0 w-16 h-5 bg-[#2a2a2a] rounded-b-2xl"></div>
                {/* Big green battery icon */}
                <div className="w-16 h-24 border-[3px] border-[#333] rounded-xl p-1 relative flex items-center justify-center bg-[#111]">
                  <div className="w-full h-full bg-[#34c759] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2.05v8h6l-10 12v-8H3l10-12z"/></svg>
                  </div>
                  <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-5 h-[3px] bg-[#333] rounded-t-sm"></div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* Card 2: Sin instalación */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl bg-[#f0f6ff] dark:bg-[#0c1524] border border-[#e0f2fe] dark:border-[#162740] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start justify-between cursor-pointer transition-transform hover:scale-[1.01]"
          onClick={scrollToModels}
        >
          <div className="flex-1 z-10 w-full mb-8 sm:mb-0 text-center sm:text-left">
            <div className="w-14 h-14 bg-[#0071e3] rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto sm:mx-0">
              <ShoppingBag className="text-white w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="font-bold text-2xl md:text-3xl mb-3 text-gray-900 dark:text-white leading-tight">
              Sin instalación
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-[220px] font-medium leading-relaxed mx-auto sm:mx-0">
              Compra solo la batería e instálala tú.
            </p>
            <button className="bg-[#0071e3] hover:bg-[#005bb5] text-white px-6 py-2.5 rounded-full font-semibold transition-colors">
              Ver modelos
            </button>
          </div>
          
          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end relative z-0 mt-4 sm:mt-0">
            {/* Battery illustration */}
            <div className="w-[130px] h-[270px] bg-[#222] rounded-lg border border-[#333] shadow-2xl relative -mb-24 sm:-my-4 flex flex-col items-center py-8 px-4">
              {/* AmpSentrix styled label */}
              <div className="text-[14px] font-black text-white tracking-widest leading-none drop-shadow-md mb-2 mt-4 text-center">Batería de<br/>Alta Capacidad</div>
              <div className="text-[8px] font-bold text-gray-400 tracking-wider uppercase text-center leading-none mb-6">AmpSentrix Premium</div>
              
              <div className="w-full flex flex-col items-center opacity-40">
                <div className="w-16 h-[1.5px] bg-gray-400 mb-2"></div>
                <div className="w-12 h-[1.5px] bg-gray-400 mb-4"></div>
                
                <div className="w-20 h-[1.5px] bg-gray-400 mb-2"></div>
                <div className="w-16 h-[1.5px] bg-gray-400 mb-2"></div>
                <div className="w-14 h-[1.5px] bg-gray-400 mb-6"></div>
                
                {/* some circular symbols */}
                <div className="flex gap-2.5 mb-5">
                  <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                    <div className="text-[5px] font-bold">CE</div>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center">
                    <div className="w-2 h-2 border border-gray-400 rounded-sm"></div>
                  </div>
                </div>

                <div className="text-[6px] text-gray-400 font-mono tracking-widest mb-1.5 text-center leading-tight">Li-ion</div>
                <div className="w-10 h-[1.5px] bg-gray-400 mb-1"></div>
              </div>

              {/* Flex cable sticking out right side */}
              <div className="absolute right-[-24px] top-[40%] flex items-center">
                 {/* Ribbon */}
                 <div className="w-6 h-4 bg-[#1a1a1a] border-y border-gray-700 shadow-sm relative">
                    {/* Connector */}
                    <div className="absolute -right-[6px] -top-1 w-1.5 h-6 bg-[#1a1a1a] border border-gray-600 rounded-sm shadow-md flex justify-center py-1">
                      <div className="w-0.5 h-full bg-[#d4af37] opacity-80 rounded-[1px]"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
