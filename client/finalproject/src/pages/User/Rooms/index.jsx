import React, { useEffect, useState } from 'react'
import "./rooms.scss"
import { getroominfodatas, getroomsdatas } from '../../../api/httpsrequests'
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Rooms() {
  const [roominfo, setRoominfo] = useState([])
  const [room, setRoom] = useState([])
  useEffect(() => {
    getroominfodatas().then((data) => {
      console.log(data)
      setRoominfo(data)
    })
  }, [])

  useEffect(() => {
    getroomsdatas().then((data) => {
      console.log(data)
      setRoom(data)
    })
  }, [])
  return (
    <>
        <Helmet>
          <title>Rooms</title>
          <link rel="icon" type="image/png" href="https://www.marxalresort.az/assets/images/3-2868x2153.png" />
          <meta
            name="description"
            content="Beginner friendly page for learning React Helmet."
          />
        </Helmet>
      <div>
        {roominfo && roominfo.map((roominfoitem) => (
          <div key={roominfoitem._id} className='room-info'>
            <h1 className='room'>{roominfoitem.totalname}</h1>
            <p className='room-p'>{roominfoitem.roominfos}</p>
          </div>
        ))}
      </div>

      <div>
        {room && room.map((roomitem) => (
          <div key={roomitem._id} className='rooms'>
            <h1 className='room-name'>{roomitem.roomname}</h1>
            <div ><div className='line'></div></div>
            <div className='room-images'>
            <SRLWrapper>
              <div className='img-1'>
                <div className='image-div'>
                  <img className='roomimages' src={roomitem.roomimg1} />
                  <div class="overlay">
                  </div>
                </div>
                <div className='image-div'>
                  <img className='roomimages' src={roomitem.roomimg2} />
                  <div class="overlay">
                  </div>
                </div>
                <div className='image-div'>
                  <img className='roomimages' src={roomitem.roomimg3} />
                  <div class="overlay">
                  </div>
                </div>
                <div className='image-div'>
                  <img className='roomimages' src={roomitem.roomimg4} />
                  <div class="overlay">
                  </div>
                </div>
              </div>
              </SRLWrapper>
            </div>
            <div className='do-reservation'>
              <Link to='/reserveroom'><button>Rezervasiya et</button></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Rooms