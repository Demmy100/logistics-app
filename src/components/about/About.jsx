import React from 'react'
import './about.css'
import company from '../../assets/company.png'

const About = () => {
  return (
    <div className='about'>
      <div className="container about-container">
        <div className="about-l">
            <div className="about-content">
                <div className="about-title">
                    <h1>our company</h1>
                    <span></span>
                </div>
                <p>We are a travels and transport logistics technology provider, aggregating logistics companies and their assets into a single platform where customers and logistics companies can transact business. Our main purpose is to solve the problems of under-capacity and non-availability of logistics assets, security, timeliness and efficiency of last mile deliveries.</p>
            </div>
            <div className="about-main">
                <div className="about-mission">
                    <h2>Mission</h2>
                <p>To solve the same day delivery challenges in the courier and package delivery industry.</p>
                </div>
                <div className="about-vision">
                    <h2>Vision</h2>
                    <p>Our vision is to lead the logistics market across Africa in the use of technology tools that improve the efficiency of operations as well as deliver high financial returns to our shareholders.</p>
                </div>
            </div>
        </div>
        <div className="about-r">
            <div className="about-image">
                <img src={company} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
