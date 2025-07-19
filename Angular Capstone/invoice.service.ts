import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private baseUrl = 'http://localhost:3000/invoices';

  constructor(private http: HttpClient) {}

  getPending(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?status=pending`);
  }

  create(invoice: any): Observable<any> {
    return this.http.post(this.baseUrl, invoice);
  }

  updateStatus(id: number, status: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, { status });
  }
}