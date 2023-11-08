import React from "react";

function Hero() {
  return (
    <section className="hero relative">
      <div className="container-wrapper relative">
        <img src="images/freeplay.png" alt="" className=" absolute top-[20%] sm:top-[24%] left-[12%]  sm:left-[5%] h-[133px] sm:h-auto " />
        <img src="images/open.png" alt="" className=" absolute top-[20%] sm:right-[2%] right-[12%] h-[133px] sm:h-auto  " />
        <img src="images/hero-up.png" alt="" className=" mx-auto" />
        <img
          src="images/player.png"
          alt=""
          className=" object-cover mx-auto h-[89%]  center-div z-30 -mt-[60px] "
        />
        <img src="images/100k.png" alt="" className="mx-auto relative z-20 h-[120px] sm:h-auto" />
       
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
