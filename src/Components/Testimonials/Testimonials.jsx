import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = () =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Emily Fernando</h3>
                  <span>GreenEver, USA</span>
                </div>
              </div>
              <p>GreenEver has truly transformed my educational experience. The campus is not only beautiful and green, but it also provides a serene environment that makes learning enjoyable and inspiring.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>John Smith</h3>
                  <span>GreenEver, USA</span>
                </div>
              </div>
              <p>What I appreciate most about GreenEver is the supportive community. The faculty and staff are always willing to help, and the diverse student body has given me a broader perspective on the world.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Amina Samuwel</h3>
                  <span>GreenEver, USA</span>
                </div>
              </div>
              <p>The state-of-the-art facilities and innovative resources at GreenEver have given me the tools and confidence to excel in my studies. I love the collaborative spaces where students can work together and share ideas.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>David Willium</h3>
                  <span>GreenEver, USA</span>
                </div>
              </div>
              <p>From the beautifully maintained grounds to the cutting-edge technology in our classrooms, GreenEver provides an exceptional learning environment. I feel prepared and inspired to take on future challenges.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
