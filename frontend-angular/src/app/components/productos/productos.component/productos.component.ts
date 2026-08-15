import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductoService} from '../../../services/producto.service';
import {Producto} from '../../../models/producto';
import { Router } from 'express';

@Component({
  selector: 'app-productos.component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  cargando = true;
  constructor(private productoService: ProductoService) { }
  ngOnInit(): void {
    console.log("Iniciando carga de productos..");
    this.productoService.obtenerProducto().subscribe({
      next: {
        
      },
      error:{

      },
      complete:{

      }
    });

  }
}
