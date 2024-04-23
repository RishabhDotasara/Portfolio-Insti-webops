import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import {motion} from "framer-motion"



export default function Navbar() {

    const links = ["Hello","About Me","Projects","Contact Me"]
  return (
    <div class="navbar">
        <ul class="link_box">
            <li class="links active" id="home"><a href="#home">Home</a></li>
            <li class="links" id="about-me "><a href="#about_me">About Me</a></li>
            <li class="links" id="contact-me"><a href="#contact_me">Contact Me</a></li>
            {/* <!-- <li class="links"><a href="#cv">Download CV</a></li> --> */}
        </ul>
    </div>
  )
}
