import React, { useEffect, useState } from 'react'
import "./restaurant.scss"
import { getresdatas } from '../../../api/httpsrequests'
function Restaurant() {
  const[res,setRes] = useState([])
  useEffect(()=>{
    getresdatas().then((data)=>{
      console.log(data)
      setRes(data)
    })
  },[])
  return (
    <>
    <div className='main-sec-res'>
      <h1 className='resturant-h1'>BAR VƏ RESTORANLAR</h1>
      <p className='p-info'>Bizim Kompleks qonaqlarına müasir avadanlıqlarla təchiz olunmuş, peşəkar heyət və ləziz mətbəxi ilə bir neçə restoran təqdim edir.Siz bizim restoranlarımızda milli və xarici mətbəxin təamlarını dada bilərsiniz</p>
      <div className='rest-info'>
        <div>
        <img className='restaurants' src="https://www.marxalresort.az/assets/images/12-534x356.jpg" alt="rest1" />
        <p>İpək Restoranı</p>
        </div>
        <div>
        <img className='restaurants' src="https://www.marxalresort.az/assets/images/8-1-1275x850-800x533.jpg" alt="rest2" />
        <p>Nuxa Restoranı</p>
        </div>
        <div>
        <img className='restaurants' src="https://www.marxalresort.az/assets/images/4-534x356.jpg" alt="rest3" />
        <p>Lobbi Bar</p>
        </div>
        <div>
          <img className='restaurants' src="https://www.marxalresort.az/assets/images/3-534x356.jpg" alt="rest4" />
          <p>Göl Kafe</p>
        </div>
      </div>
    </div>

      <section className='for-res'>
        {res && res.map((resitem, idx) => (
          <div key={resitem._id}>
            {idx % 2 ? (<div className='res-sect-1'>
              <div className='image'>
                <img className='img' src={resitem.resimg}  />
              </div>
              <div className='text'>
                <h2 className='h2'>{resitem.resname}</h2>
                <div className='line'></div>
                <p >{resitem.resdesc}</p>
              </div>
            </div>) : (<div className='res-sect-1'>
              <div className='text'>
                <h2 className='h2'>{resitem.resname}</h2>
                <div className='line'></div>
                <p >{resitem.resdesc}</p>
              </div>
              <div className='image'>
                <img className='img' src={resitem.resimg}  />
              </div>
            </div>)}
          </div>
        ))}
      </section>
    </>
    )
}

export default Restaurant