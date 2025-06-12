import React from 'react'
import JobsList from '../Components/JobsList'

function HomePage({jobs, setJobs}) {
  return (
    <div> <JobsList jobs={jobs} setJobs={setJobs}/></div>
   
  )
}

export default HomePage