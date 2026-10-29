import type { Book } from '../../types/Book';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow">
      <div className="flex h-40 items-center justify-center bg-blue-dark text-5xl font-bold text-green">
        {book.title.charAt(0)}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-xs font-semibold text-green">
          {book.category.name}
        </span>
        <h3 className="text-lg font-bold text-blue-dark">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="mt-auto pt-2 font-bold text-blue-dark">$ {book.price}</p>
      </div>
    </article>
  );
}
