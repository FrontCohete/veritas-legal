import BrandMark from '../ui/BrandMark.jsx';
import { SITE } from '../../config/site.config.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">
          <BrandMark size={22} /> {SITE.name}
        </span>
        <p className="footer__legal">
          © {year} {SITE.name}. Todos los derechos reservados. El contenido,
          diseño y código de este sitio están protegidos por derechos de autor;
          su reproducción total o parcial sin autorización constituye una
          infracción legal.
        </p>
      </div>
    </footer>
  );
}
