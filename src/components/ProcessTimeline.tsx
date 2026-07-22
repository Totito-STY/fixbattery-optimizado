import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDocumentHead } from '../lib/useDocumentHead';

const Step1Svg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="30" y="15" width="40" height="70" rx="6" />
    <rect x="34" y="19" width="32" height="62" rx="3" strokeWidth="1" opacity="0.3"/>
    <circle cx="50" cy="45" r="12" />
    <line x1="58" y1="53" x2="68" y2="63" strokeWidth="3" />
    <rect x="45" y="41" width="10" height="6" rx="1" strokeWidth="1.5" />
    <line x1="56" y1="42" x2="56" y2="46" strokeWidth="1.5" />
    <line x1="47" y1="44" x2="49" y2="44" strokeWidth="1.5" stroke="#ff3b30" />
  </svg>
);

const Step2Svg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="15" y="70" width="70" height="15" rx="2" />
    <rect x="40" y="75" width="20" height="5" rx="1" fill="currentColor" opacity="0.2" stroke="none" />
    <rect x="25" y="60" width="50" height="8" rx="2" />
    <path d="M 25 60 L 75 40" strokeWidth="2" />
    <rect x="65" y="30" width="10" height="10" rx="1" />
    <line x1="70" y1="20" x2="70" y2="30" strokeWidth="2" />
    <line x1="50" y1="20" x2="70" y2="20" strokeWidth="2" />
    <line x1="50" y1="10" x2="50" y2="20" strokeWidth="2" />
    <path d="M 35 55 Q 38 50 35 45" opacity="0.5" />
    <path d="M 45 52 Q 48 47 45 42" opacity="0.5" />
    <path d="M 55 49 Q 58 44 55 39" opacity="0.5" />
  </svg>
);

const Step3Svg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="15" width="50" height="70" rx="6" opacity="0.3" />
    <g transform="translate(0, -10)">
      <rect x="35" y="30" width="30" height="40" rx="2" strokeDasharray="2 2" />
      <path d="M 50 30 L 50 15 M 45 20 L 50 15 L 55 20" strokeWidth="2" />
    </g>
    <path d="M 40 70 C 40 80 30 85 30 95" strokeWidth="2" />
    <path d="M 60 70 C 60 80 70 85 70 95" strokeWidth="2" />
    <path d="M 25 90 L 35 90 M 65 90 L 75 90" strokeWidth="1" opacity="0.5" />
  </svg>
);

const Step4Svg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="15" width="50" height="70" rx="6" opacity="0.3" />
    <path d="M 60 40 L 75 25" strokeWidth="4" />
    <path d="M 55 45 L 65 35" strokeWidth="2" />
    <path d="M 50 40 L 60 50" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M 45 45 L 55 55" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M 40 50 L 50 60" strokeWidth="1" strokeDasharray="2 2" />
    <circle cx="40" cy="35" r="1" fill="currentColor" />
    <circle cx="35" cy="45" r="1" fill="currentColor" />
    <circle cx="50" cy="70" r="1" fill="currentColor" />
  </svg>
);

const Step5Svg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="15" width="50" height="70" rx="6" opacity="0.3" />
    <g transform="translate(0, 5)">
      <rect x="35" y="25" width="30" height="40" rx="2" stroke="#34c759" strokeWidth="2" fill="#34c759" fillOpacity="0.1" />
      <path d="M 45 45 L 55 45 M 50 40 L 50 50" stroke="#34c759" strokeWidth="2" />
      <path d="M 50 25 L 50 10 M 45 15 L 50 20 L 55 15" stroke="#34c759" strokeWidth="2" />
    </g>
  </svg>
);

const Step6Svg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="15" width="50" height="70" rx="6" />
    <rect x="28" y="18" width="44" height="64" rx="4" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M 65 75 C 65 80 60 85 50 85 C 40 85 35 80 35 75 C 35 65 50 55 50 55 C 50 55 65 65 65 75 Z" stroke="#0071e3" fill="#0071e3" fillOpacity="0.2" strokeWidth="1.5" />
  </svg>
);

