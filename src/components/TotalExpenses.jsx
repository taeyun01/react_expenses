import React, { useState } from "react";
import styled from "styled-components";

const TotalExpenses = ({ expenses, totalMonth }) => {
  // 원하는 문자열 지우기
  const strHook = (my_string, letter) => {
    let reg = new RegExp(letter, "g");
    return my_string.replace(reg, "");
  };

  const monthSlice = strHook(totalMonth, "월");

  let sliceMonth = "";
  // 10이하는 0붙이기, 01 ~ 09
  if (Number(monthSlice) < 10) {
    sliceMonth = `0${monthSlice}`;
  } else {
    sliceMonth = monthSlice;
  }

  // N 월 지출 총 합계
  const totalExpenses = expenses
    .filter((exp) => exp.date.substring(5, 7) === sliceMonth)
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
