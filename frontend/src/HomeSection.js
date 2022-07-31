import React from 'react'
import './HomeSection.css';
import Product2 from './components/Product/Product2';
import Product3 from './components/Product/Product3';
import SliderProduct from './components/Product/SliderProduct';
import Card from './components/Cards/Card';
import Owner from './components/OwnerProfile/Owner';

function HomeSection() {
  return (
    <div className='HomeSection'>
        <div className='Home'>
          <div className='Heading'>
              <h2>Anant Motors </h2>
              <div className='ElectricH'> 
              <h1>Electric Bike</h1>
              </div>
              <div className='ShowR'>
              <h1>Show Room</h1>
              <div className='ParaH'>
                <p>India’s first and largest manufacturer of 2-wheelers with over
                   3 lakh happy customers and growing.</p>
              </div>
              </div>
          </div>
          <div className='SmallBar'>
              <div className='FeaturedText'>
              <h3>Top Selling -</h3>
              </div>
            </div>
          </div>
          <div className='Products'>
            <SliderProduct />
          </div>
          <div className='Card'>
          <Card />
          </div>
          <section className='HomeSection2'>
          <div className='Home'>
          <div className='Heading1'>
              <h2>Best Of</h2>
              <div className='ElectricH1'> 
              <h1>Anant Motors</h1>
              </div>
              <div className='ShowR1'>
              <h1>Electric Bikes</h1>
              </div>
          </div>
          <div className='SmallBar'>
              <div className='FeaturedText'>
              <h3>Featured Vehicles</h3>
              </div>
              <div className='UL'>
                <ul>
                  <li className='ULItem'>All Variants</li>
                  <li className='ULItem'>| City Speedy |</li>                
                  <li className='ULItem'>Comforts Speed</li>
                </ul>
              </div>
          </div>
          </div>
          <div className='Products2'>
          <Product2 />
          </div>
          <div className='Product3'> 
          <Product3 />
          </div>
        </section>
        <section className='HomeSection3'>
            <div className='OwnerProfile'>
          <Owner />
            </div>
        </section>
        </div>
     
  )
}
export default HomeSection