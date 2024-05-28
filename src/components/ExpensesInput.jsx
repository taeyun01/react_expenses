import React, { useContext, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../context/Context";

const ExpensesInput = () => {
  const { setExpenses } = useContext(Context);
  const [input, setInput] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value, // 내가 입력한 input name이 date면, 내가 입력한 값으로 상태변경
    });
  };

  const createExpenses = (e) => {
    e.preventDefault();
    if (
      input.date === "" ||
      input.item === "" ||
      input.amount === "" ||
      input.description === ""
    ) {
      return alert("내용을 모두 입력해주세요!");
    }

    const newExpenses = {
      id: uuidv4(),
      date: input.date,
      item: input.item,
      amount: input.amount,
      description: input.description,
    };

    setExpenses((prev) => [newExpenses, ...prev]);

    setInput({
      ...input,
      date: "",
      item: "",
      amount: "",
      description: "",
    });
  };

  return (
    <From onSubmit={createExpenses}>
      <InputBox>
        <label htmlFor="date">날짜</label>
        <Input
          type="date"
          id="date"
          name="date"
          value={input.date}
          onChange={onChange}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="item">항목</label>
        <Input
          type="text"
          id="item"
          name="item"
          value={input.item}
          onChange={onChange}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="amount">금액</label>
        <Input
          type="number"
          id="amount"
          name="amount"
          value={input.amount}
          onChange={onChange}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="description">내용</label>
        <Input
          type="text"
          id="description"
          name="description"
          value={input.description}
          onChange={onChange}
        />
      </InputBox>
      <Button>저장</Button>
    </From>
  );
};

const From = styled.form`
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

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid;
  padding: 5px;
`;

const Button = styled.button`
  padding: 6px 18px;
  border: none;
  background-color: #81adff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

export default ExpensesInput;
