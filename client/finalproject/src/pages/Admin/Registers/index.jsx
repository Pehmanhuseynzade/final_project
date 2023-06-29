import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getUsers } from '../../../api/httpsrequests';
import { Table } from 'antd';
import axios from 'axios';
import "./index.scss"
function Registers() {
    const [signupadmin, setsignupadmin] = useState([]);
    // const signuppage = async () => {
    //     try {
    //         const signupData = await getUsers();
    //         setsignupadmin(signupData);
    //         // console.log(signupadmin)
    //     } catch (error) {
    //         console.error('Failed to retrieve signup entries:', error);
    //     }
    // };
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
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        }

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