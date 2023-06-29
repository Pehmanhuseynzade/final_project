import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./main.scss"
import { useUserContext } from "../../../context/Usercontext";

function Main() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useUserContext();
  useEffect(() => {
    if (admin === null && !localStorage.getItem("loggedIn")) {
      navigate('/loginadmin');
    }
  }, [])

  return (
    <>
      <div className='main'>
        <div className="user">
          {/* <p className="p-user">Profile</p> */}
          <div className="profile-admin">
            <div className="profile-images">
              <img
                className="profile-img"
                src="https://media.istockphoto.com/id/1283536918/vector/welcome-concept-flat-vector-foe-website-happy-tiny-people-are-near-huge-text-cartoon-office.jpg?s=612x612&w=0&k=20&c=FnUDYa-hy_gskwzy0B9K7HWhOB9U-CSGV1Lx6zyO8io="
                alt="Profile"
              />
            </div>
            <div className="profile-text">
              <div className="user-display">
                <div className="user-image">
                  <img className="user-img"
                    src="https://avatars.githubusercontent.com/u/126595656?s=400&u=73082a7f5331acf2119050e11efb77260c8feecf&v=4"
                    alt="Pehman"
                  />
                </div>
                <div className="users-info">
                  <p className="users-p">Pehman Huseynzada</p>
                  <p className="users-p-2">pehmanhuseynzade@gmail.com</p>
                </div>
              </div>
              <div className="user-private">
                <div className="users-info-private">
                  <p style={{color:'gray'}} className="full">Full Name : <span style={{ color: "teal" }}> Pehman Huseynzade</span></p>
                  <p style={{color:'gray'}} className="mobile">Mobile : <span style={{ color: "teal" }}> +994 70 314 47 77</span></p>
                  <p style={{color:'gray'}} className="email">Email : <span style={{ color: "teal" }}> pehmanhuseynzade@gmail.com</span></p>
                </div>
                <div className="user-info-private">
                  <p style={{color:'gray'}} className="username">Username : <span style={{ color: "teal" }}> Pehman</span></p>
                  <p style={{color:'gray'}} className="birthday">Birthday : <span style={{ color: "teal" }}> 15.04.2003</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
