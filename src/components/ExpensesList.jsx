import React, { useContext } from "react";
import styled from "styled-components";
import ExpensesItem from "./ExpensesItem";
import { Context } from "../context/Context";
import Margin from "./Margin";

const ExpensesList = () => {
  const { expenses, totalMonth } = useContext(Context);

  let monthSlice = totalMonth.replace("월", ""); // 1월 -> "월"제거

  // 10이하는 0붙이기, 01 ~ 09
  if (Number(monthSlice) < 10) {
    monthSlice = `0${monthSlice}`;
  } else {
    monthSlice = monthSlice;
  }

  // 내가 클릭한 N월만 필터
  const monthFilter = expenses.filter(
    (mon) => mon.date.substring(5, 7) === monthSlice
  );

  // N 월 지출 총 합계
  const totalExpenses = expenses
    .filter((exp) => exp.date.substring(5, 7) === monthSlice)
    .map((exp) => Number(exp.amount))
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <TotalExpensesDiv>
        <h2>
          {totalMonth} 총 지출 :{" "}
          {totalExpenses.toLocaleString("ko-KR")}원
        </h2>
      </TotalExpensesDiv>
      <Margin />
      <ExpensesListUl>
        {monthFilter.length ? (
          monthFilter.map((exp) => (
            <ExpensesItem key={exp.id} {...exp} />
          ))
        ) : (
          <NoExpenses>지출이 없습니다.</NoExpenses>
        )}
      </ExpensesListUl>
    </>
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

const TotalExpensesDiv = styled.div`
  padding: 14px;
  border: 2px solid #acc2ff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export default ExpensesList;
