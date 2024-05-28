import React, { useEffect, useState } from "react";
import ExpensesInput from "../components/ExpensesInput";
import ExpensesList from "../components/ExpensesList";
import Margin from "../components/Margin";
import SelectMonth from "../components/SelectMonth";
import TotalExpenses from "../components/TotalExpenses";

const Home = ({
  month,
  setMonth,
  expenses,
  setExpenses,
  totalMonth,
  setTotalMonth,
}) => {
  return (
    <>
      <ExpensesInput setExpenses={setExpenses} />
      <Margin />
      <SelectMonth
        setTotalMonth={setTotalMonth}
        month={month}
        setMonth={setMonth}
      />
      <Margin />
      <TotalExpenses expenses={expenses} totalMonth={totalMonth} />
      <Margin />
      <ExpensesList expenses={expenses} totalMonth={totalMonth} />
    </>
  );
};

export default Home;
