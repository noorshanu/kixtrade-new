import Rewards from "../components/Turkish/Rewards";
import Hero from "../components/Turkish/Hero";
import NewAbout from "../components/Turkish/NewAbout";
import React from "react";
import Getstarted from "../components/Turkish/Getstarted";
import Test from "../components/Turkish/Test";
import Footbal from "../components/Turkish/Footbal";
import Footer from "../components/Turkish/Footer";

function Home3() {
  return (
    <>
      <Hero />
      <div className=" py-4 sm:py-2">
        <NewAbout />
      </div>
      <div className="py-4 sm:py-2">
        <Rewards />
      </div>
      <div className="py-0 sm:py-2">
        <Getstarted />
      </div>
      <div className="text-center mb-8 ">
             <h2 className=" text-3xl font-extrabold uppercase sm:mt-0 mt-8">SEÇİMİNİ YAP!</h2>
         </div>
         <Test/>
         <div className="py-0 sm:py-2">
            <Footbal/>
         </div>
         <div className="py-7 sm:py-2">
            <Footer/>
            </div>
    </>

  );
}

export default Home3;
