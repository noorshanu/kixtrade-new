import React from "react";

function Test() {
  return (
    <section className=" relative  w-full  h-full mt-8 sm:mt-8">
      <div className="container-wrapper">
        <div className=" text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text pt-4  sm:pt-8 pb-7">
            Ticaret-athonu Katılım Zamanları
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
                        23 Ekim Salı
                      </h1>
                    </td>
                    <td class="py-2 px-4">
                      <div className=" text-base text-[22px] font-normal max-w-2xl mb-4 pr-2">
                        <p>
                          İlk katılım - doğrudan KiX Test Sitesinde veya Zealy
                          aracılığıyla
                        </p>
                        <p> Kaydı tamamlayan herkes için 1.000 FreeKiX</p>
                        <p>Pratik Ticaret mevcut</p>
                        <p>100.000 $KiX Zealy Quest Ödül Fonu aktif</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="flex flex-col flex-no wrap lg:table-row border-b border-[#00000042]">
                    <td class="py-2 px-4">
                      <h1 className="text-[22px] font-bold text-center">
                        8 Kasım Çarşamba
                      </h1>
                    </td>
                    <td class="py-2 px-4">
                      {" "}
                      <div className=" text-base text-[22px] font-normal max-w-xl mb-4">
                        <p>Tüm Pratik İşlemler sıfırlandı</p>
                        <p> Tüm cüzdanlarda 1.000 FreeKiX sıfırlanır</p>
                      </div>
                    </td>
                  </tr>

                  <tr className="flex flex-col flex-no wrap lg:table-row border-b border-[#00000042]">
                    <td class="py-2 px-4">
                      <h1 className="text-[22px] font-bold text-center">
                        10 Kasım Cuma
                      </h1>
                    </td>
                    <td class="py-2 px-4">
                      {" "}
                      <div className=" text-base text-[22px] font-normal max-w-xl mb-4">
                        <p>KiX Ticaret-athonu Başlıyor</p>
                        <p>Canlı Ticaret ve Oyun Grubu Kazançları</p>
                        <p>900,000 $KiX Ticaret Ödül Fonu aktif</p>
                        <p>100.000 $KiX Zealy Quest Ödül Fonu devam ediyor</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <a href="https://docs.google.com/document/d/1GKZVvKESnomDOAVn-w6a6SbojloBdX6ZduWteLmIbuQ/edit">
              <p className="text-[#FFC200] text-xl text-center">
                Hükümler ve Koşullar.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
