import React from 'react'
import './CheckOutProduct.css'
import { useStateValue } from '../Provider/StateProvider';


function CheckOutProduct({id, title, para, price, image, power}) {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        //remove item from Cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
            })
    }

  return (
    <div className='CheckProducts'>
          <div className="BGSliderCart">
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
                <div className="bt2">
                <button onClick={removeFromCart}>Remove From Cart</button>
                </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default CheckOutProduct