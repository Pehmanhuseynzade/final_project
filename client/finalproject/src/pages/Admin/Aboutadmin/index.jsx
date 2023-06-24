import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getAboutdatas, getaboutDelete, getaboutPost, putaboutDataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';



function Aboutadmin() {
  const [aboutadmin, setAboutadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingabout, setEditingabout] = useState(null);
  const [form] = Form.useForm();

  const Aboutpage = async () => {
    try {
      const aboutData = await getAboutdatas();
      setAboutadmin(aboutData);
    } catch (error) {
      console.error('Failed to retrieve about entries:', error);
    }
  };

  useEffect(() => {
    Aboutpage();
  }, [aboutadmin]);


  const handleOpenModal = (about) => {
    setEditingabout(about);
    setModalOpen(true);
    form.setFieldsValue({
      desc1: about?.desc1 || '',
      desc2: about?.desc2 || '',
      aboutimage:about?.aboutimage || ''
    });
  };

  const handleCloseModal = () => {
    setEditingabout(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteAbout = (id) => {
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
          await getaboutDelete(id);
          setAboutadmin(aboutadmin.filter((aboutt) => aboutt._id !== id));
          Swal.fire('Deleted!', 'The About entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete About entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingabout) {
        const updatedData = {
          desc1: values.desc1,
          desc2: values.desc2,
          aboutimage: values.aboutimage
        };

        await putaboutDataByID(editingabout._id, updatedData);

        const updatedAbout = aboutadmin.map((about) => {
          if (about._id === editingabout._id) {
            return {
              ...about,
              ...updatedData,
            };
          }
          return about;
        });

        setAboutadmin(updatedAbout);
      } else {

        const newAbout = {
          desc1: values.desc1,
          desc2: values.desc2,
          aboutimage: values.aboutimage
        };

        await getaboutPost(newAbout);



        handleCloseModal();
      }
      await Aboutpage();
    } catch (error) {
      console.error('Failed to save Spa entry:', error);
    }
  };

  const columns = [
    {
      title: 'Description 1',
      dataIndex: 'desc1',
      key: 'desc1'
    },
    {
      title: 'Description 2',
      dataIndex: 'desc2',
      key: 'desc2',
    },
    {
      title: 'About Images',
      dataIndex: 'aboutimage',
      key: 'aboutimage',
      render: img =><img src={img} alt="aboutimage" style={{width:"220px",height:"150px"}} />   
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
        <Button type="primary" danger onClick={() => handleDeleteAbout(record._id)}>
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
        <div style={{ width: '80%', margin: '30px auto' }}>
          <Table columns={columns} dataSource={aboutadmin} />

          <Modal
            visible={modalOpen}
            title={editingabout ? 'Edit About Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Description 1"
                name="desc1"
                rules={[{ required: false }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Description 2"
                name="desc2"
                rules={[{ required: true, message: 'Please enter About' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="About images"
                name="aboutimage"
                rules={[{ required: true, message: 'Please enter About' }]}
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

export default Aboutadmin