import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { useDocumentHead } from '../lib/useDocumentHead';

export default function TermsOfService() {
  useDocumentHead({
    title: 'Términos y Condiciones',
    description: 'Términos y condiciones del servicio técnico de FixBattery.',
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

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Términos y Condiciones</h1>
        <p className="text-sm text-apple-text dark:text-gray-500 mb-10">Última actualización: julio de 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">1. Servicio</h2>
          <p>
            FixBattery ofrece un servicio técnico independiente de cambio de baterías y pantallas para
            iPhone, utilizando repuestos AmpSentrix y otros repuestos compatibles de alta calidad.
            No somos un proveedor de servicio autorizado por Apple Inc., ni utilizamos repuestos originales
            de fábrica salvo que se indique expresamente.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">2. Cotizaciones</h2>
          <p>
            Los precios publicados en el sitio son referenciales según el modelo del equipo. El valor final
            puede variar si, durante el diagnóstico presencial, se detectan daños adicionales o
            intervenciones previas no informadas por el cliente.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">3. Garantía</h2>
          <p>
            El servicio de instalación y el repuesto quedan cubiertos por una garantía de 6 meses contra
            defectos de fabricación o de instalación, salvo daños posteriores por golpes, humedad o
            intervención de terceros no autorizados.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">4. Responsabilidad</h2>
          <p>
            FixBattery no se hace responsable por la pérdida de datos almacenados en el equipo ni por fallas
            preexistentes no relacionadas con el componente reparado. Recomendamos respaldar tu información
            antes de dejar el equipo en servicio técnico.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">5. Mensaje de "pieza no original"</h2>
          <p>
            Al utilizar repuestos compatibles, es posible que tu iPhone muestre un mensaje de fábrica
            indicando que no puede verificar si la pieza instalada es original. Esto es una notificación
            informativa del sistema operativo y no afecta el funcionamiento del equipo.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">6. Legislación aplicable</h2>
          <p>
            Estos términos se rigen por la legislación chilena, incluyendo la Ley N° 19.496 sobre
            Protección de los Derechos de los Consumidores.
          </p>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white pt-2">7. Contacto</h2>
          <p>
            Ante cualquier consulta sobre estos términos, puedes escribirnos por los canales de contacto
            disponibles en el sitio.
          </p>
        </div>
      </div>
    </section>
  );
}
