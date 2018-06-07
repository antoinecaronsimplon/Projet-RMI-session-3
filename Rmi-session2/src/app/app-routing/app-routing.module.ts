import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from '../array/array.component';
import { AdminComponent } from '../admin/admin.component';
import { CommandeComponent } from '../commande/commande.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { ArchiveComponent } from '../archive/archive.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { OrdernumberComponent } from '../ordernumber/ordernumber.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'array', component: ArrayComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'stats', component: StatisticsComponent },
  { path: '', component: ConnexionComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'numerocommande' , component: OrdernumberComponent },
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
