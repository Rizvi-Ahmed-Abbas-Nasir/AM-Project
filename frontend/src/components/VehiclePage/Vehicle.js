import React from 'react'
import './Vehicle.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import {useStateValue} from '../Provider/StateProvider'
import {useRef} from 'react';
import { useState } from 'react';


function Vehicle({id, title, para, price, image, power}) {
  
  let btnRef = useRef();

  const [ClickChange, OneClick] = useState(false)

  const [{cart}, dispatch] = useStateValue();

  const [buttonText, setButtonText] = useState("Favorite");

    console.log("In side Cart",cart);

    const addToCart = () => {
      setButtonText("Added");
      setTimeout(() => {
        setButtonText("Favorite");
      }, 1000);
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
    <div className='Slider'>
         <div className="BGSlider">
         <div className="BGSlider">
          <div className="image">
            <img src={image} alt='' />
            <div className="ProductList">
                <h2>{title}</h2>
                <div className="Criedit">
                    <h3>By</h3><h4>Anant Motors</h4>
                </div>
                <p>{para}</p>
                <div className="price">
                <h4>Ex-Showroom price : ₹ {price}</h4>
                <h4>Booking Amount : ₹ 999</h4>
                </div>
                <div className="Power">
                  <h5>{power}</h5>
                </div>
                <div className="bt1">
                    <button 
                    type="submit"
                    style={{
                      backgroundColor: ClickChange ? 'salmon' : '',
                      color: ClickChange ? 'white' : '',
                      text : ClickChange ? "Added" : 'Favorite',
                    }}
                    ref={btnRef} onClick={addToCart}> <StarIcon className="saveicon" />{buttonText}</button>
                </div>
                <div className="bt2">
                    <button><BookmarkIcon className="icon"/>Book Now</button>
                </div>
            </div>
          </div>
          </div>

         </div>

    </div>
  )
}

export default Vehicle