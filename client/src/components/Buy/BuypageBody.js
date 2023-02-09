import React, {useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// import {Cookies} from 'react-cookie'


// const cookies = new Cookies()
// export const getCookie = ()=>{
// 	return cookies.get("{checkItems.title}")


export function BuyPageBody() {

  //체크된파일들
  const [checkItems, setCheckItems] = useState([]);
  const [userinfo, setUserInfo] = useState([]);
  useEffect(()=>{
    axios.get("/data/checkItems.json").then((data)=>{
      setCheckItems(data.data.checkItems);
    });
  }, [setCheckItems]);

  //userinfor가져오기
  const UserInfo = async () => {
    axios.get('http://localhost:5000/userinfo',{withCredentials:true})
      .then((res) => {console.log(res.data); setUserInfo(res.data.userinfo)})
      .catch((err) => {console.log(err.message)})
}
  


  return (
  <BuyPageBodyContainer>
    <h3>[Buy Page] 주문결제 페이지</h3>
    <h5><button onClick={UserInfo}>👤 주문자정보</button></h5>
    <p> {userinfo.phoneNumber} / {userinfo.address}</p>
    <h5>📦 배송상품정보 </h5>
    {checkItems?.map((checkItems, key) =>(
              <p key={key}>
                <div> <img style={{width: "50px", height: "50px"}} src={checkItems.image} alt="체크된주문사진"/> {checkItems.title} : {checkItems.count}개</div>
              </p>
            ))}
    
    <h5>💳 결제수단</h5> <p>은행 계좌 <input type="text" /> </p>
    <h5>💸 결제정보</h5> <p>총가격</p>

    <Link to='/ordercompletepage'><button>결제하기</button></Link>
  </BuyPageBodyContainer>)
}

const BuyPageBodyContainer = styled.div`
  text-align: center;
  margin: 20px;

`