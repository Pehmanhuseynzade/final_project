import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { gettourimgdatas, gettourimgDelete, gettourimgPost, puttourimgByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
// import * as Yup from 'yup';
import Swal from 'sweetalert2';


function Tourimg() {

  const [tourimgadmin, settourimgadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingtourimg, setEditingtourimg] = useState(null);
  const [form] = Form.useForm();

  const Tourimgpage = async () => {
    try {
      const tourimgData = await gettourimgdatas();
      settourimgadmin(tourimgData);
    } catch (error) {
      console.error('Failed to retrieve Tourimg entries:', error);
    }
  };

  useEffect(() => {
    Tourimgpage();
  }, [tourimgadmin]);

  const handleOpenModal = (tourimage) => {
    setEditingtourimg(tourimage);
    setModalOpen(true);
    form.setFieldsValue({
      tournameimg: tourimage?.tournameimg || '',
      tourimgs: tourimage?.tourimgs || '',
    });
  };

  const handleCloseModal = () => {
    setEditingtourimg(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeletetourimg = (id) => {
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
          await gettourimgDelete(id);
          settourimgadmin(tourimgadmin.filter((tourimg) => tourimg._id !== id));
          Swal.fire('Deleted!', 'Tourimg entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Tourimg entry:', error);
        }
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingtourimg) {
        const updatedData = {
          tournameimg: values.tournameimg,
          tourimgs: values.tourimgs,
        };

        await puttourimgByID(editingtourimg._id, updatedData);

        const updatedTourimg = tourimgadmin.map((tourrimg) => {
          if (tourrimg._id === editingtourimg._id) {
            return {
              ...tourrimg,
              ...updatedData,
            };
          }
          return tourrimg;
        });

        settourimgadmin(updatedTourimg);
      } else {

        const newTourimg = {
          tournameimg: values.tournameimg,
          tourimgs: values.tourimgs,
        };

        await gettourimgPost(newTourimg);



        handleCloseModal();
      }
      await Tourimgpage();
    } catch (error) {
      console.error('Failed to save Tourimg entry:', error);
    }
  };

  const columns = [
    {
      title: 'Tour Images',
      dataIndex: 'tourimgs',
      key: 'tourimgs',
      render: img => <img src={img} alt="tourimgs" style={{ width: "220px", height: "150px" }} />
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
        <Button type="primary" danger onClick={() => handleDeletetourimg(record._id)}>
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
          <Table columns={columns} dataSource={tourimgadmin} />

          <Modal
            visible={modalOpen}
            title={editingtourimg ? 'Edit Tour images Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Tour Images"
                name="tourimgs"
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

export default Tourimg