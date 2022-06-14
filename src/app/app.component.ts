import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendidendo-angular';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor() {
    this.config = configuracion;
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
  }

  ocultarVideojuegos(value) {
    this.mostrar_videojuegos = value;
  }
}
