import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  public tittle: string;
  public listado: string;
  constructor() {
    this.tittle = "Componente de videojuegos";
    this.listado = "Listado de juegos populares";
    console.log('Este es una carga desde el nuevo componente');
  }
  ngOnInit() {
    console.log('OnInit ejecutado');
  }
  ngDoCheck() {
    console.log('DoCkeck ejecutado');
  }
  ngOnDestroy() {
    console.log('OnDestroy ejecutado');
  }

  cambiarTitulo() {
    this.tittle = "Nuevo titulo del componente";
  }

}
