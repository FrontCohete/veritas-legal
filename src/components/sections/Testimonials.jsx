import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { TESTIMONIALS } from '../../config/site.config.js';

function TestimonialCard({ item }) {
  const ref = useScrollReveal();
  return (
    <figure ref={ref} className="testimonial reveal">
      <blockquote className="testimonial__quote">{item.quote}</blockquote>
      <figcaption className="testimonial__meta">
        <p className="testimonial__author">{item.author}</p>
        <p className="testimonial__area">{item.area}</p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Clientes"
          title="La confianza se construye con resultados"
        />
        <div className="testimonials__grid">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.quote} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
