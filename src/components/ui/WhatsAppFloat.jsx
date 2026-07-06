import { FaWhatsapp } from 'react-icons/fa';
import { buildWhatsAppLink } from '../../utils/contact.js';

/** Botón flotante de WhatsApp, visible en todo el recorrido de la página. */
export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
