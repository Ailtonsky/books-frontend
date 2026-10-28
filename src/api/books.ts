import type { PageResponse } from '../types/PageResponse';
import type { Book } from '../types/Book';

const API_URL = import.meta.env.VITE_API_URL;

//agregue Promise<PageResponse<Book>> para definir el tipo de respuesta y aprovechar mi interface generica
export async function getBooks(page: number): Promise<PageResponse<Book>> {
  const response = await fetch(`${API_URL}/books?page=${page}`);

  // por si falla el server o la conexion
  if (!response.ok) {
    throw new Error(`Error al obtener los libros: HTTP ${response.status}`);
  }

  return response.json() as Promise<PageResponse<Book>>;
}
