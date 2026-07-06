import { useScrollReveal } from '../../hooks/useScrollReveal.js';

/**
 * Encabezado estándar de sección: eyebrow + título + introducción.
 */
export default function SectionHeading({ eyebrow, title, intro }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
