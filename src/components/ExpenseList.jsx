import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const { expenses } = props;

  const expenseItemArray = expenses.map((el) => {
    return (
      <ExpenseItem
        id={el.id}
        title={el.title}
        amount={el.amount}
        date={el.date}
      />
    );
  });
  return <Card className="expenses">{expenseItemArray}</Card>;
};

export default ExpenseList;
