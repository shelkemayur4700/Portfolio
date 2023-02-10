import React from 'react'
import About from './components/about/About'
// import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
      {/* <Contact/> */}
      <Footer/>
    </>
  )
}

export default App
