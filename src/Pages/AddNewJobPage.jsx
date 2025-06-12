import axios from 'axios';
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {format , parseISO} from 'date-fns';
import { useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function AddNewJobPage({categories}) {

    const nav = useNavigate()
    const [qualificationInput, setQualificationInput] = useState("")
    const [newJob, setNewJob] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        company: "",
        location: "",
        salary_from: 10000,
        salary_to:10000,
        employment_type: "",
        application_deadline: "",
        qualifications: [],
        contact: "",
        job_category: "",
        is_remote_work: 0,
        number_of_opening: 0,
        created_at: "",
        updated_at: "",

    });
    function handleAddQualification (){
        setNewJob(prev =>({
            ...prev,qualifications:[...prev.qualifications, qualificationInput]
        }));
        setQualificationInput("");
    }
    
    function handleNewJob(event){
        const name = event.target.name;
        const value = event.target.value;

        setNewJob(values => ({...values, [name]:value }));

    }
    

    function addNewJob(event){
        event.preventDefault();

        axios.post(`${API_URL}/jobs`, newJob)
        .then((res)=> {
            nav('/');
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        });

    }
  return (
    
    <div className='form-div'>
        <form onSubmit={addNewJob} className='addForm' >
        <label>title
             <input name = "title" type='text' placeholder='title of the position' onChange={handleNewJob}/>    
        </label>
        <label>description
            <textarea name = "description" type='text' placeholder='description for the position' onChange={handleNewJob}/>  
        </label>
        <label>company
            <input name = "company" type='text' placeholder='name of the company' onChange={handleNewJob}/>
        </label>
        <label>Add requirements
            <input name='qualifications' type='text' value={qualificationInput} onChange={(e)=> setQualificationInput(e.target.value)}/>
            <button type='button' onClick={handleAddQualification}>Add Qualification</button>
            <ul>
                {newJob.qualifications.map((q, i)=>(<li key={i}>{q}</li>))}
            </ul>
        </label>
        <label>location
              <input name = "location" type='text' onChange={handleNewJob} />
        </label>
        <label> minimum salary  
            <input name = "salary_from" type='number' min="10000"  max="300000" placeholder='minimum of the salary' onChange={handleNewJob}/>
        </label>
        <label> maximum salary
            <input name = "salary_to" type='number' min="10000"  max="300000" placeholder='maximum of the salary' onChange={handleNewJob}/>
        </label>
        <label> data of creation
            <input name="created_at" type='date' onChange={handleNewJob}/>
        </label>
         <label> data of deadline
            <input name="application_deadline" type='date' onChange={handleNewJob}/>
        </label>
        
        <label>type of employment 
             <input name = "employment_type" type='text' placeholder='employment_type' onChange={handleNewJob}/> 
        </label>
        <label>your contact
           <input name = "contact" type='text' placeholder='contact' onChange={handleNewJob}/> 
        </label>
        <label >category
        <select name = "job_category" type='text' placeholder='job_category' onChange={handleNewJob}> 
            {categories.map((category, index)=>{
                return(
                     <option key={index} value={category}>{category}</option>
                )
            })}
           
        </select>
        </label>
        
        <label>Is this position remote?
             <input name = "is_remote_work" type='checkbox' onChange={handleNewJob} />  
             </label>      
             
       {/* how to input the date in  react */}
        
        <button> add new item </button>
    </form>
  </div>
  )
}

export default AddNewJobPage