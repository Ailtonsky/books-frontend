import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-blue-dark shadow">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-3 sm:flex-row sm:justify-between">
        <Link to="/" className="text-xl font-bold text-green">
          BookHub
        </Link>

        <ul className="flex items-center gap-4 text-sm text-green sm:gap-6 sm:text-base">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <a href="/#catalogo">Catálogo</a>
          </li>

          {user ? (
            <>
              <li>Hola, {user.username}</li>
              <li>
                <button
                  type="button"
                  onClick={logout}
                  className="hover:text-green"
                >
                  Salir
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
