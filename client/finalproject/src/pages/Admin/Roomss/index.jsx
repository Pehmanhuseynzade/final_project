import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getroomsdatas, getroomsPost, getroomsDelete, putroomsByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import "../Ent/ent.scss"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
function Roomss() {
  const [roomsadmin, setroomsadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingrooms, setEditingrooms] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const[admin,setAdmin] = useUserContext();
  useEffect(()=>{
    if(admin===null && !localStorage.getItem("loggedIn")){
        navigate('/loginadmin');
    }
  },[])
  const Roomspage = async () => {
    try {
      const roomsData = await getroomsdatas();
      setroomsadmin(roomsData);
    } catch (error) {
      console.error('Failed to retrieve Rooms entries:', error);
    }
  };

  useEffect(() => {
    Roomspage();
  }, [roomsadmin]);

  const handleOpenModal = (roomss) => {
    setEditingrooms(roomss);
    setModalOpen(true);
    form.setFieldsValue({
      roomname: roomss?.roomname || '',
      roomcount: roomss?.roomcount || '',
      roomimg1: roomss?.roomimg1 || '',
      roomimg2: roomss?.roomimg2 || '',
      roomimg3: roomss?.roomimg3 || '',
      roomimg4: roomss?.roomimg4 || '',
    });
  };

  const handleCloseModal = () => {
    setEditingrooms(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteroomimg = (id) => {
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
          await getroomsDelete(id);
          setroomsadmin(roomsadmin.filter((roomitem) => roomitem._id !== id));
          Swal.fire('Deleted!', 'Room entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Room entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingrooms) {
        const updatedData = {
          roomname: values.roomname,
          roomcount: values.roomcount,
          roomimg1: values.roomimg1,
          roomimg2: values.roomimg2,
          roomimg3: values.roomimg3,
          roomimg4: values.roomimg4,
        };

        await putroomsByID(editingrooms._id, updatedData);

        const updatedrooms = roomsadmin.map((roomsss) => {
          if (roomsss._id === editingrooms._id) {
            return {
              ...roomsss,
              ...updatedData,
            };
          }
          return roomsss;
        });

        setroomsadmin(updatedrooms);
      } else {

        const newRooms = {
          roomname: values.roomname,
          roomcount: values.roomcount,
          roomimg1: values.roomimg1,
          roomimg2: values.roomimg2,
          roomimg3: values.roomimg3,
          roomimg4: values.roomimg4,
        };

        await getroomsPost(newRooms);



        handleCloseModal();
      }
      await Roomspage();
    } catch (error) {
      console.error('Failed to save Rooms entry:', error);
    }
  };

  const columns = [
    {
      title: 'Room Name',
      dataIndex: 'roomname',
      key: 'roomname',
    },
    {
      title: 'Room Count',
      dataIndex: 'roomcount',
      key: 'roomcount',
    },
    {
      title: 'roomimg1',
      dataIndex: 'roomimg1',
      key: 'roomimg1',
      render: img => <img src={img} alt="roomimage" style={{ width: "180px", height: "160px" }} />
    },
    {
      title: 'roomimg2',
      dataIndex: 'roomimg2',
      key: 'roomimg2',
      render: img => <img src={img} alt="roomimage" style={{ width: "180px", height: "160px" }} />
    },
    {
      title: 'roomimg3',
      dataIndex: 'roomimg3',
      key: 'roomimg3',
      render: img => <img src={img} alt="roomimage" style={{ width: "180px", height: "160px" }} />
    },
    {
      title: 'roomimg3',
      dataIndex: 'roomimg3',
      key: 'roomimg3',
      render: img => <img src={img} alt="roomimage" style={{ width: "180px", height: "160px" }} />
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleOpenModal(record)}>
          Edit
        </Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Button type="primary" danger onClick={() => handleDeleteroomimg(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
          <div style={{ marginLeft: '150px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button type="primary" onClick={() => handleOpenModal(null)} style={{ marginLeft: '600px', marginTop: '60px' }}>
            Add
          </button>
        </div>
        <div style={{ width: '80%' }}>
          <Table style={{ width: '80%' }} columns={columns} dataSource={roomsadmin} />

          <Modal
            visible={modalOpen}
            title={editingrooms ? 'Edit Rooms  Entry' : 'Add New '}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Rooms name"
                name="roomname"
                rules={[{ required: true, message: 'Please enter Room name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Rooms count"
                name="roomcount"
                rules={[{ required: true, message: 'Please enter Room count' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Rooms Image"
                name="roomimg1"
                rules={[{ required: true, message: 'Please enter Room images' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Rooms Images2"
                name="roomimg2"
                rules={[{ required: true, message: 'Please enter Room images' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Rooms Images3"
                name="roomimg3"
                rules={[{ required: true, message: 'Please enter Room images' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Rooms Images4"
                name="roomimg4"
                rules={[{ required: true, message: 'Please enter Room images' }]}
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

export default Roomss