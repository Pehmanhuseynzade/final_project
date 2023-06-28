import React, { useEffect, useState } from 'react'
import "./media.scss"
import { Link } from "react-router-dom"
import { getmediadatas } from '../../../api/httpsrequests'
import { SRLWrapper } from "simple-react-lightbox";
function Media() {
  const [media, setMedia] = useState([])
  useEffect(() => {
    getmediadatas().then((data) => {
      console.log(data)
      setMedia(data)
    })
  }, [])
  return (
    <>
      <Link><h2 className='all-media'>Ümumi Şəkillər</h2></Link>
      <SRLWrapper>
        <div className='media-images'>
          {media && media.map((image) => (
            <div key={image._id} className='img-1'>
              <img className='mediaimages' src={image.mediaimage} alt="mediaimage1" />
              <div class="overlay">
              </div>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </>
  )
}

export default Media