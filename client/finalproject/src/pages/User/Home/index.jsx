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
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

function Home() {

  const [info, setInfo] = useState([])
  // const [counterOn,setCounterOn] = useState(false)
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
            <Link to='rooms'><button>Rezervasiya</button></Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.marxalresort.az/assets/images/img-2719-hdr-3-1280x851.jpg" alt="marxal2" />
            <p className="p">Sadəlik və Zəriflik</p>
            <Link to='rooms'><button>Rezervasiya</button></Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.marxalresort.az/assets/images/img-2697-edit-2000x1297.jpg" alt="marxal2" />
            <p className="p-1">İSTİRAHƏTİNİZİ UNUDULMAZ ETMƏK ÜÇÜN ÖZƏL VƏ FƏRDİ XİDMƏTLƏRİN SEÇİM GENİŞLİYİ</p>
            <Link to='rooms'><button>Rezervasiya</button></Link>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.marxalresort.az/assets/images/img-2612-2000x1333.jpg" alt="marxal4" />
            <p className="p-2">MÜXTƏLİF ÖLKƏLƏRDƏN VƏ MƏDƏNİYYƏTLƏRDƏN DƏBDƏBƏLİ QURMAN MƏTBƏXTLƏRİNİN DADI VƏ MÜASİR YEMƏK TƏRTİBATLAR</p>
            <Link to='rooms'><button>Rezervasiya</button></Link>
          </SwiperSlide>
        </Swiper>
      </div>
{/* 
      <main>

      </main> */}



      <div className='data'>
        {info && info.map((d) => (
          <div className='info-div' key={d._id}>
            <ScrollTrigger>
              <h1><CountUp start={0} end={d.count} duration={2} delay={0}/></h1>
            </ScrollTrigger>
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
          <Link to='about'><button className='btnn'>Ətraflı</button></Link>
        </div>
      </div>



      <div className='sect-5'>
      <div className='text'>
          <h2 className='h2'>Otaqlar</h2>
          <div className='line'></div>
          <p className='text-p'>Lüks və rahatlıqla təmin edilən möhtəşəm otaq və suitlərimizdə gözəl gecə yuxusundan həzz alın.</p>
          <Link to='rooms'><button className='btnn'>Ətraflı</button></Link>
        </div>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/9s7a5808-1264x842.jpg" alt="" />
        </div>
      </div>

      <div className='sect-3'>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/esas-2.jpg" alt="" />
        </div>
        <div className='text'>
          <h2 className='h2'>Bar və Restoranlar</h2>
          <div className='line'></div>
          <p className='text-p'>Bizim Kompleks qonaqlarına müasir avadanlıqlarla təchiz olunmuş, peşəkar heyət və ləziz mətbəxi ilə bir neçə restoran təqdim edir. Siz bizim restoranlarımızda milli və xarici mətbəxin təamlarını dada bilərsiniz.</p>
          <Link to='restaurant'><button className='btnn'>Ətraflı</button></Link>
        </div>
      </div>

      <div className='sect-6'>
      <div className='text'>
          <h2 className='h2'>Sağlamlıq və Spa</h2>
          <div className='line'></div>
          <p className='text-p'>Dünyanın hər yerindən yüksək keyfiyyətli və zövqlü markaları istifadə edərək zəngin müalicə üsullarını kəşf edin. Xidmətlərimizə üz masajları, lüks masajlar, bədən yumşaldıcı və qüvvətləndirici müalicəvi masajlar, türk hamamı daxildir.</p>
          <Link to='spa'><button className='btnn'>Ətraflı</button></Link>
        </div>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/1280x860-1280x860.jpg" alt="" />
        </div>
      </div>

      <div className='sect-4'>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/800x533-800x533.jpg" alt="" />
        </div>
        <div className='text'>
          <h2 className='h2'>Əyləncə</h2>
          <div className='line'></div>
          <p className='text-p'>Əziz qonaqlar, Marxal Resort & Spa Sizə boulinq oyununu məmnunluqla təqdim edir. Rus bilyardının rahat və xoş mühitində istirahət edin. Siz ailənizlə, iş yoldaşlarınızla, dostlarınızla əyləncə mərkəzində maraqlı vaxt keçirə yüngül qəlyanaltı menyusundan dadlı təamlar və müxtəlif içkilər sifariş edə bilərsiniz.</p>
          <Link to='entertainment'><button className='btnn'>Ətraflı</button></Link>
        </div>
      </div>


      <div className='sect-7'>
      <div className='text'>
          <h2 className='h2'>Konfranslar və Tədbirlər</h2>
          <div className='line'></div>
          <p className='text-p'>Marxal Resort & Spa fərdi və ictimai tədbirlər, konfranslar və iş görüşləri üçün ideal seçimdir.</p>
          <Link to='parties'><button className='btnn'>Ətraflı</button></Link>
        </div>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/443a9485-1264x842.jpg" alt="" />
        </div>
      </div>

    </>
  )
}

export default Home