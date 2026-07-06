import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import BrandMark from '../ui/BrandMark.jsx';
import { SITE } from '../../config/site.config.js';
import { buildWhatsAppLink } from '../../utils/contact.js';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__watermark" aria-hidden="true">
        <BrandMark size="100%" />
      </div>

      <div className="container">
        <div className="hero__content">
          <p className="eyebrow">Bufete multidisciplinario · desde {SITE.yearFounded}</p>
          <h1 className="hero__title">
            Cada caso se gana <em>antes</em> de llegar al tribunal.
          </h1>
          <p className="hero__subtitle">
            En {SITE.name} preparamos cada asunto con rigor de alto rendimiento:
            estrategia, evidencia y ejecución impecable. Por eso el 96% de
            nuestros casos concluye a favor de nuestros clientes.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="btn btn--primary">
              <HiOutlineMail aria-hidden="true" /> Agendar consulta
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <FaWhatsapp aria-hidden="true" /> Hablar por WhatsApp
            </a>
          </div>
          <p className="hero__note">
            <span className="hero__note-dot" aria-hidden="true"></span>
            Diagnóstico inicial sin costo · respuesta en menos de 48 horas
          </p>
        </div>
      </div>
    </section>
  );
}
