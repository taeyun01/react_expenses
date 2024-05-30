import { createContext, useEffect, useState } from "react";

export const Context = createContext(null); // 데이터를 공급할 Context 생성

export default function ExpenseProvider({ children }) {
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

  const testData = [
    {
      id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
      date: "2024-01-05",
      item: "식비",
      amount: 100000,
      description: "세광양대창",
    },
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f8",
      date: "2024-01-10",
      item: "도서",
      amount: 40500,
      description: "모던 자바스크립트",
    },
    {
      id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
      date: "2024-02-02",
      item: "식비",
      amount: 50000,
      description: "회식",
    },
    {
      id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
      date: "2024-02-02",
      item: "간식",
      amount: 500,
      description: "아이스크림",
    },
    {
      id: "25143e72-16e2-22a7-a9c2-47358580e2f8",
      date: "2024-02-02",
      item: "여행",
      amount: 1055000,
      description: "일본여행",
    },
    {
      id: "25600f72-97p2-14a7-a9c2-47363950e2t8",
      date: "2024-02-02",
      item: "미용",
      amount: 155000,
      description: "미용실",
    },
    {
      id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
      date: "2024-02-02",
      item: "도서",
      amount: 75000,
      description:
        "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
    },
  ];

  const [month, setMonth] = useState(monthData);

  const [expenses, setExpenses] = useState(() =>
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : testData
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
    <Context.Provider
      value={{
        month,
        setMonth,
        expenses,
        setExpenses,
        totalMonth,
        setTotalMonth,
      }}
    >
      {children}
    </Context.Provider>
  );
}
