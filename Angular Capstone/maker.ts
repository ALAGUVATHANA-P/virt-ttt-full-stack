import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-maker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Raise Maintenance Invoice</h2>
    
    <form (ngSubmit)="submitInvoice()">
      <label>Month: <input type="month" [(ngModel)]="month" name="month"></label><br>
      <label>Amount: <input type="number" [(ngModel)]="amount" name="amount"></label><br>
      <button type="submit">Submit</button>
    </form>

    <!-- ✅ Display entered values -->
    <p>Month: {{ month }} | Amount: {{ amount }}</p>
  `
})
export class MakerComponent {
  month = '';
  amount = 0;

  constructor(private invoiceService: InvoiceService) {}

  submitInvoice() {
    const userId = JSON.parse(localStorage.getItem('user') || '{}')?.id;
    const invoice = {
      month: this.month,
      amount: this.amount,
      userId,
      createdBy: userId,
      status: 'pending'
    };
    this.invoiceService.create(invoice).subscribe(() => alert('Invoice submitted for approval!'));
  }
}