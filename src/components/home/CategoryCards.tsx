import { useEffect, useState } from 'react';
import { getCategories } from '../../api/books';
import type { Category } from '../../types/Category';
//aqui es la parte de los rectangulos verder donde se filtra y muestra por categoriaa
interface CategoryCardsProps {
  selectedId: number | null;
  onSelect: (id: number | null) => void;
}

export default function CategoryCards({
  selectedId,
  onSelect,
}: CategoryCardsProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((e: Error) => setError(e.message));
  }, []);

  function buttonClass(isSelected: boolean) {
    if (isSelected) {
      return 'rounded-xl bg-blue-dark p-6 font-bold text-green shadow ring-2 ring-green';
    } else {
      return 'rounded-xl bg-green p-6 font-bold text-blue-dark shadow hover:opacity-90';
    }
  }

  if (error) return <p className="p-4 text-center text-red-600">{error}</p>;

  return (
    <section className="-mt-16 px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-5">
        <button
          type="button"
          onClick={() => onSelect(null)}
          className={buttonClass(selectedId === null)}
        >
          Todas
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            className={buttonClass(category.id === selectedId)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </section>
  );
}
