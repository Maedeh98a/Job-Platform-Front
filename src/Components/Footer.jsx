import React from 'react'
import { Link } from 'react-router-dom'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
function Footer() {
  return (
    <footer>
      <div id='footer-style'>
        <Link to="https://www.linkedin.com/in/maedeh-ahmadian">
      <img src={linkedin} alt="linkedin"/>
      </Link>
      <Link to="https://github.com/Maedeh98a">
      <img src={github} alt="github"/>
      </Link>

      </div>
      
    </footer>
  )
}

export default Footer