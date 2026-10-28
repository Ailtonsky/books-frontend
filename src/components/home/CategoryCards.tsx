import { useEffect, useState } from 'react';
import { getCategories } from '../../api/books';
import type { Category } from '../../types/book';

export default function CategoryCards() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((e: Error) => setError(e.message));
  }, []);

  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <section className="-mt-16 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className="rounded-xl bg-green p-6 font-bold text-blue-dark shadow hover:opacity-90"
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
}
