import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Rewards from "./components/Rewards";

import Getstarted from "./components/Getstarted";
import Test from "./components/Test";

import NewAbout from "./components/NewAbout";

function App() {
  return (
    <>
      <Hero />
      <div className=" py-4 sm:py-2">
      <NewAbout/>
      </div>
      <div className="py-4 sm:py-2">
        <Rewards />
      </div>

      <div className="py-0 sm:py-2">
        <Getstarted />
      </div>
      <div className="text-center mb-8 ">
            <h2 className=" text-3xl font-extrabold uppercase sm:mt-0 mt-8"> MAKE YOUR CHOICE!</h2>
        </div>
      <Test />

      <div className="py-7 sm:py-2">
        <Footer />
      </div>
    </>
  );
}

export default App;
