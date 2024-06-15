import React from 'react'
import './About.css'
import about_img from'../../assets/about.jpg'
import play_icon from'../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>about university</h3>
        <h2>Shaping the leaders of tomorrow today.</h2>
        <p>We are committed to shaping the leaders of tomorrow today by providing a nurturing environment that fosters growth, creativity, and leadership skills. </p>
        <p>Through personalized mentorship, hands-on learning experiences, and access to cutting-edge resources, we empower young minds to reach their full potential.</p>
        <p>Our goal is to cultivate innovators and change-makers who are equipped to tackle the challenges of an ever-evolving world.</p>
      </div>
    </div>
  )
}

export default About
