import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getroominfodatas, getroominfoPost, getroominfoDelete, putroominfoByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import "../Ent/ent.scss"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
function Roominfo() {
  const [roomsinfoadmin, setroomsinfoadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingroomsinfo, setEditingroomsinfo] = useState(null);
  const [form] = Form.useForm();

  const Roomsinfopage = async () => {
    try {
      const roomsinfoData = await getroominfodatas();
      setroomsinfoadmin(roomsinfoData);
    } catch (error) {
      console.error('Failed to retrieve Rooms entries:', error);
    }
  };
  const navigate = useNavigate();
  const[admin,setAdmin] = useUserContext();
  useEffect(()=>{
    if(admin===true){
        navigate('/loginadmin');
    }
  },[])
  useEffect(() => {
    Roomsinfopage();
  }, [roomsinfoadmin]);


  const handleOpenModal = (roomss) => {
    setEditingroomsinfo(roomss);
    setModalOpen(true);
    form.setFieldsValue({
      totalname: roomss?.totalname || '',
      roominfos: roomss?.roominfos || '',
    });
  };

  const handleCloseModal = () => {
    setEditingroomsinfo(null);
    setModalOpen(false);
    form.resetFields();
  };
  const handleDeleteroominfo = (id) => {
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
          await getroominfoDelete(id);
          setroomsinfoadmin(roomsinfoadmin.filter((roomitem) => roomitem._id !== id));
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

      if (editingroomsinfo) {
        const updatedData = {
          totalname: values.totalname,
          roominfos: values.roominfos,
        };

        await putroominfoByID(editingroomsinfo._id, updatedData);

        const updatedrooms = roomsinfoadmin.map((roomsss) => {
          if (roomsss._id === editingroomsinfo._id) {
            return {
              ...roomsss,
              ...updatedData,
            };
          }
          return roomsss;
        });

        setroomsinfoadmin(updatedrooms);
      } else {

        const newRooms = {
          totalname: values.totalname,
          roominfos: values.roominfos,
        };

        await getroominfoPost(newRooms);



        handleCloseModal();
      }
      await Roomsinfopage();
    } catch (error) {
      console.error('Failed to save Rooms entry:', error);
    }
  };

  const columns = [
    {
      title: 'Room Name',
      dataIndex: 'totalname',
      key: 'totalname',
    },
    {
      title: 'Room Description',
      dataIndex: 'roominfos',
      key: 'roominfos',
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
        <Button type="primary" danger onClick={() => handleDeleteroominfo(record._id)}>
          Delete
        </Button>
      ),
    },
  ];
  return (
    <>
              <div style={{ marginLeft: '220px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button onClick={() => handleOpenModal(null)} style={{ marginLeft: '550px', marginTop: '60px' }}>
            Add
          </button>
        </div>
        <div style={{ width: '80%' }}>
          <Table style={{ width: '900%' }} columns={columns} dataSource={roomsinfoadmin} />

          <Modal
            visible={modalOpen}
            title={editingroomsinfo ? 'Edit Rooms  Entry' : 'Add New '}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Rooms name"
                name="totalname"
                rules={[{ required: true, message: 'Please enter Room name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Rooms Description"
                name="totalname"
                rules={[{ required: true, message: 'Please enter Room desc' }]}
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

export default Roominfo