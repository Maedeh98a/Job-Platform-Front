import axios from 'axios';
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {format , parseISO} from 'date-fns';
import { useNavigate } from 'react-router-dom';

function AddNewJobPage() {

    const nav = useNavigate()
    const [newJob, setNewJob] = useState({
        id: uuidv4(),
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
    function handleNewJob(event){
        const name = event.target.name;
        const value = event.target.value;
        setNewJob(values => ({[name]:value ,...values }));
        nav("/");

    }
    

    function addNewJob(event){
        event.preventDefault();

        axios.post("http://localhost:4000/jobs", newJob)
        .then((res)=> {
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        });

    }
  return (
    <form onSubmit={addNewJob} className='addForm'>
        <input name = "title" type='text' placeholder='title of the position' onChange={handleNewJob}/>        
        <input name = "description" type='text' placeholder='description for the position' onChange={handleNewJob}/>        

        <input name = "company" type='text' placeholder='name of the company' onChange={handleNewJob}/>        
        <input name = "location" type='text' onChange={handleNewJob} />        
        <input name = "salary_from" type='number' placeholder='minimum of the salary' onChange={handleNewJob}/>        
        <input name = "salary_to" type='number' placeholder='maximum of the salary' onChange={handleNewJob}/> 
        <input name = "employment_type" type='text' placeholder='employment_type' onChange={handleNewJob}/>        
        <input name = "contact" type='text' placeholder='contact' onChange={handleNewJob}/>        

        <input name = "job_category" type='text' placeholder='job_category' onChange={handleNewJob}/>  
        <label>is_remote_work
             <input name = "is_remote_work" type='checkbox' onChange={handleNewJob} />  
             </label>      
             
       {/* how to input the date in  react */}
        
        <button> add new item </button>
    </form>
  )
}

export default AddNewJobPage