import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { getWhatsAppLink, defaultMessage } from '../lib/whatsapp';

export default function Hero() {
  const [percent, setPercent] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();
  const offset = isMobile ? 150 : 0;
  
  // Apple-like scroll-driven animations
  const yPhone = useTransform(scrollY, [0, 600], [0, 150]);
  const scalePhone = useTransform(scrollY, [0, 600], [1, 1.35]);
  const rotateXPhone = useTransform(scrollY, [0, 600], [20, 0]);
  const opacityPhone = useTransform(scrollY, [800, 1000], [1, 0]);

  // iPhone disassembly animations
  const screenY = useTransform(scrollY, [100 + offset, 200 + offset], [0, -50]);
  const screenOpacity = useTransform(scrollY, [120 + offset, 200 + offset], [1, 0]);
  const screenScale = useTransform(scrollY, [120 + offset, 200 + offset], [1, 1.05]);

  // Old battery moves out to left
  const oldBatteryX = useTransform(scrollY, [200 + offset, 300 + offset], [0, -150]);
  const oldBatteryY = useTransform(scrollY, [200 + offset, 300 + offset], [0, -50]);
  const oldBatteryOpacity = useTransform(scrollY, [250 + offset, 300 + offset], [1, 0]);
  const oldBatteryRotate = useTransform(scrollY, [200 + offset, 300 + offset], [0, -15]);

  // New battery moves in from right
  const newBatteryX = useTransform(scrollY, [300 + offset, 400 + offset], [150, 0]);
  const newBatteryY = useTransform(scrollY, [300 + offset, 400 + offset], [-50, 0]);
  const newBatteryOpacity = useTransform(scrollY, [300 + offset, 350 + offset], [0, 1]);
  const newBatteryRotate = useTransform(scrollY, [300 + offset, 400 + offset], [15, 0]);

  useEffect(() => {
    let start: number | null = null;
    const duration = 2000;
    let animationFrameId: number;
    
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      // Easing function (easeOutQuad)
      const t = Math.min(progress / duration, 1);
      const easedProgress = t * (2 - t);
      const easedPercent = Math.min(Math.floor(easedProgress * 100), 100);
      
      setPercent(easedPercent);
      
      if (progress < duration) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setPercent(100);
      }
    };
    
    const timeout = setTimeout(() => {
      animationFrameId = window.requestAnimationFrame(step);
    }, 400);

    return () => {
      clearTimeout(timeout);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="inicio" 
      className="pt-24 pb-12 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center min-h-[90vh] transition-colors duration-300 overflow-hidden relative"
      style={{ perspective: 1200 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-6 max-w-3xl w-full z-20 relative"
      >
        <h1 className="text-6xl md:text-[84px] leading-[0.9] font-bold tracking-tight text-apple-dark dark:text-white transition-colors duration-300">
          Tu iPhone, al <span className="text-apple-blue">120%.</span>
        </h1>
        <p className="text-xl md:text-2xl text-apple-text dark:text-gray-400 font-medium mt-6 mb-8 transition-colors duration-300">
          Descubre las baterías <strong>AmpSentrix Premium</strong> de alta capacidad. Más duración que la original, instalada en minutos.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href={getWhatsAppLink(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-apple-dark dark:bg-white text-white dark:text-apple-dark px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-black dark:hover:bg-gray-200 transition-colors text-center"
          >
            Cotizar Reparación
          </a>
          <a
            href="#modelos"
            className="bg-white dark:bg-black border border-apple-border dark:border-gray-700 text-apple-dark dark:text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-apple-gray dark:hover:bg-gray-900 transition-colors text-center"
          >
            Ver Precios
          </a>
        </div>
      </motion.div>
      
      <div className="mt-16 md:mt-24 relative w-full flex justify-center z-10 h-[380px] pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ 
            y: yPhone, 
            scale: scalePhone,
            rotateX: rotateXPhone,
            opacity: opacityPhone,
            transformOrigin: 'top center'
          }}
          className="absolute top-0 flex justify-center w-full"
        >
          <div className="w-full max-w-[200px] h-[400px] bg-black rounded-[44px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.05)] border-[6px] border-[#3a3a3c] dark:border-[#2c2c2e] p-1 flex flex-col items-center relative transition-colors duration-300">
            {/* Side Buttons */}
            {/* Action Button */}
            <div className="absolute -left-[8px] top-[85px] w-[2px] h-[18px] bg-[#3a3a3c] dark:bg-[#2c2c2e] rounded-l-sm"></div>
            {/* Volume Up */}
            <div className="absolute -left-[8px] top-[120px] w-[2px] h-[30px] bg-[#3a3a3c] dark:bg-[#2c2c2e] rounded-l-sm"></div>
            {/* Volume Down */}
            <div className="absolute -left-[8px] top-[160px] w-[2px] h-[30px] bg-[#3a3a3c] dark:bg-[#2c2c2e] rounded-l-sm"></div>
            {/* Power Button */}
            <div className="absolute -right-[8px] top-[130px] w-[2px] h-[40px] bg-[#3a3a3c] dark:bg-[#2c2c2e] rounded-r-sm"></div>

            {/* Internal Chassis (Background) */}
            <div className="absolute inset-1 bg-[#111] rounded-[36px] overflow-hidden flex justify-center items-center shadow-[inset_0_0_30px_rgba(0,0,0,0.9)]">
                {/* Logic Board (Top) */}
                <div className="absolute top-[6%] right-[8%] w-[45%] h-[24%] bg-[#1a1a1a] rounded-md border border-[#333] shadow-[0_2px_4px_rgba(0,0,0,0.5)] flex flex-col justify-between p-1">
                   {/* Metal Shielding */}
                   <div className="w-full h-[40%] bg-gradient-to-br from-[#444] to-[#222] rounded-[3px] border border-[#555] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
                      <span className="text-[#888] text-[4px] font-mono tracking-widest relative z-10">A15 BIONIC</span>
                   </div>
                   {/* Small components */}
                   <div className="flex justify-between mt-1">
                      <div className="w-[30%] h-[10px] bg-[#2a2a2a] rounded-[2px] border border-[#3a3a3a]"></div>
                      <div className="w-[20%] h-[10px] bg-[#2a2a2a] rounded-[2px] border border-[#3a3a3a]"></div>
                      <div className="w-[30%] h-[10px] bg-[#2a2a2a] rounded-[2px] border border-[#3a3a3a]"></div>
                   </div>
                   <div className="flex gap-1 mt-0.5">
                      <div className="w-[4px] h-[4px] rounded-full bg-yellow-600/50"></div>
                      <div className="w-[4px] h-[4px] rounded-full bg-yellow-600/50"></div>
                      <div className="w-[4px] h-[4px] rounded-full bg-yellow-600/50"></div>
                   </div>
                </div>

                {/* Camera Module Cutout (Top Left) */}
                <div className="absolute top-[6%] left-[8%] w-[35%] h-[16%] bg-black rounded-lg border border-[#222] shadow-[inset_0_2px_10px_rgba(0,0,0,1)] flex items-center justify-center p-1">
                   <div className="w-[20px] h-[20px] rounded-full bg-[#111] border border-[#222] flex justify-center items-center">
                     <div className="w-[12px] h-[12px] rounded-full bg-black shadow-[inset_0_0_4px_rgba(255,255,255,0.1)]"></div>
                   </div>
                   <div className="w-[20px] h-[20px] rounded-full bg-[#111] border border-[#222] ml-1 flex justify-center items-center">
                     <div className="w-[12px] h-[12px] rounded-full bg-black shadow-[inset_0_0_4px_rgba(255,255,255,0.1)]"></div>
                   </div>
                </div>

                {/* Taptic Engine (Bottom) */}
                <div className="absolute bottom-[6%] left-[10%] w-[80%] h-[14%] bg-gradient-to-r from-[#222] via-[#2a2a2a] to-[#222] rounded-md border border-[#3a3a3a] shadow-md flex flex-col justify-center items-center relative overflow-hidden">
                   {/* Grooves */}
                   <div className="absolute left-1 top-1 bottom-1 w-[8px] flex flex-col justify-between">
                     {[...Array(5)].map((_, i) => <div key={i} className="w-full h-[1px] bg-[#111]"></div>)}
                   </div>
                   <div className="absolute right-1 top-1 bottom-1 w-[8px] flex flex-col justify-between">
                     {[...Array(5)].map((_, i) => <div key={i} className="w-full h-[1px] bg-[#111]"></div>)}
                   </div>
                   <div className="text-[#555] text-[5px] font-medium tracking-widest mt-1">TAPTIC ENGINE</div>
                </div>

                {/* Ribbon Cables (Flex) */}
                <div className="absolute top-[30%] right-[12%] w-[12px] h-[35px] bg-yellow-600/30 border border-yellow-600/50 rounded-sm flex flex-col justify-between p-[2px]">
                   <div className="w-full h-[2px] bg-yellow-600/50"></div>
                   <div className="w-full h-[2px] bg-yellow-600/50"></div>
                   <div className="w-full h-[2px] bg-yellow-600/50"></div>
                </div>
                <div className="absolute bottom-[22%] left-[15%] w-[30px] h-[10px] bg-yellow-600/30 border border-yellow-600/50 rounded-sm flex justify-between p-[2px]">
                   <div className="w-[2px] h-full bg-yellow-600/50"></div>
                   <div className="w-[2px] h-full bg-yellow-600/50"></div>
                </div>
                
                {/* Empty Battery Slot */}
                <div className="absolute top-[32%] w-[68%] h-[46%] left-[8%] bg-[#080808] rounded-[10px] border border-[#1a1a1a] shadow-[inset_0_5px_15px_rgba(0,0,0,1)] flex items-center justify-center">
                   {/* Pull Tabs */}
                   <div className="absolute top-0 right-[20%] w-[15px] h-[8px] bg-black border-b border-[#333] rounded-t-sm"></div>
                   <div className="absolute bottom-0 right-[20%] w-[15px] h-[8px] bg-black border-t border-[#333] rounded-b-sm"></div>
                </div>
                
                {/* Old Battery */}
                <motion.div 
                  className="absolute top-[32%] left-[8%] w-[68%] h-[46%] bg-gradient-to-br from-[#2a2a2a] to-[#222] rounded-[10px] border-[2px] border-[#333] flex flex-col justify-center items-center shadow-inner z-10"
                  style={{ x: oldBatteryX, y: oldBatteryY, opacity: oldBatteryOpacity, rotate: oldBatteryRotate }}
                >
                  <div className="w-full flex justify-center mb-1">
                     <div className="w-[20%] h-[2px] bg-[#444] rounded-full"></div>
                  </div>
                  <div className="text-[#666] text-[8px] font-bold mb-1">Li-ion</div>
                  <div className="text-[#888] text-2xl font-bold">79%</div>
                  <div className="text-[#666] text-[5px] uppercase mt-1 tracking-widest">Capacidad Máxima</div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                     <div className="w-[3px] h-[3px] rounded-full bg-[#111]"></div>
                     <div className="w-[3px] h-[3px] rounded-full bg-[#111]"></div>
                     <div className="w-[3px] h-[3px] rounded-full bg-[#111]"></div>
                  </div>
                </motion.div>

                {/* New Battery */}
                <motion.div 
                  className="absolute top-[32%] left-[8%] w-[68%] h-[46%] bg-gradient-to-br from-black to-[#111] rounded-[10px] border-[2px] border-[#34c759]/40 flex flex-col justify-center items-center shadow-[0_0_20px_rgba(52,199,89,0.15)] z-20"
                  style={{ x: newBatteryX, y: newBatteryY, opacity: newBatteryOpacity, rotate: newBatteryRotate }}
                >
                  <div className="w-full flex justify-center mb-1">
                     <div className="w-[20%] h-[2px] bg-[#444] rounded-full"></div>
                  </div>
                  <div className="text-[#888] text-[8px] font-bold mb-1">Li-ion</div>
                  <div className="text-[#34c759] text-2xl font-bold drop-shadow-[0_0_8px_rgba(52,199,89,0.5)]">100%</div>
                  <div className="text-[#888] text-[5px] uppercase mt-1 tracking-widest">Capacidad Máxima</div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                     <div className="w-[3px] h-[3px] rounded-full bg-[#222]"></div>
                     <div className="w-[3px] h-[3px] rounded-full bg-[#222]"></div>
                     <div className="w-[3px] h-[3px] rounded-full bg-[#222]"></div>
                  </div>
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#34c759] shadow-[0_0_6px_#34c759]"></div>
                </motion.div>
            </div>

            {/* Screen */}
            <motion.div 
              className="w-full h-full bg-black rounded-[36px] overflow-hidden absolute inset-[4px] flex flex-col items-center origin-bottom z-30"
              style={{ opacity: screenOpacity, scale: screenScale, y: screenY }}
            >
              {/* Wallpaper */}
              <div className="absolute inset-0 bg-[#42707b] overflow-hidden transition-colors duration-500">
                <div className="absolute -top-[50px] -left-[20px] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(249,166,27,0.95)_0%,rgba(249,166,27,0)_70%)]"></div>
                <div className="absolute top-[10%] right-[0%] w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(225,226,220,0.85)_0%,rgba(225,226,220,0)_70%)]"></div>
                <div className="absolute bottom-[0px] -left-[40px] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(195,40,29,0.95)_0%,rgba(195,40,29,0)_70%)]"></div>
                <div className="absolute -bottom-[20px] -right-[20px] w-[140px] h-[140px] bg-[radial-gradient(circle,rgba(26,74,88,0.95)_0%,rgba(26,74,88,0)_70%)]"></div>
              </div>

              {/* Dynamic Island */}
              <div className="absolute top-2 w-[70px] h-[20px] bg-black rounded-[10px] flex items-center justify-between px-2 z-20">
                <div className="w-[8px] h-[8px] rounded-full bg-[#0a0a0a] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)] relative overflow-hidden">
                   <div className="absolute top-[1px] right-[1px] w-[3px] h-[3px] rounded-full bg-blue-500/30 blur-[1px]"></div>
                </div>
                <div className="w-[4px] h-[4px] rounded-full bg-[#0a0a0a] shadow-[inset_0_0_1px_rgba(255,255,255,0.2)]"></div>
              </div>

              {/* Status Bar text */}
              <div className="absolute top-[8px] w-full px-[18px] flex justify-between items-center z-10">
                <span className="text-[8px] font-semibold text-white tracking-tighter">0:45</span>
                <div className="flex gap-[2px] items-center">
                   {/* Signal */}
                   <svg className="w-[10px] h-[8px] text-white" viewBox="0 0 16 12" fill="currentColor">
                     <path d="M2 12h2V9H2v3zm4 0h2V6H6v6zm4 0h2V3h-2v9zm4 0h2V0h-2v12z"/>
                   </svg>
                   {/* 4G */}
                   <span className="text-[6px] font-bold text-white mr-[1px]">4G</span>
                   {/* Battery (small) */}
                   <div className="w-[14px] h-[7px] border border-white/80 rounded-[2px] p-[1px] relative ml-[1px]">
                     <div className="w-[70%] h-full bg-white rounded-[1px]"></div>
                     <div className="absolute -right-[2px] top-[1.5px] w-[1px] h-[2px] bg-white/80 rounded-r-[1px]"></div>
                   </div>
                </div>
              </div>

              {/* Home Screen Content */}
              <div className="absolute top-[38px] w-full px-[12px] flex flex-col gap-y-[10px] z-10">
                {/* Widgets Row */}
                <div className="grid grid-cols-2 gap-[10px]">
                  {/* Weather Widget */}
                  <div className="aspect-square rounded-[12px] bg-gradient-to-b from-[#5c98c6] to-[#407ba6] p-[8px] flex flex-col justify-between shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[40px] h-[40px] bg-white/10 rounded-bl-full"></div>
                    <div>
                      <div className="text-white text-[7px] font-semibold tracking-tight leading-none">Copenhague</div>
                      <div className="text-white text-[24px] font-light leading-none mt-[4px]">15°</div>
                    </div>
                    <div>
                      <svg className="w-[10px] h-[10px] text-white mb-[2px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5S20 10 17.5 10c-.3-3.4-3.1-6-6.5-6-3.1 0-5.6 2.3-6.3 5.3C2 9.7 0 11.9 0 14.5 0 17.5 2.5 20 5.5 20h12z"/>
                      </svg>
                      <div className="text-white text-[6px] font-medium leading-tight">Chubascos</div>
                      <div className="text-white text-[5.5px] font-medium opacity-80 leading-none mt-[1px]">Máx. 16° Mín. 12°</div>
                    </div>
                  </div>
                  {/* Calendar Widget */}
                  <div className="aspect-square rounded-[12px] bg-white p-[8px] flex flex-col shadow-sm relative overflow-hidden transform-gpu border-[0.5px] border-black/5">
                    <div className="text-[#ff3b30] text-[6px] font-bold uppercase tracking-tight">Jueves</div>
                    <div className="text-black text-[26px] font-light leading-none tracking-tighter mt-[2px]">23</div>
                    <div className="text-gray-400 text-[7px] font-medium mt-auto leading-tight">No hay más<br/>eventos hoy</div>
                  </div>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-4 gap-x-[8px] gap-y-[12px]">
                  {/* Row 1 */}
                  {/* FaceTime */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-[#34c759] shadow-sm flex items-center justify-center">
                      <svg className="w-[20px] h-[20px] text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 10.5V7c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3.5l4 4v-11l-4 4z"/>
                      </svg>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">FaceTime</span>
                  </div>
                  {/* Calendar */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-white shadow-sm flex flex-col items-center justify-center relative overflow-hidden transform-gpu border-[0.5px] border-black/5">
                      <span className="text-[#ff3b30] text-[5px] font-bold mt-[2px] leading-none">JUE</span>
                      <span className="text-black text-[16px] font-light leading-none mt-[1px]">23</span>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Calendario</span>
                  </div>
                  {/* Photos */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-white shadow-sm flex items-center justify-center overflow-hidden relative">
                      <svg className="w-[22px] h-[22px]" viewBox="0 0 100 100">
                        <g style={{ mixBlendMode: 'multiply' }}>
                          <path d="M 50 50 C 50 15, 85 15, 85 50 C 85 85, 50 85, 50 50" fill="#F8C43F" />
                          <path d="M 50 50 C 85 50, 85 85, 50 85 C 15 85, 15 50, 50 50" fill="#F05A51" />
                          <path d="M 50 50 C 50 85, 15 85, 15 50 C 15 15, 50 15, 50 50" fill="#58A2E8" />
                          <path d="M 50 50 C 15 50, 15 15, 50 15 C 85 15, 85 50, 50 50" fill="#75C36B" />
                        </g>
                      </svg>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Fotos</span>
                  </div>
                  {/* Camera */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-gradient-to-b from-[#e5e5ea] to-[#d1d1d6] shadow-sm flex items-center justify-center">
                      <svg className="w-[18px] h-[18px] text-[#4a4a4d]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm8-3h-3.2L15 4H9L7.2 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                      </svg>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Cámara</span>
                  </div>

                  {/* Row 2 */}
                  {/* Mail */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-gradient-to-b from-[#7dbbf5] to-[#2573e8] shadow-sm flex items-center justify-center">
                       <svg className="w-[20px] h-[16px] text-white" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                       </svg>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Mail</span>
                  </div>
                  {/* Notes */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-white shadow-sm flex flex-col items-center pt-[4px] overflow-hidden">
                       <div className="w-[22px] h-[7px] bg-[#ffcc00] mb-[2px] rounded-t-[1.5px]"></div>
                       <div className="w-[22px] h-[1.5px] bg-gray-200 my-[1.5px]"></div>
                       <div className="w-[22px] h-[1.5px] bg-gray-200 my-[1.5px]"></div>
                       <div className="w-[22px] h-[1.5px] bg-gray-200 my-[1.5px]"></div>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Notas</span>
                  </div>
                  {/* Reminders */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-white shadow-sm flex flex-col justify-center items-center gap-[3.5px]">
                       <div className="flex items-center gap-[2.5px] w-[22px]">
                         <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-blue-500 bg-white"></div>
                         <div className="flex-1 h-[2px] bg-gray-200 rounded-full"></div>
                       </div>
                       <div className="flex items-center gap-[2.5px] w-[22px]">
                         <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-orange-500 bg-white"></div>
                         <div className="flex-1 h-[2px] bg-gray-200 rounded-full"></div>
                       </div>
                       <div className="flex items-center gap-[2.5px] w-[22px]">
                         <div className="w-[6px] h-[6px] rounded-full border-[1.5px] border-green-500 bg-white"></div>
                         <div className="flex-1 h-[2px] bg-gray-200 rounded-full"></div>
                       </div>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Recordatorios</span>
                  </div>
                  {/* Clock */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-black shadow-sm flex items-center justify-center p-[2px]">
                       <div className="w-full h-full bg-black rounded-full relative flex justify-center items-center border-[0.5px] border-gray-700">
                         {/* Hands */}
                         <div className="w-[1.5px] h-[8px] bg-white absolute bottom-1/2 origin-bottom rotate-45 rounded-t-sm"></div>
                         <div className="w-[1.5px] h-[6px] bg-white absolute bottom-1/2 origin-bottom -rotate-[60deg] rounded-t-sm"></div>
                         <div className="w-[1px] h-[10px] bg-[#ff9500] absolute bottom-1/2 origin-bottom rotate-180 rounded-t-sm"></div>
                         <div className="w-[3px] h-[3px] bg-black border-[1px] border-[#ff9500] rounded-full z-10"></div>
                       </div>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Reloj</span>
                  </div>

                  {/* Row 3 */}
                  {/* TV */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-black shadow-sm flex flex-col items-center justify-center">
                       <span className="text-white text-[11px] font-bold tracking-tighter">tv</span>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">TV</span>
                  </div>
                  {/* Podcasts */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-[#a844b2] shadow-sm flex items-center justify-center">
                       <svg className="w-[20px] h-[20px] text-white" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 4C7.6 4 4 7.6 4 12h2c0-3.3 2.7-6 6-6s6 2.7 6 6h2c0-4.4-3.6-8-8-8z"/>
                       </svg>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Podcasts</span>
                  </div>
                  {/* App Store */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-[#1a76f2] shadow-sm flex items-center justify-center">
                       <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l-8 16" />
                          <path d="M12 3l8 16" />
                          <path d="M6 14h12" />
                       </svg>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">App Store</span>
                  </div>
                  {/* Maps */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-[#e2e8f0] shadow-sm flex items-center justify-center overflow-hidden relative">
                       <svg viewBox="0 0 100 100" className="w-full h-full">
                         <path d="M50,0 L100,20 L100,100 L50,80 Z" fill="#bbf7d0" />
                         <path d="M0,20 L50,0 L50,80 L0,100 Z" fill="#bfdbfe" />
                         <path d="M0,50 L100,20" stroke="white" strokeWidth="6" />
                         <path d="M30,0 L70,100" stroke="#fef08a" strokeWidth="8" />
                         <path d="M20,0 L60,100" stroke="white" strokeWidth="6" />
                       </svg>
                       <div className="absolute w-[12px] h-[12px] bg-blue-500 rounded-full border-[1.5px] border-white shadow-sm flex items-center justify-center">
                         <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
                       </div>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Mapas</span>
                  </div>

                  {/* Row 4 */}
                  {/* Health */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-white shadow-sm flex items-center justify-center">
                       <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                         <path fill="url(#grad1)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                         <defs>
                           <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                             <stop offset="0%" stopColor="#ff5e5e" />
                             <stop offset="100%" stopColor="#ff2a2a" />
                           </linearGradient>
                         </defs>
                       </svg>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Salud</span>
                  </div>
                  {/* Wallet */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-black shadow-sm flex flex-col justify-center items-center gap-[1px]">
                       <div className="w-[22px] h-[4px] bg-[#34c759] rounded-[2px] opacity-90 -translate-y-[1px]"></div>
                       <div className="w-[24px] h-[14px] bg-white rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
                         <div className="w-full h-[3px] bg-[#ff9500]"></div>
                         <div className="w-full h-[3px] bg-[#ff3b30]"></div>
                         <div className="w-full h-[3px] bg-[#007aff]"></div>
                       </div>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Cartera</span>
                  </div>
                  {/* Settings */}
                  <div className="flex flex-col items-center gap-[3px]">
                    <div className="w-[30px] h-[30px] rounded-[7px] bg-[#8e8e93] shadow-sm flex items-center justify-center">
                       <svg className="w-[22px] h-[22px] text-[#2c2c2e]" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22l-1.92 3.32c-.12.21-.07.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                         <circle cx="12" cy="12" r="2.5" fill="#8e8e93" />
                       </svg>
                    </div>
                    <span className="text-white text-[5.5px] font-medium tracking-tight">Ajustes</span>
                  </div>
                </div>

                {/* Page Indicator */}
                <div className="flex justify-center gap-[5px] mt-[2px]">
                  <div className="w-[4px] h-[4px] rounded-full bg-white"></div>
                  <div className="w-[4px] h-[4px] rounded-full bg-white/40"></div>
                </div>
              </div>

              {/* Dock */}
              <div className="absolute bottom-[10px] w-[172px] h-[46px] bg-white/30 backdrop-blur-xl rounded-[16px] z-10 flex justify-between items-center px-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                 {/* Phone */}
                 <div className="w-[32px] h-[32px] bg-[#34c759] rounded-[7px] shadow-sm flex items-center justify-center">
                   <svg className="w-[20px] h-[20px] text-white" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4.4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.1c0-.6-.4-1-1-1z"/>
                   </svg>
                 </div>
                 {/* Safari */}
                 <div className="w-[32px] h-[32px] bg-white rounded-[7px] shadow-sm flex items-center justify-center relative overflow-hidden p-[2px]">
                   <div className="w-full h-full bg-[#0a84ff] rounded-full relative flex items-center justify-center overflow-hidden">
                     <svg className="w-full h-full absolute" viewBox="0 0 100 100">
                       <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                     </svg>
                     <div className="w-[20px] h-[20px] rotate-45 relative flex items-center justify-center drop-shadow-md">
                       <div className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[10px] border-b-[#ff3b30] absolute top-[0px]"></div>
                       <div className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-t-[10px] border-t-white absolute bottom-[0px]"></div>
                     </div>
                   </div>
                 </div>
                 {/* Messages */}
                 <div className="w-[32px] h-[32px] bg-[#34c759] rounded-[7px] shadow-sm flex items-center justify-center">
                   <svg className="w-[22px] h-[22px] text-white" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 3c-4.97 0-9 3.58-9 8 0 2.44 1.25 4.63 3.19 6.06L5 21l3.58-2.15c1.07.36 2.22.56 3.42.56 4.97 0 9-3.58 9-8s-4.03-8-9-8z"/>
                   </svg>
                 </div>
                 {/* Music */}
                 <div className="w-[32px] h-[32px] bg-[#fa243c] rounded-[7px] shadow-sm flex items-center justify-center">
                   <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M21 3v12.5a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.6v9.9a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V3h14z"/>
                   </svg>
                 </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
