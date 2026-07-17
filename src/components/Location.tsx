import { motion } from 'motion/react';
import { MapPin, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 bg-apple-gray dark:bg-[#111111] px-4 sm:px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-dark dark:text-white mb-4 transition-colors duration-300">
            Ubicación
          </h2>
          <p className="text-lg text-apple-text dark:text-gray-400 font-medium transition-colors duration-300">
            Servicio técnico oficial en el centro de Santiago.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-white dark:bg-black rounded-[32px] p-6 shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-300">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] overflow-hidden bg-apple-gray dark:bg-gray-900 aspect-video md:aspect-auto md:h-[350px] relative border border-apple-border/50 dark:border-gray-700 transition-colors duration-300"
          >
            {/* Google Maps Embed using the provided address */}
            <iframe 
              src="https://maps.google.com/maps?q=Arturo%20Prat%2060%2C%20Santiago%2C%20Chile&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Ubicación FixBattery"
            ></iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 p-4 md:px-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-apple-gray dark:bg-gray-900 rounded-full flex items-center justify-center text-apple-dark dark:text-white shrink-0 transition-colors duration-300">
                <MapPin className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-apple-dark dark:text-white mb-1 transition-colors duration-300">Dirección</h3>
                <p className="text-apple-text dark:text-gray-400 text-base font-medium transition-colors duration-300">
                  Arturo Prat #60, Local 3<br />
                  Santiago, Chile
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-apple-gray dark:bg-gray-900 rounded-full flex items-center justify-center text-apple-dark dark:text-white shrink-0 transition-colors duration-300">
                <Clock className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-apple-dark dark:text-white mb-1 transition-colors duration-300">Horario</h3>
                <p className="text-apple-text dark:text-gray-400 text-base font-medium transition-colors duration-300">
                  Lun - Vie: 10:00 - 19:00 hrs.<br />
                  Sáb: 10:00 - 14:00 hrs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
