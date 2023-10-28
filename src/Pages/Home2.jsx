import React from 'react'
import Hero from '../components/Hero'
import NewAbout from '../components/v1/NewAbout'
import Rewards from '../components/v1/Rewards'
import Getstarted from '../components/Getstarted'
import Test from '../components/Test'
import Footbal from '../components/Footbal'
import Footer from '../components/Footer'
import { Helmet } from "react-helmet";
import Disclaimer from '../components/v1/Disclaimer'

function Home2() {
  
  return (
    <>
     <Helmet>
    
<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','ognyd');
</script>

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