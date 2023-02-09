import React from 'react'
import axios from 'axios';

const MyPageBody = () => {
    
    const UserInfo = async () => {
        axios.get('http://localhost:5000/userinfo',{withCredentials:true})
          .then((res) => {console.log(res.data)})
          .catch((err) => {console.log(err.message)})
    }

    return(
        <button onClick={UserInfo}>조회하기</button>
    )
}

export default MyPageBody;