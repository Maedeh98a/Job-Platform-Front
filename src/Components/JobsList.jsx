import React from 'react'
import { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateJobPage from '../Pages/UpdateJobPage';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
function JobsList({jobs, setJobs}) {
  

  // useEffect(()=>{
  //   async function getAllJobs() {
  //     try {
  //       const allJobs = await axios.get(`${API_URL}/jobs`);
  //       setJobs(allJobs.data);
      
  //     } catch (error) {
  //       console.log(error);
  //     }
      
  //   }

  //   getAllJobs();
  // },[]);

  function getQualifications(qualifications)
  {
    const qualificationObject = ["JavaScript","C++", "Angular", "Docker","Vue.js","React", "SQL", "Git", "Java", "Kotlin", "AWS",
       "MongoDB", "Ruby", "GraphQL", "Python", "PHP", "Swift", "TypeScript", "HTML", "CSS", 
      "Node.js"];
      let filteredObject = []
        

      for(const qualification of qualifications){
        for(const object of qualificationObject){
          if(qualification.includes(object)){
            filteredObject.push(object);
            break;
          }
        }
      }
 return filteredObject;

 // we can use break just in for, while and switch and here I got problem because of Java and JavaScript
      //    const newObject = qualificationObject.filter((object)=>{
      //     if(qualification.includes(object)){
      //       return true;
            
      //     }else{
      //       return false;
      //     }
      }


  function deleteObject(item){
  
   console.log(item)
      axios.delete(`${API_URL}/jobs/${item}`)
    .then((res)=>{
      console.log(res);
      const remainItems = jobs.filter((job)=>{
        if(job.id !== item){
          return true
        }
      })
      setJobs(remainItems)
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  
  return (
    <>
    {jobs.map((job)=>{
      return(
       
          <article className='job-listing' key={job.id}>
            <div className='job-list-title'>
               <Link to={`/job-details/${job.id}`} >
              <h3>{`${job.title} (${job.employment_type})`}</h3>
              </Link>
              <div className='button-style'>
                <button id='delete-btn' onClick={()=> deleteObject(job.id)}>delete</button>
                <Link to={`/update/${job.id}`}><button id='edit-btn'>edit</button></Link>
              </div>
              </div>
            <section className='job-properties'>
              <div id='job-status'>
              <h5>{job.location}</h5>
              <button id='remote-btn'>{job.is_remote_work? "Remote" : "On-site "}</button>
            </div>
            <div id='job-qualification'>
              {(getQualifications(job.qualifications)).map((obj, index)=>{
                return(<h5 key={index}>{obj}</h5>)
            
            })}

            </div>
            </section>
            
          </article>
        
        
      )
    })}
    </>
    
    
  )
}

export default JobsList