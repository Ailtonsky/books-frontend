import { useEffect, useState } from 'react';
import { getBooks } from '../../api/books';
import type { Book } from '../../types/Book';
import BookCard from './BookCard';

interface BookGridProps {
  categoryId: number | null;
}

export default function BookGrid({ categoryId }: BookGridProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cada vez que cambia la categoría, se empieza desde la página 0 y se reemplaza la lista
  useEffect(() => {
    getBooks(0, categoryId)
      .then((result) => {
        setBooks(result.content);
        setPage(0);
        setHasNext(result.hasNext);
        setError(null);
      })
      .catch((e: Error) => setError(e.message));
  }, [categoryId]);

  // Cargar mas pide la pag siguiente y la agrega a los libros que ya se muestran
  function loadMore() {
    const nextPage = page + 1;
    getBooks(nextPage, categoryId)
      .then((result) => {
        setBooks([...books, ...result.content]);
        setPage(nextPage);
        setHasNext(result.hasNext);
      })
      .catch((e: Error) => setError(e.message));
  }

  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-blue-dark">
        Catálogo
      </h2>

      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {hasNext && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={loadMore}
            className="rounded-full bg-green px-6 py-3 font-semibold text-blue-dark hover:opacity-90"
          >
            Cargar más
          </button>
        </div>
      )}
    </section>
  );
}
