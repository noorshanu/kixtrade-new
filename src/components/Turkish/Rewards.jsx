import React from "react";

function Rewards() {
  return (
    <section className=" text-center mt-8 sm:mt-8">
      <div>
        <h1 className=" text-2xl sm:text-4xl font-extrabold text sm:pt-8">
          Trade-athonu Ödülleri
        </h1>
        <p className=" text-base sm:text-[22px] font-normal sm:max-w-5xl w-[90%] sm:w-full mx-auto mt-8 lh-1_4 ">
          Kripto cüzdanlarını KiX Test platformuna bağlayan nitelikli
          katılımcılar 1.000 FreeKiX tokeni talep edebilecek ve ardından KiX
          oyununda 1 MİLYON $KiX tokendan pay almak
          <br />  için oynayabilecekler.
        </p>
        <a href="#hithere" className=" cursor-pointer relative z-50">
        <img
          src="images/100k3.png"
          alt=""
          className=" mx-auto mt-0 sm:-mt-12"
        /> </a>
        <div className="">
          <img
            src="images/bg-main2.png"
            alt=""
            className="w-full -mt-[5rem] sm:-mt-[7rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default Rewards;
