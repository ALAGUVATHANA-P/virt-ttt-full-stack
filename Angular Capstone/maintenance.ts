import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceListComponent } from './maintenance-list';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [CommonModule, MaintenanceListComponent],
  templateUrl: './maintenance.html' // ✅ Separate from list component
})
export class MaintenanceComponent {}