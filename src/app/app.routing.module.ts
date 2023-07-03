import { RouterModule,Routes } from "@angular/router";
import {NgModule} from '@angular/core'
import { PizaasComponent } from './pizaas/pizaas.component';
import { DistanciaComponent } from "./distancia/distancia.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
import { CineComponent } from "./cine/cine.component";


const routes:Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'DistanciaComponent',component: DistanciaComponent},
    {path: 'ResistenciasComponent',component: ResistenciasComponent},
    {path: 'PizaasComponent',component: PizaasComponent},
    {path: 'CineComponent',component: CineComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}