import React from 'react'
import { CartButtons } from '../../Cart/CartButtons';
import { CartTable } from '../../Cart/CartTable'
import { MyPageNav } from '../../Mypage/MypageNav';
import Header from '../../Main/MainHeader';

function CartPage() {
  return (
    <>
      <Header/>
      <MyPageNav />
      
      <CartTable />
      <CartButtons/>
    </>
  )
}

export default CartPage;

