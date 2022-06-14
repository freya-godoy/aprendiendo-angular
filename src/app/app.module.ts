import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from './app.routing'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { videjuegoComponent } from './videojuego/videojuego.component';
import { zapatillasComponent } from './zapatillas/zapatillas.component';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import { calculadoraPipe } from './pipes/calculadora.pipes';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    videjuegoComponent,
    zapatillasComponent,
    CursoComponent,
    HomeComponent,
    ExternoComponent,
    calculadoraPipe,
    ContactoComponent
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
