import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getUsers } from "../../../api/httpsrequests";
import  {useUserContext}  from "../../../context/Usercontext";

function Main() {
  // const[users,setUsers] = useState([]);
  const navigate = useNavigate();
  const[admin,setAdmin] = useUserContext();
  useEffect(()=>{
    if(admin===null){
        navigate('/loginadmin');
    }
  },[])
  // useEffect(()=>{
  //   getUsers(localStorage.getItem('token')).then((res)=>{
  //       setUsers(res);
  //   })
  // },[])
  return (
    <>
    <h1>Users</h1>
    </>
  );
}

export default Main;
