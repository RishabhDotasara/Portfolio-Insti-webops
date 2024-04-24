import React, { useState } from 'react'




export default function Navbar() {

    const [active,setActive] = useState("home")
  return (
    <div class="navbar">
        <ul class="link_box">
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
        </ul>
    </div>
  )
}
