import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Rewards from "./components/Rewards"
import About from "./components/About"
import Getstarted from "./components/Getstarted"

function App() {


  return (
    <>
     <Hero/>
     <div className="py-10">
      <About/>

     </div>
     <div className="py-10">
    <Rewards/>

     </div>

     <div className="py-10">
   <Getstarted/>

     </div>

     <div className="py-10">
   <Footer/>

     </div>

    </>
  )
}

export default App
