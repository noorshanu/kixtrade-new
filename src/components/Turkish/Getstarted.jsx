import React from "react";

function Getstarted() {
  return (
    <section className=" mt-6 sm:mt-8">
      <div className="container-wrapper">
        <div className=" text-center" id="hithere">
          <h1 className=" text-2xl sm:text-4xl font-extrabold mb-4 ">
          Başlamanın 2 Yolu Var!
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
                  <span className=" font-bold">Şimdi doğrudan KiX Test Platformuna </span> <br />{" "}
                  tiklayin ve kaydolmak ve nasıl oynandığını öğrenmek için  <span className=" font-bold">FAQs</span>  'lerimizi kullanın. Daha önceki testlerimizin bir parçası olduysanız ve zaten kayıtlıysanız bunu tercih edebilirsiniz.
                </p>

                <div className=" mt-6">
                  <a
                    href="https://test.kix.digital" target="_blank"
                    className=" bg-grad2 text-2xl font-bold px-10 py-2 flex justify-end gap-2 items-center w-[220px] text-center ml-auto"
                  >
                    {" "}
                    <span className="text-[#FFC200]">Buraya </span> Girin
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
                 
                  Kayıt sırasında rehberlik almak VE Kazanma şansınızı artıracak XP kazanmak için KiX 
                  <span className=" font-bold">Zealy Görev Yöneticisini</span> kullanın!
                </p>

                <div className=" mt-14">
                  <a
                href="https://zealy.io/c/kixdigital" target="_blank"
                    className=" bg-grad2 text-2xl font-bold px-10 py-2 flex justify-end items-center w-[220px] gap-2 text-center ml-auto"
                  >
                    {" "}
                    <span className="text-[#FFC200]">Buraya</span> Girin

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
