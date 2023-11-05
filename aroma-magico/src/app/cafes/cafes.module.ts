import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCafesComponent } from './lista-cafes/lista-cafes.component';



@NgModule({
  declarations: [
    ListaCafesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaCafesComponent
  ]
})
export class CafesModule { }
