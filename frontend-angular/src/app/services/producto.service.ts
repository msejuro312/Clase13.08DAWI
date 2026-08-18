import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl: string = 'http://localhost:8080/api/productos';
  //private apiUrl: string = 'http://localhost:8081/api/productos';

  constructor(private http: HttpClient) {}

  //el observable hace que se actualice solo
  obtenerProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
