import React from "react";
import styled from "styled-components";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = ({ expenses, totalMonth }) => {
  function strHook(my_string, letter) {
    let reg = new RegExp(letter, "g");
    return my_string.replace(reg, "");
  }

  let sliceMonth = "";

  const monthSlice = strHook(totalMonth, "월");

  // 10이하는 0붙이기, 01 ~ 09
  if (Number(monthSlice) < 10) {
    sliceMonth = `0${monthSlice}`;
  } else {
    sliceMonth = monthSlice;
  }

  const monthFilter = expenses.filter(
    (mon) => mon.date.substring(5, 7) === sliceMonth
  );

  return (
    <ExpensesListUl>
      {monthFilter.length ? (
        monthFilter.map((exp) => (
          <ExpensesItem key={exp.id} {...exp} />
        ))
      ) : (
        <NoExpenses>지출이 없습니다.</NoExpenses>
      )}
    </ExpensesListUl>
  );
};
const ExpensesListUl = styled.ul`
  padding: 14px;
  border: 2px solid #acc2ff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const NoExpenses = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8b8b8b;
  padding: 20px;
`;
export default ExpensesList;
