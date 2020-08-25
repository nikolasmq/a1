import { Zapatilla } from './../models/zapatilla';
import { Injectable } from '@angular/core';

@Injectable()
export class ZapatillaService{
    public zapatilla: Array<Zapatilla>;
    constructor() {
    this.zapatilla = [
        new Zapatilla('Rebook Clasic', 'Rebook', 80, 'Blanco', false ),
        new Zapatilla('Nike Runing', 'Nike', 120, 'Gris', true),
        new Zapatilla('Adiddas Torcion', 'Adiddas', 76, 'Azul', true)
      ]
    }
    getTexto(){
        return "Hola Mundo desde el Servicio de Zapatailla Service.ts";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatilla;
    }
}