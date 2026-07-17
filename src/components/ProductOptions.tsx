import { motion } from 'motion/react';
import { BatteryCharging, ShieldCheck, Zap, Clock, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';

export default function ProductOptions() {
  const whatsappMessage = "Hola! Me interesa cotizar una batería AmpSentrix original de alta capacidad para mi iPhone.";

  return (
    <section className="w-full bg-black py-12 px-4 md:px-8 border-t border-[#333]">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Featured: AmpSentrix Battery */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-[32px] overflow-hidden border border-[#222] flex flex-col md:flex-row relative group w-full"
        >
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333] w-max mb-4">
              <span className="text-xs font-medium text-[#ccc]">Baterías Premium</span>
            </div>
            
            <h2 className="text-white text-3xl font-bold mb-3 tracking-tight">AmpSentrix<br/><span className="text-[#34c759]">Alta Capacidad</span></h2>
            <p className="text-[#888] text-sm md:text-base mb-6 leading-relaxed max-w-md">
              Desbloquea hasta un 20% más de autonomía que la batería original. Diseñadas con celdas de alta densidad para que tu iPhone dure todo el día y más.
            </p>

            <ul className="grid grid-cols-2 gap-4 text-[#888] text-sm mb-8 font-mono">
              <li className="flex flex-col">
                <span className="text-white font-bold mb-0.5 text-sm flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#34c759]"/> +20%</span> 
                <span className="text-[10px] md:text-xs">Mayor Capacidad</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-bold mb-0.5 text-sm flex items-center gap-1.5"><BatteryCharging className="w-4 h-4 text-[#34c759]"/> 0 Ciclos</span> 
                <span className="text-[10px] md:text-xs">Totalmente Nueva</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-bold mb-0.5 text-sm flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#34c759]"/> Segura</span> 
                <span className="text-[10px] md:text-xs">Chip de Protección</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-bold mb-0.5 text-sm flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#34c759]"/> 6 Meses</span> 
                <span className="text-[10px] md:text-xs">Garantía Escrita</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href={getWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm py-3 px-6 rounded-full transition-colors shadow-lg w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar Batería AmpSentrix
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 min-h-[250px] md:min-h-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center p-6">
             <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none"></div>
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             
             {/* Modeled Battery */}
             <div className="relative z-0 transition-transform duration-700 hover:scale-105 w-full max-w-[320px] drop-shadow-2xl">
               <svg viewBox="0 0 400 500" className="w-full mx-auto h-auto drop-shadow-2xl">
                 <defs>
                   <linearGradient id="batOuter" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="#2a2a2c"/>
                     <stop offset="100%" stopColor="#111111"/>
                   </linearGradient>
                   <linearGradient id="batInner" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="#1e1e1e"/>
                     <stop offset="100%" stopColor="#0a0a0a"/>
                   </linearGradient>
                   <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                     <stop offset="0%" stopColor="#d4af37"/>
                     <stop offset="50%" stopColor="#fff8b0"/>
                     <stop offset="100%" stopColor="#d4af37"/>
                   </linearGradient>
                   <filter id="glow">
                     <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                     <feMerge>
                       <feMergeNode in="coloredBlur"/>
                       <feMergeNode in="SourceGraphic"/>
                     </feMerge>
                   </filter>
                   <filter id="dropShadowBat" x="-20%" y="-20%" width="140%" height="140%">
                     <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.8"/>
                   </filter>
                 </defs>

                 {/* Flex Cable */}
                 <path d="M 230 70 L 230 40 Q 230 20 250 20 L 270 20 Q 280 20 280 30 L 280 40" fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
                 {/* Connector */}
                 <rect x="245" y="15" width="30" height="10" rx="2" fill="#222" stroke="#444" strokeWidth="1"/>
                 <rect x="250" y="17" width="20" height="6" rx="1" fill="url(#gold)"/>

                 {/* Main Battery Body */}
                 <rect x="60" y="70" width="280" height="400" rx="16" fill="url(#batOuter)" stroke="#333" strokeWidth="1.5" filter="url(#dropShadowBat)"/>
                 <rect x="70" y="80" width="260" height="380" rx="10" fill="url(#batInner)"/>
                 
                 {/* Ampsentrix Label Area */}
                 <rect x="80" y="90" width="240" height="360" rx="6" fill="#111" stroke="#222" strokeWidth="1"/>
                 
                 <g transform="translate(200, 160)">
                   {/* Logo / Bolt */}
                   <path d="M 0 -35 L 25 10 L 5 10 L 10 35 L -20 -5 L 0 -5 Z" fill="#34c759" filter="url(#glow)"/>
                 </g>

                 <g transform="translate(200, 240)">
                   <text x="0" y="0" fill="#fff" fontSize="26" fontWeight="800" textAnchor="middle" letterSpacing="3">AMPSENTRIX</text>
                   <text x="0" y="25" fill="#888" fontSize="12" fontWeight="500" textAnchor="middle" letterSpacing="1">PREMIUM HIGH CAPACITY</text>
                   <text x="0" y="45" fill="#666" fontSize="10" textAnchor="middle">LI-ION POLYMER BATTERY</text>
                 </g>

                 <g transform="translate(200, 350)">
                   <rect x="-60" y="-20" width="120" height="40" rx="20" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
                   <text x="0" y="4" fill="#34c759" fontSize="14" fontWeight="bold" textAnchor="middle">+20% CAPACITY</text>
                 </g>
                 
                 <g transform="translate(200, 410)">
                   <text x="-80" y="0" fill="#555" fontSize="10" textAnchor="start">0 CYCLES</text>
                   <text x="80" y="0" fill="#555" fontSize="10" textAnchor="end">100% HEALTH</text>
                 </g>
               </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

