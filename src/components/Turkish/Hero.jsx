import React from "react";

function Hero() {
  return (
    <section className="hero relative">
      <div className="container-wrapper relative">
        <img src="images/open2.png" alt="" className=" absolute top-[20%] sm:top-[24%] left-[12%]  sm:left-[5%] h-[133px] sm:h-[230px] " />
        <img src="images/freeplay2.png " alt="" className=" absolute top-[20%] sm:right-[2%] right-[12%] h-[133px] sm:h-[230px]  " />
        <img src="images/hero-up2.png" alt="" className=" mx-auto" />
        <img
          src="images/player.png"
          alt=""
          className=" object-cover mx-auto  center-div z-0"
        />
        <img src="images/100k4.png" alt="" className="mx-auto relative z-20 mt-32 sm:mt-56" />
       
      </div>
      <img
          src="images/black-b.png"
          alt=""
          className="w-full absolute z-10 bottom-0"
        />
    </section>
  );
}

export default Hero;
