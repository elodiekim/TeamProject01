import React from 'react';
import { MyPageNav } from '../../Mypage/MypageNav';
import Head from '../../Main/MainHeader';
import styled from 'styled-components';

const MyPage = () => {
    return (
        <Div>
          <Head></Head>
          <MyPageNav></MyPageNav>
        </Div>
    )
}

export default MyPage;

const Div = styled.div `
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`