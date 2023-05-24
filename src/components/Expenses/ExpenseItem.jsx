import React from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
