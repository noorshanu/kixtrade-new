import React from 'react'
import Hero from '../components/Hero'
import NewAbout from '../components/v1/NewAbout'
import Rewards from '../components/v1/Rewards'
import Getstarted from '../components/Getstarted'
import Test from '../components/v1/Test'
import Footbal from '../components/Footbal'
import Footer from '../components/Footer'
import { Helmet } from "react-helmet";
import Disclaimer from '../components/v1/Disclaimer'

function Home2() {
  
  return (
    <>
     <Helmet>
    


      </Helmet>
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
<div className='py-4'>

         <Disclaimer/>
</div>
       </div>
   </>
  )
}

export default Home2