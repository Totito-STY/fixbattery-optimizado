const ALLOWED_TAGS = new Set([
  'P', 'H2', 'H3', 'H4', 'UL', 'OL', 'LI', 'STRONG', 'EM', 'B', 'I',
  'A', 'BR', 'SPAN', 'BLOCKQUOTE', 'CODE', 'PRE',
]);

const ALLOWED_ATTRS: Record<string, string[]> = {
  A: ['href', 'target', 'rel'],
};

function isSafeUrl(value: string) {
  const trimmed = value.trim().toLowerCase();
  return (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('/') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('mailto:')
  );
}

function sanitizeNode(node: Element) {
  // Recorremos una copia estática de la lista de hijos porque el árbol se
  // modifica durante el recorrido (se pueden eliminar o reemplazar nodos).
  Array.from(node.children).forEach((child) => {
    if (!ALLOWED_TAGS.has(child.tagName)) {
      // Etiqueta no permitida: conservamos su texto plano, descartamos el tag.
      const text = document.createTextNode(child.textContent || '');
      child.replaceWith(text);
      return;
    }

    const allowedAttrs = ALLOWED_ATTRS[child.tagName] || [];
    Array.from(child.attributes).forEach((attr) => {
      const name = attr.name.toLowerCase();
      const isEventHandler = name.startsWith('on');
      const isAllowed = allowedAttrs.includes(name);
      const hasUnsafeValue = name === 'href' && !isSafeUrl(attr.value);

      if (isEventHandler || !isAllowed || hasUnsafeValue) {
        child.removeAttribute(attr.name);
      }
    });

    if (child.tagName === 'A') {
      child.setAttribute('rel', 'noopener noreferrer');
    }

    sanitizeNode(child);
  });
}

/**
 * Sanitiza HTML antes de insertarlo con dangerouslySetInnerHTML: elimina
 * scripts, manejadores de eventos y etiquetas fuera de un allowlist.
 * Es una medida preventiva: hoy el contenido de los artículos es 100%
 * estático y controlado por el equipo, pero si en el futuro se conecta un
 * CMS o un editor externo, esta función evita que HTML/JS arbitrario se
 * inserte en la página.
 */
export function sanitizeHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  sanitizeNode(doc.body);
  return doc.body.innerHTML;
}
