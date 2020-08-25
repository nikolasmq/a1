import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { AutoComponent } from './auto/auto.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    AutoComponent,
    ZapatillaComponent,
    HomeComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
