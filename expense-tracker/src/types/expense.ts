export interface Expense {
  /** Unique identifier (UUID or string) */
  id: string;
  /** Short description of the expense */
  description: string;
  /** Amount in the smallest currency unit or float (e.g. 12.50) */
  amount: number;
  /** Category or tag (optional) */
  category?: string;
  /** ISO date string (YYYY-MM-DD) or full ISO timestamp */
  date: string;
  /** Optional free-text notes */
  notes?: string;
}

export type Expenses = Expense[];
