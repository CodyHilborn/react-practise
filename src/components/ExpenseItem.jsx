import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { id, title, amount, date } = props;

  return (
    <div className="expense-item">
      <div>{date}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