const Step7Svg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="15" width="50" height="70" rx="6" />
    <rect x="29" y="19" width="42" height="62" rx="3" strokeWidth="1" opacity="0.3"/>
    <circle cx="50" cy="45" r="8" />
    <path d="M 50 34 L 50 36 M 50 54 L 50 56 M 39 45 L 41 45 M 59 45 L 61 45 M 42 37 L 44 39 M 56 51 L 58 53 M 42 53 L 44 51 M 56 37 L 58 39" strokeWidth="2" strokeLinecap="round" />
    <rect x="35" y="65" width="30" height="4" rx="2" opacity="0.2" />
    <rect x="35" y="65" width="15" height="4" rx="2" fill="currentColor" stroke="none" />
  </svg>
);

const Step8Svg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="15" width="50" height="70" rx="6" />
    <rect x="29" y="19" width="42" height="62" rx="3" strokeWidth="1.5" stroke="#34c759"/>
    <text x="50" y="43" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#34c759" stroke="none">100%</text>
    <path d="M 40 60 L 47 67 L 60 54" stroke="#34c759" strokeWidth="3" />
  </svg>
);

const steps = [
  {
    title: 'Diagnóstico inicial',
    description: 'Revisión del estado de salud de la batería actual y del equipo antes de comenzar.',
    Illustration: Step1Svg
  },
  {
    title: 'Apertura del equipo',
    description: 'Retiro de la pantalla con máquina TBK 288H (equipo profesional de separación térmica, evita dañar el flex o la carcasa).',
    Illustration: Step2Svg
  },
  {
    title: 'Retiro de batería antigua',
    description: 'Desconexión segura y remoción cuidadosa de los adhesivos y la batería gastada.',
    Illustration: Step3Svg
  },
  {
    title: 'Limpieza interna',
    description: 'Limpieza del interior del teléfono antes de instalar la batería nueva, eliminando polvo y residuos.',
    Illustration: Step4Svg
  },
  {
    title: 'Instalación de batería AmpSentrix',
    description: 'Conexión y fijación correcta del repuesto premium de alta capacidad, nuevo y sellado de fábrica.',
    Illustration: Step5Svg
  },
  {
    title: 'Cierre y sellado',
    description: 'Aplicación de adhesivos originales y sellado profesional para proteger contra polvo y humedad.',
    Illustration: Step6Svg
  },
  {
    title: 'Configuración',
    description: 'Encendido y configuración del sistema tras conectar los componentes internos.',
    Illustration: Step7Svg
  },
  {
    title: 'Verificación final',
    description: 'Revisión de batería al 100% de salud sin errores, y prueba de funcionamiento normal (cámaras, Face ID, etc).',
    Illustration: Step8Svg
  }
];

export default function ProcessTimeline() {
  const navigate = useNavigate();

  useDocumentHead({
    title: 'Proceso de Cambio de Batería Paso a Paso',
    description: 'Conoce el proceso profesional de cambio de batería para iPhone: diagnóstico, apertura segura, sellado waterproof e instalación de la batería AmpSentrix.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-[#fcfcfc] dark:bg-[#050505] min-h-screen transition-colors duration-300 overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#050505]/50 dark:to-[#050505] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-10 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Volver
        </button>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            El Proceso de Instalación
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Descubre cómo trabajamos. Utilizamos equipamiento certificado y protocolos estrictos para asegurar que tu iPhone quede impecable.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 dark:bg-gray-800 -translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col sm:flex-row items-center gap-6 md:gap-12 relative ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Timeline Dot (Desktop only) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-black border-[4px] border-apple-blue rounded-full z-10 hidden sm:block"></div>

                  {/* Illustration Side */}
                  <div className="w-full sm:w-1/2 flex justify-center">
                    <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#181818] dark:to-[#0a0a0a] rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.4)] flex items-center justify-center relative group transition-transform duration-500 hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
                      <div className="relative z-10 w-full h-full transition-transform duration-500 group-hover:scale-105">
                        <step.Illustration />
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className={`w-full sm:w-1/2 text-center sm:text-left ${!isEven ? 'sm:text-right' : ''}`}>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-sm mb-4 sm:hidden">
                      {index + 1}
                    </div>
                    <div className={`hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-sm mb-4 ${!isEven ? 'ml-auto' : ''}`}>
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
