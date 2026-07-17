import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-apple-dark dark:bg-black text-apple-text px-4 sm:px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
        <div className="text-white font-semibold text-xl">FixBattery.</div>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-xs uppercase tracking-widest text-gray-400">
          <span>iPhone 11-15 Pro Max</span>
          <span>Insumos Premium</span>
        </div>
      </div>
      <div className="flex items-center gap-6 text-right">
         <div className="text-xs text-gray-400">
            <p className="text-white font-medium mb-1">Arturo Prat #60, Local 3</p>
            <p>Santiago, Chile • 10:00 - 19:00</p>
         </div>
         <a href="#ubicacion" className="w-10 h-10 rounded-full border border-white/20 dark:border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer shrink-0">
            <MapPin className="w-4 h-4 text-white" />
         </a>
      </div>
    </footer>
  );
}
