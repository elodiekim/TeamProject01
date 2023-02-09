import React from "react";





export const CartHeader = ({ isAllChecked, handleCheckAll }) => {


  return (
    <>
      <header>
        <h1>장바구니</h1>
      </header>
      <div>
        <div>
          <input
            type="checkbox"
            checked={isAllChecked}
            onChange={(e) => handleCheckAll(e.target.checked)}
          />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>

          <p>전체선택</p>
        </div>
      </div>
    </>
  );
};