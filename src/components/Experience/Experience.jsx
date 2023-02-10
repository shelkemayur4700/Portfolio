import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div>
    <section id='experience'>
      <h5>What is my</h5>
      <h2>Experience</h2>
      </section>
      <div className=" container experience_container experience_cards">
        <article className="experience_card">
          <div>
            <small>Software Associate Intern</small>
            <h2>Kangaroo Agency</h2>
            <small>
              <b>Technologies</b>
              : ReactJS, Figma
            </small>
            <br />
            <small>January 2023</small>
          </div>
        </article>
      </div>
      </div>
  )
}

export default Experience