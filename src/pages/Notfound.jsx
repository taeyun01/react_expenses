import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Notfound = () => {
  return (
    <div>
      <h2>잘못된 페이지 입니다.</h2>
      <Link to={"/"}>홈으로 돌아가기</Link>
    </div>
  );
};

export default Notfound;
