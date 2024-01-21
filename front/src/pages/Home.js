import React from 'react'
import LeafletMap from '../components/LeafletMap'
import Expenses from '../components/Expenses'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <section>
        {/* <LeafletMap/>
        <Expenses/> */}

        <Sidebar/>
        <div className='container'>
        <Hero/>
        </div>
        
        
        <LeafletMap/>
        <Expenses/>

        
    </section>
  )
}

export default Home