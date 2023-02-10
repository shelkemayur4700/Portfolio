import React from 'react'
import './Footer.css'
import{BsInstagram} from "react-icons/bs"
import{BsLinkedin} from "react-icons/bs"
import{BsGithub} from "react-icons/bs"

function Footer() {
  return (
  <footer>
    <div className="footer_logo">
      <a href="#">Mayur Shelke</a>
    </div>
    <ul className="permalinks">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </ul>
    <div className="footer_socials">
    <a href="https://www.linkedin.com/in/mayur-shelke-74102b11b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
    <a href="https://github.com/shelkemayur4700" target="_blank" rel="noreferrer"><BsGithub/></a>
    <a href="https://www.instagram.com/shelke_mayuroffici
    al/https://www.instagram.com/shelke_mayurofficial/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
    <div className="footer_copyright">
      <small>@Mayur Shelke. All right reserved</small>
    </div>
  </footer>
  )
}

export default Footer