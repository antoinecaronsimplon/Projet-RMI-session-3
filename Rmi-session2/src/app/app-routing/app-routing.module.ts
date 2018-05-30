import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from '../array/array.component';
import { AdminComponent} from '../admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'array', component: ArrayComponent },  
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
