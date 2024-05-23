import React, { useEffect, useState } from "react";
import ExpensesInput from "../components/ExpensesInput";
import ExpensesList from "../components/ExpensesList";
import Margin from "../components/Margin";
import SelectMonth from "../components/SelectMonth";
import TotalExpenses from "../components/TotalExpenses";

localStorage.getItem("selectMonth")
  ? JSON.parse(localStorage.getItem("selectMonth"))
  : localStorage.setItem("selectMonth", JSON.stringify("1월"));

const Home = ({
  month,
  setMonth,
  expenses,
  setExpenses,
  totalMonth,
  setTotalMonth,
}) => {
  const selectMonthExpenses = (monthNumber) => {
    const month = monthNumber; // 1월~12월
    setTotalMonth(month);
    localStorage.setItem("selectMonth", JSON.stringify(month));
  };

  useEffect(() => {
    const testSelect = JSON.parse(
      localStorage.getItem("selectMonth")
    );
    const testActive = JSON.parse(localStorage.getItem("active"));
    setTotalMonth(testSelect);
  }, []);

  return (
    <>
      <ExpensesInput setExpenses={setExpenses} />
      <Margin />
      <SelectMonth
        selectMonthExpenses={selectMonthExpenses}
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
