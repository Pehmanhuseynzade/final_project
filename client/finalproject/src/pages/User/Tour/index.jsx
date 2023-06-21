import React, { useEffect, useState } from 'react'
import "./tour.scss"
import { gettourdatas, gettourimgdatas } from "../../../api/httpsrequests"
function Tour() {
  const [tour, setTour] = useState([])
  const [tourimg, setTourimg] = useState([])
  useEffect(() => {
    gettourdatas().then((data) => {
      setTour(data)
      console.log(data)
    })
  },[])

  useEffect(() => {
    gettourimgdatas().then((data) => {
      setTourimg(data)
      console.log(data)
    })
  },[])

  return (
    <>
      <div className='tour-sect-1'>
        <div className='text'>
          <h2 className='h2'>Turlar</h2>
          <div className='line'></div>
          <p style={{ fontWeight: "bold" }} >“Xan yaylağı” turu </p>
          <p> Marxal Resort & Spa Kompleksi hər tərəfdən Böyük Qafqazın meşəli dağları ilə əhatə olunmuşdur. Otelimizdə olduğunuz müddətdə Sizin oteldən 7 km. məsafədə yerləşən Xan Yaylağına offroad turunda iştirak etmək imkanınız olacaq. Xan Yaylağı zirvəsi bu bölgənin ən yüksək zirvəsidir. </p>
          <p style={{ fontWeight: "bold" }}>“Bio Bağ” turu</p>
          <p className='p' >Təbiət həvəskarları üçün maraqlı olacaq Bio Bağ oteldən 15 km. məsafədə yerləşir. Burada Siz zəngin fauna və flora nümunələri ilə tanış ola bilərsiniz.</p>
        </div>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/17-1264x843.jpg" alt="tourimage" />
        </div>
      </div>

      <div className='tour-images'>
      {tourimg && tourimg.map((tourimgitem)=>(
                <div className='img-2'>
                <img className='tourimages' src={tourimgitem.tourimgs} alt="tourimage1" />
                </div>
      ))}
      </div>

      <section className='for-tour'>
        {tour && tour.map((touritem, idx) => (
          <div key={touritem._id}>
            {idx % 2 ? (<div className='tour-sect-2'>
              <div className='text'>
                <h2 className='h2'>{touritem.tourname}</h2>
                <div className='line'></div>
                <p >{touritem.tourdesc}</p>
              </div>
              <div className='image'>
                <img className='img' src={touritem.tourimg} alt="tourimage1" />
              </div>
            </div>
            ) : (<div className='tour-sect-2'>
              <div className='image'>
                <img className='img' src={touritem.tourimg} alt="tourimage1" />
              </div>
              <div className='text'>
                <h2 className='h2'>{touritem.tourname}</h2>
                <div className='line'></div>
                <p >{touritem.tourdesc}</p>
              </div>
            </div>)}
          </div>
        ))}
      </section>
    </>
  )
}

export default Tour