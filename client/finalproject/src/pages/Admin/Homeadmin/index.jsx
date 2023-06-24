import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getInfodatas, getDelete, getPost, putDataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';
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
    try {
      const values = await form.validateFields();

      if (editinghotelinfo) {
        const updatedData = {
          name: values.name,
          count: values.count,
        };

        await putDataByID(editinghotelinfo._id, updatedData);

        const updatedhotel = hotelinfo.map((hotell) => {
          if (hotell._id === editinghotelinfo._id) {
            return {
              ...hotell,
              ...updatedData,
            };
          }
          return hotell;
        });

        sethotelinfo(updatedhotel);
      } else {

        const newHotel = {
          name: values.name,
          count: values.count,
        };

        await getPost(newHotel);



        handleCloseModal();
      }
      await Hotelinfo();
    } catch (error) {
      console.error('Failed to save hotel entry:', error);
    }
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
        <Button type="primary" danger onClick={() => handleDeletehotelinfo(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
        <div style={{ marginLeft: '220px' }}>
        <div style={{ marginBottom: '16px' }}>
          <Button type="primary" onClick={() => handleOpenModal(null)} style={{ marginLeft: '50%', marginTop: '5%' }}>
            Add
          </Button>
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