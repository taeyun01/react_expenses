import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ExpensesForm from "../components/ExpensesForm";
import ExpensesList from "../components/ExpensesList";
import Margin from "../components/Margin";
import SelectMonth from "../components/SelectMonth";
import { displayReducer } from "../redux/slices/expensesSlice";

const testData = [
  {
    id: "25600f72-53b4-4187-a9c2-47358580e2f9",
    date: "2024-01-10",
    item: "도서",
    amount: 40500,
    description: "모던 자바스크립트",
  },
  {
    id: "25143e72-16e2-22a7-a9c2-47358580e2f12",
    date: "2024-02-02",
    item: "여행",
    amount: 1055000,
    description: "일본여행",
  },
  {
    id: "24312f70-97q2-14a7-a9c2-47132950e2t14",
    date: "2024-01-02",
    item: "도서",
    amount: 75000,
    description:
      "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
  },
];

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localItem = localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : localStorage.setItem("expenses", JSON.stringify(testData));

    dispatch(displayReducer(localItem));
  }, []);

  return (
    <>
      <ExpensesForm />
      <Margin />
      <SelectMonth />
      <Margin />
      <Margin />

      <ExpensesList />
    </>
  );
};

export default Home;
