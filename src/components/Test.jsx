import React from "react";

function Test() {
  return (
    <section className=" relative  w-full  h-full mt-8 sm:mt-8">
      <div className="container-wrapper">
        <div className=" text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text pt-4  sm:pt-8 pb-7">
            TRADE-ATHON TIMINGS
          </h1>
        </div>
        <div className="bg-grad3  p-[2px] ">
          <div className="bg-sec">
        
            <div class="w-full mx-auto table-1">
              <table class="w-full">
                <tbody>
                  <tr className=" py-4 my-4 flex flex-col flex-no wrap  lg:table-row border-b border-[#00000042]">
                    <td class="py-2 px-4 w-[350px]">
                      {" "}
                      <h1 className="text-[22px] font-bold text-center">
                        Tue 23 October
                      </h1>
                    </td>
                    <td class="py-2 px-4">
                      <div className="text-[22px] font-normal max-w-2xl mb-4">
                        <p>
                          Onboarding - directly on KiX Test Site or through
                          Zealy
                        </p>
                        <p> 1,000 FreeKiX for all completing registration</p>
                        <p>Practice Trading available</p>
                        <p>100,000 $KiX Zealy Quest Prize Fund active</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="flex flex-col flex-no wrap lg:table-row border-b border-[#00000042]">
                    <td class="py-2 px-4">
                      <h1 className="text-[22px] font-bold text-center">
                        Wed 8 November
                      </h1>
                    </td>
                    <td class="py-2 px-4">
                      {" "}
                      <div className="text-[22px] font-normal max-w-xl mb-4">
                        <p>All Practice Trades reset</p>
                        <p> 1,000 FreeKiX reset in all wallets</p>
                      </div>
                    </td>
                  </tr>

                  <tr className="flex flex-col flex-no wrap lg:table-row border-b border-[#00000042]">
                    <td class="py-2 px-4">
                    <h1 className="text-[22px] font-bold text-center">Fri 10 November</h1>
                    </td>
                    <td class="py-2 px-4">
                      {" "}
                      <div className="text-[22px] font-normal max-w-xl mb-4">
                <p>KiX Trade-athon Begins</p>
                <p>Live Trading & Game Group Winnings</p>
                <p> 900,000 $KiX Trading Prize Fund active</p>
                <p>1,000,000 $KiX Zealy Quest Prize Fund continues</p>
              </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="https://docs.google.com/document/d/1GKZVvKESnomDOAVn-w6a6SbojloBdX6ZduWteLmIbuQ/edit">
            <p className="text-[#FFC200] text-xl text-center">
              Terms & Conditions
            </p>
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
