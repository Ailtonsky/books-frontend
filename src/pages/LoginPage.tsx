import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { user, saveSession } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" replace />;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault(); // pars el formulario no recargue la página
    setError(null);

    login(username, password)
      .then((data) => {
        saveSession(data);
        navigate('/'); // manda al inicio despeus de iniciar seion
      })
      .catch((e: Error) => setError(e.message));
  }

  return (
    <section className="flex justify-center px-6 py-20">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col gap-4 rounded-xl bg-white p-8 shadow"
      >
        <h1 className="text-center text-2xl font-bold text-blue-dark">
          Iniciar sesión
        </h1>

        <label className="flex flex-col gap-1 text-sm font-semibold text-blue-dark">
          Usuario
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="rounded-lg border border-gray-300 px-3 py-2 font-normal"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-semibold text-blue-dark">
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-lg border border-gray-300 px-3 py-2 font-normal"
          />
        </label>

        {error && <p className="text-center text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="rounded-full bg-green py-3 font-semibold text-blue-dark hover:opacity-90"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}
