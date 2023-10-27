import React from "react";

function Getstarted() {
  return (
    <section className=" mt-6 sm:mt-8">
      <div className="container-wrapper">
        <div className=" text-center">
          <h1 className=" text-2xl sm:text-4xl font-extrabold mb-4 ">
            THERE ARE 2 WAYS TO GET STARTED
          </h1>
        </div>

        <div className="flex justify-between gap-5  sm:gap-10 flex-col sm:flex-row">
          <div className="bg-grad p-[2px] relative ">
            <img
              src="images/no-1.png"
              alt=""
              className=" absolute -top-[25%] sm:-top-[30%] h-[150px] left-[65%] sm:left-[75%]"
            />
            <div className="bg-sec h-full">
              <div>
                <a href="https://test.kix.digital" target="_blank"> 
                <img src="images/logo-start.png" alt="" className="my-4" />
                </a>
                

                <p className=" text-base sm:text-[22px] font-normal lh-1_3">
                  {" "}
                  <span className=" font-bold">Jump straight into the KiX Test Platform</span> <br />{" "}
                  now and use our <span className=" font-bold">FAQs</span> to
                  join up and learn  how to play. You might prefer this if
                  you were part of our previous tests and are already
                  registered.
                </p>

                <div className=" mt-6">
                  <a
                    href="https://test.kix.digital" target="_blank"
                    className=" bg-grad2 text-2xl font-bold px-10 py-2 flex justify-end gap-2 items-center w-[220px] text-center ml-auto"
                  >
                    {" "}
                    <span className="text-[#FFC200]">ENTER </span> HERE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-grad p-[2px] relative">
            <img
              src="images/no-2.png"
              alt=""
              className=" absolute -top-[25%] sm:-top-[30%] h-[150px] left-[65%] sm:left-[75%]"
            />
            <div className="bg-sec h-full">
              <div>
                <a href="https://zealy.io/c/kixdigital" target="_blank">

                <img src="images/zely.svg" alt="" className="my-4" />
                </a>
               
                <p className="text-base sm:text-[22px] font-normal lh-1_3">
                  Use the{" "}
                  <span className=" font-bold">KiX Zealy Quest Manager</span> to
                  be guided through registration AND to{" "}
                  <span className=" font-bold">earn XP</span> which will
                  build YOUR chances of Winning!
                </p>

                <div className=" mt-14">
                  <a
                href="https://zealy.io/c/kixdigital" target="_blank"
                    className=" bg-grad2 text-2xl font-bold px-10 py-2 flex justify-end items-center w-[220px] gap-2 text-center ml-auto"
                  >
                    {" "}
                    <span className="text-[#FFC200]">ENTER</span> HERE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="images/condown.png"
            alt=""
            className=" mx-auto hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}

export default Getstarted;
