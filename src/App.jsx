import { useEffect, useState } from 'react'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../src/Pages/HomePage.jsx'
import './App.css'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import JobDetailsPage from './Pages/JobDetailsPage.jsx'
import AddNewJobPage from './Pages/AddNewJobPage.jsx'
import UpdateJobPage from './Pages/UpdateJobPage.jsx'
import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Footer from './Components/Footer.jsx'
import Companies from './Pages/Companies.jsx'

function App() {
  
  return (
    <>
    <main>
       <section>
    <Navbar/>
    </section>
    <section className='sidebar'>
    <Sidebar/>
  </section>
  


    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='/job-details/:jobId' element={<JobDetailsPage/>}/>
      <Route path='/add-job' element={<AddNewJobPage/>}/>
      <Route path='/update/:jobId' element={<UpdateJobPage />}/>
      <Route path='/companies' element={<Companies/>}/>

      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
        <section>
    <Footer/>
  </section> 
    
   
  </main>
    </>
  )
}

export default App
