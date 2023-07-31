import React, { useEffect, useState } from 'react'
import "./media.scss"
import { Link } from "react-router-dom"
import { getmediadatas } from '../../../api/httpsrequests'
import { SRLWrapper } from "simple-react-lightbox";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Media</title>
        <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <Link><h2 className='all-media'>Ümumi Şəkillər</h2></Link>
      <SRLWrapper>
        <div className='media-images'>
          {media && media.map((image) => (
            <div key={image._id} className='img-1'>
              <img className='mediaimages' src={image.mediaimage} />
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