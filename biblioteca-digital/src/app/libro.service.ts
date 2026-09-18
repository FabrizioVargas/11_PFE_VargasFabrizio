import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

export interface Libro { key: string; title: string; author: string; genre?: string; year?: number; coverUrl?: string; }
interface OpenLibraryResponse { docs: Array<{ key: string; title: string; author_name?: string[]; subject?: string[]; first_publish_year?: number; cover_i?: number }>; }

@Injectable({ providedIn: 'root' })
export class LibroService {
  private readonly http = inject(HttpClient);
  private readonly searchUrl = 'https://openlibrary.org/search.json';
  private readonly registerUrl = 'https://jsonplaceholder.typicode.com/posts';
  private readonly localBooksKey = 'biblioteca-digital-libros';

  getBooks(query: string): Observable<Libro[]> {
    return this.http.get<OpenLibraryResponse>(this.searchUrl, { params: { q: query, limit: 6, fields: 'key,title,author_name,subject,first_publish_year,cover_i' } }).pipe(
      map((response) => {
        const remoteBooks = response.docs.map((book) => ({ key: book.key, title: book.title, author: book.author_name?.[0] ?? 'Autor desconocido', genre: book.subject?.[0] ?? 'Sin género', year: book.first_publish_year, coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : undefined }));
        const normalizedQuery = query.trim().toLowerCase();
        const localBooks = this.readLocalBooks().filter((book) => !normalizedQuery || `${book.title} ${book.author} ${book.genre}`.toLowerCase().includes(normalizedQuery));
        return [...localBooks, ...remoteBooks];
      }),
    );
  }

  createBook(book: Partial<Libro>): Observable<Libro> {
    const createdBook: Libro = { key: `local-${Date.now()}`, title: book.title ?? '', author: book.author ?? '', genre: book.genre ?? 'Sin género', year: book.year };
    return this.http.post(this.registerUrl, { title: book.title, author: book.author, genre: book.genre, year: book.year }).pipe(
      map(() => createdBook),
      tap(() => localStorage.setItem(this.localBooksKey, JSON.stringify([createdBook, ...this.readLocalBooks()]))),
    );
  }

  private readLocalBooks(): Libro[] {
    try { return JSON.parse(localStorage.getItem(this.localBooksKey) ?? '[]') as Libro[]; } catch { return []; }
  }
}
