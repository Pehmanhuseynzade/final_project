import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getpartiesdatas, getpartiesPost, getpartiesDelete, putpartiesDataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';


function Parties() {
  const [partiesinfoadmin, setpartiesinfoadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingpartiesinfo, setEditingpartiesinfo] = useState(null);
  const [form] = Form.useForm();

  const partiesinfopage = async () => {
    try {
      const partiesinfoData = await getpartiesdatas();
      setpartiesinfoadmin(partiesinfoData);
    } catch (error) {
      console.error('Failed to retrieve parties entries:', error);
    }
  };

  useEffect(() => {
    partiesinfopage();
  }, [partiesinfoadmin]);


  const handleOpenModal = (partiess) => {
    setEditingpartiesinfo(partiess);
    setModalOpen(true);
    form.setFieldsValue({
      partiesname: partiess?.partiesname || '',
      partiesdesc1: partiess?.partiesdesc1 || '',
      partiesdesc2: partiess?.partiesdesc2 || '',
      partiesimg: partiess?.partiesimg || '',
    });
  };

  const handleCloseModal = () => {
    setEditingpartiesinfo(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeletepartiesinfo = (id) => {
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
          await getpartiesDelete(id);
          setpartiesinfoadmin(partiesinfoadmin.filter((partieitem) => partieitem._id !== id));
          Swal.fire('Deleted!', 'partie entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete partie entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingpartiesinfo) {
        const updatedData = {
          partiesname: values.partiesname,
          partiesdesc1: values.partiesdesc1,
          partiesdesc2: values.partiesdesc2,
          partiesimg: values.partiesimg,
        };

        await putpartiesDataByID(editingpartiesinfo._id, updatedData);

        const updatedparties = partiesinfoadmin.map((partiesss) => {
          if (partiesss._id === editingpartiesinfo._id) {
            return {
              ...partiesss,
              ...updatedData,
            };
          }
          return partiesss;
        });

        setpartiesinfoadmin(updatedparties);
      } else {

        const newParties = {
          partiesname: values.partiesname,
          partiesdesc1: values.partiesdesc1,
          partiesdesc2: values.partiesdesc2,
          partiesimg: values.partiesimg,
        };

        await getpartiesPost(newParties);



        handleCloseModal();
      }
      await partiesinfopage();
    } catch (error) {
      console.error('Failed to save Parties entry:', error);
    }
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'partiesname',
      key: 'partiesname',
    },
    {
      title: 'Parties Description 1',
      dataIndex: 'partiesdesc1',
      key: 'partiesdesc1',
    },
    {
      title: 'Parties Description 2',
      dataIndex: 'partiesdesc2',
      key: 'partiesdesc2',
    },
    {
      title: 'Parties Image',
      dataIndex: 'partiesimg',
      key: 'partiesimg',
      render: img => <img src={img} alt="partiesimage" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeletepartiesinfo(record._id)}>
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
          <Table style={{ width: '100%' }} columns={columns} dataSource={partiesinfoadmin} />

          <Modal
            visible={modalOpen}
            title={editingpartiesinfo ? 'Edit Partie  Entry' : 'Add New '}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Partie name"
                name="partiesname"
                rules={[{ required: true, message: 'Please enter Partie name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Parties Description 1"
                name="partiesdesc1"
                rules={[{ required: true, message: 'Please enter Partie desc' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Parties Description 2"
                name="partiesdesc2"
                rules={[{ required: true, message: 'Please enter Partie desc' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Parties Image"
                name="partiesimg"
                rules={[{ required: true, message: 'Please enter Partie images' }]}
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

export default Parties