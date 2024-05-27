import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { totalMonthReducer } from "../redux/slices/expensesSlice";

const SelectMonth = () => {
  const { month } = useSelector((state) => state.expenses); // N월 데이터
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState("");

  // 1월~12월 버튼 클릭시 실행
  const selectMonthActive = (id) => {
    setActiveIndex(id);
    const monthNumber = month.filter((mon) => mon.id === id)[0].month; // 내가 선택한 n월 문자열
    dispatch(totalMonthReducer(monthNumber));
    localStorage.setItem("selectMonth", JSON.stringify(monthNumber));
    // setMonth(
    //   month.map((mon) =>
    //     mon.id === id
    //       ? { ...mon, isBool: true }
    //       : { ...mon, isBool: false }
    //   )
    // );
  };

  return (
    <div>
      <SelectMonthDiv>
        {month.map((mon) => (
          <MonthItem
            key={mon.id}
            $active={activeIndex === mon.id}
            // className={mon.isBool ? active : ""}
            onClick={() => selectMonthActive(mon.id)}
          >
            {mon.month}
          </MonthItem>
        ))}
      </SelectMonthDiv>
    </div>
  );
};

const SelectMonthDiv = styled.div`
  width: 100%;
  padding: 14px 12px;
  border: 2px solid #acc2ff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  align-items: flex-end;
`;

const MonthItem = styled.div`
  text-align: center;
  padding: 20px;
  width: 100px;
  height: 60px;
  cursor: pointer;
  border: none;
  background-color: ${(props) =>
    props.$active ? "#81adff" : "#eeeeee"};
  color: ${(props) => (props.$active ? "white" : "black")};
  border-radius: 6px;
  &:hover {
    background-color: #81adff;
    color: white;
    transition: 0.3s;
  }
  &.active {
    background-color: #81adff;
    color: white;
  }
`;

export default SelectMonth;
