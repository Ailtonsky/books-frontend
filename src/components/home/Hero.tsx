// Franja oscura principal
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-blue-dark px-6 pt-20 pb-28 text-center">
      <h1 className="text-4xl font-bold text-green md:text-5xl">
        Bienvenido a BookHub
      </h1>

      <p className="max-w-xl text-white">Explora el catálogo de libros.</p>

      <a
        href="#catalogo"
        className="mt-2 rounded-full bg-green px-6 py-3 font-semibold text-blue-dark hover:opacity-90"
      >
        Ver catálogo
      </a>
    </section>
  );
}
