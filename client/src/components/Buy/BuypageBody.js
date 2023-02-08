import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function BuyPageBody() {

  return (<BuyPageBodyContainer>
    <h3>[Buy Page] (주문결제 페이지)</h3>
    <p>👤 주문자정보: 이름 / 연락처 / 주소 / 이메일</p>
    <p>📦 배송상품정보: 이름 / 브랜드 / 가격 / 총 수량</p>
    <p>💳 결제수단: 은행 계좌 <input type="text" /> </p>
    <p>💸 결제정보: 총가격 / 총수량</p>

    <Link to='/ordercompletepage'><button>결제하기</button></Link>
  </BuyPageBodyContainer>)
}

const BuyPageBodyContainer = styled.div`
  text-align: center;
  margin: 20px;

`