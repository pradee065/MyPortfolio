import React from 'react'
import './about.css'
import about from '../../images/about.jpg'

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div>
        <img src={about} alt="person in" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <section id="about-me">
    <p>
        I’m a Front-End Engineer and a Quality-Driven Technologist with 11+ years of experience turning ideas into reliable, accessible, and high-performance web solutions.
    </p>
    <p>
        I'm skilled in HTML, CSS, JavaScript, jQuery, and modern frameworks like React, Backbone.js, and Chart.js. My toolkit also includes CMS platforms like WordPress and Sitefinity, along with hands-on CRM experience, in Veeva and Salesforce and also Accessibility Specialist.
    </p>
    <p>
        What sets me apart? I don’t just write clean, scalable code — I deliver pixel-perfect interfaces on time, manage cross-functional requirements, and lead with a focus on accessibility, performance, and maintainability.
    </p>
    <p>
        From planning to deployment, I take pride in delivering projects that not only meet expectations — but exceed them.
    </p>
    <p>
        Let’s collaborate to build web experiences that truly make an impact.
    </p>
</section>





      </div>
    </div>
  )
}

export default AboutMe
