import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);
  // let title = props.title;

  // const clickHandler = ()=>{
  //   setTitle('Updated!');
  //   console.log('title')
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Click me!</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
