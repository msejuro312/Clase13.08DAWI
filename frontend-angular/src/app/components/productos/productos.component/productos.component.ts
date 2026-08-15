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
      next: (data ) => {
        console.log("Datos recibidos de la API: ",data);
        this.productos = data;
        this.cargando = false;
      },
      error: (err)=>{
        console.error("Error al obtener productos: ", err);
        this.cargando = false;

      },
      complete:()=>{
        console.log("Carga de productos completada");
      }
    });

  }
}
