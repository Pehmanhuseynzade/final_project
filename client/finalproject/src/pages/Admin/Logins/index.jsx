import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { signIN } from '../../../api/httpsrequests';
import { Table } from 'antd';
function Logins() {
    const [signINadmin, setsignINadmin] = useState([]);
    const signINpage = async () => {
        try {
            const signupData = await signIN();
            setsignINadmin(signupData);
        } catch (error) {
            console.error('Failed to retrieve signIN entries:', error);
        }
    };
    useEffect(() => {
        signINpage();
    }, [signINadmin]);

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
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
                    <Table style={{ width: '100%' }} columns={columns} dataSource={signINadmin} />
                </div>
            </div>
        </>
    )
}

export default Logins