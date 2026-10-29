// Sección de galería del wireframe (los 4 cuadros debajo del catálogo)
const items = [
  { title: 'Catálogo variado', text: 'Libros de distintos temas' },
  {
    title: 'Búsqueda rápida',
    text: 'Busca de manera rápida tus libros favoritos',
  },
  {
    title: 'Explora sin registro',
    text: 'Puedes explorar el catálogo sin registrarte',
  },
  { title: 'Nuevos libros', text: 'Traemos nuevos libros cada semana' },
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 className="mb-8 text-3xl font-bold text-blue-dark">Elige BookHub</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex min-h-48 flex-col items-center justify-center gap-2 rounded-xl bg-green p-6"
          >
            <h3 className="text-xl font-bold text-blue-dark">{item.title}</h3>
            <p className="text-blue-dark">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
