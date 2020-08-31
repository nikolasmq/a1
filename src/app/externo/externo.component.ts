import { PeticionesService } from './../services/peticiones.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  constructor(
    private _peticionesService: PeticionesService
  ) { 
    this.userId = 1;
  }

  ngOnInit() {
    this.fecha = new Date();
   this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        //console.log(result);
        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
