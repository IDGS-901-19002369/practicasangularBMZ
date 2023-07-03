import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistanciaModule } from './distancia/distancia.module';
import { PizaasComponent } from './pizaas/pizaas.component';
import { AppRoutingModule } from './app.routing.module';
import { MenuComponent } from './menu/menu.component';
import { CineComponent } from './cine/cine.component';


@NgModule({
  declarations: [
    AppComponent,
    ResistenciasComponent,
    PizaasComponent,
    MenuComponent,
    CineComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DistanciaModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
