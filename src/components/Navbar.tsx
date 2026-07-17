import { useState, useEffect } from 'react';
import { BatteryCharging, Menu, X, MessageCircle, Moon, Sun, Monitor } from 'lucide-react';
import { getWhatsAppLink, defaultMessage } from '../lib/whatsapp';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const getThemeIcon = (className: string) => {
    if (theme === 'system') return <Monitor className={className} />;
    if (theme === 'light') return <Sun className={className} />;
    return <Moon className={className} />;
  };

  return (
    <nav className="fixed top-0 w-full h-[64px] border-b border-white/20 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl z-50 px-4 sm:px-6 lg:px-12 flex items-center justify-between transition-colors duration-300">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-apple-dark dark:bg-white rounded-lg flex items-center justify-center">
          <BatteryCharging className="w-5 h-5 text-[#00ff00]" strokeWidth={2} />
        </div>
        <span className="font-semibold text-xl tracking-tight text-apple-dark dark:text-white transition-colors duration-300">FixBattery</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#inicio" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Inicio</a>
        <a href="#modelos" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Modelos</a>
        <a href="#servicios" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Servicios</a>
        <a href="#ubicacion" className="text-sm font-medium hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue transition-colors">Ubicación</a>
        <button 
          onClick={cycleTheme} 
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-apple-dark dark:text-white"
          aria-label="Toggle dark mode"
        >
          {getThemeIcon("w-5 h-5")}
        </button>
        <a 
          href={getWhatsAppLink(defaultMessage)}
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

      {mobileMenuOpen && (
        <div className="absolute top-[64px] left-0 right-0 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg transition-colors duration-300">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-apple-dark dark:text-white hover:text-apple-blue dark:hover:text-apple-blue">Inicio</a>
            <a href="#modelos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-apple-dark dark:text-white hover:text-apple-blue dark:hover:text-apple-blue">Modelos</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-apple-dark dark:text-white hover:text-apple-blue dark:hover:text-apple-blue">Servicios</a>
            <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-apple-dark dark:text-white hover:text-apple-blue dark:hover:text-apple-blue">Ubicación</a>
            <a 
              href={getWhatsAppLink(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-wa-green text-white px-5 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
