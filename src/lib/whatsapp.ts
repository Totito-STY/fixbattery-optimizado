export const WHATSAPP_NUMBER = '56957098231';

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const defaultMessage = 'Hola, vengo de FixBattery y quiero cotizar la instalación de la batería AmpSentrix original para mi iPhone.';

export const getModelMessage = (modelName: string) => {
  return `Hola, vengo de FixBattery y quiero cotizar la instalación de la batería AmpSentrix original para mi ${modelName}.`;
};
