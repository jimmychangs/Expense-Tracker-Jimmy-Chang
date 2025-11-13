interface Props {
  expense: Expense;
}

function ExpenseItem({ expense }: Props) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Text>{expense.title}</Text>
      <Text>${expense.amount}</Text>
      <Text>{expense.category}</Text>
      <Text>{expense.date}</Text>
    </Box>
  );
}