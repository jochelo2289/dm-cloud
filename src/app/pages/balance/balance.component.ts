import { Component } from '@angular/core';
import { Reports } from '@app/mocks/data.mock';
@Component({
  templateUrl: './balance.component.html',
  styles: [
  ]
})
export class BalanceComponent {

  visible = true;

  reports = Reports;

  tabsPanel = [
    { title: 'Seguimiento' },
    { title: 'Archivos' }
  ];

}
