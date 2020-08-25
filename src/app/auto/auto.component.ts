import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  public tittle: string;
  public nombre: string;
  public followers: number;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.tittle = 'Titulo de autocompletado';
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.followers = +params.followers;
      // console.log(this.nombre);
    });
  }

  redirigir() {
    this._router.navigate(['/Zapatilla']);
  }

}
