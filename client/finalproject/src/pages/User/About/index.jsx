import React, { useEffect, useState } from 'react'
import "./about.scss"
import { getAboutdatas } from '../../../api/httpsrequests'
import { Helmet } from "react-helmet";

function About() {
  const [about, setAbout] = useState([])
  useEffect(() => {
    getAboutdatas().then((data) => {
      setAbout(data)
      console.log(data)
    })
  }, [])
  return (
    <>
      <Helmet>
        <title>About</title>
        <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div>
        {about && about.map((d) => (
          <div key={d._id} className='about-page'>
            <div className='about-image'>
              <img src={d.aboutimage} alt="aboutimage" />
            </div>
            <div>
              <h1 className='resort'>İstirahət Kompleksimizə xoş gəlmisiniz</h1>
              <div className='line'></div>
              <p className='content-2'>{d.desc1}</p>
              <p className='content-2'>{d.desc2}</p>
              <p style={{color:"rgba(255, 255, 255, 0.833)"}}>* * * * *</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default About