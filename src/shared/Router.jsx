import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import { v4 as uuidv4 } from "uuid";
import Test from "../pages/Test";
import { Context } from "../context/Context";

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

const Router = () => {
  const [month, setMonth] = useState(monthData);
  const [expenses, setExpenses] = useState(() =>
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
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
      <Context.Provider
        value={{
          month,
          expenses,
          totalMonth,
          setMonth,
          setExpenses,
          setTotalMonth,
        }}
      >
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
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default Router;
