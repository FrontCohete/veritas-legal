import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { STATS } from '../../config/site.config.js';

export default function Stats() {
  const ref = useScrollReveal();
  return (
    <section id="resultados" className="section stats section--slate">
      <div ref={ref} className="container reveal">
        <div className="stats__grid">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <p className="stat__value">{stat.value}</p>
              <p className="stat__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
