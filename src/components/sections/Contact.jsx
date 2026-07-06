import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineClock,
} from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { SITE, PRACTICE_AREAS } from '../../config/site.config.js';
import {
  buildMailtoLink,
  buildWhatsAppLink,
  buildWhatsAppMessageFromForm,
} from '../../utils/contact.js';

const INITIAL_FORM = { name: '', email: '', area: '', message: '' };

export default function Contact() {
  const revealRef = useScrollReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const validate = ({ requireEmail }) => {
    if (!form.name.trim() || !form.message.trim()) {
      setError('Escribe tu nombre y una breve descripción de tu caso.');
      return false;
    }
    if (requireEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Ingresa un correo válido para que podamos responderte.');
      return false;
    }
    return true;
  };

  const handleEmail = (event) => {
    event.preventDefault();
    if (!validate({ requireEmail: true })) return;
    window.location.href = buildMailtoLink(form);
  };

  const handleWhatsApp = () => {
    if (!validate({ requireEmail: false })) return;
    const link = buildWhatsAppLink(buildWhatsAppMessageFromForm(form));
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="section section--slate">
      <div className="container">
        <SectionHeading
          eyebrow="Contacto"
          title="Cuéntanos tu caso hoy"
          intro="Redacta tu consulta una sola vez y elige cómo enviarla: por correo electrónico o directamente por WhatsApp."
        />

        <div ref={revealRef} className="contact__layout reveal">
          <div>
            <ul className="contact__info-list">
              <li className="contact__info-item">
                <HiOutlineMail className="contact__info-icon" aria-hidden="true" />
                <div>
                  <p className="contact__info-label">Correo</p>
                  <a className="contact__info-value" href={`mailto:${SITE.contact.email}`}>
                    {SITE.contact.email}
                  </a>
                </div>
              </li>
              <li className="contact__info-item">
                <HiOutlinePhone className="contact__info-icon" aria-hidden="true" />
                <div>
                  <p className="contact__info-label">Teléfono</p>
                  <p className="contact__info-value">{SITE.contact.phoneDisplay}</p>
                </div>
              </li>
              <li className="contact__info-item">
                <HiOutlineLocationMarker className="contact__info-icon" aria-hidden="true" />
                <div>
                  <p className="contact__info-label">Oficinas</p>
                  <p className="contact__info-value">{SITE.contact.address}</p>
                </div>
              </li>
              <li className="contact__info-item">
                <HiOutlineClock className="contact__info-icon" aria-hidden="true" />
                <div>
                  <p className="contact__info-label">Horario</p>
                  <p className="contact__info-value">{SITE.contact.schedule}</p>
                </div>
              </li>
            </ul>

            <div className="contact__whatsapp-cta">
              <a
                className="btn btn--whatsapp"
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" /> Escribir directo por WhatsApp
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleEmail} noValidate>
            <div className="contact-form__row">
              <div className="form-field">
                <label htmlFor="contact-name">Nombre completo *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Correo electrónico *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-area">Área de interés</label>
              <select
                id="contact-area"
                name="area"
                value={form.area}
                onChange={handleChange}
              >
                <option value="">Selecciona un área (opcional)</option>
                {PRACTICE_AREAS.map((area) => (
                  <option key={area.id} value={area.title}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Describe tu caso *</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Cuéntanos brevemente qué sucedió y qué necesitas resolver…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <p className="contact-form__error" role="alert">
                {error}
              </p>
            )}

            <div className="contact-form__actions">
              <button type="submit" className="btn btn--primary">
                <HiOutlineMail aria-hidden="true" /> Enviar por correo
              </button>
              <button type="button" className="btn btn--whatsapp" onClick={handleWhatsApp}>
                <FaWhatsapp aria-hidden="true" /> Enviar por WhatsApp
              </button>
            </div>

            <p className="contact-form__hint">
              Al enviar por correo se abrirá tu aplicación de email con el
              mensaje ya redactado. Tu información es confidencial y está
              protegida por el secreto profesional.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
