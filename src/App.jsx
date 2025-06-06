import { useEffect, useState } from 'react'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../src/Pages/HomePage.jsx'

import './App.css'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import JobDetailsPage from './Pages/JobDetailsPage.jsx'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='/job-details/:jobId' element={<JobDetailsPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    
    </>
  )
}

export default App
