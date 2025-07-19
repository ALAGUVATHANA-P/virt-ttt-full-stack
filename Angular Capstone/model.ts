export interface MaintenanceEntry {
  id: number;
  month: string;         // e.g., '2025-07'
  amount: number;        // e.g., 1200
  dueDate: string;       // e.g., '2025-07-10'
  paid: boolean;         // true or false
  fine?: number;         // optional ₹100 if late
  status?: string;       // 'Paid', 'Unpaid', 'Late', etc.
}