import React from 'react'
import "./user-comp.scss"
import { Link, useNavigate  } from "react-router-dom"
import { useMarxalContext } from "../../context/usercontextsite";
function Navbar() {
  const[user,setUser] = useMarxalContext();
  const navigate = useNavigate();
  return (
    <>

      <header>
        <div >
          <ul>
            <Link to='contact'>
              <li><i className="fa-solid fa-address-book"></i> Bizimlə Əlaqə</li>
            </Link>
            <Link to='registerr'>
              {/* <li><i className="fa-solid fa-user"></i> Login</li> */}
              {user ? (
            <>
              <li style={{color:'white'}}
               onClick={()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
                navigate('/login');
              }}><i className="fa-solid fa-user"></i> Logout</li>
            </>
          ) : (
            <>
              <li><Link style={{color:'white'}} to='/login'><i className="fa-solid fa-user"></i> Login</Link></li>
            </>
          )}
            </Link>
          </ul>
        </div >
        <ul>
          <Link to='about'>
            <li className='about'>Haqqımızda</li>
          </Link>
          <Link to='rooms'>
            <li>Otaqlar</li>
          </Link>
          <Link to='entertainment'>
            <li>Əyləncə</li>
          </Link>
          <Link to='restaurant'>
            <li>Restoranlar</li>
          </Link>
          <Link to='/'>
            <img style={{ width: 75, height: 75 }} src="https://www.marxalresort.az/assets/images/3-2868x2153.png" alt="marxal-logo" />
          </Link>
          <Link to='spa'>
            <li>Sağlamlıq və Spa</li>
          </Link>
          <Link to='parties'>
            <li>Tədbirlər</li>
          </Link>
          <Link to='tour'>
          <li>Tur və Nəqliyyat</li>
          </Link>
          <Link to='media'>
            <li>Media</li>
          </Link>
        </ul>

      </header>
    </>
  )
}

export default Navbar