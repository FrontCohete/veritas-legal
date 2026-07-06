# Veritas Legal — Landing Page

Landing page para bufete de abogados de alto rendimiento. Construida con **React 18 + Vite**, diseño responsivo, paleta corporativa fija y contacto directo por **correo electrónico** y **WhatsApp**.

## Paleta de colores

| Token | Hex | Uso |
|---|---|---|
| `--color-ink` | `#222831` | Fondo principal |
| `--color-slate` | `#31363F` | Superficies y tarjetas |
| `--color-teal` | `#76ABAE` | Acento de marca, botones, enlaces |
| `--color-paper` | `#EEEEEE` | Texto principal |

Todos los colores viven en `src/styles/variables.css`. Cambiar la paleta completa toma un solo archivo.

## Estructura de directorios

```
veritas-legal-landing/
├── index.html                  # SEO, Open Graph, JSON-LD, frame-buster
├── vite.config.js              # base de GitHub Pages, sourcemaps off
├── package.json
├── DESPLIEGUE_GITHUB_PAGES.md  # guía paso a paso de despliegue
├── docs/
│   └── ARQUITECTURA_ANTICLONACION.md
├── public/
│   ├── robots.txt              # bloqueo de scrapers de clonado
│   ├── humans.txt              # marca de autoría
│   └── favicon.svg
└── src/
    ├── main.jsx                # punto de entrada + firma en consola
    ├── App.jsx                 # composición de secciones
    ├── config/
    │   └── site.config.js      # ⭐ ÚNICO archivo a editar para adaptar datos
    ├── utils/
    │   └── contact.js          # constructores de mailto: y wa.me
    ├── hooks/
    │   └── useScrollReveal.js  # animación de aparición accesible
    ├── styles/
    │   ├── variables.css       # tokens de diseño (paleta, tipografía)
    │   └── global.css          # estilos por sección + responsivo
    └── components/
        ├── layout/             # Navbar, Footer
        ├── sections/           # Hero, Stats, PracticeAreas, Process, Testimonials, Contact
        └── ui/                 # BrandMark, SectionHeading, WhatsAppFloat
```

## Cómo adaptarla (para el programador)

1. **Datos del bufete**: edita `src/config/site.config.js` — nombre, correo, teléfono, número de WhatsApp, áreas de práctica, métricas y testimonios. Ningún componente tiene datos "quemados".
2. **Colores**: `src/styles/variables.css`.
3. **SEO**: actualiza título, descripción, `canonical` y el JSON-LD en `index.html` (busca `TU-USUARIO`).
4. **Base de despliegue**: en `vite.config.js`, ajusta `base` al nombre real del repositorio.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # build de producción en /dist
npm run preview   # previsualizar el build
npm run deploy    # publicar en GitHub Pages (ver guía)
```

## Contacto por correo y WhatsApp

El formulario de la sección **Contacto** redacta el mensaje una sola vez y ofrece dos salidas:

- **Enviar por correo** → abre el cliente de email con asunto y cuerpo pre-redactados (`mailto:`), sin necesidad de backend.
- **Enviar por WhatsApp** → abre `wa.me` con el mensaje ya escrito hacia el número del bufete.

> Si más adelante se desea envío de correo *sin* abrir el cliente del usuario, se puede integrar [EmailJS](https://www.emailjs.com/) o [Formspree](https://formspree.io/) reemplazando `handleEmail` en `src/components/sections/Contact.jsx`. Ambos funcionan en sitios estáticos como GitHub Pages.

## Accesibilidad y rendimiento

- HTML semántico, etiquetas `aria-*`, foco visible.
- `prefers-reduced-motion` respetado en todas las animaciones.
- Sin frameworks de CSS pesados: solo tokens + CSS moderno.
- Bundle minificado, sin sourcemaps en producción.

## Anti-clonación

Ver `docs/ARQUITECTURA_ANTICLONACION.md` para la arquitectura completa de defensa (legal, técnica, SEO y de monitoreo) y qué medidas ya vienen implementadas en este código.
