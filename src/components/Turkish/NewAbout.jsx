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
          <strong>KiX Trade-athon</strong> yakında başlıyor ve ŞİMDİ 1.000 FreeKiX oyun tokeni talep edebilirsiniz, böylece{" "}
          <strong>Dünyanın En Gelişmiş Fantezi Futbol Ticaret Borsasında 1 MİLYON gerçek $KiX'ten</strong> pay almak için oynamaya hazırsınız?
        </p>
      </div>
      <div className="mt-4 sm:mt-16 text-center relative z-10">
        <img
          src="images/kick-t.png"
          alt=""
          className=" absolute top-0 z-0 center-div2  "
        />
        <div>
          <h1 className=" text-2xl sm:text-4xl font-extrabold text pt-10">
          KiX Hakkında
          </h1>

          <p className=" text-base sm:text-[22px] font-normal sm:max-w-5xl w-[90%] sm:w-full mx-auto mt-7 lh-1_4 ">
          Kriptoyu, ticareti ve sporu seviyorsunuz ve BASİT VE EĞLENCELİ bir şey mi arıyorsunuz? 
O zaman yatırımcıların dünyanın en heyecan verici futbol yıldızlarını temsil eden tokenları alıp satabilecekleri ve gerçek dünyadaki maç performanslarına göre kazanç elde edebilecekleri bir Futbol DEX'i olan KiX'e hoş geldiniz. KiX Şu Anda Polygon Testnet'te Alfa Testinde.

          </p>
        </div>
      </div>
    </section>
  );
}

export default NewAbout;
