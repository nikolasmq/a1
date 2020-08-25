import { ExternoComponent } from './externo/externo.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { AutoComponent } from './auto/auto.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'Zapatilla', component: ZapatillaComponent},
  {path: 'Videojuego', component: VideojuegoComponent},
  {path: 'Auto', component: AutoComponent},
  {path: 'Auto/:nombre/:followers', component: AutoComponent},
  {path: 'externo', component: ExternoComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
