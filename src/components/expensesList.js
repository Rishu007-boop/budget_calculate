import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./expensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
 //   {
  //     props.items.length === 0 && <p>No expenses recorded</p>;
  //   }
  //   {
  //     props.items.lenght > 0 &&
  //     //   props.items.map((expense) => (
  //     //     <ExpenseItem
  //     //       key={expense.id}
  //     //       title={expense.title}
  //     //       amount={expense.amount}
  //     //       date={expense.date}
  //     //     />
  //     //   ));
  //   }    

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
