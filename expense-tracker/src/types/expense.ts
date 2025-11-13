export interface Expense {
  id: string;
  description: string;
  amount: number;
  category?: string;
  date: string;
  notes?: string;
}

export type Expenses = Expense[];
