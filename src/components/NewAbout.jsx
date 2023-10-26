import React from "react";

function NewAbout() {
  return (
    <section className=" mt-8 sm:mt-8">
      <div>
        <img src="images/logo-about.png" alt="" className="mx-auto" />
      </div>
      <div className=" text-center relative z-10">
        <h1 className=" text-2xl sm:text-4xl font-extrabold text pt-4  sm:pt-8">
          KiX TRADE-ATHON
        </h1>

        <p className=" text-base sm:text-[22px] font-normal sm:max-w-4xl w-[90%] sm:w-full mx-auto mt-7 lh-1_4">
          <strong>KiX Trade-athon</strong> is starting soon and YOU can claim
          1,000 FreeKiX game tokens NOW so you’re ready to{" "}
          <strong>play for a share of 1 MILLION real $KiX</strong>
          on the{" "}
          <strong>
            World’s Most Advanced Fantasy Football Trading Exchange
          </strong>{" "}
          .
        </p>
      </div>
      <div className="mt-4 sm:mt-16 text-center relative z-10">
        <img
          src="images/kick-t.png"
          alt=""
          className=" absolute top-0 z-0 center-div2 opacity-[0.23] "
        />
        <div>
          <h1 className=" text-2xl sm:text-4xl font-extrabold text pt-10">
            ABOUT KiX
          </h1>

          <p className=" text-base sm:text-[22px] font-normal sm:max-w-5xl w-[90%] sm:w-full mx-auto mt-7 lh-1_4 ">
            Do you love crypto, trading and sports, but want something SIMPLE &
            FUN? Then welcome to KiX, a Football DEX where traders can buy and
            sell tokens representing the world's most exciting football stars
            and earn winnings based on their real-world match performances. KiX
            is Alpha Testing on the Polygon Testnet NOW.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewAbout;
