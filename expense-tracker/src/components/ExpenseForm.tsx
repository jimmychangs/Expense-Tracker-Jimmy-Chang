"use client";
import { useState } from "react";
import {
    Box,
    Button,
    Stack,
    Fieldset,
    For,
    Input,
    NativeSelect,
    Field,
    Textarea,
    NumberInput,
    FieldsetContent,
    InputGroup,
} from "@chakra-ui/react";
import { NumericFormat } from "react-number-format";

export default function ExpenseForm() {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState<number | "">("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted!");
    };

    return (
        <Fieldset.Root size="lg" maxW="lg" invalid>
            <Stack>
                <Fieldset.Legend>Add New Expense</Fieldset.Legend>
                <Fieldset.HelperText>
                    Please fill out the expense details below.
                </Fieldset.HelperText>
            </Stack>

            <FieldsetContent>
                <Field.Root>
                    <Field.Label>Expense Name</Field.Label>
                    <Input required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        placeholder="Enter expense name"
                    />
                </Field.Root>
                <Field.Root>
                    <Field.Label>Amount</Field.Label>
                    <NumericFormat
                        thousandSeparator=","
                        decimalSeparator="."
                        decimalScale={2}
                        allowNegative={false}
                        prefix="$"
                        customInput={Input}   // THIS allows Chakra Input styling
                        value={amount === "" ? "" : amount}
                        onValueChange={(values) => {
                            // values.value = raw number string ("1234.56")
                            // values.floatValue = actual number (1234.56)
                            setAmount(values.floatValue ?? "");
                        }}
                    />
                </Field.Root>

                <NativeSelect.Root >
                    <Field.Root>
                        <Field.Label>Category</Field.Label>
                        <NativeSelect.Field placeholder="Select Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            name="category">
                            <option value="bills">Bills</option>
                            <option value="leisure">Leisure</option>
                            <option value="food">Food</option>
                            <option value="savings">Savings</option>
                        </NativeSelect.Field>
                    </Field.Root>
                </NativeSelect.Root>

                <Field.Root>
                    <Field.Label>Date</Field.Label>
                    <Input required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        name="date"
                    />
                </Field.Root>

                <Field.Root>
                    <Field.Label>Notes</Field.Label>
                    <Textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        name="notes"
                        placeholder="Additional details about the expense"
                    />
                </Field.Root>

                <Box mt={4}>
                    <Button variant="surface" colorScheme="teal" onClick={handleSubmit}>
                        Add Expense
                    </Button>
                </Box>
            </FieldsetContent>
        </Fieldset.Root>
    );
}