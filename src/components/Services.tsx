import { motion } from 'motion/react';
import { Settings, ShieldCheck, Microscope, Droplets, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    icon: Microscope,
    title: 'Diagnóstico Preciso',
    description: 'Evaluación del estado actual de tu batería y salud general del equipo antes de abrirlo.'
  },
  {
    icon: Settings,
    title: 'Herramientas Especializadas',
    description: 'Apertura segura con herramientas de precisión para no dañar flexores ni componentes internos.'
  },
  {
    icon: Droplets,
    title: 'Sellado Waterproof',
    description: 'Instalación de nuevos adhesivos originales para restaurar la resistencia al polvo y agua.'
  },
  {
    icon: Zap,
    title: 'Batería AmpSentrix',
    description: 'Instalación de repuesto Premium de alta capacidad, sellado de fábrica y sin uso previo.'
  },
  {
    icon: ShieldCheck,
    title: 'Pruebas de Calibración',
    description: 'Verificación de voltajes y lectura correcta del porcentaje de salud en el sistema.'
  },
  {
    icon: Clock,
    title: 'Entrega Express',
    description: 'Todo el proceso realizado en 30-45 minutos en un ambiente controlado libre de estática.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 scroll-mt-16 bg-white dark:bg-[#050505] px-4 sm:px-6 lg:px-12 transition-colors duration-300 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-apple-gray dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-apple-blue" />
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Instalación Profesional</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
          >
            No es solo cambiar una pieza.<br/>Es <span className="text-apple-blue">ingeniería de precisión.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-6"
          >
            Un cambio de batería mal ejecutado puede arruinar tu iPhone. Nuestro servicio técnico aplica protocolos estrictos para garantizar que tu equipo quede como salido de fábrica, con garantía de 6 meses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/proceso" className="inline-flex items-center gap-2 text-apple-blue font-semibold hover:underline">
              Ver el paso a paso del proceso de cambio &rarr;
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-[#f8f9fa] dark:bg-[#0c0c0c] p-8 rounded-3xl border border-gray-100 dark:border-gray-800/50 hover:bg-white dark:hover:bg-[#111] transition-all hover:shadow-xl hover:shadow-black/5"
            >
              <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <step.icon className="w-6 h-6 text-apple-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
