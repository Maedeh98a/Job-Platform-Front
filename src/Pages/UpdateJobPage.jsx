import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateJobPage({categories}) {
const {jobId} = useParams();
const [qualifications, setQualifications] = useState([]);
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
        setQualifications(res.data.qualifications)

    })
    .catch((err)=>{
        console.log(err);
    })
}, [jobId])


 function handleUpdateQualification (){
        setNewJob(prev =>({
            ...prev,qualifications:[...prev.qualifications, qualifications]
        }));
        
    }
    const handleQualificationChange = (index, value) => {
        const updated = [...qualifications];
        updated[index] = value;
        setQualifications(updated);
        setCurrentJob(prev => ({ ...prev, qualifications: updated }));
        };
function updateJob(event){
        const name = event.target.name;
        const value = event.target.value;
        setCurrentJob(values => ({...values, [name]:value}))
        console.log(currentJob);

    }

function updateJob(event){
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
    <form onSubmit={updateJob} className='addForm'>
        <label>title
            <input name = "title" type='text' value={currentJob.title} onChange={updateJob}/>   
        </label>
        <label>description
            <textarea name = "description" type='text' value={currentJob.description} onChange={updateJob}/> 
        </label>  
        <label>company
            <input name = "company" type='text' value={currentJob.company} onChange={updateJob}/>        
        </label>
        <label>change requirements
            {/* <input name='qualifications' type='text' value={qualificationInput} onChange={(e)=> setQualificationInput(e.target.value)}/>
            <button type='button' onClick={handleUpdateQualification}>Add Qualification</button> */}
            {/* <ul>
                {qualifications.map((qualification, i)=>{
                    return(
                        <input key={i} name={`qualifications${i}`} type='text' value={qualification} onChange={(e)=> handleQualificationChange(i, e.target.value)}/>
                        
                    )
                })}
            </ul>
             <button type='button' onClick={handleUpdateQualification}>Add Qualification</button> */}
        </label>
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