import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

// Devextreme
import { DxTabPanelModule, DxDataGridModule, DxGanttModule, DxTreeViewModule } from 'devextreme-angular';

// Components
import { AppComponent } from './app.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { SeguimientoComponent } from './pages/seguimiento/seguimiento.component';

// Rutas
const Routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'balance' },
  { path: 'balance', component: BalanceComponent },
  { path: 'seguimiento', component: SeguimientoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'balance' },
]

@NgModule({
  declarations: [AppComponent, BalanceComponent, SeguimientoComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DxTabPanelModule,
    DxDataGridModule,
    DxGanttModule,
    DxTreeViewModule,
    RouterModule.forRoot(Routes, { useHash: true, scrollOffset: [0, 0] })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
