import React from 'react'
import Header from '../../Main/MainHeader';
import { MyPageNav } from '../../Mypage/MypageNav';
import { CartTable } from '../../Cart/CartTable';
import {CartButtons} from '../../Cart/CartButtons';

function CartPage() {
  return (
    <>
      <Header/>
      <MyPageNav />
      <CartTable/>
      <CartButtons/>
      
    </>
  )
}

export default CartPage;
