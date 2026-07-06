
export const SITE = {
  name: 'Veritas Legal',
  tagline: 'La verdad, bien defendida.',
  yearFounded: 2004,

  // Contacto ────────────────────────────────────────────────
  contact: {
    email: 'contacto@veritaslegal.mx',
    phoneDisplay: '+52 55 0000 0000',
    // Número de WhatsApp en formato internacional SIN "+", espacios ni guiones
    whatsappNumber: '525500000000',
    address: 'Paseo de la Reforma 000, Piso 12, CDMX',
    schedule: 'Lun – Vie · 9:00 – 19:00 h',
  },

  // Mensajes predeterminados ────────────────────────────────
  messages: {
    whatsappDefault:
      'Hola, Veritas Legal. Me gustaría agendar una consulta sobre mi caso.',
    emailSubjectPrefix: '[Consulta Web]',
  },
};

// Métricas de rendimiento (sección de resultados) ───────────
export const STATS = [
  { value: '96%', label: 'Casos resueltos favorablemente' },
  { value: '2,400+', label: 'Litigios concluidos' },
  { value: '20', label: 'Años de trayectoria' },
  { value: '48 h', label: 'Respuesta máxima a nuevos casos' },
];

// Áreas de práctica ─────────────────────────────────────────
export const PRACTICE_AREAS = [
  {
    id: 'corporativo',
    icon: 'building',
    title: 'Derecho Corporativo',
    description:
      'Constitución de sociedades, fusiones y adquisiciones, gobierno corporativo y contratos mercantiles de alta complejidad.',
  },
  {
    id: 'penal',
    icon: 'shield',
    title: 'Defensa Penal',
    description:
      'Representación estratégica en todas las etapas del proceso penal, desde la investigación inicial hasta el amparo.',
  },
  {
    id: 'laboral',
    icon: 'briefcase',
    title: 'Derecho Laboral',
    description:
      'Defensa patronal y del trabajador, negociación colectiva, cumplimiento normativo y litigio ante juntas y tribunales.',
  },
  {
    id: 'fiscal',
    icon: 'scale',
    title: 'Derecho Fiscal',
    description:
      'Planeación fiscal preventiva, defensa ante auditorías y litigio contencioso administrativo frente a la autoridad.',
  },
  {
    id: 'familiar',
    icon: 'people',
    title: 'Derecho Familiar',
    description:
      'Divorcios, custodia, pensiones y sucesiones, gestionados con la discreción y sensibilidad que cada familia merece.',
  },
  {
    id: 'propiedad-intelectual',
    icon: 'bulb',
    title: 'Propiedad Intelectual',
    description:
      'Registro y defensa de marcas, patentes y derechos de autor. Protección de activos intangibles en mercados globales.',
  },
];

// Testimonios ───────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      'Resolvieron en ocho meses un litigio corporativo que llevaba tres años estancado con otro despacho. Precisión absoluta.',
    author: 'Directora General, grupo industrial',
    area: 'Derecho Corporativo',
  },
  {
    quote:
      'Comunicación clara en cada etapa. Nunca tuve que perseguir a mi abogado para saber el estado de mi caso.',
    author: 'Cliente particular',
    area: 'Derecho Familiar',
  },
  {
    quote:
      'Su equipo fiscal nos evitó una contingencia millonaria detectando el riesgo antes de la auditoría. Trabajo preventivo real.',
    author: 'CFO, empresa de tecnología',
    area: 'Derecho Fiscal',
  },
];

// Proceso de trabajo ────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    title: 'Diagnóstico inicial',
    description:
      'Analizamos tu caso sin costo y en máximo 48 horas te entregamos una evaluación honesta de viabilidad.',
  },
  {
    title: 'Estrategia a medida',
    description:
      'Diseñamos la ruta jurídica óptima con escenarios, tiempos y costos claros desde el primer día.',
  },
  {
    title: 'Ejecución y seguimiento',
    description:
      'Litigamos o negociamos con reportes periódicos: siempre sabrás en qué etapa está tu asunto.',
  },
  {
    title: 'Resolución',
    description:
      'Cerramos el caso protegiendo tus intereses y documentamos todo para blindarte a futuro.',
  },
];
