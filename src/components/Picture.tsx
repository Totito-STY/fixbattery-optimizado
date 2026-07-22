import type { ImgHTMLAttributes } from 'react';

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  avif: string;
  webp: string;
  alt: string;
}

/**
 * Sirve la imagen en AVIF (mejor compresión) con una versión WebP como
 * respaldo automático para navegadores o webviews que todavía no soportan
 * AVIF (por ejemplo, algunos navegadores integrados de apps sociales).
 */
export default function Picture({ avif, webp, alt, ...imgProps }: PictureProps) {
  return (
    <picture className="block w-full h-full">
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img src={webp} alt={alt} {...imgProps} />
    </picture>
  );
}
