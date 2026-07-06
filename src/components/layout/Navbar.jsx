import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import BrandMark from '../ui/BrandMark.jsx';
import { SITE } from '../../config/site.config.js';

const LINKS = [
  { href: '#areas', label: 'Áreas de práctica' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#testimonios', label: 'Clientes' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Navegación principal">
        <a href="#inicio" className="navbar__brand">
          <BrandMark />
          {SITE.name}
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        <ul id="nav-links" className={`navbar__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="navbar__link"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="btn btn--primary"
              href="#contacto"
              onClick={() => setOpen(false)}
            >
              Agendar consulta
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
