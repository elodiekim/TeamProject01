import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Header from '../../Main/MainHeader';

function OrderCompletePage() {
  return (<>
    <Header/>
    <Ordercomplete>
        <h1>주문이 완료되었습니다!</h1>
        <Cont>
          <Link to='/'><button>COUNTINUE SHOPPING</button></Link>
        </Cont>
    </Ordercomplete>

  </>
  )
}

export default OrderCompletePage;

const Ordercomplete = styled.div`
  text-align: center;
  margin: 150px;

`
const Cont = styled.div`
	text-align: center;
	button {
		margin: 20px;
		background-color: grey ;
		color: white;
    border: 3px solid;
    border-radius: 10px;
	}
`