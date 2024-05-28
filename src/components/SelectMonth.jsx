import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SelectMonth = ({ month, setTotalMonth }) => {
  const [activeIndex, setActiveIndex] = useState("");

  const selectMonthActive = (month) => {
    setActiveIndex(month);
    setTotalMonth(month); // 내가 클릭한 n월
    localStorage.setItem("selectMonth", JSON.stringify(month));
  };

  // 로컬저장소에서 n월 꺼내기
  useEffect(() => {
    const selectMonth = JSON.parse(
      localStorage.getItem("selectMonth")
    );
    setActiveIndex(selectMonth);
  }, []);

  return (
    <div>
      <SelectMonthDiv>
        {month.map((mon) => (
          <MonthItem
            key={mon.month}
            $active={activeIndex === mon.month}
            onClick={() => selectMonthActive(mon.month)}
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
`;

export default SelectMonth;
