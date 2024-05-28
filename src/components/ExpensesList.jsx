import React, { useContext } from "react";
import styled from "styled-components";
import ExpensesItem from "./ExpensesItem";
import { Context } from "../context/Context";

const ExpensesList = () => {
  const { expenses, totalMonth } = useContext(Context);

  let monthSlice = totalMonth.replace("월", ""); // 1월 -> "월"제거

  // 10이하는 0붙이기, 01 ~ 09
  if (Number(monthSlice) < 10) {
    monthSlice = `0${monthSlice}`;
  } else {
    monthSlice = monthSlice;
  }

  const monthFilter = expenses.filter(
    (mon) => mon.date.substring(5, 7) === monthSlice
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
