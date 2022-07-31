import React from 'react'
import './Product2.css'
import ProductDetials from '../ProductDetials/ProductDetials';
import Bike1 from '../assets/images/bike1.png'
import Bike2 from '../assets/images/bike2.png'
import Bike3 from '../assets/images/bike3.png'
import Bike4 from '../assets/images/bike4.png'
import Bike5 from '../assets/images/bike5.png'

function Product2() {
  return (
    <div class="container">
    <input type="radio" name="dot" id="one" />
    <input type="radio" name="dot" id="two" />
    <div class="main-card">
    <div class="cards">
        <div class="card">
        <ProductDetials 
         id="01"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike5}
         power="25kmph, 100km"
        />
        </div>
        <div class="card">
        <ProductDetials 
         id="01"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike4}
         power="25kmph, 100km"
        />
        </div>
        <div class="card">
        <ProductDetials 
         id="01"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike3}
         power="25kmph, 100km"
        />
        </div>
      </div>
      <div class="cards">
        <div class="card">
        <ProductDetials 
         id="01"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike2}
         power="25kmph, 100km"
        />
        </div>
        <div class="card">
        <ProductDetials 
         id="01"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike1}
         power="25kmph, 100km"
        />
        </div>
        <div class="card">
        <ProductDetials 
         id="01"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike5}
         power="25kmph, 100km"
        />
        </div>
      </div>
      
    </div>
    <div class="button">
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div>
  )
}

export default Product2