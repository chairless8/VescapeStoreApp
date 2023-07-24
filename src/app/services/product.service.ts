// product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Lista ficticia de productos
  products: Product[] = [
    {
      id: '1',
      name: 'Comida',
      description: 'Deliciosa comida',
      price: 100,
      imageUrl: 'https://storage.googleapis.com/angular_store_842/imagenes%20angular/comida.jpg'
    },
    {
      id: '2',
      name: 'Cena',
      description: 'Exquisita cena',
      price: 200,
      imageUrl: 'https://storage.googleapis.com/angular_store_842/imagenes%20angular/cena.jpg'
    },
    {
      id: '3',
      name: 'Desayuno',
      description: 'Rico desayuno',
      price: 150,
      imageUrl: 'https://storage.googleapis.com/angular_store_842/imagenes%20angular/desayuno.jpg'
    }
  ];
  constructor() { }

  getProducts(): Observable<Product[]> {
    // Simula una petición HTTP devolviendo un observable con los datos de los productos
    return of(this.products);
  }
}
