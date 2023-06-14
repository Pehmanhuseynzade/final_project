import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"
import "swiper/css";
import "swiper/css/pagination";
import "./swipper.css";
import "./home.scss"
import { Autoplay, Pagination } from "swiper";

import { useState } from 'react';
import { getInfodatas } from '../../../api/httpsrequests';

function Home() {

  const [info, setInfo] = useState([])

  useEffect(() => {
    getInfodatas().then((data) => {
      setInfo(data)
      console.log(data)
    })
  }, [])

  return (
    <>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <img src="https://www.marxalresort.az/assets/images/marxal-2000x1355.jpg" alt="marxal1" />
            <p>BEYNƏLXALQ STANDARTLAR VƏ ŞƏRQ QONAQPƏRVƏRLİYİ</p>
            <Link><button>Rezervasiya</button></Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.marxalresort.az/assets/images/img-2719-hdr-3-1280x851.jpg" alt="marxal2" />
            <p className="p">Sadəlik və Zəriflik</p>
            <Link><button>Rezervasiya</button></Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.marxalresort.az/assets/images/img-2697-edit-2000x1297.jpg" alt="marxal2" />
            <p className="p-1">İSTİRAHƏTİNİZİ UNUDULMAZ ETMƏK ÜÇÜN ÖZƏL VƏ FƏRDİ XİDMƏTLƏRİN SEÇİM GENİŞLİYİ</p>
            <Link><button>Rezervasiya</button></Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.marxalresort.az/assets/images/img-2612-2000x1333.jpg" alt="marxal4" />
            <p className="p-2">MÜXTƏLİF ÖLKƏLƏRDƏN VƏ MƏDƏNİYYƏTLƏRDƏN DƏBDƏBƏLİ QURMAN MƏTBƏXTLƏRİNİN DADI VƏ MÜASİR YEMƏK TƏRTİBATLAR</p>
            <Link><button>Rezervasiya</button></Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <main>

      </main>



      <div className='data'>
        {info && info.map((d) => (
          <div className='info-div' key={d._id}>
            <div>
              <h1>{d.count}</h1>
            </div>
            <div>
              <p>{d.name}</p>
            </div>
          </div>

        ))}
      </div>

      <div className='sect-2'>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/2m8a0676-1264x842.jpg" alt="" />
        </div>
        <div className='text'>
          <h2 className='h2'>İstirahət Kompleksimizə xoş gəlmişsiniz</h2>
          <div className='line'></div>
          <p className='text-p'>Azərbaycanın ən yaxşı otellərindən biri Marxal Resort & Spa füsunkarlığıyla 5 ulduzlu məkanın lüks və rahatlığını özündə birləşdirir. İçəri addımladığınız ilk andan bura Sizi özü ilə uzaqlara aparır. Bu otelin qüsursuz qonaqsevərliyi Sizə səfəriniz boyunca öz evinizdə olduğu kimi əziz qonaq hissini verəcək.</p>
          <button className='btnn'>Etrafli</button>
        </div>
      </div>

    </>
  )
}

export default Home