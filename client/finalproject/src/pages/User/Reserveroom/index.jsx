import React, { useEffect, useState } from 'react';
import './roomreserve.scss';
import { Modal, Input, Form, DatePicker, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { getreservemdatas, reservepost } from '../../../api/httpsrequests';
import axios from 'axios';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

function Reserveroom() {
  const { id } = useParams();
  const [reserverooms, setReserverooms] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});
  const [form] = Form.useForm();
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const [isPosted, setIsPosted] = useState(false);
  const [user, setUser] = useState([])
  const navigate = useNavigate()
  const handleitemSelected = (itemId) => {
    const clickedCard = reserverooms.find((card) => card._id === itemId);
    if (clickedCard) {
      setSelectedRoomId(clickedCard._id);
      setData(clickedCard);
    }
  };

  const getData = async () => {
    const res = axios.get("http://localhost:7576/api/userss")
    setUser(res.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    form.resetFields();
    localStorage.removeItem('selectedRoomId');
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const reservationData = {
        type: data.type,
        nameroom: data.nameroom,
        price: data.price,
        personcount: data.personcount,
        capacity: data.capacity,
        countroom: data.countroom,
        formusername: values.formusername,
        lastname: values.lastname,
        formemail: values.formemail,
        phonenum: values.phonenum,
        start: values.start,
        end: values.end,
        isPosted: true,
      };
      const isReservationSuccessful = await reservepost(reservationData);
      if (isReservationSuccessful) {
        setData({ ...data, isPosted: true });
      }
      handleCloseModal();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Otaq bron edildi',
        showConfirmButton: false,
        timer: 1500
      })

      const selectedRoomId = data._id; // ya da data'dan ilgili ID'yi alın
      localStorage.setItem('selectedRoomId', selectedRoomId);
    } catch (error) {
      console.error('Failed to make a reservation:', error);
    }
  };

  useEffect(() => {
    getreservemdatas()
      .then((data) => {
        setReserverooms(data);
      })
      .catch((error) => {
        console.error('Failed to fetch reservation data:', error);
      });
  }, []);

  useEffect(() => {
    const storedSelectedRoomId = localStorage.getItem('selectedRoomId');
    if (storedSelectedRoomId) {
      setSelectedRoomId(storedSelectedRoomId);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Reserve</title>
        <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div className="title-reserv">
      </div>
      <div className="reservepage">
        <div className="second-div-reserve">
          <p className="title-sent">Otaq Seçin</p>
          <div className="cards">
            {reserverooms.map((roomItem) => (
              <div key={roomItem._id} className="card">
                <div>
                  <img
                    style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    src={roomItem.imageroom}
                    alt="Room Image"
                  />
                </div>
                <div>
                  <p className='reserved'><i class="fa-solid fa-hotel"></i>{roomItem._id === selectedRoomId ? 'Rezerv olunub' : 'Rezerv olunmayıb'}</p>
                  <p className="name">{roomItem.nameroom}</p>
                  <div className="capacity-prsncount">
                    <p className="person">
                      <i className="fa-solid fa-users"></i> {roomItem.personcount} nəfərlik
                    </p>
                    <p className="capacity">
                      <i className="fa-solid fa-arrows-up-down"></i> {roomItem.capacity} kv
                    </p>
                    <p>
                      <i className="fa-solid fa-house"></i> {roomItem.countroom} <span>otaq</span>
                    </p>
                  </div>
                  <div className="price-btn" style={{ display: 'flex', gap: '30px' }}>
                    <p className="price">
                      <span>{roomItem.price}</span> AZN
                    </p>
                    <div>
                      {roomItem._id === selectedRoomId ? (
                        <button style={{ backgroundColor: 'gray' }}>Bron edilib</button>
                      ) : (
                        <button
                          onClick={() => {
                            if (!localStorage.getItem("token")) {
                              navigate("/registerr")
                            }
                            handleOpenModal();
                            handleitemSelected(roomItem._id);
                            localStorage.setItem('selectedRoomId', roomItem._id);
                          }}
                          disabled={roomItem._id === selectedRoomId}
                        >
                          {roomItem._id === selectedRoomId ? 'Bron edilib' : 'Bron et'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Modal
          visible={modalOpen}
          onCancel={handleCloseModal}
          footer={[
            <div style={{display:"flex",gap:"10px"}}>
              <button
                key="cancel"
                onClick={() => {
                  handleCloseModal();
                  setSelectedRoomId('');
                  localStorage.removeItem('selectedRoomId');
                }}
              >
                İmtina et
              </button>,
              <button key="submit" type="primary" onClick={handleSubmit}>
                Bron et
              </button>,
            </div>
          ]}
        >
          <Form form={form} layout="vertical">
            <div className="disableds">
              <label htmlFor="nameroom">Otaq Adı</label>
              <input type="text" value={data.nameroom} id="nameroom" disabled />

              <label htmlFor="price">Qiymət</label>
              <input type="text" value={data.price} id="price" disabled />

              <label htmlFor="personcount">Adam Sayı</label>
              <input type="text" value={data.personcount} id="personcount" disabled />

              <label htmlFor="capacity">Kvadratı:</label>
              <input type="text" value={data.capacity} id="capacity" disabled />

              <label htmlFor="countroom">Otaq Sayı</label>
              <input type="text" value={data.countroom} id="countroom" disabled />
            </div>
            <Form.Item
              label="Ad"
              name="formusername"
              rules={[{ required: true, message: 'Lütfen adınızı girin' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Soyad"
              name="lastname"
              rules={[{ required: true, message: 'Lütfen soyadınızı girin' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-poçt"
              name="formemail"
              rules={[
                { required: true, message: 'Lütfen e-posta adresinizi girin' },
                { type: 'email', message: 'Lütfen geçerli bir e-posta adresi girin' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Telefon"
              name="phonenum"
              rules={[{ required: true, message: 'Lütfen telefon numaranızı girin' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Başlangıç Tarihi"
              name="start"
              rules={[{ required: true, message: 'Lütfen başlangıç tarihini girin' }]}
            >
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item
              label="Bitiş Tarihi"
              name="end"
              rules={[{ required: true, message: 'Lütfen bitiş tarihini girin' }]}
            >
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default Reserveroom;