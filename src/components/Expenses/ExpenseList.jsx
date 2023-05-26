import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesByYear = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const expenseItemArray = expensesByYear.map((el) => {
    return (
      <ExpenseItem
        key={el.id}
        title={el.title}
        amount={el.amount}
        date={el.date}
      />
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        {expensesByYear.length === 0 ? (
          <p>"No expenses to display yet!"</p>
        ) : (
          expenseItemArray
        )}
      </Card>
    </div>
  );
};

export default ExpenseList;
