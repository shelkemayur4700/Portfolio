import React from 'react'

function education() {
  return (
    <section id='education'>
    <h5>what Is My</h5>
      <h2>Education</h2>
      <div className="container education_container">
        <div className="education_cards">
          <article className="education_card">
            <small>Under Graduation</small>
            <h2>Computer Engineering</h2>
            <h4>Navsahyadri Education Society's Group of Institutions, Pune</h4>
            <small>2017 - 2022</small>
            <br />
            <small>CGPA:-7.83</small>
          </article>
          <article className="education_card">
            <small>12th</small>
            <h2>HSC</h2>
            <h4>Gopinath HighSchool - College. </h4>
            <small>2016 - 2017</small>
            <br />
            <small>Percentage:-58.60%</small>
          </article>
          <article className="education_card">
            <small>10th</small>
            <h2>SSC</h2>
            <h4>Bhairavnath Vidhyalaya </h4>
            <small>2014 - 2015</small>
            <br />
            <small>Perccentage:-76%</small>
          </article>
        </div>
      </div>
      </section>
  )
}

export default education
