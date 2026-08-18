import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component/productos.component';
import { LoginComponent } from './components/login.component/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'productos',
    component: ProductosComponent,
  }
];
