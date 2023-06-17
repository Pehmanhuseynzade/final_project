import React from 'react'
import "./tour.scss"
function Tour() {
  return (
    <>
     <div className='tour-sect-1'>
        <div className='text'>
          <h2 className='h2'>Turlar</h2>
          <div className='line'></div>
          <p style={{fontWeight:"bold"}} >“Xan yaylağı” turu </p> 
          <p> Marxal Resort & Spa Kompleksi hər tərəfdən Böyük Qafqazın meşəli dağları ilə əhatə olunmuşdur. Otelimizdə olduğunuz müddətdə Sizin oteldən 7 km. məsafədə yerləşən Xan Yaylağına offroad turunda iştirak etmək imkanınız olacaq. Xan Yaylağı zirvəsi bu bölgənin ən yüksək zirvəsidir. </p>
          <p style={{fontWeight:"bold"}}>“Bio Bağ” turu</p>
          <p className='p' >Təbiət həvəskarları üçün maraqlı olacaq Bio Bağ oteldən 15 km. məsafədə yerləşir. Burada Siz zəngin fauna və flora nümunələri ilə tanış ola bilərsiniz.</p>
        </div>
        <div className='image'>
          <img className='img' src="https://www.marxalresort.az/assets/images/17-1264x843.jpg" alt="tourimage" />
        </div>
      </div>

      <div className='tour-images'>
        <div className='img-2'>
          <img className='tourimages' src="https://www.marxalresort.az/assets/images/img-2517-800x533-800x533.jpg" alt="tourimage1" />
          <img className='tourimages' src="https://www.marxalresort.az/assets/images/1280x860-1-1280x860-800x538.jpg" alt="tourimage2" />
          <img className='tourimages' src="https://www.marxalresort.az/assets/images/6-1-1280x853-800x533.jpg" alt="tourimage3" />
          <img className='tourimages' src="https://www.marxalresort.az/assets/images/800x5336-800x533-800x533.jpg" alt="tourimage4" />
        </div>
        </div>
    </>
  )
}

export default Tour