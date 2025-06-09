import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateJobPage() {
const {jobId} = useParams();
const [currentJob, setCurrentJob] = useState({
   
        title: "",
        description: "",
        company: "",
        location: "",
        salary_from: 0,
        salary_to:0,
        employment_type: "",
        application_deadline: "",
        qualifications: [],
        contact: "",
        job_category: "",
        is_remote_work: 0,
        number_of_opening: 0,
        created_at: "",
        updated_at: ""

    });

useEffect(()=>{
    
    axios.get(`http://localhost:4000/jobs/${jobId}`)
    .then((res)=>{
        setCurrentJob(res.data)

    })
    .catch((err)=>{
        console.log(err);
    })
}, [jobId])


function updateJob(event){
        const name = event.target.name;
        const value = event.target.value;
        setCurrentJob(values => ({...values, [name]:value}))
        console.log(currentJob);

    }
    

function addNewJob(event){
        event.preventDefault();

        axios.put(`http://localhost:4000/jobs/${jobId}`, currentJob)
        .then((res)=> {
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        });

    }
  return (
    <form onSubmit={addNewJob} className='addForm'>
        <input name = "title" type='text' value={currentJob.title} onChange={updateJob}/>        
        <input name = "description" type='text' value={currentJob.description} onChange={updateJob}/>        

        <input name = "company" type='text' value={currentJob.company} onChange={updateJob}/>        
        <input name = "location" type='text' value={currentJob.location} onChange={updateJob} />        
        <input name = "salary_from" type='number' value={currentJob.salary_from} onChange={updateJob}/>        
        <input name = "salary_to" type='number' value={currentJob.salary_to} onChange={updateJob}/> 
        <input name = "employment_type" type='text' value={currentJob.employment_type} onChange={updateJob}/>        
        <input name = "contact" type='text' value={currentJob.contact} onChange={updateJob}/>        

        <input name = "job_category" type='text' value={currentJob.job_category} onChange={updateJob}/>  
        <label>is_remote_work
             <input name = "is_remote_work" value={currentJob.is_remote_work} onChange={updateJob} />  
             </label>      
             
       {/* how to input the date in  react */}
        
        <button> add new item </button>
    </form>
  )
}

  


export default UpdateJobPage