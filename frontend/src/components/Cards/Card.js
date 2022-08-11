import React from "react";
import "./Card.css";
import Safety from '../assets/images/Safety.png'
import no_Emmison from '../assets/images/no_Emmison.png'
import budget from '../assets/images/budget.png'

const Card = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
    setSelectedIndex(nextIndex);
  }

  const check = index => setSelectedIndex(index);

    return (
      <div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0 button1">
              {/* <button onClick={checkNext}>{'<'}</button> */}
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onClick={() => check(0)}
              />
              <input 
                type="radio" 
                name="slider" 
                id="s2" 
                checked={selectedIndex === 1}
                onClick={() => check(1)}
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={selectedIndex === 2}
                onClick={() => check(2)}
              />
              <label htmlFor="s1" id="slide1" className="imgCard">
                <img className="fea" src={Safety} alt=''/>
                <div className="Comp">
                    <h1>Safety</h1>
                    <h4>We can assure you Our Product Is very Safe and easy </h4>
                    <button>Learn More</button>
                </div>
              </label>
              <label htmlFor="s2" id="slide2" className="imgCard">
                <img className="fea" src={no_Emmison} alt=''/>
                <div className="Comp">
                    <h1>No Emmison</h1>
                    <h4>We can assure you Our Product Is very Safe and easy </h4>
                    <button>Learn More</button>
                </div>
              </label>
              <label htmlFor="s3" id="slide3" className="imgCard">
                <img className="fea" src={budget} alt=''/>
                <div className="Comp">
                    <h1>budget</h1>
                    <h4>We can assure you Our Product Is very Safe and easy </h4>
                    <button>Learn More</button>
                </div>
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0 button2">
              {/* <button onClick={checkNext}>{'>'}</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Card