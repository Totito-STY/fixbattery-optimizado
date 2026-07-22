export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: 'como-saber-si-cambiar-bateria-iphone',
    title: '¿Cómo saber si tu iPhone necesita cambio de batería?',
    excerpt: 'Descubre los síntomas principales que indican que la batería de tu iPhone ya cumplió su ciclo útil y necesita ser reemplazada.',
    content: `
      <h2>1. Revisa la "Condición de la batería" en Ajustes</h2>
      <p>El primer paso es ir a <strong>Ajustes &gt; Batería &gt; Condición y recarga de la batería</strong>. Apple considera que una batería está en su estado óptimo si su capacidad máxima es superior al 80%. Si tu iPhone marca 79% o menos, es momento de pensar en un reemplazo. Además, si ves un mensaje que dice "Mantenimiento", el sistema operativo ya detectó una degradación significativa.</p>
      
      <h2>2. Se apaga de repente</h2>
      <p>¿Te ha pasado que tu iPhone tiene un 20% o 30% de carga y de repente se apaga como si estuviera en 0%? Este es un síntoma clásico de una batería desgastada que ya no puede suministrar la energía necesaria para los procesos exigentes del equipo.</p>
      
      <h2>3. Rendimiento lento y aplicaciones que tardan en abrir</h2>
      <p>Cuando la batería está muy degradada, el sistema de iOS entra en un modo de "gestión de rendimiento" para evitar apagones inesperados. Esto significa que tu iPhone se vuelve intencionalmente más lento. Si notas tirones, lentitud al abrir la cámara o al escribir, una batería nueva devolverá la fluidez original.</p>
      
      <h2>4. Tienes que cargarlo varias veces al día</h2>
      <p>Si la autonomía de tu equipo ya no te alcanza para llegar al final del día con un uso normal y te ves obligado a andar siempre con el cargador o una batería externa, tu batería original ya cumplió su ciclo útil.</p>
    `
  },
  {
    slug: 'bateria-original-vs-reemplazo',
    title: 'Batería Original vs. Reemplazo: ¿Cuál elegir para tu iPhone?',
    excerpt: 'Te explicamos las diferencias reales entre instalar una batería extraída de Apple y una alternativa premium certificada.',
    content: `
      <h2>La opción Original (Extraída / Autorizada)</h2>
      <p>Optar por una batería original directamente en una Apple Store o servicio autorizado garantiza que el sistema la reconozca al 100% y mantenga la lectura de la "Condición" nativa. Sin embargo, los tiempos de espera pueden ser largos, los requisitos de estado del equipo son estrictos (no te la cambian si tienes la pantalla trizada, por ejemplo) y el costo es el más alto del mercado.</p>
      
      <h2>Alternativas Premium (como AmpSentrix)</h2>
      <p>Existen fabricantes de repuestos de muy alta calidad que diseñan baterías con la misma, o incluso mayor capacidad (mAh) que las originales. AmpSentrix es una de las marcas más reconocidas por los servicios técnicos profesionales en todo el mundo. Ofrecen un buen rendimiento y cumplen con las normas internacionales de seguridad.</p>
      
      <h2>¿Qué pasa con el "Mensaje de pieza desconocida"?</h2>
      <p>Apple ha diseñado su sistema operativo (a partir del iPhone XS) para mostrar un mensaje de aviso si la batería no fue instalada por ellos, desactivando la lectura de la Condición en Ajustes. <strong>Esto no significa que la batería sea mala o no funcione bien</strong>. Es solo una limitación de software. Tu equipo funcionará perfectamente y recuperará su autonomía original.</p>
      
      <h2>Conclusión</h2>
      <p>Si buscas la mejor relación calidad-precio y un servicio rápido, una batería de reemplazo Premium como AmpSentrix es una opción excelente, segura y garantizada.</p>
    `
  },
  {
    slug: 'como-cuidar-bateria-iphone',
    title: '5 consejos para alargar la vida útil de la batería de tu iPhone',
    excerpt: 'Aplica estos simples hábitos diarios para evitar que la batería de tu teléfono se degrade prematuramente.',
    content: `
      <h2>1. Evita las temperaturas extremas</h2>
      <p>El peor enemigo de las baterías de iones de litio es el calor. Evita dejar tu iPhone al sol, dentro de un auto en verano o exponerlo a fuentes de calor directo. Cargar el teléfono mientras está muy caliente también acelera su degradación.</p>
      
      <h2>2. No lo dejes llegar al 0% frecuentemente</h2>
      <p>Las baterías modernas prefieren recargas parciales. Dejar que el equipo se apague por falta de batería somete las celdas a un estrés innecesario. Lo ideal es mantenerlo siempre entre el 20% y el 80%.</p>
      
      <h2>3. Activa la "Recarga optimizada"</h2>
      <p>Ve a <strong>Ajustes &gt; Batería &gt; Condición y recarga de la batería</strong> y activa la opción "Recarga optimizada". Esto permite que tu iPhone aprenda tu rutina de carga y espere a cargar más allá del 80% justo hasta que vayas a usarlo, reduciendo el desgaste.</p>
      
      <h2>4. Usa cargadores y cables certificados</h2>
      <p>No tienes que usar exclusivamente el cargador original de Apple, pero sí es vital que uses accesorios certificados (MFi - Made for iPhone) o de marcas reconocidas que aseguren un flujo de voltaje estable.</p>
      
      <h2>5. Ten cuidado con las fundas muy gruesas al cargar</h2>
      <p>Si notas que tu teléfono se calienta demasiado mientras lo cargas, intenta quitarle la funda. El exceso de calor atrapado puede degradar la química interna de la batería a largo plazo.</p>
    `
  }
];
