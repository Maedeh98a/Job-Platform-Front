import React from 'react'
import {Helmet} from 'react-helmet'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <>
    <Helmet>
      <title>About our platform</title>
    </Helmet>
    <article className='about'>
      <h3>
        JOB PLATFORM
      </h3>
      <p>
        This webpage is designed for people who are looking for jobs. On the homepage, you can find a list of available job opportunities. When a job is clicked, the job seeker can view detailed information about it.
Companies have more access: they can edit the job details or remove a job opportunity if needed.
      </p>

    </article>
    <article className='about'>
      <h3>ABOUT MAEDEH</h3>
  
         <p>Maedeh is an Ironhacker student passionate about learning React. She previously studied Computer Engineering and enjoys building user-friendly web applications.</p>
       
      <div className='social-links'>
        <Link to="https://github.com/Maedeh98a"><img src={github} alt="github"/></Link>
        <br></br>
        <Link to="https://www.linkedin.com/in/maedeh-ahmadian/"><img src={linkedin} alt="linkedin"/></Link>
       </div>

    </article>
    </>
    
  )
}

export default AboutPage