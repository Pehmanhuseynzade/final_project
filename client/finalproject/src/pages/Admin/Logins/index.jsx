import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
import { Table,Button } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';
function Logins() {
    const [signINadmin, setsignINadmin] = useState([]);
    const navigate = useNavigate();
    const[admin,setAdmin] = useUserContext();
    useEffect(()=>{
      if(admin===null && !localStorage.getItem("loggedIn")){
          navigate('/loginadmin');
      }
    },[])
    useEffect(() => {
        axios.get('http://localhost:7576/api/loginn').then((data)=>{
            console.log(data)
            setsignINadmin(data.data)
        });
    }, []);

    const handleDeletesign = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          reverseButtons: true,
          dangerMode: true,
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await axios.delete(`http://localhost:7576/api/login/${id}`);
              setsignINadmin((prevSignINadmin) =>
                prevSignINadmin.filter((sign) => sign._id !== id)
              );
              Swal.fire('Deleted!', 'The Sign In entry has been deleted.', 'success');
            } catch (error) {
              console.error('Failed to delete Sign In entry:', error);
            }
          }
        });
      };

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Delete',
            key: 'delete',
            render: (_, record) => (
              <Button type="primary" danger onClick={() => handleDeletesign(record._id)}>
                Delete
              </Button>
            ),
          }

    ];
    return (
        <>
            <div style={{ marginLeft: '220px' }}>
                <div style={{ width: '80%' }}>
                <h1 style={{ textAlign:'center',marginTop:'20px' }}>Logins Table</h1>

                    <Table style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} columns={columns} dataSource={signINadmin} />
                </div>
            </div>
        </>
    )
}

export default Logins