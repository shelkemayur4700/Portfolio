import React from 'react'
import './Nav.css'
import {HiHome} from 'react-icons/hi'
import {HiUser} from 'react-icons/hi'
import {HiBriefcase} from 'react-icons/hi'
import {HiCode} from 'react-icons/hi'
import {HiAcademicCap} from 'react-icons/hi'
import {HiDesktopComputer} from 'react-icons/hi'
// import {HiMail} from 'react-icons/hi'


function Nav() {
  return (
    <nav>
      <a href="#"><HiHome/></a>
      <a href="#about"><HiUser/></a>
      <a href="#experience"><HiBriefcase/></a>
      <a href="#skills"><HiCode/></a>
      <a href="#education"><HiAcademicCap/></a>
      <a href="#projects"><HiDesktopComputer/></a>
      {/* <a href="#contact"><HiMail/></a>  */}
      </nav>
  )
}

export default Nav