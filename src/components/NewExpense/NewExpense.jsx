import React, { useState } from "react";

import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [formStatus, setFormStatus] = useState("closed");

  const formClose = () => {
    setFormStatus("closed");
  };

  const formOpen = () => {
    setFormStatus("open");
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  // if (formStatus === "closed") {
  //   return (
  //     <div className="new-expense__controls-closed">
  //       <button className="open-new-expense-btn" onClick={formOpen}>
  //         Add New Expense
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="new-expense">
      {formStatus === "closed" && (
        <div className="new-expense__controls-closed">
          <button className="open-new-expense-btn" onClick={formOpen}>
            Add New Expense
          </button>
        </div>
      )}
      {formStatus === "open" && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          formClose={formClose}
        />
      )}
    </div>
  );
};

export default NewExpense;
