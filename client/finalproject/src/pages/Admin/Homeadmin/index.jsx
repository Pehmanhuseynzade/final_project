import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getInfodatas, getDelete, getPost, putDataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import "./homeadmin.scss"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
import { Helmet } from "react-helmet";

import axios from 'axios';
function Homeadmin() {
  const [hotelinfo, sethotelinfo] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editinghotelinfo, setEditinghotelinfo] = useState(null);
  const [form] = Form.useForm();

  const Hotelinfo = async () => {
    try {
      const hotelinfoData = await getInfodatas();
      sethotelinfo(hotelinfoData);
    } catch (error) {
      console.error('Failed to retrieve hotelinfoData entries:', error);
    }
  };
  const navigate = useNavigate();
  const [admin, setAdmin] = useUserContext();
  useEffect(() => {
    if (admin === null && !localStorage.getItem("loggedIn")) {
      navigate('/loginadmin');
    }
  }, [])
  useEffect(() => {
    Hotelinfo();
  }, [hotelinfo]);

  const handleOpenModal = (hotel) => {
    setEditinghotelinfo(hotel);
    setModalOpen(true);
    form.setFieldsValue({
      name: hotel?.name || '',
      count: hotel?.count || '',
    });
  };

  const handleEditData = (record) => {
    Swal.fire({
      title: "Edit Record",
      html: `
        <input id="edit-count" type="number" placeholder="Count :" value="${record.count}" class="swal2-input" />
        <input id="edit-name" type="text" placeholder="Name" value="${record.name}" class="swal2-input" />
      `,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        const editedCount = Swal.getPopup().querySelector("#edit-count").value;
        const editedName = Swal.getPopup().querySelector("#edit-name").value;

        if (!editedCount || !editedName) {
          Swal.showValidationMessage("Please fill in all fields");
          return false;
        }
        return {
          count: editedCount,
          name: editedName,
        };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const editedData = result.value;
        console.log("Edited Data:", editedData);

        try {
          await axios.put(`http://localhost:7576/api/infomarxal/${record._id}`, editedData);
          // fetchData();
        } catch (error) {
          console.error(error);
          // Handle the error here
        }
      }
    });
  };


  const handleCloseModal = () => {
    setEditinghotelinfo(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeletehotelinfo = (id) => {
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
          await getDelete(id);
          sethotelinfo(hotelinfo.filter((hotelinf) => hotelinf._id !== id));
          Swal.fire('Deleted!', 'The Hotel info entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Hotel info entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    const values = await form.validateFields();


    const newHotel = {
      name: values.name,
      count: values.count,
    };

    await getPost(newHotel);



    handleCloseModal();
    // }
    // await Hotelinfo();

  };



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Count',
      dataIndex: 'count',
      key: 'count',
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
        <Button type="primary" danger onClick={() => handleDeletehotelinfo(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Counts</title>
        <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div style={{ marginLeft: '220px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button type="primary" onClick={() => handleOpenModal(null)} style={{ marginLeft: '550px', marginTop: '60px' }}>
            Add
          </button>
        </div>
        <div style={{ width: '60%', margin: '30px auto' }}>
          <Table columns={columns} dataSource={hotelinfo} />

          <Modal
            visible={modalOpen}
            title={editinghotelinfo ? 'Edit Hotel info Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Count"
                name="count"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter Spa Images' }]}
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

export default Homeadmin