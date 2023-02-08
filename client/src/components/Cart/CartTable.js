import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

export function CartTable() {

  //상품의 데이터 받아오기
  const [products, setProducts] = useState([]);
  //임의로 지정한 경로
  useEffect(()=>{
    axios.get("/data/products.json").then((data)=>{
      setProducts(data.data.products);
    });
  }, [setProducts]);
  


  //카드 상품 보관
  const [cart, setCart] = useState([]);
  //상품 추가 하기
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  //카트 항목?
  const cartItems = () => {
    return cart.map((products) => (
      <CartItems key={products}>
        <div>
          <div>상품 이름 : {products.title}</div>
          <div>상품정보: {products.description}</div>
          <div>가격: {products.price}</div>
          <div>총 금액: {products.total_price}</div>
        </div>
      </CartItems>
    ));
  };




















	// 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
        
  // 1. 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터) - 코드리뷰 후 수정
      setCheckItems((checkItems) => checkItems.filter((el) => el !== id));
    }
  };
        
  // 2. 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      products.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }







  //+,- 누르면 증감되도록하기
  const [counter, setCounter] = useState(1)









    return(
      <Table>
        <table border="">
          <thead>
            <tr>
              <td><input type="checkbox"
                        name='select-all'
                        onChange={(e) => handleAllCheck(e.target.checked)}
                    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                        checked={checkItems.length === products.length ? true : false} />
							</td>
              <td>Product img</td>
              <td>Product name</td>
              <td>Count</td>
              <td>Price</td>
						</tr>
					</thead>

          <tbody>
            {products?.map((products, key) =>(
              <tr key={key}>
                <td><input type="checkbox" 
                          name={`select-${products.id}`}
                          onChange={(e) => handleSingleCheck(e.target.checked, products.id)}
                          // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                          checked={checkItems.includes(products.id) ? true : false}/>
                </td>
								<td> {products.image}</td>
                <td> {products.title}</td>   
                <td>
                  <h4> { counter }개</h4>
                  <div>
                    <button onClick={()=> setCounter(counter - 1)}> −</button>
                    <button onClick={()=> setCounter(counter + 1)}> +</button>
                  </div>
                </td>
                <td>{products.price}</td>  
              </tr>
            ))}

              <tr className="`&{data.id}`-row"> {/* id에 숫자를 넣고싶은데 */}
                  <td><button className="delete">선택상품 삭제</button></td>  
                  <td></td>    
                  <td></td>
                  <td></td>
                  <td>Total Price 어쩌구 원</td>
              </tr>
                    
          </tbody>
        </table>
      </Table>
  );
};


const Table = styled.div`
  // background-color: lightgreen;
  text-align: center;
  margin: 20px;
  table {
    width: 100%;
    border-top: 1px solid grey;
    border-collapse: collapse;
    border-left: none;
    border-right: none;
  }

  th, td {
      border-bottom: 1px solid grey;
      border-left: none;
      border-right: none;
      padding: 10px;
    }
  .delete{
    background-color: tomato ;
    color: white;
    border: 3px solid;
    border-radius: 10px;
  }
`

const CartItems = styled.div`
`
