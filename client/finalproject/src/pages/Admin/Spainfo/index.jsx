import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getspainfo1datas, getspainfo1Post, getspainfo1Delete, putspainfo1DataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';

function Spainfo() {
  const [spainfoadmin, setspainfoadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingspainfo, setEditingspainfo] = useState(null);
  const [form] = Form.useForm();

  const spainfopage = async () => {
    try {
      const spainfoData = await getspainfo1datas();
      setspainfoadmin(spainfoData);
    } catch (error) {
      console.error('Failed to retrieve spa entries:', error);
    }
  };

  useEffect(() => {
    spainfopage();
  }, [spainfoadmin]);


  const handleOpenModal = (ress) => {
    setEditingspainfo(ress);
    setModalOpen(true);
    form.setFieldsValue({
      spaname: ress?.spaname || '',
      spadesc1: ress?.spadesc1 || '',
      spadesc2: ress?.spadesc2 || '',
      spaimg1: ress?.spaimg1 || '',
    });
  };

  const handleCloseModal = () => {
    setEditingspainfo(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeletespainfo = (id) => {
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
          await getspainfo1Delete(id);
          setspainfoadmin(spainfoadmin.filter((resitem) => resitem._id !== id));
          Swal.fire('Deleted!', 'spa entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete spa entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingspainfo) {
        const updatedData = {
          spaname: values.spaname,
          spadesc1: values.spadesc1,
          spadesc2: values.spadesc2,
          spaimg1: values.spaimg1,
        };

        await putspainfo1DataByID(editingspainfo._id, updatedData);

        const updatedres = spainfoadmin.map((resss) => {
          if (resss._id === editingspainfo._id) {
            return {
              ...resss,
              ...updatedData,
            };
          }
          return resss;
        });

        setspainfoadmin(updatedres);
      } else {

        const newres = {
          spaname: values.spaname,
          spadesc1: values.spadesc1,
          spadesc2: values.spadesc2,
          spaimg1: values.spaimg1,
        };

        await getspainfo1Post(newres);



        handleCloseModal();
      }
      await spainfopage();
    } catch (error) {
      console.error('Failed to save Spa entry:', error);
    }
  };
  const columns = [
    {
      title: 'Spa Name',
      dataIndex: 'spaname',
      key: 'spaname',
    },
    {
      title: 'Spa Description 1',
      dataIndex: 'spadesc1',
      key: 'spadesc1',
    },
    {
      title: 'Spa Description 2',
      dataIndex: 'spadesc2',
      key: 'spadesc2',
    },
    {
      title: 'Spa Images',
      dataIndex: 'spaimg1',
      key: 'spaimg1',
      render: img => <img src={img} alt="spaimg1" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeletespainfo(record._id)}>
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
        <div style={{ width: '80%' }}>
          <Table style={{ width: '100%' }} columns={columns} dataSource={spainfoadmin} />

          <Modal
            visible={modalOpen}
            title={editingspainfo ? 'Edit Spa  Entry' : 'Add New '}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Spa name"
                name="spaname"
                rules={[{ required: true, message: 'Please enter Spa name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Spa Description"
                name="spadesc1"
                rules={[{ required: true, message: 'Please enter Restaurants desc' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Spa Description"
                name="spadesc2"
                rules={[{ required: true, message: 'Please enter Spa desc' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Spa Image"
                name="spaimg1"
                rules={[{ required: true, message: 'Please enter SPA images' }]}
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

export default Spainfo