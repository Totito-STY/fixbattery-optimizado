import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BatteryCharging, Menu, X, MessageCircle, Moon, Sun, Home, Battery, Smartphone, Wrench, MapPin, Activity, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWhatsAppLink, getContextualMessage } from '../lib/whatsapp';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const whatsappMessage = getContextualMessage(location.pathname);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  const getThemeIcon = (className: string) => {
    if (theme === 'light') return <Sun className={className} />;
    return <Moon className={className} />;
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-[64px] border-b border-white/20 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl z-50 px-4 sm:px-6 lg:px-12 flex items-center justify-between transition-colors duration-300">
        <Link 
          to="/" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        >
        <div className="w-8 h-8 bg-apple-dark dark:bg-white rounded-lg flex items-center justify-center">
          <BatteryCharging className="w-5 h-5 text-[#00ff00]" strokeWidth={2} />
        </div>
        <span className="font-semibold text-xl tracking-tight text-apple-dark dark:text-white transition-colors duration-300">FixBattery</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8">
        <Link to="/#inicio" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Inicio</Link>
        <Link to="/#modelos" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Baterías</Link>
        <Link to="/pantallas" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Pantallas</Link>
        <Link to="/#servicios" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Servicios</Link>
        <Link to="/#ubicacion" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Ubicación</Link>
        <Link to="/proceso" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Proceso</Link>
        <Link to="/consejos" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Consejos</Link>
        <button 
          onClick={cycleTheme} 
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-apple-dark dark:text-white"
          aria-label="Toggle dark mode"
        >
          {getThemeIcon("w-5 h-5")}
        </button>
        <a 
          href={getWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-wa-green text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp Directo
        </a>
      </div>

      <div className="md:hidden flex items-center gap-4">
        <button 
          onClick={cycleTheme} 
          className="text-apple-dark dark:text-white"
          aria-label="Toggle dark mode"
        >
          {getThemeIcon("w-6 h-6")}
        </button>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-apple-dark dark:text-white">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] inset-x-0 bottom-0 md:hidden bg-white/98 dark:bg-black/98 backdrop-blur-3xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col min-h-full p-6">
              <div className="flex-grow space-y-1">
                <Link to="/#inicio" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-apple-gray dark:bg-white/10 flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Inicio</span>
                </Link>
                <Link to="/#modelos" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-apple-gray dark:bg-white/10 flex items-center justify-center shrink-0">
                    <Battery className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Baterías</span>
                </Link>
                <Link to="/pantallas" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-apple-gray dark:bg-white/10 flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Pantallas</span>
                </Link>
                <Link to="/#servicios" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-apple-gray dark:bg-white/10 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Servicios</span>
                </Link>
                <Link to="/#ubicacion" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-apple-gray dark:bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Ubicación</span>
                </Link>
                <Link to="/proceso" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-apple-gray dark:bg-white/10 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Proceso</span>
                </Link>
                <Link to="/consejos" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 active:bg-gray-200 dark:active:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-apple-gray dark:bg-white/10 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Consejos</span>
                </Link>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-white/5 flex flex-col gap-4">
                <a 
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-wa-green hover:bg-wa-green-hover text-white px-5 py-4 rounded-2xl text-[17px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-wa-green/20 transition-transform active:scale-[0.98]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-6 h-6" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
