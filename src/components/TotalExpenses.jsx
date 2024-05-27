import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { totalMonthReducer } from "../redux/slices/expensesSlice";

const TotalExpenses = () => {
  const { expenses, totalMonth } = useSelector(
    (state) => state.expenses
  ); // 지출데이터, N월
  const dispatch = useDispatch();

  let monthSlice = totalMonth;

  // 10미만는 0붙이기, 01 ~ 09
  if (Number(totalMonth) < 10) {
    monthSlice = `0${monthSlice}`;
  } else {
    monthSlice = monthSlice;
  }

  // N 월 지출 총 합계
  const totalExpenses = expenses
    .filter((exp) => exp.date.substring(5, 7) === String(monthSlice))
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
    <TotalExpensesDiv>
      <h2>
        {totalMonth}월 총 지출 :{" "}
        {totalExpenses.toLocaleString("ko-KR")}원
      </h2>
    </TotalExpensesDiv>
  );
};

const TotalExpensesDiv = styled.div`
  padding: 14px;
  border: 2px solid #acc2ff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;
export default TotalExpenses;
