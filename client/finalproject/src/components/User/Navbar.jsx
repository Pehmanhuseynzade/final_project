import React from 'react'
import "./user-comp.scss"
import {Link} from "react-router-dom"
function Navbar() {

      
  return (
    <>
    
    <header>
      <div >
        <ul>
          <Link>
            <li><i class="fa-solid fa-address-book"></i> Bizimlə Əlaqə</li>
          </Link>
          <Link>
            <li><i class="fa-solid fa-user"></i> Login</li>
          </Link>
        </ul>
      </div >
        <ul>
          <Link to='about'>
            <li className='about'>Haqqımızda</li>
          </Link>
          <Link>
            <li>Otaqlar</li>
          </Link>
          <Link to='restaurant'>
            <li>Restoranlar</li>
          </Link>
          <Link to='/'>
            <img  style={{width:75,height:75}} src="https://www.marxalresort.az/assets/images/3-2868x2153.png" alt="marxal-logo" />
          </Link>
          <Link to='spa'>
            <li>Sağlamlıq və Spa</li>
          </Link>
          <Link>
            <li>Tədbirlər</li>
          </Link>
          <Link>
            <li>Media</li>
          </Link>
        </ul>

    </header>
    </>
  )
}

export default Navbar