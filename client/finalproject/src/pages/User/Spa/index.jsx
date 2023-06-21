import React, { useEffect, useState } from 'react'
import "./spa.scss"
import { getspainfo1datas } from '../../../api/httpsrequests'
function Spa() {
  // const [spainfo2, setSpainfo2] = useState([])

  const [spainfo1, setSpainfo1] = useState([])
  useEffect(() => {
    getspainfo1datas().then((data) => {
      console.log(data)
      setSpainfo1(data)
    })
  }, [])

  // useEffect(()=>{
  //   getspainfo2datas().then((data)=>{
  //     console.log(data)
  //     setSpainfo2(data)
  //   })
  // },[])
  return (
    <>
    <section className='for-spa'>
    {spainfo1 && spainfo1.map((spaitem, idx) => (
        <div key={spaitem._id}>
          {idx%2 ? (<div className='spa-sect-1'>
            <div className='image'>
              <img className='img' src={spaitem.spaimg1} alt="spaimage1" />
            </div>
            <div className='text'>
              <h2 className='h2'>{spaitem.spaname}</h2>
              <div className='line'></div>
              <p >{spaitem.spadesc1}</p>
              <p className='p' >{spaitem.spadesc2}</p>
            </div>
          </div>) : (<div className='spa-sect-1'>
            <div className='text'>
              <h2 className='h2'>{spaitem.spaname}</h2>
              <div className='line'></div>
              <p >{spaitem.spadesc1}</p>
              <p className='p' >{spaitem.spadesc2}</p>
            </div>
            <div className='image'>
              <img className='img' src={spaitem.spaimg1} alt="spaimage1" />
            </div>
          </div>)}
        </div>
      ))}
    </section>


      {/* <div className='spa-sect-1'>
      <div className='text'>
        <h2 className='h2'>{spaitem.spaname}</h2>
        <div className='line'></div>
        <p >{spaitem.spadesc1}</p>
        <p className='p' >{spaitem.spadesc2}</p>
      </div>
      <div className='image'>
        <img className='img' src={spaitem.spaimg1} alt="spaimage1" />
      </div>
    </div> */}

      {/* {spainfo2 && spainfo2.map((spaitem2)=>(
        <div className='spa-sect-2'>
        <div className='image'>
          <img className='img' src={spaitem2.spaimg2} alt="spaimage2" />
        </div>
        <div className='text'>
          <h2 className='h2'>{spaitem2.spaname2}</h2>
          <div className='line'></div>
          <p >{spaitem2.spa2desc1}</p>
          <p className='p'>{spaitem2.spa2desc2}</p>
        </div>
      </div>
      ))} */}

      {/* <div className='spa-sect-3'>
        <div className='text'>
          <h2 className='h2'>Duz otağı</h2>
          <div className='line'></div>
          <p >Duz otağı müalicəvi olmağı ilə yanaşı sakitləşdiricidir, 25 dəqiqəlik seans ərzində aldığınız hər dərin nəfəsdə otağın duzlu havası öz təbii müalicəvi gücünü işə salmaqla yanaşı rahatladıcı mühitlə Sizi əhatə edəcək.</p>
          <p className='p'>Allergiya • Astma • Zökəm • Sinus infeksiyası • Stress • Ekzema</p>
        </div>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/salt-950x549.jpg" alt="spaimage" />
        </div>
      </div> */}

      <div className='spa-images'>
        <div className='img-1'>
          <img className='spaimages' src="https://www.marxalresort.az/assets/images/img-2517-800x533-800x533.jpg" alt="spaimage1" />
          <img className='spaimages' src="https://www.marxalresort.az/assets/images/1280x860-1-1280x860-800x538.jpg" alt="spaimage2" />
          <img className='spaimages' src="https://www.marxalresort.az/assets/images/6-1-1280x853-800x533.jpg" alt="spaimage3" />
          <img className='spaimages' src="https://www.marxalresort.az/assets/images/800x5336-800x533-800x533.jpg" alt="spaimage4" />
        </div>
      </div>
    </>
  )
}

export default Spa