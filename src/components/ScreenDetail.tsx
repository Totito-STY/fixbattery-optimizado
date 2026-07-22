import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'motion/react';
import { screenModels } from '../data/screenModels';
import { ArrowLeft, MessageCircle, ShieldCheck, Sun, Droplets, Truck, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getWhatsAppLink } from '../lib/whatsapp';
import { useDocumentHead } from '../lib/useDocumentHead';
import Picture from './Picture';
import React, { useEffect, useState } from 'react';

export default function ScreenDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [serviceOption, setServiceOption] = useState<'install' | 'partOnly'>('install');

  const model = screenModels.find((m) => m.id === id);

  useDocumentHead({
    title: model ? `Cambio de Pantalla ${model.name}` : 'Modelo no encontrado',
    description: model
      ? `Cambio de pantalla para ${model.name} en Santiago. Solo repuesto desde $${model.priceScreenOnly.toLocaleString('es-CL')} o con instalación profesional desde $${model.priceWithInstall.toLocaleString('es-CL')}. Garantía de 6 meses.`
      : undefined,
  });

  const mainControls = useAnimation();
  const lightboxControls = useAnimation();

  useEffect(() => {
    mainControls.start({ x: `-${currentImageIndex * 100}%` });
  }, [currentImageIndex, mainControls]);

  useEffect(() => {
    if (isLightboxOpen) {
      lightboxControls.start({ x: `-${currentImageIndex * 100}%` });
    }
  }, [currentImageIndex, isLightboxOpen, lightboxControls]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  if (!model) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modelo no encontrado</h2>
        <button 
          onClick={() => navigate('/#pantallas')}
          className="text-apple-blue hover:underline font-medium flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a pantallas
        </button>
      </div>
    );
  }

  const images = model.images ?? [];

  const variants = {
    enter: ({ isZoomed }: { direction: number, isZoomed?: boolean }) => {
      return {
        opacity: 0,
        scale: isZoomed ? 2.5 : 1
      };
    },
    center: ({ isZoomed }: { direction: number, isZoomed?: boolean }) => ({
      opacity: 1,
      scale: isZoomed ? 2.5 : 1
    }),
    exit: ({ isZoomed }: { direction: number, isZoomed?: boolean }) => {
      return {
        opacity: 0,
        scale: isZoomed ? 2.5 : 1
      };
    }
  };

  const handleMainDragEnd = (e: any, { offset, velocity }: any) => {
    const swipeThreshold = 50;
    const velocityThreshold = 0.5;
    
    let indexChanged = false;
    if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
        indexChanged = true;
      }
    } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(prev => prev - 1);
        indexChanged = true;
      }
    }
    
    if (!indexChanged) {
      mainControls.start({ x: `-${currentImageIndex * 100}%` });
    }
  };

  const handleLightboxDragEnd = (e: any, { offset, velocity }: any) => {
    const swipeThreshold = 50;
    const velocityThreshold = 0.5;
    
    let indexChanged = false;
    if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
        indexChanged = true;
      }
    } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(prev => prev - 1);
        indexChanged = true;
      }
    }
    
    if (!indexChanged) {
      lightboxControls.start({ x: `-${currentImageIndex * 100}%` });
    }
  };

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-12 bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/#pantallas')}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 md:mb-12 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Volver a pantallas
        </button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Left Column: Image/Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-apple-gray dark:bg-[#111] rounded-[40px] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 border border-gray-100 dark:border-gray-800 relative overflow-hidden"
          >
            {images.length > 0 ? (
              <>
                <div className={`relative w-full h-full overflow-hidden flex items-center justify-center flex-grow group ${images.length > 1 ? 'mb-8 sm:mb-24' : ''}`}>
                  <motion.div
                    drag={images.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleMainDragEnd}
                    animate={mainControls}
                    initial={{ x: `-${currentImageIndex * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 flex w-full h-full cursor-grab active:cursor-grabbing"
                  >
                    {images.map((img, idx) => {
                      const isCurrent = idx === currentImageIndex;
                      return (
                        <div key={idx} className="w-full h-full flex-shrink-0 flex items-center justify-center relative p-4 overflow-hidden">
                          <Picture
                            avif={img.avif}
                            webp={img.webp}
                            alt={`Pantalla para ${model.name} - repuesto original`}
                            draggable={false}
                            onClick={() => setIsLightboxOpen(true)}
                            className={`max-w-full max-h-full object-contain cursor-zoom-in drop-shadow-lg rounded-2xl select-none transition-all duration-500 ease-out ${
                              isCurrent
                                ? 'scale-[1.15] sm:scale-[1.2] md:scale-[1.3] lg:scale-[1.4] opacity-100'
                                : 'scale-100 opacity-20 pointer-events-none'
                            }`}
                          />
                        </div>
                      );
                    })}
                  </motion.div>

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDirection(-1);
                          setCurrentImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
                        }}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#e5e5ea]/80 dark:bg-[#2c2c2e]/80 hover:bg-[#d1d1d6] dark:hover:bg-[#3a3a3c] backdrop-blur-md flex items-center justify-center text-black dark:text-white transition-all duration-300 z-10 sm:opacity-0 sm:group-hover:opacity-100 shadow-sm"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 pr-0.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDirection(1);
                          setCurrentImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
                        }}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#e5e5ea]/80 dark:bg-[#2c2c2e]/80 hover:bg-[#d1d1d6] dark:hover:bg-[#3a3a3c] backdrop-blur-md flex items-center justify-center text-black dark:text-white transition-all duration-300 z-10 sm:opacity-0 sm:group-hover:opacity-100 shadow-sm"
                        aria-label="Siguiente imagen"
                      >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 pl-0.5" />
                      </button>
                    </>
                  )}
                </div>
                
                {images.length > 1 && (
                  <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex flex-col items-center gap-4 z-10">
                    <div className="hidden sm:flex gap-4">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => { setDirection(idx > currentImageIndex ? 1 : -1); setCurrentImageIndex(idx); }}
                          className={`w-16 h-16 rounded-2xl border-2 overflow-hidden bg-white dark:bg-black transition-all duration-300 ${currentImageIndex === idx ? 'border-apple-blue shadow-md scale-110' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
                        >
                          <Picture avif={img.avif} webp={img.webp} alt={`Pantalla para ${model.name} - vista ${idx + 1}`} className="w-full h-full object-contain scale-[1.3]" loading="lazy" decoding="async" />
                        </button>
                      ))}
                    </div>
                    
                    <div className="flex sm:hidden gap-3">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => { setDirection(idx > currentImageIndex ? 1 : -1); setCurrentImageIndex(idx); }}
                          className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-apple-blue w-6' : 'bg-gray-300 dark:bg-gray-600 w-2'}`}
                          aria-label={`Ver imagen ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="w-[160px] h-[320px] bg-black rounded-[2rem] p-1 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-800 flex items-center justify-center">
                 <div className="w-full h-full border border-gray-800 rounded-[1.8rem] flex flex-col items-center justify-center bg-gradient-to-tr from-blue-900/30 to-black relative overflow-hidden">
                    <div className="absolute top-2 w-12 h-3 bg-black rounded-full z-10"></div>
                    <Sun className="w-12 h-12 text-cyan-400 mb-2 z-10 opacity-80" />
                    <span className="text-sm font-medium text-white/90 z-10">{model.name}</span>
                 </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
              {model.name}
            </h1>
            <p className="text-xl text-apple-blue font-medium mb-6">
              Pantalla Premium (True Tone y Calibración Original)
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg">
              Recupera la experiencia visual impecable de tu {model.name}. Nuestras pantallas premium ofrecen una reproducción de color exacta, táctil de alta respuesta y compatibilidad nativa con las funciones de brillo y True Tone de tu equipo.
            </p>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">¿Por qué elegir nuestras pantallas?</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-[#ffcc00]/10 flex items-center justify-center shrink-0">
                    <Sun className="w-4 h-4 text-[#ffcc00]" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">True Tone y Brillo Original:</span> Conserva los colores vibrantes, brillo intenso y compatibilidad total con True Tone.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-[#34c759]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#34c759]" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">Garantía de 6 meses:</span> Respaldo total por defectos de fábrica. Probamos el táctil y la imagen frente a ti.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-[#32ade6]/10 flex items-center justify-center shrink-0">
                    <Droplets className="w-4 h-4 text-[#32ade6]" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">Sellado y Calibración:</span> Restituimos el sello de agua original y calibramos la pantalla para un táctil perfecto.
                  </p>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">Opciones de servicio</h3>
            <div className="space-y-4 mb-10">
              <div
                onClick={() => setServiceOption('install')}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 md:p-6 rounded-3xl border-2 transition-all cursor-pointer ${
                  serviceOption === 'install'
                    ? 'border-wa-green bg-wa-green/5 dark:bg-wa-green/10'
                    : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111] hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                <div className="mb-2 sm:mb-0">
                  <span className="block text-lg font-bold text-gray-900 dark:text-white mb-1">Con Instalación Profesional</span>
                  <span className="block text-sm text-gray-600 dark:text-gray-400 font-medium max-w-[280px]">Proceso certificado de 45-60 minutos con recuperación de True Tone.</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white shrink-0">
                  ${model.priceWithInstall.toLocaleString('es-CL')}
                </span>
              </div>
              
              <div
                onClick={() => setServiceOption('partOnly')}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 md:p-6 rounded-3xl border-2 transition-all cursor-pointer ${
                  serviceOption === 'partOnly'
                    ? 'border-wa-green bg-wa-green/5 dark:bg-wa-green/10'
                    : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111] hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                <div className="mb-2 sm:mb-0">
                  <span className="block text-base font-semibold text-gray-900 dark:text-white mb-1">Solo Repuesto</span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 max-w-[280px]">Lleva la pantalla sellada lista para instalación (requiere programadora para True Tone).</span>
                </div>
                <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white shrink-0">
                  ${model.priceScreenOnly.toLocaleString('es-CL')}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-[#111] rounded-3xl p-6 mb-12 border border-gray-200 dark:border-gray-800 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 flex items-center justify-center shrink-0 shadow-sm">
                <Truck className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">Envíos a todo Chile</h4>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  ¿Eres de región o tienes tu propio técnico? Despachamos tu pantalla cuidadosamente embalada directo a tu domicilio o sucursal más cercana.
                </p>
              </div>
            </div>

            <div className="text-center bg-apple-gray dark:bg-[#111] rounded-[32px] p-8 border border-gray-100 dark:border-gray-800">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                ¿Listo para ver tu iPhone como nuevo?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-6">
                Escríbenos por WhatsApp y coordinemos hoy mismo.
              </p>
              <a 
                href={getWhatsAppLink(`Hola! Me interesa cotizar el cambio de pantalla premium para mi ${model.name} (${serviceOption === 'install' ? 'con instalación' : 'solo repuesto'}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-wa-green hover:bg-wa-green-hover text-white py-4 px-6 rounded-full text-[17px] font-bold transition-transform hover:scale-[1.02] active:scale-[0.98] duration-300 flex items-center justify-center gap-2 shadow-lg shadow-wa-green/20"
              >
                <MessageCircle className="w-6 h-6" />
                Hablar con Sebastián
              </a>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 sm:left-8 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden sm:block"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(-1);
                    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                  }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-4 sm:right-8 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden sm:block"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(1);
                    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                  }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div className="w-full h-full p-4 sm:p-12 flex items-center justify-center relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <motion.div
                drag={images.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleLightboxDragEnd}
                animate={lightboxControls}
                initial={{ x: `-${currentImageIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 flex w-full h-full cursor-grab active:cursor-grabbing"
              >
                {images.map((img, idx) => {
                  const isCurrent = idx === currentImageIndex;
                  return (
                    <div key={idx} className="w-full h-full flex-shrink-0 flex items-center justify-center relative p-4">
                      {isCurrent ? (
                        <Picture
                          avif={img.avif}
                          webp={img.webp}
                          alt={`Pantalla para ${model.name} - repuesto original`}
                          draggable={false}
                          style={{ WebkitTouchCallout: "none" }}
                          className="max-w-[90%] max-h-[90%] object-contain rounded-xl select-none"
                        />
                      ) : (
                        <Picture
                          avif={img.avif}
                          webp={img.webp}
                          alt=""
                          draggable={false}
                          className="max-w-[90%] max-h-[90%] object-contain rounded-xl select-none opacity-40 pointer-events-none"
                        />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </div>
            
            {images.length > 1 && (
               <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-50 sm:hidden" onClick={(e) => e.stopPropagation()}>
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setDirection(idx > currentImageIndex ? 1 : -1); setCurrentImageIndex(idx); }}
                      className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
                      aria-label={`Ver imagen ${idx + 1}`}
                    />
                  ))}
               </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
