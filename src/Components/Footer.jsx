import React from 'react'
import { Link } from 'react-router-dom'
// import {github} from "../src/assets/github.png"
// import {linkedin} from "../src/assets/linkedin.png"
function Footer() {
  return (
    <footer>
      <div id='footer-style'>
        <Link to="https://www.linkedin.com/in/maedeh-ahmadian">
      <img src="../src/assets/linkedin.png" alt="linkedin"/>
      </Link>
      <Link to="https://github.com/Maedeh98a">
      <img src="../src/assets/github.png" alt="linkedin"/>
      </Link>

      </div>
      
    </footer>
  )
}

export default Footer