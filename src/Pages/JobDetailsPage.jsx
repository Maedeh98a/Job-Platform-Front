import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function JobDetailsPage() {
 const {jobId} = useParams() 
 const [oneJob, setOneJob] = useState([])
 

 useEffect(()=>{
  fetch(`http://localhost:4000/jobs/${jobId}`)
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

  return `Salary: ${salary_start} - ${salary_end}`
 
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
    <article key={oneJob.id}>
      <section className='details-title'>
        <h3>{oneJob.title}</h3>
        <h4>{`(${oneJob.employment_type})`}</h4>
      </section>
      <section className='details-company'>
        <h5>
          {oneJob.company} 
        </h5>
       <h5>
         {oneJob.contact}
        </h5>
        </section>
        <section className='details-description'>
          <p>
          {oneJob.description}
        </p>
        <p>{oneJob.is_remote_work? "this job has remote option" : "this job is just on-site "}</p>
        
        <div className='jobs-status'>
           <h5>{salaryCheck(oneJob.salary_from, oneJob.salary_to)}</h5>
           <h5>{jobStatus(oneJob.number_of_opening) }</h5>
        </div>
        <button>apply</button>


        </section>
     </article>
    
    </>
    
  )
}

export default JobDetailsPage