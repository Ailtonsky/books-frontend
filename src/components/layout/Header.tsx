export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="text-xl font-bold text-blue-dark">
          BookHub
        </a>

        <ul className="flex gap-6 text-green">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="#catalogo">Catálogo</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
