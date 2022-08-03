import React from 'react';
import videoSource from "./assets/videos/video2.mp4";
import facebookicon from "./assets/images/facebook-removebg-preview.png";
import intagramicon from "./assets/images/instagram-removebg-preview.png";
import twittericon from "./assets/images/tiwtter-removebg-preview.png";
import './HomePage.css';
import Search from './components/Search/Search';
import Header from './Header';
import HomeSection from './HomeSection';
import Footer from './Footer';

function HomePage() {
  return (
    <div className='Home'>
      <Header />
      <div className='HomePage'>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className='overlay'></div>
      <div className='text'>
        <h2>Future Electric Bikes</h2>
        <h3>Anant Motors</h3>
        <p>The need for using alternative fuel for mobility is higher than ever before. EVs are one such option as such vehicles produce zero-emission.</p>
        <a href='#'>Explore</a>
        <Search />
      </div>
      <div className='IconSocial'> 
      <ul>
        <li classNaem='icon1' > <img classNaem='icon1' src={facebookicon} alt="facebook" /></li>
        <li className='icon2'>  <img  src={intagramicon} alt="insta" /></li>
        <li className='icon3'> <img  src={twittericon} alt="twitter" /></li>
      </ul>
      </div>
      </div>
      <HomeSection />
      <Footer />
    </div>
  )
}

export default HomePage