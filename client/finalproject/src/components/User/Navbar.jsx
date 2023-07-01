import React, { useState } from 'react'
import "./user-comp.scss"
import { Link, useNavigate } from "react-router-dom"
import { useMarxalContext } from "../../context/usercontextsite";
// import { RxDropdownMenu } from "react-icons/rx";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
    const [user, setUser] = useMarxalContext();
  const navigate = useNavigate();
  return (
    <>

      <header>
        <div  >
          <ul className='con-log'>
            <Link to='contact'>
              <li style={{color:"white"}}><i className="fa-solid fa-address-book"></i> Bizimlə Əlaqə</li>
            </Link>
            {user ? (
              <>
                <li className='logout-navabr' style={{ color: 'white' }}
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    setUser(null);
                    navigate('/');
                  }}><i className="fa-solid fa-user"></i> Logout</li>
              </>
            ) : (
              <>
                <li className='login-navabr'><Link style={{ color: 'white' }} to='/registerr'><i className="fa-solid fa-user"></i> Login</Link></li>
              </>
            )}

          </ul>
        </div >
        <div className={`div-burger ${isOpen ? 'open' : ''}`}>
      <div className='burger-icon-parent'>
      <div className="burger-icon" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
      <ul>
        <Link to="about">
          <li className="about">Haqqımızda</li>
        </Link>
        <Link to="rooms">
          <li>Otaqlar</li>
        </Link>
        <Link to="entertainment">
          <li>Əyləncə</li>
        </Link>
        <Link to="restaurant">
          <li>Restoranlar</li>
        </Link>
        <Link to="/">
          <img
            style={{ width: 75, height: 75 }}
            src="https://www.marxalresort.az/assets/images/3-2868x2153.png"
            alt="marxal-logo"
          />
        </Link>
        <Link to="spa">
          <li>Sağlamlıq və Spa</li>
        </Link>
        <Link to="parties">
          <li>Tədbirlər</li>
        </Link>
        <Link to="tour">
          <li>Tur və Nəqliyyat</li>
        </Link>
        <Link to="media">
          <li>Media</li>
        </Link>
      </ul>
    </div>
      </header>
    </>
  )
}

export default Navbar