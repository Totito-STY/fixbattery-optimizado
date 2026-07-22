import { motion } from 'motion/react';
import { Check, Star, Zap } from 'lucide-react';

const features = [
  {
    icon: Check,
    title: 'Garantía Escrita',
    description: '6 meses de cobertura total.'
  },
  {
    icon: Star,
    title: 'Calidad AmpSentrix',
    description: 'Baterías Premium de Alta Capacidad.'
  },
  {
    icon: Zap,
    title: 'Entrega Inmediata',
    description: 'Instalación en el día.'
  }
];

export default function Features() {
  return (
    <section className="py-12 bg-white dark:bg-black px-4 sm:px-6 lg:px-12 border-t border-apple-gray dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-8 md:gap-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-apple-gray dark:bg-gray-900 rounded-full flex items-center justify-center text-apple-blue shadow-sm transition-colors duration-300">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <div className="text-sm leading-tight text-apple-dark dark:text-white transition-colors duration-300">
                <strong className="block font-bold">{feature.title}</strong>
                <span className="text-apple-text dark:text-gray-400">{feature.description}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
