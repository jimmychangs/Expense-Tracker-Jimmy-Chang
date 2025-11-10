import type { Expense } from "../types/expense";

export const dummyExpenses: Expense[] = [
	{
		id: "1",
		description: "Groceries",
		amount: 54.32,
		category: "Food",
		date: "2025-11-01",
		notes: "Weekly grocery run",
	},
	{
		id: "2",
		description: "Coffee",
		amount: 3.5,
		category: "Cafe",
		date: "2025-11-03",
		notes: "Morning coffee",
	},
];

export default dummyExpenses;
