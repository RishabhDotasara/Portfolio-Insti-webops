import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";



export default function Navbar() {

    const [active,setActive] = useState(false)
    const [menuactive,setMenuActive] = useState(false);
    let sWid = window.innerWidth;

    useEffect(()=>{
      if(sWid > 900)
      {
        setMenuActive(true)
      }
    },[sWid])
  return (
    <div class="navbar">
        <div className="hamburger" onClick={()=>{setMenuActive(!menuactive)}}><GiHamburgerMenu/></div>
        {menuactive && (<ul class="link_box">
            <li class="links" id="home" onClick={(e)=>{
              window.scrollTo(0,0);
            }}><a href="#home">Home</a></li>
            <li class="links" id="about-me " onClick={(e)=>{
              window.scrollTo(0,800);
            }}><a href="#about_me">About Me</a></li>
            <li class="links" id="contact-me" onClick={(e)=>{
              window.scrollTo(0,1600);
            }}
            ><a href="#contact_me">Contact Me</a></li>
            {/* <!-- <li class="links"><a href="#cv">Download CV</a></li> --> */}
        </ul>)}
        
    </div>
  )
}
