// import logo from './logo.svg';
import React, { useState } from "react";
import Expenses from "./components/expenses";
import NewExpense from "./components/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter";
import "./App.css";
// import ExpenseDate from "./components/ExpenseDate";
// import ExpenseItem from "./components/ExpenseItem";

const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  const expenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  {
    const expense = {
      ...expenseDataHandler,
      id: expenses.length.toString(),
    };
    console.log(expense);
  }

  return (
    <div className="App">
      <h1>Expenses</h1>
      <NewExpense onExpenseData={expenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
