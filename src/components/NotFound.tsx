import { Link } from 'react-router-dom';
import { Home, Battery, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { getWhatsAppLink, defaultMessage } from '../lib/whatsapp';
import { useDocumentHead } from '../lib/useDocumentHead';

export default function NotFound() {
  useDocumentHead({
    title: 'Página no encontrada',
    description: 'La página que buscas no existe o fue movida. Vuelve al inicio o revisa nuestro catálogo de baterías para iPhone.',
  });

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <span className="text-7xl md:text-8xl font-bold tracking-tight text-apple-dark dark:text-white">404</span>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-3">
          Esta página no existe
        </h1>
        <p className="text-apple-text dark:text-gray-400 font-medium mb-10">
          Puede que el enlace esté mal escrito o que la página se haya movido. Prueba con alguna de estas opciones:
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-apple-dark dark:bg-white text-white dark:text-apple-dark px-6 py-3.5 rounded-full font-semibold hover:bg-black dark:hover:bg-gray-200 transition-colors"
          >
            <Home className="w-5 h-5" /> Volver al inicio
          </Link>
          <Link
            to="/#modelos"
            className="inline-flex items-center justify-center gap-2 bg-apple-gray dark:bg-gray-800 text-apple-dark dark:text-white px-6 py-3.5 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Battery className="w-5 h-5" /> Ver catálogo de baterías
          </Link>
          <a
            href={getWhatsAppLink(defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa-green hover:opacity-90 text-white px-6 py-3.5 rounded-full font-semibold transition-opacity"
          >
            <MessageCircle className="w-5 h-5" /> Escribir por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
