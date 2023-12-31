import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getpartiesimgdatas, getpartiesimgDelete, getpartiesimgPost, putpartiesimgDataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import "../Ent/ent.scss"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
import { Helmet } from "react-helmet";

function Partiesimg() {
  const [partiesadmin, setpartiesadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingpartiesimg, setEditingpartiesimg] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [admin, setAdmin] = useUserContext();
  useEffect(() => {
    if (admin === null && !localStorage.getItem("loggedIn")) {
      navigate('/loginadmin');
    }
  }, [])
  const Partiesimgpage = async () => {
    try {
      const partiesimgData = await getpartiesimgdatas();
      setpartiesadmin(partiesimgData);
    } catch (error) {
      console.error('Failed to retrieve Partiesimg entries:', error);
    }
  };

  useEffect(() => {
    Partiesimgpage();
  }, [partiesadmin]);

  const handleOpenModal = (partiesimg) => {
    setEditingpartiesimg(partiesimg);
    setModalOpen(true);
    form.setFieldsValue({
      partieimgname: partiesimg?.partieimgname || '',
      partieimg: partiesimg?.partieimg || '',
    });
  };

  const handleCloseModal = () => {
    setEditingpartiesimg(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteepartiesimg = (id) => {
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
          await getpartiesimgDelete(id);
          setpartiesadmin(partiesadmin.filter((partiesimg) => partiesimg._id !== id));
          Swal.fire('Deleted!', 'Entimg entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Partiesimg entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingpartiesimg) {
        const updatedData = {
          partieimgname: values.partieimgname,
          partieimg: values.partieimg,
        };

        await putpartiesimgDataByID(editingpartiesimg._id, updatedData);

        const updatedPartiesimg = partiesadmin.map((partiesimgg) => {
          if (partiesimgg._id === editingpartiesimg._id) {
            return {
              ...partiesimgg,
              ...updatedData,
            };
          }
          return partiesimgg;
        });

        setpartiesadmin(updatedPartiesimg);
      } else {

        const newPartiesimg = {
          partieimgname: values.partieimgname,
          partieimg: values.partieimg,
        };

        await getpartiesimgPost(newPartiesimg);



        handleCloseModal();
      }
      await Partiesimgpage();
    } catch (error) {
      console.error('Failed to save Partiesimg entry:', error);
    }
  };

  const columns = [
    {
      title: 'Parties Images',
      dataIndex: 'partieimg',
      key: 'partieimg',
      render: img => <img src={img} alt="partieimg" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeleteepartiesimg(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Parties</title>
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
        <div style={{ width: '80%', margin: '30px auto' }}>
          <Table columns={columns} dataSource={partiesadmin} />

          <Modal
            visible={modalOpen}
            title={editingpartiesimg ? 'Edit Parties images Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Parties Images"
                name="partieimg"
                rules={[{ required: true, message: 'Please enter Parties images' }]}
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

export default Partiesimg