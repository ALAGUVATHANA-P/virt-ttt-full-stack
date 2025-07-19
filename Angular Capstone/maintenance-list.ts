import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { MaintenanceService } from './maintenance.service';

@Component({
  selector: 'app-maintenance-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance-list.html',
  styleUrls: ['./maintenance.css']
})
export class MaintenanceListComponent implements OnInit {
  isLoading = true;
  maintenanceData: any[] = [];

  constructor(private service: MaintenanceService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user?.id;
    console.log('Logged in User ID:', userId);

    if (!userId) {
      console.error('User ID not found in localStorage');
      return;
    }

    this.service.getUserMaintenance(userId).subscribe({
      next: (data) => {
        console.log('✅ Maintenance data from server:', data);
        this.maintenanceData = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('❌ Error fetching maintenance:', err);
        this.isLoading = false;
      }
    });
  }
}