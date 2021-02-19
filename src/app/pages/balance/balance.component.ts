import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Reports, FilesReport, Tasks } from '@app/mocks/data.mock';
@Component({
  templateUrl: './balance.component.html',
  styles: []
})
export class BalanceComponent {
  visible = false;

  reports = Reports;
  dataSource = FilesReport;
  tasks = Tasks;

  tabsPanel = [{ title: 'Seguimiento' }, { title: 'Archivos' }];

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formBuild();
  }

  actionButton = (event: string) => alert(event);

  onSubmit = () => {
    if (this.formulario.valid) {
      this.visible = true;
    }
  };

  private formBuild = () => {
    this.formulario = this.fb.group({
      operadora: ['', Validators.required],
      contrato: ['', Validators.required],
      fecha: ''
    });

    this.formulario.valueChanges.subscribe(() => (this.visible = false));
  };
}
