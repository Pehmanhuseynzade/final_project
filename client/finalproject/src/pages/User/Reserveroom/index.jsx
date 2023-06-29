import React, { useEffect, useState } from 'react'
import "./roomreserve.scss"
// import { Card } from 'antd';
import { getreservemdatas } from "../../../api/httpsrequests"
function Reserveroom() {
    const [reserverooms, setReserverooms] = useState([])
    useEffect(() => {
        getreservemdatas().then((data) => {
            console.log(data)
            setReserverooms(data)
        })
    }, [])
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
                                        <div><button>Bron et</button></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reserveroom


{/* <Card
                                hoverable = "true"
                                style={{
                                    width: 320,
                                }}
                                cover={<img alt="example" src="https://secure.travelline.sg/resource/images/rt/133172/637529750593259485-b7405b61-c460-4342-838a-26e96f0985a4" />}
                            >
                                <div>
                                <p className='name'><span>Otaq adı:</span> Kunc suit</p>
                                <div className='capacity-prsncount'>
                                <p className='person'><span>Sayı:</span> 2 neferlik</p>
                                <p className='capacity'><span>Kvadrat:</span> 50kv</p>
                                </div>
                                <div className='price-btn' style={{display:"flex",gap:"30px"}}>
                                    <p className='price'><span>Qiymət:</span>100<span>Azn</span></p>
                                    <button>Bron et</button>
                                </div>
                                </div>
                            </Card>                             */}