import React from 'react'
import './AddToCart.css'
import CheckOutProduct from '../../components/CheckOutProduct/CheckOutProduct'
import Header from '../../Header'
import { useStateValue } from "../../components/Provider/StateProvider";
import image from '../../assets/images/Rizvi-Ahmed-Abbas.png'
import cartgif from '../../assets/images/scooter.gif'


function AddToCart() {
    const [{cart, user}, dispatch] = useStateValue();
  return (
    <div className='AddToCart'>
        <Header />
       <div className='Component12'>
        <div className='gifsccoter'>
          <img src={cartgif} alt="Cart"/>
        </div>
        <div className='cartdis'>
          <h4>Your Electric Bike</h4>
          <h2>CART</h2>
        </div>
       </div>
       <div className='Component13'>
          {cart.map( item => (
           <CheckOutProduct 
            id = {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
           /> 
          ))}    
           
        </div>
           
    </div>
  )
}

export default AddToCart