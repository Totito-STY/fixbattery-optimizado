export const WHATSAPP_NUMBER = '56957098231';

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const defaultMessage = 'Hola, vengo de FixBattery y quiero cotizar la instalación de la batería AmpSentrix original para mi iPhone.';

export const getModelMessage = (modelName: string) => {
  return `Hola, vengo de FixBattery y quiero cotizar la instalación de la batería AmpSentrix original para mi ${modelName}.`;
};

// Arma el mensaje por defecto de WhatsApp según la sección del sitio en la
// que se encuentra la persona (batería, pantalla o genérico), para que el
// botón flotante y el del navbar no siempre hablen de baterías aunque el
// usuario esté navegando por otra sección.
export const getContextualMessage = (pathname: string) => {
  if (pathname.startsWith('/pantalla')) {
    return 'Hola, vengo de FixBattery y quiero cotizar el cambio de pantalla para mi iPhone.';
  }
  if (pathname.startsWith('/bateria')) {
    return defaultMessage;
  }
  if (pathname.startsWith('/consejos')) {
    return 'Hola! Estuve leyendo sus consejos y me gustaría cotizar un cambio de batería.';
  }
  return defaultMessage;
};
