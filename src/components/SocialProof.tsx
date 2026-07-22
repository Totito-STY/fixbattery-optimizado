import { motion } from 'motion/react';
import { Instagram, MessageCircle, Quote } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const row1 = [
  { user: 'javi.mob', msg: 'Hola y 4400 eso es lo que dura' },
  { user: 'constanza_r', msg: 'Hola, buenas noches, para el 13 pro' },
  { user: 'seba.tech92', msg: 'Hola, precio para un iPhone 12 pro?' },
  { user: 'mati_12', msg: 'Hola, qué valor tiene para un iPhone 13 pro max?' },
  { user: 'camila.ign', msg: 'Valor 14pro' },
  { user: 'pipe_x', msg: 'Yo con mi batería en 68 xd' },
  { user: 'vale_199', msg: 'Hola, para un iPhone 13 Pro Max' },
  { user: 'nico_smart', msg: 'Yo viendo este video con mi iPhone 15 a 77% de batería' },
  { user: 'dani.ella', msg: 'Estoy en un 78' },
  { user: 'tomas.gz', msg: 'Hola para el 14 pro?' },
  { user: 'cata_apple', msg: 'Valor?' },
  { user: 'cris.mac', msg: '4.400 MAH queda casi como un 16 pro Max nuevo en batería' },
  { user: 'pali.99', msg: 'Hola valor para un iphone 14' },
  { user: 'rodrigo_m', msg: 'Qué valor tiene ese cambio de batería para el mismo equipo' },
];

const row2 = [
  { user: 'anto.tech', msg: 'Para iPhone 14 Pro Max?' },
  { user: 'felipe_q', msg: 'Valor?? Mi batería está en 73%' },
  { user: 'josefa.v', msg: 'Hola, cambio a domicilio para batería iPhone 14 Pro, qué valor tiene' },
  { user: 'maxi_p', msg: 'Hola buen día qué valor tiene la batería para ese mismo modelo 12 pro Max' },
  { user: 'belen_95', msg: 'Valor batería para iPhone 13' },
  { user: 'ignacio.c', msg: 'Hola buenas! Para iPhone 15 pro, cuál es el valor?' },
  { user: 'fer.nanda', msg: 'Valor XR?' },
  { user: 'diego_z', msg: 'Cuánto sale' },
  { user: 'isita_m', msg: 'De dónde son' },
  { user: 'benja_t', msg: 'Hola qué valor tiene cambio de batería para iphone 13' },
  { user: 'sofia.tech', msg: 'Hola, cuánto sale el mismo trabajo para un iPhone 14 Pro' },
  { user: 'lucas_h', msg: 'Precio para el iPhone 13 pro' },
  { user: 'fran_p', msg: 'Precio cambio para un 15 pro Max' },
  { user: 'matias.b', msg: 'Hola necesito para un 13 pro Max. Valor??' },
];

const row3 = [
  { user: 'conny_v', msg: 'Para un 13 pro Max?' },
  { user: 'joaco_s', msg: 'Para iPhone 12 cuánto sale? Hola' },
  { user: 'valeria.c', msg: 'Hola necesito el cambio de batería de un iPhone 11 y cambio de parlante' },
  { user: 'seba_r', msg: 'Precio para un 15 pro Max' },
  { user: 'dani_m', msg: 'XR cuánto sale?' },
  { user: 'tomas_v', msg: 'Hola valor para un 13 pro Max?' },
  { user: 'cata.ignacia', msg: 'Yo viendo esto con 30% de condición y 2% de batería' },
  { user: 'cris_12', msg: 'Hola, para ese procedimiento pide clave?' },
  { user: 'pali_m', msg: 'Hola consulta, las del iPhone 13 pro de esa marca de cuánta capacidad son?' },
  { user: 'rodrigo.tech', msg: 'Precio' },
  { user: 'anto_99', msg: 'Tengo el mismo 12 pro max, precio?' },
  { user: 'felipe.mac', msg: 'La batería para un 13 pro, qué precio tiene el cambio?' },
  { user: 'josefa_apple', msg: 'Para un iPhone 11? Y qué precio' },
  { user: 'maxi.mob', msg: 'Qué precio para 15 pro max' },
];

const MessageCard = ({ user, msg }: { user: string; msg: string }) => {
  const initial = user.charAt(0).toUpperCase();
  return (
    <div className="bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 w-[280px] sm:w-[320px] shadow-sm flex flex-col gap-3 transition-colors">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center p-[2px]">
          <div className="w-full h-full bg-white dark:bg-[#111] rounded-full border border-white dark:border-[#111] flex items-center justify-center">
            <span className="text-[10px] font-bold text-gray-900 dark:text-white">{initial}</span>
          </div>
        </div>
        <span className="text-xs font-semibold text-gray-900 dark:text-white">{user}</span>
        <Instagram className="w-3.5 h-3.5 text-gray-400 ml-auto" />
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
        {msg}
      </p>
    </div>
  );
};

export default function SocialProof() {
  const marqueeAreaRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = marqueeAreaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const marqueeRowStyle = { animationPlayState: isInView ? 'running' : 'paused' } as const;

  return (
    <section className="py-20 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden border-y border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
        >
          Cientos de consultas cada semana
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Así nos escriben todos los días personas buscando renovar la autonomía de sus equipos.
        </motion.p>
      </div>

      <div ref={marqueeAreaRef} className="flex flex-col gap-4 relative">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#fafafa] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#fafafa] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 */}
        <div
          className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]"
          style={{ '--duration': '55s', ...marqueeRowStyle } as any}
        >
          {row1.map((item, i) => (
            <div className="pr-4" key={`r1-${i}`}>
              <MessageCard user={item.user} msg={item.msg} />
            </div>
          ))}
          <div className="flex" aria-hidden="true">
            {row1.map((item, i) => (
              <div className="pr-4" key={`r1-dup-${i}`}>
                <MessageCard user={item.user} msg={item.msg} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]"
          style={{ '--duration': '45s', animationDirection: 'reverse', ...marqueeRowStyle } as any}
        >
          {row2.map((item, i) => (
            <div className="pr-4" key={`r2-${i}`}>
              <MessageCard user={item.user} msg={item.msg} />
            </div>
          ))}
          <div className="flex" aria-hidden="true">
            {row2.map((item, i) => (
              <div className="pr-4" key={`r2-dup-${i}`}>
                <MessageCard user={item.user} msg={item.msg} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div
          className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]"
          style={{ '--duration': '60s', ...marqueeRowStyle } as any}
        >
          {row3.map((item, i) => (
            <div className="pr-4" key={`r3-${i}`}>
              <MessageCard user={item.user} msg={item.msg} />
            </div>
          ))}
          <div className="flex" aria-hidden="true">
            {row3.map((item, i) => (
              <div className="pr-4" key={`r3-dup-${i}`}>
                <MessageCard user={item.user} msg={item.msg} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-[32px] p-8 md:p-12 text-center shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <p className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed mb-8">
              "Gracias por el cambio de batería. Mi celular volvió a la vida! Los recomiendo 💯"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-white dark:bg-[#111] rounded-full border-2 border-white dark:border-[#111] flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">C</span>
                </div>
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-gray-900 dark:text-white">claudio_m</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">Cliente FixBattery</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
