import React ,{useState}from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png";
import contacting from "../../assets/contact.png";
import {Link} from 'react-scroll';
import menu from "../../assets/menu.png"
function Navbar() {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className='logo'/>
      <div className='desktopmenu'>
        <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className='desktopmenulistitem'>Home</Link>
        <Link activeClass="active" to="skills" spy={true} offset={-50} duration={500} className='desktopmenulistitem'>About</Link>
        <Link activeClass="active" to="works" spy={true} offset={-50} duration={500} className='desktopmenulistitem'>Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} offset={-50} duration={500} className='desktopmenulistitem'>Clients</Link>
      </div>
      <button className='desktopmenubtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behaviour: "smooth"});
      }}>
        <img src={contacting} alt="" className='desktopmenuimg'/>Contact me
      </button>
      <img src={menu} alt="menu" className='mobmenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className='navmenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="clients" spy={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Clients</Link>
        <Link activeClass="active" to="contact" spy={true} offset={-50} duration={500} className='listitem' onClick={() => setShowMenu(false)}>Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar
