import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
// import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./expensesList";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectYear, setSelectYear] = useState("2020");

  const handelChangeYear = (selectYear) => {
    setSelectYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });

  // let expensesContent = <p>no Expenses found</p>;

  // if (filteredExpenses.lenght > 0){ 
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectYear} onYearChange={handelChangeYear} />
        <ExpensesList items={filteredExpenses} />
        {/* {filteredExpenses.length === 0 && <p>No expenses recorded</p>}
        {filteredExpenses.lenght > 0 && 
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      </Card>
    </div>
  );
}

export default Expenses;
