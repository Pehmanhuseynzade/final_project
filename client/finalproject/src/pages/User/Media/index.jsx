import React from 'react'
import "./media.scss"
import {Link} from "react-router-dom"
function Media() {
  return (
    <>
    <Link><h2 className='all-media'>Ümumi Şəkillər</h2></Link>
    <div className='media-images'>
        <div className='img-1'>
          <img className='mediaimages' src="https://www.marxalresort.az/assets/images/img-2517-800x533-800x533.jpg" alt="mediaimage1" />
          <img className='mediaimages' src="https://www.marxalresort.az/assets/images/1280x860-1-1280x860-800x538.jpg" alt="mediaimage2" />
          <img className='mediaimages' src="https://www.marxalresort.az/assets/images/6-1-1280x853-800x533.jpg" alt="mediaimage3" />
          <img className='mediaimages' src="https://www.marxalresort.az/assets/images/800x5336-800x533-800x533.jpg" alt="mediaimage4" />
        </div>
        <div className='img-2'>
          <img className='mediaimages' src="https://www.marxalresort.az/assets/images/fitnes-1280x853-800x533125.jpg" alt="mediaimage5" />
          <img className='mediaimages' src="https://www.marxalresort.az/assets/images/5-1-1280x853-800x533.jpg" alt="mediaimage6" />
          <img className='mediaimages' src="https://www.marxalresort.az/assets/images/7-1280x853-800x533126.jpg" alt="mediaimage7" />
          <img className='mediaimages' src="https://www.marxalresort.az/assets/images/3-1-1280x853-800x533127.jpg" alt="mediaimage8" />
        </div>
      </div>
    </>
  )
}

export default Media