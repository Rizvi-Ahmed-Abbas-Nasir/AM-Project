import React from 'react'
import './ProductDetials.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from '../Provider/StateProvider'
import {useRef} from 'react';
import { useState } from 'react';

function ProductDetials({id, title, price, image, power}) {
    let btnRef = useRef();

    const [ClickChange, OneClick] = useState(false)
  
    const [{cart}, dispatch] = useStateValue();
  
      console.log("In side Cart",cart);
  
      const addToCart = () => {
        OneClick(current => !current);
        if(btnRef.current){
          btnRef.current.setAttribute("disabled", "disabled");
        }
          dispatch( {
              type: "ADD_TO_CART",
              item: {
              id: id,
              title: title,
              price: price,
              image: image,
              }
          }
        
          );
     }
  return (
    <div className='Content'>
        <div class="content">
           <div class="img">
             <img src={image} alt="" />
           </div>
           <div class="details">
             <div class="name">Anant Jispa</div>
             <h4>Showroom price : ₹ 80,700</h4>
             <h4>Booking Amount : ₹ 999</h4>
           </div>
           <div className='btn1'>
           <button 
                    style={{
                      backgroundColor: ClickChange ? 'salmon' : '',
                      color: ClickChange ? 'white' : '',
                      text: ClickChange ? "Added" : '',
                    }}
                    ref={btnRef} onClick={addToCart}> <StarIcon className="saveicon" />Favorite</button>
           </div>
           <div className='btn2'>
           <button><BookmarkIcon className="icon"/>Book Now</button>
            </div>
         </div>
    </div>
  )
}

export default ProductDetials