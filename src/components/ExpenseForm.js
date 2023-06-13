import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const clickSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // console.log(expenseData);
  };

  const [addExpense, setAddExpense] = useState(false);

  const addExpenseHandler = () => {
    setAddExpense(true);
  };

  const cancelHandler = () => {
    setAddExpense(false);
  };

  if (addExpense === true) {
    return (
      <form onSubmit={clickSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>date</label>
            <input
              type="date"
              min="2015-01-01"
              max="2030-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button type="sumit" onClick={cancelHandler}>
              Cancel
            </button>
            <button type="submit">Add Expenses</button>
          </div>
        </div>
      </form>
    );
  }

  if (addExpense === false) {
    return (
      <button type="submit" onClick={addExpenseHandler}>
        Add Expenses
      </button>
    );
  }
};

export default ExpenseForm;
