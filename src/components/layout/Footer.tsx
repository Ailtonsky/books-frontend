export default function Footer() {
  return (
    <footer className="bg-blue-dark shadow">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6">
        <a href="/" className="text-xl font-bold text-green">
          BookHub
        </a>

        <ul className="flex gap-6 text-green">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="#catalogo">Catálogo</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
