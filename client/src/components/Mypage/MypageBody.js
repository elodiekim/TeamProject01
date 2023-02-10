import React, {useEffect, useState} from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const MyPageBody = () => {
    const [userinfo, setUserInfo] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:5000/userinfo',{withCredentials:true})
              .then((res) => {console.log(res.data); setUserInfo(res.data.userinfo)})
              .catch((err) => {console.log(err.message)})
    },[])

    // const DeleteHandler = async (e) => {
    //     e.preventDefault();
    //     await axios.delete('http://localhost:5000/signin',{withCredentials : true})
    //       .then((res) => {console.log(res.data)})
    //       .catch((err) => {console.log(err.message)})

    // }

    return(
        <>
            <InfoImg src={userinfo.imageKey} alt="profile-img" />
            <InfoText>address = {userinfo.address} {userinfo.address2}</InfoText>
            <InfoText>phoneNumber = {userinfo.phoneNumber}</InfoText>
            <button onClick={()=>{navigate('/edit')}}>Edit</button>
        </>
    )
}

export default MyPageBody;

const InfoImg = styled.img `
  padding-top : 100px;
  width : 360px;
  hight : 360px;
`

const InfoText = styled.div`
    font-size : 20px;
    font-style : normal;
    font-weight : 700;
`