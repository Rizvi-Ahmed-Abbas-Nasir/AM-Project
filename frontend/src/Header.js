import React from 'react'
import './Header.css';
import {useEffect} from 'react';
import iconsource from './assets/images/icons2.jpeg';
import Navbar from './components/Navigation/Navbar';
import Login from './components/Login/Login';
import {useStateValue} from './components/Provider/StateProvider'
import StarIcon from '@mui/icons-material/Star';


function Header() {
  const  [{cart,user}, dispatch] = useStateValue();
   // Sticky Menu Area
   useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header-section');
            const scrollTop = window.scrollY;
            scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };
  return (
    <div className='Headers header-section  d-none d-xl-block'>
        <img className="HeaderIcon" src={iconsource} alt='Headericon' />
        <div className="IconName">
          <h2>ANANT</h2>
          <h3>Motors</h3>
        </div>
        <Navbar />
        <Login />
        <div className='Favorite'>
        <StarIcon value={{ className: "shared-class", size: 70 }}className='IconStar'/>
        <span className="header__optionLineTwo header__Bastketcart">{cart?.length}</span>
        </div>
        <div className='toggle'></div>
    </div>
  )
}

export default Header