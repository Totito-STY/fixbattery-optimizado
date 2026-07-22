import { motion } from 'motion/react';
import appleLogoAvif from '../assets/images/logo-apple.avif';
import appleLogoWebp from '../assets/images/logo-apple.webp';
import Picture from './Picture';

export default function PremiumBanner() {
  return (
    <section className="pt-16 pb-0 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-300 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="mt-6 mb-0 sm:my-12 flex flex-col justify-center items-center gap-4"
      >
        <Picture
          avif={appleLogoAvif}
          webp={appleLogoWebp}
          alt="Logo de Apple"
          className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm opacity-90 dark:opacity-100 dark:invert"
        />
        <p className="text-xs text-center text-apple-text dark:text-gray-500 max-w-xs">
          Servicio técnico independiente. FixBattery no está afiliado, patrocinado ni autorizado por Apple Inc.
        </p>
      </motion.div>
    </section>
  );
}
