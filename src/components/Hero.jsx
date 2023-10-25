import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container-wrapper relative">
        <img src="images/freeplay.png" alt="" className=" absolute top-[24%] left-[5%]" />
        <img src="images/open.png" alt="" className=" absolute top-[20%] right-[2%]" />
        <img src="images/hero-up.png" alt="" className=" mx-auto" />
        <img
          src="images/player.png"
          alt=""
          className=" object-cover mx-auto  center-div z-0"
        />
        <img src="images/100k.png" alt="" className="mx-auto relative z-20" />
        <img
          src="images/black-b.png"
          alt=""
          className="w-full absolute z-10 bottom-0"
        />
      </div>
    </section>
  );
}

export default Hero;
