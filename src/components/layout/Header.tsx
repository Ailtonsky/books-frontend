export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-3 sm:flex-row sm:justify-between">
        <a href="/" className="text-xl font-bold text-white">
          BookHub
        </a>

        <ul className="flex gap-4 text-sm text-white sm:gap-6 sm:text-base">
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
