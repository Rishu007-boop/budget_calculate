import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // const changeYearFilter = (event) =>{
  //   const year = event.target.value;
  //   console.log(year);

  // }
  const [year, setYear] = useState("2020");

  const ChangeYear = (event) => {
    setYear(event.target.value);
    props.onYearChange(event.target.value);
    // props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={ChangeYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
