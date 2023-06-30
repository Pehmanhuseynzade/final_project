import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import { getspaimagesdatas, getspaimagesDelete, getspaimagesPost, putspaimagesDataByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import "../Ent/ent.scss"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';

function Spaimages() {
  const [spaimg, setSpaimgs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSpaimg, setEditingSpaimg] = useState(null);
  const [form] = Form.useForm();


  
  const Spas = async () => {
    try {
      const spaData = await getspaimagesdatas();
      setSpaimgs(spaData);
    } catch (error) {
      console.error('Failed to retrieve spa entries:', error);
    }
  };

  useEffect(() => {
    Spas();
  }, [spaimg]);

  const navigate = useNavigate();
  const[admin,setAdmin] = useUserContext();
  useEffect(()=>{
    if(admin===null && !localStorage.getItem("loggedIn")){
        navigate('/loginadmin');
    }
  },[])


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
          Swal.fire('Deleted!', 'The Spa images entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Spa images entry:', error);
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
      await Spas();
    } catch (error) {
      console.error('Failed to save Spa entry:', error);
    }
  };

  const columns = [
    {
      title: 'Spa Images',
      dataIndex: 'spaimg',
      key: 'spaimg',
      render: img =><img src={img} alt="spaimg" style={{width:"220px",height:"150px"}} />   
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
          <button  onClick={() => handleOpenModal(null)} style={{ marginLeft: '550px', marginTop: '60px' }}>
            Add
          </button>
        </div>
        <div style={{ width: '60%', margin: '30px auto' }}>
          <Table columns={columns} dataSource={spaimg} />

          <Modal
            visible={modalOpen}
            title={editingSpaimg ? 'Edit Spa Images Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Name"
                name="spaimgname"
                rules={[{ required: false }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Spaimg"
                name="spaimg"
                rules={[{ required: true, message: 'Please enter Spa Images' }]}
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