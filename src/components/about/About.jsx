import React from 'react'
import me2 from '../../images/me2.jpg'

function About() {
  return (
    <section id ='about' >
      <h5>Get to know</h5>
      <h2>About Me</h2>
    <div className="container about_container" >
      <div className="about_me">
        <div className="about_me-image">
          <img src={me2} alt="me2" />
      </div>
    </div>
    <div className="about_content">
      <div className="about_cards">
        {/* <article className="about_card">hello</article> */}
        <article className="about_card">
          <h5>Experience</h5>
          <small> As A Intern</small>
        </article>
        <article className="about_card"> 
        <h5>Projects</h5>
        <small>5+ completed</small>
        </article>
        
      </div>
      <p>I am a 2022 CSE Graduate who loves the world of 
          IT, Mathematical Programming and AI. I'm still new in this 
          field but I know that I can learn new things every single day to make an impact
           and help my community. Currently looking for work and connections in any area of computing</p>
    </div>
    
    </div>
    </section>
  )
}

export default About
