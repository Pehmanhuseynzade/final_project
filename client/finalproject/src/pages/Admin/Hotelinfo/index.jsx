import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import "../Aboutadmin/about.scss"
import { getreservemdatas, getreserveDelete, getreservePost, putreserveByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input, DatePicker } from 'antd';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
import { Helmet } from "react-helmet";

function Hotelinfo() {
  const [hotelinfoadmin, sethotelinfoadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editinghotelinfo, setEditinghotelinfo] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [admin, setAdmin] = useUserContext();
  useEffect(() => {
    if (admin === null && !localStorage.getItem("loggedIn")) {
      navigate('/loginadmin');
    }
  }, [])
  const hotelpage = async () => {
    try {
      const hotelinfoData = await getreservemdatas();
      sethotelinfoadmin(hotelinfoData);
      console.log(hotelinfoadmin)
    } catch (error) {
      console.error('Failed to retrieve Hotelinfo entries:', error);
    }
  };

  useEffect(() => {
    hotelpage();
  }, [hotelinfoadmin]);

  const handleOpenModal = (marxal) => {
    setEditinghotelinfo(marxal);
    setModalOpen(true);
    form.setFieldsValue({
      type: marxal?.type || '',
      nameroom: marxal?.nameroom || '',
      imageroom: marxal?.imageroom || '',
      price: marxal?.price || '',
      personcount: marxal?.personcount || '',
      capacity: marxal?.capacity || '',
      countroom: marxal?.countroom || '',
      start: marxal?.start || '',
      end: marxal?.end || '',
    });
  };

  const handleCloseModal = () => {
    setEditinghotelinfo(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteHotelinfo = (id) => {
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
          await getreserveDelete(id);
          sethotelinfoadmin(hotelinfoadmin.filter((infos) => infos._id !== id));
          Swal.fire('Deleted!', 'The Hotel info entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Hotel info entry:', error);
        }
      }
    });
  };


  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editinghotelinfo) {
        const updatedData = {
          type: values.type,
          nameroom: values.nameroom,
          imageroom: values.imageroom,
          price: values.price,
          personcount: values.personcount,
          capacity: values.capacity,
          countroom: values.countroom,
          start: values.start,
          end: values.end,
        };

        await putreserveByID(editinghotelinfo._id, updatedData);

        const updateinfos = hotelinfoadmin.map((hotell) => {
          if (hotell._id === editinghotelinfo._id) {
            return {
              ...hotell,
              ...updatedData,
            };
          }
          return hotell;
        });

        sethotelinfoadmin(updateinfos);
      } else {

        const newDatas = {
          type: values.type,
          nameroom: values.nameroom,
          imageroom: values.imageroom,
          price: values.price,
          personcount: values.personcount,
          capacity: values.capacity,
          countroom: values.countroom,
          start: values.start,
          end: values.end,
        };

        await getreservePost(newDatas);



        handleCloseModal();
      }
      await hotelpage();
    } catch (error) {
      console.error('Failed to save Spa entry:', error);
    }
  };
  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Name Room',
      dataIndex: 'nameroom',
      key: 'nameroom',
    },
    {
      title: 'Image',
      dataIndex: 'imageroom',
      key: 'imageroom',
      render: img => <img src={img} alt="Hotel Image" style={{ width: "200px", height: "150px" }} />
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Person Count',
      dataIndex: 'personcount',
      key: 'personcount',
    },
    {
      title: 'Capacity',
      dataIndex: 'capacity',
      key: 'capacity',
    },
    {
      title: 'Room Count',
      dataIndex: 'countroom',
      key: 'countroom',
    },
    {
      title: 'Start Date',
      dataIndex: 'start',
      key: 'start',
    },
    {
      title: 'End Date',
      dataIndex: 'end',
      key: 'end',
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
        <Button type="primary" danger onClick={() => handleDeleteHotelinfo(record._id)}>
          Delete
        </Button>
      ),
    },
  ];
  return (
    <>
      <Helmet>
        <title>Hotel Info</title>
        <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div style={{ marginLeft: '40px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button type="primary" onClick={() => handleOpenModal(null)} style={{ marginLeft: '100px', marginTop: '60px' }}>
            Add
          </button>
        </div>
        <div style={{ width: '80%', margin: '30px auto' }}>
          <Table columns={columns} dataSource={hotelinfoadmin} />

          <Modal
            visible={modalOpen}
            title={editinghotelinfo ? 'Edit Hotel Info  Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Hotel Info Type"
                name="type"
                rules={[{ required: true, message: 'Please enter Hotel Info Type' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Name Room"
                name="nameroom"
                rules={[{ required: true, message: 'Please enter Name Room' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Hotel Info Images"
                name="imageroom"
                rules={[{ required: true, message: 'Please enter Hotel Info images' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'Please enter Price' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Person Count"
                name="personcount"
                rules={[{ required: true, message: 'Please enter Person Count' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Capacity"
                name="capacity"
                rules={[{ required: true, message: 'Please enter Capacity' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Room Count"
                name="countroom"
                rules={[{ required: true, message: 'Please enter Room Count' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Bitiş Tarihi"
                name="start"
                rules={[{ required: true, message: 'Lütfen baslangic tarihini seçin' }]}
              >
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>
              <Form.Item
                label="Bitiş Tarihi"
                name="end"
                rules={[{ required: true, message: 'Lütfen bitiş tarihini seçin' }]}
              >
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Hotelinfo