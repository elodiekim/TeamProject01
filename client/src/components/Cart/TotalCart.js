import React, {useState,useEffect} from "react";
import axios from "axios";

export const TotalCart = ({ total, setTotal,found }) => {

    //데이터 가져오기(임시경로)
  const [cart, setCart] = useState([]);
  
  useEffect(()=>{
    axios.get("/data/cart.json").then((data)=>{
      setCart(data.data.products);
    });
  }, [setCart]);


  useEffect(() => {
    if (found) {
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.map((item) => item[0].price * item[0].quantity);
      const reducer = (acc, cur) => acc + cur;
      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [cart, total, found, setTotal]);

  return (
    <div>
      <div>
        <p>총 상품금액</p>
        <p>{total}</p>
      </div>
      <div>
        <img src="/images/icon-minus-line.svg" alt="minus" />
      </div>
      <div>
        <p>상품 할인</p>
        <p>0원</p>
      </div>
      <div>
        <img src="/images/icon-plus-line.svg" alt="plus" />
      </div>
      <div>
        <p>배송비</p>
        <p>0원</p>
      </div>

      <div>
        <p>결제 예정 금액</p>
        <p >
          {total}
        </p>
      </div>
    </div>
  );
};