import React from "react";

function Test() {
  return (
    <section className="test-bg">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <div>
          <img src="images/test-mg.png" alt="" className="h-[500px]" />
        </div>
        <div className="bg-grad p-[2px] m-2 sm:mr-20 ">
          <div className="bg-sec h-full">
            <h1 className=" text-4xl font-extrabold py-3">TEST DURATION</h1>
            <h3 className="text-xl font-bold py-2">KiX Trade-athon starts on Friday 3rd November.</h3>
            <p className=" text-sm font-semibold mb-3">
              Entrants into the Trade-athon can join at any time before or after
              that date and will qualify for 1000 $FreeKiX after completing
              registration.
            </p>
            <p className=" text-sm font-semibold mb-8">
              Entrants can build their chances of winning a share of the prize
              fund by completing tasks set on the KiX Zealy platform which opens
              on Wednesday 24th October.
            </p>

            <p className="text-[#FFC200] text-xl">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
