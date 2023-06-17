import React from 'react'
import "./rooms.scss"
function Rooms() {
  return (
    <>
    <div className='rooms'>
    <h1 className='room'>Otaq və Kotteclər</h1>
    <p className='room-p'>Kompleksin tam doluluq sayı 600 nəfərdir, Bunlardan 390 mehmanxana otaqlarında, 210 nəfər kotteclərdə yerləşir</p>
    <h1 className='room-name'>STANDARD KING</h1>
    <div><div className='line'></div></div>
    <div className='room-images'>
        <div className='img-1'>
          <img className='roomimages' src="https://www.marxalresort.az/assets/images/img-2517-800x533-800x533.jpg" alt="roomimage1" />
          <img className='roomimages' src="https://www.marxalresort.az/assets/images/1280x860-1-1280x860-800x538.jpg" alt="roomimage2" />
          <img className='roomimages' src="https://www.marxalresort.az/assets/images/6-1-1280x853-800x533.jpg" alt="roomimage3" />
          <img className='roomimages' src="https://www.marxalresort.az/assets/images/800x5336-800x533-800x533.jpg" alt="roomimage4" />
        </div>
        </div>
    </div>
    </>
  )
}

export default Rooms