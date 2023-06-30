import React, { useEffect, useState } from 'react'
// import "../adminpage.scss"
import { getentmentdatas, getentmentDelete, getentmentPost, putentmentByID } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
import Swal from 'sweetalert2';
import "./ent.scss"


function Ent() {
  const [entadmin, setentadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingent, setEditingent] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const[admin,setAdmin] = useUserContext();
  useEffect(()=>{
    if(admin===null && !localStorage.getItem("loggedIn")){
        navigate('/loginadmin');
    }
  },[])
  const Entpage = async () => {
    try {
      const entData = await getentmentdatas();
      setentadmin(entData);
    } catch (error) {
      console.error('Failed to retrieve Entertainment entries:', error);
    }
  };

  useEffect(() => {
    Entpage();
  }, [entadmin]);

  const handleOpenModal = (entment) => {
    setEditingent(entment);
    setModalOpen(true);
    form.setFieldsValue({
      entmentname: entment?.entmentname || '',
      entmentdesc: entment?.entmentdesc || '',
      entmentimg:entment?.entmentimg || ''
    });
  };

  const handleCloseModal = () => {
    setEditingent(null);
    setModalOpen(false);
    form.resetFields();
  };

  const handleDeleteent = (id) => {
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
          await getentmentDelete(id);
          setentadmin(entadmin.filter((entt) => entt._id !== id));
          Swal.fire('Deleted!', 'The About entry has been deleted.', 'success');
        } catch (error) {
          console.error('Failed to delete Entertainment entry:', error);
        }
      }
    });
  };


  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingent) {
        const updatedData = {
          entmentname: values.entmentname,
          entmentdesc: values.entmentdesc,
          entmentimg: values.entmentimg
        };

        await putentmentByID(editingent._id, updatedData);

        const updatedEnt = entadmin.map((entt) => {
          if (entt._id === editingent._id) {
            return {
              ...entt,
              ...updatedData,
            };
          }
          return entt;
        });

        setentadmin(updatedEnt);
      } else {

        const newEnt = {
          entmentname: values.entmentname,
          entmentdesc: values.entmentdesc,
          entmentimg: values.entmentimg
        };

        await getentmentPost(newEnt);



        handleCloseModal();
      }
      await Entpage();
    } catch (error) {
      console.error('Failed to save Spa entry:', error);
    }
  };

  const columns = [
    {
      title: 'Entertainment name',
      dataIndex: 'entmentname',
      key: 'entmentname'
    },
    {
      title: 'Entertainmnet Description',
      dataIndex: 'entmentdesc',
      key: 'entmentdesc',
    },
    {
      title: 'Entertainment Images',
      dataIndex: 'entmentimg',
      key: 'entmentimg',
      render: img =><img src={img} alt="entertainmentimage" style={{width:"220px",height:"150px"}} />   
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
        <Button type="primary" danger onClick={() => handleDeleteent(record._id)}>
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
        <div style={{ width: '80%', margin: '30px auto' }}>
          <Table columns={columns} dataSource={entadmin} />

          <Modal
            visible={modalOpen}
            title={editingent ? 'Edit About Entry' : 'Add New Images'}
            onCancel={handleCloseModal}
            onOk={handleSubmit}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="Entertainment name"
                name="entmentname"
                rules={[{ required: false }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Entertainmnet Description"
                name="entmentdesc"
                rules={[{ required: true, message: 'Please enter About' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Entertainment Images"
                name="entmentimg"
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

export default Ent