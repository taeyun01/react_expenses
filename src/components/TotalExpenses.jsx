import React, { useState } from "react";
import styled from "styled-components";

const TotalExpenses = ({ expenses, totalMonth }) => {
  let monthSlice = totalMonth.replace("월", "");

  // 10이하는 0붙이기, 01 ~ 09
  if (Number(monthSlice) < 10) {
    monthSlice = `0${monthSlice}`;
  } else {
    monthSlice = monthSlice;
  }

  // N 월 지출 총 합계
  const totalExpenses = expenses
    .filter((exp) => exp.date.substring(5, 7) === monthSlice)
    .map((exp) => Number(exp.amount))
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <TotalExpensesDiv>
      <h2>
        {totalMonth} 총 지출 : {totalExpenses.toLocaleString("ko-KR")}
        원
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
