import { ZapatillaService } from './../services/zapatilla.service';
import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillaComponent implements OnInit {
  public title: string;
  public marcas: string[];
  public zapatilla: Array<Zapatilla>;
  public color: string;
  public mi_marca: string;

  constructor(
    private _zapatillaService: ZapatillaService 
  ) {
      this.color = 'yellow';
      this.title = 'Zapatillas';
      this.marcas = new Array();
      // this.zapatilla = [
      //   new Zapatilla('Rebook Clasic', 'Rebook', 80, 'Blanco', false ),
      //   new Zapatilla('Nike Runing', 'Nike', 120, 'Gris', true),
      //   new Zapatilla('Adiddas Torcion', 'Adiddas', 76, 'Azul', true)
      // ];
  }

  ngOnInit() {
    this.zapatilla = this._zapatillaService.getZapatillas();
    // alert(this._zapatillaService.getTexto());
    this.getMarcas();
  }

  getMarcas() {
    this.zapatilla.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0 ) {
        this.marcas.push(zapatilla.marca);
      }
     });
    console.log(this.marcas);
  }
  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }
  borrarMarca(indice) {
    //delete this.marcas[indice]; // primera forma de borrar
    this.marcas.splice(indice, 1);
  }
  mostrarPalabra() {
    alert(this.mi_marca);
  }

}
