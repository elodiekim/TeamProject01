import React, {useState,useEffect} from "react";
import axios from "axios";



export const CartList = ({
  checkLists,
  handleQuantity,
  handleRemove,
  handleCheckList,
}) => {


  //데이터 가져오기(임시경로)
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    axios.get("/data/cart.json").then((data)=>{
      setCart(data.data.products);
    });
  }, [setCart]);

  return (
    <section>
      <input
        type="checkbox"
        id={cart.id}
        onChange={(e) => {
          handleCheckList(e.currentTarget.checked, `${cart.id}`);
        }}
        checked={checkLists.includes(`${cart.id}`) ? true : false}
      />
      <div>
        <div>
          <img src={cart.image} alt="product-img" />
        </div>

        <div>
          <p>{cart.provider}</p>
          <p>{cart.name}</p>
          <p>{cart.price}원</p>
        </div>
      </div>

      <div>
        <img
          
          src="/images/icon-minus-line.svg"
          alt="minus"
          onClick={() => {
            handleQuantity("minus", cart.id, cart.quantity - 1);
          }}
        />

        <div>
          <span>{cart.quantity}</span>
        </div>
        <img
          
          src="#"
          alt="plus"
          onClick={() => handleQuantity("plus", cart.id, cart.quantity + 1)}
        />
      </div>

      <div>
        <p></p>
        <button>주문하기</button>
      </div>

      <div onClick={() => handleRemove(cart.id)}
      >
        <img src="#" alt="delete" />
      </div>
    </section>
  );
};