import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getresdatas, getresPost, getresDelete, putresByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';


function Restaurants() {
  const [resinfoadmin, setresinfoadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingresinfo, setEditingresinfo] = useState(null);
  const [form] = Form.useForm();

  const resinfopage = async () => {
    try {
      const resinfoData = await getresdatas();
      setresinfoadmin(resinfoData);
    } catch (error) {
      console.error('Failed to retrieve res entries:', error);
    }
  };

  useEffect(() => {
    resinfopage();
  }, [resinfoadmin]);


  const handleOpenModal = (ress) => {
    setEditingresinfo(ress);
    setModalOpen(true);
    form.setFieldsValue({
      resname: ress?.resname || '',
      resdesc: ress?.resdesc || '',
      resimg: ress?.resimg || '',
    });
  };

  const handleCloseModal = () => {
    setEditingresinfo(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteresinfo = (id) => {
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
          await getresDelete(id);
          setresinfoadmin(resinfoadmin.filter((resitem) => resitem._id !== id));
          Swal.fire('Deleted!', 'res entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete res entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingresinfo) {
        const updatedData = {
          resname: values.resname,
          resdesc: values.resdesc,
          resimg: values.resimg,
        };

        await putresByID(editingresinfo._id, updatedData);

        const updatedres = resinfoadmin.map((resss) => {
          if (resss._id === editingresinfo._id) {
            return {
              ...resss,
              ...updatedData,
            };
          }
          return resss;
        });

        setresinfoadmin(updatedres);
      } else {

        const newres = {
          resname: values.resname,
          resdesc: values.resdesc,
          resimg: values.resimg,
        };

        await getresPost(newres);



        handleCloseModal();
      }
      await resinfopage();
    } catch (error) {
      console.error('Failed to save Restaurants entry:', error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'resname',
      key: 'resname',
    },
    {
      title: 'Restaurant Description 1',
      dataIndex: 'resdesc',
      key: 'resdesc',
    },
    {
      title: 'Restaurants Images',
      dataIndex: 'resimg',
      key: 'resimg',
      render: img => <img src={img} alt="resimg" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeleteresinfo(record._id)}>
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
          <Table style={{ width: '100%' }} columns={columns} dataSource={resinfoadmin} />

          <Modal
            visible={modalOpen}
            title={editingresinfo ? 'Edit Restaurants  Entry' : 'Add New '}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Restaurants name"
                name="resname"
                rules={[{ required: true, message: 'Please enter Restaurants name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Restaurants Description"
                name="resdesc"
                rules={[{ required: true, message: 'Please enter Restaurants desc' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Restaurants Image"
                name="resimg"
                rules={[{ required: true, message: 'Please enter Restaurants images' }]}
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

export default Restaurants