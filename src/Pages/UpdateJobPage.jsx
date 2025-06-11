import axios from 'axios';
import { previousDay } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

function UpdateJobPage({categories}) {
const nav = useNavigate();
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



function handleQualificationChange (index, value) {
        let updated = [...currentJob.qualifications];
        updated[index] = value;
        setCurrentJob(prev => ({ ...prev, qualifications: updated }));
        };
function addQualification(){
    setCurrentJob(prev =>({...prev, qualifications:[...prev.qualifications, ""]}));
}
 
function removeQualification(index){
    const updated = [...currentJob.qualifications];
    updated.splice(index, 1);
    setCurrentJob(prev => ({...prev, qualifications:updated}))

}
function updateJob(event) {
  const { name, value, type, checked } = event.target;
  const newValue = type === 'checkbox' ? checked : value;

  setCurrentJob(prev => ({
    ...prev,
    [name]: newValue
  }));
}

function updateJobSubmit(event){
        event.preventDefault();

        axios.put(`http://localhost:4000/jobs/${jobId}`, currentJob)
        .then((res)=> {
             console.log(res);
             nav("/");
            
        })
        .catch((err)=>{
            console.log(err)
        });
   

    }
  return (
    <form onSubmit={updateJobSubmit} className='addForm'>
        <label>title
            <input name = "title" type='text' value={currentJob.title} onChange={updateJob}/>   
        </label>
        <label>description
            <textarea name = "description" type='text' value={currentJob.description} onChange={updateJob}/> 
        </label>  
        <label>company
            <input name = "company" type='text' value={currentJob.company} onChange={updateJob}/>        
        </label>
        {currentJob.qualifications.map((q, index)=>{
            return(
                <div key={index}>
                    <input type='text' value={q} onChange={(e) => handleQualificationChange(index, e.target.value)}/>
                    <button type='button' onClick={removeQualification}>remove</button>
                </div>
            )
        })}
         <button type='button' onClick={addQualification}>Add Qualification</button>
        
        <label> location
             <input name = "location" type='text' value={currentJob.location} onChange={updateJob} /> 
        </label>

        <label>minimum salary
            <input name = "salary_from" type='number' value={currentJob.salary_from} onChange={updateJob}/>
        </label>

        <label>maximum salary
        <input name = "salary_to" type='number' value={currentJob.salary_to} onChange={updateJob}/> 
        </label>
        <label> data of update
            <input name="updated_at" type='date' onChange={updateJob}/>
        </label>
         <label> data of deadline
            <input name="application_deadline" type='date' onChange={updateJob}/>
        </label>
        <label >type of employment 
             <input name = "employment_type" type='text' value={currentJob.employment_type} onChange={updateJob}/>
        </label>
                
        <label>contact
            <input name = "contact" type='text' value={currentJob.contact} onChange={updateJob}/>        
        </label>
        <label >category
        <select name = "job_category" type='text' placeholder='job_category' onChange={updateJob}> 
            {categories.map((category, index)=>{
                return(
                     <option key={index} value={category}>{category}</option>
                )
            })}
           
        </select>
        </label>
            
        <label>Is this position remote?
             <input name = "is_remote_work" type='checkbox' onChange={updateJob} />  
             </label>      
                 
             
       {/* how to input the date in  react */}
        
        <button> Save changes </button>
    </form>
  )
}

  


export default UpdateJobPage