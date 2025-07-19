import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-checker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Pending Invoices</h2>

    <!-- ✅ Add this line for debugging -->
    <p>Total Pending Invoices: {{ invoices.length }}</p>

    <div *ngFor="let inv of invoices">
      📅 {{ inv.month }} | 💰 ₹{{ inv.amount }}
      <button (click)="approve(inv.id)">✅ Approve</button>
      <button (click)="reject(inv.id)">❌ Reject</button>
    </div>
  `
})
export class CheckerComponent implements OnInit {
  invoices: any[] = [];

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.refresh();
  }

  approve(id: number) {
    this.invoiceService.updateStatus(id, 'approved').subscribe(() => this.refresh());
  }

  reject(id: number) {
    this.invoiceService.updateStatus(id, 'rejected').subscribe(() => this.refresh());
  }

  refresh() {
    this.invoiceService.getPending().subscribe(data => {
      console.log('✅ Loaded invoices:', data); // Debug log
      this.invoices = data;
    });
  }
}
