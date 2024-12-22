import React from 'react';
import MyImage from '../assets/laptop.png'; // Import your image from the assets folder
import Appstore from '../assets/appstore.png'
import Playstore from '../assets/playstore.png'

function Home() {
  return (
    <div className="container">
      {/* Notification Bar */}
      <div className="notification">
        <p>
          Earn $5 per referral when you refer your friends to Cleva.{' '}
          <a href="#" className="learnMoreLink">Learn More</a>
        </p>
      </div>

      {/* Main Content of Home Page */}
      <div className="mainContent">
        <button><b>Your 2024 cleva story <a href=""><i class="bi bi-chevron-compact-right"></i></a></b></button>
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Smart USD banking <br/> for you and your<br/> business</h2>
            <p>A Cleva US-based account in your name to <br/>recieve USD payments</p>
          </div>

          {/* Image on the right */}
          <div className="image-container">
            <img src={MyImage} alt="Home Image" className="image" />
          </div>
        </div>
      </div>
      <div className='downloads'><img src={Appstore} alt="" /></div>
      <div className='playstore'><img src={Playstore} alt="" /></div>
    </div>
  );
}

export default Home;
