import imgScreen1Avif from '../assets/images/cambio-de-pantalla-1.avif';
import imgScreen1Webp from '../assets/images/cambio-de-pantalla-1.webp';
import imgScreen2Avif from '../assets/images/cambio-de-pantalla-2.avif';
import imgScreen2Webp from '../assets/images/cambio-de-pantalla-2.webp';

export interface ScreenModel {
  id: string;
  name: string;
  series: string;
  category: 'base' | 'pro' | 'mini';
  priceScreenOnly: number;
  priceWithInstall: number;
  images: { avif: string; webp: string }[];
}

const defaultImages = [
  { avif: imgScreen1Avif, webp: imgScreen1Webp },
  { avif: imgScreen2Avif, webp: imgScreen2Webp },
];

export const screenModels: ScreenModel[] = [
  { id: '15-pro-max', name: 'iPhone 15 Pro Max', series: '15', category: 'pro', priceScreenOnly: 200000, priceWithInstall: 250000, images: defaultImages },
  { id: '15-pro', name: 'iPhone 15 Pro', series: '15', category: 'pro', priceScreenOnly: 200000, priceWithInstall: 250000, images: defaultImages },
  { id: '15-plus', name: 'iPhone 15 Plus', series: '15', category: 'base', priceScreenOnly: 150000, priceWithInstall: 200000, images: defaultImages },
  { id: '15', name: 'iPhone 15', series: '15', category: 'base', priceScreenOnly: 150000, priceWithInstall: 200000, images: defaultImages },
  
  { id: '14-pro-max', name: 'iPhone 14 Pro Max', series: '14', category: 'pro', priceScreenOnly: 180000, priceWithInstall: 220000, images: defaultImages },
  { id: '14-pro', name: 'iPhone 14 Pro', series: '14', category: 'pro', priceScreenOnly: 180000, priceWithInstall: 220000, images: defaultImages },
  { id: '14-plus', name: 'iPhone 14 Plus', series: '14', category: 'base', priceScreenOnly: 130000, priceWithInstall: 180000, images: defaultImages },
  { id: '14', name: 'iPhone 14', series: '14', category: 'base', priceScreenOnly: 130000, priceWithInstall: 180000, images: defaultImages },
  
  { id: '13-pro-max', name: 'iPhone 13 Pro Max', series: '13', category: 'pro', priceScreenOnly: 150000, priceWithInstall: 200000, images: defaultImages },
  { id: '13-pro', name: 'iPhone 13 Pro', series: '13', category: 'pro', priceScreenOnly: 150000, priceWithInstall: 200000, images: defaultImages },
  { id: '13', name: 'iPhone 13', series: '13', category: 'base', priceScreenOnly: 100000, priceWithInstall: 150000, images: defaultImages },
  { id: '13-mini', name: 'iPhone 13 mini', series: '13', category: 'mini', priceScreenOnly: 100000, priceWithInstall: 150000, images: defaultImages },
  
  { id: '12-pro-max', name: 'iPhone 12 Pro Max', series: '12', category: 'pro', priceScreenOnly: 120000, priceWithInstall: 160000, images: defaultImages },
  { id: '12-pro', name: 'iPhone 12 Pro', series: '12', category: 'pro', priceScreenOnly: 120000, priceWithInstall: 160000, images: defaultImages },
  { id: '12', name: 'iPhone 12', series: '12', category: 'base', priceScreenOnly: 90000, priceWithInstall: 130000, images: defaultImages },
  { id: '12-mini', name: 'iPhone 12 mini', series: '12', category: 'mini', priceScreenOnly: 90000, priceWithInstall: 130000, images: defaultImages },
  
  { id: '11-pro-max', name: 'iPhone 11 Pro Max', series: '11', category: 'pro', priceScreenOnly: 90000, priceWithInstall: 120000, images: defaultImages },
  { id: '11-pro', name: 'iPhone 11 Pro', series: '11', category: 'pro', priceScreenOnly: 90000, priceWithInstall: 120000, images: defaultImages },
  { id: '11', name: 'iPhone 11', series: '11', category: 'base', priceScreenOnly: 70000, priceWithInstall: 100000, images: defaultImages },
  
  { id: 'xs-max', name: 'iPhone XS Max', series: 'xs', category: 'pro', priceScreenOnly: 70000, priceWithInstall: 100000, images: defaultImages },
  { id: 'xs', name: 'iPhone XS', series: 'xs', category: 'pro', priceScreenOnly: 70000, priceWithInstall: 100000, images: defaultImages },
  { id: 'xr', name: 'iPhone XR', series: 'xs', category: 'base', priceScreenOnly: 60000, priceWithInstall: 90000, images: defaultImages },
];
