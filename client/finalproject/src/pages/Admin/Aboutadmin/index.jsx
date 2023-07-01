import React, { useEffect, useState } from 'react'
import "../adminpage.scss"
import "./about.scss"
import { getAboutdatas, getaboutDelete, getaboutPost } from '../../../api/httpsrequests';
import { Table, Button, Modal, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../context/Usercontext';
import Swal from 'sweetalert2';
import axios from 'axios';



function Aboutadmin() {
  const [aboutadmin, setAboutadmin] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingabout, setEditingabout] = useState(null);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const[admin,setAdmin] = useUserContext();
  useEffect(()=>{
    if(admin===null && !localStorage.getItem("loggedIn")){
        navigate('/loginadmin');
    }
  },[])
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

  const handleEditData = (record) => {
    Swal.fire({
      title: "Edit Record",
      html: `
        <input id="edit-desc1" type="text" placeholder="desc1 :" value="${record.desc1}" class="swal2-input" />
        <input id="edit-desc2" type="text" placeholder="desc2" value="${record.desc2}" class="swal2-input" />
        <input id="edit-aboutimage" type="text" placeholder="image" value="${record.aboutimage}" class="swal2-input" />
      `,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        const editeddesc1 = Swal.getPopup().querySelector("#edit-desc1").value;
        const editeddesc2 = Swal.getPopup().querySelector("#edit-desc1").value;
        const editedaboutimage = Swal.getPopup().querySelector("#edit-aboutimage").value;
  
        if (!editeddesc1 || !editeddesc2 || !editedaboutimage) {
          Swal.showValidationMessage("Please fill in all fields");
          return false;
        }
        return {
          desc1: editeddesc1,
          desc2: editeddesc2,
          aboutimage:editedaboutimage
        };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const editedData = result.value;
        console.log("Edited Data:", editedData);
  
        try {
          await axios.put(`http://localhost:7576/api/about/${record._id}`, editedData);
        } catch (error) {
          console.error(error);
        }
      }
    });
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
 {
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
      title: "Edit",
      dataIndex: "",
      key: "edit",
      render: (text, record) => (
        <Button
          style={{
            background: "#1677ff",
            color: "white",
            width: 80,
            height: 40,
            fontFamily: "chillax-regular",
          }}
          onClick={() => {
            handleEditData(record)
          }}
        >
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
          <button type="primary" onClick={() => handleOpenModal(null)} style={{ marginLeft: '550px', marginTop: '60px' }}>
            Add
          </button>
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