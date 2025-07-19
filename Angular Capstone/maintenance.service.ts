// src/app/maintenance/maintenance.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MaintenanceService {
  private baseUrl = 'http://localhost:3000'; // ✅ FULL URL

  constructor(private http: HttpClient) {}

  getUserMaintenance(userId: string): Observable<any[]> {
    console.log(`Calling: ${this.baseUrl}/maintenance?userId=${userId}`);
    return this.http.get<any[]>(`${this.baseUrl}/maintenance?userId=${userId}`);
  }
}
