import React from 'react'
import "./intro.css"
import bg from "../../assets/personal picture.png"
import {Link} from 'react-scroll';
import btnImg from "../../assets/hireme.png"
function intro() {
  return (
    <div>
      <section id="intro">
        <div className='introcontent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm<span className='introname'>Sai Phanindra</span><br/>Website Designer</span>
            <p className='intropara'>I am a skilled web designer with experience in creating<br/> visully appeling and user friendly websites</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnimg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg'/>
      </section>
    </div>
  )
}

export default intro
