import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { LibroService } from './libro.service';
import { of } from 'rxjs';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: LibroService, useValue: { getBooks: () => of([]), createBook: () => of({ key: 'local-1', title: 'Libro', author: 'Autor', genre: 'Novela' }) } }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Biblioteca Digital');
  });
});
