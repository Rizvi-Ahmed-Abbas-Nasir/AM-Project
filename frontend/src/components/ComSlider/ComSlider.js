import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bike1 from '../assets/images/bike1.png'
import Bike2 from '../assets/images/bike2.png'
import Bike3 from '../assets/images/bike3.png'
import Bike4 from '../assets/images/bike4.png'
import Bike5 from '../assets/images/bike5.png'
import Vehicle2 from "../VehiclePage/Vehicle2";
import './ComSlider.css'


export default class LazyLoad extends Component {
  render() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        width:  200,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className="Product2">
        <Slider {...settings}>
        <div className="Compo">
        <Vehicle2 
         id="01"
         image={Bike1}
         
        />
       </div>
       <div className="Compo">
         <Vehicle2
         id="02"
         image={Bike2}
        />
        </div>
      
        <div className="Compo">
         <Vehicle2 
         id="03"
         image={Bike3}
        />
        </div>
        <div className="Compo">
         <Vehicle2 
         id="04"      
         image={Bike4}
        />
        </div>
          <div className="Compo">
         <Vehicle2 
         id="05"
         image={Bike5}
        />
        </div>
        </Slider>
        </div>
      
    );
  }
}
