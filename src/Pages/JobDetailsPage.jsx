import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function JobDetailsPage() {
 const {jobId} = useParams() 
 const [oneJob, setOneJob] = useState([])
 

 useEffect(()=>{
  fetch(`${API_URL}/jobs/${jobId}`)
  .then((jsonResponse)=>{
    return jsonResponse.json();
  })
  .then((data)=>{
    setOneJob(data);

  })
  .catch((err)=>{
    console.log(err)
  })
 },[jobId]);

function salaryCheck(salary_start, salary_end){
  salary_start = Math.floor(salary_start / 1000) * 1000;
  salary_end = Math.ceil(salary_end / 1000) * 1000;

  return `Salary range: ${salary_start} € - ${salary_end} €`
 
}
function jobStatus(status){
  let desiredSentence = '';
  switch(true){
    case status == 0:
      desiredSentence = `This opportunity hasn't been checked yet. You can the first person to apply`
      break;
    case status ==1:
      desiredSentence = `This opportunity has been opened ${status} time`
      break; 
    case status >=1 :
      desiredSentence = `This opportunity has been opened ${status} times`
      break;
      
  }
  return desiredSentence;
}
  return (
    <>
    <article key={oneJob.id} className='job-details'>
      <section className='details-title'>
        <h3>{oneJob.title}</h3>
        <h4>{`(${oneJob.employment_type})`}</h4>
      </section>
      <section className='details-company'>
        <h5>Company Name: {oneJob.company}</h5>
       <h5>contact: {oneJob.contact}</h5>
        </section>
        <section className='details-description'>
          <h4>Description</h4>
         <p>{oneJob.description}
        </p>
       <div className='qualifications'>
        <h4 >Our Qualification: </h4>
        <ul>
        {oneJob?.qualifications?.map((qualification, index)=>{
          return(
            <li key={index}>{qualification}</li>
          )
        })}
        </ul>
       </div>
        <button id='remote-style'>
          <em>
 {oneJob.is_remote_work? "This job has a remote option" : "This job is only on-site "}
        </em>
        </button>
        
        <div className='job-status'>
           <h4>{salaryCheck(oneJob.salary_from, oneJob.salary_to)}</h4>
           <h4>{jobStatus(oneJob.number_of_opening) }</h4>
        </div>
        <div className='job-timing'>
           <h5>This position created at {oneJob.created_at}</h5>
           <h5>Application deadline at {oneJob.application_deadline}</h5>
        </div>
        </section>
        <button id='apply-btn'>
          Apply for this opportunity</button>
     </article>
    
    </>
    
  )
}

export default JobDetailsPage