import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getUsers } from '../../../api/httpsrequests';
import { Table } from 'antd';
function Registers() {
    const [signupadmin, setsignupadmin] = useState([]);
    const signuppage = async () => {
        try {
            const signupData = await getUsers();
            setsignupadmin(signupData);
        } catch (error) {
            console.error('Failed to retrieve signup entries:', error);
        }
    };
    useEffect(() => {
        signuppage();
    }, [signupadmin]);

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
                    <Table style={{ width: '100%' }} columns={columns} dataSource={signupadmin} />
                </div>
            </div>
        </>
    )
}

export default Registers