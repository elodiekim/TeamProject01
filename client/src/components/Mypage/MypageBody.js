import React, {useState} from 'react'
import axios from 'axios';

const MyPageBody = () => {
    const [userinfo, setUserInfo] = useState([]);
    const UserInfo = async () => {
        axios.get('http://localhost:5000/userinfo',{withCredentials:true})
          .then((res) => {console.log(res.data); setUserInfo(res.data.userinfo)})
          .catch((err) => {console.log(err.message)})
    }

    return(
        <>
            <button onClick={UserInfo}>조회하기</button>
            <div>userinfo = {userinfo.address}</div>
        </>
    )
}

export default MyPageBody;