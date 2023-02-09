import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
// import {Cookies} from 'react-cookie'


//cookie 사용
// const cookies = new Cookies()
// cookies.save("{checkItems.title}", "{checkItems.count}", {path : '/'});


export function CartTable() {

  //카트의 데이터 받아오기
  const [carts, setCarts] = useState([]);
  //임의로 지정한 경로
  useEffect(()=>{
    axios.get("/data/carts.json").then((data)=>{
      setCarts(data.data.carts);
    });
  }, [setCarts]);
  



  

	// 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  useEffect(()=>{
    axios.get("/data/checkItems.json").then((data)=>{
      setCheckItems(data.data.checkItems);
    });
  }, [setCheckItems]);
        
  // 1. 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems((checkItems) => checkItems.filter((el) => el !== id));
    }
  };
        
  // 2. 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      carts.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }

  //선택상품 삭제??????
  const handleRemove = (id) => {
    setCarts(carts.filter((carts) => carts.id !== id));
    setCheckItems(checkItems.filter((check) => parseInt(check) !== id));
  };






  //+,- 누르면 증감되도록하기(근데 왜 전체가 같이 작동하는지?ㅜㅜㅠ)
  const [count, setCount] = useState(1);
  const handleCount = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  }

  //전체금액 구하기
  const [total, setTotal] = useState(0);
  // const buychecked = () => {
  //   setTotal
  // }






    return(
      <Table>
        <table border="">
          <thead>
            <tr>
              <td><input type="checkbox"
                        name='select-all'
                        onChange={(e) => handleAllCheck(e.target.checked)}
                        />
							</td>
              <td>Product img</td>
              <td>Product name</td>
              <td>Count</td>
              <td>Price</td>
						</tr>
					</thead>

          <tbody  className="`&{carts.id}`-row"> 
            {carts?.map((carts, key) =>(
              <tr key={key}>
                <td><input type="checkbox" 
                          name={`select-${carts.id}`}
                          onChange={(e) => {
                            handleSingleCheck(e.target.checked, carts.id);
                            
                          }
                            
                          }
                          // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                          checked={checkItems.includes(carts.id) ? true : false}
                          
                          />
                </td>
								<td><img style={{width: "100px", height: "100px"}} src={carts.image} alt="상품사진" ></img></td>
                <td> {carts.title}</td>   
                <td>
                  <div> { count }개</div>
                  <div>
                    <button onClick={()=> handleCount("minus")}> −</button>
                    <button onClick={()=> handleCount("plus")}> +</button>
                  </div>
                </td>
                <td>{carts.price*count}원</td>  
              </tr>
            ))}

              <tr>
                  <td><button className="delete" onClick={()=> handleRemove((carts.id))}>선택상품 삭제</button></td>  
                  <td></td>    
                  <td></td>
                  <td></td>
                  <td>{total} 원</td>
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

  //왜 적용이 안되는건지
  // .image{
  //   width: 100px;
  //   height: 100px;
  // }

  .delete{
    background-color: tomato ;
    color: white;
    border: 3px solid;
    border-radius: 10px;
  }
`
   