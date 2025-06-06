import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import Footer from '../Components/Footer.jsx'
import JobsList from '../Components/JobsList.jsx'
function HomePage() {
  return (
    <>
 <section>
    <Navbar/>
 </section>
<section>
<Sidebar/>
</section>
  <section>
<JobsList/>
  </section>
  <section>
<Footer/>
  </section>    
    </>
   
  )
}

export default HomePage