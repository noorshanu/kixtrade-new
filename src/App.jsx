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
      <div className=" py-4 sm:py-10">
      <NewAbout/>
      </div>
      <div className="py-4 sm:py-10">
        <Rewards />
      </div>

      <div className="py-4 sm:py-10">
        <Getstarted />
      </div>
      <Test />

      <div className="py-4 sm:py-10">
        <Footer />
      </div>
    </>
  );
}

export default App;
