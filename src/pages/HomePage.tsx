import { useState } from 'react';
import Hero from '../components/home/Hero';
import CategoryCards from '../components/home/CategoryCards';
import BookGrid from '../components/books/BookGrid';
import Gallery from '../components/home/Gallery';

export default function HomePage() {
  // Estado compartido: CategoryCards lo cambia y BookGrid lo usa para filtrar
  const [categoryId, setCategoryId] = useState<number | null>(null);

  return (
    <>
      <Hero />
      <CategoryCards selectedId={categoryId} onSelect={setCategoryId} />
      <BookGrid categoryId={categoryId} />
      <Gallery />
    </>
  );
}
