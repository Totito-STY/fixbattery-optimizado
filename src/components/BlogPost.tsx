import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { articles } from '../data/articles';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';
import { getWhatsAppLink } from '../lib/whatsapp';
import { useDocumentHead } from '../lib/useDocumentHead';
import { sanitizeHtml } from '../lib/sanitizeHtml';

const DiagnosticoSvg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="30" y="20" width="40" height="60" rx="6" />
    <path d="M 45 40 L 50 45 L 60 35" stroke="#34c759" strokeWidth="3" />
    <circle cx="50" cy="65" r="12" strokeDasharray="4 4" />
    <path d="M 50 59 L 50 65 L 54 69" strokeWidth="1.5" />
  </svg>
);

const ComparacionSvg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="20" y="30" width="25" height="40" rx="2" />
    <path d="M 32 30 L 32 25" strokeWidth="3" />
    
    <path d="M 50 35 L 50 65" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    
    <rect x="55" y="30" width="25" height="40" rx="2" stroke="#0071e3" />
    <path d="M 67 30 L 67 25" stroke="#0071e3" strokeWidth="3" />
    <circle cx="67" cy="50" r="4" fill="#0071e3" stroke="none" opacity="0.2" />
  </svg>
);

const CuidadosSvg = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-gray-800 dark:text-gray-200 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 35 70 C 35 40 65 40 65 70" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="50" cy="55" r="15" />
    <path d="M 45 55 L 55 55 M 50 50 L 50 60" strokeWidth="1.5" />
    <path d="M 50 25 L 50 30 M 35 32 L 38 35 M 65 32 L 62 35" strokeWidth="1.5" />
  </svg>
);

const getIllustration = (slug: string) => {
  switch (slug) {
    case 'como-saber-si-cambiar-bateria-iphone':
      return <DiagnosticoSvg />;
    case 'bateria-original-vs-reemplazo':
      return <ComparacionSvg />;
    case 'como-cuidar-bateria-iphone':
      return <CuidadosSvg />;
    default:
      return null;
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.slug === slug);

  useDocumentHead({
    title: article?.title ?? 'Artículo no encontrado',
    description: article?.excerpt,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-24">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Artículo no encontrado</h2>
        <button onClick={() => navigate('/consejos')} className="text-apple-blue hover:underline font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Volver a consejos
        </button>
      </div>
    );
  }

  return (
    <article className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-[#fcfcfc] dark:bg-[#050505] min-h-screen transition-colors duration-300 overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-[#050505]/50 dark:to-[#050505] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <button 
          onClick={() => navigate('/consejos')}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:hover:text-white mb-10 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Volver a consejos
        </button>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
        >
          {article.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
        >
          {article.excerpt}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="w-full h-48 sm:h-64 mb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#181818] dark:to-[#0a0a0a] rounded-3xl p-6 border border-gray-200/50 dark:border-gray-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.4)] flex items-center justify-center relative overflow-hidden"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32">
            {getIllustration(article.slug)}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="blog-content space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 dark:[&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>strong]:text-gray-900 dark:[&>strong]:text-white"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-white to-gray-50 dark:from-[#111] dark:to-[#0a0a0a] border border-gray-200/60 dark:border-gray-800/80 rounded-3xl text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">¿Tu iPhone necesita batería nueva?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Revisa nuestro catálogo de modelos o escríbenos directamente para cotizar tu cambio de batería.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#modelos" className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              Ver precios
            </Link>
            <a 
              href={getWhatsAppLink('Hola! Estuve leyendo sus consejos y me gustaría cotizar un cambio de batería.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wa-green hover:bg-wa-green-hover text-white px-8 py-3.5 rounded-full font-bold transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-5 h-5" /> Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
