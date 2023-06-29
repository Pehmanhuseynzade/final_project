import React, { useEffect, useState } from 'react'
import "./roomreserve.scss"
import { Modal, Input, Form, DatePicker } from 'antd';
import { useParams } from "react-router-dom"
import { getreservemdatas, getreservePost, reservepost } from "../../../api/httpsrequests"
import axios from 'axios';
function Reserveroom() {

    const { id } = useParams()
    const [reserverooms, setReserverooms] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);
    const [detail, setDetail] = useState(null)
    const [data, setData] = useState({})
    const [form] = Form.useForm();

    const handleitemSelected = (itemid) => {
        const clickedCard = reserverooms.find(card => card._id === itemid)
        if (clickedCard) {
            console.log(`clicked id ${clickedCard._id}`);
            console.log(`${clickedCard.nameroom}`);
            setData(clickedCard)
        }
    }
    const getSelected = () => {
        if (detail) {
            const selecteditem = reserverooms.find((item) => item._id === detail)
            console.log(detail)

        }
    }

    const handleOpenModal = (ress) => {
        // setEditing(ress)
        setModalOpen(true);
        form.setFieldsValue({
            formusername: ress?.formusername || '',
            lastname: ress?.lastname || '',
            formemail: ress?.formemail || '',
            phonenum: ress?.phonenum || '',
            start: ress?.start || '',
            end: ress?.end || '',
            personcount: ress?.personcount || '',
        });
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        form.resetFields();
    };

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            const newres = {
                nameroom: data.nameroom,
                price: data.price,
                personcount: data.personcount,
                capacity: data.capacity,
                countroom: data.countroom,
                formusername: values?.formusername || '',
                lastname: values?.lastname || '',
                formemail: values?.formemail || '',
                phonenum: values?.phonenum || '',
                start: values?.start || '',
                end: values?.end || '',
            };

            await reservepost(newres);
            handleCloseModal();

        } catch (error) {
            console.error('Failed to save Spa entry:', error);
        }
    };
    useEffect(() => {
        getreservemdatas().then((data) => {
            console.log(data)
            setReserverooms(data)
        })
    }, [])
    console.log(editing)
    console.log(data);
    return (
        <>
            <div className='title-reserv'>
                <div ><div className='line'></div></div>
                <p>Aşağıdakı formadan istifadə edərək otaqlarımızı onlayn və zəmanətli sifariş edə bilərsiniz.</p>
            </div>
            <div className='reservepage'>
                <div className='second-div-reserve'>
                    <p className='title-sent'>Otaq seçin</p>
                    <div className='cards'>
                        {reserverooms && reserverooms.map((roomitems) => (
                            <div key={roomitems._id} className='card'>
                                <div>
                                    <img style={{ width: "300px", height: "200px", objectFit: "cover" }} src={roomitems.imageroom} alt="Roomimage" />
                                </div>
                                <div>
                                    <p className='name'>{roomitems.nameroom}</p>
                                    <div className='capacity-prsncount'>
                                        <p className='person'><i class="fa-solid fa-users"></i> {roomitems.personcount} nəfərlik</p>
                                        <p className='capacity'><i className="fa-solid fa-arrows-up-down"></i> {roomitems.capacity}kv</p>
                                        <p><i class="fa-solid fa-house"></i> {roomitems.countroom} <span>otaq</span></p>
                                    </div>
                                    <div className='price-btn' style={{ display: "flex", gap: "30px" }}>
                                        <p className='price'><span>{roomitems.price}</span>Azn</p>
                                        <div><button onClick={() => { handleOpenModal(null); handleitemSelected(roomitems._id) }}>Bron et</button></div>
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
                    // title={editing ? 'Edit Spa  Entry' : 'Add New '}
                    onCancel={handleCloseModal}
                    onOk={handleSubmit}
                >
                    <Form form={form} layout="vertical">
                        <div className='disableds'>
                            <label htmlFor="nameroom">Room Name</label>
                            <input type="text" value={data.nameroom} id='nameroom' disabled />
                            
                            <label htmlFor="price">Price</label>
                            <input type="text" value={data.price} id='price' disabled />
                            
                            <label htmlFor="personcount">Person Count</label>
                            <input type="text" value={data.personcount} id='personcount' disabled />
                            
                            <label htmlFor="capacity">Capacity:</label>
                            <input type="text" value={data.capacity} id='capacity' disabled />

                            <label htmlFor="countroom">Room Count</label>
                            <input type="text" value={data.countroom} id='countroom' disabled />
                        </div>
                        <Form.Item
                            label="FirstName"
                            name="formusername"
                            rules={[{ required: true, message: 'Please enter FirstName name' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="LastName"
                            name="lastname"
                            rules={[{ required: true, message: 'Please enter Restaurants desc' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="formemail"
                            rules={[{ required: true, message: 'Please enter Spa desc' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Phone"
                            name="phonenum"
                            rules={[{ required: true, message: 'Please enter SPA images' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Persons:"
                            name="personcount"
                            rules={[{ required: true, message: 'Please enter SPA images' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Check-in Date"
                            name="start"
                            rules={[{ required: true, message: 'Please enter the check-in date' }]}
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item
                            label="Check-out Date"
                            name="end"
                            rules={[{ required: true, message: 'Please enter the check-out date' }]}
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>

                    </Form>
                </Modal>
            </div>
        </>
    )
}

export default Reserveroom