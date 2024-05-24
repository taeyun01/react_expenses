import React, { useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../context/Context";

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
    <div>
      <hr />
      <label htmlFor="date">날짜</label>
      <input
        ref={dateRef}
        value={dateRef.current.value}
        id="date"
        type="date"
      />
      <hr />
      <label htmlFor="item">항목</label>
      <input
        ref={itemRef}
        value={itemRef.current.value}
        id="item"
        type="text"
      />
      <hr />
      <label htmlFor="amount">금액</label>
      <input
        ref={amountRef}
        value={amountRef.current.value}
        id="amount"
        type="number"
      />
      <hr />
      <label htmlFor="description">내용</label>
      <input
        ref={descriptionRef}
        value={descriptionRef.current.value}
        id="description"
        type="text"
      />
      <hr />
      <button onClick={onClickEdit}>수정</button>
      <button onClick={onClickDelete}>삭제</button>
      <button onClick={onClickGoBack}>뒤로가기</button>
    </div>
  );
};

export default DetailInfo;
