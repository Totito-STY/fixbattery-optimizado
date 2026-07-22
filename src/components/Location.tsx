import { motion } from 'motion/react';
import { MapPin, Clock, Mail, User } from 'lucide-react';
import { useState, useEffect, type FormEvent } from 'react';

const SANTIAGO_TIME_ZONE = 'America/Santiago';

// Obtiene el día de la semana (0: Dom ... 6: Sáb) y la hora actual, ambos
// calculados explícitamente en la zona horaria de Santiago, para que el
// estado "Abierto/Cerrado" no dependa del reloj o huso horario del
// dispositivo de quien visita el sitio.
function getSantiagoDayAndHour(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: SANTIAGO_TIME_ZONE,
    weekday: 'short',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(date);

  const weekdayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };

  const weekdayPart = parts.find((p) => p.type === 'weekday')?.value ?? 'Sun';
  const hourPart = parts.find((p) => p.type === 'hour')?.value ?? '0';

  // "24" representa la medianoche en formato hour12:false de Intl.
  const hour = parseInt(hourPart, 10) % 24;

  return { day: weekdayMap[weekdayPart], hour };
}

function useStoreStatus() {
  const [status, setStatus] = useState({ isOpen: false, message: '' });

  useEffect(() => {
    const checkStatus = () => {
      const { day, hour } = getSantiagoDayAndHour(new Date());

      // 0: Sun, 1: Mon, ... 6: Sat
      const schedule = {
        1: { open: 10, close: 19 },
        2: { open: 10, close: 19 },
        3: { open: 10, close: 19 },
        4: { open: 10, close: 19 },
        5: { open: 10, close: 19 },
        6: { open: 10, close: 14 },
        0: null // closed
      };

      const todaySchedule = schedule[day as keyof typeof schedule];
      
      if (todaySchedule && hour >= todaySchedule.open && hour < todaySchedule.close) {
        setStatus({ isOpen: true, message: 'Abierto ahora' });
        return;
      }

      let nextDay = day;
      let daysAdded = 0;
      let nextOpenMessage = '';

      while (daysAdded < 7) {
        if (daysAdded === 0 && todaySchedule && hour < todaySchedule.open) {
          nextOpenMessage = `hoy a las ${todaySchedule.open}:00`;
          break;
        }
        
        daysAdded++;
        nextDay = (day + daysAdded) % 7;
        const nextSchedule = schedule[nextDay as keyof typeof schedule];
        
        if (nextSchedule) {
          const dayName = daysAdded === 1 ? 'mañana' : (nextDay === 1 ? 'el lunes' : 'el próximo día hábil');
          nextOpenMessage = `${dayName} a las ${nextSchedule.open}:00`;
          break;
        }
      }

      setStatus({ isOpen: false, message: `Cerrado · abre ${nextOpenMessage}` });
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return status;
}

const CONTACT_EMAIL = 'Fixbatterychile@gmail.com';

export default function Location() {
  const storeStatus = useStoreStatus();
  const [form, setForm] = useState({ name: '', model: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta desde el sitio - ${form.model || 'Modelo no indicado'}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nModelo del equipo: ${form.model}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };
  
  return (
    <section id="ubicacion" className="relative scroll-mt-16 py-16 bg-[#fcfcfc] dark:bg-[#050505] px-4 sm:px-6 lg:px-12 transition-colors duration-300 overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#050505]/50 dark:to-[#050505] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-apple-dark dark:text-white mb-4 transition-colors duration-300">
            Ubicación y Contacto
          </h2>
          <p className="text-lg text-apple-text dark:text-gray-400 font-medium transition-colors duration-300">
            Visítanos en nuestro servicio técnico en el centro de Santiago.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-white to-gray-50 dark:from-[#111] dark:to-[#0a0a0a] rounded-[32px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-gray-200/60 dark:border-gray-800/80 transition-colors duration-300">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] overflow-hidden bg-apple-gray dark:bg-gray-900 aspect-video md:aspect-auto md:h-[450px] relative border border-apple-border/50 dark:border-gray-700 transition-colors duration-300"
          >
            {/* Google Maps Embed using the provided address */}
            <iframe 
              src="https://maps.google.com/maps?q=Arturo%20Prat%2060%2C%20Santiago%2C%20Chile&t=&z=16&ie=UTF8&iwloc=&output=embed" 
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
            className="space-y-6 p-4 md:px-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-apple-gray dark:bg-gray-900 rounded-full flex items-center justify-center text-apple-dark dark:text-white shrink-0 transition-colors duration-300">
                <MapPin className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-apple-dark dark:text-white mb-1 transition-colors duration-300">Dirección</h3>
                <p className="text-apple-text dark:text-gray-400 text-base font-medium transition-colors duration-300">
                  Arturo Prat 60, of. 3<br />
                  Edificio Casa Fácil<br />
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
                <p className="text-apple-text dark:text-gray-400 text-base font-medium transition-colors duration-300 mb-2">
                  Lun - Vie: 10:00 - 19:00 hrs.<br />
                  Sáb: 10:00 - 14:00 hrs.
                </p>
                {storeStatus.message && (
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    storeStatus.isOpen 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${storeStatus.isOpen ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                    {storeStatus.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-apple-gray dark:bg-gray-900 rounded-full flex items-center justify-center text-apple-dark dark:text-white shrink-0 transition-colors duration-300">
                <User className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col justify-center h-12">
                <h3 className="text-xl font-bold text-apple-dark dark:text-white mb-1 transition-colors duration-300">Atención Personalizada</h3>
                <p className="text-apple-text dark:text-gray-400 text-base font-medium transition-colors duration-300">
                  Al llegar, preguntar por <strong>Sebastián de Fix Battery</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-apple-gray dark:bg-gray-900 rounded-full flex items-center justify-center text-apple-dark dark:text-white shrink-0 transition-colors duration-300">
                <Mail className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col justify-center h-12">
                <h3 className="text-xl font-bold text-apple-dark dark:text-white mb-1 transition-colors duration-300">Correo Electrónico</h3>
                <a href="mailto:Fixbatterychile@gmail.com" className="text-apple-blue hover:underline text-base font-medium transition-colors duration-300 block">
                  Fixbatterychile@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Formulario de contacto: canal alternativo a WhatsApp/Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-gradient-to-br from-white to-gray-50 dark:from-[#111] dark:to-[#0a0a0a] rounded-[32px] p-6 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-gray-200/60 dark:border-gray-800/80 transition-colors duration-300"
        >
          <h3 className="text-xl font-bold text-apple-dark dark:text-white mb-1">¿Prefieres escribirnos por correo?</h3>
          <p className="text-apple-text dark:text-gray-400 text-sm mb-6">
            Completa el formulario y se abrirá tu aplicación de correo con el mensaje ya redactado.
          </p>
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full px-5 py-3 rounded-full border border-apple-border dark:border-gray-700 bg-white dark:bg-black text-apple-dark dark:text-white placeholder:text-apple-text dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-apple-blue transition-colors"
            />
            <input
              type="text"
              required
              placeholder="Modelo de tu iPhone"
              value={form.model}
              onChange={(e) => setForm((f) => ({ ...f, model: e.target.value }))}
              className="w-full px-5 py-3 rounded-full border border-apple-border dark:border-gray-700 bg-white dark:bg-black text-apple-dark dark:text-white placeholder:text-apple-text dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-apple-blue transition-colors"
            />
            <textarea
              required
              placeholder="Cuéntanos qué necesitas"
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full sm:col-span-2 px-5 py-3 rounded-3xl border border-apple-border dark:border-gray-700 bg-white dark:bg-black text-apple-dark dark:text-white placeholder:text-apple-text dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-apple-blue transition-colors resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 justify-self-start bg-apple-dark dark:bg-white text-white dark:text-apple-dark px-8 py-3 rounded-full font-semibold hover:bg-black dark:hover:bg-gray-200 transition-colors"
            >
              Enviar consulta
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
