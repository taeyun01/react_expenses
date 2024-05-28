import React from "react";
import DetailInfo from "../components/DetailInfo";
import styled from "styled-components";

const Detail = ({ expenses, setExpenses }) => {
  return (
    <DetailContainer>
      <DetailInfo expenses={expenses} setExpenses={setExpenses} />
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Detail;
