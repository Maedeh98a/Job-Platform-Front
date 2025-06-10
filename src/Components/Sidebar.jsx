import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddNewJobPage from '../Pages/AddNewJobPage';

function Sidebar({categories}) {
  

  return (
    <>
   
    {categories.map((oneCategory, index)=>{
      return(
        <h4 key={index} id='category-sidebar'>{oneCategory}</h4>

      )
      
    })}
    </>
  )
}

export default Sidebar