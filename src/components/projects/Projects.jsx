import React from 'react'
import './Projects.css'
import me3 from '../../images/me3.jpg'
import me4 from '../../images/me4.jpg'

function Projects() {
  return (
 
      <section id='projects'>
       <h5>What I have Developed</h5>
       <h2>Projects</h2>
       <div className="container projects_container">
        <article className="projects_item">
          <div className="projects_item-image">
            <img src={me3} alt="Wheaher Live Update" />
          </div>
          <h3>Wheaher Live Update</h3>
          <div className="projects_item-cta">

            <a  className="btn" href="https://github.com/shelkemayur4700" target="_blank" rel="noreferrer">Github</a>
            <a  className="btn" href="#Projects">Live Demo</a>
          </div>
        </article>
        <article className="projects_item">
          <div className="projects_item-image">
            <img src={me4} alt="spotify" />
          </div>
          <h3>Spotify Clone</h3>
          <div className="projects_item-cta">

            <a  className="btn" href="https://github.com/shelkemayur4700" target="_blank" rel="noreferrer">Github</a>
            <a  className="btn" href="#Projects">Live Demo</a>
          </div>
        </article>
        {/* <article className="projects_item">
          <div className="projects_item-image">
            <img src={me3} alt="me3" />
          </div>
          <h3>Wheaher Live Update</h3>
          <div className="projects_item-cta">

            <a  className="btn" href="https://github.com/shelkemayur4700" target="_blank">Github</a>
            <a  className="btn" href="#Projects">Live Demo</a> 
          </div>
        </article>  */}
       </div>
      </section>
  
  )
}

export default Projects
