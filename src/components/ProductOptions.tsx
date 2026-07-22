import { motion } from 'motion/react';
import { Truck, MonitorSmartphone, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import batteryImgAvif from '../assets/images/promo-bateria-cutout.avif';
import batteryImgWebp from '../assets/images/promo-bateria-cutout.webp';
import Picture from './Picture';

const perks = [
  {
    icon: Truck,
    title: 'Entrega express',
  },
  {
    icon: MonitorSmartphone,
    title: 'Compatible con tus dispositivos',
  },
  {
    icon: Cpu,
    title: 'Todo lo que necesitas',
  },
];

export default function ProductOptions() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-10 mt-32 md:mt-0">
      <div
        className="relative max-w-6xl mx-auto rounded-[32px] overflow-visible"
        style={{
          background:
            'radial-gradient(120% 140% at 78% 50%, #7a3f14 0%, #4a2810 32%, #1c1712 58%, #191919 78%)',
        }}
      >
        <div className="relative flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 pb-14 pt-8 md:py-16">

          {/* Left: copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 w-full md:w-[42%] flex flex-col items-center md:items-start text-center md:text-left shrink-0 mb-10 md:mb-0"
          >
            <h2 className="text-[32px] leading-[1.15] sm:text-4xl md:text-5xl md:leading-[1.1] font-bold tracking-tight text-white max-w-[300px] sm:max-w-sm md:max-w-none mx-auto md:mx-0">
              Tu iPhone al 100% con Baterías AmpSentrix
            </h2>
            <Link
              to="/#modelos"
              className="hidden md:inline-block mt-8 bg-[#2f2af0] hover:bg-[#251fd1] transition-colors text-white font-semibold text-lg px-8 py-3.5 rounded-full shadow-[0_8px_24px_rgba(47,42,240,0.35)]"
            >
              Ver Más
            </Link>
          </motion.div>

          {/* Center: battery product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative z-20 flex-1 flex justify-center order-first md:order-none pointer-events-none -mt-[130px] sm:-mt-[160px] md:mt-0 -mb-6 sm:-mb-10 md:mb-0"
          >
            <div className="relative w-[340px] sm:w-[420px] md:w-full md:h-full aspect-[4/5] md:aspect-auto flex justify-center">
              <Picture
                avif={batteryImgAvif}
                webp={batteryImgWebp}
                alt="Batería AmpSentrix original para iPhone"
                className="
                  w-full
                  h-full
                  md:w-[430px]
                  md:h-auto
                  md:max-w-none
                  object-contain
                  scale-[1.08]
                  sm:scale-100
                  -translate-y-2
                  sm:translate-y-0
                  drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
                  md:absolute
                  md:top-auto
                  md:left-auto
                  md:-translate-x-[64px]
                  md:-translate-y-[350px]
                "
              />
            </div>
          </motion.div>

          {/* Right: perks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="relative z-10 w-full md:w-[32%] flex flex-col items-center md:items-start justify-center shrink-0"
          >
            <div className="flex flex-col gap-4 md:gap-8 w-full mx-auto md:mx-0">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <div key={index} className="flex flex-row items-center gap-4 text-left bg-white/5 md:bg-transparent rounded-2xl md:rounded-none p-4 md:p-0 border border-white/10 md:border-none shadow-sm md:shadow-none">
                    <div className="w-12 h-12 shrink-0 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-white/90 md:text-white font-medium md:font-semibold text-[15px] md:text-base leading-snug">
                      {perk.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile CTA Button */}
            <div className="w-full mt-10 md:hidden">
              <Link
                to="/#modelos"
                className="flex items-center justify-center w-full bg-[#2f2af0] hover:bg-[#251fd1] transition-colors text-white font-medium text-[17px] py-4 rounded-full shadow-[0_8px_24px_rgba(47,42,240,0.35)]"
              >
                Ver Más
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}