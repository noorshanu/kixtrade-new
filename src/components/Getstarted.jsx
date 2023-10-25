import React from "react";

function Getstarted() {
  return (
    <section>
      <div className="container-wrapper">
        <div className=" text-center">
          <h1 className=" text-2xl sm:text-4xl font-extrabold ">
            THERE ARE 2 WAYS TO GET STARTED
          </h1>
        </div>

        <div className="flex justify-between gap-5  sm:gap-10 flex-col sm:flex-row">
          <div className="bg-grad p-[2px]  ">
            <div className="bg-sec h-full">
              <div>
                <img src="images/logo-start.png" alt="" className="my-4" />

                <p className=" text-base font-normal">
                  Jump straight into the <span className=" font-bold">KiX Test Platform</span> <br /> now and use our <span className=" font-bold">FAQs</span>   to join up and learn <br /> how to play. You might prefer this if you
                  were part of our previous tests and are <br /> already registered.
                </p>

                <div className=" mt-6">
                    <a href="/" className=" bg-grad2 text-2xl font-bold px-10 py-2 flex justify-end items-center w-[220px] text-center ml-auto"> <span className="text-[#FFC200]">ENTER</span> HERE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-grad p-[2px]">
            <div className="bg-sec h-full">
              <div>
                <img src="images/zely.svg" alt="" className="my-4" />
                <p className="text-base font-normal">
                Use the <span className=" font-bold">KiX Zealy Quest Manager</span>  to be <br /> guided through registration AND to <span className=" font-bold">earn XP</span>  <br /> which will build YOUR chances of Winning!
                </p>

                <div className=" mt-14">
                    <a href="/" className=" bg-grad2 text-2xl font-bold px-10 py-2 flex justify-end items-center w-[220px] text-center ml-auto"> <span className="text-[#FFC200]">ENTER</span> HERE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <img src="images/condown.png" alt=""  className=" mx-auto hidden sm:block"/>
        </div>
        <div className="text-center ">
            <h2 className=" text-3xl font-extrabold uppercase sm:mt-0 mt-6"> MAKE YOUR CHOICE!</h2>
        </div>
      </div>
    </section>
  );
}

export default Getstarted;
