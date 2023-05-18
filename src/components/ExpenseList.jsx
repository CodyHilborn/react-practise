import React from "react";
import ExpenseItem from "./ExpenseItem";

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
  return <div className="expenses">{expenseItemArray}</div>;
};

export default ExpenseList;
