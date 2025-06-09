import React from 'react'
import AddNewJobPage from '../Pages/AddNewJobPage'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-left'>
           <Link to="/"><img src="../src/assets/job-finder.png" alt='logo' className='logo-image'/></Link>
            <label> Search 
             <input type='search'/>
            </label>
        </div>
        <div className='navbar-right'>
           
        <Link to="/">HomePage</Link>
        <Link to="/add-job">Add New Job</Link>
        <Link to="/about">About us</Link>
        <Link to="/companies">Companies</Link>
        </div>
      </nav>

    
    </>
  )
}

export default Navbar