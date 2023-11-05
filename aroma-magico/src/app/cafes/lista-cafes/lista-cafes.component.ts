import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-lista-cafes',
  templateUrl: './lista-cafes.component.html',
  styleUrls: ['./lista-cafes.component.css']
})
export class ListaCafesComponent implements OnInit {
  cafes: Cafe[] = [];


  constructor(private cafeService: CafeService) {
  }

  ngOnInit(): void {
    this.cafeService.obtenerCafes()
      .subscribe((cafes) => (this.cafes = cafes));
  }

  get totalCafeOrigen(): number {
    return this.obtenerCafesPorTipo('Café de Origen').length;
  }

  get totalCafeBlend(): number {
    return this.obtenerCafesPorTipo('Blend').length;
  }


  private obtenerCafesPorTipo(tipo: string) {
    return this.cafes.filter(cafe => cafe.tipo === tipo);
  }


}
