import React from 'react';
import './About.css'

const About = () => {
  return (
    <>
    <div className="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                <img src="/images/image1.jpg" alt="Profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                <h1>About me</h1>
                    <p>
                        Hi, 👋 I’m Hulas Chandra Kumar, a passionate Software Developer and Entrepreneur with a degree in Computer Science and Engineering from Lovely Professional University. Over the years, I have honed my skills in full-stack development, focusing on building intuitive, user-centered applications that solve real-world problems.<br></br>
                        In addition to my technical expertise, I’m also the proud owner of an online gift store called oneworldshop, where I explore my entrepreneurial side by managing product selection, customer service, and marketing.<br></br>
                        I am always excited about tackling new challenges and applying innovative solutions in technology. My goal is to continue expanding my knowledge and making a positive impact through software development.

                    </p>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default About;