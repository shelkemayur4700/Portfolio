import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'


function Skills() {
  return (
    <section id='skills'>
      <h5>What I have learned</h5>
      <h2>My Skills</h2>
      <div className=" container skills_container">
        <div className="frontend_container">
        <h3>frontend development</h3>
<div className="skills_content">
  <article className="skills_details">
  <AiFillCheckCircle className='skills_details-icon'/>
  <div>
    <h4>HTML</h4>
  </div>
  </article>
  <article className="skills_details">
  <AiFillCheckCircle className='skills_details-icon'/>
  <div>
    <h4>CSS</h4>
  </div>
  </article>
  <article className="skills_details">
  <AiFillCheckCircle className='skills_details-icon'/>
  <div>
    <h4>JavaScript</h4>
  </div>
  </article>
  <article className="skills_details">
  <AiFillCheckCircle className='skills_details-icon'/>
  <div>
    <h4>BootStrap</h4>
  </div>
  </article>
  <article className="skills_details">
  <AiFillCheckCircle className='skills_details-icon'/>
  <div>
    <h4>ReactJS</h4>
  </div>
  </article>
</div>
        </div>
        <div className="backend_container">
          <h3>Backend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
            <AiFillCheckCircle className='skills_details-icon'/>
             <div>
                 <h4>Python</h4>
            </div>
            </article>
            <article className="skills_details">
            <AiFillCheckCircle className='skills_details-icon'/>
             <div>
                 <h4>SQL</h4>
            </div>
            </article>
            <article className="skills_details">
            <AiFillCheckCircle className='skills_details-icon'/>
             <div>
                 <h4>NodeJS</h4>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
