import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getentmentimgdatas, getentmentimgPost, getentmentimgDelete } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
import axios from 'axios';
function Entimg() {
  const [entimgadmin, setentimgadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingentimg, setEditingentimg] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const[admin,setAdmin] = useUserContext();
  useEffect(()=>{
    if(admin===null && !localStorage.getItem("loggedIn")){
        navigate('/loginadmin');
    }
  },[])
  const Entimgpage = async () => {
    try {
      const entimgData = await getentmentimgdatas();
      setentimgadmin(entimgData);
    } catch (error) {
      console.error('Failed to retrieve Entertainmentimg entries:', error);
    }
  };

  useEffect(() => {
    Entimgpage();
  }, [entimgadmin]);

  const handleOpenModal = (entmentimage) => {
    setEditingentimg(entmentimage);
    setModalOpen(true);
    form.setFieldsValue({
      entmentnameimg: entmentimage?.entmentnameimg || '',
      entmentimgs: entmentimage?.entmentimgs || '',
    });
  };

  const handleEditData = (record) => {
    Swal.fire({
      title: "Edit Record",
      html: `
        <input id="edit-entmentimgs" type="text" placeholder="Image:" value="${record.entmentimgs}" class="swal2-input" />
      `,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        const editedentmentnameimg = Swal.getPopup().querySelector("#edit-entmentimgs").value;  
        if (!editedentmentnameimg) {
          Swal.showValidationMessage("Please fill in all fields");
          return false;
        }
        return {
          count: editedentmentnameimg
            };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const editedData = result.value;
        console.log("Edited Data:", editedData);
  
        try {
          await axios.put(`http://localhost:7576/api/entmentimg/${record._id}`, editedData);
          // fetchData();
        } catch (error) {
          console.error(error);
          // Handle the error here
        }
      }
    });
  };

  const handleCloseModal = () => {
    setEditingentimg(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteentimg = (id) => {
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
          await getentmentimgDelete(id);
          setentimgadmin(entimgadmin.filter((enttimg) => enttimg._id !== id));
          Swal.fire('Deleted!', 'Entimg entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Entimg entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      {
        const newEntimg = {
          entmentnameimg: values.entmentnameimg,
          entmentimgs: values.entmentimgs,
        };

        await getentmentimgPost(newEntimg);



        handleCloseModal();
      }
      await Entimgpage();
    } catch (error) {
      console.error('Failed to save Entimg entry:', error);
    }
  };

  const columns = [
    {
      title: 'Entertainment Images',
      dataIndex: 'entmentimgs',
      key: 'entmentimgs',
      render: img => <img src={img} alt="entertainmentimage" style={{ width: "220px", height: "150px" }} />
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "edit",
      render: (text, record) => (
        <Button
          style={{
            background: "#1677ff",
            color: "white",
            width: 80,
            height: 40,
            fontFamily: "chillax-regular",
          }}
          onClick={() => {
            handleEditData(record)
          }}
        >
          Edit
        </Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Button type="primary" danger onClick={() => handleDeleteentimg(record._id)}>
          Delete
        </Button>
      ),
    },
  ];
  return (
    <>
      <div style={{ marginLeft: '220px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button  onClick={() => handleOpenModal(null)} style={{ marginLeft: '550px', marginTop: '60px' }}>
            Add
          </button>
        </div>
        <div style={{ width: '70%', marginLeft: '180px',marginTop:"30px"}}>
          <Table columns={columns} dataSource={entimgadmin} />

          <Modal
            visible={modalOpen}
            title={editingentimg ? 'Edit Entertainment images Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Entertainment Images"
                name="entmentimgs"
                rules={[{ required: true, message: 'Please enter Entertainment images' }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Entimg