import { Component } from '@angular/core';
import { Reports, FilesReport, Tasks } from '@app/mocks/data.mock';
@Component({
  templateUrl: './balance.component.html',
  styles: []
})
export class BalanceComponent {
  visible = true;

  reports = Reports;
  dataSource = FilesReport;
  tasks = Tasks;

  tabsPanel = [{ title: 'Seguimiento' }, { title: 'Archivos' }];

  actionButton = (event: string) => alert(event);
}
