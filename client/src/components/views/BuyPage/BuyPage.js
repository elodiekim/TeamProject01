import React from 'react'
import { BuyPageBody } from '../../Buy/BuypageBody';
import { MyPageNav } from '../../Mypage/MypageNav';
import Header from '../../Main/MainHeader';

function BuyPage() {
  return (<>
    <Header/>
    <MyPageNav></MyPageNav>
		<BuyPageBody/>

  </>
  )
}

export default BuyPage;