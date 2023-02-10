import React from 'react'
// import './Header.css'
import CTA from './CTA'
import me from '../../images/me.jpg'
import Headersocials from './Headersocials'
function Header() {
  return (
    <header>
    <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Mayur Shelke</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <Headersocials/>
      <div className="me">
        <img src={me} alt="me" />

      </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
      </header>
  )
}

export default Header