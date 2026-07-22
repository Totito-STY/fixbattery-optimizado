import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Pierdo la garantía de Apple al cambiar la batería?',
    a: 'Sí, al abrir el equipo por un servicio no autorizado por Apple (como el nuestro y la mayoría de los servicios técnicos), la garantía original de fábrica se anula. Por eso, si tu equipo tiene menos de 1 año y está cubierto por Apple, te recomendamos acudir a ellos primero.'
  },
  {
    q: '¿Cuánto dura la instalación?',
    a: 'El proceso de instalación profesional tarda aproximadamente entre 30 y 45 minutos si vienes a nuestro servicio técnico. Te entregamos el equipo probado y sellado.'
  },
  {
    q: '¿Qué garantía tiene el repuesto?',
    a: 'Todas nuestras baterías AmpSentrix Premium cuentan con 6 meses de garantía legal por fallas de fábrica. Si presenta algún problema de rendimiento anormal en este periodo, la reemplazamos sin costo adicional.'
  },
  {
    q: '¿Hacen envíos a regiones?',
    a: '¡Sí! Despachamos el repuesto cuidadosamente embalado y listo para su instalación a todo Chile, directo a tu domicilio o sucursal más cercana.'
  },
  {
    q: '¿Qué pasa si la batería falla después de instalada?',
    a: 'Si instalamos la batería nosotros y falla dentro de los 6 meses de garantía por defecto de fábrica, realizamos el reemplazo directo sin costo. Si compraste solo el repuesto y lo instalaste por tu cuenta, la garantía cubre el repuesto siempre y cuando no haya sido dañado durante la instalación.'
  },
  {
    q: '¿Puedo llevar mi propia batería para que la instalen?',
    a: 'Para poder ofrecer nuestra garantía de 6 meses y asegurar la calidad del servicio, solo instalamos nuestros propios repuestos AmpSentrix Premium. No instalamos baterías traídas por el cliente.'
  }
];

const FaqSvg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 25 35 C 25 20 40 15 50 15 C 60 15 75 20 75 35 C 75 45 65 50 60 60 L 60 65" strokeWidth="3" />
    <circle cx="60" cy="80" r="3" fill="currentColor" stroke="none" />
    <rect x="25" y="55" width="20" height="4" rx="2" fill="currentColor" stroke="none" opacity="0.4" />
    <rect x="25" y="65" width="15" height="4" rx="2" fill="currentColor" stroke="none" opacity="0.4" />
    <rect x="25" y="75" width="25" height="4" rx="2" fill="currentColor" stroke="none" opacity="0.4" />
  </svg>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-12 bg-[#fcfcfc] dark:bg-[#050505] transition-colors duration-300 overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#050505]/50 dark:to-[#050505] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3 md:sticky md:top-24 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#181818] dark:to-[#0a0a0a] rounded-3xl p-5 border border-gray-200/50 dark:border-gray-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.4)] flex items-center justify-center mb-8 mx-auto md:mx-0"
          >
            <FaqSvg />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 text-balance"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 text-pretty"
          >
            Resolvemos tus dudas principales sobre nuestro servicio técnico, garantías y envíos.
          </motion.p>
        </div>

        <div className="w-full md:w-2/3 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
