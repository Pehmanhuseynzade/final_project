import React, { useEffect, useState } from 'react'
import "./rooms.scss"
import { getroominfodatas, getroomsdatas } from '../../../api/httpsrequests'
import { SRLWrapper } from "simple-react-lightbox";
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
                  <img className='roomimages' src={roomitem.roomimg1} alt="roomimage1" />
                  <div class="overlay">
                    <p>Üzərinə yazı</p>
                  </div>
                </div>
                <div className='image-div'>
                  <img className='roomimages' src={roomitem.roomimg2} alt="roomimage2" />
                  <div class="overlay">
                    <p>Üzərinə yazı</p>
                  </div>
                </div>
                <div className='image-div'>
                  <img className='roomimages' src={roomitem.roomimg3} alt="roomimage3" />
                  <div class="overlay">
                    <p>Üzərinə yazı</p>
                  </div>
                </div>
                <div className='image-div'>
                  <img className='roomimages' src={roomitem.roomimg4} alt="roomimage4" />
                  <div class="overlay">
                    <p>Üzərinə yazı</p>
                  </div>
                </div>
              </div>
              </SRLWrapper>
            </div>
            <div className='do-reservation'>
              <button>Rezervasiya et</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Rooms