import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { useDocumentHead } from '../lib/useDocumentHead';

export default function PrivacyPolicy() {
  useDocumentHead({
    title: 'Política de Privacidad',
    description: 'Política de privacidad y tratamiento de datos personales de FixBattery.',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-apple-text dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Política de Privacidad</h1>
        <p className="text-sm text-apple-text dark:text-gray-500 mb-10">Última actualización: julio de 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            En FixBattery valoramos tu privacidad. Este documento explica qué información recopilamos cuando
            nos contactas o utilizas nuestro sitio web, y cómo la utilizamos.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">1. Información que recopilamos</h2>
          <p>
            Cuando nos escribes por WhatsApp, Instagram o a través de nuestro sitio, podemos recibir tu nombre,
            número de contacto, el modelo de tu equipo y los detalles de la consulta que nos hagas. No solicitamos
            contraseñas ni códigos de tu Apple ID en ningún caso.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">2. Uso de la información</h2>
          <p>
            Usamos estos datos únicamente para responder tu consulta, coordinar el servicio técnico y, si nos
            autorizas, hacer seguimiento posterior sobre la garantía de tu reparación. No vendemos ni compartimos
            tu información con terceros con fines publicitarios.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">3. Cookies y navegación</h2>
          <p>
            Nuestro sitio puede utilizar almacenamiento local del navegador (por ejemplo, para recordar tu
            preferencia de modo claro u oscuro). No utilizamos cookies de rastreo publicitario de terceros.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">4. Tus derechos</h2>
          <p>
            De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada, puedes solicitarnos en
            cualquier momento el acceso, la rectificación o la eliminación de los datos personales que nos
            hayas entregado, escribiéndonos por los canales de contacto habituales del sitio.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">5. Contacto</h2>
          <p>
            Si tienes dudas sobre esta política, puedes escribirnos por WhatsApp o Instagram desde los
            botones de contacto disponibles en el sitio.
          </p>
        </div>
      </div>
    </section>
  );
}
