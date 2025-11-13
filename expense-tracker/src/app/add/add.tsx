"use client";
import { Box, Stack, Button, Text } from "@chakra-ui/react";
import ExpenseForm from "@/components/ExpenseForm";


export default function AddExpense() {
  return (
    <Box p={6}>
      <Stack align="center">
        <ExpenseForm />
      </Stack>
    </Box>
  );
}