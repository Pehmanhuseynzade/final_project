import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getUsers } from '../../../api/httpsrequests';
import { Table } from 'antd';
import axios from 'axios';
import "./index.scss";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
function Registers() {
    const [signupadmin, setsignupadmin] = useState([]);
    const navigate = useNavigate();
    const[admin,setAdmin] = useUserContext();
    useEffect(()=>{
      if(admin===null && !localStorage.getItem("loggedIn")){
          navigate('/loginadmin');
      }
    },[])
    console.log(getUsers())
    useEffect(() => {
        // signuppage()
        axios.get('http://localhost:7576/api/userss').then((data) => {
            console.log(data)
            setsignupadmin(data.data)
        });
    }, []);



    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        

    ];
    return (
        <>
            <div style={{ marginLeft: '220px' }}>
                <div style={{ width: '80%' }}>
                    <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Registers Table</h1>
                    <Table className='table' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} columns={columns} dataSource={signupadmin} />
                </div>
            </div>
        </>
    )
}

export default Registers