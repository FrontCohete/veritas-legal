import { SITE } from '../config/site.config.js';

/**
 * Construye un enlace mailto: con asunto y cuerpo pre-redactados.
 * @param {{name: string, email: string, area: string, message: string}} data
 * @returns {string} URL mailto lista para abrir el cliente de correo
 */
export function buildMailtoLink({ name, email, area, message }) {
  const subject = `${SITE.messages.emailSubjectPrefix} ${area || 'Consulta general'} — ${name}`;
  const body = [
    `Nombre: ${name}`,
    `Correo de contacto: ${email}`,
    `Área de interés: ${area || 'No especificada'}`,
    '',
    'Descripción del caso:',
    message,
    '',
    '—',
    'Mensaje enviado desde el sitio web de Veritas Legal.',
  ].join('\n');

  return `mailto:${SITE.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

/**
 * Construye un enlace de WhatsApp (wa.me) con mensaje pre-redactado.
 * @param {string} [customMessage] Mensaje opcional; usa el predeterminado si se omite.
 * @returns {string} URL de WhatsApp
 */
export function buildWhatsAppLink(customMessage) {
  const text = customMessage || SITE.messages.whatsappDefault;
  return `https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Genera el mensaje de WhatsApp a partir de los datos del formulario.
 */
export function buildWhatsAppMessageFromForm({ name, area, message }) {
  return [
    `Hola, Veritas Legal. Soy ${name}.`,
    `Área de interés: ${area || 'Consulta general'}.`,
    `Mi caso: ${message}`,
  ].join('\n');
}
