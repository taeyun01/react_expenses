import React from "react";
import ExpensesInput from "../components/ExpensesInput";
import ExpensesList from "../components/ExpensesList";
import Margin from "../components/Margin";
import SelectMonth from "../components/SelectMonth";
import TotalExpenses from "../components/TotalExpenses";

localStorage.getItem("selectMonth")
  ? JSON.parse(localStorage.getItem("selectMonth"))
  : localStorage.setItem("selectMonth", JSON.stringify("1월"));

const Home = () => {
  return (
    <>
      <ExpensesInput />
      <Margin />
      <SelectMonth />
      <Margin />
      <TotalExpenses />
      <Margin />
      <ExpensesList />
    </>
  );
};

export default Home;
