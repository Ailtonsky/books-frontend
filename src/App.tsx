import { useEffect, useState } from 'react';
import { getBooks } from './api/books';
import type { Book } from './types/book';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBooks()
      .then((page) => setBooks(page.content))
      .catch((e: Error) => setError(e.message));
  }, []);

  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <>
      <Header />
      <ul className="p-4 space-y-1">
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> · {book.author}
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default App;
