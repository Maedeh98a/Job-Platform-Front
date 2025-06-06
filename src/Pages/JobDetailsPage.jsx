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


  return (
    <>
    <h3>{oneJob.title}</h3>
    </>
    
  )
}

export default JobDetailsPage