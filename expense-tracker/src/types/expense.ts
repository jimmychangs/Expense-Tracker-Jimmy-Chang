export interface Expense {
  id: string;
  name: string;
  amount: number;
  category?: string;
  date: string;
  notes?: string;
}

export type Expenses = Expense[];
