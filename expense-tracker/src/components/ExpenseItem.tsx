import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import { Expense } from '@/types/expense';

interface Props {
  expense: Expense;
}

function ExpenseItem({ expense }: Props) {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Text>{expense.name}</Text>
      <Text>${expense.amount}</Text>
      <Text>{expense.category}</Text>
      <Text>{expense.date}</Text>
      <Text>{expense.notes}</Text>
    </Box>
  );
}