import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getmediadatas, getmediaPost, getmediaDelete, putmediaDataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';

function Media() {
  const [mediaadmin, setMediaadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingmendia, setEditingMedia] = useState(null);
  const [form] = Form.useForm();

  const Mediapage = async () => {
    try {
      const mediaData = await getmediadatas();
      setMediaadmin(mediaData);
    } catch (error) {
      console.error('Failed to retrieve Media entries:', error);
    }
  };

  useEffect(() => {
    Mediapage();
  }, [mediaadmin]);

  const handleOpenModal = (mediaa) => {
    setEditingMedia(mediaa);
    setModalOpen(true);
    form.setFieldsValue({
      medianame: mediaa?.medianame || '',
      mediaimage: mediaa?.mediaimage || '',
    });
  };

  const handleCloseModal = () => {
    setMediaadmin(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeletemedia = (id) => {
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
          await getmediaDelete(id);
          setMediaadmin(mediaadmin.filter((mediaimg) => mediaimg._id !== id));
          Swal.fire('Deleted!', 'The Media entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Media entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingmendia) {
        const updatedData = {
          medianame: values.medianame,
          mediaimage: values.mediaimage,
        };

        await putmediaDataByID(editingmendia._id, updatedData);

        const updatedMedia = mediaadmin.map((mediaimgg) => {
          if (mediaimgg._id === editingmendia._id) {
            return {
              ...mediaimgg,
              ...updatedData,
            };
          }
          return mediaimgg;
        });

        setMediaadmin(updatedMedia);
      } else {

        const newMedia = {
          medianame: values.medianame,
          mediaimage: values.mediaimage,
        };

        await getmediaPost(newMedia);



        handleCloseModal();
      }
      await Mediapage();
    } catch (error) {
      console.error('Failed to save Media entry:', error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'medianame',
      key: 'medianame',
    },
    {
      title: 'Media Image',
      dataIndex: 'mediaimage',
      key: 'mediaimage',
      render: img => <img src={img} alt="mediaimage" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeletemedia(record._id)}>
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
          <Table columns={columns} dataSource={mediaadmin} />

          <Modal
            visible={modalOpen}
            title={editingmendia ? 'Edit Media images Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Media Images"
                name="entmentimg"
                rules={[{ required: true, message: 'Please enter Media images' }]}
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

export default Media