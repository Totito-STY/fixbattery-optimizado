import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { articles } from '../data/articles';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { useDocumentHead } from '../lib/useDocumentHead';

export default function BlogList() {
  useDocumentHead({
    title: 'Consejos y Guías para tu iPhone',
    description: 'Guías y consejos sobre baterías, pantallas y mantenimiento de iPhone: cuándo cambiar tu batería, repuestos originales vs. compatibles y más.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-[#fcfcfc] dark:bg-[#050505] min-h-screen transition-colors duration-300 overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#050505]/50 dark:to-[#050505] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          >
            Consejos y Guías
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Todo lo que necesitas saber sobre el cuidado y mantenimiento de tu iPhone.
          </motion.p>
        </div>

        <div className="space-y-6">
          {articles.map((article, idx) => (
            <motion.div 
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/consejos/${article.slug}`} className="block bg-gradient-to-br from-white to-gray-50 dark:from-[#111] dark:to-[#0a0a0a] border border-gray-200/60 dark:border-gray-800/80 rounded-3xl p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-[#141414] shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all group">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-apple-blue transition-colors">{article.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-base leading-relaxed">{article.excerpt}</p>
                <span className="inline-flex items-center text-apple-blue font-semibold text-sm">
                  Leer artículo <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
