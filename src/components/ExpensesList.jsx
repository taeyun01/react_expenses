import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpensesItem from "./ExpensesItem";
import { useSelector, useDispatch } from "react-redux";
import { totalMonthReducer } from "../redux/slices/expensesSlice";
import Margin from "./Margin";

const ExpensesList = () => {
  const { expenses, totalMonth } = useSelector(
    (state) => state.expenses
  );
  const dispatch = useDispatch();

  let monthNumber = totalMonth;

  // 10미만은 0붙이기, 01 ~ 09
  if (Number(monthNumber) < 10) {
    monthNumber = `0${monthNumber}`;
  } else {
    monthNumber = monthNumber;
  }

  // 내가 선택한 N월 필터
  const monthFilter = expenses.filter(
    (mon) => mon.date.substring(5, 7) === String(monthNumber)
  );

  // N 월 지출 총 합계
  const totalExpenses = monthFilter
    .map((exp) => Number(exp.amount))
    .reduce((acc, cur) => acc + cur, 0);

  useEffect(() => {
    // N월 가져오기
    const selectMonth = JSON.parse(
      localStorage.getItem("selectMonth")
    );
    dispatch(totalMonthReducer(selectMonth));
  }, []);

  return (
    <>
      <TotalExpensesDiv>
        <h2>
          {totalMonth}월 총 지출 :{" "}
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
