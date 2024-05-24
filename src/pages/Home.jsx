import React, { useContext, useEffect, useState } from "react";
import ExpensesInput from "../components/ExpensesInput";
import ExpensesList from "../components/ExpensesList";
import Margin from "../components/Margin";
import SelectMonth from "../components/SelectMonth";
import TotalExpenses from "../components/TotalExpenses";
import { Context } from "../context/Context";

localStorage.getItem("selectMonth")
  ? JSON.parse(localStorage.getItem("selectMonth"))
  : localStorage.setItem("selectMonth", JSON.stringify("1월"));

const Home = () => {
  const { setTotalMonth } = useContext(Context);

  // const selectMonthExpenses = (monthNumber) => {
  //   const month = monthNumber; // 1월~12월
  //   setTotalMonth(month);
  //   localStorage.setItem("selectMonth", JSON.stringify(month));
  // };

  useEffect(() => {
    const selectMonth = JSON.parse(
      localStorage.getItem("selectMonth")
    );
    setTotalMonth(selectMonth);
  }, []);

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
