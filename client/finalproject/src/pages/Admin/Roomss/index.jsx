import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getroomsdatas, getroomsPost, getroomsDelete, putroomsByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';
function Roomss() {
  const [roomsadmin, setroomsadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingrooms, setEditingrooms] = useState(null);
  const [form] = Form.useForm();

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
        };

        await getroomsPost(newRooms);



        handleCloseModal();
      }
      await Roomspage();
    } catch (error) {
      console.error('Failed to save Entimg entry:', error);
    }
  };

  const columns = [
    {
      title: 'Room Name',
      dataIndex: 'entmentimgs',
      key: 'entmentimgs',
      render: img => <img src={img} alt="entertainmentimage" style={{ width: "220px", height: "150px" }} />
    },
    {
      title: 'Room Count',
      dataIndex: 'entmentimgs',
      key: 'entmentimgs',
      render: img => <img src={img} alt="entertainmentimage" style={{ width: "220px", height: "150px" }} />
    },
    {
      title: 'Entertainment Images',
      dataIndex: 'entmentimgs',
      key: 'entmentimgs',
      render: img => <img src={img} alt="entertainmentimage" style={{ width: "220px", height: "150px" }} />
    },
    {
      title: 'Entertainment Images',
      dataIndex: 'entmentimgs',
      key: 'entmentimgs',
      render: img => <img src={img} alt="entertainmentimage" style={{ width: "220px", height: "150px" }} />
    },
    {
      title: 'Entertainment Images',
      dataIndex: 'entmentimgs',
      key: 'entmentimgs',
      render: img => <img src={img} alt="entertainmentimage" style={{ width: "220px", height: "150px" }} />
    },
    {
      title: 'Entertainment Images',
      dataIndex: 'entmentimgs',
      key: 'entmentimgs',
      render: img => <img src={img} alt="entertainmentimage" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeleteentimg(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
    
    </>
  )
}

export default Roomss