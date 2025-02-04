import React from 'react';
import './Menu.css';
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector} from 'react-icons/fc';


const Menu  = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
            <div className="navbar-profile-pic">
                <img src="/images/profile-pic.png" alt="Profile-pic" srcset="" />
            </div>
            <div className="nav-items">
                <div className="nav-item">
                    <div className="nav-link"> <FcHome /> Home </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcAbout /> About </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcReadingEbook /> Education </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcBiotech /> Teck Stack </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcVideoProjector /> Projects </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcPortraitMode /> Work Experience </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcBusinessContact /> Contact </div>
                </div>
            </div>
        </>
    ) : (
        <>
        <div className="nav-items">
                <div className="nav-item">
                    <div className="nav-link"> <FcHome title='Home'/>  </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcAbout title='About'/>  </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcReadingEbook title='Education'/>  </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcBiotech title='Tech Stack'/>  </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcVideoProjector title='Projects'/>  </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcPortraitMode title='Work Experience'/>  </div>
                </div>
                <div className="nav-item">
                    <div className="nav-link"> <FcBusinessContact title='Contact'/>  </div>
                </div>
            </div>
        </>
    )}
    </>
  );
};

export default Menu;