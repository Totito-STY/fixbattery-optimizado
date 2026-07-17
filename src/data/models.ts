export interface PhoneModel {
  id: string;
  name: string;
  series: string;
  category: 'base' | 'pro' | 'mini';
  priceBatteryOnly: number;
  priceWithInstall: number;
}

export const models: PhoneModel[] = [
  { id: '15-pro-max', name: 'iPhone 15 Pro Max', series: '15', category: 'pro', priceBatteryOnly: 45000, priceWithInstall: 65000 },
  { id: '15-pro', name: 'iPhone 15 Pro', series: '15', category: 'pro', priceBatteryOnly: 45000, priceWithInstall: 65000 },
  { id: '15-plus', name: 'iPhone 15 Plus', series: '15', category: 'base', priceBatteryOnly: 40000, priceWithInstall: 60000 },
  { id: '15', name: 'iPhone 15', series: '15', category: 'base', priceBatteryOnly: 40000, priceWithInstall: 60000 },
  
  { id: '14-pro-max', name: 'iPhone 14 Pro Max', series: '14', category: 'pro', priceBatteryOnly: 40000, priceWithInstall: 60000 },
  { id: '14-pro', name: 'iPhone 14 Pro', series: '14', category: 'pro', priceBatteryOnly: 40000, priceWithInstall: 60000 },
  { id: '14-plus', name: 'iPhone 14 Plus', series: '14', category: 'base', priceBatteryOnly: 35000, priceWithInstall: 55000 },
  { id: '14', name: 'iPhone 14', series: '14', category: 'base', priceBatteryOnly: 35000, priceWithInstall: 55000 },
  
  { id: '13-pro-max', name: 'iPhone 13 Pro Max', series: '13', category: 'pro', priceBatteryOnly: 35000, priceWithInstall: 55000 },
  { id: '13-pro', name: 'iPhone 13 Pro', series: '13', category: 'pro', priceBatteryOnly: 35000, priceWithInstall: 55000 },
  { id: '13', name: 'iPhone 13', series: '13', category: 'base', priceBatteryOnly: 30000, priceWithInstall: 50000 },
  { id: '13-mini', name: 'iPhone 13 mini', series: '13', category: 'mini', priceBatteryOnly: 30000, priceWithInstall: 50000 },
  
  { id: '12-pro-max', name: 'iPhone 12 Pro Max', series: '12', category: 'pro', priceBatteryOnly: 35000, priceWithInstall: 50000 },
  { id: '12-pro', name: 'iPhone 12 Pro', series: '12', category: 'pro', priceBatteryOnly: 35000, priceWithInstall: 50000 },
  { id: '12', name: 'iPhone 12', series: '12', category: 'base', priceBatteryOnly: 30000, priceWithInstall: 45000 },
  { id: '12-mini', name: 'iPhone 12 mini', series: '12', category: 'mini', priceBatteryOnly: 30000, priceWithInstall: 45000 },
  
  { id: '11-pro-max', name: 'iPhone 11 Pro Max', series: '11', category: 'pro', priceBatteryOnly: 30000, priceWithInstall: 45000 },
  { id: '11-pro', name: 'iPhone 11 Pro', series: '11', category: 'pro', priceBatteryOnly: 30000, priceWithInstall: 45000 },
  { id: '11', name: 'iPhone 11', series: '11', category: 'base', priceBatteryOnly: 25000, priceWithInstall: 40000 },
  
  { id: 'xs-max', name: 'iPhone XS Max', series: 'xs', category: 'pro', priceBatteryOnly: 25000, priceWithInstall: 35000 },
  { id: 'xs', name: 'iPhone XS', series: 'xs', category: 'pro', priceBatteryOnly: 25000, priceWithInstall: 35000 },
  { id: 'xr', name: 'iPhone XR', series: 'xs', category: 'base', priceBatteryOnly: 25000, priceWithInstall: 35000 },
];
