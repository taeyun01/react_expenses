import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";

const monthData = [
  {
    month: "1월",
  },
  {
    month: "2월",
  },
  {
    month: "3월",
  },
  {
    month: "4월",
  },
  {
    month: "5월",
  },
  {
    month: "6월",
  },
  {
    month: "7월",
  },
  {
    month: "8월",
  },
  {
    month: "9월",
  },
  {
    month: "10월",
  },
  {
    month: "11월",
  },
  {
    month: "12월",
  },
];

const fakeData = [
  {
    id: "25600f72-56b4-41a7-a9c2-47358580e2f3",
    date: "2024-01-05",
    item: "식비",
    amount: 100000,
    description: "세광양대창",
  },
  {
    id: "24312f70-97q2-14a7-a9c2-47132950e2t9",
    date: "2024-01-02",
    item: "도서",
    amount: 75000,
    description:
      "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
  },
];

const Router = () => {
  const [month, setMonth] = useState(monthData);
  const [expenses, setExpenses] = useState(() =>
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : localStorage.setItem("expenses", JSON.stringify(fakeData))
  );

  const [totalMonth, setTotalMonth] = useState(() =>
    localStorage.getItem("selectMonth")
      ? JSON.parse(localStorage.getItem("selectMonth"))
      : localStorage.setItem("selectMonth", JSON.stringify("1월"))
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              month={month}
              setMonth={setMonth}
              expenses={expenses}
              setExpenses={setExpenses}
              totalMonth={totalMonth}
              setTotalMonth={setTotalMonth}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Detail expenses={expenses} setExpenses={setExpenses} />
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
