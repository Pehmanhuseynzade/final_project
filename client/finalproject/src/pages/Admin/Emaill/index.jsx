import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getsendemaildatas, getsendemailDelete } from '../../../api/httpsrequests';
import { Table, Button } from 'antd';
import Swal from 'sweetalert2';
function Emaill() {
  const [sendemailadmin, setsendemailadmin] = useState([]);
  const sendemailpage = async () => {
    try {
      const sendemailData = await getsendemaildatas();
      setsendemailadmin(sendemailData);
    } catch (error) {
      console.error('Failed to retrieve sendemail entries:', error);
    }
  };
  useEffect(() => {
    sendemailpage();
  }, [sendemailadmin]);
  const handleDeletesendemail = (id) => {
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
          await getsendemailDelete(id);
          setsendemailadmin(sendemailadmin.filter((resitem) => resitem._id !== id));
          Swal.fire('Deleted!', 'sendemail entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete sendemail entry:', error);
        }
      }
    });
  };

  const columns = [
    {
      title: 'Email',
      dataIndex: 'sendemail',
      key: 'sendemail',
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Button type="primary" danger onClick={() => handleDeletesendemail(record._id)}>
          Delete
        </Button>
      ),
    },
  ];
  return (
    <>
       <div style={{ marginLeft: '220px' }}>
        <div style={{ width: '80%' }}>
        <h1 style={{ textAlign:'center',marginTop:'20px' }}>Emails Table</h1>
          <Table style={{ width: '100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px' }} columns={columns} dataSource={sendemailadmin} />
        </div>
      </div>
    </>
  )
}

export default Emaill