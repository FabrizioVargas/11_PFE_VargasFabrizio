import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto { nombre: string; codigo: string; categoria: string; stock: number; minimo: number; ubicacion: string; }

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, FormsModule], templateUrl: './app.component.html', styleUrl: './app.component.css' })
export class AppComponent {
  mostrarSoloStockBajo = false;
  mensaje = '';
  nombreNuevo = '';
  codigoNuevo = '';
  stockNuevo: number | null = null;
  productos: Producto[] = [
    { nombre: 'Papel bond A4', codigo: 'INS-001', categoria: 'Papeleria', stock: 128, minimo: 30, ubicacion: 'A-01' },
    { nombre: 'Cartucho de tinta negro', codigo: 'INS-014', categoria: 'Impresion', stock: 8, minimo: 12, ubicacion: 'B-04' },
    { nombre: 'Guantes de nitrilo', codigo: 'INS-023', categoria: 'Seguridad', stock: 36, minimo: 20, ubicacion: 'C-02' },
    { nombre: 'Cinta de embalaje', codigo: 'INS-031', categoria: 'Empaque', stock: 5, minimo: 10, ubicacion: 'A-07' }
  ];

  get productosVisibles(): Producto[] { return this.mostrarSoloStockBajo ? this.productos.filter((producto) => producto.stock <= producto.minimo) : this.productos; }
  get totalUnidades(): number { return this.productos.reduce((total, producto) => total + producto.stock, 0); }
  get stockBajo(): number { return this.productos.filter((producto) => producto.stock <= producto.minimo).length; }

  alternarStockBajo(): void { this.mostrarSoloStockBajo = !this.mostrarSoloStockBajo; this.mensaje = this.mostrarSoloStockBajo ? 'Mostrando productos que requieren reposicion.' : 'Mostrando todo el inventario.'; }
  registrarEntrada(): void {
    if (!this.nombreNuevo.trim() || !this.codigoNuevo.trim() || this.stockNuevo === null || this.stockNuevo < 0) {
      this.mensaje = 'Completa el nombre, codigo y stock del producto.';
      return;
    }
    this.productos = [...this.productos, { nombre: this.nombreNuevo, codigo: this.codigoNuevo, categoria: 'General', stock: this.stockNuevo, minimo: 10, ubicacion: 'Sin asignar' }];
    this.mensaje = `${this.nombreNuevo} fue agregado al inventario.`;
    this.nombreNuevo = '';
    this.codigoNuevo = '';
    this.stockNuevo = null;
  }

  eliminarProducto(codigo: string): void {
    const producto = this.productos.find((item) => item.codigo === codigo);
    this.productos = this.productos.filter((item) => item.codigo !== codigo);
    this.mensaje = `${producto?.nombre ?? 'Producto'} fue eliminado del inventario.`;
  }
}
