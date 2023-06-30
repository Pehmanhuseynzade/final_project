import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
// import "./about.scss"
import { getreservepostdatas, reservepostDelete, reservepost } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import Swal from 'sweetalert2';
function Reserveinfo() {
  const [postreserveadmin, setpostreserveadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();

  const hotelpostpage = async () => {
    try {
      const postReserveData = await getreservepostdatas();
      setpostreserveadmin(postReserveData);
    } catch (error) {
      console.error('Failed to retrieve Hotelinfo entries:', error);
    }
  };

  useEffect(() => {
    hotelpostpage();
  }, [postreserveadmin]);

  const handleOpenModal = (marxalpost) => {
    setModalOpen(true);
    form.setFieldsValue({
      nameroom: marxalpost?.nameroom || '',
      price: marxalpost?.price || '',
      personcount: marxalpost?.personcount || '',
      capacity: marxalpost?.capacity || '',
      countroom: marxalpost?.countroom || '',
      formusername: marxalpost?.formusername || '',
      lastname: marxalpost?.lastname || '',
      formemail: marxalpost?.formemail || '',
      phonenum: marxalpost?.phonenum || '',
      start: marxalpost?.start || '',
      end: marxalpost?.end || '',
    });
  };

  const handleCloseModal = () => {
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
          await reservepostDelete(id);
          setpostreserveadmin(postreserveadmin.filter((postinfo) => postinfo._id !== id));
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
      {

        const newDatas = {
          nameroom: values.nameroom,
          price: values.price,
          personcount: values.personcount,
          capacity: values.capacity,
          countroom: values.countroom,
          formusername: values.formusername,
          lastname: values.lastname,
          formemail: values.formemail,
          phonenum: values.phonenum,
          start: values.start,
          end: values.end,
        };

        await reservepost(newDatas);



        handleCloseModal();
      }
      await hotelpostpage();
    } catch (error) {
      console.error('Failed to save Hotel entry:', error);
    }
  };
  const columns = [

    {
      title: 'Name Room',
      dataIndex: 'nameroom',
      key: 'nameroom',
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
      title: 'First Name',
      dataIndex: 'formusername',
      key: 'formusername',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Email',
      dataIndex: 'formemail',
      key: 'formemail',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phonenum',
      key: 'phonenum',
    },
    {
      title: 'Start Date',
      dataIndex: 'start',
      key: 'start',
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
      <div >
        <div style={{ marginBottom: '16px' }}>
          <button type="primary" onClick={() => handleOpenModal(null)} style={{ marginLeft: '800px', marginTop: '60px' }}>
            Add
          </button>
        </div>
        <div style={{ width: '100%', margin: '30px auto' }}>
          <Table columns={columns} dataSource={postreserveadmin} />

          <Modal
            visible={modalOpen}
            title={'Add New Images'}
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
                name="hoteltype"
                rules={[{ required: true, message: 'Please enter Hotel Info images' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Image"
                name="imageroom"
                rules={[{ required: true, message: 'Please enter Image' }]}
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
                name="roomcount"
                rules={[{ required: true, message: 'Please enter Room Count' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Start Date"
                name="start"
                rules={[{ required: true, message: 'Please enter Start Date' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="End Date"
                name="end"
                rules={[{ required: true, message: 'Please enter End Date' }]}
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

export default Reserveinfo