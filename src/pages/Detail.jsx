import React from "react";
import DetailInfo from "../components/DetailInfo";

const Detail = ({ expenses, setExpenses }) => {
  return (
    <div>
      <DetailInfo expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
};

export default Detail;
