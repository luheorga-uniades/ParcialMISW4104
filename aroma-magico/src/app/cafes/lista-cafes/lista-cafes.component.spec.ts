import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { ListaCafesComponent } from './lista-cafes.component';
import { Cafe } from '../cafe';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ListaCafesComponent', () => {
  let component: ListaCafesComponent;
  let fixture: ComponentFixture<ListaCafesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCafesComponent]
    });
    fixture = TestBed.createComponent(ListaCafesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar la lista de cafes', () => {

    component.cafes = [crearCafe(), crearCafe(), crearCafe()];

    fixture.detectChanges();

    const listaCafesElement: DebugElement = fixture.debugElement;

    const filas = listaCafesElement.queryAll(By.css('tbody tr'));

    expect(filas).toHaveSize(3);

  });

  it('debe mostrar la información del café en la lista', () => {

    const cafe = crearCafe();
    component.cafes = [cafe];
    fixture.detectChanges();

    const listaCafesElement: DebugElement = fixture.debugElement;

    const fila:HTMLElement = listaCafesElement.query(By.css('tbody tr')).nativeElement;

    const idElement = fila.querySelector('th[name="id"]');
    const nombreElement = fila.querySelector('td[name="nombre"]');
    const tipoElement = fila.querySelector('td[name="tipo"]');
    const regionElement = fila.querySelector('td[name="region"]');

    expect(idElement?.textContent).toEqual(`${cafe.id}`);
    expect(nombreElement?.textContent).toEqual(cafe.nombre);
    expect(tipoElement?.textContent).toEqual(cafe.tipo);
    expect(regionElement?.textContent).toEqual(cafe.region);
  });

  const crearCafe = (): Cafe => ({
    id: faker.number.int(),
    tipo: faker.lorem.text(),
    sabor: faker.lorem.text(),
    altura: faker.number.int(),
    nombre: faker.person.firstName(),
    region: faker.location.state(),
    imagen: faker.image.url()
  });

});
