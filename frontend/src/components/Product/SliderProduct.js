import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bike1 from '../assets/images/bike1.png'
import Bike2 from '../assets/images/bike2.png'
import Bike3 from '../assets/images/bike3.png'
import Bike4 from '../assets/images/bike4.png'
import Bike5 from '../assets/images/bike5.png'
import './SliderProduct.css';
import Vehicle from "../VehiclePage/Vehicle";


export default class LazyLoad extends Component {
  render() {
    const settings = {
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay: true,
    };
    return (
      <div className="Product">
        <Slider {...settings}>
        <div className="">
        <Vehicle 
         id="01"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike1}
         power="25kmph, 100km"
        />
       </div>
         <Vehicle 
         id="02"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike2}
         power="25kmph, 100km"
        />
      
         <Vehicle 
         id="03"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike3}
         power="25kmph, 100km"
        />
       
         <Vehicle 
         id="04"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike4}
         power="25kmph, 100km"
        />
       
         <Vehicle 
         id="05"
         title="Anant Jispa"
         para="Anant Motors Aanant Jispa is a new release Electric Bike (EV) and one of Top selling EV "
         price={44}
         image={Bike5}
         power="25kmph, 100km"
        />
        </Slider>
        </div>
      
    );
  }
}
