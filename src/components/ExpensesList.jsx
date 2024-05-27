import React from "react";
import styled from "styled-components";
import ExpensesItem from "./ExpensesItem";
import { useSelector } from "react-redux";

const ExpensesList = () => {
  const { expenses } = useSelector((state) => state.expenses); // 지출 데이터
  const { totalMonth } = useSelector((state) => state.expenses); // N월

  let monthSlice = totalMonth.replace("월", ""); // 1월 -> 1

  // // 10미만은 0붙이기, 01 ~ 09
  if (Number(monthSlice) < 10) {
    monthSlice = `0${monthSlice}`;
  } else {
    monthSlice = monthSlice;
  }

  // 내가 선택한 N월 지출만 필터
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
