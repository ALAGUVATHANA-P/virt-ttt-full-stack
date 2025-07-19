import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { MaintenanceListComponent } from './maintenance/maintenance-list';
import { MakerComponent } from './invoice/maker';
import { CheckerComponent } from './invoice/checker';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'maintenance', component: MaintenanceListComponent },
  { path: 'maker', component: MakerComponent },
  { path: 'checker', component: CheckerComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];