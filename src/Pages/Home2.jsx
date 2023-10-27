import React from 'react'
import Hero from '../components/Hero'
import NewAbout from '../components/v1/NewAbout'
import Rewards from '../components/v1/Rewards'
import Getstarted from '../components/Getstarted'
import Test from '../components/Test'
import Footbal from '../components/Footbal'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom';

function Home2() {
  
  return (
    <>
    <Hero />
       <div className=" py-4 sm:py-2">
       
       <NewAbout/>
       </div>
       <div className="py-4 sm:py-2">
         <Rewards/>
       </div>
 
       <div className="py-0 sm:py-2">
         <Getstarted />
       </div>
       <div className="text-center mb-8 ">
             <h2 className=" text-3xl font-extrabold uppercase sm:mt-0 mt-8"> MAKE YOUR CHOICE!</h2>
         </div>
       <Test />
 
       <div className="py-0 sm:py-2">
      <Footbal/>
       </div>
 
       <div className="py-7 sm:py-2">
         <Footer />
       </div>
   </>
  )
}

export default Home2