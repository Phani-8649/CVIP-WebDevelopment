import React from 'react'
import './Skills.css';
import UIDesign from "../../assets/ui-design.png"
import webDesign from "../../assets/website-design.png"
import appDesign from "../../assets/app-design.png"
function Skills() {
  return (
    <section id="skills">
      <span className='skilltitle'>what I DO</span>
      <span className='skilldescription'>I am a Skilled and passionate Web Designer wit hexperience in </span>
      <div className='skillsbars'>
        <div className='skillsbar'>
            <img src={webDesign} alt="webdesign" className="skillbarimg"/>
            <div className='skillbartext'>
            <h2>Web Design</h2>
            <p>Youy can write your own content</p>
            </div>
        </div>
        <div className='skillsbar'>
            <img src={UIDesign} alt="uidesign" className="skillbarimg"/>
            <div className='skillbartext'>
                <h2>UI/UX Design</h2>
                <p>Youy can write your own content</p>
            </div>
        </div>
        <div className='skillsbar'>
            <img src={appDesign} alt="appdesign" className="skillbarimg"/>
            <div className='skillbartext'>
            <h2>App Design</h2>
            <p>Youy can write your own content</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
