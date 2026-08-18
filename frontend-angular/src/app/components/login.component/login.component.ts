import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  correo = '';
  clave = '';
  constructor(private loginService: LoginService) { }
  iniciarSesion(){
    this.loginService.login(this.correo, this.clave).subscribe({
      next: (data) => {
        console.log('Datos recibidos de la API: ',data);
      },
      error: (err) => {
        console.error('Error al obtener  datos', err);
      },
      complete: () => {
        console.log('Inicio de sesion completado');
      }
    });
  }
}
