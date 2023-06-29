import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { gettourdatas, gettourPost, gettourDelete, puttourByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import "../Ent/ent.scss"
import Swal from 'sweetalert2';
function Tourinfo() {
  const [tourinfoadmin, settourinfoadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingtourinfo, setEditingtourinfo] = useState(null);
  const [form] = Form.useForm();

  const tourinfopage = async () => {
    try {
      const tourinfoData = await gettourdatas();
      settourinfoadmin(tourinfoData);
    } catch (error) {
      console.error('Failed to retrieve tour entries:', error);
    }
  };

  useEffect(() => {
    tourinfopage();
  }, [tourinfoadmin]);


  const handleOpenModal = (tourr) => {
    setEditingtourinfo(tourr);
    setModalOpen(true);
    form.setFieldsValue({
      tourname: tourr?.tourname || '',
      tourdesc: tourr?.tourdesc || '',
      tourimg: tourr?.tourimg || '',
    });
  };

  const handleCloseModal = () => {
    setEditingtourinfo(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeletetourinfo = (id) => {
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
          await gettourDelete(id);
          settourinfoadmin(tourinfoadmin.filter((touritem) => touritem._id !== id));
          Swal.fire('Deleted!', 'tour entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete tour entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingtourinfo) {
        const updatedData = {
          tourname: values.spaname,
          tourdesc: values.tourdesc,
          tourimg: values.tourimg,
        };

        await puttourByID(editingtourinfo._id, updatedData);

        const updatedres = tourinfoadmin.map((tourrr) => {
          if (tourrr._id === editingtourinfo._id) {
            return {
              ...tourrr,
              ...updatedData,
            };
          }
          return tourrr;
        });

        settourinfoadmin(updatedres);
      } else {

        const newtour = {
          tourname: values.spaname,
          tourdesc: values.tourdesc,
          tourimg: values.tourimg,
        };

        await gettourPost(newtour);



        handleCloseModal();
      }
      await tourinfopage();
    } catch (error) {
      console.error('Failed to save Tour entry:', error);
    }
  };

  const columns = [
    {
      title: 'Tour Name',
      dataIndex: 'tourname',
      key: 'tourname',
    },
    {
      title: 'Tour Description',
      dataIndex: 'tourdesc',
      key: 'tourdesc',
    },
    {
      title: 'Tour Images',
      dataIndex: 'tourimg',
      key: 'tourimg',
      render: img => <img src={img} alt="tourimg" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeletetourinfo(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <div style={{ marginLeft: '220px' }}>
        <div style={{ marginBottom: '16px' }}>
          <button  onClick={() => handleOpenModal(null)} style={{ marginLeft: '550px', marginTop: '60px' }} >
            Add
          </button>
        </div>
        <div style={{ width: '80%' }}>
          <Table style={{ width: '100%' }} columns={columns} dataSource={tourinfoadmin} />

          <Modal
            visible={modalOpen}
            title={editingtourinfo ? 'Edit Tour  Entry' : 'Add New '}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Tour name"
                name="tourname"
                rules={[{ required: true, message: 'Please enter Tour name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Tour Description"
                name="tourdesc"
                rules={[{ required: true, message: 'Please enter Restaurants desc' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Tour Image"
                name="tourimg"
                rules={[{ required: true, message: 'Please enter Tour images' }]}
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

export default Tourinfo