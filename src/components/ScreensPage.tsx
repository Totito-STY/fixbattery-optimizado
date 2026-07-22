import PremiumBanner from './PremiumBanner';
import ScreenCatalog from './ScreenCatalog';
import { useDocumentHead } from '../lib/useDocumentHead';

export default function ScreensPage() {
  useDocumentHead({
    title: 'Cambio de Pantalla para iPhone',
    description: 'Cambio de pantalla para iPhone con instalación profesional en Santiago. Precios por modelo y garantía de 6 meses.',
  });

  return (
    <div className="pt-20">
      <PremiumBanner />
      <ScreenCatalog />
    </div>
  );
}
