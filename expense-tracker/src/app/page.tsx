import {} from "react";
import { Button, HStack, AbsoluteCenter } from "@chakra-ui/react"
import AddExpense from "./add/add";


export default function Home() {
  return (
    <HStack>
      <AbsoluteCenter>
        <AddExpense></AddExpense>
      </AbsoluteCenter>
    </HStack>
  );
}
