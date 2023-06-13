import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swipper.css";
import "./home.scss"

// import required modules
import { Autoplay, Pagination } from "swiper";

function Home() {
  return (
    <>
      <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
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

      <section>
        
      </section>
    </>
  )
}

export default Home