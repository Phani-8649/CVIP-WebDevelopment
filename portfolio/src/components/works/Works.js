import React from 'react'
import './works.css'
import portfolio1 from "../../assets/portfolio-1.png"
import portfolio2 from "../../assets/portfolio-2.png"
import portfolio3 from "../../assets/portfolio-3.png"
import portfolio4 from "../../assets/portfolio-4.png"
import portfolio5 from "../../assets/portfolio-5.png"
import portfolio6 from "../../assets/portfolio-6.png"
function Works() {
  return (
    <section id="works">
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workdescription'>I take pride in paying attention to smallest details and </span>
        <div className='worksimgs'>
            <img src={portfolio1} alt=""  className='worksimg'/>
            <img src={portfolio2} alt=""  className='worksimg'/>
            <img src={portfolio3} alt=""  className='worksimg'/>
            <img src={portfolio4} alt=""  className='worksimg'/>
            <img src={portfolio5} alt=""  className='worksimg'/>
            <img src={portfolio6} alt=""  className='worksimg'/>
        </div>
        <button className='workbtn'>See More</button>
    </section>
  )
}

export default Works
