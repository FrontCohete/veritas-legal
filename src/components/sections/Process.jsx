import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { PROCESS_STEPS } from '../../config/site.config.js';

export default function Process() {
  const ref = useScrollReveal();
  return (
    <section id="proceso" className="section section--slate">
      <div className="container">
        <SectionHeading
          eyebrow="Método de trabajo"
          title="Un proceso claro, de principio a resolución"
          intro="El alto rendimiento no es improvisación: es un método que aplicamos en cada expediente."
        />
        <div ref={ref} className="process__grid reveal">
          {PROCESS_STEPS.map((step) => (
            <div className="process-step" key={step.title}>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
