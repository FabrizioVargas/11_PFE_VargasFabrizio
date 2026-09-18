import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro, LibroService } from './libro.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly books = signal<Libro[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly isSaving = signal(false);
  protected readonly errorMessage = signal('');
  protected readonly saveError = signal('');
  protected readonly successMessage = signal('');
  protected searchTerm = 'don quijote';
  protected newBook: Partial<Libro> = { title: '', author: '', genre: '', year: undefined };

  constructor(private readonly libroService: LibroService) {}

  ngOnInit(): void { this.loadBooks(); }

  protected loadBooks(): void {
    this.isLoading.set(true); this.errorMessage.set('');
    this.libroService.getBooks(this.searchTerm).subscribe({
      next: (books) => { this.books.set(books); this.isLoading.set(false); },
      error: () => { this.errorMessage.set('No pudimos consultar la API. Intenta de nuevo.'); this.isLoading.set(false); },
    });
  }

  protected registerBook(): void {
    this.isSaving.set(true); this.saveError.set(''); this.successMessage.set('');
    this.libroService.createBook(this.newBook).subscribe({
      next: (book) => { this.books.update((books) => [book, ...books]); this.successMessage.set('Libro registrado correctamente.'); this.newBook = { title: '', author: '', genre: '', year: undefined }; this.isSaving.set(false); },
      error: () => { this.saveError.set('No se pudo registrar el libro.'); this.isSaving.set(false); },
    });
  }
}
