/** Logotipo: balanza de la justicia trazada en línea (SVG propio, sin dependencias). */
export default function BrandMark({ size = 30, opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="#76ABAE"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity }}
      aria-hidden="true"
    >
      <path d="M32 8v44" />
      <path d="M14 18h36" />
      <path d="M14 18l-8 16h16l-8-16z" />
      <path d="M50 18l-8 16h16l-8-16z" />
      <path d="M22 56h20" stroke="#EEEEEE" />
    </svg>
  );
}
