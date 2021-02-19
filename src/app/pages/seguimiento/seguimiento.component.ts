import { Component } from '@angular/core';
import { Capitulos } from '@app/mocks/data.mock';

@Component({
  templateUrl: './seguimiento.component.html',
  styles: []
})
export class SeguimientoComponent {
  capitulos = Capitulos;
}
