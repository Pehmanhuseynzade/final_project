import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer>
      <div className='foot-div-1'>
      <p>Sosial şəbəkələrimiz</p>
      <div className='foot-icons'>
      <Link className='circle'><i className="fa-brands fa-facebook"></i></Link>
      <Link className='circle'><i className="fa-brands fa-instagram"></i></Link>
      <Link className='circle'><i className="fa-brands fa-linkedin-in"></i></Link>
      <Link className='circle'><i className="fa-brands fa-youtube"></i></Link>
      </div>
      <p style={{marginTop:"30px"}}>Marxal Resort & Spa, Azərbaycan, Şəki</p>
      <Link>
        <p>Tel: +994 (12) 585 35 85</p>
      </Link>
      <Link>
        <p>Mob: +994 (55) 500 35 85</p>
      </Link>
      <Link>
        <p>E-poçt: reservation@marxalresort.az</p>
      </Link>
      </div>
      <div className='foot-div-2'>
      <div className='nav-foot'>
        <Link to='about'>
          <p>Haqqımızda</p>
        </Link>
        <Link to='rooms'>
          <p>Otaqlar</p>
        </Link>
        <Link to='restaurant'>
          <p>Restoranlar</p>
        </Link>
        <Link to='entertainment'>
          <p>Əyləncə</p>
        </Link>
        <Link to='spa'>
          <p>Sağlamlıq və Spa</p>
        </Link>
      </div>
      <p className='p-sentence'> <i> Yeni kampaniyalar və endirimlərdən xəbərdar olmaq üçün abunə olun...</i></p>
      <form>
        <input placeholder='  E-poçt ünvanınızı daxil edin' type="email" />
        <button>Göndər</button>
      </form>
      <p className='p-sentence'>
      © 2023 Bütün hüquqlar qorunur.
      </p>
      </div>
    </footer>
    </>
  )
}

export default Footer