import React, { useEffect, useState } from 'react'
import "./spa.scss"
import { getspaimagesdatas, getspainfo1datas } from '../../../api/httpsrequests'
import { SRLWrapper } from "simple-react-lightbox";
import { Helmet } from "react-helmet";

function Spa() {

  const [spaimgg, setSpaimgg] = useState([])
  const [spainfo1, setSpainfo1] = useState([])
  useEffect(() => {
    getspainfo1datas().then((data) => {
      console.log(data)
      setSpainfo1(data)
    })
  }, [])

  useEffect(() => {
    getspaimagesdatas().then((data) => {
      console.log(data)
      setSpaimgg(data)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>Spa</title>
        <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <section className='for-spa'>
        {spainfo1 && spainfo1.map((spaitem, idx) => (
          <div key={spaitem._id}>
            {idx % 2 ? (<div className='spa-sect-1'>
              <div className='image'>
                <img className='img' src={spaitem.spaimg1}  />
              </div>
              <div className='text'>
                <h2 className='h22'>{spaitem.spaname}</h2>
                <div className='line'></div>
                <p >{spaitem.spadesc1}</p>
                <p className='p' >{spaitem.spadesc2}</p>
              </div>
            </div>) : (<div className='spa-sect-1'>
              <div className='text'>
                <h2 className='h22'>{spaitem.spaname}</h2>
                <div className='line'></div>
                <p >{spaitem.spadesc1}</p>
                <p className='p' >{spaitem.spadesc2}</p>
              </div>
              <div className='image'>
                <img className='img' src={spaitem.spaimg1}  />
              </div>
            </div>)}
          </div>
        ))}
      </section>
      <SRLWrapper>
        <div className='spa-images'>
          {spaimgg && spaimgg.map((spaimagesitem) => (
            <div key={spaimagesitem._id} className='img-1'>
              <img className='spaimages' src={spaimagesitem.spaimg}  />
              <div class="overlay">
              </div>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </>
  )
}

export default Spa