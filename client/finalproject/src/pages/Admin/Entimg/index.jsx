import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getentmentimgdatas, getentmentimgPost, getentmentimgDelete, putentmentimgByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';

function Entimg() {
  const [entimgadmin, setentimgadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingentimg, setEditingentimg] = useState(null);
  const [form] = Form.useForm();

  const Entimgpage = async () => {
    try {
      const entimgData = await getentmentimgdatas();
      setentimgadmin(entimgData);
    } catch (error) {
      console.error('Failed to retrieve Entertainmentimg entries:', error);
    }
  };

  useEffect(() => {
    Entimgpage();
  }, [entimgadmin]);

  const handleOpenModal = (entmentimage) => {
    setEditingentimg(entmentimage);
    setModalOpen(true);
    form.setFieldsValue({
      entmentnameimg: entmentimage?.entmentnameimg || '',
      entmentimgs: entmentimage?.entmentimgs || '',
    });
  };

  const handleCloseModal = () => {
    setEditingentimg(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteentimg = (id) => {
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
          await getentmentimgDelete(id);
          setentimgadmin(entimgadmin.filter((enttimg) => enttimg._id !== id));
          Swal.fire('Deleted!', 'Entimg entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Entimg entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingentimg) {
        const updatedData = {
          entmentnameimg: values.entmentnameimg,
          entmentimgs: values.entmentimgs,
        };

        await putentmentimgByID(editingentimg._id, updatedData);

        const updatedEntimg = entimgadmin.map((enttimgg) => {
          if (enttimgg._id === editingentimg._id) {
            return {
              ...enttimgg,
              ...updatedData,
            };
          }
          return enttimgg;
        });

        setentimgadmin(updatedEntimg);
      } else {

        const newEntimg = {
          entmentnameimg: values.entmentnameimg,
          entmentimgs: values.entmentimgs,
        };

        await getentmentimgPost(newEntimg);



        handleCloseModal();
      }
      await Entimgpage();
    } catch (error) {
      console.error('Failed to save Entimg entry:', error);
    }
  };

  const columns = [
    {
      title: 'Entertainment Images',
      dataIndex: 'entmentimgs',
      key: 'entmentimgs',
      render: img => <img src={img} alt="entertainmentimage" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeleteentimg(record._id)}>
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
          <Table columns={columns} dataSource={entimgadmin} />

          <Modal
            visible={modalOpen}
            title={editingentimg ? 'Edit Entertainment images Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Entertainment Images"
                name="entmentimg"
                rules={[{ required: true, message: 'Please enter Entertainment images' }]}
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

export default Entimg