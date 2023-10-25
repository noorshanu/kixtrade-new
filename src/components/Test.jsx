import React from "react";

function Test() {
  return (
    <section className="test-bg relative  w-full  h-full">
      <img src="images/top-b.png" alt="" className=" top-0 absolute hidden sm:block w-full h-[200px]" />
      <img src="images/black-b.png" alt="" className=" bottom-0 absolute hidden sm:block " />
      <div className="container-wrapper">
        <div className="flex sm:gap-5 items-center flex-col sm:flex-row h-full w-full">
          <div className="w-full  h-full"></div>
          <div className="bg-grad3 w-auto lg:w-auto  p-[2px] m-2 sm:ml-11 sm:mt-[10%] mt-2   ">
            <div className="bg-sec h-full relative z-20">
              <h1 className=" text-4xl font-extrabold py-3">TEST DURATION</h1>
              <h3 className="text-xl font-bold py-2">
                KiX Trade-athon starts on Friday 3rd November.
              </h3>
              <p className=" text-sm font-semibold mb-3">
                Entrants into the Trade-athon can join at any time before or
                after that date and will qualify for 1000 $FreeKiX after
                completing registration.
              </p>
              <p className=" text-sm font-semibold mb-8">
                Entrants can build their chances of winning a share of the prize
                fund by completing tasks set on the KiX Zealy platform which
                opens on Wednesday 24th October.
              </p>

              <p className="text-[#FFC200] text-xl">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
