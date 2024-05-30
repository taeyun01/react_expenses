import React, { useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../context/Context";
import styled from "styled-components";

const DetailInfo = () => {
  const { expenses, setExpenses } = useContext(Context);

  const { id } = useParams();
  const nav = useNavigate();
  const dateRef = useRef("");
  const itemRef = useRef("");
  const amountRef = useRef("");
  const descriptionRef = useRef("");

  const onClickEdit = () => {
    if (window.confirm("수정 하시겠습니까?")) {
      setExpenses((prevExp) =>
        prevExp.map((exp) =>
          exp.id === id
            ? {
                ...exp,
                date: dateRef.current.value,
                item: itemRef.current.value,
                amount: amountRef.current.value,
                description: descriptionRef.current.value,
              }
            : exp
        )
      );
      nav("/");
    }
  };
  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setExpenses((prevExp) =>
        prevExp.filter((prevExp) => prevExp.id !== id)
      );
      nav("/");
    }
  };
  const onClickGoBack = () => {
    nav(-1);
  };

  // 항목 아이템 클릭한 id와 expenses의 id값이랑 같은거 가져오기
  const detailFilter = expenses.find((exp) => exp.id === id);

  useEffect(() => {
    dateRef.current.value = detailFilter.date;
    itemRef.current.value = detailFilter.item;
    amountRef.current.value = detailFilter.amount;
    descriptionRef.current.value = detailFilter.description;
  }, []);

  return (
    <DtailDiv>
      <InputBox>
        <label htmlFor="date">날짜</label>
        <Input
          ref={dateRef}
          value={dateRef.current.value}
          id="date"
          type="date"
        />
      </InputBox>
      <InputBox>
        <label htmlFor="item">항목</label>
        <Input
          ref={itemRef}
          value={itemRef.current.value}
          id="item"
          type="text"
        />
      </InputBox>

      <InputBox>
        <label htmlFor="amount">금액</label>
        <Input
          ref={amountRef}
          value={amountRef.current.value}
          id="amount"
          type="number"
        />
      </InputBox>

      <InputBox>
        <label htmlFor="description">내용</label>
        <Input
          ref={descriptionRef}
          value={descriptionRef.current.value}
          id="description"
          type="text"
        />
      </InputBox>

      <ButtonBox>
        <Button
          $color={"#AEB3FF"}
          $hover={"#969ceb"}
          onClick={onClickEdit}
        >
          수정
        </Button>
        <Button
          $color={"#ff6e90"}
          $hover={"#ff4d76"}
          onClick={onClickDelete}
        >
          삭제
        </Button>
        <Button
          $color={"#c5c5c5"}
          $hover={"#b8b4b4"}
          onClick={onClickGoBack}
        >
          뒤로가기
        </Button>
      </ButtonBox>
    </DtailDiv>
  );
};
const DtailDiv = styled.div`
  width: 100%;
  padding: 14px 12px;
  border: 2px solid #acc2ff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid;
  padding: 5px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100%;
  padding: 6px 18px;
  border: none;
  background-color: ${(props) => props.$color};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$hover};
  }
`;

export default DetailInfo;
