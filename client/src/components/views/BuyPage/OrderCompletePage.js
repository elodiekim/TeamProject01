import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Header from '../../Main/MainHeader';

function OrderCompletePage() {
  return (<>
    <Header/>
    <Ordercomplete>
        <h1>주문이 완료되었습니다!</h1>
        <Link to='/'><button>COUNTINUE SHOPPING</button></Link>
    </Ordercomplete>

  </>
  )
}

export default OrderCompletePage;

const Ordercomplete = styled.div`
  text-align: center;
  margin: 150px;

`
