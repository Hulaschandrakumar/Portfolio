import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.pdf';

const Home = () => {
  return (
    <div>
        <>
        <div className="container-fluid home-container">
          <div className="container home-content">
            <h2>Hi 👋 I'm a </h2>
            <h1>
              <Typewriter
                  options={{
                    strings: ['Full Stack Developer !',
                              'Mern Stack Developer !',
                              'React Native Developer !',
                              'Front End Developer !'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </h1>
            <div className="home-buttons">
              <button className='btn btn-hire'>Hire me</button>
              <a className='btn btn-resume' href={Resume} download="resume.pdf">My resume</a>
            </div>
          </div>
        </div>
        </>
    </div>
  );
};

export default Home;