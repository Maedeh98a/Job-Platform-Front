import { useEffect, useState } from 'react'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
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
import JobsList from './Components/JobsList.jsx'
import HomePage from './Pages/HomePage.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    async function getAllCategories() {
      try {
        const response = await axios.get(`${API_URL}/jobs`);
        const jobs =  response.data;
        let categoriesArr = []
        categoriesArr = jobs.map((job)=>{
            
              return job.job_category;
            
            
        })
        
        setCategories([...new Set(categoriesArr)])
      

      } catch (error) {
        console.log(error)
      }      
    }

    getAllCategories();

  }, [])
  
  return (
    <>
    <main>
    <Navbar/>

<section className='homepage-view'>
 <div className='sidebar'>
    <Sidebar categories={categories}/>
    </div>
    <div id='joblist-view'>
    
    
    

   
  


    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='/job-details/:jobId' element={<JobDetailsPage/>}/>
      <Route path='/add-job' element={<AddNewJobPage categories={categories}/>}/>
      <Route path='/update/:jobId' element={<UpdateJobPage categories={categories}/>}/>
      <Route path='/companies' element={<Companies/>}/>

      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
</section>
        <section>
    <Footer/>
  </section> 
    
   
  </main>
    </>
  )
}

export default App
