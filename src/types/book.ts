//este type se basa en los DTO del backend

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  description: string | null;
  publicationYear: number | null;
  pages: number | null;
  price: number;
  coverUrl: string | null;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface PageResponse<T> {
  //es de tipo generico

  content: T[]; //asi se asignan los arreglos
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  hasNext: boolean;
}

/*
List<T> content,
        int page,
        int size,
        long totalElements,
        int totalPages,
        boolean hasNext
*/
