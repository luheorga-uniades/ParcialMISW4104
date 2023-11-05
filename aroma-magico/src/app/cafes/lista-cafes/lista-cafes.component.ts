import { Component } from '@angular/core';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-lista-cafes',
  templateUrl: './lista-cafes.component.html',
  styleUrls: ['./lista-cafes.component.css']
})
export class ListaCafesComponent {
  cafes: Cafe[] = [];
}
