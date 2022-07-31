import React from 'react'
import OwnerImg from '../assets/images/Owner.png'
import Border from '../assets/images/ringborder.png'
import Rizvi from '../assets/images/Rizvi.png'
import './Owner.css'

function Owner() {
  return (
    <div className='OwnerProfile'>
            <div className='Profile'>
            <h2>Profile</h2>
            <div className='Component'>
            <div className='imagepro'>
                <img src={OwnerImg} />
            </div>
            <div className='nameOwner'>
                <h1>Owner's Name</h1>
                <h4>The Founder of Anant Motors</h4>
            </div>
            </div>
            <div className='Component2'>
            <div className='ImgOfDeveloper'>
              <div className='Border'>
              <img src={Border} />
              <div className='Rizvi'>
                <img src={Rizvi} />
              </div>
              </div>
            </div>
            <div className='DevName'>
                <h1>Rizvi Ahmed Abbas</h1>
                <h4>Website Developer</h4>
                <p>“We don't just build websites, we build websites that SELLS”</p>
            </div>
            <div className='rizvibuttom'>
               <a href='#'>About Me</a>
            </div>
            </div>
            <div className='DownText'>
              <h2>Best Of</h2>
              <div className='Text1'> 
              <h1>Anant Motors</h1>
              </div>
              <div className='Text2'>
              <h1>Electric Bikes</h1>
              </div>
          </div>
            
    </div>
    </div>
  )
}

export default Owner