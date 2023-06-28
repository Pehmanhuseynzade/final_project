import React from 'react'
import "./roomreserve.scss"
import { Card } from 'antd';
function Reserveroom() {
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
                        <div className='card'>
                            <Card
                                hoverable = "true"
                                style={{
                                    width: 320,
                                }}
                                cover={<img alt="example" src="https://secure.travelline.sg/resource/images/rt/133172/637529750593259485-b7405b61-c460-4342-838a-26e96f0985a4" />}
                            >
                                
                                <p className='name'><span>Otaq adı:</span> Kunc suit otaq</p>
                                <div className='capacity-prsncount'>
                                <p className='person'><span>Sayı:</span> 2 neferlik</p>
                                <p className='capacity'><span>Kvadrat:</span> 50kv</p>
                                </div>
                                <div className='price-btn' style={{display:"flex",gap:"30px"}}>
                                    <p className='price'><span>Qiymət:</span>100<span>Azn</span></p>
                                    <button>Bron et</button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reserveroom