import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpensesItem from "./ExpensesItem";
import { useSelector, useDispatch } from "react-redux";
import {
  displayReducer,
  sortedReducer,
  totalMonthReducer,
} from "../redux/slices/expensesSlice";
import Margin from "./Margin";

const testData = [
  {
    id: "25600f72-56b4-41a7-a9c2-47358580e252",
    date: "2022-01-05",
    item: "식비",
    amount: 100000,
    description: "세광양대창",
  },
  {
    id: "25600f72-53b4-4187-a9c2-473585854",
    date: "2021-01-10",
    item: "도서",
    amount: 40500,
    description: "모던 자바스크립트",
  },
  {
    id: "24310f72-56b4-41a7-a9c2-458580ef1f45",
    date: "2024-01-20",
    item: "식비",
    amount: 50000,
    description: "회식",
  },
  {
    id: "25600f72-99b4-41z7-e4h6-47312365e265",
    date: "2022-02-02",
    item: "간식",
    amount: 500,
    description: "아이스크림",
  },
  {
    id: "25143e72-16e2-22a7-a9c2-47358580e2f6",
    date: "2021-02-26",
    item: "여행",
    amount: 1055000,
    description: "일본여행",
  },
  {
    id: "25600f72-97p2-14a7-a9c2-47363950e2t7",
    date: "2022-02-15",
    item: "미용",
    amount: 155000,
    description: "미용실",
  },
  {
    id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
    date: "2024-02-08",
    item: "도서",
    amount: 75000,
    description:
      "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
  },
];

const ExpensesList = () => {
  const { expenses, totalMonth, sortType } = useSelector(
    (state) => state.expenses
  );

  const dispatch = useDispatch();

  let monthNumber = totalMonth; // N월

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

  // 최신순, 오래된순 옵션 select선택 시
  const onChangeSort = (e) => {
    dispatch(sortedReducer(e.target.value));
  };

  // 날짜 비교하여 최신순, 오래된순으로 정렬
  const getSortedDate = () => {
    // toSorted는 sort메서드랑 다르게 원본배열은 냅두고 정렬된 새로운 배열을 반환함
    return monthFilter.toSorted((a, b) =>
      sortType === "oldest"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );
  };

  // 최신순, 오래된 순 필터링, 할당
  const sortedData = getSortedDate();

  useEffect(() => {
    // N월 꺼내기
    const localSelectMonth = JSON.parse(
      localStorage.getItem("selectMonth")
    );
    // 지출 데이터 꺼내기
    const localExpData = localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : localStorage.setItem("expenses", JSON.stringify(testData));

    // 정렬 타입
    const localSortData = localStorage.getItem("sortType")
      ? JSON.parse(localStorage.getItem("sortType"))
      : "latest";

    dispatch(totalMonthReducer(localSelectMonth));
    dispatch(displayReducer(localExpData));
    dispatch(sortedReducer(localSortData));
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
        {sortedData.length ? (
          <div>
            <Select onChange={onChangeSort}>
              <option value="latest">최신순</option>
              <option value="oldest">오래된 순</option>
            </Select>
          </div>
        ) : null}

        {sortedData.length ? (
          sortedData.map((exp) => (
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

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  &:hover {
    border-color: #007aff;
  }
  &:focus {
    border-color: #007aff;
  }
`;
export default ExpensesList;
