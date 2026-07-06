import {
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
  HiOutlineBriefcase,
  HiOutlineScale,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
} from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { PRACTICE_AREAS } from '../../config/site.config.js';

const ICONS = {
  building: HiOutlineOfficeBuilding,
  shield: HiOutlineShieldCheck,
  briefcase: HiOutlineBriefcase,
  scale: HiOutlineScale,
  people: HiOutlineUserGroup,
  bulb: HiOutlineLightBulb,
};

function AreaCard({ area }) {
  const ref = useScrollReveal();
  const Icon = ICONS[area.icon] ?? HiOutlineScale;
  return (
    <article ref={ref} className="area-card reveal">
      <div className="area-card__icon">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="area-card__title">{area.title}</h3>
      <p className="area-card__text">{area.description}</p>
    </article>
  );
}

export default function PracticeAreas() {
  return (
    <section id="areas" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Áreas de práctica"
          title="Especialistas en cada frente jurídico"
          intro="Un equipo senior dedicado por área. Tu caso nunca se delega a quien no domina la materia."
        />
        <div className="areas__grid">
          {PRACTICE_AREAS.map((area) => (
            <AreaCard key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
