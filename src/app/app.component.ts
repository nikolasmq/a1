import { Component } from '@angular/core';
import { Configuracion} from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public mostrar_videojuego: boolean = true;
  public info: string;
  public config;

  constructor() {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.info = Configuracion.descripcion;
  }

  ocultarVideojuego(value){
    this.mostrar_videojuego = value;
  }
}
