import React from 'react'
import './features.css'
import feature1 from '../../assets/feature1.png'
import feature2 from '../../assets/feature2.png'
import feature3 from '../../assets/feature3.png'
import feature4 from '../../assets/feature4.png'
import feature5 from '../../assets/feature5.png'
import feature6 from '../../assets/feature6.png'
const Features = () => {
  return (
    <div className='features'>
      <div className="container feature">
        <h1>features</h1>
        <div className="line"></div>
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <img src={feature1} alt="" />
                </div>
                <div className="card-title">
                    <h1>Easy Booking</h1>
                    <p>Anyone can book pickup from the comfort of their home or office. You don’t need to know or visit the logistics company.</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    <img src={feature2} alt="" />
                </div>
                <div className="card-title">
                    <h1>Fast Delivery</h1>
                    <p>We locate the logistics companies that are closest to pickup and dropoff locations to reduce delivery time</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    <img src={feature3} alt="" />
                </div>
                <div className="card-title">
                    <h1>Rate comparison</h1>
                    <p>Customers can make a decision on which logistics company to choose based on price, track record and capacity.</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    <img src={feature4} alt="" />
                </div>
                <div className="card-title">
                    <h1>Live Tracking</h1>
                    <p>Real time tracking technology ensures you know where your package is at any point in time.</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    <img src={feature5} alt="" />
                </div>
                <div className="card-title">
                    <h1>Security</h1>
                    <p>Unique security code known to the owner and receiver of the package ensures deliveries only to the right recipient.</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-image">
                    <img src={feature6} alt="" />
                </div>
                <div className="card-title">
                    <h1>Great Support</h1>
                    <p>Support from well trained customer support team who go an extra mile to ensure every delivery is completed to satisfaction.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
