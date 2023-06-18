import React, { useEffect, useState } from 'react'
import "./about.scss"
import { getAboutdatas } from '../../../api/httpsrequests'
function About() {
  const [about, setAbout] = useState([])
  useEffect(() => {
    getAboutdatas().then((data) => {
      setAbout(data)
      console.log(data)
    })
  },[])
  return (
    <>
      <div>
        {about && about.map((d) => (
          <div key={d._id} className='about-page'>
            <div>
              <h1>İstirahət Kompleksimizə xoş gəlmişsiniz</h1>
              <div className='line'></div>
              <p>
                {d.desc1}
              </p>

              <p className='content-2'>
              {d.desc2}
              </p>

              <p>* * * * *</p>
            </div>

            <div className='about-image'>
              <img src={d.aboutimage} alt="aboutimage" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default About