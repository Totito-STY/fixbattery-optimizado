import { useEffect } from 'react';

const DEFAULT_TITLE = 'FixBattery | Cambio de Baterías Ampsentrix para iPhone';
const DEFAULT_DESCRIPTION =
  'Cambio de batería para iPhone con repuestos Ampsentrix premium. Baterías Ampsentrix de alta capacidad en Santiago. Instalación express y garantía de 6 meses.';

function setMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

interface DocumentHeadOptions {
  title?: string;
  description?: string;
}

/**
 * Actualiza el <title> y las meta descripciones/Open Graph/Twitter de la
 * página actual. Al desmontar, restaura los valores por defecto del sitio
 * para que la siguiente ruta no herede metadatos de la anterior.
 */
export function useDocumentHead({ title, description }: DocumentHeadOptions) {
  useEffect(() => {
    const finalTitle = title ? `${title} | FixBattery` : DEFAULT_TITLE;
    const finalDescription = description || DEFAULT_DESCRIPTION;

    document.title = finalTitle;
    setMetaByName('description', finalDescription);
    setMetaByProperty('og:title', finalTitle);
    setMetaByProperty('og:description', finalDescription);
    setMetaByName('twitter:title', finalTitle);
    setMetaByName('twitter:description', finalDescription);

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaByName('description', DEFAULT_DESCRIPTION);
      setMetaByProperty('og:title', DEFAULT_TITLE);
      setMetaByProperty('og:description', DEFAULT_DESCRIPTION);
      setMetaByName('twitter:title', DEFAULT_TITLE);
      setMetaByName('twitter:description', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
