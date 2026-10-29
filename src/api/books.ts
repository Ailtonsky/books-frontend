import type { PageResponse } from '../types/PageResponse';
import type { Book } from '../types/Book';
import type { Category } from '../types/Category';

const API_URL = import.meta.env.VITE_API_URL;

//agregue Promise<PageResponse<Book>> para definir el tipo de respuesta y aprovechar mi interface generica
export async function getBooks(
  page: number,
  categoryId: number | null,
): Promise<PageResponse<Book>> {
  let url = `${API_URL}/books?page=${page}`;
  if (categoryId !== null) {
    url = url + `&categoryId=${categoryId}`;
  }

  const response = await fetch(url);
  //por si falla el server o la conexion del api
  if (!response.ok) {
    throw new Error(`Error al obtener los libros: HTTP ${response.status}`);
  }
  return response.json() as Promise<PageResponse<Book>>;
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${API_URL}/categories`);

  if (!response.ok) {
    throw new Error(`Error al obtener las categorías: HTTP ${response.status}`);
  }

  return response.json();
}
