import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getspaimagesdatas, getspaimagesDelete, getspaimagesPost, putspaimagesDataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';

// const { TextArea } = Input;


// const spaimagesSchema = Yup.object().shape({
//   spaimgname: Yup.string().required('Icon URL is required'),
//   spaimg: Yup.string().url().required('Social Media URL is required'),
// });

function Spaimages() {
  const [spaimg, setSpaimgs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSpaimg, setEditingSpaimg] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchSpas();
  }, [spaimg]);


  const fetchSpas = async () => {
    try {
      const spaData = await getspaimagesdatas();
      setSpaimgs(spaData);
    } catch (error) {
      console.error('Failed to retrieve social media entries:', error);
    }
  };

  // useEffect(() => {
  //   getspaimagesdatas().then((data)=>{
  //     setSpaimgs(data)
  //     console.log(data)
  //   });
  // }, []);


  const handleOpenModal = (spa) => {
    setEditingSpaimg(spa);
    setModalOpen(true);
    form.setFieldsValue({
      spaimgname: spa?.spaimgname || '',
      spaimg: spa?.spaimg || '',
    });
  };

  const handleCloseModal = () => {
    setEditingSpaimg(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteSpa = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this social media entry!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      dangerMode: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await getspaimagesDelete(id);
          setSpaimgs(spaimg.filter((spa) => spa._id !== id));
          Swal.fire('Deleted!', 'The social media entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete social media entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingSpaimg) {
        const updatedData = {
          spaimgname: values.spaimgname,
          spaimg: values.spaimg,
        };

        await putspaimagesDataByID(editingSpaimg._id, updatedData);

        const updatedSpa = spaimg.map((spaa) => {
          if (spaa._id === editingSpaimg._id) {
            return {
              ...spaa,
              ...updatedData,
            };
          }
          return spaa;
        });

        setSpaimgs(updatedSpa);
      } else {

        const newSpa = {
          spaimgname: values.spaimgname,
          spaimg: values.spaimg,
        };

        await getspaimagesPost(newSpa);



        handleCloseModal();
      }
      await fetchSpas();
    } catch (error) {
      console.error('Failed to save social media entry:', error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'spaimgname',
      key: 'spaimgname',
    },
    {
      title: 'Spa Img Name',
      dataIndex: 'spaimg',
      key: 'spaimg',
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
        <Button type="primary" danger onClick={() => handleDeleteSpa(record._id)}>
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
          <Table columns={columns} dataSource={spaimg} />

          <Modal
            visible={modalOpen}
            title={editingSpaimg ? 'Edit Social Media Entry' : 'Add New Social Media Entry'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Name"
                name="spaimgname"
                rules={[{ required: true, message: 'Please enter the icon URL' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Spaimg"
                name="spaimg"
                rules={[{ required: true, message: 'Please enter the social media URL' }]}
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

export default Spaimages