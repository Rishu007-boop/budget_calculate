import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
// import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./expensesList";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectYear, setSelectYear] = useState("2020");

  const handelChangeYear = (selectYear) => {
    // console.log('Expense.js');
    setSelectYear(selectYear);
    console.log(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });

  // const changeYear =(year)=>{
  //   const expenseData = {
  //     ...year,
  //     expenses: props.expenses.filter((expense) => expense.date.getFullYear() === year.year)
  //   };
  //   console.log(expenseData);

  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectYear} onYearChange={handelChangeYear} />
        <ExpensesList item={filteredExpenses}/>
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
        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
