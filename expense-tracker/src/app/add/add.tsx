import { Box, Stack, Button, Text } from "@chakra-ui/react";



export default function AddExpense() {
  return (
    <Box p={6}>
      <Stack align="center">
        <Text fontSize="2xl" color="teal.400">
          Expense Tracker 💰
        </Text>
        <Button colorPalette="teal">Add Expense</Button>
      </Stack>
    </Box>
  );
}